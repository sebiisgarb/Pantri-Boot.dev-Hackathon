import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import RightInfoCard from "../components/RightInfoCard";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      <div
        className="absolute top-8 left-16 font-bold text-5xl text-purple-500"
        style={{ fontFamily: '"Bitcount Prop Double", sans-serif' }}
      >
        Pantri
      </div>
      <div className="flex flex-row justify-evenly items-center h-screen ">
        <div className="w-full max-w-sm md:max-w-md">
          {isLoggedIn ? (
            <LoginForm onToggleForm={toggleForm} />
          ) : (
            <RegisterForm onToggleForm={toggleForm} />
          )}
        </div>
        <div className="hidden md:block w-1/3 h-4/5 rounded-3xl">
          <RightInfoCard />
        </div>
      </div>
    </div>
  );
};
export default Auth;
