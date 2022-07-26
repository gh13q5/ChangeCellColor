/** @OnlyCurrentDoc */

var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
var sheet = spreadSheet.getActiveSheet();
var activateCell = sheet.getActiveCell();

var leftMainTheme = ['LeftMainTheme', '13'];
var leftSub1Theme = ['LeftSub1Theme', '25'];
var leftSub2Theme = ['LeftSub2Theme', '16'];
var leftBorder = ['LeftBorder', '19'];

var rightMainTheme = ['RightMainTheme', '13'];
var rightSub1Theme = ['RightSub1Theme', '25'];
var rightSub2Theme = ['RightSub2Theme', '16'];
var rightBorder = ['RightBorder', '18'];

function onEdit(e) {
  switch(activateCell.getA1Notation()){
    case (spreadSheet.getRangeByName('LeftSub2ThemeColor').getA1Notation()):
      setCellColor('LeftSub2ThemeColor', leftSub2Theme);
      break;
    case (spreadSheet.getRangeByName('LeftSub1ThemeColor').getA1Notation()):
      setCellColor('LeftSub1ThemeColor', leftSub1Theme);
      break;
    case (spreadSheet.getRangeByName('LeftMainThemeColor').getA1Notation()):
      setCellColor('LeftMainThemeColor', leftMainTheme);
      setBorderColor('LeftMainThemeColor', leftBorder);
      break;
    case (spreadSheet.getRangeByName('RightMainThemeColor').getA1Notation()):
      setCellColor('RightMainThemeColor', rightMainTheme);
      setBorderColor('RightMainThemeColor', rightBorder);
      break;
    case (spreadSheet.getRangeByName('RightSub1ThemeColor').getA1Notation()):
      setCellColor('RightSub1ThemeColor', rightSub1Theme);
      break;
    case (spreadSheet.getRangeByName('RightSub2ThemeColor').getA1Notation()):
      setCellColor('RightSub2ThemeColor', rightSub2Theme);
      break;
    default:
      break;
  }
}

function setCellColor(rangeColor, rangeName) {
  var color = spreadSheet.getRangeByName(rangeColor).getBackground();
  var rangeList = new Array();
  
  for(var i = 1; i <= parseInt(rangeName[1]); i++){
    var range = spreadSheet.getRangeByName(rangeName[0] + i).getA1Notation();
    rangeList.push(range);
  }

  sheet.getRangeList(rangeList).setBackground(color);
}

function setBorderColor(rangeColor, rangeName) {
  var color = spreadSheet.getRangeByName(rangeColor).getBackground();
  var rangeList = new Array();
  
  for(var i = 1; i <= parseInt(rangeName[1]); i++){
    var range = spreadSheet.getRangeByName(rangeName[0] + i).getA1Notation();
    rangeList.push(range);
  }

  sheet.getRangeList(rangeList).setBorder(true, true, true, true, null, null, color, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
}

