import { useAuthContext } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';



const Profile = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();
    const handleNavigateToHomePage = () => {
        navigate('/');
      };
    return (
        <div className="  mt-[20px] h-[700px] flex justify-center items-center ">
            <div className="row">
                <div className="col-6 card profile my-2 light"
                    style={{ width: "500px", borderRadius: "20px" }}>
                    <div className="crad-header text-[40px]"> ข้อมูลผู้ใช้</div>
                    <div className="card-body">
                        <div className="flex">
                        <b className="text-[20px]" >ชื่อผู้ใช้ : </b>
                      <div className="card-title text-[20px] "> &nbsp;{user.username}</div>
                      </div>
                      <br />
                        <div className="card-text">
                            <b className="text-[20px] text-pink-400" >Token : </b>
                            {user.accessToken.substring(0, 20)}...
                            {user.accessToken.substring(user.accessToken.length - 20)}
                        </div>
                        <br />
                        <div className="card-text">
                            <b className="text-[20px]">หมายเลข ID :</b>  {user.id}
                            <br /> <br />
                            <b className="text-[20px]  " >อีเมล์ :</b> {user.email}
                            
                            <br />
                            <div className=" justify-center text-center">
                            <br />
                           
                            <b className="text-red-500" >ตำเเหน่ง / บทบาท</b> 
                            <br />

                            <ul>
                                {user.roles && 
                                user.roles.map((role, index) => <il key={index}>{role}</il> )}
                            </ul>
                            </div>
                            <hr className="my-5 border-blue-gray-300 decoration-dashed" />
                            <div className="flex justify-center">
      <button
        type="button"
        className="btn btn-success bg-pink-500 text-white rounded-xl p-3 mr-2"
        onClick={handleNavigateToHomePage}
      >
        กลับสู่หน้าหลัก
      </button>
    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile