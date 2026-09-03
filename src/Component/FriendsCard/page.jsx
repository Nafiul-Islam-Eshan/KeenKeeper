import Image from "next/image";

const FriendsCard = ({friends}) => {
    return (
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
    );
};

export default FriendsCard;