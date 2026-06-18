import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rafael M.",
    comment:
      "Melhor barbearia que já fui. Corte ficou exatamente como eu queria e o atendimento é muito atencioso.",
    rating: 5,
  },
  {
    name: "Diego S.",
    comment:
      "Ambiente top, profissionais experientes. Virei cliente fixo depois da primeira vez.",
    rating: 5,
  },
  {
    name: "Lucas P.",
    comment:
      "Combo de corte e barba excelente. Preço justo pela qualidade do serviço.",
    rating: 4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-bg-surface">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">O que dizem nossos clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-bg-base border border-border-subtle rounded-lg p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < testimonial.rating
                        ? "fill-accent text-accent"
                        : "text-text-muted"
                    }
                  />
                ))}
              </div>
              <p className="text-text-muted text-sm italic">
                "{testimonial.comment}"
              </p>
              <span className="text-white text-sm font-medium">
                {testimonial.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
