import "./Feed.css";

function FeedHeader(){
    return (
        <section className="feed-header">
            <h1 className="feed-little">Blog</h1>
            <p className="feed-desc">
                개발하며 기록한 글들을 모아봤어요.
            </p>
        </section>
    );
}

export default FeedHeader;