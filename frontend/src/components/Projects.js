import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestão Empresarial',
      description: 'Plataforma completa para gestão de processos empresariais com dashboards interativos, relatórios automáticos e integração com APIs externas.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      image: 'https://cudigiaquinau.netlify.app/imagem/chat_server_cloud_messages_icon_179422.svg'
    },
    {
      id: 2,
      title: 'Aplicativo Desktop de Produtividade',
      description: 'Ferramenta desktop para gerenciamento de tarefas e projetos com sincronização em nuvem e trabalho offline.',
      technologies: ['Electron', 'TypeScript', 'SQLite'],
      link: '#',
      image: 'https://cudigiaquinau.netlify.app/imagem/chat_server_cloud_messages_icon_179422.svg'
    },
    {
      id: 3,
      title: 'Portal de E-learning',
      description: 'Plataforma educacional com sistema de cursos online, avaliações automatizadas e acompanhamento de progresso do aluno.',
      technologies: ['React', 'FastAPI', 'PostgreSQL'],
      link: '#',
      image: 'https://cudigiaquinau.netlify.app/imagem/chat_server_cloud_messages_icon_179422.svg'
    },
    {
      id: 4,
      title: 'Sistema de Análise de Dados',
      description: 'Ferramenta para análise e visualização de grandes volumes de dados com gráficos interativos e exportação de relatórios.',
      technologies: ['Python', 'Pandas', 'Plotly'],
      link: '#',
      image: 'https://cudigiaquinau.netlify.app/imagem/chat_server_cloud_messages_icon_179422.svg'
    },
    {
      id: 5,
      title: 'API RESTful de Autenticação',
      description: 'Sistema robusto de autenticação e autorização com JWT, refresh tokens e integração com provedores OAuth.',
      technologies: ['Node.js', 'Express', 'JWT'],
      link: '#',
      image: 'https://cudigiaquinau.netlify.app/imagem/chat_server_cloud_messages_icon_179422.svg'
    },
    {
      id: 6,
      title: 'Dashboard Administrativo',
      description: 'Painel administrativo moderno com gestão de usuários, permissões, relatórios e configurações do sistema.',
      technologies: ['React', 'Tailwind', 'Redux'],
      link: '#',
      image: 'https://cudigiaquinau.netlify.app/imagem/chat_server_cloud_messages_icon_179422.svg'
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

      {/* Projects Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6" data-testid="projects-page-title">
            Meus Projetos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl" data-testid="projects-description">
            Confira alguns dos projetos que desenvolvi ao longo da minha carreira. Cada um deles representa um desafio único e uma oportunidade de aprendizado.
          </p>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                data-testid={`project-item-${project.id}`}
              >
                <div className="p-8 flex flex-col">
                  <div className="mb-6 w-24 h-24 mx-auto flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain"
                      data-testid={`project-item-image-${project.id}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" data-testid={`project-item-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow" data-testid={`project-item-description-${project.id}`}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6" data-testid={`project-item-technologies-${project.id}`}>
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        data-testid={`project-tech-${project.id}-${index}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-center"
                    data-testid={`project-item-link-${project.id}`}
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
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

export default Projects;