import React, { useState } from 'react';
import ProductPage from './components/ProductPage';
import { product } from './data/product';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#696969]">
      <header className="bg-[#696969] shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo e ícone do carrinho */}
            <div className="flex justify-start items-center">
              <span className="text-xl sm:text-2xl font-italic text-[#ffff] rounded-md px-2 sm:px-4 py-2 scale-105 ">TechStore</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" className="w-6 h-6 sm:w-8 sm:h-8 -ml-1 ">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium text-white hover:text-[#FF4500]">Home</a>
              <a href="#" className="text-base font-medium text-white hover:text-[#FF4500]">Produtos</a>
              <a href="#" className="text-base font-medium text-white hover:text-[#FF4500]">Ofertas</a>
              <a href="#" className="text-base font-medium text-white hover:text-[#FF4500]">Suporte</a>
            </nav>

            {/* Botões de autenticação Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-base font-medium text-white hover:text-[#FF4500]">Entrar</a>
              <a href="#" className="px-4 py-2 text-base font-medium text-white bg-[#FF4500] hover:bg-[#FF6347] rounded-md">
                Criar conta
              </a>
            </div>

            {/* Botão do menu mobile */}
            <button
              className="md:hidden rounded-md p-2 text-white hover:bg-[#FF4500]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* ... navegação desktop existente ... */}
          </div>

          {/* Menu mobile */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-[#696969] z-50 shadow-lg`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-[#FF4500]">Home</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-[#FF4500]">Produtos</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-[#FF4500]">Ofertas</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-[#FF4500]">Suporte</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-[#FF4500]">Entrar</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-white bg-[#FF4500] hover:bg-[#FF6347] rounded-md">Criar conta</a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-[#696969] rounded-lg shadow-xl">
          <ProductPage product={product} />
        </div>
      </main>

      <footer className="bg-[#696969] mt-8 sm:mt-16 border-t border-gray-600">
        <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Sobre</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Quem somos</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Trabalhe conosco</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Imprensa</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Atendimento</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Central de ajuda</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Devoluções</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Termos de uso</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Formas de pagamento</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Cartões de crédito</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Boleto</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Pix</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Siga-nos</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Facebook</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Instagram</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-[#FF4500]">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-600 pt-8">
            <p className="text-base text-gray-300 text-center">&copy; 2025 TechStore, Inc. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;