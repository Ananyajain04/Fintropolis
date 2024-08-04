import React from "react";
import { Input } from "@/components/ui/input";
import "../index.css";
import { Link } from "react-router-dom";

function Gobiggohome() {
  return (
    <div
      class="Mainpage"
      className="w-screen h-screen text-white font-calistoga font-200"
    >
      <div
        class="biggergrid"
        className="w-full h-screen grid grid-cols-10 grid-rows-10 bg-[#d4d7ea] gap-5 text-white justify-center text-left"
      >
        <div
          class="navbar"
          className="col-start-1 col-end-2 row-start-1 row-end-11 bg-[#001579]"
        >
          <div className="h-[60%] mt-[80px] flex flex-col flex-stretch items-center">
            <div className="bg-[#001579] flex-1">
              <img src="/src/images/Vector.png" alt="" className="" />
            </div>
            <div className="bg-[#001579] flex-1">
              <Link to="/profile">
                <img src="/src/images/person.png" alt=""></img>
              </Link>
            </div>
            <div class="bg-[#001579] flex-1">
              <img src="/src/images/question-mark.png" alt="" />
            </div>
            <div class="bg-[#001579] flex-1">
              <img src="/src/images/Vector (1).png" alt="" />
            </div>
            <div class="bg-[#001579] flex-1">
              <img src="/src/images/Group.png" alt="" />
            </div>
            <div class="bg-[#001579] flex-1">
              <Link to="/education">
                <img src="/src/images/education.png" alt="Education" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-11 row-start-1 row-end-2 bg-white ">
          <p className="col-start-1 col-end-2 row-start-1 row-end-3 font-robot font-bold text-[#0a0f26] text-4xl text-left p-[10px]">
            FINTROPOLIS
          </p>
        </div>
        <div className="col-start-2 col-end-7 row-start-2 row-end-3 rounded-lg">
          <div
            class="smalldetails"
            className="grid grid-cols-2 grid-rows-2 text-left justify-center items-center w-[100%] h-[100%]"
          >
            <h2 className="col-start-1 col-end-3 row-start-1 row-end-2 text-[#001579]">
              Available Balance
            </h2>
            <h2 className="col-start-1 col-end-3 row-start-2 row-end-3 text-[#001579]">
              Rs. 12,12,300
            </h2>
          </div>
        </div>
        <div className="col-start-7 col-end-9 row-start-1 row-end-2 flex justify-right items-center mr-[10px] ">
          <div className="h-[60%] w-[80%] bg-[#2b2a9f] flex justify-center items-center rounded-lg">
            <p className="pt-[5px] pb-[5px]">4th Aug 2024</p>
          </div>
        </div>
        <div className="col-start-9 col-end-11 row-start-1 row-end-2 flex flex-row pr-[40px] pl-[5px] w-[80%] ml-[20%]">
          <h2 className="flex-1 self-center text-[#001579]">Ananya Jain</h2>
          <img
            src="src/images/user.png"
            alt="nope"
            className="h-[50px] w-[50px] self-center"
          ></img>
        </div>
        <div className="grid grid-cols-4 grid-rows-8 gap-5 w-[97%] h-[95%] bg-[#d4d7ea] text-white col-start-2 col-end-11 row-start-3 row-end-11">
          <div
            class="div1"
            className="bcol-start-1 col-end-2 row-start-1 row-end-3 bg-[#010d47] rounded-lg"
          >
            <p className="p-3">Total net worth</p>
            <hr className="w-[90%] mx-auto"/>
          </div>
          <div className="col-start-2 col-end-3 row-start-1 row-end-4 rounded-lg bg-[#001579]">
            <p className="p-3">Spendings</p>
            <hr className="w-[90%] mx-auto"/>
          </div>
          <div className="col-start-3 col-end-4 row-start-1 row-end-6 rounded-lg bg-[#001579]">
            <h2 className="p-3">Goals</h2>
            <hr className="w-[90%] mx-auto"/>
          </div>
          <div className="flex flex-row">
            <Input
              className="col-start-4 col-end-5 row-start-1 row-end-2 rounded-lg h-[100%] bg-[#001579] border-0 placeholder-[#d4d7ea]"
              type="text"
              placeholder="Search for stocks"
            />
          </div>
          <div className="col-start-1 col-end-2 row-start-3 row-end-6 rounded-lg bg-[#001579]">
            <p className="p-3">Income Sources</p>
            <hr className="w-[90%] mx-auto"/>
          </div>
          <div className="col-start-2 col-end-3 row-start-4 row-end-6 rounded-lg bg-[#001579]">
            <p className="p-3">Income</p>
            <hr className="w-[90%] mx-auto"/>
          </div>
          <div className="col-start-4 col-end-5 row-start-2 row-end-9 rounded-lg bg-[#001579]">
            <p className="p-3">Reccomended Stocks</p>
            <hr className="w-[90%] mx-auto"/>
          </div>
          <div className="col-start-1 col-end-2 row-start-6 row-end-9 rounded-lg bg-[#001579]">
            <p className="p-3">Incomes and Expenses</p>
            <hr className="w-[90%] mx-auto"/>
          </div>
          <div className="grid grid-cols-1 grid-rows-4  col-start-2 col-end-4 row-start-6 row-end-9 rounded-lg bg-[#001579]">
            <div className="flex flex-row justify-center text-center ">
            <p className="p-3 flex-1">Assets</p>
            <p className="p-3 flex-1">Liabilities</p>
            </div>
            <hr className="mx-auto w-[90%]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gobiggohome;
