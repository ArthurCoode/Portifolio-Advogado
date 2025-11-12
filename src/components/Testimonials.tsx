import { ShieldCheck, Scale, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Values = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Ética e Transparência",
      description:
        "Cada caso é conduzido com honestidade, sigilo profissional e total clareza em todas as etapas do processo."
    },
    {
      icon: Scale,
      title: "Justiça e Responsabilidade",
      description:
        "Comprometimento com a aplicação correta do direito, sempre buscando soluções justas e equilibradas para todas as partes."
    },
    {
      icon: Handshake,
      title: "Respeito e Confiança",
      description:
        "Construção de relações baseadas na confiança mútua, empatia e no verdadeiro compromisso com o cliente."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meus <span className="text-gradient-gold">Valores</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que orientam cada atuação e refletem o compromisso com uma advocacia ética e humana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-gold/50 transition-smooth hover:shadow-gold"
              >
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <value.icon className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gold">
                    {value.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
