import Image from "next/image";
import friends from "../../../public/friends.json";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive, FiVideo } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";

const FriendsDetailPage = async ({ params }) => {
  const { cardId } = await params;
  const friend = friends.find((e) => e.id == cardId);

  const {
    name,
    bio,
    picture,
    status,
    tags,
    email,
    days_since_contact,
    goal,
    next_due_date,
  } = friend;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(next_due_date));

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center lg:w-[70%] md:w-[85%] mx-auto  px-6 bg-[#F5FAFC] my-20">
      {/* Left */}
      <div className="w-93 space-y-4 justify-center items-center">
        {/* Up */}
        <div className=" p-5 bg-white rounded-lg shadow-md space-y-2">
          {/* Image */}
          <div className="relative mx-auto mb-4 h-22 w-22 overflow-hidden rounded-full">
            <Image
              src={picture}
              alt={`Image of ${name}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Name, Status, tags */}
          <div className="p-4 text-center">
            {/* Name */}
            <h2 className="text-2xl font-bold text-center">{name} </h2>
            {/* Status */}
            <div
              className={`my-2 text-white badge p-3 rounded-4xl capitalize ${status === "almost due" ? `bg-[#EFAD44] ` : status === "overdue" ? `bg-[#EF4444] ` : `bg-[#244D3F] `}`}
            >
              {status.replace("-", " ")}
            </div>
            {/* tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {tags.map((tag, i) => (
                <div
                  key={i}
                  className="badge bg-[#CBFADB] p-3 text-[#244D3F] rounded-4xl truncate uppercase"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          {/* Bio */}
          <p className="text-gray-600 font-medium"> {`"${bio}"`} </p>
          {/* Email */}
          <p className="text-sm text-gray-600">{`Prefered: ${email}`} </p>
        </div>

        {/* Down */}
        <div className="flex flex-col gap-2">
          {/* Snooze button */}
          <div>
            <button className="btn btn-ghost w-full shadow-sm border border-gray-300 text-lg bg-white font-medium">
              <RiNotificationSnoozeLine /> Snooze 2 weeks
            </button>
          </div>
          {/* Archive button */}
          <div>
            <button className="btn btn-ghost w-full shadow-sm border border-gray-300 text-lg bg-white font-medium">
              {" "}
              <FiArchive /> Archive
            </button>
          </div>
          {/* Delete button */}
          <div>
            <button className="btn btn-ghost w-full shadow-sm border border-gray-300 text-lg bg-white text-[#EF4444] font-medium">
              {" "}
              <RiDeleteBinLine /> Delete
            </button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-evenly h-full gap-6">
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center ">
          <div className=" bg-white rounded-lg shadow-md text-center p-6">
            <h1 className="text-2xl font-bold">{days_since_contact}</h1>
            <p className="opacity-50">Days Since Contact</p>
          </div>
          <div className=" bg-white rounded-lg shadow-md text-center p-6">
            <h1 className="text-2xl font-bold">{goal}</h1>
            <p className="opacity-50">Goal (Days)</p>
          </div>
          <div className=" bg-white rounded-lg shadow-md text-center p-6">
            <h1 className="text-2xl font-bold">{formattedDate}</h1>
            <p className="opacity-50">Next Due</p>
          </div>
        </div>

        {/* Relationship goal card */}
        <div className="bg-white space-y-4 rounded-lg shadow-md text-center p-6">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-[#244D3F] ">
              Relationship Goal
            </h2>
            <button className="btn btn-ghost bg-[#E9E9E9] ">Edit</button>
          </div>
          <p className="text-left text-lg">
            <span className="opacity-50">Connect every</span>
            <span className="font-medium"> {goal} Days </span>
          </p>
        </div>

        {/* Quick Check-In Card */}
        <div className="bg-white space-y-4 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#244D3F] ">Quick Check-In</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Call */}
            <button className=" bg-[#E9E9E9] w-45 h-30 mx-auto rounded-lg p-5 btn">
              <div className="grid justify-center items-center gap-2">
                <BiPhoneCall className="text-3xl mx-auto" />
                <p className="">Call</p>
              </div>
            </button>

            {/* Text */}
            <button className=" bg-[#E9E9E9] w-45 h-30 mx-auto rounded-lg p-5 btn">
              <div className="grid justify-center items-center gap-2">
                <MdOutlineTextsms className="text-3xl mx-auto" />
                <p className="">Text</p>
              </div>
            </button>

            {/* Video */}
            <button className=" bg-[#E9E9E9] w-45 h-30 mx-auto rounded-lg p-5 btn">
              <div className="grid justify-center items-center gap-2">
                <FiVideo className="text-3xl mx-auto" />
                <p className="">Video</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailPage;
