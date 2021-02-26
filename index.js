let on = true;

function on_off() {
  if(on === true) {
    document.getElementById("myImage").src="on_bulb.jpg"
    on = false;
  }else if(on === false) {
    document.getElementById("myImage").src="off_bulb.jpg"
    on = true;
  }
}