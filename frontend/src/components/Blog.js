import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const backendUrl = process.env.REACT_APP_BACKEND_URL || '';

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/posts`);
      setPosts(response.data);
    } catch (err) {
      setError('Erro ao carregar postagens');
      console.error('Error loading posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleDelete = async (postId) => {
    if (!window.confirm('Tem certeza que deseja deletar esta postagem?')) {
      return;
    }

    try {
      await axios.delete(`${backendUrl}/api/posts/${postId}`);
      loadPosts(); // Reload posts after deletion
    } catch (err) {
      alert('Erro ao deletar postagem');
      console.error('Error deleting post:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-300">Carregando postagens...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header with back button */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
          data-testid="back-to-home-link"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para home
        </Link>
      </div>

      {/* Blog Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white" data-testid="blog-title">
              Blog
            </h1>
            
            <Link
              to="/postagens/nova"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
              data-testid="create-post-button"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nova Postagem
            </Link>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg" data-testid="error-message">
              {error}
            </div>
          )}

          {posts.length === 0 && !error && (
            <div className="text-center py-12" data-testid="no-posts-message">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                Nenhuma postagem ainda.
              </p>
              <Link
                to="/postagens/nova"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                Criar primeira postagem
              </Link>
            </div>
          )}
          
          {/* Blog Posts List */}
          <div className="space-y-12">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0"
                data-testid={`blog-post-${post.id}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <time className="text-sm text-gray-500 dark:text-gray-400 mb-2 block" data-testid={`blog-post-date-${post.id}`}>
                      {post.date}
                    </time>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-testid={`blog-post-title-${post.id}`}>
                      <Link to={`/postagens/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="flex flex-wrap gap-2" data-testid={`blog-post-tags-${post.id}`}>
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
                          data-testid={`blog-post-tag-${post.id}-${index}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400" data-testid="footer-text">
          © 2025 Cudigia C.F.F. Quinau. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Blog;