import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1e] text-white p-10 pt-0 flex justify-center">
      <div className='w-[60%] flex flex-col items-center gap-5'>
        <div className='flex justify-center gap-5'>
          <div className="max-w-3xl w-full text-left">
            <h2 className="text-3xl font-bold">Faça a Diferença</h2>
            <p className="text-lg text-gray-300 mt-2">
              Contribua para um futuro sustentável adotando práticas que reduzem as emissões de carbono no seu dia a dia.
            </p>
          </div>

          <div className="max-w-3xl w-full text-left">
            <h2 className="text-3xl font-bold">Pequenas Mudanças, Grande Impacto</h2>
            <p className="text-lg text-gray-300 mt-2">
              Desde o uso eficiente de energia até a redução do consumo de plástico, cada ação conta na luta contra as mudanças climáticas.
            </p>
          </div>
        </div>

        <div className="max-w-3xl w-full text-left">
          <h2 className="text-3xl font-bold">Juntos Podemos</h2>
          <p className="text-lg text-gray-300 mt-2">
            Inspire-se, aprenda e transforme suas ações em impacto positivo para o planeta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
