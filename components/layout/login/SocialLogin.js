"use client";

import Image from "next/image";

const SocialLogin = () => {
  return (
    <div className="flex justify-between">
      <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 text-nowrap">
        <span>Sign Up with Google</span>
        <Image
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
          width={24}
          height={24}
        />
      </button>

      <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 text-nowrap">
        <span>Sign Up with Google</span>
        <Image
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          loading="lazy"
          alt="google logo"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default SocialLogin;
