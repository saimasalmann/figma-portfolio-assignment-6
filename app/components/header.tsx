import Link from "next/link";
import React from "react";

interface HeaderProps {
  font: {
    className: string;
  };
}
function Header({ font }: HeaderProps) {
  return (
    <header className=" bg-[#CFA6A61C] ">
      <ul className={`${font.className} w-full flex items-center  text-lg   gap-5 justify-center  md:justify-end h-[100px] px-20 mx-auto py-[32px]  sm:h-auto`}>
        <li>
          <Link href="">Works</Link>
        </li>
        <li>
          <Link href="">Blog</Link>
        </li>
        <li>
          <Link href="">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
