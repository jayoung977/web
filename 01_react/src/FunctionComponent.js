import PropTypes from "prop-types";
// function FunctionComponent(props) {
function FunctionComponent({ name, age }) {
  //   console.log(props); //{name: '둘리'} , {name: '둘리', age: '300'}
  return (
    <div>
      <h1>Hello World, Function Component</h1>
      <h5>{name}</h5>
      <h5>{age}</h5>
    </div>
  );
}

//default 값 지정
FunctionComponent.defaultProps = {
  name: "윤성인",
  age: "11",
};

FunctionComponent.prototype = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

// const FunctionComponent = () => {}
export default FunctionComponent;
