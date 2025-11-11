import { Scale, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-8 h-8 text-gold" />
                <span className="text-xl font-bold text-gold">Alexandre Barreiros</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advocacia moderna e acessível na Bahia.
              </p>
              <p className="text-sm text-muted-foreground">
                OAB/BA 123.456
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Contato</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>(71) 99999-9999</p>
                <p>contato@alexandrebarreiros.adv.br</p>
                <p>Salvador - BA</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Redes Sociais</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-card border border-border rounded-lg hover:border-gold/50 transition-smooth group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-smooth" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-card border border-border rounded-lg hover:border-gold/50 transition-smooth group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-smooth" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-card border border-border rounded-lg hover:border-gold/50 transition-smooth group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-smooth" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {currentYear} Alexandre Barreiros - Todos os direitos reservados</p>
            <p className="mt-2">OAB/BA 123.456 - Advogado</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
