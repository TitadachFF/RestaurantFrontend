import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword:'',
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState({message: ""});
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (user.confirmpassword === user.password) {
        const register = await AuthService.register
        (user.username, user.email, user.password);
        navigate("/signin");
      } else {
        setError(true);
        setErrorMessage({ message: "Failed Password mis"})
      }
      // Assuming successful signup, you can navigate to a success page or login page.
     
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className=" mt-[90px] h-[700px] flex justify-center items-center ">
  
      <div className="row form">
        <div className="col-6 card justify-content-center">
        <h1 className=" font-bold text-[30px]">สมัครสมาชิก</h1>
          <h5 className="card-header">สร้างบัญชีของคุณ</h5>
          {/* <div className="error">{error && 'Something went wrong.'}</div> */}
          <div className="card-body">
            <form>
              <div className="form-group">
              <label htmlFor="username" className="text-[20px]">*ชื่อผู้ใช้ : </label>
              <br />
                <input
                  type="text"
                  className="form-control rounded-lg w-[500px]"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  value={user.username}
                />
              </div>
<br />
              <div className="form-group">
                <label className="text-[20px]" htmlFor="email " >*อีเมล์</label>
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
                  *รหัสผ่าน :
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
              <div className="form-group">
                <label className="text-[20px]"  htmlFor="confirmpassword">*ยืนยันรหัสผ่าน:</label>
             <br />
                <input
                  type="password"
                  className="form-control rounded-lg w-[500px]"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={user.confirmpassword}
                />
              </div>
<br />
<div className="flex justify-center">
              <Link to="/signin"
                type="submit"
                className="btn btn-success  bg-pink-500 text-white rounded-xl p-3 mr-2 "
                onClick={handleSignup}
              >
                ลงทะเบียน
              </Link>
              
              </div>
              <label htmlFor="name" className="text-[15px] mt-[10px] text-red-500 justify-end flex">*โปรดตรวจสอบรายละเอียดก่อนทำลงทะเบียน</label>{" "}
              <hr className="my-5 border-blue-gray-300 decoration-dashed" />
              &nbsp;
              <div className=" justify-end flex">
              <p className=" mr-[10px]">คุณมีบัญชีอยู่เเล้วใช่ไหม ?</p>
              <Link to="/signin" className=" text-pink-500 font-bold ">
                เข้าสู่ระบบ
              </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Signup;