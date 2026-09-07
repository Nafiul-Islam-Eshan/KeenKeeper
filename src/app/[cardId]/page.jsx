import { notFound } from "next/navigation";
import friends from "../../../public/friends.json";
import FriendsDetailPage from "../../Component/FriendsDetailPage";

const CardId = async ({ params }) => {
  const { cardId } = await params;
  const friend = friends.find((e) => e.id == cardId);

  if (!friend) {
    notFound();
  }

  return <FriendsDetailPage friend={friend} />;
};

export default CardId;
