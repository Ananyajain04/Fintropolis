import React from "react";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex-1 bg-[#001579]">
        <div className="h-[60%] mt-[80px] flex flex-col flex-stretch items-center">
          <div className="flex-1">
            <Link to="/home">
              <img src="./src/images/Vector.png" alt="" />
            </Link>
          </div>
          <div className="flex-1">
            <img src="./src/images/person.png" alt="" />
          </div>
          <div className="flex-1">
            <img src="./src/images/question-mark.png" alt="" />
          </div>
          <div className="flex-1">
            <img src="./src/images/Vector (1).png" alt="" />
          </div>
          <div className="flex-1">
            <img src="./src/images/Group.png" alt="" />
          </div>
          <div className="flex-1">
          <Link to="/home">
          <img src="./src/images/education.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-[10] bg-[#d4d7ea]  order-1 flex justify-center items-center">
        <div className="bg-white w-[100%] h-[75%] w-[75%]">
          <h1 className="p-[20px] font-calistoga">Your Profile</h1>
          <hr />
          <div className="grid grid-cols-2 grid-rows-5 justify-center items-center gap-[10px] mt-[25px] h-[60%] ml-[5%] ">
            <input type="text" placeholder="First Name" className="col-start-1 col-end-2 row-start-1 row-end-2 border-2 text-center rounded-lg w-[90%] pt-[10px] pb-[10px] placeholder-black"/>
            <input type="text" placeholder="Last Name" className="col-start-2 col-end-3 row-start-1 row-end-2 border-2 text-center rounded-lg w-[90%] pt-[10px] pb-[10px] placeholder-black"/>
            <input type="text" placeholder="Age" className="col-start-1 col-end-2 row-start-2 row-end-3 border-2 text-center  rounded-lg w-[90%] pt-[10px] pb-[10px] placeholder-black"/>
            <input type="email" placeholder="Email" className="col-start-1 col-end-2 row-start-3 row-end-4 border-2 text-center rounded-lg w-[90%] pt-[10px] pb-[10px] placeholder-black"/>
            <input type="text" placeholder="Company" className="col-start-2 col-end-3 row-start-3 row-end-4 border-2 text-center rounded-lg w-[90%] pt-[10px] pb-[10px] placeholder-black"/>
            <input type="text" placeholder="Goals" className="col-start-1 col-end-2 row-start-4 row-end-5 border-2 text-center rounded-lg w-[90%] pt-[10px] pb-[10px] placeholder-black"/>
            <input type="text" placeholder="Assets" className="col-start-1 col-end-2 row-start-5 row-end-6 border-2 text-center rounded-lg w-[90%] pt-[10px] pb-[10px] placeholder-black"/>
            <input type="text" placeholder="Liabilities" className="col-start-2 col-end-3 row-start-5 row-end-6 border-2 text-center rounded-lg w-[90%] pt-[10px] pb-[10px] placeholder-black"/>
          </div>
          <div className="flex flex-row justify-end mt-[10px]">
          <button className="text-center bg-[#5137ef] text-white mr-[10px]">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
