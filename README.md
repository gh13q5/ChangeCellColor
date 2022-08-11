# ChangeCellColor
'크툴루의 부름(CoC) 7th' 탐사자 시트에 사용된 자동 셀 색깔 변경 스크립트입니다. (Google Apps Script)  
This is the automatic cell color change script used in the 'Call of Cthulhu (CoC) 7th' investigator sheet.  
  
🔗 Google Sheets Link  
<https://docs.google.com/spreadsheets/d/1uVmmVHaWjRT0KbeY9JU2jq5POWln6892oZQ_GNvgRTc/edit?usp=sharing>  

⚠️ 동작 방식 ⚠️
1. 우측 상단의 셀 색깔 변경 시, onEdit 트리거가 발동하며 '이름이 지정된 범위'로 설정된 셀들의 색깔을 변경합니다.
2. '이름이 지정된 범위'의 이름은 'LeftMainTheme...', 'RightSub1Theme...'와 같은 명명규칙을 따릅니다. 예를 들어 'LeftMainTheme...'으로 지정된 범위들은 왼쪽 시트의 메인색을 변경했을 때 셀 색깔이 변경됩니다.
3. 만약 범위를 추가/삭제했을 경우 전역변수로 선언된 'leftMainTheme', 'rightSub1Theme'의 배열 중, 해당되는 배열의 [1]번째 요소의 숫자를 변경해야 스크립트가 올바르게 작동합니다.

개선사항 및 문의가 있다면 자유롭게 연락주세요. :D  
If you have any improvements or inquiries, please contact me.:D
