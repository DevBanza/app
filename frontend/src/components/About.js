import React from 'react';
import { Link } from 'react-router-dom';

function About() {
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

      {/* About Content */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-12" data-testid="about-title">
            Sobre Mim
          </h1>

          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12" data-testid="about-intro">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Olá, meu nome é <strong>Cudigia C.F.F. Quinau</strong>. Sou desenvolvedor com formação em Informática e especialização em Desenvolvimento Desktop e Análise de Sistemas.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Comecei minha jornada no mundo da programação explorando o desenvolvimento desktop, onde aprendi a criar aplicações robustas e eficientes. Com o tempo, expandi meus conhecimentos para desenvolvimento web e análise de sistemas, sempre buscando transformar códigos em soluções inovadoras que realmente fazem a diferença.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Atualmente, estou embarcando em uma jornada emocionante no universo do desenvolvimento full-stack, combinando minha experiência em desktop com as modernas tecnologias web.
            </p>
          </div>

          {/* Social Links */}
          <div className="mb-16" data-testid="social-links-section">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Me encontre online:</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                data-testid="github-link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                data-testid="linkedin-link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                data-testid="twitter-link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <section className="mb-16" data-testid="skills-section">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Sou bom em</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Programação</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Desenvolvimento de aplicações desktop com Electron e frameworks nativos</li>
                  <li>Desenvolvimento web full-stack com React e Node.js</li>
                  <li>Análise e modelagem de sistemas</li>
                  <li>Otimização de performance e profiling</li>
                  <li>Documentação de código e projetos</li>
                  <li>Aprendizado rápido de novas tecnologias</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Análise de Sistemas</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Levantamento e análise de requisitos</li>
                  <li>Modelagem de processos e dados</li>
                  <li>Design de arquitetura de sistemas</li>
                  <li>Documentação técnica e funcional</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="mb-16" data-testid="tech-stack-section">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Stack Atual</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL', 'Electron', 'FastAPI', 'Tailwind CSS', 'Git', 'Docker', 'REST APIs'].map((tech, index) => (
                <div 
                  key={index} 
                  className="px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center font-medium text-gray-700 dark:text-gray-300"
                  data-testid={`tech-item-${index}`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8" data-testid="contact-section">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Trabalhe Comigo</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Estou sempre aberto a novos desafios e oportunidades. Se você procura um desenvolvedor dedicado, comunicativo e com vontade de aprender, vamos conversar!
            </p>
            <a 
              href="#contrate" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              data-testid="hire-me-button"
            >
              Entre em Contato
            </a>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400" data-testid="footer-text">
          © 2025 Cudigia C.F.F. Quinau. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default About;