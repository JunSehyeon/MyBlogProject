import "./HomePage.css";

import HeroSection from "./components/HeroSection";
import StatesSection from "./components/StatesSection";
import CategoryFilter from "./components/CategoryFilter";
import NewPostList from "./components/NewPostList";

function HomePage() {
  return (
    <main className="home">
      <div className="home-container">
        <HeroSection />
        <StatesSection />
        <CategoryFilter />
        <NewPostList />
      </div>
    </main>
  );
}

export default HomePage;
