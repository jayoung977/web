//class
//-> 객체 생성 템플릿 => 객체를 만들기 위해 사용

class Cat {
  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //method1
  mew() {
    console.log("야옹~");
  }
  //method2
  eat() {
    console.log("밥먹자!!");
  }
}
//선언
let navi = new Cat("나비", 1);
//메소드 이용
navi.mew();
navi.eat();

//class가 없던 시절
//객체 선언했어야만 함
let tv1 = {
  name: "aaa tv",
  price: 2000,
  size: "56inch",
};

let tv2 = {
  name: "bbb tv",
  price: 3000,
  size: "27inch",
};

let tv3 = {
  name: "ccc tv",
  size: "27inch", //price가 빠짐
};

console.log(tv1.price, tv2.price, tv3.price); //tv3.price undefined

//클래스 등장 = 일종의 작업지시서
class TV {
  constructor(name, price, size) {
    //this: 여기 클래스 안에 있는 속성
    //this.name: 이 클래스 안에 있는 name
    this.name = name;
    this.price = price;
    this.size = size;
  }
  getPrice() {
    return this.price + "만원";
  } //값 가져오기
  setPrice(price) {
    this.price = price;
  } //값 바꾸기  -> 'class의 캡슐화' 라고 함 // 추상화
}
// const newTv0 = new TV();
// console.log(newTv0.getPrice());

const newTv1 = new TV("aaa tv", 2000, "56inch"); //class로 틀을 만들어 사용가능

console.log(newTv1.getPrice());
newTv1.setPrice(4000);
console.log(newTv1.getPrice());

//하위 클래스
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getPrice() {
    return this.price + "만원";
  }
}

// 상속 : 부모 클래스(Product의)로부터 변수,메소드들을 (Laptop클래스로)가져와서 사용하는 개념
// Product의 클래스를 새로 생성할 Laptop클래스로 가져다가 씀
// Product의 클래스를 다 사용 가능
class Laptop extends Product {
  constructor(name, price, weight) {
    //상속 받는 부모 클래스 가져옴
    //this 가 아니라 super사용
    super(name, price);
    this.weight = weight;
  }
}
let laptop = new Laptop("삼성tv", 5000, "55");
console.log(laptop.price);
//부모의 메소드도 사용 가능
console.log(laptop.getPrice());
//반대로 부모는 자식의 변수. 메소드 사용불가함
let parent = new Product("tv", 1000);
console.log(parent.weight); //undefined

///react에서는 클래스를 많이 사용하지는 않으나
//next에서는 많이 사용함 , 백앤드에서는 반드시 알아야할 개념임
