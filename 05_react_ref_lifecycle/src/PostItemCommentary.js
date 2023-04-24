const PostItemCommentary = ({ post }) => {
  // TODO: 부모 컴포넌트에서 넘겨주는 데이터(props) 구조 분해 할당
  //{id: x , title:'xx',body: 'xx'}

  return (
    // TODO: 데이터 채우기
    <div className="PostItem">
      <div>
        <span className="id">No . {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 50)}...</p>
    </div>
  );
};

export default PostItemCommentary;
