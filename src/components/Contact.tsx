import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em <span className="text-gradient-gold">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou à disposição para ajudá-lo. Agende uma consulta ou tire suas dúvidas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gold">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="p-2 bg-gold/10 rounded">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Telefone</p>
                      <a href="tel:+5571999999999" className="text-muted-foreground hover:text-gold transition-smooth">
                        (71) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="p-2 bg-gold/10 rounded">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:contato@alexandrebarreiros.adv.br" className="text-muted-foreground hover:text-gold transition-smooth">
                        contato@alexandrebarreiros.adv.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="p-2 bg-gold/10 rounded">
                      <MessageSquare className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <a 
                        href="https://wa.me/5571999999999" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-gold transition-smooth"
                      >
                        Enviar mensagem
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-gold/30 rounded-lg">
                <p className="text-center text-foreground/90 leading-relaxed">
                  <span className="text-gold font-semibold">Horário de atendimento:</span><br />
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 13h
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="bg-card border-border focus:border-gold transition-smooth"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="bg-card border-border focus:border-gold transition-smooth"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente seu caso ou dúvida..."
                    rows={6}
                    className="bg-card border-border focus:border-gold transition-smooth resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-background font-semibold py-6 text-lg shadow-gold transition-smooth"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
