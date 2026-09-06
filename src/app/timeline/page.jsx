"use client";
import { FriendContext } from "@/context/FriendsContext";
import React, { useContext, useState } from "react";
import SelectedFriendCard from "./SelectedFriendCard";

const TimelinePage = () => {
  const { selectedFriend, setSelectedFriend } = useContext(FriendContext);
  const [action, setAction] = useState("");

  const filteredFriends =
    action === ""
      ? selectedFriend
      : selectedFriend.filter((friend) => friend.action === action);

  console.log(filteredFriends);

  return (
    <div className="my-20 space-y-6">
      {/* Timeline, dropdown input */}
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold">Timeline</h2>
        <select
          id="action"
          name="action"
          onChange={ (e) => setAction(e.target.value) }
          className="rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 w-66 h-12 shadow-md border border-gray-300 text-gray-600"
        >
          <option value="">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      {/* Timeline cards */}
      <div className="space-y-4 text-gray-600">
        {filteredFriends.map((eachSelectedFriend, idx) => {
          const { action, name } = eachSelectedFriend;
          // console.log(action, name)
          return <SelectedFriendCard key={idx} action={action} name={name} />;
        })}
      </div>
    </div>
  );
};

export default TimelinePage;
