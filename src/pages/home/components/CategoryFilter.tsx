import "./CategoryFilter.css";

const categories = [
    "Design",
    "Security",
    "Database",
    "Backend",
    "Frontend",
];

function CategoryFilter() {
    return (
        <div className="category-filter">
            {categories.map((cat) => (
                <button key={cat} className="category-btn">
                    {cat}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter;