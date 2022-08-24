import { MetaTags } from "./../components/MetaTags.jsx";

export const Fejl = (props) => {
  /** window.location.href gets the current url from browser */
  const path = window.location.href;
  /** strips the url fro everything up to the last / */
  const url = path.substring(path.lastIndexOf("/") + 1);

  return (
    <main id="Fejl">
      <MetaTags title={props.title}></MetaTags>
      <div>siden {url} 404 - Kan ikke findes</div>
    </main>
  );
};
