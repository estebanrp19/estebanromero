import Link from "next/link";

function Navbar () {
    return (
      <div>
        <nav className="flex justify-between navbar bg-[rgba(255,255,255,.4)] mx-20 my-5 p-4 rounded-[40px]">
          <Link href="#">
            <img
              src="/home.svg"
              alt=""
              className="mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35]"
            />
          </Link>
          <Link href="#">
            <img
              src="/user-male.svg"
              alt=""
              className="mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35]"
            />
          </Link>
          <Link href="#">
            <img
              src="/code.svg"
              alt=""
              className="mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35]"
            />
          </Link>
          <Link href="#">
            <img
              src="/briefcase.svg"
              alt=""
              className="mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35]"
            />
          </Link>
          <Link href="#">
            <img
              src="/mail.svg"
              alt=""
              className="mx-20 filter invert hover:bg-[#fa7d35] p-1.5 rounded active:bg-[#fa7d35]"
            />
          </Link>
        </nav>
      </div>
    );
}

export default Navbar;