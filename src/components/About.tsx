import { Scale, Award, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Scale,
      title: "Excelência Técnica",
      description:
        "Atuação pautada em conhecimento jurídico sólido e atualização constante sobre as mudanças na legislação."
    },
    {
      icon: Award,
      title: "Comprometimento e Ética",
      description:
        "Dedicação integral a cada caso, com transparência, responsabilidade e foco em resultados concretos."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Relação próxima e humanizada com o cliente, priorizando uma comunicação clara e acessível em todas as etapas."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-gradient-gold">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                Atuo com foco em oferecer soluções jurídicas eficientes e seguras,
                combinando técnica, estratégia e sensibilidade para compreender
                as necessidades de cada cliente.
              </p>
              <p>
                Minha prática é guiada por valores como ética, comprometimento e
                respeito, sempre buscando resultados que realmente façam a diferença
                na vida e nos negócios dos meus clientes.
              </p>
              <p>
                Com uma visão moderna da advocacia, valorizo o diálogo, a clareza nas
                orientações e o acompanhamento próximo em todas as etapas do processo.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-gold/50 transition-smooth group"
                >
                  <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-smooth">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gold">
                      {item.title}
                    </h3>
                    <p className="text-foreground/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
