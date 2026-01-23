import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração dos Cursos de Graduação?",
    answer:
      "Nossos Cursos de Graduação têm duração a partir de 4 Semestres, dependendo da modalidade e área escolhida. Os cursos tecnológicos geralmente são mais curtos, enquanto bacharelados e licenciaturas podem ter durações maiores.",
  },
  {
    question: "O diploma é reconhecido pelo MEC?",
    answer:
      "Sim! A FASUL é uma Instituição com nota 5 no MEC, a nota máxima de avaliação. Todos os nossos diplomas são reconhecidos nacionalmente e têm a mesma validade de Cursos presenciais.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Oferecemos diversas formas de pagamento: boleto bancário, cartão de crédito (com parcelamento, ou a vista), PIX e débito automático.",
  },
  {
    question: "Posso transferir meu Curso de outra instituição?",
    answer:
      "Sim, aceitamos transferências de outras instituições de ensino superior. As disciplinas Cursadas podem ser aproveitadas mediante análise curricular, reduzindo o tempo de conclusão do Curso.",
  },
  {
    question: "Quais são as modalidades disponíveis?",
    answer:
      "Oferecemos modalidades EaD e semipresencial, proporcionando flexibilidade para atender às diferentes necessidades dos nossos alunos. Escolha a opção que melhor se adapta à sua rotina!",
  },
];

const FAQ = () => {
  return (
    <section className="pt-2 md:pt-6 pb-6 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-3 md:mb-10 text-center">
            <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#1E2842] mb-1 md:mb-4">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-gray-600 text-xs md:text-lg">Tire suas dúvidas sobre a Graduação da FASUL</p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-1.5 md:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-3 md:px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left text-[#1E2842] font-medium text-sm md:text-lg hover:no-underline py-3 md:py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs md:text-base pb-3 md:pb-5">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
