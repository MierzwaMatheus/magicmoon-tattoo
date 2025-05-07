
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Logo from "@/components/Logo";

interface AdminHeaderProps {
  onAddTattoo: () => void;
}

const AdminHeader = ({ onAddTattoo }: AdminHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-magicmoon-purple/20 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <div className="px-3 py-1 rounded bg-magicmoon-purple/20 text-magicmoon-purple font-medium text-sm">
            Admin
          </div>
        </div>
        
        <Button onClick={onAddTattoo} className="flex items-center gap-2">
          <Plus size={16} />
          Nova Tatuagem
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
