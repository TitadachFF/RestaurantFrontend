import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from "../services/api"



const Add = () => {
  const [restaurant, setRestaurant] =useState({
    name:"",
    type:"",
    image:""
  })
  const navigate = useNavigate();
  const [error , setError] = useState(false);

  const handleChange = (e) => {
    setRestaurant((prev)=>({...prev,[e.target.name]:e.target.value}));

  }

  const handleClick = async (e) =>{
    e.preventDefault();
    try {
      await axios.post(`/restaurants`,restaurant,config);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }


  return (
    <div className=" mt-[90px] h-[700px] flex justify-center items-center">

      <div className="row form">
        <div className="col-6 card justify-content-center">
        <h1 className=" font-bold text-[30px]">เพิ่มรายการอาหารใหม่</h1>
          <h5 className='card-header'>🍕🍔🍙🍱🥣</h5>
          <br />
          <div className="error">{error && "somethingwrong"}</div>
          <div className="card-body">

            <form>
              <div className="form-group">
                <label htmlFor="name" className="text-[20px]" >ชื่ออาหาร :</label>
                <br />
                <input 
                type="text"
                className="form-control rounded-lg w-[500px]"
                name="name" 
                placeholder='ชื่ออาหาร'
                onChange={handleChange}
                value={restaurant.name} />
              </div>
<br />
              
                <div className="form-group">
                  <label htmlFor="type" className="text-[20px]">ประเภทอาหาร :</label>
                  <br />
                  <input
                    type="text"
                    className="form-control rounded-lg w-[500px]"
                    name="type"
                    placeholder='ประเภทอาหาร' 
                    onChange={handleChange}
                    value={restaurant.type}/>
                </div>

                <br />
                  <div className="form-group">
                    <label htmlFor="image" className="text-[20px]">รูปภาพอาหาร :</label>
                    <br />
                    <input
                      type="text"
                      className="form-control rounded-lg w-[500px]"
                      name="image"
                      placeholder='[URL]ของรูปภาพอาหาร'
                      onChange={handleChange} 
                      value={restaurant.image}/>
                  </div>
<br />
<div className=' justify-center flex'>
                  <Link to=""                 className="btn btn-success  bg-pink-500 text-white rounded-xl p-3 mr-2 " onClick={handleClick}>
                    บันทึก
                  </Link>
              <Link to="/"                 className="btn btn-success  bg-gray-500 text-white rounded-xl p-3 mr-2 " >
                    ยกเลิก
                  </Link>
            
                  </div>
                  <hr className="my-5 border-blue-gray-300 decoration-dashed" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add