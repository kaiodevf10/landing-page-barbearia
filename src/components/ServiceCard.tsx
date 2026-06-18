interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

export const ServiceCard = ({ icon, title, description, price }: ServiceCardProps) => {
  return (
    <div
      className="bg-bg-surface border border-border-subtle rounded-lg p-6
            hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(194,117,77,0.15)]
            group
        "
    >
      <div className="flex flex-col gap-4">
        <div
          className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center
            group-hover:bg-accent/20 transition-colors duration-300 text-accent"
        >
          {icon}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-white">{title}</h3>
          <p className="text-text-muted text-sm">{description}</p>
        </div>

        <div className="pt-2 border-t border-border-subtle">
          <span className="text-accent">{price}</span>
        </div>
      </div>
    </div>
  );
};
