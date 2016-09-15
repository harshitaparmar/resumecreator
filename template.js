$(document).ready(function(){
$(".resume-template2-form").hide();
$(".r-table-row4").hide();
$(".r-skill-four").hide();
$(".r-skill-five").hide();
$(".r-skill-six").hide();
$(".r-skill-seven").hide();
$(".r-achieve-three").hide();
$(".r-achieve-four").hide();
$(".r-achieve-five").hide();
$(".r-achieve-six").hide();
$(".r-achieve-seven").hide();
$(".r-achieve-eight").hide();
//$(".r-project-row-2").hide();
$(".r-respozerolisttwo").hide();
$(".r-respzerolistthree").hide();
$(".r-positionone").hide();
$(".r-cnameone").hide();
$(".r-responelistone").hide();
$(".r-responelisttwo").hide();
$(".r-responelistthree").hide();
$(".r-project-name-one").hide();
$(".r-project-desc-one").hide();
$(".r-website").hide();
$(".template1-button").click(function(){
		var fname=$("#fname").val();
		var lname=$("#lname").val();
		console.log(fname);
		var objective=$("#text-objective").val();
		var email=$("#email").val();
		var mobile=$("#mobile").val();
		var website=$("#website").val();
		$(".r-name").text(fname + " " + lname);
		$(".r-email").text("Email :" + email);
		$(".r-mobile").text("Phone :" + mobile);
		$(".r-website").text("Website :" + website);
		$(".r-objective").text(objective);
		if(website!=='')
		{
			$(".r-website").show();
		}
		//education-section starts
			var degreeone=$("#degreezero").val();
			var degreetwo=$("#degreeone").val();
			var degreethree=$("#degreetwo").val();
			var degreefour=$("#degreethree").val();
			console.log(degreeone+degreetwo);
			$(".r-table-row1-one").text(degreeone);
			$(".r-table-row2-one").text(degreetwo);
			$(".r-table-row3-one").text(degreethree);
			$(".r-table-row4-one").text(degreefour);
			var boardone=$("#boardzero").val();
			var boardtwo=$("#boardone").val();
			var branchone=$("#branchzero").val();
			var branchtwo=$("#branchone").val();
			console.log(branchone+branchtwo);
			$(".r-table-row1-three").text(boardone);
			$(".r-table-row2-three").text(boardtwo);
			$(".r-table-row3-three").text(branchone);
			$(".r-table-row4-three").text(branchtwo);
			var instituteone=$("#institutezero").val();
			var institutetwo=$("#instituteone").val();
			var institutethree=$("#institutetwo").val();
			var institutefour=$("#institutethree").val();
			$(".r-table-row1-two").text(instituteone);
			$(".r-table-row2-two").text(institutetwo);
			$(".r-table-row3-two").text(institutethree);
			$(".r-table-row4-two").text(institutefour);
			var marksone=$("#markszero").val();
			var markstwo=$("#marksone").val();
			var marksthree=$("#markstwo").val();
			var marksfour=$("#marksthree").val();
			$(".r-table-row1-four").text(marksone);
			$(".r-table-row2-four").text(markstwo);
			$(".r-table-row3-four").text(marksthree);
			$(".r-table-row4-four").text(marksfour);
			var yearone=$("#yearzero").val();
			var yeartwo=$("#yearone").val();
			var yearthree=$("#yeartwo").val();
			var yearfour=$("#yearthree").val();
			$(".r-table-row1-five").text(yearone);
			$(".r-table-row2-five").text(yeartwo);
			$(".r-table-row3-five").text(yearthree);
			$(".r-table-row4-five").text(yearfour);
			if(yearfour!=='' || marksfour!=='' || institutefour!=='' || branchtwo!=='')
			{
				$(".r-table-row4").show();
			}
			
		//education section ends
		//technical skills section starts
			var skillone=$("#skillszero").val();
			var skilltwo=$("#skillsone").val();
			var skillthree=$("#skillstwo").val();
			$(".r-skill-one").text(skillone);
			$(".r-skill-two").text(skilltwo);
			$(".r-skill-three").text(skillthree);
			var skillfour=$("#skillsthree").val();
			if(skillfour !=='')
			{
				$(".r-skill-four").show();
				$(".r-skill-four").text(skillfour);
			}
			var skillfive=$("#skillsfour").val();
			if(skillfive !=='')
			{
				$(".r-skill-five").show();
				$(".r-skill-five").text(skillfive);
			}
			var skillsix=$("#skillsfive").val();
			if(skillsix !=='')
			{
				$(".r-skill-six").show();
				$(".r-skill-six").text(skillsix);
			}
			var skillseven=$("#skillssix").val();
			if(skillseven !=='')
			{
				$(".r-skill-seven").show();
				$(".r-skill-seven").text(skillseven);
			}
		//end of -technical -skill-section
		//start of work experience form
			var cpositionzero=$("#cpositionzero").val();
			var cpositionone=$("#cpositionone").val();
			var cnamezero=$("#cdetailszero").val();
			var cnameone=$("cdetailsone").val();
			var smonthzero=$("#smonthzero").val();
			var smonthone=$("#smonthone").val();
			var syearzero=$("#syearzero").val();
			var syearone=$("#syearone").val();
			var emonthzero=$("#emonthzero").val();
			var emonthone=$("#emonthone").val();
			var eyearzero=$("#eyearzero").val();
			var eyearone=$("#eyearone").val();
			var respzeroform1=$("#respzeroform1").val();
			var responeform1=$("#respooneform1").val();
			var resptwoform1=$("#resptwoform1").val();
			var respzeroform2=$("#respzeroform2").val();
			var responeform2=$("#responeform2").val();
			var resptwoform2=$("#resptwoform2").val();
			$(".r-respozerolisttwo").text(responeform1);
			$(".r-respzerolistthree").text(resptwoform1);
			$(".r-positionzero").text(cpositionzero + " " + "(" + smonthzero + " " + 
			syearzero + "-" + emonthzero + " "+eyearzero + ")");
			$(".r-positionone").text(cpositionone + " " + "(" + smonthone + " " + 
			syearone + "-" + emonthone + " "+eyearone + ")");
			$(".r-cnamezero").text(cnamezero);
			$(".r-cnamezone").text(cnameone);
			$(".r-respzerolistone").text(respzeroform1);
			$(".r-responelistone").text(respzeroform2);
			$(".r-responelisttwo").text(responeform2);
			$(".r-responelistthree").text(resptwoform2);
			console.log(responeform1);
			if(responeform1!=='')
			{
				$(".r-respozerolisttwo").show();
			}
			if(resptwoform1!=='')
			{
				$(".r-respzerolistthree").show();
			}
			if(respzeroform2!=='')
			{
				$(".r-responelistone").show();
			}
			if(responeform2!=='')
			{
				$(".r-responelisttwo").show();
			}
			if(resptwoform2!=='')
			{
				$(".r-responelistthree").show();
			}
			if(cnameone!=='')
			{
				$(".r-cnameone").show();
			}
			if(cpositionone!=='')
			{
				$(".r-positionone").show();
			}

			var projectnamezero=$("#pnamezero").val();
			var projectdesczero=$("#pdesczero").val();
			var projectnameone=$("#pnameone").val();
			var projectdescone=$("#pdescone").val();
			$(".r-project-name-zero").text(projectnamezero);
			$(".r-project-desc-zero").text(projectdesczero);
			$(".r-project-name-one").text(projectnameone);
			$(".r-project-desc-one").text(projectdescone);
			if(projectnameone!=='')
			{
				$(".r-project-name-one").show();
			}
			if(projectdescone!==''){
				$(".r-project-desc-one").show();
			}
		//end of work experience
				var achievetwo=$("#achieveone").val();
				var achievethree=$("#achievetwo").val();
				var achievefour=$("#achievethree").val();
				var achievefive=$("#achievefour").val();
				var achievesix=$("#achievefive").val();
				var achieveseven=$("#achievesix").val();
				var achieveeight=$("#achieveseven").val();
				$(".r-achieve-two").text(achievetwo);
				$(".r-achieve-three").text(achievethree);
				$(".r-achieve-four").text(achievefour);
				$(".r-achieve-five").text(achievefive);
				$(".r-achieve-six").text(achievesix);
				$(".r-achieve-seven").text(achieveseven);
				$(".r-achieve-eight").text(achieveeight);
				if(achievethree!=='')
				{
					$(".r-achieve-three").show();
				}
				if(achievefour!=='')
				{
					$(".r-achieve-four").show();
				}
				if(achievefive!=='')
				{
					$(".r-achieve-five").show();
				}
				if(achievesix!=='')
				{
					$(".r-achieve-six").show();
				}
				if(achieveseven!=='')
				{
					$(".r-achieve-seven").show();
				}
});
$(".template2-button").click(function(){
		var fname=$("#fname").val();
		var lname=$("#lname").val();
		console.log(fname);
		var objective=$("#text-objective").val();
		var email=$("#email").val();
		var mobile=$("#mobile").val();
		var website=$("#website").val();
		$(".r-name").text(fname + " " + lname);
		$(".r-email").text("Email :" + email);
		$(".r-mobile").text("Phone :" + mobile);
		$(".r-website").text("Website :" + website);
		$(".r-objective").text(objective);
		if(website!=='')
		{
			$(".r-website").show();
		}
		//education-section starts
			var degreeone=$("#degreezero").val();
			var degreetwo=$("#degreeone").val();
			var degreethree=$("#degreetwo").val();
			var degreefour=$("#degreethree").val();
			console.log(degreeone+degreetwo);
			var boardone=$("#boardzero").val();
			var boardtwo=$("#boardone").val();
			var branchone=$("#branchzero").val();
			var branchtwo=$("#branchone").val();
			console.log(branchone+branchtwo);
			var instituteone=$("#institutezero").val();
			var institutetwo=$("#instituteone").val();
			var institutethree=$("#institutetwo").val();
			var institutefour=$("#institutethree").val();
			var marksone=$("#markszero").val();
			var markstwo=$("#marksone").val();
			var marksthree=$("#markstwo").val();
			var marksfour=$("#marksthree").val();
			var yearone=$("#yearzero").val();
			var yeartwo=$("#yearone").val();
			var yearthree=$("#yeartwo").val();
			var yearfour=$("#yearthree").val();
			$(".r-table-row1-one").text(degreeone + "," + boardone);
			$(".r-table-row1-two").text(instituteone);
			$(".r-table-row1-five").text(yearone + "," + marksone);
			$(".r-table-row2-one").text(degreetwo + "," + boardtwo);
			$(".r-table-row2-two").text(institutetwo);
			$(".r-table-row2-five").text(yeartwo + "," + markstwo);
			$(".r-table-row3-one").text(degreethree + "," + branchone);
			$(".r-table-row3-two").text(institutethree);
			$(".r-table-row3-five").text(yearthree + "," + marksthree);
			$(".r-table-row4-one").text(degreefour + "," + branchtwo);
			$(".r-table-row4-two").text(institutefour);
			$(".r-table-row4-five").text(yearfour + "," + marksfour);
			if(yearfour!=='' || marksfour!=='' || institutefour!=='' || branchtwo!=='')
			{
				$(".r-table-row4").show();
			}
			
		//education section ends
		//technical skills section starts
			var skillone=$("#skillszero").val();
			var skilltwo=$("#skillsone").val();
			var skillthree=$("#skillstwo").val();
			$(".r-skill-one").text(skillone);
			$(".r-skill-two").text(skilltwo);
			$(".r-skill-three").text(skillthree);
			var skillfour=$("#skillsthree").val();
			if(skillfour !=='')
			{
				$(".r-skill-four").show();
				$(".r-skill-four").text(skillfour);
			}
			var skillfive=$("#skillsfour").val();
			if(skillfive !=='')
			{
				$(".r-skill-five").show();
				$(".r-skill-five").text(skillfive);
			}
			var skillsix=$("#skillsfive").val();
			if(skillsix !=='')
			{
				$(".r-skill-six").show();
				$(".r-skill-six").text(skillsix);
			}
			var skillseven=$("#skillssix").val();
			if(skillseven !=='')
			{
				$(".r-skill-seven").show();
				$(".r-skill-seven").text(skillseven);
			}
		//end of -technical -skill-section
		//start of work experience form
			var cpositionzero=$("#cpositionzero").val();
			var cpositionone=$("#cpositionone").val();
			var cnamezero=$("#cdetailszero").val();
			var cnameone=$("cdetailsone").val();
			var smonthzero=$("#smonthzero").val();
			var smonthone=$("#smonthone").val();
			var syearzero=$("#syearzero").val();
			var syearone=$("#syearone").val();
			var emonthzero=$("#emonthzero").val();
			var emonthone=$("#emonthone").val();
			var eyearzero=$("#eyearzero").val();
			var eyearone=$("#eyearone").val();
			var respzeroform1=$("#respzeroform1").val();
			var responeform1=$("#respooneform1").val();
			var resptwoform1=$("#resptwoform1").val();
			var respzeroform2=$("#respzeroform2").val();
			var responeform2=$("#responeform2").val();
			var resptwoform2=$("#resptwoform2").val();
			$(".r-respozerolisttwo").text(responeform1);
			$(".r-respzerolistthree").text(resptwoform1);
			$(".r-positionzero").text(cpositionzero + " " + "(" + smonthzero + " " + 
			syearzero + "-" + emonthzero + " "+eyearzero + ")");
			$(".r-positionone").text(cpositionone + " " + "(" + smonthone + " " + 
			syearone + "-" + emonthone + " "+eyearone + ")");
			$(".r-cnamezero").text(cnamezero);
			$(".r-cnamezone").text(cnameone);
			$(".r-respzerolistone").text(respzeroform1);
			$(".r-responelistone").text(respzeroform2);
			$(".r-responelisttwo").text(responeform2);
			$(".r-responelistthree").text(resptwoform2);
			console.log(responeform1);
			if(responeform1!=='')
			{
				$(".r-respozerolisttwo").show();
			}
			if(resptwoform1!=='')
			{
				$(".r-respzerolistthree").show();
			}
			if(respzeroform2!=='')
			{
				$(".r-responelistone").show();
			}
			if(responeform2!=='')
			{
				$(".r-responelisttwo").show();
			}
			if(resptwoform2!=='')
			{
				$(".r-responelistthree").show();
			}
			if(cnameone!=='')
			{
				$(".r-cnameone").show();
			}
			if(cpositionone!=='')
			{
				$(".r-positionone").show();
			}

			var projectnamezero=$("#pnamezero").val();
			var projectdesczero=$("#pdesczero").val();
			var projectnameone=$("#pnameone").val();
			var projectdescone=$("#pdescone").val();
			$(".r-project-name-zero").text(projectnamezero);
			$(".r-project-desc-zero").text(projectdesczero);
			$(".r-project-name-one").text(projectnameone);
			$(".r-project-desc-one").text(projectdescone);
			if(projectnameone!=='')
			{
				$(".r-project-name-one").show();
			}
			if(projectdescone!==''){
				$(".r-project-desc-one").show();
			}
		//end of work experience
				var achievetwo=$("#achieveone").val();
				var achievethree=$("#achievetwo").val();
				var achievefour=$("#achievethree").val();
				var achievefive=$("#achievefour").val();
				var achievesix=$("#achievefive").val();
				var achieveseven=$("#achievesix").val();
				var achieveeight=$("#achieveseven").val();
				$(".r-achieve-two").text(achievetwo);
				$(".r-achieve-three").text(achievethree);
				$(".r-achieve-four").text(achievefour);
				$(".r-achieve-five").text(achievefive);
				$(".r-achieve-six").text(achievesix);
				$(".r-achieve-seven").text(achieveseven);
				$(".r-achieve-eight").text(achieveeight);
				if(achievethree!=='')
				{
					$(".r-achieve-three").show();
				}
				if(achievefour!=='')
				{
					$(".r-achieve-four").show();
				}
				if(achievefive!=='')
				{
					$(".r-achieve-five").show();
				}
				if(achievesix!=='')
				{
					$(".r-achieve-six").show();
				}
				if(achieveseven!=='')
				{
					$(".r-achieve-seven").show();
				}
});
});