이벤트 addEventListener

1. 요소.addEventListener(이벤트, 명령):
   선택 요소에 지정한 이벤트가 발생하면, 약속된 명령어를 실행시키는 메소드
2. addEventListener 이벤트의 종류

- Click 클릭
- Mouse 계열
  - Mouseover: 요소에 커서를 올렸을 때
  - Mouseout: 마우스가 요소를 벗어날 떄
  - Mousedown: 마우스 버튼을 누르고 있는 상태
  - Mouseup: 마우스 버튼을 떼는 순간
- Focus: 포커스가 갔을 떄
- Blur: 포커스가 벗어나는 순간
- Key 계열
  - Keypress: 키를 누르는 순간 + 누르고 있는 동안 계속 발생
  - Keydown: 키를 누르는 순간에 발생
  - Keyup: 키를 눌렀다가 떼는 순간
- Load: 웹페이지에 필요한 파일이 다운로드 되었을 때
- Resize: 창크기 변경될 때
- Scroll: 스크롤 발생할 때
- Unload: 링크를 타고 이동하거나 브라우저를 닫을 때
- Change: 폼 필드의 상태가 변경되었을 때
