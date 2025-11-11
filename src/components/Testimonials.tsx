import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carla Souza",
      role: "Microempresária",
      content: "Advogado muito atencioso e paciente. Explicou tudo de forma clara e resolveu meu problema com dedicação.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      role: "Autônomo",
      content: "Profissional comprometido e atualizado. Me ajudou muito com minha questão trabalhista. Super recomendo!",
      rating: 5
    },
    {
      name: "Juliana Reis",
      role: "Estudante",
      content: "Atendimento humanizado e preços justos. Conseguiu resolver meu caso com muita competência.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O Que Dizem Meus <span className="text-gradient-gold">Clientes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confiança e resultados comprovados por quem já foi atendido
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-gold/50 transition-smooth hover:shadow-gold"
              >
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-gold/30 mb-4" />
                  <p className="text-foreground/90 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-gold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
