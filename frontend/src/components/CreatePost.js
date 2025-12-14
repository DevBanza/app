import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function CreatePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: '',
    tags: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loadingPost, setLoadingPost] = useState(false);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || '';

  useEffect(() => {
    if (isEditMode) {
      loadPost();
    }
  }, [id]);

  const loadPost = async () => {
    setLoadingPost(true);
    try {
      const response = await axios.get(`${backendUrl}/api/posts/${id}`);
      const post = response.data;
      setFormData({
        title: post.title,
        content: post.content,
        image_url: post.image_url || '',
        tags: post.tags.join(', ')
      });
    } catch (err) {
      setError('Erro ao carregar postagem');
      console.error('Error loading post:', err);
    } finally {
      setLoadingPost(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Título e conteúdo são obrigatórios');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const postData = {
        title: formData.title,
        content: formData.content,
        image_url: formData.image_url || null,
        tags: tagsArray
      };

      if (isEditMode) {
        await axios.put(`${backendUrl}/api/posts/${id}`, postData);
      } else {
        await axios.post(`${backendUrl}/api/posts`, postData);
      }

      navigate('/postagens');
    } catch (err) {
      setError('Erro ao salvar postagem. Tente novamente.');
      console.error('Error saving post:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loadingPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-300">Carregando...</div>
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

      {/* Create/Edit Post Form */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8" data-testid="create-post-title">
            {isEditMode ? 'Editar Postagem' : 'Nova Postagem'}
          </h1>

          {error && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg" data-testid="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" data-testid="create-post-form">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Título *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Digite o título da postagem"
                required
                data-testid="title-input"
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Conteúdo *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="12"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                placeholder="Escreva o conteúdo da sua postagem..."
                required
                data-testid="content-input"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Escreva seu conteúdo em texto. Você pode adicionar parágrafos, listas e formatação básica.
              </p>
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image_url" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                URL da Imagem
              </label>
              <input
                type="url"
                id="image_url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="https://exemplo.com/imagem.jpg"
                data-testid="image-url-input"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Adicione a URL de uma imagem para ilustrar sua postagem (opcional)
              </p>
              
              {/* Image Preview */}
              {formData.image_url && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Preview:</p>
                  <img 
                    src={formData.image_url} 
                    alt="Preview" 
                    className="max-w-md rounded-lg shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                    data-testid="image-preview"
                  />
                </div>
              )}
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="react, javascript, web"
                data-testid="tags-input"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Separe as tags com vírgulas. Exemplo: #react, #javascript, #web
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6" data-testid="action-buttons">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors font-semibold"
                data-testid="submit-button"
              >
                {loading ? 'Salvando...' : (isEditMode ? 'Atualizar Postagem' : 'Publicar Postagem')}
              </button>
              
              <Link
                to="/postagens"
                className="px-8 py-3 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors font-semibold text-center"
                data-testid="cancel-button"
              >
                Cancelar
              </Link>
            </div>
          </form>
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

export default CreatePost;
