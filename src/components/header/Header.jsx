import MailIcon from "../../assets/img/decoration/icons/mail-icon.png";
import PhoneIcon from "../../assets/img/decoration/icons/phone-icon.png";
import CartIcon from "../../assets/img/decoration/icons/cart-icon.png";
import HomeIcon from "../../assets/img/decoration/icons/home-icon.png";
import BigLogo from "../../assets/img/decoration/header-bg.png";
import SmallLogo from "../../assets/img/decoration/LogoV2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
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
        <img src={SmallLogo} alt="Small logo" />
        <nav>
          <ul>
            <li> forside </li>
            <li> Salgs- og handelbetingelser </li>
            <li> Login </li>
          </ul>
        </nav>
      </section>
      <section id="HeaderSearch">
        <input type="text" placeholder="Indtast søgeord" />
        <button>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </section>
      <section id="Breadcrumps">
        <nav>
          <img src={HomeIcon} alt="Home icon" />
          <p>Forside</p>
        </nav>
        <p>Ordrehistorik</p>
      </section>
    </header>
  );
};
