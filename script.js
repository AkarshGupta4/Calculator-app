let DisplayNum = document.getElementById('DisplayNum');


function appendValue(val) {
  DisplayNum.value += val;
}

function ClearDisplay() {
  DisplayNum.value = "";
}


function DeleteNum() {
  DisplayNum.value = DisplayNum.value.slice(0, -1);
}


function calculate() {
  try {
    DisplayNum.value = eval(DisplayNum.value);
  } catch (error) {
    DisplayNum.value = "Error";
  }
}

