
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tattooStyles, bodyParts } from "@/data/tattoos";

const Booking = () => {
  const { toast } = useToast();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tattooStyle, setTattooStyle] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em breve para confirmar sua consulta.",
        variant: "default",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setTattooStyle("");
      setBodyPart("");
      setSize("");
      setDescription("");
      setReference("");
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-magicmoon-darkPurple to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-artistic mb-4 text-white">
            Agende sua <span className="text-gradient">Sessão</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Preencha o formulário abaixo para solicitar um agendamento. 
            Entraremos em contato para confirmar os detalhes.
          </p>
        </div>
      </section>
      
      {/* Booking Form */}
      <section className="py-16 bg-black flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-magicmoon-darkPurple/30 rounded-lg border border-magicmoon-purple/20 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nome Completo</Label>
                    <Input 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      required
                      className="bg-black/50 border-magicmoon-purple/30 focus:border-magicmoon-purple focus:ring-magicmoon-purple/30"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-mail</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="bg-black/50 border-magicmoon-purple/30 focus:border-magicmoon-purple focus:ring-magicmoon-purple/30"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Telefone</Label>
                    <Input 
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(00) 00000-0000"
                      required
                      className="bg-black/50 border-magicmoon-purple/30 focus:border-magicmoon-purple focus:ring-magicmoon-purple/30"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tattooStyle" className="text-white">Estilo de Tatuagem</Label>
                    <Select
                      value={tattooStyle}
                      onValueChange={setTattooStyle}
                      required
                    >
                      <SelectTrigger id="tattooStyle" className="bg-black/50 border-magicmoon-purple/30 focus:ring-magicmoon-purple/30">
                        <SelectValue placeholder="Selecione um estilo" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-magicmoon-purple/30">
                        {tattooStyles.filter(style => style !== "Todos").map(style => (
                          <SelectItem key={style} value={style} className="focus:bg-magicmoon-purple/20 focus:text-white">
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bodyPart" className="text-white">Parte do Corpo</Label>
                    <Select
                      value={bodyPart}
                      onValueChange={setBodyPart}
                      required
                    >
                      <SelectTrigger id="bodyPart" className="bg-black/50 border-magicmoon-purple/30 focus:ring-magicmoon-purple/30">
                        <SelectValue placeholder="Selecione uma parte" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-magicmoon-purple/30">
                        {bodyParts.filter(part => part !== "Todos").map(part => (
                          <SelectItem key={part} value={part} className="focus:bg-magicmoon-purple/20 focus:text-white">
                            {part}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="size" className="text-white">Tamanho Aproximado</Label>
                    <Select
                      value={size}
                      onValueChange={setSize}
                      required
                    >
                      <SelectTrigger id="size" className="bg-black/50 border-magicmoon-purple/30 focus:ring-magicmoon-purple/30">
                        <SelectValue placeholder="Selecione o tamanho" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-magicmoon-purple/30">
                        <SelectItem value="Pequeno (até 5cm)" className="focus:bg-magicmoon-purple/20 focus:text-white">
                          Pequeno (até 5cm)
                        </SelectItem>
                        <SelectItem value="Médio (5-10cm)" className="focus:bg-magicmoon-purple/20 focus:text-white">
                          Médio (5-10cm)
                        </SelectItem>
                        <SelectItem value="Grande (10-20cm)" className="focus:bg-magicmoon-purple/20 focus:text-white">
                          Grande (10-20cm)
                        </SelectItem>
                        <SelectItem value="Extra Grande (acima de 20cm)" className="focus:bg-magicmoon-purple/20 focus:text-white">
                          Extra Grande (acima de 20cm)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">Descrição da Tatuagem</Label>
                  <Textarea 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descreva a tatuagem que você deseja, incluindo detalhes importantes como cores, estilo, significado, etc."
                    required
                    className="min-h-[120px] bg-black/50 border-magicmoon-purple/30 focus:border-magicmoon-purple focus:ring-magicmoon-purple/30"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="reference" className="text-white">Referências (opcional)</Label>
                  <Input 
                    id="reference"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="Links para imagens de referência (Instagram, Pinterest, etc.)"
                    className="bg-black/50 border-magicmoon-purple/30 focus:border-magicmoon-purple focus:ring-magicmoon-purple/30"
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar Agendamento"}
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="mt-12 bg-magicmoon-darkPurple/30 rounded-lg border border-magicmoon-purple/20 p-8">
              <h2 className="text-2xl font-artistic text-white mb-4">
                Informações importantes
              </h2>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-magicmoon-magenta mr-2 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    Após o envio do formulário, entraremos em contato em até 48 horas para confirmar sua consulta.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-magicmoon-magenta mr-2 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    A consulta inicial é gratuita e tem duração aproximada de 30 minutos.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-magicmoon-magenta mr-2 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    O orçamento será enviado após a consulta, considerando tamanho, complexidade e tempo estimado.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-magicmoon-magenta mr-2 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    É necessário um sinal de 30% para reservar a data da sessão, valor que será descontado do total.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Booking;
