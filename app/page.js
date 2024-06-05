import Link from "next/link";

import SignupForm from "@/components/layout/register/SignupForm";
import SocialLogin from "@/components/layout/register/SocialLogin";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center px-4 md:px-32 lg:px-48">
      <div className="border border-black rounded-b-3xl rounded-r-3xl w-full h-fit px-1 sm:px-8 md:px-12 lg:px-32 py-8 text-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Hello!</h2>

          <div className="text-sm flex space-y-4 items-end font-bold mb-8 text-[#aab2c8]">
            <hr className="flex-1 border-[#AAB2C8]" />
            Create Your Account
            <hr className="flex-1 border-[#AAB2C8]" />
          </div>

          <SignupForm />

          <p className="uppercase my-6 text-sm font-bold">or</p>

          <SocialLogin />

          <div className="my-7 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="uppercase text-[#1F64FF]">
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
