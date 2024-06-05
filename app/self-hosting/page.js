import React from "react";

import LogoutBtn from "@/components/ui/LogoutBtn";
import RoleProvider from "@/providers/RoleProvider";
import SelfHostingItem from "@/components/layout/selfHosting/selfHostingItem";

const SelfHostingPage = () => {
  return (
    <RoleProvider>
      <div className="py-10 px-16 flex justify-center flex-col items-end relative">
        <LogoutBtn />

        <div className="bg-white px-28 py-12 rounded-3xl w-full max-w-6xl mx-auto text-center space-y-3 mt-24">
          <h2 className="text-3xl text-black font-bold">
            Choose a template to deploy an application 🚀
          </h2>

          <p>
            Import your existing app or create a new one with our ready-made
            templates.
          </p>
        </div>

        <ul className="w-full max-w-6xl mx-auto mt-8 space-y-6">
          <div className="flex space-x-4 justify-between">
            <SelfHostingItem
              img="https://via.placeholder.com/150"
              heading="Create New App"
              paragraph="Create a new app with our ready-made templates"
            />

            <SelfHostingItem
              img="https://via.placeholder.com/150"
              heading="Create New App"
              paragraph="Create a new app with our ready-made templates"
            />
          </div>

          <div className="flex space-x-4 justify-between">
            <SelfHostingItem
              img="https://via.placeholder.com/150"
              heading="Create New App"
              paragraph="Create a new app with our ready-made templates"
            />

            <SelfHostingItem
              img="https://via.placeholder.com/150"
              heading="Create New App"
              paragraph="Create a new app with our ready-made templates"
            />
          </div>

          <div className="flex space-x-4 justify-between">
            <SelfHostingItem
              img="https://via.placeholder.com/150"
              heading="Create New App"
              paragraph="Create a new app with our ready-made templates"
            />

            <SelfHostingItem
              img="https://via.placeholder.com/150"
              heading="Create New App"
              paragraph="Create a new app with our ready-made templates"
            />
          </div>

          <div className="flex space-x-4 justify-between">
            <SelfHostingItem
              img="https://via.placeholder.com/150"
              heading="Create New App"
              paragraph="Create a new app with our ready-made templates"
            />

            <SelfHostingItem
              img="https://via.placeholder.com/150"
              heading="Create New App"
              paragraph="Create a new app with our ready-made templates"
            />
          </div>
        </ul>
      </div>
    </RoleProvider>
  );
};

export default SelfHostingPage;
