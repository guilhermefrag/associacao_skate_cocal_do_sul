import { useState } from "react";
import pista_skate_cocal from "../images/pista_skate_cocal.jpeg";

export function LandPage() {
  return (
    <div className="bg-gray-200 py-12 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
          <img
            className="h-48 lg:h-[20vw] w-48 lg:w-[20vw] object-cover mb-8 lg:mb-0"
            src={pista_skate_cocal}
            alt="Pista de Skate Cocal do Sul"
          />
          <p className="text-lg lg:text-xl text-gray-700 text-center">
            A Pista de Skate de Cocal do Sul é um local incrível para os amantes do skate. Com uma estrutura moderna e desafiadora, a pista proporciona uma experiência única para skatistas de todos os níveis.
          </p>
        </div>
        <div className="pt-20 flex flex-col lg:flex-row-reverse justify-center items-center lg:space-x-8">
          <img
            className="h-48 lg:h-[20vw] w-48 lg:w-[20vw] object-cover mb-8 lg:mb-0"
            src={pista_skate_cocal}
            alt="Pista de Skate Cocal do Sul"
          />
          <p className="text-lg lg:text-xl text-gray-700 text-center">
            A Pista de Skate de Cocal do Sul é um local incrível para os amantes do skate. Com uma estrutura moderna e desafiadora, a pista proporciona uma experiência única para skatistas de todos os níveis.
          </p>
        </div>
        <div className="pt-20 flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
          <img
            className="h-48 lg:h-[20vw] w-48 lg:w-[20vw] object-cover mb-8 lg:mb-0"
            src={pista_skate_cocal}
            alt="Pista de Skate Cocal do Sul"
          />
          <p className="text-lg lg:text-xl text-gray-700 text-center">
            A Pista de Skate de Cocal do Sul é um local incrível para os amantes do skate. Com uma estrutura moderna e desafiadora, a pista proporciona uma experiência única para skatistas de todos os níveis.
          </p>
        </div>
      </div>
    </div>
  );
}
