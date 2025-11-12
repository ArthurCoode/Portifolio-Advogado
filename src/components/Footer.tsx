import { Scale, Instagram, Linkedin, Facebook, Heart } from "lucide-react";

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
                OAB/BA
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Contato</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>(77) 99843-3186</p>
                <p>alexandr3filho@outlook.com</p>
                <p>Caetité - BA</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/alexandre_filhocte/"
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

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground space-y-2">
            <p>© {currentYear} Alexandre Barreiros - Todos os direitos reservados</p>
            <p>OAB/BA — Advogado</p>

            <p className="flex items-center justify-center gap-1 pt-2 text-muted-foreground">
              Desenvolvido com
              <Heart className="w-4 h-4 text-gold inline-block animate-pulse" />
              por
              <a
                href="https://www.instagram.com/nextdev.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-smooth font-medium"
              >
                NextDev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
