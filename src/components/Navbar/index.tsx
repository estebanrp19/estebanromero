"use client";
import {
  AlignRight,
  BriefcaseBusiness,
  Code,
  Home,
  Mail,
  MenuIcon,
  User,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-[#F2F5FC]">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            Esteban Romero
          </Link>

          {/* Menú para móviles */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <AlignRight className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Menú para desktop */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="hover:text-[#FAA307] hover:border-b-2 hover:border-[#FAA307] hover:transition hover:duration-150 flex items-center"
            >
              {/* <Home className="w-4 h-4 mr-1" /> */}
              <span>Inicio</span>
            </Link>
            <Link
              href="/aboutme"
              className="hover:text-[#FAA307] hover:border-b-2 hover:border-[#FAA307] hover:transition hover:duration-150 flex items-center"
            >
              {/* <User className="w-4 h-4 mr-1" /> */}
              <span>Acerca de</span>
            </Link>
            <Link
              href="/skills"
              className="hover:text-[#FAA307] hover:border-b-2 hover:border-[#FAA307] hover:transition hover:duration-150 flex items-center"
            >
              {/* <Code className="w-4 h-4 mr-1" /> */}
              <span>Habilidades</span>
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-[#FAA307] hover:border-b-2 hover:border-[#FAA307] hover:transition hover:duration-150 flex items-center"
            >
              {/* <BriefcaseBusiness className="w-4 h-4 mr-1" /> */}
              <span>Proyectos</span>
            </Link>
            <Link
              href="/form-contact"
              className="hover:text-[#FAA307] hover:border-b-2 hover:border-[#FAA307] hover:transition hover:duration-150 flex items-center"
            >
              {/* <Mail className="w-4 h-4 mr-1" /> */}
              <span>Contacto</span>
            </Link>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="mt-3 md:hidden">
            <Link
              href="/"
              className="mb-4 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              <span>Inicio</span>
            </Link>
            <Link
              href="/aboutme"
              className="mb-4 flex items-center"
            >
              <User className="w-4 h-4 mr-1" />
              <span>Acerca de </span>
            </Link>
            <Link
              href="/skills"
              className="mb-4 flex items-center"
            >
              <Code className="w-4 h-4 mr-1" />
              <span>Habilidades</span>
            </Link>
            <Link
              href="/portfolio"
              className="mb-4 flex items-center"
            >
              <BriefcaseBusiness className="w-4 h-4 mr-1" />
              <span>Proyectos</span>
            </Link>
            <Link
              href="/form-contact"
              className="mb-4 flex items-center"
            >
              <Mail className="w-4 h-4 mr-1" />
              <span>Contacto</span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
