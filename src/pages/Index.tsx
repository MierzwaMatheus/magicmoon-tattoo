
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magicmoon-darkPurple to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center opacity-20 z-0" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="mb-8 animate-fade-in">
            <Logo size="xl" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-artistic mb-4 text-white animate-fade-in" style={{ animationDelay: '200ms' }}>
            Arte e Misticismo <br /> em Cada Traço
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Tatuagens únicas inspiradas no universo místico e noturno, 
            criadas com paixão e precisão por Pietra.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
              <Link to="/portfolio">Ver Portfólio</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/agendar">Agendar Sessão</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-magicmoon-darkPurple/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-magicmoon-purple/20 to-magicmoon-magenta/20 blur-xl opacity-70" />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Pietra, tatuadora da MagicMoon" 
                  className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-artistic mb-6 text-white">
                Conheça <span className="text-gradient">Pietra</span>
              </h2>
              
              <p className="text-gray-300 mb-6">
                Artista tatuadora especializada em designs místicos, fineline e blackwork. 
                Pietra combina técnicas precisas com uma visão artística única inspirada 
                nos mistérios da lua, das estrelas e da natureza.
              </p>
              
              <p className="text-gray-300 mb-6">
                Com mais de 5 anos de experiência, cada tatuagem é uma obra de arte 
                personalizada que reflete a alma e a essência de cada cliente, criada 
                em um ambiente seguro e acolhedor.
              </p>
              
              <Button asChild className="mt-4">
                <Link to="/sobre">Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-artistic text-center mb-12 text-white">
            Últimos <span className="text-gradient">Trabalhos</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <Link 
                key={id}
                to={`/portfolio/${id}`}
                className="group relative overflow-hidden rounded-lg aspect-square transform transition-transform hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10" />
                <img 
                  src={`https://images.unsplash.com/photo-158109${id < 3 ? '091226825-a6a2a5aee158' : '0464777-f3220bbe1b8b'}`}
                  alt={`Tatuagem ${id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform z-20">
                  <h3 className="text-white font-artistic text-xl">Tatuagem #{id}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/portfolio">Ver Todo o Portfólio</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-magicmoon-darkPurple to-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-artistic mb-6 text-white">
            Pronto para sua <span className="text-gradient">Nova Tatuagem?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Transforme suas ideias em arte permanente. Agende uma consulta 
            para discutir seu projeto e criar algo único.
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

export default Index;
