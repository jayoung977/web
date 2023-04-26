import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import "./styles/Post.scss";

const PostList = () => {
  // TODO: 임시 데이터 (fakePosts)를 저장할 배열 posts state
  // 초기 값은 빈 배열
  const [posts, setPosts] = useState([]);

  // TODO: 해당 컴포넌트가 "mount" 되었을 때
  // posts state에 fakePosts 데이터를 설정하기
  // 단, setTimeout()을 이용해 2초 후 posts state에 저장한다.

  //버전1
  //   const getPosts = () => {
  //     setPosts(fakePosts);
  //   };
  //   useEffect(() => {
  //     setTimeout(() => {
  //       getPosts(); //posts state 변경 함수
  //     }, 2000);
  //   }, []);

  //버전2   axios 사용 -npm i axios & import axios from 'axios'
  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data.slice(0, 10));
    setPosts(res.data.slice(0, 10));
  };
  useEffect(() => {
    getPosts();
  }, []);
  //함수
  const dataLoading = () => {
    return <h2> Loading...</h2>;
  };
  //배열
  const dataLoaded = posts.map((post) => {
    return <PostItem post={post} key={post.id} />;
  });

  return (
    <div className="PostList">
      <header>📨 Post List</header>
      {/* posts state의 길이에 따라 보여주는 정보 달리하기 (힌트: 삼항 연산자) */}
      {/* posts state 길이가 0 이라면 데이터를 불러오는 중이므로 loading 메세지 */}
      {/* posts state 길이가 0 이 아니라면 데이터를 불러왔으므로 PostItem 컴포넌트 반복 */}
      {posts.length > 0 ? dataLoaded : dataLoading()}
    </div>
  );
};

export default PostList;
