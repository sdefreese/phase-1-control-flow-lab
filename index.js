function scuberGreetingForFeet(rigSize) {
  if (rigSize <= 400) { 
    return "This one is on me!"
  } 
  else if (rigSize <=2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (rigSize >2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else if (city != 'NYC') {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    case 'thanks for everything' :
      return "Bye."
      break;
  }
}