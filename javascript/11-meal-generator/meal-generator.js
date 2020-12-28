const menu = {
    // Maps each course and dishes available to order
    _courses: {
      _appetisers: [],
      _mains: [],
      _desserts: [],

      get appetisers() {
        return this._appetisers;
      },

      set appetisers(appetiserIn) {
        this._appetisers = appetiserIn;
      },

      get mains() {
          return this._mains;
      },

      set mains(mainIn) {
          this._mains = mainIn;
      },

      get desserts() {
          return this._desserts;
      },

      set desserts(dessertIn) {
          this._desserts = dessertIn;
      },
    },


    get courses() {
      return {
        // Uses the getter methods
        appetisers: this._courses.appetisers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };

      return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);

      return dishes[randomIndex];
    },

    generateRandomMeal() {
      const appetiser = this.getRandomDishFromCourse("appetisers");
      const main = this.getRandomDishFromCourse("mains");
      const dessert = this.getRandomDishFromCourse("desserts");
      const totalPrice = appetiser.price + main.price + dessert.price;

      return `Your three-course meal: \n - ${appetiser.name} \n - ${main.name} \n - ${dessert.name} \n \n This meal will cost $${totalPrice}.`;
    },
  };

menu.addDishToCourse("appetisers", "Mozzarella Sticks", 8);
menu.addDishToCourse("mains", "Tagliatelle al Ragu", 20);
menu.addDishToCourse("desserts", "Tiramissu", 12);

menu.addDishToCourse("appetisers", "Agedashi Tofu", 6);
menu.addDishToCourse("mains", "Unagi Don", 24);
menu.addDishToCourse("desserts", "Matcha Souffle", 14);

menu.addDishToCourse("appetisers", "Shanghainese Pan-fried Dumplings", 10);
menu.addDishToCourse("mains", "Half Roasted Duck Rice", 15);
menu.addDishToCourse("desserts", "Mango Sago", 12);

var meal = menu.generateRandomMeal();
console.log(meal);