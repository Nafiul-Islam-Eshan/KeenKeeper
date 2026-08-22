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

        {friends.map((friend) => {
          const { id, name, picture, days_since_contact, status, tags } =
            friend;

          return (
              <div key={id} className="flex min-h-screen items-center justify-center">
                <div className="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
                  <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
                    <Image
                      src = {picture}
                      alt = {`Image of ${name}`}
                      width={150}
                      height={150}
                    />
                  </figure>
                  <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    John Doe
                  </h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Web Developer
                  </p>
                  <div className="flex items-center justify-center">
                    <a
                      href="#"
                      className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>

          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
