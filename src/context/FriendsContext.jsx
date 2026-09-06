"use client";

import { createContext, useState } from "react";

export const FriendContext = createContext();

const FriendsContext = ({ children }) => {
  const [selectedFriend, setSelectedFriend] = useState([]);

  return (
    <FriendContext.Provider
      value={{
        selectedFriend,
        setSelectedFriend,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};

export default FriendsContext;
