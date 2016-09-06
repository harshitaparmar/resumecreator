$(document).ready(function(){
	jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
var form = $( "#personal-detail");
var form1= $( "#resume-detail");
var form2= $( "#secondary-form");
var form3= $("#senior-secondary-form");
var form4=$("#graduation-detail");
var form5 =$("#technical-detail");
var form6 =$("#company-detail");
var form7 =$("#project-detail");
var form8 =$("#achievement-detail");
form.validate({
rules: {
                        "fname" : {
                            required : true,
                        },
                        "lname" : {
                          required : true,
                        },
                        "email" : {
                          required: true,
                          email:true
                        },
                        "mobile":{
                          required: true,
                          minlength:10
                        },
                        "address" : 
                        {
                          required:true
                        },
                        "state" : 
                        {
                          required:true
                        },
                         "city" : 
                        {
                          required:true
                        }
                    },
                    messages: {
                        "fname": {
                            required: "Field cannot be blank",
                        },
                        "lname": {
                            required: "Field cannot be blank",
                        },
                        "mobile" : {
                            required: "Field cannot be blank",
                            maxlength:"mobile number should contains 10 digits"
                        },
                        "address" : 
                        {
                            required: "Field cannot be blank",
                        } ,
                        "state" : 
                        {
                            required: "Field cannot be blank",
                        } ,
                        "city" : 
                        {
                            required: "Field cannot be blank",
                        },
                        "email" : "Please enter a  valid email address"
                        
                    }
    });
  form1.validate({
    rules:{
            "objective": {
              required:true,
              maxlength: 200
            }
    },
    messages: {
      "objective" : 
      {
        required: "Field cannot be blank",
        maxlength: "maximum 200 characters are allowed"
      }
    }

  });
  form7.validate({
    rules:{
            "pname[0]": {
              required:true,
            },
            "pdesc[0]":{
              required:true,
            }
    },
    messages: {
      "pname[0]" : 
      {
        required: "Field cannot be blank",
      },
      "pdesc[0]" :
      {
        required: "Field cannot be blank",
      }
    }

  });
  form2.validate({
      rules:{
        "degree[0]":
        {
          required:true
        },
        "board[0]" :
        {
          required:true
        },
        "institute[0]":
        {
          required:true
        },
        "marks[0]" :
        {
          required:true
        },
        "year[0]" :
        {
          required:true
        }
      },
      messages:
      {
        "degree[0]":
        {
          required: "Field cannot be blank",
        },
        "marks[0]" :
        {
          required:"Field cannot be blank",
        },
        "board[0]" :
        {
          required:"Field cannot be blank",
        },
        "year[0]" :
        {
          required:"Field cannot be blank",
        },
        "institute[0]" :
        {
          required:"Field cannot be blank",
        }
      }
  });
  form3.validate({
      rules:{
        "degree[1]":
        {
          required:true
        },
        "board[1]" :
        {
          required:true
        },
        "institute[1]":
        {
          required:true
        },
        "marks[1]" :
        {
          required:true
        },
        "year[1]" :
        {
          required:true
        }
      },
      messages:
      {
        "degree[1]":
        {
          required: "Field cannot be blank",
        },
        "marks[1]" :
        {
          required:"Field cannot be blank",
        },
        "board[1]" :
        {
          required:"Field cannot be blank",
        },
        "year[1]" :
        {
          required:"Field cannot be blank",
        },
        "institute[1]" :
        {
          required:"Field cannot be blank",
        }
      }
  });
   form4.validate({
      rules:{
        "degree[2]":
        {
          required:true
        },
        "branch[2]" :
        {
          required:true
        },
        "institute[2]":
        {
          required:true
        },
        "marks[2]" :
        {
          required:true
        },
        "year[2]" :
        {
          required:true
        }
      },
      messages:
      {
        "degree[2]":
        {
          required: "Field cannot be blank",
        },
        "marks[2]" :
        {
          required:"Field cannot be blank",
        },
        "branch[2]" :
        {
          required:"Field cannot be blank",
        },
        "year[2]" :
        {
          required:"Field cannot be blank",
        },
        "institute[2]" :
        {
          required:"Field cannot be blank",
        }
      }
  });
  form5.validate({
    rules:{
            "skills[0]": {
              required:true,
            },
            "skills[1]" :{
              required:true,
            },
            "skills[2]" :{
              required:true
            }
    },
    messages: {
      "skills[0]" : 
      {
        required: "Please enter atleast 3 skills",
      },
      "skills[1]" : 
      {
        required: "Please enter atleast 3 skills",
      },
      "skills[2]" : 
      {
        required: "Please enter atleast 3 skills",
      }
    }

  });
  form6.validate({
    rules:{
            "cposition[0]": {
              required:true,
            },
            "cdetails[0]" :{
              required:true,
            },
            "resp[00]" :{
              required:true
            }
    },
    messages: {
      "cposition[0]" : 
      {
        required: "Field cannot be blank",
      },
      "cdetails[0]" : 
      {
        required: "Field cannot be blank",
      },
      "resp[00]" :{
        required: "Field cannot be blank",
      }
    }

  });
  form8.validate({
    rules:{
            "achieve[0]": {
              required:true,
            },
            "achieve[1]" :{
              required:true,
            },
            "acheive[2]" :{
              required:true
            }
    },
    messages: {
      "acheive[0]" : 
      {
        required: "Please enter atleast 3 acheivements",
      },
      "acheive[1]" : 
      {
        required: "Please enter atleast 3 acheivements",
      },
      "acheive[2]" : 
      {
        required: "Please enter atleast 3 acheivements",
      }
    }

  });
  $("#resume-form").hide();
  $("#education-form").hide();
  $("#work-form").hide();
  $("#technical-form").hide();
  $("#achievement-form").hide();
  $("#template-form").hide();
  $(".company-form-2").hide();
  $(".project-form-2").hide();
  $("#resume-page-form").hide();
  $(".resume-template1-form").hide();
  $(".resume-template2-form").hide();
  $('[data-toggle="tooltip"]').tooltip();
  $(".create-resume-btn").click(function(){
    $("#resume-page-form").show(100);
    $("#front-page-form").hide();
  });
  $("#first-next-button").click(function(){
    if(form.valid())
    {
    	$("#personal-form").hide();
    	$("#resume-form").show(500);
    	$(".resume-button").css({"background-color":"#42A5F5","color":"white"});
    	$(".personal-button").css({"background-color":"#E0E0E0","color":"black"});
    	$("#education-form").hide();
    	$("#achievement-form").hide();
    }
  });
  $("#first-previous-button").click(function(){
  	$("#personal-form").show(500);
  	$(".personal-button").css({"background-color":"#42A5F5","color":"white"});
	  $(".resume-button").css({"background-color":"#E0E0E0","color":"black"});
  	$("#resume-form").hide();
  	$("#education-form").hide();
  	$("#work-form").hide();
  	$("#achievement-form").hide();
  });
  $("#second-next-button").click(function(){
    if(form1.valid())
    {
    	$("#resume-form").hide();
      $("#education-form").show(500);
    	$(".education-button").css({"background-color":"#42A5F5","color":"white"});
  	  $(".resume-button").css({"background-color":"#E0E0E0","color":"black"});
    	$("#personal-form").hide();
    	$("#technical-form").hide();
    	$("#achievement-form").hide();
    }
  });
   $("#second-previous-button").click(function(){
  	$("#education-form").hide();
  	$(".resume-button").css({"background-color":"#42A5F5","color":"white"});
	  $(".education-button").css({"background-color":"#E0E0E0","color":"black"});
  	$("#resume-form").show(500);
  	$("#personal-form").hide();
  	$("#technical-form").hide();
  	$("#achievement-form").hide();
  });
  $("#third-next-button").click(function(){
    if(form2.valid() && form3.valid() && form4.valid())
    {
    	$("#technical-form").show(500);
    	$(".technical-button").css({"background-color":"#42A5F5","color":"white"});
  	  $(".education-button").css({"background-color":"#E0E0E0","color":"black"});
    	$("#resume-form").hide();
    	$("#personal-form").hide();
    	$("#education-form").hide();
    	$("#work-form").hide();
    	$("#achievement-form").hide();
    }
  });
  $(".third-previous-button").click(function(){
  	$("#technical-form").hide();
  	$(".education-button").css({"background-color":"#42A5F5","color":"white"});
	  $(".technical-button").css({"background-color":"#E0E0E0","color":"black"});
  	$("#resume-form").hide();
  	$("#personal-form").hide();
  	$("#education-form").show(500);
  	$("#work-form").hide();
  	$("#achievement-form").hide();
  });
   $("#fourth-next-button").click(function(){
    if(form5.valid())
    {
    	$("#technical-form").hide();
    	$("#resume-form").hide();
    	$("#personal-form").hide();
    	$("#education-form").hide();
    	$("#work-form").show(100);
    	$(".work-button").css({"background-color":"#42A5F5","color":"white"});
  	  $(".technical-button").css({"background-color":"#E0E0E0","color":"black"});
    	$("#achievement-form").hide();
    }
  });
    $(".fourth-previous-button").click(function(){
  	$("#technical-form").show(500);
  	$("#resume-form").hide();
  	$("#personal-form").hide();
  	$("#education-form").hide();
  	$("#work-form").hide();
  	$(".technical-button").css({"background-color":"#42A5F5","color":"white"});
	  $(".work-button").css({"background-color":"#E0E0E0","color":"black"});
  	$("#achievement-form").hide();
  });
    $("#fifth-next-button").click(function(){
    if(form6.valid() && form7.valid())
    {
    	$("#technical-form").hide();
    	$("#resume-form").hide();
    	$("#personal-form").hide();
    	$("#education-form").hide();
    	$("#work-form").hide();
    	$("#achievement-form").show(100);
    	$(".achievement-button").css({"background-color":"#42A5F5","color":"white"});
  	  $(".work-button").css({"background-color":"#E0E0E0","color":"black"});
    }
  });
  $(".fifth-previous-button").click(function(){
  	$("#technical-form").hide();
  	$("#resume-form").hide();
  	$("#personal-form").hide();
  	$("#education-form").hide();
  	$("#work-form").show(500);
  	$("#achievement-form").hide();
  	$(".work-button").css({"background-color":"#42A5F5","color":"white"});
	$(".achievement-button").css({"background-color":"#E0E0E0","color":"black"});
  });
  $("#sixth-next-button").click(function(){
    if(form8.valid())
    {
    $("#technical-form").hide();
    $("#resume-form").hide();
    $("#personal-form").hide();
    $("#education-form").hide();
    $("#work-form").hide();
    $("#achievement-form").hide();
    $("#template-form").show(500);
    $(".template-button").css({"background-color":"#42A5F5","color":"white"});
    $(".achievement-button").css({"background-color":"#E0E0E0","color":"black"});
    }  
    });
  $(".sixth-previous-button").click(function(){
    $("#technical-form").hide();
    $("#resume-form").hide();
    $("#personal-form").hide();
    $("#education-form").hide();
    $("#work-form").hide();
    $("#achievement-form").show(500);
    $("#template-form").hide();
    $(".achievement-button").css({"background-color":"#42A5F5","color":"white"});
  $(".template-button").css({"background-color":"#E0E0E0","color":"black"});
  });
 
  $(".template1-button").click(function(){
    var r=confirm("Are you sure want to proceed");
    if(r==true)
    {
    
      $(".resume-template1-form").show(500);
      $(".resume-creator-form").hide();
      $(".mainRow").hide();
    }
  });
  $(".template2-button").click(function(){
     var r=confirm("Are you sure want to proceed");
    if(r==true)
    {
    
      $(".resume-template2-form").show(500);
      $(".resume-creator-form").hide();
      $(".mainRow").hide();
    }
  });
  $(".click-add-button-1").click(function()
  {
    $(".company-form-2").toggle();
  });
  $(".click-project-button-1").click(function()
  {
    $(".project-form-2").toggle();
  });
});