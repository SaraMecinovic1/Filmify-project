import CinemaPic from "../../assets/cinema.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logIn } from "@/services/supabaseServices";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must have at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    setIsSubmitting(true);

    const { email, password } = data;

    const loginIsValid = await logIn(email, password);

    if (loginIsValid && loginIsValid.user) {
      navigate("/");
      console.log("Successful login", loginIsValid);
    } else {
      reset();
      console.log("Login failed: invalid credentials or other error");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${CinemaPic})` }}
    >
      <div className="w-auto h-auto p-7 text-center rounded-lg">
        <h1 className="text-secondary text-6xl font-bebas mb-5">FILMIFY</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center"
        >
          <div className="w-full sm:w-[270px] mb-4">
            <p className="text-left pl-4 text-sm font-medium text-textColor">
              Email
            </p>
            <Input
              className="w-full rounded-2xl pl-5 mt-2"
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-[14px] pt-2">
                {errors.email.message?.toString()}
              </p>
            )}
          </div>

          <div className="w-full sm:w-[270px] mb-6">
            <p className="text-left pl-4 text-sm font-medium text-textColor">
              Password
            </p>
            <Input
              className="w-full rounded-2xl pl-5 mt-2"
              type="password"
              id="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-[14px] pt-2">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="secondary"
            className="mt-5 mb-2 rounded-2xl w-[200px] text-accent"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "LOGIN"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
