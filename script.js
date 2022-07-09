var field = document.getElementById("field");
var btn = document.querySelectorAll(".ele");
btn.forEach((ele) => {
  var val = ele.innerText;
  ele.addEventListener("click", () => {
    if (ele.id == "cls"){
        field.innerText = "";
    } 
    else if (ele.id == "eq") {
        result()
    }
    else {
      display(val);
    }
  });
});

function display(v) {
  field.innerText += v;
}
function result() {
  var res = math.evaluate(field.innerText);
  field.innerText = "";
  display(res);
}
