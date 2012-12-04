// Devin "Lauren" Elder
// VFW Term 1212
// Project 3
// 11/29/2012

window.addEventListener("DOMContentLoaded", function() {

// Shortcut Function
	var $ = function(x) {
		var theElement = document.getElementById(x);
		return theElement;
	};

// Radio Button Functions
	var getRadioGender = function() {
		var radioOne = document.forms[0].gender;
		for (var i = 0; i < radioOne.length; i++) {
			if (radioOne[i].checked) {
				genderValue = radioOne[i].value;
			} else {
				genderValue = "Unknown"
			};
		};
	};
	var getRadioOrientation = function() {
		var radioTwo = document.forms[0].orientation;
		for (var i = 0; i < radioTwo.length; i++) {
			if (radioTwo[i].checked) {
				orientationValue = radioTwo[i].value;
			} else {
				orientationValue = "Unknown"
			};
		};
	};

// Check Box Function
	getCheckBoxValue = function() {
		if ($("vehicle").checked) {
			vehicleValue = "Yes";
		} else {
			vehicleValue = "No"
		};
		if ($("shared interests").checked) {
			interestsValue = "Yes";
		} else {
			interestsValue = "No";
		};
		if ($("financially stable").checked) {
			stableValue = "Yes";
		} else {
			stableValue = "No";
		};
		if ($("drinks").checked) {
			drinksValue = "Yes";
		} else {
			drinksValue = "No";
		};
		if ($("smokes").checked) {
			smokesValue = "Yes";
		} else {
			smokesValue = "No";
		};
		if ($("has kids").checked) {
			hasKidsValue = "Yes";
		} else {
			hasKidsValue = "No";
		};
		if ($("wants kids").checked) {
			wantsKidsValue = "Yes";
		} else {
			wantsKidsValue = "No";
		};
		if ($("has pets").checked) {
			hasPetsValue = "Yes";
		} else {
			hasPetsValue = "No";
		};
	};

// Toggle links Function
	var toggleLinks = function(n) {
		switch(n) {
			case "on":
				$("addUserForm").style.display = "none";
				$("clear").style.display = "inline";
				$("display").style.display = "none";
				$("Add_a_User").style.display = "inline";
				break;
			case "off":
				$("addUserForm").style.display = "inline";
				$("clear").style.display = "inline";
				$("display").style.display = "inline";
				$("Add_a_User").style.display = "inline";
				$("items").style.display = "none";
				break;
			default:
				return false;
		};
	};

// Get Data Function
	var getData	= function() {
		toggleLinks("on");
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "item");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("item").style.display = "block";
		for (var i = 0, j = window.localStorage.length; i < j; i++) {
			var makeLi = document.createElement("li");
			makeList.appendChild(makeLi);
			var key = window.localStorage.key(i);
			var value = window.localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			for(var n in obj) {
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0] + " " + obj[n][1];
				makeSubLi.innerHTML = optSubText;
			};
		};
	};

// Store Data Function
	var	storeData = function() {
		var id					= Math.floor(Math.random() * 1000001);
		getRadioGender();
		getRadioOrientation();
		getCheckBoxValue();
		var item				= {};
			item.userName		= ["Username: ", $("uname").value];
			item.age			= ["Age: ", $("age").value];
			item.city			= ["City: ", $("city").value];
			item.website		= ["Dating Website: ", $("wsite").value];
			item.contacted		= ["First Contacted: ", $("fcontact").value];
			item.gender			= ["Gender: ", genderValue];
			item.orientation	= ["Sexual Orientation: ", orientationValue];
			item.vehicle		= ["Has a Vehicle: ", vehicleValue];
			item.interests		= ["Has Shared Interests: ", interestsValue];
			item.stable			= ["Is Financially Stable: ", stableValue];
			item.drinks			= ["Drinks: ", drinksValue];
			item.smokes			= ["Smokes: ", smokesValue];
			item.hasKids		= ["Has Kids: ", hasKidsValue];
			item.wantsKids		= ["Wants Kids: ", wantsKidsValue];
			item.hasPets		= ["Has Pets: ", hasPetsValue];
			item.music			= ["Favorite Music Genre: ", $("music").value];
			item.movie			= ["Favorite Movie Genre: ", $("movie").value];
			item.compatible		= ["Level of Compatibility: ", $("compatibility").value];
			item.notes			= ["Additional Information: ", $("comments").value];
		
		window.localStorage.setItem(id, JSON.stringify(item));
		alert("User Saved!");
	};

// Clear Data Function
	var clearLocal = function() {
			window.localStorage.clear();
			alert("All users deleted.");
			window.location.reload();
			return false;	
	};

// Delete users confirm function
	var confirmDelete = function() {
		if (window.localStorage.length === 0) {
			alert("There is no data to clear.");
		} else {
			var ask = confirm("Delete all users?");
			if (ask) {
				clearLocal();
			} else {
				alert("Users not deleted.");
			};
		};
	};

// Event Listeners
	var displayLink = $("display");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", confirmDelete);
	var save = $("submit");
	save.addEventListener("click", storeData);
});