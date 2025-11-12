import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lawyer-young.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
  <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/20 z-10" />

  <img
    src={heroImage}
    alt="Alexandre Barreiros"
    className="w-full h-full object-cover opacity-70"
  />
</div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-6 py-2 border border-gold/30 rounded-full mb-4">
            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              OAB/BA
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient-gold">
            Alexandre Barreiros
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advocacia moderna e acessível na Bahia. Soluções jurídicas personalizadas 
            com dedicação, ética e comprometimento para proteger seus direitos.
          </p>
          
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
  <Button
    onClick={scrollToContact}
    size="lg"
    className="bg-gold hover:bg-gold-light text-background font-semibold px-8 py-6 text-lg shadow-gold transition-smooth transition-transform duration-300 hover:-translate-y-1"
  >
    Agende uma Consulta
  </Button>

  <Button
    variant="outline"
    size="lg"
    className="border-gold text-gold hover:bg-gold hover:text-background font-semibold px-8 py-6 text-lg transition-smooth transition-transform duration-300 hover:-translate-y-1"
    asChild
  >
    <a href="https://wa.me/5577998433186" target="_blank" rel="noopener noreferrer">
      WhatsApp
    </a>
  </Button>
</div>

        </div>
      </div>
      
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="#d4af37" /* gold */
    className="w-8 h-8"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>

    </section>
  );
};

export default Hero;
