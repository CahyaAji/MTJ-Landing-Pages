"use client"
import { menuItems } from "@/app/data/menuItems";
import MenuItems from "./MenuItems";


export default function Navbar() {
  return (
    <nav className="flex h-18 items-center">
      <ul className="block mr-8">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;

          return (
            <MenuItems items={menu} key={index}/>
          )
        })}
      </ul>
    </nav>
  )
};