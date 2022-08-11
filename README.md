# ChangeCellColor
구글 시트의 셀 색깔을 자동으로 변경해주는 스크립트입니다.  
예시로 사용된 시트는 '크툴루의 부름(CoC)' 탐사자 시트입니다.  
This is a script that automatically changes the cell color of Google Sheets.  
The sheet used as an example is the investigator sheet from Call of Cthulhu(CoC).  
  
🔗 Link  
<https://docs.google.com/spreadsheets/d/1uVmmVHaWjRT0KbeY9JU2jq5POWln6892oZQ_GNvgRTc/edit?usp=sharing>  

⚠️ 동작 방식 ⚠️
1. 우측 상단의 셀 색깔 변경 시, onEdit 트리거가 발동하며 '이름이 지정된 범위'로 설정된 셀들의 색깔을 변경합니다.
2. '이름이 지정된 범위'의 이름은 'LeftMainTheme...', 'RightSub1Theme...'와 같은 명명규칙을 따릅니다. 예를 들어 'LeftMainTheme...'으로 지정된 범위들은 왼쪽 시트의 메인색을 변경했을 때 셀 색깔이 변경됩니다.
3. 만약 범위를 추가/삭제했을 경우 전역변수로 선언된 'leftMainTheme', 'rightSub1Theme'의 배열 중, 해당되는 배열의 [1]번째 요소의 숫자를 변경해야 스크립트가 올바르게 작동합니다.

개선사항 및 문의가 있다면 자유롭게 연락주세요. :D  
If you have any improvements or inquiries, please contact me.:D
