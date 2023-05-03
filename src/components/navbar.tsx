import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex h-18 items-center justify-between">
      <Link className="inline-flex  my-0 px-4 py-2 hover:shadow-xl" href="/">
        <Image src="logo_mtj.svg" width={20} height={28} alt="MTJ Logo"/>
        <span className="my-auto ml-2 font-semibold text-lg">Menoreh Tanjung Jaya</span>
      </Link>
      <ul className="block mr-8">
        {/* <li className="inline-block">
          <Link className="px-2 py-4 font-medium hover:font-bold hover:text-blue-deep hover:shadow-lg" href="/">Home</Link>
        </li> */}
        <div className="inline-block py-4">
        <li className="inline-block">
          <Link className="px-2 py-4 font-medium hover:font-bold hover:text-blue-deep hover:shadow-lg" href="/ads">MTJ Ads/Periklanan</Link>
        </li>
        <li className="inline-block">
          <Link className="px-2 py-4 font-medium hover:font-bold hover:text-blue-deep hover:shadow-lg" href="/entertainment">MTJ Entertainment</Link>
        </li>

        {/* <li className="inline-block">
          <Link className="px-2 py-4 font-medium hover:font-bold hover:text-blue-deep hover:shadow-lg" href="/">More</Link>
        </li> */}
        </div>

        <li className="inline-block">
          <Link className="px-2 py-4 font-medium hover:font-bold hover:text-blue-deep hover:shadow-lg" href="/procurement">MTJ Procurement</Link>
        </li>
        <li className="inline-block">
          <Link className="px-2 py-4 font-medium hover:font-bold hover:text-blue-deep hover:shadow-lg" href="/kuliner">MTJ Kuliner</Link>
        </li>
        <li className="inline-block">
          <Link className="px-2 py-4 font-medium hover:font-bold hover:text-blue-deep hover:shadow-lg" href="/art">MTJ Art</Link>
        </li>

        
        {/* <li className="inline-block">
          <Link className="px-2 py-4 font-medium hover:font-bold hover:text-blue-deep hover:shadow-lg" href="/">Kontak</Link>
        </li> */}

      </ul>
    </nav>
  )
}