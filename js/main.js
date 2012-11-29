window.addEventListener("DOMContentLoaded", function() {
var localStorage;
// Shortcut Function
	var $ = function(x) {
		var theElement = document.getElementById(x);
		return theElement;
	};

// Radio Button Functions
	var getRadioGender = function() {
		var radioOne = $("gender");
		for (var i = radioOne.length - 1; i >= 0; i--) {
			if (radioOne[i].checked) {
				genderValue = radioOne[i].value;
				return genderValue;
			}
		};
	}
	var getRadioOrientation = function() {
		var radioTwo = $("orientation");
		for (var i = radioTwo.length - 1; i >= 0; i--) {
			if (radioTwo[i].checked) {
				orientationValue = radioTwo[i].value;
				return orientationValue;
			}
		};
	}

// Check Box Function
	getCheckBoxValue = function() {
		if ($("vehicle").checked) {
			vehicleValue = $("vehicle").value
		} else {
			vehicleValue = "No"
		}
		if ($("shared interests").checked) {
			interestsValue = $("shared interests").value
		} else {
			interestsValue = "No"
		}
		if ($("financially stable").checked) {
			stableValue = $("financially stable").value
		} else {
			stableValue = "No"
		}
		if ($("drinks").checked) {
			drinksValue = $("drinks").value
		} else {
			drinksValue = "No"
		}
		if ($("smokes").checked) {
			smokesValue = $("smokes").value
		} else {
			smokesValue = "No"
		}
		if ($("has kids").checked) {
			hasKidsValue = $("has kids").value
		} else {
			hasKidsValue = "No"
		}
		if ($("wants kids").checked) {
			wantsKidsValue = $("wants kids").value
		} else {
			wantsKidsValue = "No"
		}
		if ($("has pets").checked) {
			hasPetsValue = $("has pets").value
		} else {
			hasPetsValue = "No"
		}
	}
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
		}
	}

// Get Data Function
	var getData	= function() {
		var makeDiv = document.createElement("div");
		if (localStorage === 0) {
			alert("No users to display.")
		} else {
			toggleLinks("on");
			var makeDiv = document.createElement("div");
			makeDiv.setAttribute("idNum", "item");
			var makeList = document.createElement("ul");
			makeDiv.appendChild(makeList);
			document.body.appendChild(makeDiv);
			for (var i = 0, j = localStorage.length; i < j; i++) {
				var makeLi = document.createElement("li");
				makeList.appendChild(makeLi);
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var obj = JSON.parse(value);
				makeLi.appendChild(makeSubList);
				for(var n in obj) {
					var makeSubList = document.createElement("li");
					var optSubText = obj[n][0] + " " + obj[n][1];
					makeSubList.innerHTML = optSubText;
				}
			};
		};
	}

// Store Data Function
	var	storeData = function() {
		var idNum				= Math.floor(Math.random()*1000001);
		getRadioGender();
		getRadioOrientation();
		//getCheckBoxValue();
		var item				= {};
			item.website		= ["Dating Website: ", $("wsite").value];
			item.userName		= ["Username: ", $("uname").value];
			item.age			= ["Age: ", $("age").value];
			item.city			= ["City: ", $("city").value];
			item.contacted		= ["First Contacted: ", $("fcontact").value];
			item.gender			= ["Gender: ", getRadioGender.genderValue];
			item.orientation	= ["Sexual Orientation: ", getRadioOrientation.orientationValue];
		/*	item.vehicle		= ["Has a Vehicle: ", getCheckBoxValue.vehicleValue];
			item.interests		= ["Has Shared Interests: ", interestsValue];
			item.stable			= ["Is Financially Stable: ", stableValue];
			item.drinks			= ["Drinks: ", drinksValue];
			item.smokes			= ["Smokes: ", smokesValue];
			item.hasKids		= ["Has Kids: ", hasKidsValue];
			item.wantsKids		= ["Wants Kids: ", wantsKidsValue];
			item.hasPets		= ["Has Pets: ", hasPetsValue];
			*/
			item.music			= ["Favorite Music Genre: ", $("music").value];
			item.movie			= ["Favorite Movie Genre: ", $("movie").value];
			item.compatible		= ["Level of Compatibility: ", $("compatibility").value];
			item.notes			= ["Additional Information: ", $("comments").value];
		var items = JSON.stringify(item)
		localStorage.setItem(idNum, items);
		alert("User Saved!")
	}

	var clearLocal = function() {
		if (localStorage.length === 0) {
			alert("There is no data to clear.")
		} else {
			localStorage.clear();
			alert("All users deleted.");
			window.location.reload();
			return false;
		}
	}

// Delete users confirm function
	var ask = function() {
		var ask = confirm("Delete all users?");
		if (ask) {
			clearLocal();
		} else {
			alert("Users not deleted.")
		}
	}

// Enable disabled fields function
	var enableFields = function(y) {
		if (y != "") {
			$("age").removeAttribute("disabled", "disabled");
			$("city").removeAttribute("disabled", "disabled");
		}
	} 

	// Variables
	var	textFieldOne = $("wsite");
	var	textFieldTwo = $("uname");
	var	textFieldThree = $("age");
	var	textFieldFour = $("city");
	localStorage
	


// Event Listeners
	var displayLink = $("display");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", ask);
	var save = $("submit");
	save.addEventListener("click", storeData);
	var eFields = $("uname");
	eFields.addEventListener("blur", enableFields)

	

});