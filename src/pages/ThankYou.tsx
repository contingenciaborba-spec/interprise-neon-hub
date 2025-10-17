import { useEffect, useState } from 'react';
import CosmicBackground from '@/components/CosmicBackground';
import interpriseLogoAlt from '@/assets/interprise-logo-alt.png';
import { CheckCircle2 } from 'lucide-react';

const ThankYou = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CosmicBackground />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className={`w-full max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

          {/* Success Card */}
          <div className="glass-effect neon-border rounded-3xl p-8 md:p-12 lg:p-16 text-center space-y-8">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <CheckCircle2 
                  className="w-24 h-24 md:w-32 md:h-32 text-primary animate-scale-in" 
                  strokeWidth={1.5}
                />
                <div className="absolute inset-0 animate-ping opacity-20">
                  <CheckCircle2 
                    className="w-24 h-24 md:w-32 md:h-32 text-primary" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-glow">
              Obrigado por enviar seu formulário!
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
              Nossa equipe especializada entrará em contato com você em breve.
            </p>

            {/* Decorative element */}
            <div className="pt-8">
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
