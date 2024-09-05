/* eslint-disable no-unused-vars */
import { useState } from "react";
import Footer from "../components/Footer";
import PageTop from "../components/PageTop";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    username: "",
    number: "",
    location: "select",
    address: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setSignupData((s) => {
      return { ...s, [name]: value };
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    if (
      signupData.address !== "" &&
      signupData.number !== "" &&
      signupData.email !== "" &&
      signupData.location !== "select" &&
      signupData.password !== "" &&
      signupData.username !== ""
    ) {
      try {
        const res = await fetch("http://localhost:8080/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
          return;
        }
        setSuccess(data);
        if (data == false) {
          window.alert("please enter a diferent email");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      window.alert("enter data");
    }
  };

  return (
    <>
      <PageTop name="sign up" />
      {success ? (
        <div className="mx-auto my-10 flex w-fit flex-col items-center border-2 border-gold bg-white2 p-12 font-Josefin">
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
          <p className="w-[400px] pt-5 text-center text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            illum, fugiat vitae minima eligendi dolor atque hic autem amet omnis
            quod,
          </p>
          <Link to={"/login"}>
            <button className="mt-8 h-12 w-[400px] bg-gold capitalize text-black">
              sign in
            </button>
          </Link>
        </div>
      ) : (
        <section className="mx-auto my-12 flex w-[700px] flex-col items-center border-2 border-gold bg-white2 py-12 font-Josefin [&_input]:px-3 [&_input]:placeholder:capitalize">
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
          <p className="w-1/2 pt-5 text-center text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            illum, fugiat vitae minima eligendi dolor atque hic autem amet omnis
            quod,
          </p>
          <form
            action=""
            className="flex w-[450px] flex-col space-y-2 py-8 *:h-12 *:border *:border-black"
          >
            <input
              type="emal"
              onChange={handleChange}
              value={signupData.email}
              name="email"
              placeholder="enter your email"
              required
            />
            <input
              type="text"
              onChange={handleChange}
              value={signupData.username}
              name="username"
              placeholder="enter your username"
              required
            />
            <div className="flex gap-2 border-none *:w-1/2 *:border *:border-black">
              <input
                placeholder="enter your phone number"
                type="number"
                onChange={handleChange}
                value={signupData.number}
                name="number"
                required
              />
              <select onChange={handleChange} name="location">
                <option value="select" defaultChecked>
                  --select--
                </option>
                <option value="galle">galle</option>
                <option value="columbo">colombo</option>
                <option value="gampaha">gampaha</option>
                <option value="matara">matara</option>
              </select>
            </div>
            <input
              className="h-24"
              type="text"
              onChange={handleChange}
              value={signupData.address}
              name="address"
              placeholder="enter your address"
            />
            <input
              placeholder="enter your password"
              type="password"
              onChange={handleChange}
              value={signupData.password}
              name="password"
              required
            />

            <button
              className="border-none bg-gold capitalize"
              onClick={sendData}
            >
              sign up
            </button>
          </form>
          <Link to={"/login"}>
            <button className="capitalize">sign in</button>
          </Link>
        </section>
      )}
      <Footer />
    </>
  );
};
export default SignUp;
