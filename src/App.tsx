import { Hero } from "./components/Hero";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import WhatsAppButton from "./components/shared/WhatsAppButton";

function App() {
  return (
    <>
      <div>
        <Header />

        {/* Conteúdo principal da aplicação */}
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
