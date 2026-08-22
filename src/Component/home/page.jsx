import Image from "next/image";
import friends from "../../../public/friends.json";

const HomePage = () => {
  return (
    <div>
      {/* banner section */}
      <div className="flex flex-col py-5 gap-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Friends to keep close in your life
        </h1>

        <p className="text-md opacity-70 py-2 md:px-60 text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="w-[148] mx-auto btn bg-[#244D3F] text-white">
          + Add a Friend
        </button>
      </div>

      {/* Summary cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {/* Card 1 = Total Friend */}
        <div className="card h-[137] w-[265] md:w-full mx-auto bg-base-100 shadow-md">
          <div className="card-body justify-center items-center">
            <div className="flex flex-col text-center gap-2">
              <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
              <p className="text-md opacity-70">Total Friends</p>
            </div>
          </div>
        </div>

        {/* Card 2 = On track */}
        <div className="card h-[137] w-[265] md:w-full mx-auto bg-base-100 shadow-md">
          <div className="card-body justify-center items-center">
            <div className="flex flex-col text-center gap-2">
              <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
              <p className="text-md opacity-70">On Trace</p>
            </div>
          </div>
        </div>

        {/* Card 3 = Need attention*/}
        <div className="card h-[137] w-[265] md:w-full mx-auto bg-base-100 shadow-md">
          <div className="card-body justify-center items-center">
            <div className="flex flex-col text-center gap-2">
              <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
              <p className="text-md opacity-70">Need Attention</p>
            </div>
          </div>
        </div>

        {/* Card 4 = Interactions This month */}
        <div className="card h-[137] w-[265] md:w-full mx-auto bg-base-100 shadow-md">
          <div className="card-body justify-center items-center">
            <div className="flex flex-col text-center gap-2">
              <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
              <p className="text-md opacity-70">Interactions This Month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Friends cards */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-4">Your Friends</h2>

        {/* For each friend card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => {
            const {
              id,
              name,
              picture,
              days_since_contact: days_ago,
              status,
              tags,
            } = friend;

            return (
              <div key={id} className="items-center justify-center">
                <div className="rounded-lg w-full h-full bg-base-100 shadow-lg p-4 text-center border-2 border-[#E8E8E8]">
                  {/* Picture */}
                  <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={picture}
                      alt={`Image of ${name}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h2 className="mt-4 text-xl font-bold">{name}</h2>

                  {/* Days since contact */}
                  <p className="mb-4 text-gray-500">{`${days_ago}d ago`}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {tags.map((tag, i) => (
                      <div
                        key={i}
                        className="badge bg-[#CBFADB] text-[#244D3F] rounded-4xl truncate uppercase"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Status */}
                  <div
                    className={`my-2 text-white badge rounded-4xl capitalize ${status === "almost due" ? `bg-[#EFAD44] ` : status === "overdue" ? `bg-[#EF4444] ` : `bg-[#244D3F] `}`}
                  >
                    {status.replace("-", " ")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
