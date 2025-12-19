import "./Feed.css";

const categories = [
    "All",
    "Frontend",
    "Backend",
    "Security",
    "Database"
]

function FeedFilter(){
    return (
        <div className="feed-filter">
            {categories.map((cat)=>(
                <button key={cat}>{cat}</button>
            ))}
        </div>
    );
}

export default FeedFilter;