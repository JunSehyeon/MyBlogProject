import "./StatesSection.css"

function StatesSection() {
  return (
    <section className="states">
      <div className="state-card">
        <span className="state-value">17</span>
        <span className="stste-label">Posts</span>
      </div>

      <div className="state-card">
        <span className="state-value">12</span>
        <span className="state-label">Projects</span>
      </div>
      
      <div className="state-card">
        <span className="state-value">5</span>
        <span className="state-label">Categories</span>
      </div>
    </section>
  )
}

export default StatesSection;
