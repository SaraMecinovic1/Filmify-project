import React from "react";
import CinemaPic from "../../assets/cinema.jpg";
import Inputs from "@/component/InputsCard";
import { Button } from "@/components/ui/button";

type Props = {};

function SignUp({}: Props) {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex justify-center pt-[100px]"
      style={{ backgroundImage: `url(${CinemaPic})` }}
    >
      <div className="w-[650px] h-full p-5 text-center ">
        <h1 className="text-accent text-2xl font-bold font-inter mb-2 ">
          SIGN UP
        </h1>
        <div className="w-full h-auto sm:h-auto pt-10 bg-[#191919] bg-opacity-90 rounded-lg flex items-center flex-col justify-center ">
          <Inputs />
          <Button variant="secondary" className="mt-5 mb-10  rounded-2xl w-[200px] text-accent">
            CREATE ACCOUNT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
