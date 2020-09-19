function signPhone() {
  var p = document.getElementById("mobileNumber").value;
  if (p.length == 10) {
    document.getElementById('mobileno').style.color = "green";
    document.getElementById('mobileno').innerHTML = "Valid";
    return true;
  } else {
    document.getElementById('mobileno').style.color = "#ff7171";
    document.getElementById('mobileno').innerHTML = "Mobile Number should contain 10 digits";
    return false;
  }
}

function signEmail() {
  var p = document.getElementById("emails").value;
  if (p == "") {
    document.getElementById('emailids').style.color = "#ff7171";
    document.getElementById('emailids').innerHTML = "Please fill the email id field";
    return false;
  }
  if (p.indexOf('@') <= 0) {
    document.getElementById('emailids').style.color = "#ff7171";
    document.getElementById('emailids').innerHTML = "'@' at Invalid Position";
    return false;
  }

  if ((p.charAt(p.length - 4) != '.') && (p.charAt(p.length - 3) != '.')) {
    document.getElementById('emailids').style.color = "#ff7171";;
    document.getElementById('emailids').innerHTML = " '.' at Invalid Position";
    return false;

  } else {
    document.getElementById('emailids').style.color = "green";
    document.getElementById('emailids').innerHTML = "Valid";
    return true;

  }

}
