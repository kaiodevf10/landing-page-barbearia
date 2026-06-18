import { Instagram, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-row bg-bg-base border-t border-border-subtle py-8 ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
          {/* copyright */}
          <div className=" flex text-text-muted text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Barbearia Vintage. Todos os
            direitos reservados.
          </div>
          {/* social links  */}
          
            <ul className="flex flex-row items-center gap-6">
              <li>
                <a
                  href="https://www.instagram.com/barbeariavintage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-text-muted hover:text-accent transition-colors duration-300"
                >
                  <Instagram size={20} />
                  <span className="text-sm ml-2">Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/5585999998888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-text-muted hover:text-accent transition-colors duration-300"
                >
                  <MessageCircle size={20} />
                  <span className="text-sm ml-2">WhatsApp</span>
                </a>
              </li>

              <li>
                <a
                  href="https://maps.google.com/?q=Barbearia+Vintage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-text-muted hover:text-accent transition-colors duration-300"
                >
                  <MapPin size={20} />
                  <span className="text-sm ml-2">Localização</span>
                </a>
              </li>


            </ul>
          </div>
        </div>
    
    </footer>
  );
};

export default Footer;
