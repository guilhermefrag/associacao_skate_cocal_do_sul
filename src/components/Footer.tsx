export function Footer(){
  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Associação de Skatistas de Cocal do Sul.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/skatecocaldosul/" className="text-white hover:text-gray-400 transition-colors duration-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}