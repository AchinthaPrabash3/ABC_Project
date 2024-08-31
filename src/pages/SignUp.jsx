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
    orders: [],
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
        <div className="flex flex-col items-center bg-white2 border-2 border-gold p-12 w-fit mx-auto my-10 font-Josefin">
          <div className="size-[100px] bg-main grid place-items-center rounded-full">
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
          <p className="w-[400px] text-sm text-center pt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            illum, fugiat vitae minima eligendi dolor atque hic autem amet omnis
            quod,
          </p>
          <Link to={"/login"}>
            <button className="capitalize w-[400px] h-12 bg-gold text-black mt-8">
              sign in
            </button>
          </Link>
        </div>
      ) : (
        <section className="w-[700px] bg-white2 mx-auto border-2 border-gold flex flex-col items-center [&_input]:px-3 font-Josefin [&_input]:placeholder:capitalize my-12 py-12">
          <div className="size-[100px] bg-main grid place-items-center rounded-full">
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
          <p className="w-1/2 text-sm text-center pt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            illum, fugiat vitae minima eligendi dolor atque hic autem amet omnis
            quod,
          </p>
          <form
            action=""
            className="*:border *:border-black flex flex-col space-y-2 *:h-12 w-[450px] py-8"
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
            <div className="flex border-none *:border *:w-1/2 gap-2 *:border-black">
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
              className="bg-gold border-none capitalize"
              onClick={sendData}
            >
              sign up
            </button>
          </form>
          <Link to={"/login"}>
            <button className=" capitalize">sign in</button>
          </Link>
        </section>
      )}
      <Footer />
    </>
  );
};
export default SignUp;
