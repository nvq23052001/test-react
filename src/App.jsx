import logo from "./logo.svg";
import "./App.css";
import userIcon from "./assets/user.svg";
import passwordIcon from "./assets/password.svg";
import eyesIcon from "./assets/eyes.svg";
import { useEffect, useState } from "react";
import instance from "./axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleGetName = (e) => {
    setName(e.target.value);
  };

  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const { data } = await instance.post("/api/auth/login", {
      //   ten_dang_nhap: name,
      //   mat_khau: password,
      // });
      const { data } = await fetch("http://42.96.44.215:9996/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ten_dang_nhap: name,
          mat_khau: password,
        }),
      });
      console.log(data);
      if (data) {
        localStorage.setItem("author", JSON.stringify(data.token));
        navigate("/table");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getData = ({ target }) => {
    setName(target.value);
  };
  console.log("re-render");
  return (
    <div className="App">
      <div className="content">
        <form action="">
          <input type="text" onChange={getData} />
        </form>
        <div className="wrapper">
          <div className="logo__wrapper">
            <img src={logo} alt="" className="logo" />
          </div>
          <p className="title">Đăng nhập</p>
          <p className="lorem">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <form action="" className="form" onSubmit={handleLogin}>
            <div className="wrapper__inp">
              <img src={userIcon} alt="" className="icon user__icon" />
              <input
                type="text"
                className="inp name"
                placeholder="Tên đăng nhập"
                onChange={handleGetName}
              />
            </div>
            <div className="wrapper__inp">
              <img src={passwordIcon} alt="" className="icon user__icon" />
              <input
                type="password"
                className="inp password"
                placeholder="Mật khẩu"
                onChange={handleGetPassword}
              />
              <img src={eyesIcon} alt="" className="icon user__icon" />
            </div>
            <button className="btn">Đăng nhập</button>
            <a href="/" className="forgot">
              Quên mật khẩu?
            </a>
          </form>
          <div className="bot">
            <span className="not_user">Chưa có tài khoản? </span>
            <a href="/" className="signup">
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
