import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Projects from './components/Projects';
import About from './components/About';

function Home() {
  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria de impressão.',
      link: '#',
      image: 'https://cudigiaquinau.netlify.app/imagem/chat_server_cloud_messages_icon_179422.svg'
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria de impressão.',
      link: '#',
      image: 'https://cudigiaquinau.netlify.app/imagem/chat_server_cloud_messages_icon_179422.svg'
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria de impressão.',
      link: '#',
      image: 'https://cudigiaquinau.netlify.app/imagem/chat_server_cloud_messages_icon_179422.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6" data-testid="hero-title">
            Eu sou Cudigia C.F.F. Quinau
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed" data-testid="hero-description">
            Com formação em Informática e foco em Desenvolvimento Desktop, bem como Análise e Desenvolvimento de Sistemas, 
            estou embarcando em uma jornada emocionante para transformar códigos em soluções inovadoras.
          </p>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-16" data-testid="navigation-links">
            <a 
              href="#contrate" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
              data-testid="hire-me-link"
            >
              Me contrate
            </a>
            <a 
              href="#projetos" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
              data-testid="projects-link"
            >
              Meus projetos
            </a>
            <Link 
              to="/postagens" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
              data-testid="posts-link"
            >
              Postagens
            </Link>
            <a 
              href="#sobre" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
              data-testid="about-link"
            >
              Sobre
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="container mx-auto px-4 py-16 md:py-24" data-testid="projects-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center" data-testid="projects-heading">
            Projetos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                data-testid={`project-card-${project.id}`}
              >
                <div className="p-8 flex flex-col items-center">
                  <div className="mb-6 w-24 h-24 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain"
                      data-testid={`project-image-${project.id}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <a 
                    href={project.link} 
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                    data-testid={`project-link-${project.id}`}
                  >
                    Visitar
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postagens" element={<Blog />} />
          <Route path="/postagens/:slug" element={<BlogPost />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;