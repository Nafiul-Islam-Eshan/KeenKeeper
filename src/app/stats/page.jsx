"use client";

import { FriendContext } from "@/context/FriendsContext";
import { useContext } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { selectedFriend } = useContext(FriendContext);

  const callCount = selectedFriend.filter(
    (friend) => friend.action === "call",
  ).length;
  const textCount = selectedFriend.filter(
    (friend) => friend.action === "text",
  ).length;
  const videoCount = selectedFriend.filter(
    (friend) => friend.action === "video",
  ).length;

  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold mb-6">Friendship Analytics</h2>
      <div className="bg-white p-8 space-y-6">
        <h3 className="text-[#244D3F] text-lg">By Interaction Type</h3>

        {/* Piechart */}
        <PieChart
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          className="mx-auto"
          responsive
        >
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            cornerRadius='50%'
            paddingAngle={4}
            innerRadius="60%"
            outerRadius="80%"
            stroke="white"
            isAnimationActive={true}
          >
            <Cell fill="#7E35E1"></Cell>
            <Cell fill="#244D3F"></Cell>
            <Cell fill="#37a163"></Cell>
          </Pie>
          <Tooltip />
          <Legend
           iconType="circle" 
           iconSize={8} 
          />

        </PieChart>
      </div>
    </div>
  );
};

export default StatsPage;
