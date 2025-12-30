import FeedCard from "./FeedCard";
import "./Feed.css";
import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  content: string;
  category: string;
  createdAt: string;
};

function FeedPostList() {
    const [posts, setPosts]=useState<Post[]>([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/posts")
        .then(res => setPosts(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <section className="feed-post-little">
            {posts.map((post) => (
                <FeedCard key={post.id} post={post}/>
            ))}
        </section>
    );
}

export default FeedPostList;