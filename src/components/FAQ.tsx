import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual é a duração dos cursos de Pós-Graduação?",
    answer:
      "Os cursos de Pós-Graduação EaD da FASUL têm duração média de 6 a 18 meses, dependendo da especialização escolhida. Você pode estudar no seu próprio ritmo, respeitando os prazos estabelecidos.",
  },
  {
    question: "O diploma é reconhecido pelo MEC?",
    answer:
      "Sim! Todos os nossos cursos são devidamente reconhecidos pelo MEC (Ministério da Educação), garantindo validade nacional do seu diploma para concursos, progressão de carreira e atuação profissional.",
  },
  {
    question: "Como funciona a metodologia EaD?",
    answer:
      "Nossa metodologia é 100% online, com videoaulas gravadas, materiais didáticos digitais, fóruns de discussão e suporte de tutores especializados. Você pode acessar o conteúdo 24 horas por dia, de qualquer dispositivo.",
  },
  {
    question: "Preciso comparecer presencialmente em algum momento?",
    answer:
      "Não! Todo o curso é realizado de forma online, incluindo as avaliações. Você não precisa comparecer presencialmente em nenhum momento.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Oferecemos diversas opções de pagamento: cartão de crédito (parcelado em até 12x), boleto bancário, PIX e financiamento estudantil. Entre em contato com nossa equipe para conhecer as condições especiais.",
  },
  {
    question: "Posso fazer mais de uma pós-graduação ao mesmo tempo?",
    answer:
      "Sim! Inclusive, temos promoções especiais para quem deseja cursar múltiplas especializações. Aproveite nossa oferta de compre 1 e leve 4 para acelerar sua carreira.",
  },
];

const FAQ = () => {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2842] mb-4">PERGUNTAS FREQUENTES</h2>
            <p className="text-gray-600 text-lg">Tire suas dúvidas sobre a Graduação da FASUL</p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left text-[#1E2842] font-medium text-base md:text-lg hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-5">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
