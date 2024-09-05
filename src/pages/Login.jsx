import { Link } from "react-router-dom";

import PageTop from "../components/PageTop";
import { useEffect, useState } from "react";
import UserPage from "../components/UserPage";

const LoginPage = () => {
  const [loginData, seLoginData] = useState({
    email: "",
    password: "",
  });
  const [reseved, setReseved] = useState([]);
  const [isLogedin, setIslogedin] = useState(false);

  const getData = (e) => {
    const { name, value } = e.target;
    seLoginData((l) => {
      return {
        ...l,
        [name]: value,
      };
    });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
      }
      if (data.length == 0) {
        window.alert("incorect email or passwod");
      }
      if (data.length > 0) {
        setReseved(data);
        setIslogedin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = window.sessionStorage.getItem("isLogedin");
    if (data !== null) {
      setIslogedin(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (reseved.length !== 0) {
      window.sessionStorage.setItem("userData", JSON.stringify(reseved));
    }
  }, [reseved]);

  useEffect(() => {
    const userData = window.sessionStorage.getItem("userData");
    if (userData !== null) {
      setReseved(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (reseved.length !== 0) {
      window.sessionStorage.setItem("isLogedin", JSON.stringify(isLogedin));
    }
  }, [reseved, isLogedin]);

  return (
    <>
      {isLogedin == false ? (
        <>
          <PageTop name="log in" />
          <section className="mx-auto my-6 flex w-[500px] flex-col items-center border-2 border-gold bg-white2 py-7">
            <div className="grid size-[100px] place-items-center rounded-full bg-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-16 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <p className="px-5 pt-5 text-center text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              illum, fugiat vitae minima eligendi dolor atque hic autem amet
              omnis quod,
            </p>
            <form
              action=""
              className="my-5 flex w-[400px] flex-col space-y-2 font-Josefin [&_input]:h-12 [&_input]:border [&_input]:border-black [&_input]:px-3 [&_input]:placeholder:capitalize"
            >
              <input
                type="text"
                name="email"
                onChange={getData}
                value={loginData.email}
                placeholder="enter your Email"
              />
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={getData}
                placeholder="enter your password"
              />
              <button className="h-12 bg-gold capitalize" onClick={login}>
                sign in
              </button>
            </form>
            <Link to="/signup">
              <button className="h-12 font-Josefin capitalize">sign up</button>
            </Link>
          </section>
        </>
      ) : (
        <UserPage {...reseved[0]} setIslogedin={setIslogedin} />
      )}
    </>
  );
};
export default LoginPage;
