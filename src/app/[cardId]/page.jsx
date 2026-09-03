import friends from '../../../public/friends.json'

const FriendsDetailPage = async ({params}) => {
    const {cardId} = await params
    const friend = friends.find(e => e.id == cardId)
    // console.log(friend);
    
    return (
        <div>
            <h2 className="text-2xl font-bold text-violet-400"> This is friends detail page: {cardId} </h2> 
        </div>
    );
};

export default FriendsDetailPage;