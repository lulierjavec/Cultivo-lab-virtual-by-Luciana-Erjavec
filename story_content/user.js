function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HW8MvvJG0q":
        Script1();
        break;
      case "6M0rKKyBDhW":
        Script2();
        break;
      case "64vnU2DSBin":
        Script3();
        break;
      case "6oA5hG7PBKr":
        Script4();
        break;
  }
}

function Script1()
{
  document.getElementById("main-window").style.cursor = "zoom-in";
}

function Script2()
{
  document.getElementById("main-window").style.cursor = "zoom-in";
}

function Script3()
{
  document.getElementById("main-window").style.cursor = "auto";
}

function Script4()
{
  var player = GetPlayer();

function findLMSAPI(win) {
  if (win.hasOwnProperty("GetStudentID")) return win;

  else if (win.parent == win) return null;

  else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
var newName = array[1];
player.SetVar("VariableName", newName);
}

