import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }: { items: any }) => {
  const [isMenuDrop, setMenuDrop] = useState(false);

  return (
    <li className="inline-block">
      {items.submenu ? (
        <div className="py-4 hover:font-bold hover:text-blue-deep hover:shadow-lg" onMouseLeave={() => setMenuDrop(false)} onMouseOver={() => setMenuDrop(true)}>
          <Link className="px-2" href={items.url}>{items.title}</Link>
          <Dropdown submenus={items.submenu} dropdown={isMenuDrop} />
        </div>
      ) : (
        <Link className="px-2 py-4 hover:font-bold hover:text-blue-deep hover:shadow-lg" href={items.url}>{items.title}</Link>
      )}
    </li>
  )
}

export default MenuItems;