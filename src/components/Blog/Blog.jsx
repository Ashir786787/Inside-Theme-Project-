import "./Blog.css";
import blog1 from "../../assets/images/blog/blog1.jpg";
import blog2 from "../../assets/images/blog/blog2.jpg";
import blog3 from "../../assets/images/blog/blog3.jpg";

const posts = [
  {
    image: blog1,
    date: "15 July 2026",
    title: "Business Growth Strategies",
    description:
      "Discover practical strategies that help businesses expand and stay competitive in today's market."
  },
  {
    image: blog2,
    date: "22 July 2026",
    title: "Building Strong Teams",
    description:
      "Learn how effective collaboration and leadership can improve productivity and company culture."
  },
  {
    image: blog3,
    date: "30 July 2026",
    title: "Digital Transformation",
    description:
      "Explore how technology is changing the way organizations operate and serve customers."
  }
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="section-heading">
          <span>LATEST NEWS</span>
          <h2>From Our Blog</h2>
          <div className="divider"></div>
        </div>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div className="blog-card" key={index}>
              <img src={post.image} alt={post.title} />
              <div className="blog-content">
                <span>{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <a href="#">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
