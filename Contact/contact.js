onst social_media = ["facebook", "twitter", "googleplus", "linkedin"];
console.log(social_media[0]);
console.log(social_media[1]);
console.log(social_media[2]);
console.log(social_media[3]);

function page() {
  var selectedOption = document.getElementById("browser").value.toLowerCase();

  // Përdorimi i match() për të gjetur shabllonin në string
  var matchResult = selectedOption.match(/(facebook|twitter|instagram|linkedin|dribbble|pinterest)/);

  if (matchResult) {
    // Përdorimi i replace() për të zëvendësuar shabllonin me një vlerë tjetër
    var replacedOption = matchResult[0].replace("googleplus", "google");
    
    switch (replacedOption) {
      case "twitter":
        window.location.href = "https://twitter.com";
        break;
      case "instagram":
        window.location.href = "https://instagram.com";
        break;
      case "facebook":
        window.location.href = "https://facebook.com";
        break;
      case "linkedin":
        window.location.href = "https://linkedin.com";
        break;
      case "dribbble":
        window.location.href = "https://dribbble.com";
        break;
      case "pinterest":
        window.location.href = "https://pinterest.com";
        break;
      default:
        console.log("Invalid selection");
    }
  } else {
    console.log("Invalid selection");
  }
}

// Përdorimi i setTimeout me funksionin e rregullt (pa thirrjen e menjëhershme)
setTimeout(page, 3000);
