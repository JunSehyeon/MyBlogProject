import FeedCard from "./FeedCard";
import "./Feed.css";

const dummyPosts = [
    {
        id:1,
        title: "React 상태 관리 정리",
        summary: "useState, useEffect부터 전역 상태까지 한 번에 정리",
        category: "Frontend",
        date: "2025.01.02",
    },
    {
        id: 2,
        title: "Spring Boot 로그인 흐름",
        summary: "세션 기반 인증 흐름을 정리해봤어요",
        category: "Backend",
        date: "2024.12.28",
    },
    {
        id: 3,
        title: "CSRF 공격이란?",
        summary: "웹 보안에서 자주 나오는 CSRF 개념 정리",
        category: "Security",
        date: "2024.12.20",
    },
];

function FeedPostList() {
    return (
        <section className="feed-post-little">
            {dummyPosts.map((post) => (
                <FeedCard key={post.id} post={post}/>
            ))}
        </section>
    );
}

export default FeedPostList;