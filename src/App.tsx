type IconName = "whatsapp" | "spark" | "instagram" | "dashboard" | "bot" | "tiktok" | "youtube"
import { Bot } from 'lucide-react';

const links: {
  title: string
  description: string
  href: string
  icon: IconName
  featured?: boolean
}[] = [
    {
      title: "Fale com a gente no WhatsApp",
      description: "Descubra como automatizar seu atendimento",
      href: "https://api.whatsapp.com/send/?phone=5581995245593&text=Ol%C3%A1%21+Vim+pelo+Linktree+e+tenho+interesse+no+servi%C3%A7o+de+chatbot+e+IA+para+atendimento.+Pode+me+contar+mais%3F&type=phone_number&app_absent=0",
      icon: "whatsapp",
      featured: true,
    },
    {
      title: "Automatize suas conversas",
      description: "Chatbot & CRM - AI Control",
      href: "https://control.artifextech.com.br",
      icon: "bot",
    },
    {
      title: "Conheça nossas automações",
      description: "Tenha sua casa ou empresa inteligentes",
      href: "https://www.artifextech.com.br",
      icon: "spark",
    },
    {
      title: "Nos acompanhe no Instagram",
      description: "Conteúdo, novidades e promoções",
      href: "https://www.instagram.com/artifex.oficial/",
      icon: "instagram",
    },
    {
      title: "Nos acompanhe no TikTok",
      description: "Conteúdo, novidades e promoções",
      href: "https://www.tiktok.com/@artifex.oficial",
      icon: "tiktok",
    },
    {
      title: "Nosso Youtube",
      description: "Conteúdo, novidades e promoções",
      href: "https://www.youtube.com/@artifex.oficial",
      icon: "youtube",
    },
    {
      title: "Acesse a área do cliente",
      description: "Entre na plataforma ArtifexTech",
      href: "https://control.artifextech.com.br/login",
      icon: "dashboard",
    },
  ]

function BrandMark() {
  return (
    <div className="brand" aria-label="ArtifexTech">
      <img
        className="brand-mark"
        src="/Logo.svg"
        alt=""
        aria-hidden="true"
      />
      <span className="brand-name">
        Artifex<span>Tech</span>
      </span>
    </div>
  )
}

function LinkIcon({ name }: { name: IconName }) {
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.2 7.5c.2-.4.5-.4.8-.4h.5c.2 0 .4.1.5.5l.7 1.7c.1.3.1.5-.1.7l-.6.8c-.2.2-.2.4 0 .7.5 1 1.3 1.8 2.3 2.3.3.2.5.2.7-.1l.8-1c.2-.3.4-.3.7-.2l1.8.8c.3.1.5.3.5.5 0 .4-.2 1.5-.9 2-.6.6-1.5.8-2.4.6-1.3-.3-2.9-1-4.4-2.4-1.2-1.1-2.1-2.5-2.5-3.8-.3-1-.1-2 .5-2.7Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  if (name === "bot") {
    return <Bot />
  }

  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m10 15 5-3-5-3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M14.2 3.5v10.7a4.6 4.6 0 1 1-4-4.6v3.2a1.7 1.7 0 1 0 1 1.5V3.5h3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.2 3.5c.5 2.7 2 4.2 4.8 4.6v3.1a8.2 8.2 0 0 1-4.8-1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="3.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.7" cy="6.6" r="1.1" fill="currentColor" />
      </svg>
    )
  }

  if (name === "dashboard") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 9h18M8.5 9v11"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M12.5 13h4.5M12.5 16h3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m13.4 2.8-8.1 11h6.4l-1.1 7.4 8.1-11h-6.4l1.1-7.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h13M14 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <section className="profile">
        <header className="hero">
          <BrandMark />
          <div className="eyebrow">
            <span />
            AUTOMAÇÃO • IA • CHATBOT • CRM • ATENDIMENTO
          </div>
          <h1>
            Tecnologia que trabalha <em>por você.</em>
          </h1>
          <p>
            Automatizamos conversas, processos e vendas para sua empresa crescer
            todos os dias.
          </p>
          <div className="status">
            <i />
            Atendimento online
          </div>
        </header>

        <nav className="link-list" aria-label="Links principais">
          {links.map((link) => (
            <a
              className={`link-card${link.featured ? " featured" : ""}`}
              href={link.href}
              key={link.title}
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">
                <LinkIcon name={link.icon} />
              </span>
              <span className="link-copy">
                <strong>{link.title}</strong>
                <small>{link.description}</small>
              </span>
              <span className="link-arrow">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </nav>

        <footer>
          <div className="footer-rule" />
          <p className="cnpj">CNPJ: 65.309.863/0001-90</p>
          <p className="copyright">
            © {new Date().getFullYear()} ArtifexTech
            <span>•</span>
            Tecnologia feita por Artífices
          </p>
        </footer>
      </section>
    </main>
  )
}
