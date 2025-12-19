import "./FeedPage.css";

import FeedHeader from "../feed/components/FeedHeader";
import FeedPostList from "../feed/components/FeedPostList";
import FeedFilter from "../feed/components/FeedFilter";

function FeedPage(){
    return (
        <main className="feed-page">
            <div className="feed-container">
                <FeedHeader/>
                <FeedFilter/>
                <FeedPostList/>
            </div>
        </main>
    )
}

export default FeedPage;