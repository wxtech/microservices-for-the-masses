package org.jhipster.web.rest;

import org.jhipster.BlogApp;
import org.jhipster.domain.Blog;
import org.jhipster.repository.BlogRepository;
import org.jhipster.repository.UserRepository;
import org.jhipster.repository.search.BlogSearchRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the BlogResource REST controller.
 *
 * @see BlogResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = BlogApp.class)
@WithMockUser
public class BlogResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_HANDLE = "AAAAAAAAAA";
    private static final String UPDATED_HANDLE = "BBBBBBBBBB";

    @Inject
    private BlogRepository blogRepository;

    @Inject
    private BlogSearchRepository blogSearchRepository;

    @Inject
    private UserRepository userRepository;

    @Inject
    private EntityManager em;

    @Inject
    private WebApplicationContext context;

    private MockMvc restBlogMockMvc;

    private Blog blog;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        BlogResource blogResource = new BlogResource();
        ReflectionTestUtils.setField(blogResource, "blogSearchRepository", blogSearchRepository);
        ReflectionTestUtils.setField(blogResource, "blogRepository", blogRepository);
        this.restBlogMockMvc = MockMvcBuilders.webAppContextSetup(context)
            .apply(springSecurity()).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Blog createEntity(EntityManager em) {
        Blog blog = new Blog()
            .name(DEFAULT_NAME)
            .handle(DEFAULT_HANDLE);
        return blog;
    }

    @Before
    public void initTest() {
        blogSearchRepository.deleteAll();
        blog = createEntity(em);
        blog.setUser(userRepository.findOneByLogin("user").get());
    }

    @Test
    @Transactional
    public void createBlog() throws Exception {
        int databaseSizeBeforeCreate = blogRepository.findAll().size();

        // Create the Blog
        restBlogMockMvc.perform(post("/api/blogs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(blog)))
            .andExpect(status().isCreated());

        // Validate the Blog in the database
        List<Blog> blogs = blogRepository.findAll();
        assertThat(blogs).hasSize(databaseSizeBeforeCreate + 1);
        Blog testBlog = blogs.get(blogs.size() - 1);
        assertThat(testBlog.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testBlog.getHandle()).isEqualTo(DEFAULT_HANDLE);

        // Validate the Blog in ElasticSearch
        Blog blogEs = blogSearchRepository.findOne(testBlog.getId());
        assertThat(blogEs).isEqualToComparingFieldByField(testBlog);
    }

    @Test
    @Transactional
    public void checkNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = blogRepository.findAll().size();
        // set the field null
        blog.setName(null);

        // Create the Blog, which fails.

        restBlogMockMvc.perform(post("/api/blogs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(blog)))
            .andExpect(status().isBadRequest());

        List<Blog> blogs = blogRepository.findAll();
        assertThat(blogs).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkHandleIsRequired() throws Exception {
        int databaseSizeBeforeTest = blogRepository.findAll().size();
        // set the field null
        blog.setHandle(null);

        // Create the Blog, which fails.

        restBlogMockMvc.perform(post("/api/blogs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(blog)))
            .andExpect(status().isBadRequest());

        List<Blog> blogs = blogRepository.findAll();
        assertThat(blogs).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllBlogs() throws Exception {
        // Initialize the database
        blogRepository.saveAndFlush(blog);

        // Get all the blogs
        restBlogMockMvc.perform(get("/api/blogs?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(blog.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].handle").value(hasItem(DEFAULT_HANDLE.toString())));
    }

    @Test
    @Transactional
    public void getBlog() throws Exception {
        // Initialize the database
        blogRepository.saveAndFlush(blog);

        // Get the blog
        restBlogMockMvc.perform(get("/api/blogs/{id}", blog.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(blog.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()))
            .andExpect(jsonPath("$.handle").value(DEFAULT_HANDLE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingBlog() throws Exception {
        // Get the blog
        restBlogMockMvc.perform(get("/api/blogs/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateBlog() throws Exception {
        // Initialize the database
        blogRepository.saveAndFlush(blog);
        blogSearchRepository.save(blog);
        int databaseSizeBeforeUpdate = blogRepository.findAll().size();

        // Update the blog
        Blog updatedBlog = blogRepository.findOne(blog.getId());
        updatedBlog
            .name(UPDATED_NAME)
            .handle(UPDATED_HANDLE);

        restBlogMockMvc.perform(put("/api/blogs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedBlog)))
            .andExpect(status().isOk());

        // Validate the Blog in the database
        List<Blog> blogs = blogRepository.findAll();
        assertThat(blogs).hasSize(databaseSizeBeforeUpdate);
        Blog testBlog = blogs.get(blogs.size() - 1);
        assertThat(testBlog.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testBlog.getHandle()).isEqualTo(UPDATED_HANDLE);

        // Validate the Blog in ElasticSearch
        Blog blogEs = blogSearchRepository.findOne(testBlog.getId());
        assertThat(blogEs).isEqualToComparingFieldByField(testBlog);
    }

    @Test
    @Transactional
    public void deleteBlog() throws Exception {
        // Initialize the database
        blogRepository.saveAndFlush(blog);
        blogSearchRepository.save(blog);
        int databaseSizeBeforeDelete = blogRepository.findAll().size();

        // Get the blog
        restBlogMockMvc.perform(delete("/api/blogs/{id}", blog.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate ElasticSearch is empty
        boolean blogExistsInEs = blogSearchRepository.exists(blog.getId());
        assertThat(blogExistsInEs).isFalse();

        // Validate the database is empty
        List<Blog> blogs = blogRepository.findAll();
        assertThat(blogs).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchBlog() throws Exception {
        // Initialize the database
        blogRepository.saveAndFlush(blog);
        blogSearchRepository.save(blog);

        // Search the blog
        restBlogMockMvc.perform(get("/api/_search/blogs?query=id:" + blog.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(blog.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].handle").value(hasItem(DEFAULT_HANDLE.toString())));
    }
}
