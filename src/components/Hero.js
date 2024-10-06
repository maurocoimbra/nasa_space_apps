import React from 'react';

const Hero = () => {
  return (
    <section className="text-center px-10 pb-10 bg-[#0f0f1e] text-white flex justify-center">
      <div className='w-[60%] flex flex-col items-center justify-center gap-5'>
        <h1 className="text-5xl font-bold">Como podemos reduzir nossa pegada de carbono?</h1>
        <p className="text-lg text-gray-300">Veja nossas análises sobre as emissões de CO2 e descubra como cada um de nós pode contribuir para melhorar a qualidade do ar e combater as mudanças climáticas.</p>
        <div className="bg-[#121223] w-full h-[450px] flex flex-col justify-center items-center text-lime-500 text-xl rounded-lg">
          <iframe
            width="900"
            height="450"
            src="https://www.youtube.com/embed/d6PMwFTCYUs?si=Zw7cZv9doW50NIfT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
