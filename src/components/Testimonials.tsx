import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import bartolomeuFoto from "@/assets/bartolomeu-arruda.png";
import amandaFoto from "@/assets/amanda-dias.png";
import gizeliFoto from "@/assets/gizely-reis.png";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Eu perdi uma venda milionária no passado porque o cliente, um investidor sério, pediu minha credencial e eu não era formado. Foi a maior vergonha da minha vida. Corri atrás do prejuízo. Hoje, com o diploma e o CRECI na mão, tenho acesso aos empreendimentos de luxo que antes eram fechados pra mim.",
    name: "Bartolomeu Arruda",
    course: "Negócios Imobiliários",
    photo: bartolomeuFoto,
  },
  {
    id: 2,
    quote:
      "Sempre sonhei em ter meu escritório, mas sem o CRC você não é nada. A faculdade me deu a base técnica pra não ter medo da Receita Federal. Hoje não tenho patrão, tenho clientes. Assino balanços, faço auditoria e minha hora técnica vale dez vezes mais do que quando eu era auxiliar.",
    name: "Amanda Dias",
    course: "Ciências Contábeis",
    photo: amandaFoto,
  },
  {
    id: 3,
    quote:
      "Lidar com gente é difícil. Eu não sabia como dar um feedback negativo ou demitir sem criar um clima pesado. O curso me ensinou a psicologia e as técnicas de liderança humanizada. Consegui reduzir a rotatividade da equipe e fui convidada para gerenciar o setor em uma multinacional.",
    name: "Gizely Reis",
    course: "Administração",
    photo: gizeliFoto,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentTestimonial = testimonials[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-6 md:py-16 desktop:pb-[80px] bg-[#1e2842] relative">
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-4 md:mb-12 animate-fade-in text-white">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-4">
            CARREIRAS QUE <span className="text-primary">DECOLARAM</span>.
          </h2>
          <p className="text-xs md:text-lg text-white/90 max-w-3xl mx-auto">
            Veja o que nossos alunos dizem sobre a experiência Fasul.
          </p>
        </div>

        {/* Carousel para telas menores que 1200px */}
        <div
          className="max-w-4xl mx-auto block desktop:hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Botão anterior */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 w-8 h-8 md:w-10 md:h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white/90 hover:text-white transition-all"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div
            className="glass-effect rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-2xl animate-fade-in mx-6 md:mx-12"
            key={currentTestimonial.id}
          >
            <Quote className="h-6 w-6 md:h-12 md:w-12 text-cyan-light mb-2 md:mb-6" />
            <p className="text-sm md:text-xl lg:text-2xl text-white mb-3 md:mb-8 leading-relaxed italic font-light">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex items-center gap-3 md:gap-6 border-t border-white/20 pt-3 md:pt-8">
              <img
                src={currentTestimonial.photo}
                alt={currentTestimonial.name}
                className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 md:border-4 border-cyan-light object-cover"
              />
              <div className="text-white">
                <p className="font-bold text-sm md:text-xl">{currentTestimonial.name}</p>
                <p className="text-xs md:text-sm opacity-90">{currentTestimonial.course}</p>
              </div>
            </div>
          </div>

          {/* Botão próximo */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 w-8 h-8 md:w-10 md:h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white/90 hover:text-white transition-all"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-cyan-light" : "w-2 bg-white/40"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid de 3 cards para telas >= 1200px */}
        <div className="hidden desktop:flex items-center gap-4 max-w-7xl mx-auto">
          {/* Botão anterior desktop */}
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-3 gap-6 ultrawide:gap-7 flex-1">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="glass-effect rounded-2xl p-5 ultrawide:p-[22px] shadow-2xl animate-fade-in flex flex-col h-full"
              >
                <Quote className="h-6 w-6 ultrawide:h-7 ultrawide:w-7 text-cyan-light mb-3 ultrawide:mb-[13px]" />
                <p className="text-sm wide:text-[17px] ultrawide:text-[19px] text-white mb-4 ultrawide:mb-[18px] leading-relaxed italic font-light flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 ultrawide:gap-[13px] border-t border-white/20 pt-4 ultrawide:pt-[18px]">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 ultrawide:w-[54px] ultrawide:h-[54px] rounded-full border-2 border-cyan-light object-cover"
                  />
                  <div className="text-white">
                    <p className="font-bold text-sm ultrawide:text-[16px]">{testimonial.name}</p>
                    <p className="text-xs ultrawide:text-[13px] opacity-90">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão próximo desktop */}
          <button
            onClick={goToNext}
            className="flex-shrink-0 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
