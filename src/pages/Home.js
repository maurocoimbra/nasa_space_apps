import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Footer/>
      <div className="bg-[#0f0f1e] text-white p-10 pb-0 flex justify-center min-h-screen ">
        <div className="w-[80%]">
          <h2 className="text-3xl font-bold text-center">Impacto do Aumento de CO2 na Atmosfera</h2>
          <p className="text-lg text-gray-300 mt-2 mb-5">
  O aumento continuo de CO2 está criando um "cobertor de calor" na atmosfera, aprisionando o calor que deveria ser liberado para o espaço. Isso resulta em eventos climáticos extremos mais frequentes, como o aumento da temperatura global, que desencadeia o branqueamento de corais e outros problemas que afetam a vida no planeta. Apesar disso, observa-se uma tendência de redução nos índices de emissão de CO2 no Brasil, impulsionada por incentivos governamentais. Contudo, essa redução ocorre em um contexto de altos níveis pré-existentes de CO2 na atmosfera, que ainda contribuem para o aprisionamento e retenção do calor. A queda drástica das emissões em 2020 foi causada pela pandemia de COVID-19, devido à pausa temporária de diversas fábricas e atividades econômicas ao redor do mundo, que reduziram significativamente a demanda por energia e transporte (fonte: [https://www.unep.org/pt-br/emissions-gap-report-2020](https://www.unep.org/pt-br/emissions-gap-report-2020)).<br/><br/>
  Embora os índices de CO2 tenham mostrado uma redução entre 2015 e 2022, as temperaturas globais continuaram aumentando. Isso ocorre porque o CO2 permanece na atmosfera por muito tempo, e em maio de 2023 a concentração de CO2 atingiu um novo recorde, refletindo a persistência e o acúmulo contínuo desse gás na atmosfera (fonte: [https://www.ihu.unisinos.br/categorias/629490-concentracao-de-co2-na-atmosfera-atinge-novo-recorde-em-maio-de-2023](https://www.ihu.unisinos.br/categorias/629490-concentracao-de-co2-na-atmosfera-atinge-novo-recorde-em-maio-de-2023)), e os níveis já altos acumulados ao longo das décadas anteriores ainda são suficientes para manter o efeito de aquecimento. Além disso, o acúmulo de outros gases de efeito estufa também contribui para o aumento da temperatura global, o que evidencia a complexidade do desafio climático.<br/><br/>
  Nesse contexto, uma inovadora que pode ajudar a combater as emissões de CO2 e promover um futuro mais sustentável é o uso da tecnologia blockchain para o comércio e incentivo de créditos de carbono. Utilizando blockchain, é possível criar um sistema seguro e transparente para negociar créditos de carbono, recompensando indivíduos e empresas que reduzam suas emissões. Esse sistema pode garantir a integridade dos dados, reduzir fraudes e aumentar a eficiência no monitoramento das metas de redução de emissões. Dessa forma, o blockchain pode ser um importante aliado no enfrentamento das mudanças climáticas, incentivando práticas mais sustentáveis em larga escala.<br/><br/>
  Fonte: OCO-2 GEOS Column CO₂ Concentrations - NASA
          </p>
          <div className='grid grid-cols-2 grid-rows-2 gap-5 mb-10'>

            <figure className='row-span-2'>
              <img src='/plot1.png' alt='Gráfico 1' className='w-[600px]'/>
              <figcaption className='text-center text-gray-400 text-sm mt-2'>
                Variação diária da concentração global de CO2 (Fonte: NASA).
              </figcaption>
            </figure>

            <figure>
              <img src='/plot2.png' alt='Gráfico 2' className='w-[800px]'/>
              <figcaption className='text-center text-gray-400 text-sm mt-2'>
                Concentração de CO2 ao longo do tempo no sudeste do Brasil (OCO-2 GEOS Column CO₂ Concentrations).
              </figcaption>
            </figure>

            <figure>
              <img src='/plot3.png' alt='Gráfico 3' className='w-[800px]'/>
              <figcaption className='text-center text-gray-400 text-sm mt-2'>
              Concentração de CO2 ao longo do tempo no norte do Brasil (OCO-2 GEOS Column CO₂ Concentrations).
              </figcaption>
            </figure>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
