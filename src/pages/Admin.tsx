
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Lock, Loader } from "lucide-react";
import { TattooImage, tattooImages, tattooStyles, bodyParts, techniques } from "@/data/tattoos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminHeader from "@/components/admin/AdminHeader";
import TattooTable from "@/components/admin/TattooTable";
import TattooForm from "@/components/admin/TattooForm";
import { ADMIN_CONFIG } from "@/config/admin";

// Use the password from the configuration file
const ADMIN_PASSWORD = ADMIN_CONFIG.password;

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [tattoos, setTattoos] = useState<TattooImage[]>(tattooImages);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTattoo, setCurrentTattoo] = useState<TattooImage | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Login handler
  const handleLogin = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        toast({
          title: "Login bem-sucedido",
          description: "Bem-vinda ao painel administrativo, Pietra!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erro de autenticação",
          description: "Senha incorreta. Por favor, tente novamente.",
        });
      }
    }, 800);
  };
  
  // Add new tattoo
  const handleAddTattoo = () => {
    setIsEditing(false);
    setCurrentTattoo(null);
    setShowForm(true);
  };
  
  // Edit existing tattoo
  const handleEditTattoo = (tattoo: TattooImage) => {
    setIsEditing(true);
    setCurrentTattoo(tattoo);
    setShowForm(true);
  };
  
  // Delete tattoo
  const handleDeleteTattoo = (id: number) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const updatedTattoos = tattoos.filter(tattoo => tattoo.id !== id);
      setTattoos(updatedTattoos);
      setIsLoading(false);
      
      toast({
        title: "Tatuagem excluída",
        description: "O item foi removido com sucesso do portfólio.",
      });
    }, 500);
  };
  
  // Save tattoo (add/edit)
  const handleSaveTattoo = (tattoo: TattooImage) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (isEditing && currentTattoo) {
        // Update existing tattoo
        const updatedTattoos = tattoos.map(t => 
          t.id === currentTattoo.id ? { ...tattoo, id: currentTattoo.id } : t
        );
        setTattoos(updatedTattoos);
        
        toast({
          title: "Tatuagem atualizada",
          description: "As alterações foram salvas com sucesso.",
        });
      } else {
        // Add new tattoo with a new ID
        const newId = Math.max(...tattoos.map(t => t.id), 0) + 1;
        const newTattoo = { ...tattoo, id: newId };
        setTattoos([...tattoos, newTattoo]);
        
        toast({
          title: "Tatuagem adicionada",
          description: "O novo item foi adicionado ao portfólio com sucesso.",
        });
      }
      
      setShowForm(false);
      setCurrentTattoo(null);
      setIsLoading(false);
    }, 800);
  };
  
  // Close form
  const handleCloseForm = () => {
    setShowForm(false);
    setCurrentTattoo(null);
  };
  
  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-full max-w-md p-8 space-y-8 bg-magicmoon-darkPurple rounded-lg border border-magicmoon-purple/20">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-magicmoon-purple opacity-80" />
            <h2 className="mt-6 text-3xl font-artistic text-gradient">Área Administrativa</h2>
            <p className="mt-2 text-gray-400">
              Digite a senha para acessar o painel de controle.
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className="space-y-4"
            >
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Senha de acesso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black border-magicmoon-purple/30"
              />
              
              <Button 
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Verificando..." : "Entrar"}
              </Button>
            </form>
            
            <div className="text-center">
              <Button 
                variant="ghost" 
                className="text-sm text-gray-400 hover:text-white"
                onClick={() => navigate("/")}
              >
                Voltar para o site
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Admin dashboard view
  return (
    <div className="min-h-screen bg-black text-white">
      <AdminHeader onAddTattoo={handleAddTattoo} />
      
      <main className="container mx-auto px-4 py-8">
        {showForm ? (
          <TattooForm
            tattoo={currentTattoo}
            isEditing={isEditing}
            onSave={handleSaveTattoo}
            onCancel={handleCloseForm}
            isLoading={isLoading}
          />
        ) : (
          <TattooTable
            tattoos={tattoos}
            onEdit={handleEditTattoo}
            onDelete={handleDeleteTattoo}
            isLoading={isLoading}
          />
        )}
      </main>
    </div>
  );
};

export default Admin;
