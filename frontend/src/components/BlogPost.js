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
        <div className="max-w-3xl mx-auto">
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