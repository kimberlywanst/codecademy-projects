// Object to represent library containing all functionality to be added
const _ = {
    // Implement _.clamp()
    clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },

    // Implement _.inRange()
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      };

      if (start > end) {
        const temp = end;
        end = start;
        start = temp;
      };

      const isInRange = Boolean(start <= number && number < end);
      return isInRange;
    },

    // Implement _.words()
    words(string) {
      const words = string.split(" ");
      return words;
    },

    // Implement _.pad()
    pad(string, length) {
      if (length <= string.length) {
        return string;

      } else {
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
        return paddedString;
      }
    },

    // Implement _.has()
    has(object, key) {
      const hasValue = object[key] !== undefined;
      return hasValue;
    },

    // Implement _.invert()
    invert(object) {
      let invertedObject = {};
      for (let key in object) {
        const originalValue = object[key];
        invertedObject = {originalValue : key};
      }
      return invertedObject;
    },

    // Implement _.findKey()
    findKey(object, predicate) {
      for (let key in object) {
        const value = object[key];
        predicateReturnValue = predicate(value);

        if (predicateReturnValue === true) {
          return key;
        }
        return undefined;
      }
    },

    // Implement _.drop()
    drop(array, number) {
      if (number == undefined) {
        number = 1;
      };

      const droppedArray = array.slice(number);
      return droppedArray;
    },

    // Implement _.dropWhile()
    dropWhile(array, predicate) {
      const dropNumber = array.findIndex((element, index) => {
        // Make every truthy value falsy
        return !predicate(element, index, array);
      });

      const droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },

    // Implement _.chunk()
    chunk(array, size) {
      if (size == undefined) {
        size = 1;
      };

      const arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        const arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
      };
      return arrayChunks;
    },
  }

module.exports = _;