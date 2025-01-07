import { useState } from "react";
import CinemaPic from "../../assets/cinema.jpg";
import Inputs from "@/component/InputsCard";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "../../services/supabaseServices";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(20, "Name must not be longer than 20 characters."),
  lastname: z
    .string()
    .min(3, "Lastname is required.")
    .max(25, "Lastname must not be longer than 25 characters."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must have at least 6 characters"),
  birthDate: z.number().min(1, "Please select a valid date of birth."),
  gender: z.string().nonempty("Please select a gender."),
});

function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    const { email, password, name, lastname, birthDate, gender } = data;
    const signUpError = await signUp(email, password, {
      name,
      lastname,
      birthDate,
      gender,
    });

    setIsSubmitting(false);

    if (signUpError) {
      console.log("Error during signup:", signUpError);
    }
  };

  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex justify-center pt-[100px]"
      style={{ backgroundImage: `url(${CinemaPic})` }}
    >
      <div className="w-[650px] h-full p-7 text-center ">
        <h1 className="text-accent text-2xl font-bold font-inter mb-2 ">
          SIGN UP
        </h1>
        <div className="w-full h-auto sm:h-auto pt-10 bg-[#191919] bg-opacity-90 rounded-lg flex items-center flex-col justify-center ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <Inputs register={register} errors={errors} />
            <Button
              type="submit"
              variant="secondary"
              className="mt-5 mb-10 rounded-2xl w-[200px] text-accent"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "CREATE ACCOUNT"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
