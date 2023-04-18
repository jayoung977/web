import PropTypes from "prop-types";
// function FunctionComponent(props) {
function Food({ food }) {
  //   console.log(props); //{name: '둘리'} , {name: '둘리', age: '300'}
  return (
    <div>
      <h1>
        저는 <span className="food-props">{food}</span> 를 좋아합니다.{" "}
      </h1>
    </div>
  );
}

//default 값 지정
Food.defaultProps = {
  food: "떡볶이",
};

// FunctionComponent.prototype = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string,
// };

// const FunctionComponent = () => {}
export default Food;
