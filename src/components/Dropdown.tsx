import Link from "next/link"
import { UrlObject } from "url";

function Dropdown({ submenus, dropdown }: { submenus: any, dropdown: boolean }) {
  return (
    <ul className={`${dropdown ? "block" : "hidden"} absolute bg-[#FFFFFF] w-auto font-normal text-[#000000]`}>
      {submenus.map((submenu: { title: string; url: UrlObject }, index: number) => (
        <Link className="block py-2 px-4 m-auto hover:shadow-md hover:font-bold hover:text-blue-deep" key={index} href={submenu.url}>{submenu.title}</Link>
      ))}
    </ul>
  )
}

export default Dropdown;