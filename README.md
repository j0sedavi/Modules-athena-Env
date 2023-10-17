<img src="https://github.com/DanielSant0s/AthenaEnv/assets/47725160/f507ad9b-f9a1-4000-a454-ff824bc9d70b" alt="Logo" width="100%" height="auto">

# ATHENA V3 MODULES

With these modules I've created, it will make it easier to develop apps and games on Athena v3/v2.

[athenaEnv](https://github.com/DanielSant0s/AthenaEnv)

## Modules:

- **Utils:** Some useful functions
- **Obj:** Collision functions(under development)
- **Alert:** Display alert(under development )
- **Colors:** access colors easily  
- **VKeyboard:** On-screen virtual keyboard(under development)

## Example:

```javascript 
import * as module from './modules/module.js';
```

---

## Module UTIL:

```javascript 
import * as util from './modules/Util.js';
```

### Functions

## `centerObject(width, height)`

### Description:
Centers an object on the screen based on its width and height.

### Parameters:
- `width`: Width of the object.
- `height`: Height of the object.

### Return Value:
Object containing the `x` and `y` coordinates to center the object on the screen.

---

## `removeAccents(palavra)`

### Description:
Removes accents from a given word.

### Parameters:
- `palavra`: Input word with accents.

### Return Value:
Word without accents.

---

## `cutSpriteSheet(image, width, height, x, y)`

### Description:
Defines the boundaries of a sprite in a sprite sheet.

### Parameters:
- `image`: Sprite sheet image object.
- `width`: Width of the sprite.
- `height`: Height of the sprite.
- `x`: X-coordinate of the top-left corner of the sprite.
- `y`: Y-coordinate of the top-left corner of the sprite.

### Return Value:
`true` if successful.

---

## `insertLineBreaks(text, charactersPerLine)`

### Description:
Inserts line breaks into a text string based on the specified number of characters per line.

### Parameters:
- `text`: Input text string.
- `charactersPerLine`: Maximum number of characters per line.

### Return Value:
Formatted text with line breaks.

---

## `limitTextWithEllipsis(text, maxLength)`

### Description:
Limits a text string to a specified maximum length and adds ellipsis (...) if the text is truncated.

### Parameters:
- `text`: Input text string.
- `maxLength`: Maximum length of the text before truncation.

### Return Value:
Truncated text with ellipsis if necessary.

---

## `getDistance(x1, y1, x2, y2)`

### Description:
Calculates the Euclidean distance between two points.

### Parameters:
- `x1`, `y1`: Coordinates of the first point.
- `x2`, `y2`: Coordinates of the second point.

### Return Value:
Euclidean distance between the two points.

---

## `random(min, max)`

### Description:
Generates a random number within a specified range.

### Parameters:
- `min`: Minimum value of the range.
- `max`: Maximum value of the range.

### Return Value:
Random number within the specified range.

---

## `clamp(value, min, max)`

### Description:
Limits a value to a specified range.

### Parameters:
- `value`: Value to be clamped.
- `min`: Minimum value of the range.
- `max`: Maximum value of the range.

### Return Value:
Clamped value within the specified range.

---

## `shuffleArray(array)`

### Description:
Shuffles the elements of an array randomly.

### Parameters:
- `array`: Input array to be shuffled.

### Return Value:
Shuffled array.

---

## `calculateAverage(array)`

### Description:
Calculates the average value of an array of numbers.

### Parameters:
- `array`: Input array of numbers.

### Return Value:
Average value of the numbers in the array. Returns 0 if the array is empty to prevent division by zero.

---

## `findMaxValue(array)`

### Description:
Finds the maximum value in an array.

### Parameters:
- `array`: Input array of numbers.

### Return Value:
Maximum value in the array. Returns `undefined` if the array is empty.

---

## `findMinValue(array)`

### Description:
Finds the index of the minimum value in an array.

### Parameters:
- `array`: Input array of numbers.

### Return Value:
Index of the minimum value in the array. Returns -1 if the array is empty.

---

## `degreesToRadians(degrees)`

### Description:
Converts degrees to radians.

### Parameters:
- `degrees`: Angle in degrees.

### Return Value:
Equivalent angle in radians.

---


## `centerFont(font, text)`

### Description

This function calculates the X and Y coordinates to center a given text on the screen based on the specified font.

### Parameters

- `font` (Font): The font object used to render the text.
- `text` (string): The text to be centered on the screen.

### Returns

- An object containing the calculated X and Y coordinates to center the text:
  - `x` (number): X-coordinate for centering the text horizontally.
  - `y` (number): Y-coordinate for centering the text vertically.

### Example Usage

```javascript
const myFont = new Font();
const myText = "Centered Text";
const coordinates = centerFont(myFont, myText);
myFont.print(coordinates.x, coordinates.y, myText);
```

## `centerFontAtObject(x, y, width, height, font, text)`

### Description

This function calculates the X and Y coordinates to center a given text within a specified object based on the specified font.

### Parameters

- `x` (number): X-coordinate of the top-left corner of the object.
- `y` (number): Y-coordinate of the top-left corner of the object.
- `width` (number): Width of the object.
- `height` (number): Height of the object.
- `font` (Font): The font object used to render the text.
- `text` (string): The text to be centered within the object.

### Returns

- An object containing the calculated X and Y coordinates to center the text within the object:
  - `x` (number): X-coordinate for centering the text horizontally within the object.
  - `y` (number): Y-coordinate for centering the text vertically within the object.

### Example Usage

```javascript
const myFont = new Font();
const myText = "Centered Text";
const objectX = 100;
const objectY = 150;
const objectWidth = 200;
const objectHeight = 100;
const coordinates = centerFontAtObject(objectX, objectY, objectWidth, objectHeight, myFont, myText);
Draw.rect(objectX,objectY,objectWidth,objectHeight,Color.new(0,0,255))
myFont.print(coordinates.x, coordinates.y, myText);
```

---


### `arrayInclude(array, value)`
Checks if a value is present in the array.

- **Parameters:**
  - `array` (Array): The array to check.
  - `value` (any type): The value to search for in the array.

- **Returns:**
  - `true` if the value is present in the array.
  - `false` if the value is not in the array.

---

### `getItemPosition(item, array)`
Finds the first occurrence position of an item in an array.

- **Parameters:**
  - `item` (any type): The item to find in the array.
  - `array` (Array): The array to search for the item.

- **Returns:**
  - The index of the first occurrence of the item in the array, if found.
  - `-1` if the item is not in the array.

---

### `count(c, str)`
Counts the number of occurrences of a character in a string, ignoring case.

- **Parameters:**
  - `c` (string): The character to count.
  - `str` (string): The string to count the character in.

- **Returns:**
  - The number of times the character appears in the string.

---

### `isJSON(jsonString)`
Checks if a string is a valid JSON.

- **Parameters:**
  - `jsonString` (string): The string to check.

- **Returns:**
  - `true` if the string is a valid JSON.
  - `false` if the string is not a valid JSON.

---

### `formatCurrency(value)`
Formats a numeric value as a currency string with two decimal places and thousands separator.

- **Parameters:**
  - `value` (number): The numeric value to be formatted.

- **Returns:**
  - A formatted string representing the value as currency.

---

### `UUID()`
Generates a Universally Unique Identifier (UUID).

- **Returns:**
  - A string representing a randomly generated UUID.

---

### `capitalizeFirstLetter(str)`
Converts the first character of a string to uppercase.

- **Parameters:**
  - `str` (string): The string to capitalize the first character of.

- **Returns:**
  - A string with the first character in uppercase.

---

### `replaceAll(str, search, replacement)`
Replaces all occurrences of a substring with another in a string.

- **Parameters:**
  - `str` (string): The string in which to make the replacement.
  - `search` (string): The substring to be replaced.
  - `replacement` (string): The substring for replacement.

- **Returns:**
  - A new string with all occurrences of `search` replaced by `replacement`.

---

### `removeDuplicates(array)`
Removes duplicate elements from an array.

- **Parameters:**
  - `array` (Array): The array from which to remove duplicate elements.

- **Returns:**
  - A new array containing only the unique elements from the original array.

---

### `sortNumbersAscending(array)`
Sorts an array of numbers in ascending order.

- **Parameters:**
  - `array` (Array): The array of numbers to be sorted.

- **Returns:**
  - A new array containing the numbers from the original array, sorted in ascending order.

---

### `isNull(value)`
Checks if a value is `null` or `undefined`.

- **Parameters:**
  - `value` (any type): The value to be checked.

- **Returns:**
  - `true` if the value is `null` or `undefined`.
  - `false` if the value is not `null` or `undefined`.

---

### `isArray(obj)`
Checks if an object is an array.

- **Parameters:**
  - `obj` (any type): The object to be checked.

- **Returns:**
  - `true` if the object is an array.
  - `false` if the object is not an array.

---

### `isPrime(number)`
Checks if a number is prime.

- **Parameters:**
  - `number` (number): The number to be checked.

- **Returns:**
  - `true` if the number is prime.
  - `false` if the number is not prime.

---

### `isdigit(str)`
Checks if a string represents a number.

- **Parameters:**
  - `str` (string): The string to be checked.

- **Returns:**
  - `true` if the string represents a number.
  - `false` if the string does not represent a number.

---

## Module OBJ:

```javascript 
import * as obj from './modules/obj.js';
```

---


## Class: `object`

### Description

Represents a generic object with properties such as position, size, speed, and gravity effects.

### Constructor

#### Parameters

- `x` (number): X-coordinate of the object's initial position.
- `y` (number): Y-coordinate of the object's initial position.
- `width` (number): Width of the object.
- `height` (number): Height of the object.
- `speed` (number, optional): Initial speed of the object. Defaults to `0`.

### Methods

#### `edit(x, y, width, height, speed)`

---

Edits the properties of the object, such as position, size, and speed.

- `x` (number): New X-coordinate of the object.
- `y` (number): New Y-coordinate of the object.
- `width` (number): New width of the object.
- `height` (number): New height of the object.
- `speed` (number, optional): New speed of the object. Defaults to the current speed.

---

#### `setPosition(x, y)`

Sets the position of the object to the specified coordinates.

- `x` (number): New X-coordinate of the object.
- `y` (number): New Y-coordinate of the object.

---

#### `gravity(gravity_value)`

Applies a gravity force to the object.

- `gravity_value` (number): Value representing the gravity force to be applied.

---

#### `moveUp()`

Moves the object upward based on its current speed.

---

#### `moveDown()`

Moves the object downward based on its current speed.

---

#### `moveLeft()`

Moves the object leftward based on its current speed.

---

#### `moveRight()`

Moves the object rightward based on its current speed.

---

#### `update()`

Updates the object's position based on its speed and destination coordinates. If destination coordinates are set, the object moves towards those coordinates.

---

#### `addCollider(obj)`

Adds collision detection with another object and adjusts the position if necessary.

- `obj` (object): Another object to check for collision with.

---

#### `colliderObj(obj)`

Checks for collision with another object.

- `obj` (object): Another object to check for collision with.

---

## Example Usage

```javascript
import * as obj from './modules/obj.js';

// Creating objects
var player = new obj.object(0, 0, 50, 50, 3);
var bj = new obj.object(80, 150, 50, 50, 0);

// Creating colors
var blue = Color.new(0, 0, 255);
var green = Color.new(0, 255, 0);

const main = () => {
  pad.update();
  player.update(); // Updating the player object
  
  if (pad.pressed(Pads.LEFT)) {
    player.moveLeft();
  }
  if (pad.pressed(Pads.UP)) {
    player.moveUp();
  }
  if (pad.pressed(Pads.DOWN)) {
    player.moveDown();
  }
  if (pad.pressed(Pads.RIGHT)) {
    player.moveRight();
  }
  if (pad.justPressed(Pads.SELECT)) {
    player.setPosition(0, 0);
  }
  
  // Ensuring player stays within screen boundaries
  if (player.x < 0) {
    player.x = 0;
  }
  if (player.y < 0) {
    player.y = 0;
  }
  if (player.x > 640 - player.width) {
    player.x = 640 - player.width;
  }
  if (player.y > 448 - player.height) {
    player.y = 448 - player.height;
  }
  
  // Creating collisions
  player.addCollider(bj);
  
  // Drawing objects
  Draw.rect(player.x, player.y, player.width, player.height, blue);
  Draw.rect(bj.x, bj.y, bj.width, bj.height, green);
};

Screen.displayFunc(main);

os.setInterval(() => {
  Screen.display();
}, 0);
```

---

## Module COLORS:

```javascript 
import * as Colors from './modules/Colors.js';
```

### Example Usage

```javascript
import * as Colors from './modules/Colors.js';

Draw.rect(0,0,50,50,Colors.Blue)
```

---

## Colors:
- **Red:** ![Cor](https://via.placeholder.com/15/FF0000/000000?text=+) `Color.new(255, 0, 0)`
- **Green:** ![Cor](https://via.placeholder.com/15/00FF00/000000?text=+) `Color.new(0, 255, 0)`
- **Blue:** ![Cor](https://via.placeholder.com/15/0000FF/000000?text=+) `Color.new(0, 0, 255)`
- **White:** ![Cor](https://via.placeholder.com/15/FFFFFF/000000?text=+) `Color.new(255, 255, 255)`
- **Black:** ![Cor](https://via.placeholder.com/15/000000/FFFFFF?text=+) `Color.new(0, 0, 0)`
- **LightBlue:** ![Cor](https://via.placeholder.com/15/ADD8E6/000000?text=+) `Color.new(173, 216, 230)`
- **DarkRed:** ![Cor](https://via.placeholder.com/15/8B0000/000000?text=+) `Color.new(139, 0, 0)`
- **LightGreen:** ![Cor](https://via.placeholder.com/15/90EE90/000000?text=+) `Color.new(144, 238, 144)`
- **DarkBlue:** ![Cor](https://via.placeholder.com/15/00008B/000000?text=+) `Color.new(0, 0, 139)`
- **Purple:** ![Cor](https://via.placeholder.com/15/800080/000000?text=+) `Color.new(128, 0, 128)`
- **Yellow:** ![Cor](https://via.placeholder.com/15/FFFF00/000000?text=+) `Color.new(255, 255, 0)`
- **Orange:** ![Cor](https://via.placeholder.com/15/FFA500/000000?text=+) `Color.new(255, 165, 0)`
- **Pink:** ![Cor](https://via.placeholder.com/15/FFC0CB/000000?text=+) `Color.new(255, 192, 203)`
- **Brown:** ![Cor](https://via.placeholder.com/15/A52A2A/000000?text=+) `Color.new(165, 42, 42)`
- **Grey:** ![Cor](https://via.placeholder.com/15/808080/000000?text=+) `Color.new(128, 128, 128)`
- **LightGrey:** ![Cor](https://via.placeholder.com/15/D3D3D3/000000?text=+) `Color.new(211, 211, 211)`
- **DarkGrey:** ![Cor](https://via.placeholder.com/15/A9A9A9/000000?text=+) `Color.new(169, 169, 169)`
- **Cyan:** ![Cor](https://via.placeholder.com/15/00FFFF/000000?text=+) `Color.new(0, 255, 255)`
- **Magenta:** ![Cor](https://via.placeholder.com/15/FF00FF/000000?text=+) `Color.new(255, 0, 255)`
- **Salmon:** ![Cor](https://via.placeholder.com/15/FA8072/000000?text=+) `Color.new(250, 128, 114)`
- **Lime:** ![Cor](https://via.placeholder.com/15/00FF00/000000?text=+) `Color.new(0, 255, 0)`
- **Teal:** ![Cor](https://via.placeholder.com/15/008080/000000?text=+) `Color.new(0, 128, 128)`
- **Indigo:** ![Cor](https://via.placeholder.com/15/4B0082/000000?text=+) `Color.new(75, 0, 130)`
- **Turquoise:** ![Cor](https://via.placeholder.com/15/40E0D0/000000?text=+) `Color.new(64, 224, 208)`
- **Gold:** ![Cor](https://via.placeholder.com/15/FFD700/000000?text=+) `Color.new(255, 215, 0)`
- **LightPink:** ![Cor](https://via.placeholder.com/15/FFB6C1/000000?text=+) `Color.new(255, 182, 193)`
- **DarkOrange:** ![Cor](https://via.placeholder.com/15/FF8C00/000000?text=+) `Color.new(255, 140, 0)`
- **Olive:** ![Cor](https://via.placeholder.com/15/808000/000000?text=+) `Color.new(128, 128, 0)`
- **SlateGrey:** ![Cor](https://via.placeholder.com/15/708090/000000?text=+) `Color.new(112, 128, 144)`
- **Lavender:** ![Cor](https://via.placeholder.com/15/E6E6FA/000000?text=+) `Color.new(230, 230, 250)`
- **DarkSlateBlue:** ![Cor](https://via.placeholder.com/15/483D8B/000000?text=+) `Color.new(72, 61, 139)`
- **MediumSeaGreen:** ![Cor](https://via.placeholder.com/15/3CB371/000000?text=+) `Color.new(60, 179, 113)`
- **FireBrick:** ![Cor](https://via.placeholder.com/15/B22222/000000?text=+) `Color.new(178, 34, 34)`
- **MediumPurple:** ![Cor](https://via.placeholder.com/15/9370DB/000000?text=+) `Color.new(147, 112, 219)`
- **DarkCyan:** ![Cor](https://via.placeholder.com/15/008B8B/000000?text=+) `Color.new(0, 139, 139)`
- **RosyBrown:** ![Cor](https://via.placeholder.com/15/BC8F8F/000000?text=+) `Color.new(188, 143, 143)`
- **PaleGoldenrod:** ![Cor](https://via.placeholder.com/15/EEE8AA/000000?text=+) `Color.new(238, 232, 170)`
- **MediumSpringGreen:** ![Cor](https://via.placeholder.com/15/00FA9A/000000?text=+) `Color.new(0, 250, 154)`
- **Tomato:** ![Cor](https://via.placeholder.com/15/FF6347/000000?text=+) `Color.new(255, 99, 71)`
- **DarkGoldenrod:** ![Cor](https://via.placeholder.com/15/B8860B/000000?text=+) `Color.new(184, 134, 11)`
- **MidnightBlue:** ![Cor](https://via.placeholder.com/15/191970/000000?text=+) `Color.new(25, 25, 112)`
- **SlateBlue:** ![Cor](https://via.placeholder.com/15/6A5ACD/000000?text=+) `Color.new(106, 90, 205)`
- **DarkOliveGreen:** ![Cor](https://via.placeholder.com/15/556B2F/000000?text=+) `Color.new(85, 107, 47)`
- **Orchid:** ![Cor](https://via.placeholder.com/15/DA70D6/000000?text=+) `Color.new(218, 112, 214)`
- **SeaGreen:** ![Cor](https://via.placeholder.com/15/2E8B57/000000?text=+) `Color.new(46, 139, 87)`
- **Chocolate:** ![Cor](https://via.placeholder.com/15/D2691E/000000?text=+) `Color.new(210, 105, 30)`
- **Sienna:** ![Cor](https://via.placeholder.com/15/A0522D/000000?text=+) `Color.new(160, 82, 45)`
- **Peru:** ![Cor](https://via.placeholder.com/15/CD853F/000000?text=+) `Color.new(205, 133, 63)`
- **IndianRed:** ![Cor](https://via.placeholder.com/15/CD5C5C/000000?text=+) `Color.new(205, 92, 92)`
- **DarkViolet:** ![Cor](https://via.placeholder.com/15/9400D3/000000?text=+) `Color.new(148, 0, 211)`
- **SteelBlue:** ![Cor](https://via.placeholder.com/15/4682B4/000000?text=+) `Color.new(70, 130, 180)`
- **MediumVioletRed:** ![Cor](https://via.placeholder.com/15/C71585/000000?text=+) `Color.new(199, 21, 133)`
- **DeepPink:** ![Cor](https://via.placeholder.com/15/FF1493/000000?text=+) `Color.new(255, 20, 147)`
- **MediumAquamarine:** ![Cor](https://via.placeholder.com/15/66CDAA/000000?text=+) `Color.new(102, 205, 170)`
- **PaleVioletRed:** ![Cor](https://via.placeholder.com/15/DB7093/000000?text=+) `Color.new(219, 112, 147)`
- **DarkSlateGray:** ![Cor](https://via.placeholder.com/15/2F4F4F/000000?text=+) `Color.new(47, 79, 79)`
- **LightSlateGray:** ![Cor](https://via.placeholder.com/15/778899/000000?text=+) `Color.new(119, 136, 153)`
- **DarkSeaGreen:** ![Cor](https://via.placeholder.com/15/8FBC8F/000000?text=+) `Color.new(143, 188, 143)`
- **LightSeaGreen:** ![Cor](https://via.placeholder.com/15/20B2AA/000000?text=+) `Color.new(32, 178, 170)`
- **MediumOrchid:** ![Cor](https://via.placeholder.com/15/BA55D3/000000?text=+) `Color.new(186, 85, 211)`
- **Thistle:** ![Cor](https://via.placeholder.com/15/D8BFD8/000000?text=+) `Color.new(216, 191, 216)`
- **LightCoral:** ![Cor](https://via.placeholder.com/15/F08080/000000?text=+) `Color.new(240, 128, 128)`
- **DarkKhaki:** ![Cor](https://via.placeholder.com/15/BDB76B/000000?text=+) `Color.new(189, 183, 107)`
- **PaleTurquoise:** ![Cor](https://via.placeholder.com/15/AFEEEE/000000?text=+) `Color.new(175, 238, 238)`
- **MediumTurquoise:** ![Cor](https://via.placeholder.com/15/48D1CC/000000?text=+) `Color.new(72, 209, 204)`
- **DarkTurquoise:** ![Cor](https://via.placeholder.com/15/00CED1/000000?text=+) `Color.new(0, 206, 209)`
- **LightGoldenrodYellow:** ![Cor](https://via.placeholder.com/15/FAFAD2/000000?text=+) `Color.new(250, 250, 210)`
- **CornflowerBlue:** ![Cor](https://via.placeholder.com/15/6495ED/000000?text=+) `Color.new(100, 149, 237)`
- **MediumBlue:** ![Cor](https://via.placeholder.com/15/0000CD/000000?text=+) `Color.new(0, 0, 205)`
- **RosyRed:** ![Cor](https://via.placeholder.com/15/CC3333/000000?text=+) `Color.new(204, 51, 51)`
- **LavenderBlush:** ![Cor](https://via.placeholder.com/15/FFF0F5/000000?text=+) `Color.new(255, 240, 245)`
- **PaleGreen:** ![Cor](https://via.placeholder.com/15/98FB98/000000?text=+) `Color.new(152, 251, 152)`
- **CadetBlue:** ![Cor](https://via.placeholder.com/15/5F9EA0/000000?text=+) `Color.new(95, 158, 160)`
- **LightSteelBlue:** ![Cor](https://via.placeholder.com/15/B0C4DE/000000?text=+) `Color.new(176, 196, 222)`
- **DarkOrchid:** ![Cor](https://via.placeholder.com/15/9932CC/000000?text=+) `Color.new(153, 50, 204)`
- **PowderBlue:** ![Cor](https://via.placeholder.com/15/B0E0E6/000000?text=+) `Color.new(176, 224, 230)`