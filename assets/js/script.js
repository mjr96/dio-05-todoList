function newElement() {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type="checkbox";
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
        document.getElementById("myUL").append(checkbox, li);
    }
  }