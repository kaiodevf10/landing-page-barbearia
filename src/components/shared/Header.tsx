import { useState } from "react";
import logoBarbearia from "../../assets/logo-vintage.svg";
import { Button } from "./Button";

const navItems = [
  { label: "Início", id: "hero" },
  { label: "Serviços", id: "services" },
  { label: "Contato", id: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-bg-base backdrop-blur-sm border-b border-border-subtle z-50">
      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            src={logoBarbearia}
            alt="Logo Barbearia Vintage"
            className="w-10 h-10 rounded object-cover"
          />
          <span className="text-white text-sm md:text-base">
            Barbearia Vintage
          </span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="text-white hover:text-accent transition-colors duration-300 cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
            <li>
              <Button
                variant="primary"
                onClick={() => {
                  window.open("https://wa.me/5585999998888", "_blank");
                }}
              >
                Agendar
              </Button>
            </li>
          </ul>
        </nav>

        {/* Botão Hamburguer Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 pb-4 gap-4 bg-bg-base">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="text-white hover:text-accent transition-colors duration-300 cursor-pointer py-2 border-b border-border-subtle"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
          <li className="pt-2">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                window.open("https://wa.me/5585999998888", "_blank");
              }}
            >
              Agendar
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
