
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tattooImages } from "@/data/tattoos";

const TattooDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const tattoo = tattooImages.find(img => img.id === Number(id));
  
  useEffect(() => {
    if (!tattoo) {
      navigate("/portfolio");
    }
    
    window.scrollTo(0, 0);
  }, [tattoo, navigate]);
  
  if (!tattoo) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-black flex-grow">
        <div className="container mx-auto px-4">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-gray-400 hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Voltar para o Portfólio
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-magicmoon-purple/20 to-magicmoon-magenta/20 rounded-lg blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
              <div className="relative bg-black border border-magicmoon-purple/10 rounded-lg overflow-hidden">
                <div 
                  className={`aspect-square ${!imageLoaded ? 'animate-pulse bg-magicmoon-darkPurple/50' : ''}`}
                >
                  <img 
                    src={tattoo.fullImage} 
                    alt={tattoo.title} 
                    className={`w-full h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                <button 
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                  aria-label="Expandir imagem"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m9 0v4.5m0-4.5h-4.5m0 9v4.5m0-4.5h4.5m-9 0v4.5m0-4.5h4.5" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Information */}
            <div>
              <h1 className="text-3xl md:text-4xl font-artistic text-white mb-4">
                {tattoo.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-magicmoon-purple/20 text-magicmoon-purple px-3 py-1 rounded-full">
                  {tattoo.style}
                </span>
                <span className="bg-magicmoon-purple/20 text-magicmoon-purple px-3 py-1 rounded-full">
                  {tattoo.technique}
                </span>
                <span className="bg-magicmoon-purple/20 text-magicmoon-purple px-3 py-1 rounded-full">
                  {tattoo.bodyPart}
                </span>
                <span className="bg-magicmoon-purple/20 text-magicmoon-purple px-3 py-1 rounded-full">
                  {tattoo.isColor ? "Colorido" : "Preto e Branco"}
                </span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-artistic text-white mb-2">Descrição</h2>
                  <p className="text-gray-300">{tattoo.description}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-artistic text-white mb-2">Inspiração</h2>
                  <p className="text-gray-300">{tattoo.inspiration}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-artistic text-white mb-2">Tempo de Sessão</h2>
                  <p className="text-gray-300">{tattoo.sessionTime}</p>
                </div>
                
                <div className="pt-6">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link to="/agendar">Gostou dessa arte? Agende uma Sessão</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Tattoos */}
          <div className="mt-20">
            <h2 className="text-2xl font-artistic text-white mb-8">
              Tatuagens Semelhantes
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tattooImages
                .filter(img => img.id !== tattoo.id && img.style === tattoo.style)
                .slice(0, 4)
                .map(image => (
                  <Link 
                    key={image.id}
                    to={`/portfolio/${image.id}`}
                    className="group relative overflow-hidden rounded-lg aspect-square transform transition-transform hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity z-10" />
                    <img 
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform z-20">
                      <h3 className="text-white font-artistic text-lg">{image.title}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TattooDetails;
