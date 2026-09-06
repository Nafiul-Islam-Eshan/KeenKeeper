import { call, text, video } from "@/assets";
import Image from "next/image";

const actionImages = {
  call,
  video,
  text,
};

const dateContructor = new Date()

const month = dateContructor.toLocaleString("en-US", {
  month: "long",
});

const date = dateContructor.getDate();

const year = dateContructor.getFullYear();


const SelectedFriendCard = ({ action, name }) => {

  return (
    <div className="flex gap-4 w-full p-4 border border-[#E9E9E9] bg-white" >
      {/* Image */}
      <Image
        src={actionImages[action]}
        alt={`${action} icon`}
        height={30}
        width={50}
      />

      <div className="">
        <p className="text-lg"><span className="capitalize text-[#244D3F] font-bold">{action}</span> with {name}</p>
        <p className="">{month} {date}, {year} </p>
      </div>
    </div>
  );
};

export default SelectedFriendCard;
