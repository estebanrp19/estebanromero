import { DownloadIcon } from "lucide-react";

function Home() {
  return (
    <div className="text-center p-4">
      <h2 className="text-[20px] font-light">Hola yo soy,</h2>
      <h1 className="text-[35px] font-bold text-[#FAA307]">Esteban Romero</h1>
      <h2 className="text-[18px] font-extralight">Full Stack Web Developer</h2>

      <div className="flex flex-col items-center mt-5 lg:mt-0 lg:space-x-10">
        <div className="w-full max-w-[500px]">
          <img
            src="/957shots_so.png"
            alt="Presentation"
            className="w-full rounded-xl"
          />
        </div>
        <div className="mt-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#FAA307] text-primary-foreground rounded-md shadow-sm hover:bg-[#F48C06]">
            <DownloadIcon className="w-5 h-5" aria-hidden="true" />
            <span>Descargar CV</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
