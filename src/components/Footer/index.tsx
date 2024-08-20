import { Instagram, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#A3AEC2] mt-10 text-[#F2F5FC]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Información y redes sociales */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-textprimary">
              Esteban Romero
            </h3>
            <p className="text-textsecondary text-sm">
              Desarrollador web apasionado por crear experiencias digitales
              únicas.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/estebanrp_19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textsecondary hover:text-textprimary transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://wa.me/+573152447623"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textsecondary hover:text-textprimary transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/esteban-romero-b390251a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textsecondary hover:text-textprimary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-textprimary">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-textsecondary hover:text-textprimary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutme"
                  className="text-textsecondary hover:text-textprimary transition-colors"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-textsecondary hover:text-textprimary transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/form-contact"
                  className="text-textsecondary hover:text-textprimary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Suscripción al newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-textprimary">
              Contáctame
            </h3>
            <p className="text-textsecondary text-sm">Para más información.</p>
            <div>
              <MessageCircle />
              <span>+57 315 244 7623</span>
            </div>
            <div>
              <Mail />
              <span>esteban.r1905@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-borderprimary my-8"></div>

        {/* Copyright */}
        <div className="text-center text-textsecondary text-sm">
          © {currentYear} Esteban Romero. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
