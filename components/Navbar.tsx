import Link from "next/link";
import Image from "next/image";

import Custombtn from "./Custombtn";

const Navbar = () => {
  return (
    <>
      <header className="w-full absolute z-10  ">
        <nav
          className="max-w-[1440px] mx-auto 
        flex justify-between items-center sm:px-16 px-6 py-4"
        >
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/1.svg"
              alt="logo"
              className="object-contain -mt-12"
              width={138}
              height={1}
            ></Image>
          </Link>
          <div className="flex gap-6">
            <Link href="/login">
              <Custombtn
                title="Sign in"
                btnType="button"
                containerstyle="text-primary-blue -mr-16 rounded-full bg-white -mt-10 min-w-[130px]"
              />
            </Link>
            <Link href="/signup">
              <Custombtn
                title="Sign up"
                btnType="button"
                containerstyle="rounded-full bg-white -mt-10 min-w-[130px]"
              />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
