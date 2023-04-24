class TV {
  constructor(name, price, size) {
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

const tv1 = new TV("aaa tv", 2000, "56inch"); //class로 틀을 만들어 사용가능
const tv2 = new TV("bbb tv", 3000, "27inch");
const tv3 = new TV("ccc tv", 2000, "27inch");
console.log(tv1.price, tv2.price, tv3.price);
