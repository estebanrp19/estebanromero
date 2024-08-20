function Certifications() {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-[25px] text-[#A3AEC2] font-semibold">Certificados</h1>
      <div className="flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#F2F5FC] p- m-4">
          <img
            src="/certificado-diseño-web.jpg"
            alt="Certificado de Diseño Web"
            className="w-full h-auto rounded"
          />
          <div className="px-6 py-4">
            <p className="text-[#364655] text-base">Diseño Web Profesional</p>
          </div>
          <div className="mb-2">
            <a href="/CERTIFICADO-CURSO-DISEÑO-WEB.pdf" download>
              <button className="px-3 py-2 bg-[#A3AEC2] text-white rounded-lg hover:bg-white hover:text-[#A3AEC2]">
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
