import { useForm } from "react-hook-form";
import { useLoginStore } from "./useLoginStore";
import { MetaTags } from "../../components/MetaTags.jsx";

export const Login = (props) => {
  const { setLoggedIn, setLogOut, setUser } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    setLogOut: store.setLogOut,
    setUser: store.setUser,
  }));

  const { register, handleSubmit } = useForm();

  const onSubmit = async (submitdata) => {
    const URL = "https://api.mediehuset.net/token";

    try {
      const response = await fetch(URL, {
        body: JSON.stringify(submitdata),
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      if (response.ok === true) {
        const data = await response.json();
        sessionStorage.setItem("token", JSON.stringify(data));
        setLoggedIn();
        setUser(data.username);
      }
    } catch (error) {
      if (error.status === 401) setLogOut();
      console.log(error);
    }
  };

  return (
    <main id="Login">
      <MetaTags title={props.title}></MetaTags>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: "Brugernavn er påkrævet" })}
          type="text"
          autoComplete="username"
          placeholder="brugernavn"
        />

        <input
          {...register("password", {
            required: "Password er et påkrævet felt",
          })}
          type="password"
          autoComplete="password"
          placeholder="Dit password"
        />
        <button>login</button>
      </form>
    </main>
  );
};

