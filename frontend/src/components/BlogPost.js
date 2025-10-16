import React from 'react';
import { Link, useParams } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams();

  // Database de posts completos
  const postsContent = {
    'criar-aplicacoes-desktop-modernas': {
      title: 'Como criar aplicações desktop modernas',
      date: 'Dezembro 15, 2024',
      tags: ['#desktop', '#desenvolvimento'],
      content: [
        {
          type: 'section',
          title: 'TL;DR',
          content: 'Aplicações desktop modernas combinam a robustez de tecnologias nativas com a flexibilidade de frameworks web. Electron, Tauri e Flutter são as principais opções para criar aplicações multiplataforma eficientes e bonitas.'
        },
        {
          type: 'section',
          title: 'Por que desenvolver aplicações desktop?',
          content: 'Apesar do crescimento das aplicações web, apps desktop ainda são essenciais para tarefas que exigem acesso direto ao sistema, melhor performance ou funcionamento offline. Editores de código como VS Code, ferramentas de design como Figma Desktop e aplicativos de comunicação como Slack provam que desktop ainda é relevante.'
        },
        {
          type: 'section',
          title: 'Principais frameworks',
          content: 'Electron permite criar apps desktop usando HTML, CSS e JavaScript. Tauri é uma alternativa mais leve que usa Rust. Flutter Desktop oferece performance nativa com uma única base de código. Cada um tem seus trade-offs entre facilidade de uso, tamanho do executável e performance.'
        },
        {
          type: 'section',
          title: 'Boas práticas',
          content: 'Sempre pense na experiência do usuário: atualizações automáticas, instalação simples, integração com o sistema operacional. Otimize o consumo de memória e CPU. Implemente testes automatizados desde o início. E documente bem sua aplicação para facilitar manutenção futura.'
        }
      ]
    },
    'analise-sistemas-melhores-praticas': {
      title: 'Análise de sistemas: Melhores práticas',
      date: 'Dezembro 10, 2024',
      tags: ['#analise', '#sistemas'],
      content: [
        {
          type: 'section',
          title: 'TL;DR',
          content: 'A análise de sistemas é fundamental para o sucesso de qualquer projeto de software. Envolve entender requisitos, modelar soluções e garantir que o sistema atenda às necessidades dos usuários e do negócio.'
        },
        {
          type: 'section',
          title: 'O que é análise de sistemas?',
          content: 'Análise de sistemas é o processo de estudar um sistema existente ou proposto para identificar seus objetivos, componentes e requisitos. É a ponte entre o problema de negócio e a solução técnica. Um bom analista de sistemas precisa entender tanto de tecnologia quanto de negócios.'
        },
        {
          type: 'section',
          title: 'Levantamento de requisitos',
          content: 'O levantamento de requisitos é uma das etapas mais críticas. Use entrevistas, questionários e observação direta. Documente requisitos funcionais (o que o sistema faz) e não-funcionais (como o sistema faz). Sempre valide os requisitos com stakeholders antes de prosseguir.'
        },
        {
          type: 'section',
          title: 'Modelagem de sistemas',
          content: 'Use diagramas UML para visualizar a estrutura e comportamento do sistema. Diagramas de caso de uso mostram interações com usuários. Diagramas de classes representam a estrutura de dados. Diagramas de sequência ilustram fluxos de processos. Ferramentas como Lucidchart e Draw.io facilitam esse trabalho.'
        },
        {
          type: 'section',
          title: 'Validação contínua',
          content: 'Não espere até o final do projeto para validar. Faça revisões incrementais com stakeholders. Use protótipos para validar ideias rapidamente. Mantenha a documentação atualizada. E sempre esteja aberto a feedback e mudanças - sistemas são organismos vivos.'
        }
      ]
    },
    'introducao-desenvolvimento-fullstack': {
      title: 'Introdução ao desenvolvimento full-stack',
      date: 'Dezembro 5, 2024',
      tags: ['#fullstack', '#web'],
      content: [
        {
          type: 'section',
          title: 'TL;DR',
          content: 'Desenvolvimento full-stack significa dominar tanto frontend (interface do usuário) quanto backend (servidor e banco de dados). Um desenvolvedor full-stack pode construir uma aplicação web completa do zero.'
        },
        {
          type: 'section',
          title: 'O que é full-stack?',
          content: 'Full-stack se refere ao conjunto completo de tecnologias necessárias para criar uma aplicação web. Isso inclui frontend (HTML, CSS, JavaScript, React, Vue), backend (Node.js, Python, Java) e banco de dados (PostgreSQL, MongoDB). Um desenvolvedor full-stack não precisa ser expert em tudo, mas deve ter conhecimento sólido em todas as camadas.'
        },
        {
          type: 'section',
          title: 'Frontend moderno',
          content: 'O frontend mudou muito nos últimos anos. Frameworks como React, Vue e Angular dominam o mercado. Tailwind CSS revolucionou a forma de estilizar. TypeScript adicionou tipagem estática ao JavaScript. E ferramentas como Vite tornaram o desenvolvimento mais rápido e eficiente.'
        },
        {
          type: 'section',
          title: 'Backend e APIs',
          content: 'No backend, você precisa entender servidores, APIs REST ou GraphQL, autenticação e autorização. Node.js com Express ou Fastify é popular para JavaScript. Python tem FastAPI e Django. Aprenda sobre middlewares, validação de dados e segurança de APIs.'
        },
        {
          type: 'section',
          title: 'Bancos de dados',
          content: 'Escolha entre SQL (PostgreSQL, MySQL) para dados estruturados ou NoSQL (MongoDB, Redis) para dados flexíveis. Entenda modelagem de dados, índices, queries eficientes e transações. ORMs como Prisma e Mongoose facilitam a interação com bancos de dados.'
        },
        {
          type: 'section',
          title: 'Por onde começar?',
          content: 'Comece com um projeto simples: uma lista de tarefas ou blog pessoal. Use React no frontend, Node.js no backend e MongoDB para dados. Suba seu projeto no GitHub. Deploy na Vercel (frontend) e Railway (backend). E continue praticando - full-stack se aprende fazendo.'
        }
      ]
    },
    'design-patterns-poo': {
      title: 'Design patterns em programação orientada a objetos',
      date: 'Novembro 28, 2024',
      tags: ['#oop', '#patterns'],
      content: [
        {
          type: 'section',
          title: 'TL;DR',
          content: 'Design patterns são soluções reutilizáveis para problemas comuns em desenvolvimento de software. Os padrões Gang of Four (GoF) são divididos em três categorias: criacionais, estruturais e comportamentais.'
        },
        {
          type: 'section',
          title: 'O que são design patterns?',
          content: 'Design patterns são templates de soluções para problemas recorrentes no design de software. Eles não são código pronto, mas sim descrições de como resolver um problema de forma elegante e reutilizável. Foram popularizados pelo livro "Design Patterns: Elements of Reusable Object-Oriented Software" dos Gang of Four.'
        },
        {
          type: 'section',
          title: 'Padrões criacionais',
          content: 'Singleton garante que uma classe tenha apenas uma instância. Factory Method cria objetos sem especificar suas classes exatas. Builder constrói objetos complexos passo a passo. Prototype clona objetos existentes. Abstract Factory cria famílias de objetos relacionados.'
        },
        {
          type: 'section',
          title: 'Padrões estruturais',
          content: 'Adapter converte a interface de uma classe em outra. Decorator adiciona funcionalidades a objetos dinamicamente. Facade fornece uma interface simplificada para um sistema complexo. Proxy controla o acesso a um objeto. Composite organiza objetos em estruturas de árvore.'
        },
        {
          type: 'section',
          title: 'Padrões comportamentais',
          content: 'Observer define dependências entre objetos para notificações automáticas. Strategy encapsula algoritmos intercambiáveis. Command encapsula requisições como objetos. Iterator percorre elementos de uma coleção. State permite que um objeto altere seu comportamento quando seu estado muda.'
        },
        {
          type: 'section',
          title: 'Quando usar?',
          content: 'Não force o uso de patterns. Use-os quando o problema realmente exigir. Patterns adicionam complexidade - certifique-se de que o benefício justifica. Comece com código simples e refatore para patterns quando necessário. E sempre priorize código legível sobre código "inteligente".'
        }
      ]
    }
  };

  const post = postsContent[slug];

  // Se o post não existir, mostra mensagem
  if (!post) {
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
                      href="#" 
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      data-testid="github-link"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      data-testid="linkedin-link"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      data-testid="twitter-link"
                      aria-label="Twitter"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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