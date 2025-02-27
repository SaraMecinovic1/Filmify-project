/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import CinemaPic from "../../assets/cinema.jpg";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUp } from "../../services/supabaseServices";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { DateOfBirthPicker } from "@/component/InputsCard/CalendarForBirthday";
import { SelectDemo } from "@/component/InputsCard/SelectDemo";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(20, "Name must not be longer than 20 characters."),
  lastname: z
    .string()
    .min(3, "Last name is required.")
    .max(25, "Last name must not be longer than 25 characters."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must have at least 6 characters"),
  birthDate: z
    .number()
    .refine((val) => val > 0, "Please select a valid date of birth."),
  gender: z.string().nonempty("Please select a gender."),
});

function SignUpToApp() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    register, // omogućava povezivanje inputa sa formom
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  // SubmitHandler - Tip iz React Hook Forme, definiše da je funkcija handler za slanje forme
  const onSubmit: SubmitHandler<any> = async (data) => {
    setIsSubmitting(true);
    const { email, password, name, lastname, birthDate, gender } = data;

    const signUpIsValid = await SignUp(email, password, {
      name,
      lastname,
      birthDate,
      gender,
    });

    setIsSubmitting(false);

    if (signUpIsValid) {
      navigate("/login");
    }
  };

  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex justify-center pt-[100px]"
      style={{ backgroundImage: `url(${CinemaPic})` }}
    >
      <div className="w-[650px] h-full p-7 text-center">
        <h1 className="text-accent text-2xl font-bold font-inter mb-2">
          SIGN UP
        </h1>
        <div className="w-full h-auto sm:h-auto pt-10 bg-[#191919] bg-opacity-90 rounded-lg flex items-center flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 px-7 py-5">
              <div>
                <p className="text-left pl-3 text-sm font-medium text-textColor">
                  Name
                </p>
                <Input
                  className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2"
                  type="text"
                  id="name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {String(errors?.name?.message)}
                  </p>
                )}
              </div>

              <div>
                <p className="text-left pl-3 text-sm font-medium text-textColor">
                  Last name
                </p>
                <Input
                  className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2"
                  type="text"
                  id="lastname"
                  {...register("lastname")}
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.lastname.message?.toString()}
                  </p>
                )}
              </div>

              <div>
                <p className="text-left pl-3 text-sm font-medium text-textColor">
                  Date of birth
                </p>
                <Controller
                  name="birthDate"
                  control={control}
                  rules={{
                    required: "Date of birth is required.",
                  }}
                  render={({ field }) => <DateOfBirthPicker {...field} />}
                />
              </div>

              <div>
                <p className="text-left pl-3 text-sm font-medium text-textColor">
                  Gender
                </p>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: "Gender is required." }}
                  render={({ field }) => (
                    <SelectDemo
                      {...field}
                      control={control}
                      name="gender"
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                  )}
                />
              </div>

              <div>
                <p className="text-left pl-3 text-sm font-medium text-textColor">
                  Email
                </p>
                <Input
                  className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2"
                  type="email"
                  id="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>

              <div>
                <p className="text-left pl-3 text-sm font-medium text-textColor">
                  Password
                </p>
                <Input
                  className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2"
                  type="password"
                  id="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              variant="secondary"
              className="mt-5 mb-2 rounded-2xl w-[200px] text-accent"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "CREATE ACCOUNT"}
            </Button>

            <p
              onClick={() => navigate("/login")}
              className="font-medium text-[12px] pr-5 mb-3 text-accent hover:text-red-500 text-right"
            >
              {" "}
              I ALREADY HAVE ACCOUNT
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpToApp;
