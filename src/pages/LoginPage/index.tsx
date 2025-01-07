import CinemaPic from "../../assets/cinema.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
type Props = {};

const Login = (props: Props) => {
  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${CinemaPic})` }}
    >
      <div className="w-auto h-auto p-7 text-center rounded-lg">
        <h1 className="text-secondary text-6xl font-bebas mb-5">FILMIFY</h1>
        <form className="w-full flex flex-col items-center">
          <div className="w-full sm:w-[270px] mb-4">
            <p className="text-left pl-4 text-sm font-medium text-textColor">
              Email
            </p>
            <Input
              className="w-full rounded-2xl pl-5 mt-2"
              type="email"
              id="email"
            />
          </div>

          <div className="w-full sm:w-[270px] mb-6">
            <p className="text-left pl-4 text-sm font-medium text-textColor">
              Password
            </p>
            <Input
              className="w-full rounded-2xl pl-5 mt-2"
              type="password"
              id="password"
            />
          </div>

          <Button
            type="submit"
            variant="secondary"
            className="rounded-2xl w-[270px]  text-accent"
          >
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
