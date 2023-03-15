function info() {
  var cv = document.getElementById("cv");
  var main = document.getElementById("mainContent");
  var info = document.getElementById("info");
  
  if(info.innerHTML == "Info") {
    info.innerHTML = "X";
  }else {
    info.innerHTML = "Info";
  }
  if(cv.style.display === "none") {
    cv.style.display = "block";
  } else {
    cv.style.display = "none";
  }
  if(main.style.display === "none") {
    main.style.display = "block";
  } else {
    main.style.display = "none";
  }
}
