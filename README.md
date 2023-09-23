<img src="https://github.com/DanielSant0s/AthenaEnv/assets/47725160/f507ad9b-f9a1-4000-a454-ff824bc9d70b" alt="Logo" width="100%" height="auto">
<h1 style="text-align: center">ATHENA V3 MODULES</h1>
<p>With these modules I've created, it will make it easier to develop apps and games on Athena v3/v2.</p>

[athenaEnv](https://github.com/DanielSant0s/AthenaEnv)
<br />
<h2>modules:</h2>
<h3>Utils : some useful functions</h3>
<h3>obj : collision functions </h3>
<h3>alert : display alert </h3>
<h3>text : text functions</h3>
<h3>Vkeyboard : on-screen virtual keyboard</h3>
<br />
<h2>EXAMPLE:</h2>

```js 
 import * as module from './modules/module.js';
```

<br />
<h2>module UTIL:</h2>

```js 
 import * as util from './modules/Util.js';
```
<br />
<br />

## Functions

### `centerObject(width, height)`

- **Description:** Calculates and returns the center coordinates of an object based on its width and height.

### `removeAccents(word)`

- **Description:** Removes accents from a string.

### `cutSpriteSheet(image, width, height, x, y)`

- **Description:** Defines a clipping area on a sprite sheet image.

### `insertLineBreaks(text, charactersPerLine)`

- **Description:** Inserts line breaks into a text string based on the specified number of characters per line.

### `limitTextWithEllipsis(text, maxLength)`

- **Description:** Limits a text string to a specified maximum length and adds ellipsis (...) if the text is truncated.

### `getDistance(x, y, x2, y2)`

- **Description:** Calculates the Euclidean distance between two points (x1, y1) and (x2, y2).

### `random(min, max)`

- **Description:** Generates a random number within a specified range.

### `clamp(value, min, max)`

- **Description:** Limits a value to a specified range.

### `shuffleArray(array)`

- **Description:** Shuffles the elements of an array randomly.

### `calculateAverage(array)`

- **Description:** Calculates the average value of an array of numbers. Returns 0 if the array is empty to prevent division by zero.

### `findMaxValue(array)`

- **Description:** Finds the maximum value in an array. Returns `undefined` if the array is empty.

### `findMinValue(array)`

- **Description:** Finds the index of the minimum value in an array. Returns -1 if the array is empty.

### `degreesToRadians(degrees)`

- **Description:** Converts degrees to radians.

### `arrayInclude(array, value)`

- **Description:** Checks if a value exists in an array.

### `openJsonFile(file)`

- **Description:** Placeholder function for opening JSON files.

### `editFile(file, edit)`

- **Description:** Placeholder function for editing files.

### `createFile(file)`

- **Description:** Placeholder function for creating files.

## Example Usage

Here are a few examples of how to use the functions from the `util.js` module:

```javascript
import * as util from './modules/util.js';

// Calculate and get the center of an object
const center = util.centerObject(100, 100);

// Remove accents from a string
const cleanString = util.removeAccents("cliché");

// Define a clipping area on a sprite sheet
util.cutSpriteSheet(image, 50, 50, 0, 0);

// Insert line breaks into a text
const textWithLineBreaks = util.insertLineBreaks("This is a long text.", 8);

// Limit text length with ellipsis
const limitedText = util.limitTextWithEllipsis("This is a long text.", 10);

// Calculate the distance between two points
const distance = util.getDistance(0, 0, 3, 4);

// Generate a random number between 1 and 10
const randomNumber = util.random(1, 10);

// Clamp a value between 0 and 100
const clampedValue = util.clamp(120, 0, 100);

// Shuffle an array
const shuffledArray = util.shuffleArray([1, 2, 3, 4, 5]);

// Calculate the average of an array
const average = util.calculateAverage([1, 2, 3, 4, 5]);

// Find the maximum value in an array
const maxValue = util.findMaxValue([10, 20, 5, 15]);

// Find the index of the minimum value in an array
const minValueIndex = util.findMinValue([10, 20, 5, 15]);

// Convert degrees to radians
const radians = util.degreesToRadians(90);

// Check if a value exists in an array
const isInArray = util.arrayInclude([1, 2, 3], 2);
```
<br />
<br />
<h2>module TEXT:</h2>

```js 
 import * as text from './modules/text.js';
```
<br />
<br />
<h2>shortly...</h2>
<br />
<br />

<h2>module OBJ:</h2>

```js 
 import * as obj from './modules/obj.js';
```
<br />
<br />

## Example Usage

Here's a simple example of how to create and use an object:

```javascript
import * as obj from './modules/obj.js';

const myObject = new obj.object(100, 100, 50, 50, 0);

setInterval(() => {
  Screen.clear();
  draw.rect(myObject.x, myObject.y, myObject.width, myObject.height, Color.new(255, 255, 255));
  Screen.flip();
}, 0);
```
<br />

## Available Methods

- `edit(x, y, width, height, speed)`: Allows you to edit the object's properties, such as position and size.

- `setPosition(x, y)`: Sets the position of the object to the specified coordinates.

- `goTo(destinationX, destinationY)`: Moves the object toward the specified coordinates.

- `gravity(gravityValue)`: Applies a gravity force to the object.

- `moveUp()`, `moveDown()`, `moveLeft()`, `moveRight()`: Moves the object in the specified directions.

- `update()`: Updates the object's position, taking into account the set speed and destination.

- `addCollider(obj)`: Adds collision detection with another object and adjusts the position if necessary.

- `colliderObj(obj)`: Checks for collision with another object.
