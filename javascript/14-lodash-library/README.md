# Lodash Library

In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays:

1 .clamp(number, lower, upper)

- Clamps number within the inclusive lower and upper bounds.

2 .inRange(number, start, end)

- Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.

3 .words(string)

- Splits string into an array of its words.

4 .pad(string, length)

- Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.

5 .has(object, key)

- Checks if path is a direct property of object.

6 .invert(object)

- Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.

7 .findKey(object, predicate)

- This method is like \_.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.

8 .drop(array, number)

- Creates a slice of array with n elements dropped from the beginning.

9 .dropWhile(array, predicate)

- Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsy. The predicate is invoked with three arguments: (value, index, array).

10 .chunk(array, size)

- Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
