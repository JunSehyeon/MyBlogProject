import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Router from "./Router";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default AppLayout;
