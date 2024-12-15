import React, { useContext, useState } from "react";
import { DataContext } from "../../components/DataProvider/Dataprovider";
import AuthStyle from "./AuthStyle.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { auth } from "../../Utlity/firebaseConfig/firebaseConfig";
import { Type } from "../../Utlity/action.type";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const Auth = () => {
  const { state, dispatch } = useContext(DataContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [errorcolor, setErrorcolor] = useState(false);
  const [Loading, setLoading] = useState({
    signin: false,
    Singup: false,
  });
  const navigator = useNavigate();
  const uselocation = useLocation();

  const AuthHandeler = (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      setLoading({ ...Loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userinfo.user,
          });
          setLoading({ ...Loading, signin: false });
          setErrorcolor(false);
          seterror("");
          navigator(
            `${
              uselocation?.state?.redirect ? uselocation?.state?.redirect : "/"
            }`
          );
        })
        .catch((error) => {
          seterror(error.message);
          setErrorcolor(true);
          setLoading({ ...Loading, login: false, signin: false });
        });
    } else {
      setLoading({ ...Loading, login: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userinfo.user,
          });
        })
        .catch((error) => {
          seterror(error.message);
          setErrorcolor(true);
          setLoading({ ...Loading, login: false, signin: false });
        });
      setLoading({ ...Loading, login: false });
      setErrorcolor(false);
      seterror("");
      navigator(
        `${uselocation?.state?.redirect ? uselocation?.state?.redirect : "/"}`
      );
    }
  };

  return (
    <>
      <section className={AuthStyle.login}>
        {/* Logo */}
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Logo"
          />
        </Link>

        {/* form */}
        <div className={AuthStyle.login__container}>
          <h3 style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
            {uselocation?.state?.msg}
          </h3>
          <h1>Sign in</h1>
          <form action="">
            <div>
              <label htmlFor="Email">Email</label>
              <input
                style={{ borderColor: errorcolor ? "red" : "black" }}
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                style={{ borderColor: errorcolor ? "red" : "black" }}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              onClick={AuthHandeler}
              name="signin"
              type="submit"
              className={AuthStyle.login_singimButton}
            >
              {Loading.signin ? (
                <div
                  style={{ transform: "scale(0.4)", display: "inline-block" }}
                >
                  <FadeLoader height={15} width={5} color="#123abc" />
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
          <p>
            by sign in to account you agree to the{" "}
            <mark> AMAZONE FAKE CLONE condition</mark> of use and sale, please
            set our privacy policy our Cokies and Notice and our interent- based
            Ads
          </p>
          {/* create account */}
          <button
            onClick={AuthHandeler}
            name="signup"
            type="button"
            className={AuthStyle.login__createAccount}
          >
            {Loading.Singup ? (
              <div style={{ transform: "scale(0.4)", display: "inline-block" }}>
                <FadeLoader height={15} width={5} color="#123abc" />
              </div>
            ) : (
              " create new amazone account"
            )}
          </button>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </section>
    </>
  );
};

export default Auth;
