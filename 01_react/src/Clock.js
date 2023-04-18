function Clock() {
  return (
    <div className="clock-container">
      {/* toLocaleDateString(): 현재 사용자의 문화권에 맞는 시간을 표기 */}
      <h1>현재 시간은: {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
// export default Clock(); ()괄호 넣어서 오류떴었음
// 2개이상 default할수 없음 쓴다면 그냥 export function , inport {Clock} from ~
