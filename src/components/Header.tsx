export default function Header() {
  return (
    <div>
      <header className="font-title">
        <nav className="bg-black flex flex-wrap justify-center items-center text-center">
          <div className="w-full md:w-auto">
            <img
              src="./src/images/associacao_skate_logo.jpg"
              alt="instagram"
              className="w-full h-auto md:h-[25vw] lg:h-[20vw]"
            />
          </div>
          <div className="w-full mt-4 md:w-auto">
            <h1 className="text-2xl text-white lg:text-[3vw] md:text-[4vw]">
              Associação de Skatistas de Cocal do Sul
            </h1>
            <button className="bg-green-500 w-[60%] md:w-[30%] lg:w-[18vw] h-[12vw] md:h-[4vw] lg:h-[3vw] rounded mt-4 lg:hover:scale-110 duration-300">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScEsKcJ7poT0y64TFfrsDxG5u3K6ncB0wbLmaLf8n4gqkLVng/viewform"
                target="_blank"
                className="text-lg align-middle lg:text-[2vw] md:text-[2vw]"
              >
                Faça Parte
              </a>
            </button>
            <div className="bg-black h-16"></div>
          </div>
        </nav>
      </header>
    </div>
  );
}
