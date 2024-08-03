import React from "react";
import { Input } from "@/components/ui/input";
import '../index.css';

function Gobiggohome () {
  return (
    <div class="Mainpage" className="w-screen h-screen text-white font-calistoga font-light">
      <div
        class="biggergrid"
        className="w-full h-screen grid grid-cols-10 grid-rows-10 bg-[#01084E] gap-4 text-white justify-center text-left"
      >
        <div
          class="navbar"
          className="col-start-1 col-end-2 row-start-1 row-end-11 p-[20%] h-[90vh] mt-[5vh] mb-[5vh] bg-[#181c3b] rounded-[50px] ml-[2.5vh] mr-[2.55vh]">
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Jan</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Feb</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Mar</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Apr</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">May</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Jun</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Jul</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Aug</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Sep</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Oct</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Nov</div>
          <div class="bg-[#181c3b] p-2.5 text-white text-center">Dec</div>
        </div>
        <div className="col-start-2 col-end-7 row-start-1 row-end-3 rounded-lg">
          <div class="smalldetails" className="grid grid-cols-2 grid-rows-2 text-center justify-center items-center w-[100%] h-[100%]">
            <h1 className="col-start-1 col-end-2 row-start-1 row-end-3 text-left font-calistoga font-bold">Fintropolis</h1>
            <h2 className="col-start-2 col-end-3 row-start-1 row-end-2 pt-[25px]">Available Balance</h2>
            <h2 className="col-start-2 col-end-3 row-start-2 row-end-3 pb-[25px]">Rs. 12,12,300</h2>
          </div>
        </div>
        <div className="col-start-7 col-end-9 row-start-1 row-end-3 flex justify-center items-center">
          <div className="h-[60%] w-[80%] bg-[#181c3b] flex justify-center items-center">
            <p>3nd August 2024</p>
          </div>
        </div>
        <div className="col-start-9 col-end-11 row-start-1 row-end-3 flex flex-row pr-[40px] pl-[5px] w-[80%] ml-[20%]">
          <h2 className="flex-1 self-center">Ananya Jain</h2>
          <img src="src/images/profileicon.png" alt="nope" className="h-[60px] w-[60px] self-center"/>
        </div>
        <div className="grid grid-cols-4 grid-rows-8 gap-5 w-[97%] h-[95%] bg-[#01084E] text-white col-start-2 col-end-11 row-start-3 row-end-11">
          <div
            class="div1"
            className="bcol-start-1 col-end-2 row-start-1 row-end-3 bg-[#04749D] rounded-lg"
          >
            <p className="p-3">Total net worth</p>
          </div>
          <div className="col-start-2 col-end-3 row-start-1 row-end-4 rounded-lg bg-[#181c3b]">
            <p className="p-3">Spendings</p>
          </div>
          <div className="col-start-3 col-end-4 row-start-1 row-end-6 rounded-lg bg-[#181c3b]">
            <h2 className="p-3">Goals</h2>
          </div>
          <div className="flex flex-row">
            <img src="src/images/searchicon.jpg" alt="" className="h-[100%] w-[40px] bg-[#181c3b]"/>
          <Input className="col-start-4 col-end-5 row-start-1 row-end-2 rounded-lg h-[100%] bg-[#181c3b] border-0" type="text" placeholder="Search for stocks"/>
          </div>
          <div className="col-start-1 col-end-2 row-start-3 row-end-6 rounded-lg bg-[#181c3b]">
            <p className="p-3">Income Sources</p>
          </div>
          <div className="col-start-2 col-end-3 row-start-4 row-end-6 rounded-lg bg-[#181c3b]">
            <p className="p-3">Income</p>
          </div>
          <div className="col-start-4 col-end-5 row-start-2 row-end-9 rounded-lg bg-[#181c3b]">
            <p className="p-3">Reccomended Stocks</p>
            <hr />
          </div>
          <div className="col-start-1 col-end-2 row-start-6 row-end-9 rounded-lg bg-[#181c3b]">
            <p className="p-3">Incomes and Expenses</p>
          </div>
          <div className="grid grid-cols-2 grid-rows-3  col-start-2 col-end-4 row-start-6 row-end-9 rounded-lg bg-[#181c3b] flex flex-row justify-center items-center">
            <p className="p-3 flex-1 flex-start">Assets</p>
            <p className="p-3 flex-1 flex-end">Liabilities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gobiggohome;
