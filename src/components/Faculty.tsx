import { ExternalLink } from "lucide-react";
import deboraLuzia from "@/assets/debora-luzia.avif";
import mauricioSoares from "@/assets/mauricio-soares.avif";
import veraFarias from "@/assets/vera-farias.avif";
import sergioSilva from "@/assets/sergio-silva.avif";
import paolaRodrigues from "@/assets/paola-rodrigues.avif";
interface Professor {
  name: string;
  image: string;
  lattesUrl: string;
}
const professors: Professor[] = [
  {
    name: "Doutora Débora Maria Moreno Luzia",
    image: deboraLuzia,
    lattesUrl: "http://lattes.cnpq.br/4668535194933989",
  },
  {
    name: "Mestre Maurício Ricardo Soares",
    image: mauricioSoares,
    lattesUrl: "http://lattes.cnpq.br/8461273296060802",
  },
  {
    name: "Doutora Vera Lúcia da Silva Farias",
    image: veraFarias,
    lattesUrl: "http://lattes.cnpq.br/6885839820247204",
  },
  {
    name: "Mestre Sérgio Ferreira da Silva",
    image: sergioSilva,
    lattesUrl: "http://lattes.cnpq.br/3242048483981824",
  },
  {
    name: "Mestra Paola Marie Vitaca Rodrigues",
    image: paolaRodrigues,
    lattesUrl: "http://lattes.cnpq.br/8880858445724289",
  },
];
const Faculty = () => {
  return (
    <section className="faculty-section">
      {/* Wave superior */}
      <div className="wave-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="faculty-container">
        <div className="faculty-content-wrapper">
          {/* Cabeçalho */}
          <div className="faculty-header">
            <h2 className="faculty-title">CORPO DOCENTE DE EXCELÊNCIA</h2>
            <p className="faculty-description">
              Nosso Corpo Docente é formado por Professores Mestres e Doutores com vasta experiência acadêmica e
              profissional, prontos para orientar sua jornada de aprendizado com metodologias inovadoras e conteúdo
              atualizado.
            </p>
          </div>

          {/* Grid de Professores */}
          <div className="professors-grid">
            {professors.map((professor, index) => (
              <a
                key={index}
                href={professor.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="professor-card"
              >
                <div className="professor-image-container">
                  <div className="professor-image-overlay"></div>
                  <img src={professor.image} alt={professor.name} className="professor-image" />
                </div>
                <h3 className="professor-name">{professor.name}</h3>
                <span className="lattes-link">
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  Currículo Lattes
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Wave inferior */}
      <div className="wave-bottom-faculty">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1E2842"
          />
        </svg>
      </div>
    </section>
  );
};
export default Faculty;
