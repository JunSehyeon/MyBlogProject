import "./HeroSection.css";

function HeroSection(){
    return (
    <section className="hero">
      <h1 className="hero-title">welcome to Ray's Space</h1>
      <p className="hero-desc">
        프론트엔드, 그리고 성장의 이야기를 공유합니다.
      </p>

      <div className="hero-buttons">
        <button className="hero-btn primary">
            17 Posts
        </button>
        <button className="hero-btn secondary">
            12 Projects
        </button>
      </div>
    </section>
  );
}

export default HeroSection;