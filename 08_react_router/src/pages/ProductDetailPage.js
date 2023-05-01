import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = ({ products }) => {
  console.log(products);

  // const productId = useParams(); //productId 출력: {productId: '1'}
  // 구조 분해 할당
  const { productId } = useParams(); //productId 출력:  '1'

  // 퀴즈
  //targetProduct 변수에 productId에 해당하는 상품 객체를 저장
  const [targetProduct] = products.filter(
    (product) => product.id === Number(productId)
  );
  // 내 풀이
  // console.log("targetProduct", targetProduct);
  // const ProductDetail = () => {
  //   return (
  //     <>
  //       <h1>여기는 상품 디테일 페이지!</h1>
  //       <ul>
  //         <ul>판매 번호: {targetProduct.id}</ul>
  //         <ul>상품명: {targetProduct.name}</ul>
  //         <ul>상세 설명: {targetProduct.body}</ul>
  //         <ul>판매자: {targetProduct.email}</ul>
  //       </ul>
  //     </>
  //   );
  // };

  const navigate = useNavigate();

  //Solution
  if (!targetProduct) {
    return <main className="ProductDetailPage">존재하지 않는 상품입니다.</main>;
  }
  return (
    <main className="ProductDetailPage">
      {/* 내 풀이  {targetProduct !== undefined ? ProductDetail() : <h1>상품없음!</h1>} */}
      {/* Solution */}
      <h1>여기는 상품 디테일 페이지!</h1>
      {/* -1 뒤로가기 , 보통 앞으로가기 기능은 안씀 */}
      <button onClick={() => navigate(-1)}> 목록보기 </button>
      <button onClick={() => navigate("/")}> 홈으로 이동하기 </button>

      <ul>
        <ul>판매 번호: {targetProduct.id}</ul>
        <ul>상품명: {targetProduct.name}</ul>
        <ul>상세 설명: {targetProduct.body}</ul>
        <ul>판매자: {targetProduct.email}</ul>
      </ul>
    </main>
  );
};

export default ProductDetailPage;
