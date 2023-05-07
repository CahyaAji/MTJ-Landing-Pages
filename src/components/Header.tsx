import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex px-2 content-center shadow-lg sticky top-0 z-50 bg-[#FFFFFF] justify-between">
      <a className="inline-flex  my-0 px-4 py-2 hover:shadow-xl" href="/">
        <Image src="/logo_mtj.svg" width={20} height={28} alt="MTJ Logo"/>
        <span className="my-auto ml-2 font-semibold text-lg">Menoreh Tanjung Jaya</span>
      </a>
      <Navbar/>
    </header>
  )
}