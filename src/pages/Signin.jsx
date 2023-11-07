import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the sign-in endpoint with user credentials (email and password).
      await axios.post(`${URL}/signin`, user);

      // Assuming successful sign-in, you can navigate to a dashboard or profile page.
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className=" h-[700px] flex justify-center  pt-[190px] mb-[150px]     ">
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h1 className=" font-bold text-[30px]">เข้าสู่ระบบ</h1>
          <h5 className="card-header">เข้าสู่ระบบบัญชีของคุณ</h5>
          {/* <div className="error">{error && 'Incorrect email or password.'}</div> */}
          <div className="card-body">
            <form>
              <div className="form-group ">
                <label htmlFor="email" className="text-[20px]">
                  อีเมล์ :
                </label>
                <br />
                <input
                  type="email"
                  className="form-control rounded-lg w-[500px]"
                  name="email"
                  placeholder="Example@gmail.com"
                  onChange={handleChange}
                  value={user.email}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password" className="text-[20px]">
                  รหัสผ่าน :
                </label>
                <br />
                <input
                  type="password"
                  className="form-control rounded-lg w-[500px]"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={user.password}
                />
              </div>
              <br />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn btn-success  bg-pink-500 text-white rounded-xl p-3 mr-2 "
                  onClick={handleSignin}
                >
                  เข้าสู่ระบบ
                </button>
              </div>
              <hr className="my-5 border-blue-gray-300 decoration-dashed" />
              <div className=" justify-end flex">
                <p className=" mr-[10px]">คุณยังไม่มีบัญชีใช่ไหม ?</p>
                <Link to="/signup" className=" text-pink-500 font-bold ">
                  ลงทะเบียน
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
