# navd
Navigate through directories easily.

## Installation
`npm install navd --save`

## Usage
```js
const fs = require("fs");
const navd = require("navd");

// ../../../../../../../../file.txt
fs.readFile(navd.up(8, "file.txt"), "utf8", (err, data) => {
    // Code here
});

// ../../../../../../../../folder/file.txt
fs.readFile(navd.up(8, "folder/file.txt"), "utf8", (err, data) => {
    // Code here
});
```

## Tests
`npm test`