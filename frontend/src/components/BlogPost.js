import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const backendUrl = process.env.REACT_APP_BACKEND_URL || '';

  useEffect(() => {
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/posts/slug/${slug}`);
      setPost(response.data);
    } catch (err) {
      setError('Post não encontrado');
      console.error('Error loading post:', err);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-300">Carregando...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post não encontrado</h1>
          <Link to="/postagens" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            Voltar ao blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header with back button */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/postagens" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
          data-testid="back-to-blog-link"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar ao blog
        </Link>
      </div>

      {/* Blog Post Content */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
          {/* Post Header */}
          <header className="mb-12">
            <time className="text-sm text-gray-500 dark:text-gray-400 mb-4 block" data-testid="post-date">
              {post.date}
            </time>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6" data-testid="post-title">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2" data-testid="post-tags">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
                  data-testid={`post-tag-${index}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none" data-testid="post-content">
            {post.content.map((section, index) => (
              <section key={index} className="mb-10" data-testid={`post-section-${index}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

              {/* Back to blog link at bottom */}
              <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link 
                  to="/postagens" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  data-testid="back-to-blog-bottom-link"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Voltar ao blog
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4" data-testid="author-sidebar">
              <div className="sticky top-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
                  {/* Author Photo */}
                  <div className="flex justify-center mb-4">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_site-checker-21/artifacts/mlek659p_image.png" 
                      alt="Cudigia C.F.F. Quinau" 
                      className="w-24 h-24 rounded-full object-cover shadow-md"
                      data-testid="author-photo"
                    />
                  </div>
                  
                  {/* Author Name */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2" data-testid="author-name">
                    Cudigia C.F.F. Quinau
                  </h3>
                  
                  {/* Author Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6" data-testid="author-description">
                    Desenvolvedor com formação em Informática, focado em Desenvolvimento Desktop e Análise de Sistemas.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-4" data-testid="social-links">
                    <a 
                      href="https://github.com/DevBanza" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      data-testid="github-link"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/cudigia-quinau-8a642b7b/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      data-testid="linkedin-link"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.threads.com/@k_banza8" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      data-testid="threads-link"
                      aria-label="Threads"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142l-.126.742a12.967 12.967 0 00-2.787-.124c-1.21.067-2.162.414-2.833.991-.663.571-.987 1.328-.935 2.186.048.789.45 1.472 1.16 1.974.646.458 1.511.67 2.426.621 1.19-.064 2.06-.491 2.668-1.309.541-.725.832-1.71.865-2.928-1.654-.647-3.539-.874-5.606-.67-1.962.194-3.638.845-4.842 1.885-1.26 1.088-1.933 2.53-1.886 4.055.044 1.444.663 2.723 1.786 3.698 1.13 1.008 2.7 1.571 4.547 1.632 2.047.067 3.654-.551 4.777-1.838 1.01-1.158 1.57-2.82 1.668-4.938.114-.066.225-.137.333-.213 1.184-.83 1.916-2.016 2.178-3.528.246-1.42.066-2.907-.535-4.422-.593-1.497-1.519-2.719-2.757-3.628-1.277-.938-2.824-1.412-4.6-1.41z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      data-testid="email-link"
                      aria-label="Email"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400" data-testid="footer-text">
          © 2025 Cudigia C.F.F. Quinau. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default BlogPost;