export function About() {
  return (
    <div className="bg-gray-200 py-12 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Sobre</h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-8 text-center">
          A Associação de Skatistas de Cocal do Sul é uma comunidade apaixonada pelo skate. Nosso objetivo é promover o skate como uma forma de expressão, cultura e esporte em nossa cidade.
        </p>
        <p className="text-lg lg:text-xl text-gray-700 mb-8 text-center">
          Se você é um skatista ou tem interesse em aprender a andar de skate, junte-se a nós! Temos encontros regulares, sessões de skate em diferentes locais e oferecemos suporte para skatistas de todos os níveis, desde iniciantes até profissionais.
        </p>
        <p className="text-lg lg:text-xl text-gray-700 mb-8 text-center">
          Faça parte da nossa associação e tenha a oportunidade de se conectar com outros skatistas, participar de eventos exclusivos, compartilhar conhecimentos e contribuir para o crescimento do skate em Cocal do Sul.
        </p>
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScEsKcJ7poT0y64TFfrsDxG5u3K6ncB0wbLmaLf8n4gqkLVng/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Junte-se a nós
          </a>
        </div>
      </div>
    </div>
  );
}

