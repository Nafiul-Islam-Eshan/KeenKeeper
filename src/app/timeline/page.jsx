"use client";
import { FriendContext } from "@/context/FriendsContext";
import React, { useContext, useEffect } from "react";

const TimelinePage = () => {
  const { selectedFriend, setSelectedFriend } = useContext(FriendContext);

//   useEffect(() => {
//     console.log(selectedFriend);
//   }, [selectedFriend]);


  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold">Timeline</h2>
    </div>
  );
};

export default TimelinePage;
