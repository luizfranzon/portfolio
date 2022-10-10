import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

import "./Header.scss";

export function Header() {
    return (
        <header>
            <div>
                <img
                    className="logo"
                    src={logo}
                    alt="Logo do site, escrito luizfranzon.dev com uma fonta branca, entre colchetes azuis"
                    onClick={() => window.location.replace("/")}
                />
                <nav>
                    <NavLink end to="/">
                        Home
                    </NavLink>
                    <NavLink className="hover-underline-animation" to="/sobre">
                        Sobre mim
                    </NavLink>
                    <NavLink
                        className="hover-underline-animation"
                        to="/conhecimentos"
                    >
                        Conhecimentos
                    </NavLink>
                    <NavLink
                        className="hover-underline-animation"
                        to="/contato"
                    >
                        Contato
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
