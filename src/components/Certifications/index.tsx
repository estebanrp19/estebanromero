function Certifications() {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-[25px] text-[#0582CA] font-semibold">Certificados</h1>
      <div className="flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#0582CA] p- m-4">
          <img
            src="/certificado-diseño-web.jpg"
            alt="Certificado de Diseño Web"
            className="w-full h-auto rounded"
          />
          <div className="px-6 py-4">
            <p className="text-white text-base">Diseño Web Profesional</p>
          </div>
          <div className="mb-2">
            <a href="/CERTIFICADO-CURSO-DISEÑO-WEB.pdf" download>
              <button className="text-[#0582CA] bg-[#fff] py-2 px-3 rounded hover:bg-[#0582CA] hover:text-white hover:border hover:border-1 hover:border-[#ffffff]">
                Descargar
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
