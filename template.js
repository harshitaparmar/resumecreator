$(document).ready(function(){
$(".resume-template2-form").hide();
$(".r-table-row4").hide();
$(".r-company-row-2").hide();
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
$(".r-project-row-2").hide();
$(".r-respzerolisttwo").hide();
$(".r-respzerolistthree").hide();
$(".template1-button").click(function(){
		var fname=$("#fname").val();
		var lname=$("#lname").val();
		console.log(fname);
		var objective=$("#text-objective").val();
		var email=$("#email").val();
		var mobile=$("#mobile").val();
		var website=$("#website").val();
		$(".r-email").text("Email :" + email);
		$(".r-mobile").text("Phone :" + mobile);
		$(".r-website").text("Website :" + website);
		$(".r-objective").text(objective);
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
			var cnamezero=$("#cdetailszero").val();
			var smonthzero=$("#smonthzero").val();
			var syearzero=$("#syearzero").val();
			var emonthzero=$("#emonthzero").val();
			var eyearzero=$("#eyearzero").val();
			var respzeroform1=$("#respzeroform1").val();
			var responeform1=$("#responeform1").val();
			var resptwoform1=$("#resptwoform1").val();
			$(".r-responelisttwo").text(responeform1);
			$(".r-responelistthree").text(resptwoform1);
			$(".r-positionzero").text(cpositionzero + " " + "(" + smonthzero + " " + 
			syearzero + "-" + emonthzero + " "+eyearzero + ")");
			$(".r-cnamezero").text(cnamezero);
			$(".r-respzerolistone").text(respzeroform1);
			if(responeform1!=='')
			{
				$(".r-responelisttwo").show();
			}
			if(resptwoform1!=='')
			{
				$(".r-responelistthree").show();
			}
			var projectnamezero=$("#pnamezero").val();
			var projectdesczero=$("#pdesczero").val();
			var projectnameone=$("#pnameone").val();
			var projectdescone=$("#pdescone").val();
			$(".r-project-name-zero").text(projectnamezero);
			$(".r-project-desc-zero").text(projectdesczero);
			$(".r-project-name-one").text(projectnameone);
			$(".r-project-desc-one").text(projectdescone);
			if(projectnamezero!=='')
			{
				$(".r-project-row-2").show();
			}
			if(projectdescone!=='')
			{
				$(".r-project-row-2").show();
			}
		//end of work experience
				var achieveone=$("#achieve").val();
				var achievetwo=$("#achieveone").val();
				var achievethree=$("#achievetwo").val();
				var achievefour=$("#achievethree").val();
				var achievefive=$("#achievefour").val();
				var achievesix=$("#achievefive").val();
				var achieveseven=$("#achievesix").val();
				var achieveeight=$("#achieveseven").val();
				$(".r-acheive-one").text(achieveone);
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
		$(".r-email").text("Email :" + email);
		$(".r-mobile").text("Phone :" + mobile);
		$(".r-website").text("Website :" + website);
		$(".r-objective").text(objective);
		//education-section starts
			var degreethree=$("#degreetwo").val();
			var degreefour=$("#degreethree").val();
			var branchone=$("#branchzero").val();
			var branchtwo=$("#branchone").val();
			var institutethree=$("#institutetwo").val();
			var institutefour=$("#institutethree").val();
			var marksthree=$("#markstwo").val();
			var marksfour=$("#marksthree").val();
			var yearthree=$("#yeartwo").val();
			var yearfour=$("#yearthree").val();
			$(".r-table-row3-five").text(yearthree);
			$(".r-table-row4-five").text(yearfour);
			$(".r-table-row3-one").text(degreethree + "," + branchone);
			$(".r-table-row3-two").text(institutethree + "," + marksthree);
			$(".r-table-row4-one").text(degreefour + "," + branchtwo);
			$(".r-table-row4-two").text(institutefour + "," + marksfour);
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
			var cnamezero=$("#cdetailszero").val();
			var smonthzero=$("#smonthzero").val();
			var syearzero=$("#syearzero").val();
			var emonthzero=$("#emonthzero").val();
			var eyearzero=$("#eyearzero").val();
			var respzeroform1=$("#respzeroform1").val();
			var responeform1=$("#responeform1").val();
			var resptwoform1=$("#resptwoform1").val();
			$(".r-responelisttwo").text(responeform1);
			$(".r-responelistthree").text(resptwoform1);
			$(".r-positionzero").text(cpositionzero + " " + "(" + smonthzero + " " + 
			syearzero + "-" + emonthzero + " "+eyearzero + ")");
			$(".r-cnamezero").text(cnamezero);
			$(".r-respzerolistone").text(respzeroform1);
			if(responeform1!=='')
			{
				$(".r-responelisttwo").show();
			}
			if(resptwoform1!=='')
			{
				$(".r-responelistthree").show();
			}
			var projectnamezero=$("#pnamezero").val();
			var projectdesczero=$("#pdesczero").val();
			var projectnameone=$("#pnameone").val();
			var projectdescone=$("#pdescone").val();
			$(".r-project-name-zero").text(projectnamezero);
			$(".r-project-desc-zero").text(projectdesczero);
			$(".r-project-name-one").text(projectnameone);
			$(".r-project-desc-one").text(projectdescone);
			if(projectnamezero!=='')
			{
				$(".r-project-row-2").show();
			}
			if(projectdescone!=='')
			{
				$(".r-project-row-2").show();
			}
		//end of work experience
				var achieveone=$("#achieve").val();
				var achievetwo=$("#achieveone").val();
				var achievethree=$("#achievetwo").val();
				var achievefour=$("#achievethree").val();
				var achievefive=$("#achievefour").val();
				var achievesix=$("#achievefive").val();
				var achieveseven=$("#achievesix").val();
				var achieveeight=$("#achieveseven").val();
				$(".r-acheive-one").text(achieveone);
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