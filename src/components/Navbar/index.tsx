import Link from "next/link";

function Navbar () {
    return (
      <div>
        <nav className="flex justify-between navbar bg-[rgba(255,255,255,.4)] lg:mx-20 my-5 p-4 rounded-[40px] mx-1">
          <Link href="/">
            <img
              src="/home.svg"
              alt=""
              className="lg:mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35] sm:mx-auto"
            />
          </Link>
          <Link href="/aboutme">
            <img
              src="/user-male.svg"
              alt=""
              className="lg:mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35] sm:mx-auto"
            />
          </Link>
          <Link href="/skills">
            <img
              src="/code.svg"
              alt=""
              className="lg:mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35] sm:mx-auto"
            />
          </Link>
          <Link href="/portfolio">
            <img
              src="/briefcase.svg"
              alt=""
              className="lg:mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35] sm:mx-auto"
            />
          </Link>
          <Link href="/form-contact">
            <img
              src="/mail.svg"
              alt=""
              className="lg:mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35] sm:mx-2"
            />
          </Link>
        </nav>
      </div>
    );
}

export default Navbar;