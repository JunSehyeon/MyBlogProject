import "./NewPostList.css"

function NewPostList(){
    return (
        <section className="post-section">
            <div className="post-header">
                <h2>New Post</h2>
                <button className="more-btn">전체보기 +</button>
            </div>

            <div className="post-list">
                <article className="post-card">
                    <span className="post-tag pink">New</span>
                    <h3>React 19에서 추가된 기능들</h3>
                    <p>React 19 의 주요 변화와 실무 적용 포인트를 정리했습니다.</p>
                </article>

                <article className="post-card">
                    <span className="post-tag green">Security</span>
                    <h3>OWASP Top 10 요약</h3>
                    <p>웹 개발자가 반드시 알아야 할 보안 취약점 정리</p>
                </article>
            </div>
        </section>
    );
}

export default NewPostList;