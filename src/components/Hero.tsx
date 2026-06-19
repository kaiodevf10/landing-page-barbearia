import { Button } from "./shared/Button";
import corte from "../assets/corte.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center bg-bg-base relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24 lg:py-32">

          {/* Coluna esquerda — texto */}
          <div className="flex flex-col gap-6 lg:gap-8 animate-[fadeIn_0.8s_ease-out]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-text-muted"></div>
              <span className="text-text-muted text-sm tracking-widest uppercase">
                Desde 2014
              </span>
            </div>

            <h1 className="text-white leading-tight text-4xl sm:text-5xl lg:text-[56px] font-bold">
              Corte na régua e{" "}
              <br />
              <span className="text-text-muted">barba alinhada.</span>
            </h1>

            <p className="text-text-muted text-lg lg:text-xl max-w-md">
              Profissionais especializados, ambiente premium e serviço de
              excelência para o homem moderno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                onClick={() =>
                  window.open("https://wa.me/5585999998888", "_blank")
                }
              >
                Agendar no WhatsApp
              </Button>
              <Button
                variant="secondary"
                onClick={() => scrollToSection("services")}
              >
                Ver serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-border-subtle">
              <div>
                <p className="text-white text-2xl lg:text-3xl font-semibold">+500</p>
                <p className="text-text-muted text-sm">clientes atendidos</p>
              </div>
              <div className="w-px bg-border-subtle"></div>
              <div>
                <p className="text-white text-2xl lg:text-3xl font-semibold">4.9★</p>
                <p className="text-text-muted text-sm">avaliação média</p>
              </div>
              <div className="w-px bg-border-subtle"></div>
              <div>
                <p className="text-white text-2xl lg:text-3xl font-semibold">10+</p>
                <p className="text-text-muted text-sm">anos de tradição</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-stretch">
            <div className="relative border border-text-muted/30 rounded-xl p-2 w-full max-w-md">
              <img
                src={corte}
                alt="Barbeiro realizando corte em cliente na cadeira"
                className="w-full h-full rounded-lg object-cover shadow-2xl"
                style={{ minHeight: "340px", maxHeight: "500px" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}