import "./Feed.css";

type Post = {
    id: number;
    title: string;
    content: string;
    category: string;
    createdAt: string;
}

function FeedCard({ post }:{ post : Post}) {
    return (
        <article className="feed-card">
            <div className="feed-card-meta">
                <span className="feed-card-category">{post.category}</span>
                <span className="feed-card-date">{post.createdAt.slice(0,10)}</span>
            </div>

            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
    );
}

export default FeedCard;