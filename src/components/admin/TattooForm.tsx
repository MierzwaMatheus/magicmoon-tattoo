
import { useState, useEffect } from "react";
import { TattooImage, tattooStyles, bodyParts, techniques } from "@/data/tattoos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Loader, Save } from "lucide-react";

interface TattooFormProps {
  tattoo: TattooImage | null;
  isEditing: boolean;
  onSave: (tattoo: TattooImage) => void;
  onCancel: () => void;
  isLoading: boolean;
}

const defaultTattoo: Omit<TattooImage, "id"> = {
  title: "",
  thumbnail: "",
  fullImage: "",
  style: "",
  technique: "",
  bodyPart: "",
  isColor: false,
  description: "",
  sessionTime: "",
  inspiration: ""
};

const TattooForm = ({ tattoo, isEditing, onSave, onCancel, isLoading }: TattooFormProps) => {
  const [formData, setFormData] = useState<Omit<TattooImage, "id">>({...defaultTattoo});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState<string>("");
  
  // Initialize form with tattoo data if editing
  useEffect(() => {
    if (isEditing && tattoo) {
      const { id, ...tattooData } = tattoo;
      setFormData(tattooData);
      setImagePreview(tattoo.thumbnail);
    } else {
      setFormData({...defaultTattoo});
      setImagePreview("");
    }
  }, [tattoo, isEditing]);
  
  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Preview image when URL changes
    if (name === "thumbnail" || name === "fullImage") {
      if (name === "thumbnail") setImagePreview(value);
      
      // If either thumbnail or fullImage is set, and the other is empty, copy the value
      if (value && name === "thumbnail" && !formData.fullImage) {
        setFormData(prev => ({ ...prev, fullImage: value }));
      } else if (value && name === "fullImage" && !formData.thumbnail) {
        setFormData(prev => ({ ...prev, thumbnail: value }));
        setImagePreview(value);
      }
    }
  };
  
  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // Handle radio changes
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, isColor: value === "true" }));
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = "O título é obrigatório";
    }
    
    if (!formData.thumbnail.trim()) {
      newErrors.thumbnail = "A URL da imagem (thumbnail) é obrigatória";
    }
    
    if (!formData.fullImage.trim()) {
      newErrors.fullImage = "A URL da imagem (completa) é obrigatória";
    }
    
    if (!formData.style) {
      newErrors.style = "O estilo é obrigatório";
    }
    
    if (!formData.technique) {
      newErrors.technique = "A técnica é obrigatória";
    }
    
    if (!formData.bodyPart) {
      newErrors.bodyPart = "A parte do corpo é obrigatória";
    }
    
    if (!formData.sessionTime) {
      newErrors.sessionTime = "O tempo de sessão é obrigatório";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave(formData as TattooImage);
    }
  };
  
  return (
    <div className="rounded-lg border border-magicmoon-purple/20 bg-magicmoon-darkPurple/30 overflow-hidden">
      <div className="px-6 py-4 border-b border-magicmoon-purple/20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onCancel}
            disabled={isLoading}
            className="rounded-full hover:bg-magicmoon-purple/10"
          >
            <ArrowLeft size={18} />
          </Button>
          <div>
            <h2 className="text-2xl font-artistic text-white">
              {isEditing ? "Editar Tatuagem" : "Nova Tatuagem"}
            </h2>
            <p className="text-gray-400">
              {isEditing 
                ? "Atualize as informações desta tatuagem"
                : "Adicione uma nova tatuagem ao seu portfólio"
              }
            </p>
          </div>
        </div>
        
        {isLoading && (
          <div className="flex items-center gap-2 text-magicmoon-purple">
            <Loader size={16} className="animate-spin" />
            <span className="text-sm">Salvando...</span>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Basic info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className={errors.title ? "text-destructive" : ""}>
                Título da Tatuagem <span className="text-destructive">*</span>
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex: Lua Crescente Mística"
                disabled={isLoading}
                className={errors.title ? "border-destructive" : ""}
              />
              {errors.title && (
                <p className="text-xs text-destructive">{errors.title}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="thumbnail" className={errors.thumbnail ? "text-destructive" : ""}>
                URL da Imagem (Thumbnail) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="thumbnail"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                placeholder="https://exemplo.com/imagem.jpg"
                disabled={isLoading}
                className={errors.thumbnail ? "border-destructive" : ""}
              />
              {errors.thumbnail && (
                <p className="text-xs text-destructive">{errors.thumbnail}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fullImage" className={errors.fullImage ? "text-destructive" : ""}>
                URL da Imagem (Completa) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullImage"
                name="fullImage"
                value={formData.fullImage}
                onChange={handleChange}
                placeholder="https://exemplo.com/imagem-full.jpg"
                disabled={isLoading}
                className={errors.fullImage ? "border-destructive" : ""}
              />
              {errors.fullImage && (
                <p className="text-xs text-destructive">{errors.fullImage}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">
                Descrição
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descreva a tatuagem, sua inspiração, significado, etc."
                rows={3}
                disabled={isLoading}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="inspiration">
                  Inspiração
                </Label>
                <Input
                  id="inspiration"
                  name="inspiration"
                  value={formData.inspiration}
                  onChange={handleChange}
                  placeholder="Fonte de inspiração"
                  disabled={isLoading}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sessionTime" className={errors.sessionTime ? "text-destructive" : ""}>
                  Tempo de Sessão <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="sessionTime"
                  name="sessionTime"
                  value={formData.sessionTime}
                  onChange={handleChange}
                  placeholder="Ex: 2-3 horas"
                  disabled={isLoading}
                  className={errors.sessionTime ? "border-destructive" : ""}
                />
                {errors.sessionTime && (
                  <p className="text-xs text-destructive">{errors.sessionTime}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Right column - Categories and preview */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="style" className={errors.style ? "text-destructive" : ""}>
                  Estilo <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.style}
                  onValueChange={(value) => handleSelectChange("style", value)}
                  disabled={isLoading}
                >
                  <SelectTrigger className={errors.style ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione o estilo" />
                  </SelectTrigger>
                  <SelectContent>
                    {tattooStyles.slice(1).map((style) => (
                      <SelectItem key={style} value={style}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.style && (
                  <p className="text-xs text-destructive">{errors.style}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="technique" className={errors.technique ? "text-destructive" : ""}>
                  Técnica <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.technique}
                  onValueChange={(value) => handleSelectChange("technique", value)}
                  disabled={isLoading}
                >
                  <SelectTrigger className={errors.technique ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione a técnica" />
                  </SelectTrigger>
                  <SelectContent>
                    {techniques.slice(1).map((technique) => (
                      <SelectItem key={technique} value={technique}>
                        {technique}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.technique && (
                  <p className="text-xs text-destructive">{errors.technique}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bodyPart" className={errors.bodyPart ? "text-destructive" : ""}>
                  Parte do Corpo <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.bodyPart}
                  onValueChange={(value) => handleSelectChange("bodyPart", value)}
                  disabled={isLoading}
                >
                  <SelectTrigger className={errors.bodyPart ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione a parte do corpo" />
                  </SelectTrigger>
                  <SelectContent>
                    {bodyParts.slice(1).map((part) => (
                      <SelectItem key={part} value={part}>
                        {part}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.bodyPart && (
                  <p className="text-xs text-destructive">{errors.bodyPart}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label>
                  Cores <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  value={formData.isColor ? "true" : "false"}
                  onValueChange={handleRadioChange}
                  className="flex space-x-4"
                  disabled={isLoading}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="colorida" />
                    <Label htmlFor="colorida" className="cursor-pointer">Colorida</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="pb" />
                    <Label htmlFor="pb" className="cursor-pointer">Preto e Branco</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Pré-visualização</Label>
              <div className="border border-magicmoon-purple/20 rounded-lg h-64 flex items-center justify-center overflow-hidden bg-black/50">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Pré-visualização" 
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <p className="text-gray-400 text-sm">
                    Insira uma URL de imagem para visualização
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-8 gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader size={16} className="animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save size={16} />
                Salvar Tatuagem
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TattooForm;
