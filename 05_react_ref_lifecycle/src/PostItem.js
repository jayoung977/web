import "./Post.css";
const PostItem = ({ posts }) => {
  // TODO: 부모 컴포넌트에서 넘겨주는 데이터(props) 구조 분해 할당
  console.log("posts>>", posts);

  return (
    // TODO: 데이터 채우기
    <>
      {posts.map((cmt) => {
        return (
          <div className="PostItem">
            <div>
              <span className="id">No. {cmt.id}</span>
              <span className="title">- {cmt.title}</span>
            </div>
            <p className="body">{cmt.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default PostItem;
