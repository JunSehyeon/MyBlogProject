import  { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import FeedPage from "../pages/feed/FeedPage";
import WritePage from "../pages/write/WritePage";
import MyPage from "../pages/my/MyPage";

function Router(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path="/write" element={<WritePage/>}/>
            <Route path="/my" element={<MyPage/>}/>
        </Routes>
    );
}

export default Router;