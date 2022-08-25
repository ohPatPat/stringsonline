import MailIcon from "../../assets/img/decoration/icons/mail-icon.png";
import PhoneIcon from "../../assets/img/decoration/icons/phone-icon.png";
import CartIcon from "../../assets/img/decoration/icons/cart-icon.png";
import HomeIcon from "../../assets/img/decoration/icons/home-icon.png";
import BigLogo from "../../assets/img/decoration/header-bg.png";
import SmallLogo from "../../assets/img/decoration/LogoV2.png";
import { NavLink } from "react-router-dom";
import { Login } from "../../pages/login/Login.jsx";
import { useAuth } from "../../pages/login/Auth.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const Header = () => {

  const { loginData } = useAuth(Login);

  return (
    <header>
      <section id="Topheader">
        <div>
          <img src={MailIcon} alt="Mail icon" />
          <p>sale@stringsonline.com</p>
        </div>
        <div>
          <img src={PhoneIcon} alt="Phone icon" />
          <p>+45 98 12 22 68</p>
        </div>
        <div>
          <img src={CartIcon} alt="Cart icon" />
        </div>
      </section>
      <section id="HeaderNav">
        <NavLink to="/">
          <img src={SmallLogo} alt="Small logo" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/"> forside </NavLink>
            </li>
            <li>
            {!loginData.access_token &&
              <NavLink to="/Login"> Salgs- og handelbetingelser </NavLink>
            }
            {loginData.access_token &&
              <NavLink to="/Salgs"> Salgs- og handelbetingelser </NavLink>
            }

            </li>
            <li>
              <NavLink to="/Login">
                {loginData.access_token ? "Log ud" : "Log ind"}
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section id="HeaderSearch">
        <input type="text" placeholder="Indtast søgeord" />
        <button>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </section>
      <section id={loginData.access_token ? "Breadcrumps" : "BreadcrumpsOff"}>
          <NavLink to="/">
            <img src={HomeIcon} alt="Home icon" />
            <p>
               forside
            </p>
          </NavLink>
        <p>Ordrehistorik</p>
      </section>
    </header >
  );
};
