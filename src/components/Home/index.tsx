function Home() {
  return (
    <div className="text-center">
      <h2 className="text-[20px] font-light">Hola yo soy,</h2>
      <h1 className="text-[35px] font-bold text-[#0582CA]">Esteban Romero</h1>
      <h2 className="text-[18px] font-extralight">Full Stack Web Developer</h2>

      <div className="flex justify-center mt-5">
        <div className="flex flex-col items-start space-y-4">
          <a href="/Esteban_Romero_CV.pdf" download>
            <div className="border border-[2px] border-[#0582CA] rounded-xl text-[#0582CA] p-10 hover:bg-[#0582CA] hover:text-white">
              <p>Descargar CV</p>
              <p>(Español)</p>
            </div>
          </a>
          <a href="/Esteban_Romero_CV_English.pdf" download>
            <div className="border border-[2px] border-[#0582CA] rounded-xl text-[#0582CA] p-10 hover:bg-[#0582CA] hover:text-white">
              <p>Download CV</p>
              <p>(English)</p>
            </div>
          </a>
        </div>
        <div className="ml-10">
          <img
            src="/presentation.jpg"
            alt="Presentation"
            className="w-[500px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
