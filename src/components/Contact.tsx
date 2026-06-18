import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "./shared/Button";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-bg-base">
      <div className="text-center mb-12">
        <h2 className="text-white mb-4">Contato</h2>
      </div>

      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Coluna de informações */}
          <div className="bg-bg-surface rounded-lg py-8 px-6 sm:px-8 flex flex-col">
            <h3 className="mb-6 text-white">Informações</h3>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <MapPin size={20} />
              </div>

              <div>
                <h4 className="text-white mb-1">Endereço</h4>
                <p className="text-text-muted">Rua das Tesouras, 245 - Centro</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Clock size={20} />
              </div>

              <div>
                <h4 className="text-white mb-1">Horário</h4>
                <p className="text-text-muted">Seg a Sáb: 09:00–19:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Phone size={20} />
              </div>

              <div>
                <h4 className="text-white mb-1">WhatsApp</h4>
                <p className="text-text-muted">(85) 99999-8888</p>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-border-subtle">
              <Button
                variant="primary"
                onClick={() =>
                  window.open("https://wa.me/5585999998888", "_blank")
                }
                className="w-full bg-accent"
              >
                <div className="flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Chamar no WhatsApp agora
                </div>
              </Button>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-lg overflow-hidden border border-border-subtle min-h-[320px]">
            <iframe
              title="Localização da Barbearia Vintage no Google Maps"
              src="https://maps.google.com/maps?q=Centro,Niter%C3%B3i,RJ&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px", filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
