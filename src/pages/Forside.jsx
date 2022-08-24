import { MetaTags } from "../components/MetaTags.jsx";
import Banner from "../assets/img/decoration/hero-banner.png";

export const Forside = (props) => {
  return (
    <main id="Forside">
      <MetaTags title={props.title}></MetaTags>
      <img src={Banner} alt="Banner" />
    </main>
  );
};
