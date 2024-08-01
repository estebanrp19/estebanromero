function Home() {
  return (
    <div className="text-center p-4">
      <h2 className="text-[20px] font-light">Hola yo soy,</h2>
      <h1 className="text-[35px] font-bold text-[#0582CA]">Esteban Romero</h1>
      <h2 className="text-[18px] font-extralight">Full Stack Web Developer</h2>

      <div className="lg:flex lg:justify-center mt-5 lg:space-x-10">
        <div className="flex flex-col items-center lg:items-start space-y-4 w-full lg:w-auto">
          <a href="/Esteban_Romero_CV.pdf" download className="w-full">
            <div className="border border-[2px] border-[#0582CA] rounded-xl text-[#0582CA] p-4 lg:p-10 hover:bg-[#0582CA] hover:text-white w-full lg:w-auto">
              <p>Descargar CV</p>
              <p>(Español)</p>
            </div>
          </a>
          <a href="/Esteban_Romero_CV_English.pdf" download className="w-full">
            <div className="border border-[2px] border-[#0582CA] rounded-xl text-[#0582CA] p-4 lg:p-10 hover:bg-[#0582CA] hover:text-white w-full lg:w-auto">
              <p>Download CV</p>
              <p>(English)</p>
            </div>
          </a>
        </div>
        <div className="mt-5 lg:mt-0">
          <img
            src="/presentation.jpg"
            alt="Presentation"
            className="w-full max-w-[500px] rounded-xl mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
