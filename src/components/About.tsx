import { Scale, Award, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Scale,
      title: "Conhecimento Atualizado",
      description: "Formação recente com as práticas mais modernas do direito"
    },
    {
      icon: Award,
      title: "Dedicação Total",
      description: "Comprometimento integral com cada caso e cliente"
    },
    {
      icon: Users,
      title: "Atendimento Próximo",
      description: "Comunicação clara e acessível em todas as etapas"
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
                Recém-aprovado na OAB/BA, inicio minha jornada na advocacia com energia, 
                conhecimento atualizado e total dedicação aos interesses de meus clientes.
              </p>
              <p>
                Minha formação recente me permite trazer as práticas mais modernas do direito, 
                combinando inovação com os princípios fundamentais da advocacia: ética, 
                comprometimento e transparência.
              </p>
              <p>
                Acredito em uma advocacia acessível e próxima do cliente, onde cada caso 
                recebe atenção personalizada e um atendimento humanizado, sempre com foco 
                em resultados concretos.
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
