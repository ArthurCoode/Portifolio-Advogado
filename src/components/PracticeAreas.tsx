import { Building2, Briefcase, Gavel, FileText, Home, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PracticeAreas = () => {
  const areas = [
    {
      icon: Gavel,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, direito do consumidor e questões patrimoniais."
    },
    {
      icon: Building2,
      title: "Direito Empresarial",
      description: "Assessoria jurídica para empresas, contratos comerciais e recuperação judicial."
    },
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description: "Defesa de direitos trabalhistas, rescisões e ações previdenciárias."
    },
    {
      icon: FileText,
      title: "Direito Contratual",
      description: "Elaboração, revisão e análise de contratos de todos os tipos."
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação e regularização de imóveis."
    },
    {
      icon: Users,
      title: "Direito de Família",
      description: "Divórcio, inventário, guarda e pensão alimentícia."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Áreas de <span className="text-gradient-gold">Atuação</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serviços jurídicos especializados para atender suas necessidades com excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-gold/50 transition-smooth group hover:shadow-gold"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-smooth">
                    <area.icon className="w-7 h-7 text-gold" />
                  </div>
                  <CardTitle className="text-xl text-gold group-hover:text-gold-light transition-smooth">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80 leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
