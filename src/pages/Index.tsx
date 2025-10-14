import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CosmicBackground from '@/components/CosmicBackground';
import interpriseLogoAlt from '@/assets/interprise-logo-alt.png';

const Index = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    linkBet: '',
    temLicenca: '',
    tipoLicenca: '',
    jaFezTrafego: '',
    experienciaTrafego: '',
    temCRM: '',
    sistemaCRM: '',
    investimento: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send to webhook
      await fetch('https://hook.us2.make.com/cccnmt7xxmio4h6bojo3vf3wvtlciccf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Redirect to WhatsApp
      window.location.href = 'https://wa.me/558487149954?text=Olá%2C%20quero%20escalar%20minha%20operação%20com%20vocês%21';
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still redirect even if webhook fails
      window.location.href = 'https://wa.me/558487149954?text=Olá%2C%20quero%20escalar%20minha%20operação%20com%20vocês%21';
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CosmicBackground />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl animate-slide-in">
          {/* INTERPRISE Logo */}
          <div className="flex justify-center mb-8">
            <div className="glass-effect neon-border rounded-2xl p-6 hover-glow">
              <img 
                src={interpriseLogoAlt} 
                alt="INTERPRISE Logo" 
                className="w-32 h-auto md:w-40 animate-pulse-glow"
              />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow">
              Seja bem-vindo(a) à INTERPRISE
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Somos uma empresa especializada em performance para o seu negócio digital.
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-effect neon-border rounded-3xl p-6 md:p-8 lg:p-10">
            <p className="text-center text-base md:text-lg mb-8 text-foreground/90">
              Precisamos entender melhor sobre o seu projeto. Preencha os campos abaixo e nossa equipe vai entrar em contato com você:
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground font-medium">
                  Qual seu nome *
                </Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => updateField('nome', e.target.value)}
                  className="bg-input border-border input-glow transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground font-medium">
                  Qual seu WhatsApp *
                </Label>
                <Input
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => updateField('whatsapp', e.target.value)}
                  className="bg-input border-border input-glow transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Qual seu e-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="bg-input border-border input-glow transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Link da Bet */}
              <div className="space-y-2">
                <Label htmlFor="linkBet" className="text-foreground font-medium">
                  Qual link da sua bet
                </Label>
                <Input
                  id="linkBet"
                  value={formData.linkBet}
                  onChange={(e) => updateField('linkBet', e.target.value)}
                  className="bg-input border-border input-glow transition-all"
                  placeholder="meubet ou site123"
                />
              </div>

              {/* Tem Licença */}
              <div className="space-y-3">
                <Label className="text-foreground font-medium">Seu site tem licença *</Label>
                <RadioGroup
                  value={formData.temLicenca}
                  onValueChange={(value) => {
                    updateField('temLicenca', value);
                    if (value === 'Não') updateField('tipoLicenca', '');
                  }}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Sim" id="licenca-sim" className="border-primary text-primary" />
                    <Label htmlFor="licenca-sim" className="cursor-pointer">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Não" id="licenca-nao" className="border-primary text-primary" />
                    <Label htmlFor="licenca-nao" className="cursor-pointer">Não</Label>
                  </div>
                </RadioGroup>

                {formData.temLicenca === 'Sim' && (
                  <Select value={formData.tipoLicenca} onValueChange={(value) => updateField('tipoLicenca', value)}>
                    <SelectTrigger className="bg-input border-border input-glow transition-all">
                      <SelectValue placeholder="Tipo de licença" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="Municipal">Municipal</SelectItem>
                      <SelectItem value="Estadual">Estadual</SelectItem>
                      <SelectItem value="Federal">Federal</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>

              {/* Já fez tráfego */}
              <div className="space-y-3">
                <Label className="text-foreground font-medium">Já fez tráfego *</Label>
                <RadioGroup
                  value={formData.jaFezTrafego}
                  onValueChange={(value) => {
                    updateField('jaFezTrafego', value);
                    if (value === 'Não') updateField('experienciaTrafego', '');
                  }}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Sim" id="trafego-sim" className="border-primary text-primary" />
                    <Label htmlFor="trafego-sim" className="cursor-pointer">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Não" id="trafego-nao" className="border-primary text-primary" />
                    <Label htmlFor="trafego-nao" className="cursor-pointer">Não</Label>
                  </div>
                </RadioGroup>

                {formData.jaFezTrafego === 'Sim' && (
                  <Select value={formData.experienciaTrafego} onValueChange={(value) => updateField('experienciaTrafego', value)}>
                    <SelectTrigger className="bg-input border-border input-glow transition-all">
                      <SelectValue placeholder="Como foi a experiência?" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="Ótima">Ótima</SelectItem>
                      <SelectItem value="Boa">Boa</SelectItem>
                      <SelectItem value="Ruim">Ruim</SelectItem>
                    </SelectContent>
                  </Select>
                )}

                {formData.jaFezTrafego === 'Não' && (
                  <p className="text-sm text-muted-foreground italic">
                    Pretendo escalar com tráfego pago.
                  </p>
                )}
              </div>

              {/* Tem CRM */}
              <div className="space-y-3">
                <Label className="text-foreground font-medium">Você tem CRM *</Label>
                <RadioGroup
                  value={formData.temCRM}
                  onValueChange={(value) => {
                    updateField('temCRM', value);
                    if (value === 'Não') updateField('sistemaCRM', '');
                  }}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Sim" id="crm-sim" className="border-primary text-primary" />
                    <Label htmlFor="crm-sim" className="cursor-pointer">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Não" id="crm-nao" className="border-primary text-primary" />
                    <Label htmlFor="crm-nao" className="cursor-pointer">Não</Label>
                  </div>
                </RadioGroup>

                {formData.temCRM === 'Sim' && (
                  <Input
                    value={formData.sistemaCRM}
                    onChange={(e) => updateField('sistemaCRM', e.target.value)}
                    className="bg-input border-border input-glow transition-all"
                    placeholder="Qual sistema usa?"
                  />
                )}
              </div>

              {/* Investimento */}
              <div className="space-y-3">
                <Label className="text-foreground font-medium">Quanto pretende investir na sua bet *</Label>
                <RadioGroup
                  value={formData.investimento}
                  onValueChange={(value) => updateField('investimento', value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Até R$10.000" id="inv-1" className="border-primary text-primary" />
                    <Label htmlFor="inv-1" className="cursor-pointer">Até R$10.000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Acima de R$30.000" id="inv-2" className="border-primary text-primary" />
                    <Label htmlFor="inv-2" className="cursor-pointer">Acima de R$30.000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Acima de R$50.000" id="inv-3" className="border-primary text-primary" />
                    <Label htmlFor="inv-3" className="cursor-pointer">Acima de R$50.000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Acima de R$100.000" id="inv-4" className="border-primary text-primary" />
                    <Label htmlFor="inv-4" className="cursor-pointer">Acima de R$100.000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Tráfego ilimitado" id="inv-5" className="border-primary text-primary" />
                    <Label htmlFor="inv-5" className="cursor-pointer">Tráfego ilimitado</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 hover-glow transition-all text-primary-foreground shadow-lg md:relative md:bottom-auto fixed bottom-0 left-0 right-0 md:rounded-xl rounded-none z-50"
              >
                Enviar para WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
