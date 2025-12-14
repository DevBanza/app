import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      id: 1,
      date: 'Julho 31, 2021',
      title: 'Implantação de um Ambiente Virtual Cliente/Servidor',
      tags: ['#linux', '#virtualização', '#servidor', '#cliente-servidor'],
      slug: 'implantacao-ambiente-virtual-cliente-servidor',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800'
    },
    {
      id: 2,
      date: 'Dezembro 15, 2024',
      title: 'Como criar aplicações desktop modernas',
      tags: ['#desktop', '#desenvolvimento'],
      slug: 'criar-aplicacoes-desktop-modernas',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
    },
    {
      id: 2,
      date: 'Dezembro 10, 2024',
      title: 'Análise de sistemas: Melhores práticas',
      tags: ['#analise', '#sistemas'],
      slug: 'analise-sistemas-melhores-praticas',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'
    },
    {
      id: 3,
      date: 'Dezembro 5, 2024',
      title: 'Introdução ao desenvolvimento full-stack',
      tags: ['#fullstack', '#web'],
      slug: 'introducao-desenvolvimento-fullstack',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800'
    },
    {
      id: 4,
      date: 'Novembro 28, 2024',
      title: 'Design patterns em programação orientada a objetos',
      tags: ['#oop', '#patterns'],
      slug: 'design-patterns-poo',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800'
    },
    {
      id: 5,
      date: 'Novembro 20, 2024',
      title: 'Otimização de performance em aplicações',
      tags: ['#performance', '#otimizacao'],
      slug: 'otimizacao-performance-aplicacoes',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    },
    {
      id: 6,
      date: 'Novembro 15, 2024',
      title: 'Testes automatizados: Por onde começar',
      tags: ['#testes', '#qa'],
      slug: 'testes-automatizados-comecar',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800'
    },
    {
      id: 7,
      date: 'Novembro 8, 2024',
      title: 'Arquitetura de software: Conceitos fundamentais',
      tags: ['#arquitetura', '#software'],
      slug: 'arquitetura-software-conceitos',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800'
    },
    {
      id: 8,
      date: 'Novembro 1, 2024',
      title: 'Git e GitHub: Guia completo para iniciantes',
      tags: ['#git', '#versionamento'],
      slug: 'git-github-guia-iniciantes',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800'
    },
    {
      id: 9,
      date: 'Outubro 25, 2024',
      title: 'APIs RESTful: Construindo serviços escaláveis',
      tags: ['#api', '#rest'],
      slug: 'apis-restful-servicos-escalaveis',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800'
    },
    {
      id: 10,
      date: 'Outubro 18, 2024',
      title: 'Segurança em aplicações web',
      tags: ['#seguranca', '#web'],
      slug: 'seguranca-aplicacoes-web',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800'
    },
    {
      id: 11,
      date: 'Outubro 10, 2024',
      title: 'Banco de dados: SQL vs NoSQL',
      tags: ['#database', '#sql'],
      slug: 'banco-dados-sql-nosql',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800'
    },
    {
      id: 12,
      date: 'Outubro 3, 2024',
      title: 'Clean Code: Escrevendo código limpo e legível',
      tags: ['#cleancode', '#boas-praticas'],
      slug: 'clean-code-codigo-limpo',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'
    }
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-16" data-testid="blog-title">
            Blog
          </h1>
          
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