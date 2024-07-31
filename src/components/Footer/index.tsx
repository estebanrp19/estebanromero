import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#0582CA] mt-10">
      <div>
        <h1 className="text-center text-[#495867] font-medium text-[30px] p-3">
          Esteban Romero
        </h1>
      </div>

      {/* <div className="text-center p-2">
        <Link href="#" className="px-10">
          Inicio
        </Link>
        <Link href="#" className="px-10">
          Acerca de
        </Link>
        <Link href="#" className="px-10">
          Tecnologias
        </Link>
        <Link href="#" className="px-10">
          Servicios
        </Link>
        <Link href="#" className="px-10">
          Contacto
        </Link>
      </div> */}

      <div className="flex justify-center">
        <a href="https://www.instagram.com/estebanrp_19/">
          <img
            src="/instagram.svg"
            alt=""
            className="mx-10 filter invert p-2 mt-3 mb-10 rounded hover:border hover:border-[2px] hover:border-[#000]"
          />
        </a>
        <a href="https://www.linkedin.com/in/esteban-romero-b390251a8/">
          <img
            src="/linkedin.svg"
            alt=""
            className="mx-10 filter invert p-2 mt-3 mb-10 rounded hover:border hover:border-[2px] hover:border-[#000]"
          />
        </a>
        <a href="https://w.app/4958608">
          <img
            src="/whatsapp.svg"
            alt=""
            className="mx-10 filter invert p-2 mt-3 mb-10 rounded hover:border hover:border-[2px] hover:border-[#000]"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
