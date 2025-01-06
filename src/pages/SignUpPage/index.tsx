import React from "react";
import CinemaPic from "../../assets/cinema.jpg";

type Props = {};

function SignUp({}: Props) {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex justify-center pt-[100px]"
      style={{ backgroundImage: `url(${CinemaPic})` }}
    >
      <div className="w-[650px] h-full p-5 text-center ">
        <h1 className="text-accent text-2xl font-bold font-inter mb-2 ">SIGN UP</h1>
        <div className="w-full h-full bg-[#191919] bg-opacity-90 rounded-md ">
          
        </div>
      </div>
    </div>
  );
}

export default SignUp;
