
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tattooImages, tattooStyles, bodyParts, techniques, TattooImage } from "@/data/tattoos";

const Portfolio = () => {
  const [styleFilter, setStyleFilter] = useState<string>("Todos");
  const [bodyPartFilter, setBodyPartFilter] = useState<string>("Todos");
  const [techniqueFilter, setTechniqueFilter] = useState<string>("Todos");
  const [colorFilter, setColorFilter] = useState<string>("Todos");
  const [filteredImages, setFilteredImages] = useState<TattooImage[]>(tattooImages);

  useEffect(() => {
    let filtered = [...tattooImages];

    if (styleFilter !== "Todos") {
      filtered = filtered.filter(image => image.style === styleFilter);
    }

    if (bodyPartFilter !== "Todos") {
      filtered = filtered.filter(image => image.bodyPart === bodyPartFilter);
    }

    if (techniqueFilter !== "Todos") {
      filtered = filtered.filter(image => image.technique === techniqueFilter);
    }

    if (colorFilter !== "Todos") {
      if (colorFilter === "Colorido") {
        filtered = filtered.filter(image => image.isColor);
      } else if (colorFilter === "Preto e Branco") {
        filtered = filtered.filter(image => !image.isColor);
      }
    }

    setFilteredImages(filtered);
  }, [styleFilter, bodyPartFilter, techniqueFilter, colorFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-magicmoon-darkPurple to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-artistic mb-4 text-white">
            <span className="text-gradient">Portfólio</span> de Tatuagens
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore meus trabalhos e encontre inspiração para sua próxima tatuagem.
          </p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 bg-black/80 sticky top-16 z-30 border-y border-magicmoon-purple/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Estilo</label>
              <Select
                value={styleFilter}
                onValueChange={setStyleFilter}
              >
                <SelectTrigger className="w-full bg-black border-magicmoon-purple/30 focus:ring-magicmoon-purple/50">
                  <SelectValue placeholder="Selecione um estilo" />
                </SelectTrigger>
                <SelectContent className="bg-black border-magicmoon-purple/30">
                  {tattooStyles.map(style => (
                    <SelectItem key={style} value={style} className="focus:bg-magicmoon-purple/20 focus:text-white">
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm mb-2">Parte do Corpo</label>
              <Select
                value={bodyPartFilter}
                onValueChange={setBodyPartFilter}
              >
                <SelectTrigger className="w-full bg-black border-magicmoon-purple/30 focus:ring-magicmoon-purple/50">
                  <SelectValue placeholder="Selecione uma parte" />
                </SelectTrigger>
                <SelectContent className="bg-black border-magicmoon-purple/30">
                  {bodyParts.map(part => (
                    <SelectItem key={part} value={part} className="focus:bg-magicmoon-purple/20 focus:text-white">
                      {part}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm mb-2">Técnica</label>
              <Select
                value={techniqueFilter}
                onValueChange={setTechniqueFilter}
              >
                <SelectTrigger className="w-full bg-black border-magicmoon-purple/30 focus:ring-magicmoon-purple/50">
                  <SelectValue placeholder="Selecione uma técnica" />
                </SelectTrigger>
                <SelectContent className="bg-black border-magicmoon-purple/30">
                  {techniques.map(technique => (
                    <SelectItem key={technique} value={technique} className="focus:bg-magicmoon-purple/20 focus:text-white">
                      {technique}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm mb-2">Cor</label>
              <Select
                value={colorFilter}
                onValueChange={setColorFilter}
              >
                <SelectTrigger className="w-full bg-black border-magicmoon-purple/30 focus:ring-magicmoon-purple/50">
                  <SelectValue placeholder="Selecione coloração" />
                </SelectTrigger>
                <SelectContent className="bg-black border-magicmoon-purple/30">
                  <SelectItem value="Todos" className="focus:bg-magicmoon-purple/20 focus:text-white">Todos</SelectItem>
                  <SelectItem value="Colorido" className="focus:bg-magicmoon-purple/20 focus:text-white">Colorido</SelectItem>
                  <SelectItem value="Preto e Branco" className="focus:bg-magicmoon-purple/20 focus:text-white">Preto e Branco</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-12 bg-black flex-grow">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <Link 
                  key={image.id}
                  to={`/portfolio/${image.id}`}
                  className="group overflow-hidden rounded-lg bg-magicmoon-darkPurple/50 border border-magicmoon-purple/10 hover:border-magicmoon-purple/30 transition-all hover:shadow-lg hover:shadow-magicmoon-purple/10"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.thumbnail} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-artistic text-xl text-white mb-2">{image.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-magicmoon-purple/20 text-magicmoon-purple px-2 py-1 rounded-full">
                        {image.style}
                      </span>
                      <span className="text-xs bg-magicmoon-purple/20 text-magicmoon-purple px-2 py-1 rounded-full">
                        {image.bodyPart}
                      </span>
                      <span className="text-xs bg-magicmoon-purple/20 text-magicmoon-purple px-2 py-1 rounded-full">
                        {image.isColor ? "Colorido" : "P&B"}
                      </span>
                    </div>
                    <Button className="w-full" variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-artistic text-white mb-4">Nenhuma tatuagem encontrada</h3>
              <p className="text-gray-400 mb-6">Tente ajustar os filtros para ver mais resultados.</p>
              <Button 
                onClick={() => {
                  setStyleFilter("Todos");
                  setBodyPartFilter("Todos");
                  setTechniqueFilter("Todos");
                  setColorFilter("Todos");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
