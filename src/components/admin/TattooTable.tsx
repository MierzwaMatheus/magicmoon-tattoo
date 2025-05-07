
import { TattooImage } from "@/data/tattoos";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Loader, Trash2 } from "lucide-react";

interface TattooTableProps {
  tattoos: TattooImage[];
  onEdit: (tattoo: TattooImage) => void;
  onDelete: (id: number) => void;
  isLoading: boolean;
}

const TattooTable = ({ tattoos, onEdit, onDelete, isLoading }: TattooTableProps) => {
  return (
    <div className="rounded-lg border border-magicmoon-purple/20 bg-magicmoon-darkPurple/30 overflow-hidden">
      <div className="px-6 py-4 border-b border-magicmoon-purple/20 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-artistic text-white">Portfólio de Tatuagens</h2>
          <p className="text-gray-400">Gerencie as tatuagens exibidas em seu portfólio.</p>
        </div>
        {isLoading && (
          <div className="flex items-center gap-2 text-magicmoon-purple">
            <Loader size={16} className="animate-spin" />
            <span className="text-sm">Processando...</span>
          </div>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Imagem</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Estilo</TableHead>
              <TableHead>Técnica</TableHead>
              <TableHead>Parte do Corpo</TableHead>
              <TableHead>Cores</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tattoos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-400">
                  Nenhuma tatuagem encontrada. Clique em "Nova Tatuagem" para adicionar.
                </TableCell>
              </TableRow>
            ) : (
              tattoos.map((tattoo) => (
                <TableRow key={tattoo.id} className="hover:bg-magicmoon-purple/5">
                  <TableCell>
                    <div className="h-16 w-16 rounded overflow-hidden">
                      <img 
                        src={tattoo.thumbnail} 
                        alt={tattoo.title}
                        className="h-full w-full object-cover" 
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{tattoo.title}</TableCell>
                  <TableCell>{tattoo.style}</TableCell>
                  <TableCell>{tattoo.technique}</TableCell>
                  <TableCell>{tattoo.bodyPart}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tattoo.isColor 
                        ? "bg-magicmoon-purple/20 text-magicmoon-purple" 
                        : "bg-gray-700/50 text-gray-300"
                    }`}>
                      {tattoo.isColor ? "Colorida" : "Preto e Branco"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onEdit(tattoo)}
                      className="text-gray-400 hover:text-white"
                      disabled={isLoading}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onDelete(tattoo.id)}
                      className="text-gray-400 hover:text-destructive"
                      disabled={isLoading}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TattooTable;
