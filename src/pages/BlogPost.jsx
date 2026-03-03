import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  // useParams humein URL se ID nikal kar deta hai (jaise /blog/1 se '1' mil jayega)
  const { id } = useParams();

  return (
    <div className="container text-center" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh' }}>
      
      {/* Yeh sirf check karne ke liye hai ke ID theek pass ho rahi hai */}
      <div className="mb-5">
        <span className="badge bg-warning text-dark px-3 py-2 fs-6 rounded-pill mb-4">
          Reading Blog ID: {id}
        </span>
        <h1 className="display-4 fw-bold text-dark">
          Awesome Blog Content for Post {id}
        </h1>
        <p className="lead text-secondary mt-4 mx-auto" style={{ maxWidth: '700px' }}>
          Yahan par aapke poore blog ka actual text, images aur details aayengi. Real projects mein hum ye data ID ke zariye database (jaise Firebase ya Supabase) se fetch karte hain.
        </p>
      </div>

      <Link to="/blog" className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold">
        ← Back to all blogs
      </Link>
      
    </div>
  );
};

export default BlogPost;