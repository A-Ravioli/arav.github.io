import './MainPage.css';

const Blog = () => {
  return (
    <div className="content">
      <h1 className="title">Blog</h1>
      
      <div className="blog-list">
        <article className="blog-post">
          <div className="post-date">March 26, 2024</div>
          <h2>Blog Post Title</h2>
          <p className="description">
            A brief excerpt from the blog post that gives readers an idea of what
            the article is about and entices them to read more.
          </p>
          <a href="#" className="read-more">Read more →</a>
        </article>

        <article className="blog-post">
          <div className="post-date">March 20, 2024</div>
          <h2>Another Blog Post</h2>
          <p className="description">
            Another interesting article about technology, development, or any other
            topic that you want to share with your readers.
          </p>
          <a href="#" className="read-more">Read more →</a>
        </article>
      </div>
    </div>
  );
};

export default Blog; 