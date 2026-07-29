import { Link } from "react-router-dom";

export interface NavItem{
    name: string;
    url: string;
}

export default function NavItem(navItem: NavItem) {

  return <li>
            <Link to={navItem.url}>{navItem.name}</Link>
        </li>
}