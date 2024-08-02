import Button from "../../_components/Button";
import React from "react";

// import Image from "next/image";

const SideBar: React.FC = () => {
  return (
    <aside className="bg-white text-black dark:bg-zinc-600 dark:text-white">
      <nav className="px-2 py-2 md:px-4">
        <div className="flex flex-col gap-4">
          <Button className="" href="/registry/guitar">
            Guitars
          </Button>
          <Button className="" href="/registry/bass">
            Basses
          </Button>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
