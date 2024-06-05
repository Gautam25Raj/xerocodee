import LoginForm from "@/components/layout/login/LoginForm";
import LoginHeading from "@/components/layout/login/LoginHeading";
import SocialLogin from "@/components/layout/login/SocialLogin";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="h-screen flex items-center justify-center px-4 md:px-32 lg:px-48">
      <div className="border-4 border-[#aab2c86e] rounded-b-3xl rounded-r-3xl w-full h-fit px-1 sm:px-8 md:px-12 lg:px-32 py-8 text-center relative overflow-hidden flex bg-white">
        <div className="w-full lg:w-3/4 xl:w-3/5">
          <LoginHeading />

          <div className="text-sm flex space-y-4 items-end font-bold mb-24 text-[#aab2c8]">
            <hr className="flex-1 border-[#AAB2C8]" />
            Login to your Account
            <hr className="flex-1 border-[#AAB2C8]" />
          </div>

          <LoginForm />

          <p className="uppercase my-6 text-sm font-bold">or</p>

          <SocialLogin />

          <div className="my-7 text-sm z-20 relative">
            Don&apos;t have an Account?{" "}
            <Link href="/" className="uppercase text-[#1F64FF]">
              Sign up
            </Link>
          </div>

          <Image
            src="/login/login-bg.svg"
            width={400}
            height={300}
            alt=""
            className="absolute bottom-0 right-0"
          />
        </div>

        <div className="w-px bg-[#aab2c879] ml-40 hidden xl:block"></div>
      </div>
    </main>
  );
}
