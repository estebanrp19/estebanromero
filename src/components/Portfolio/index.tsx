function Portfolio() {
  return (
    <div className="mt-10 text-center content-center text-white">
      <h1 className="text-[25px] text-[#0582CA] font-semibold">Portafolio</h1>

      <div className="lg:flex lg:justify-center lg:gap-6 mt-8 mx-10 flex flex-wrap justify-center gap-6">
        <div className="rounded w-[300px] h-[300px] border border-2 border-[#051923] bg-[#051923] mb-4">
          <img
            src="/bestpartdeals.png"
            alt="Best Parts Deals"
            className="w-full h-[150px] object-cover rounded mb-3"
          />
          <h2 className="font-medium text-lg">Best Parts Deals</h2>
          <p className="font-extralight text-sm mb-3">
            Front: HTML, CSS, Bootstrap
          </p>
          <a
            href="https://github.com/estebanrp19/best-parts-deals.git"
            target="_blank"
          >
            <button className="mx-1 p-2 border border-white rounded bg-[#051923] text-white hover:bg-white hover:text-[#0582CA]">
              GitHub
            </button>
          </a>
          <a
            href="http://bpd.dyndns-web.com:8083/app/searchforparts.html"
            target="_blank"
          >
            <button className="p-2 border border-white rounded bg-[#051923] text-white hover:bg-white hover:text-[#0582CA]">
              Abrir
            </button>
          </a>
        </div>
        <div className="rounded w-[300px] h-[300px] border border-2 border-[#051923] bg-[#051923]  mb-4">
          <img
            src="/mediturnos.png"
            alt="Mediturnos"
            className="w-full h-[150px] object-cover rounded mb-3"
          />
          <h2 className="font-medium text-lg">Mediturnos</h2>
          <p className="font-extralight text-sm mb-3">
            Back: Node, Express. Front: React, JavaScript
          </p>
          <a
            href="https://github.com/estebanrp19/mediTurnos.git"
            target="_blank"
          >
            <button className="p-2 border border-white rounded bg-[#051923] text-white hover:bg-white hover:text-[#0582CA]">
              GitHub
            </button>
          </a>
        </div>

        <div className="rounded w-[300px] h-[300px] border border-2 border-[#051923] bg-[#051923]  mb-4">
          <img
            src="/smarthome.png"
            alt="SmartHome"
            className="w-full h-[150px] object-cover rounded mb-3"
          />
          <h2 className="font-medium text-lg">SmartHome</h2>
          <p className="font-extralight text-sm mb-3">
            Front: NextJS, TypeScript, Tailwind
          </p>
          <a
            href="https://github.com/estebanrp19/smartHome.git"
            target="_blank"
          >
            <button className="p-2 border border-white rounded bg-[#051923] text-white hover:bg-white hover:text-[#0582CA]">
              GitHub
            </button>
          </a>
        </div>
        <div className="rounded w-[300px] h-[300px] border border-2 border-[#051923] bg-[#051923]  mb-4">
          <img
            src="/rutaviajera.png"
            alt="Ruta Viajera"
            className="w-full h-[150px] object-cover rounded mb-3"
          />
          <h2 className="font-medium text-lg">Ruta Viajera</h2>
          <p className="font-extralight text-sm mb-3">
            Front: NextJS, TypeScript, Tailwind
          </p>
          <a
            href="https://github.com/JMPatinoFlores/ProyectoFinal.git"
            target="_blank"
          >
            <button className="mx-1 p-2 border border-white rounded bg-[#051923] text-white hover:bg-white hover:text-[#0582CA]">
              GitHub
            </button>
          </a>
          <a href="https://rutaviajera.vercel.app" target="_blank">
            <button className="p-2 border border-white rounded bg-[#051923] text-white hover:bg-white hover:text-[#0582CA]">
              Abrir
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
