//map()
const list = ["a", "b", "c", "d", "e"];

//일반 for문으로ㅓ 배열의 각원소를 출력

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

//map()
//list.map(콜백함수(원소, 위치, 어레이),)
const items = list.map((txt, id, arr) => {
  console.log("txt:", txt); //원소 값
  console.log("id:", id); //인덱스 위치
  console.log("arr:", arr); //현재 순회하고 있는 배열 전체
  return `${id} 위치에 ${txt} 원소가 있음`;
});
console.log("items >>>", items);

// txt: e
// id: 4
// arr: [ 'a', 'b', 'c', 'd', 'e' ]
// items >>> [ undefined, undefined, undefined, undefined, undefined ] //return 안해서

// return 값 추가하면 정상적으로 나옴
// return `${id} 위치에 ${txt} 원소가 있음`;
// items >>> [
//     '0 위치에 a 원소가 있음',
//     '1 위치에 b 원소가 있음',
//     '2 위치에 c 원소가 있음',
//     '3 위치에 d 원소가 있음',
//     '4 위치에 e 원소가 있음'
//   ]
