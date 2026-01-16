import { Eye, MessageSquare, Heart } from "lucide-react";

import blog1 from "@/assets/blog-1.webp";
import blog2 from "@/assets/blog-2.webp";
import blog3 from "@/assets/blog-3.webp";
import blog4 from "@/assets/blog-4.webp";

interface BlogPost {
  title: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  comments: number;
  likes: number;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Mitos e Verdades sobre o Ensino a Distância no Brasil",
    image: blog1,
    author: "Profª. Débora",
    date: "26 de dez. de 2025",
    readTime: "8 min de leitura",
    views: 6821,
    comments: 0,
    likes: 418,
    url: "#",
  },
  {
    title: "Como se Preparar para o Mercado de Trabalho em 2026",
    image: blog2,
    author: "Prof. Ricardo",
    date: "20 de dez. de 2025",
    readTime: "6 min de leitura",
    views: 4532,
    comments: 12,
    likes: 287,
    url: "#",
  },
  {
    title: "Tendências de Carreira para os Próximos Anos",
    image: blog3,
    author: "Profª. Ana",
    date: "15 de dez. de 2025",
    readTime: "10 min de leitura",
    views: 5120,
    comments: 8,
    likes: 356,
    url: "#",
  },
  {
    title: "A Importância da Educação Continuada",
    image: blog4,
    author: "Prof. João",
    date: "10 de dez. de 2025",
    readTime: "5 min de leitura",
    views: 3890,
    comments: 5,
    likes: 198,
    url: "#",
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* Cabeçalho */}
        <div className="blog-header">
          <h2 className="blog-title">BLOG DE INFORMAÇÕES</h2>
          <p className="blog-description">
            Dicas de carreira, tendências de mercado e conteúdos exclusivos para impulsionar seu desenvolvimento profissional.
          </p>
        </div>
        
        {/* Grid de Posts */}
        <div className="posts-grid">
          {blogPosts.map((post, index) => (
            <a 
              key={index} 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="post-card"
            >
              <div className="post-content">
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-gradient-overlay"></div>
                
                <div className="post-inner">
                  {/* Info do Autor */}
                  <div className="post-author-info">
                    <p className="post-author-name">{post.author}</p>
                    <p className="post-meta">{post.date} · {post.readTime}</p>
                  </div>
                  
                  {/* Título e Stats */}
                  <div className="post-footer">
                    <h3 className="post-title">{post.title}</h3>
                    <div className="post-stats-container">
                      <div className="post-stats-left">
                        <span className="post-stat">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <span className="post-stat">
                          <MessageSquare className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                      <span className="post-stat post-stat-likes">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Wave inferior */}
      <div className="wave-bottom-blog">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
};

export default Blog;
