class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }

    get title() {
      return this._title;
    }

    get isCheckedOut() {
      return this._isCheckedOut;
    }

    get ratings() {
      return this._ratings;
    }

    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }

    // Using getter (not actual property in constructor)
    toggleCheckOutStatus() {
     this.isCheckedOut = !this.isCheckedOut;
      }

    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) =>
      currentSum + rating);
      return (ratingsSum / this.ratings.length).toFixed(2);
    }

    addRating(rating) {
      this.ratings.push(rating);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }

    get author() {
      return this._author;
    }

    get pages() {
      return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }

    get director() {
      return this._director;
    }

    get runTime() {
      return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 554);

historyOfEverything.toggleCheckOutStatus();
console.log(`Is "History of Everything" book checked out? ${historyOfEverything.isCheckedOut}`);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(`Average rating of "History of Everything": ${historyOfEverything.getAverageRating()}/10 \n`);

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(`Is "Speed" movie checked out? ${speed.isCheckedOut}`);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`Average rating of "Speed": ${speed.getAverageRating()}/10 \n`);