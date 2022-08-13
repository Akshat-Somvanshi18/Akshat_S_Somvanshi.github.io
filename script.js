let x=0;
function hamburger(){
  if(x==0)
  {
  document.getElementById("hamburger").style.display="block";
  x=1;
  }
  else
  {
    document.getElementById("hamburger").style.display="none";
    x=0;
  }

}


function skilld1(){

  document.getElementById("skill_button1").style.borderBottom = "1px solid black";
  document.getElementById("skill_display1").style.display ="flex";
  document.getElementById("skill_button2").style.borderBottom = "0px";
  document.getElementById("skill_display2").style.display = "none";
}

function skilld2(){

  document.getElementById("skill_button1").style.borderBottom = "0px";
  document.getElementById("skill_display1").style.display = "none";
  document.getElementById("skill_button2").style.borderBottom = "1px solid black";
  document.getElementById("skill_display2").style.display = "flex";
}
function uppercase()
{
    let x=document.getElementById("name");
    x.value=x.value.toUpperCase();
    let y=document.getElementById("message");
    y.value=y.value.toUpperCase();

}

function akshat()
{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let msg=document.getElementById("message").value;
    if((name==""&& email=="") || (name==""&&msg=="") || (msg==""&&email=="") || (name==""&&email==""&&msg==""))
    {
    document.getElementById("inputmsg1").innerHTML = "Please Enter Complete Details.";
    document.getElementById("inputmsg2").innerHTML = "";
    document.getElementById("inputmsg3").innerHTML = "";
    document.getElementById("inputmsg4").innerHTML = "";
    document.getElementById("inputmsg1").style.fontSize="20px";
    }
    else if(name=="")
    {
      document.getElementById("name").placeholder="Please Enter Your Name";
      document.getElementById("name").style.border="2px solid red";
      
    document.getElementById("inputmsg1").innerHTML = "Please Enter Your Name.";
    document.getElementById("inputmsg2").innerHTML = "";
    document.getElementById("inputmsg3").innerHTML = "";
    document.getElementById("inputmsg4").innerHTML = "";
    document.getElementById("inputmsg1").style.fontSize="20px";
    }
    else if(email=="")
    {
      document.getElementById("email").placeholder="Please Enter Your E-mail";
      
      document.getElementById("email").style.border="2px solid red";
    document.getElementById("inputmsg1").innerHTML = "Please Enter Your E-mail.";
    document.getElementById("inputmsg2").innerHTML = "";
    document.getElementById("inputmsg3").innerHTML = "";
    document.getElementById("inputmsg4").innerHTML = "";
    document.getElementById("inputmsg1").style.fontSize="20px";
    }
    else if(msg=="")
    {
      document.getElementById("message").placeholder="Please Enter Your Message";
      
      document.getElementById("message").style.border="2px solid red";
    document.getElementById("inputmsg1").innerHTML = "Please Enter Your Message.";
    document.getElementById("inputmsg2").innerHTML = "";
    document.getElementById("inputmsg3").innerHTML = "";
    document.getElementById("inputmsg4").innerHTML = "";
    document.getElementById("inputmsg1").style.fontSize="20px";
    }
    
    else
      {  
        document.getElementById("inputmsg1").innerHTML = "Thank you ,";
        document.getElementById("inputmsg2").innerHTML = name;
        document.getElementById("inputimg").style.display="none";
        document.getElementById("inputmsg3").innerHTML = "For Reaching Us ,";
        document.getElementById("inputmsg4").innerHTML = "I Will Get Back To You.";
        document.getElementById("inputmsg1").style.fontSize="20px";
        document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      document.getElementById("name").style.border="0px";
      document.getElementById("email").style.border="0px";
      document.getElementById("message").style.border="0px";


      }
      document.getElementById("inputmsg1").style.animation="input_animation 0.3s 1 forwards";
      document.getElementById("inputmsg2").style.animation="input_animation 0.3s 1 forwards";
      document.getElementById("inputmsg3").style.animation="input_animation 0.3s 1 forwards";
      document.getElementById("inputmsg4").style.animation="input_animation 0.3s 1 forwards";
    
}
