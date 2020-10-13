
console.log("incode");
document.getElementById("content").style.color = "red";
var htmlContent = document.getElementById("content").innerHTML
var pathname = window.location.pathname.replace("/","_").slice(1);

// console.log(document.documentElement.innerHTML)
var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.documentElement.innerHTML));
element.setAttribute('download', pathname+".html");
element.style.display = 'none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
