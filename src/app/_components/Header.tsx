import Button from "./Button";
import Link from "next/link";
import React from "react";

// import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black dark:bg-zinc-600 dark:text-white">
      <nav className="px-2 py-2 md:px-4">
        <div className="flex gap-4">
          <button>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              {/* <Image
                src="/logo.png"
                alt="logo"
                width={48}
                height={48}
                className="p-2"
              /> */}
            </Link>
          </button>
          <Button className="" href="/guitars">
            View The Registry
          </Button>
          <input
            type="text"
            placeholder="Search"
            className="rounded-xl px-2 text-black"
          />
          <Button className="" href="/register-guitar">
            Register Your Guitar
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
