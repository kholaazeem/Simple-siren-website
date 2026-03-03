import React from 'react';
import { Link } from 'react-router-dom'; // Link import karna zaroori hai

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Engineering',
      date: 'Feb 20, 2026',
      title: 'Why Simple Siren Chose Eco-Friendly Consensus',
      excerpt: "We broke down the tradeoffs and landed on a proof-of-stake model that's 99% more energy efficient."
    },
    {
      id: 2,
      category: 'Product',
      date: 'Feb 15, 2026',
      title: 'Introducing Siren Swap: Frictionless Token Exchange',
      excerpt: "Swap tokens in under 3 seconds with zero hidden fees. Here's how we built it."
    },
    {
      id: 3,
      category: 'Community',
      date: 'Feb 10, 2026',
      title: 'Our Community Hit 100K Users 🎉',
      excerpt: "A heartfelt thank you and a look at what's coming next for Simple Siren."
    },
    {
      id: 4,
      category: 'Design',
      date: 'Feb 5, 2026',
      title: 'Designing for Trust: Our UX Philosophy',
      excerpt: "How we make blockchain feel safe and approachable through thoughtful design decisions."
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
        <h1 className="display-5 fw-bold text-dark mb-3" style={{ letterSpacing: '-1px' }}>
          The <span style={{ color: '#FFD700' }}>Blog</span>
        </h1>
        <p className="fs-5 text-secondary">
          Stories, updates, and ideas from the Simple Siren team.
        </p>
      </div>

      {/* Blog Cards List */}
      <div className="mx-auto" style={{ maxWidth: '850px' }}>
        <div className="d-flex flex-column gap-4">
          
          {blogPosts.map((post) => (
            // <a> ki jagah <Link> use kiya hai jo /blog/1 etc. par le jaye ga
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="blog-card text-decoration-none"
            >
              
              <div className="d-flex justify-content-between align-items-center gap-4">
                
                {/* Left Side: Content */}
                <div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="blog-badge">{post.category}</span>
                    <span className="text-secondary" style={{ fontSize: '13px', fontWeight: '500' }}>
                      {post.date}
                    </span>
                  </div>
                  
                  <h4 className="blog-title fw-bold mb-2" style={{ fontSize: '20px' }}>
                    {post.title}
                  </h4>
                  
                  <p className="text-secondary mb-0" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    {post.excerpt}
                  </p>
                </div>

                {/* Right Side: Arrow Icon */}
                <div className="blog-arrow flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Blog;