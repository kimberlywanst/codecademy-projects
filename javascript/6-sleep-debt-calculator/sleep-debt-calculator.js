const getSleepHours = function(day) {

    switch(day) {
      case "Monday":
        return 8;
        break;

      case "Tuesday":
        return 7;
        break;

      case "Wednesday":
        return 7.5;
        break;

      case "Monday":
        return 8;
        break;

      case "Thursday":
        return 7;
        break;

      case "Friday":
        return 9;
        break;

      case "Saturday":
        return 8.5;
        break;

      case "Sunday":
        return 7;
        break;

      default:
        return "Error!";
        break;
    }
  }

  const getActualSleepHours = function() {
    const totalSleepHours =
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");

    return totalSleepHours;
  }

  const getIdealSleepHours = function() {
    const idealHours = 8;
    return idealHours * 7;
  }

  const calculateSleepDebt = function() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const differenceSleepHours = idealSleepHours - actualSleepHours;

    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep.");

    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${differenceSleepHours}more hour(s) of sleep than needed!`);

    } else if (actualSleepHours < idealSleepHours) {
        console.log(`Get more rest! You got ${differenceSleepHours} hour(s) less sleep than you needed this week.`);

    } else {
        console.log("Error! Something went wrong, check your code.");
    }
  }

  calculateSleepDebt();