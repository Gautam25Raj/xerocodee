import { CachedOutlined } from "@mui/icons-material";
import Image from "next/image";

export default function Steps() {
  const steps = [
    {
      id: 1,
      name: "Connect to Cloud",
      tiles: [
        {
          id: 1,
          name: "AWS",
          image: "aws",
        },
        {
          id: 2,
          name: "GCP",
          image: "google-cloud",
        },
      ],
    },
    {
      id: 2,
      name: "Connect to Source Code",
      tiles: [
        {
          id: 1,
          name: "Github",
          image: "github",
        },
        {
          id: 2,
          name: "Gitlab",
          image: "gitlab",
        },
        {
          id: 3,
          name: "BitBucket",
          image: "bit",
        },
      ],
    },
    {
      id: 3,
      name: "Connect to DataSource",
      tiles: [
        {
          id: 1,
          name: "MongoDB",
          image: "mongo",
        },
        {
          id: 2,
          name: "RedisDB",
          image: "redis",
        },
        {
          id: 3,
          name: "Postgresql",
          image: "sql",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10 relative flex-1 mt-10">
      <div className="bg-white h-full w-3 absolute rounded-xl z-0 left-[1.1rem]"></div>
      {steps.map((step) => {
        return (
          <div key={step.id} className="flex gap-10 z-10 relative">
            <div className=" bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center ">
              <div className="bg-white rounded-full p-2"></div>
            </div>

            <div key={step.id} className="flex flex-col">
              <p className="font-bold">Step {step.id}</p>
              <p>{step.name}</p>
              <div className="flex gap-4 mt-5">
                {step.tiles.map((tile) => {
                  return (
                    <div
                      key={tile.id}
                      className="bg-white shadow-md h-24 rounded-xl w-52 p-4 flex items-center justify-between"
                    >
                      <div className=" flex flex-col h-full justify-between">
                        <p className="font-bold text-xl mt-3">{tile.name}</p>
                        <div className="flex gap-1 items-center">
                          <div className="bg-red-500 rounded-full p-1"></div>
                          <div className="bg-green-500 rounded-full p-1"></div>
                          <CachedOutlined className="text-xs" />
                        </div>
                      </div>
                      <Image
                        src={`/dashboard/main/${tile.image}.svg`}
                        width={80}
                        height={120}
                        alt="Logo"
                        className=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
