import "./Feed.css";

type Post = {
    title: string;
    summary: string;
    category: string;
    date: string;
}

function FeedCard({ post }:{ post : Post}) {
    return (
        <article className="feed-card">
            <div className="feed-card-meta">
                <span className="feed-card-category">{post.category}</span>
                <span className="feed-card-date">{post.date}</span>
            </div>

            <h2>{post.title}</h2>
            <p>{post.summary}</p>
        </article>
    );
}

export default FeedCard;