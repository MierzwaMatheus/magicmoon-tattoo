
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-magicmoon-darkPurple to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-artistic mb-4 text-white">
            Sobre <span className="text-gradient">Pietra</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Artista tatuadora apaixonada por criar arte única e significativa.
          </p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 bg-black flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-magicmoon-purple/20 to-magicmoon-magenta/20 blur-xl opacity-50" />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Pietra, tatuadora da MagicMoon"
                  className="relative rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-artistic text-white mb-6">
                Minha jornada
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Olá! Sou Pietra, a artista por trás da MagicMoon Tattoo. Minha jornada no mundo das tatuagens 
                  começou há mais de 5 anos, quando descobri minha paixão por transformar 
                  ideias e sentimentos em arte permanente.
                </p>
                
                <p>
                  Especializada em estilos como fineline, blackwork e pontilhismo, meu trabalho é 
                  fortemente influenciado pelo universo místico, pelos ciclos lunares e pela conexão 
                  com a natureza. Cada tatuagem que crio é pensada como uma peça única, personalizada 
                  para contar a história de quem a carrega.
                </p>
                
                <p>
                  Minha formação artística e contínuo estudo de técnicas de desenho e tatuagem me permitem
                  oferecer um trabalho que combina precisão técnica com sensibilidade estética, garantindo 
                  um resultado que supera expectativas.
                </p>
              </div>
            </div>
          </div>
          
          {/* Philosophy */}
          <div className="mb-16">
            <h2 className="text-3xl font-artistic text-white mb-6 text-center">
              Filosofia de <span className="text-gradient">Trabalho</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-magicmoon-darkPurple/30 p-6 rounded-lg border border-magicmoon-purple/10 hover:border-magicmoon-purple/30 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-magicmoon-purple to-magicmoon-magenta rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                  </svg>
                </div>
                <h3 className="text-xl font-artistic text-white mb-3">Arte Personalizada</h3>
                <p className="text-gray-300">
                  Cada tatuagem é única e personalizada, criada especialmente para refletir a 
                  personalidade e história de cada cliente.
                </p>
              </div>
              
              <div className="bg-magicmoon-darkPurple/30 p-6 rounded-lg border border-magicmoon-purple/10 hover:border-magicmoon-purple/30 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-magicmoon-purple to-magicmoon-magenta rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-artistic text-white mb-3">Segurança e Higiene</h3>
                <p className="text-gray-300">
                  Priorizo um ambiente estéril e seguro, utilizando apenas materiais descartáveis 
                  e equipamentos esterilizados para cada cliente.
                </p>
              </div>
              
              <div className="bg-magicmoon-darkPurple/30 p-6 rounded-lg border border-magicmoon-purple/10 hover:border-magicmoon-purple/30 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-magicmoon-purple to-magicmoon-magenta rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="text-xl font-artistic text-white mb-3">Inovação Contínua</h3>
                <p className="text-gray-300">
                  Estou sempre estudando e incorporando novas técnicas e tendências para 
                  oferecer o melhor da arte da tatuagem.
                </p>
              </div>
            </div>
          </div>
          
          {/* Studio */}
          <div>
            <h2 className="text-3xl font-artistic text-white mb-6 text-center">
              Conheça o <span className="text-gradient">Estúdio</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="space-y-4 text-gray-300">
                  <p>
                    O estúdio MagicMoon foi criado para ser um espaço acolhedor e inspirador, 
                    onde a criatividade flui livremente. Localizado em São Paulo, o ambiente combina 
                    elementos modernos com toques místicos que refletem a essência do meu trabalho.
                  </p>
                  
                  <p>
                    Cada detalhe foi pensado para proporcionar conforto e tranquilidade durante 
                    as sessões, com total privacidade e um sistema de som ambiente para tornar a 
                    experiência ainda mais agradável.
                  </p>
                  
                  <p>
                    Além da sala principal de tatuagem, o estúdio conta com um espaço para consultas 
                    e desenvolvimento de projetos, onde podemos conversar sobre suas ideias e 
                    transformá-las em designs únicos antes da sessão.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/agendar">Agendar Visita ao Estúdio</Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-magicmoon-purple/20 to-magicmoon-magenta/20 blur-xl opacity-50" />
                  <img 
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
                    alt="Estúdio MagicMoon Tattoo"
                    className="relative rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-magicmoon-darkPurple to-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-artistic mb-6 text-white">
            Pronto para transformar suas <span className="text-gradient">ideias em arte?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Entre em contato para agendar uma consulta e começarmos a criar sua tatuagem personalizada.
          </p>
          
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/agendar">Agendar Sessão</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
