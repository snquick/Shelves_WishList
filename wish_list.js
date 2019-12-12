values = [];
secValue = [];

function addRecord() {
  var inp = document.getElementById('inputtext');
  values.push(inp.value);
  inp.value = "";  

  var author = document.getElementById('authorText');
  values.push(author.value);
  author.value = "";  

}

function displayRecord() {
    for (var i = 0; i < values.length; i++) {
        document.getElementById("values").innerHTML = ("Title: ") + values.join("<br>Author ");
    }
  //document.getElementById("values").innerHTML = ("Title: ") + values.join("<br> ");
}
