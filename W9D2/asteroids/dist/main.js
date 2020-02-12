/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nconst CONSTANTS = {\n    COLOR: \"white\",\n    RADIUS: 2,\n    LENGTH: 20,\n    GROWTH: 10\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid (position, game){\n    let temp = {\n        pos: position,\n        vel: Util.randomVec(CONSTANTS.LENGTH),\n        radius: CONSTANTS.RADIUS + (Math.random()*CONSTANTS.GROWTH),\n        color: CONSTANTS.COLOR,\n        game: game\n    }\n\n    MovingObject.call(this, temp);\n}\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nUtil.inherits(Bullet, MovingObject);\n\nCONSTANTS = {\n    SPEED: 4,\n    SIZE: 1,\n    COLOR: \"red\",\n}\n\nfunction Bullet (ship) {\n    let x = 1;\n    if (ship.vel[0] < 0){\n        x = -1;\n    }\n\n    let y = 1;\n    if (ship.vel[1] < 0) {\n        y = -1;\n    }\n\n    let temp = {\n        pos: ship.pos,\n        // vel: [ship.vel[0] + (x * CONSTANTS.SPEED), ship.vel[1] + (y * CONSTANTS.SPEED)],\n        vel: [ship.vel[0] + (x * CONSTANTS.SPEED), ship.vel[1]],\n        radius: CONSTANTS.SIZE,\n        color: CONSTANTS.COLOR,\n        game: ship.game\n    }\n\n    MovingObject.call(this, temp);\n}\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\")\n\nconst CONSTANTS = {\n    DIM_X: 1080,\n    DIM_Y: 720,\n    NUM_ASS: 400,\n    BACKGROUND_COLOR: \"black\"\n}\n\nfunction Game() {\n    this.asses = [];\n    for (let index = 0; index < CONSTANTS.NUM_ASS; index++) {\n        this.addAsteroids();\n    }\n    this.ship = new Ship([(CONSTANTS.DIM_X / 2), (CONSTANTS.DIM_Y / 2)], this);\n    // this.asses.push(ship);\n    this.bullets = [];\n}\n\nGame.prototype.allObjects = function() {\n    return this.asses.concat([this.ship]).concat(this.bullets);\n}\n\nGame.prototype.addAsteroids = function () {\n    if (this.asses.length < CONSTANTS.NUM_ASS){\n        this.asses.push(new Asteroid(this.randomPosition(), this));\n    }\n}\n\nGame.prototype.randomPosition = function () {\n    let x = Math.random() * (CONSTANTS.DIM_X);\n    let y = Math.random() * (CONSTANTS.DIM_Y);\n    return [x,y];\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.fillStyle = CONSTANTS.BACKGROUND_COLOR;\n    ctx.fillRect(0,0,CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    // for(let i = 0; i < this.asses.length; i++) {\n    //     this.asses[i].draw(ctx);\n    // }\n    this.allObjects().forEach(ass => {\n        ass.draw(ctx);\n    });\n}\n\nGame.prototype.moveObjects = function() {\n    let all = this.allObjects();\n    all.forEach(ast => {\n        ast.move();\n\n        if (this instanceof Bullet){\n\n        } else {\n            ast.pos = this.wrap(ast.pos);\n        }\n    });\n}\n\nGame.prototype.wrap = function(pos) {\n    let wrappedPos = [0, 0];\n\n    if (pos[0] < 0) {\n        wrappedPos[0] = CONSTANTS.DIM_X;\n    } else if (pos[0] > CONSTANTS.DIM_X) {\n        wrappedPos[0] = 0;\n    } else {\n        wrappedPos[0] = pos[0];\n    }\n\n    if (pos[1] < 0) {\n        wrappedPos[1] = CONSTANTS.DIM_Y;\n    } else if (pos[1] > CONSTANTS.DIM_Y) {\n        wrappedPos[1] = 0;\n    } else {\n        wrappedPos[1] = pos[1];\n    }\n\n    return wrappedPos;\n}\n\nGame.prototype.checkCollisions = function() {\n    let temp = this.allObjects();\n    for (let i = 0; i < temp.length; i++) {\n        let ast1 = temp[i];\n        for (let j = 0; j < temp.length; j++) {\n            let ast2 = temp[j];\n            if (i !== j && ast1.isCollidedWith(ast2)) {\n                // if (ast1 instanceof Ship || ast2 instanceof Ship) alert (\"Game Over\");\n                ast1.collidedWith(ast2);\n            }\n        }\n    }\n}\n\nGame.prototype.step = function() {\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(ast) {\n    if (ast) {\n        for (let i = 0; i < this.asses.length; i++) {\n            if (ast === this.asses[i]) {\n                this.asses = this.asses.slice(0, i).concat(this.asses.slice(i+1));\n                return true;\n            }\n        }\n    }\n}\n\nGame.prototype.fireBullet = function() {\n    this.bullets.push(this.ship.fireBullet());\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst key = __webpack_require__(/*! ./keymaster.js */ \"./src/keymaster.js\");\n\nfunction GameView(ctx) {\n    this.game = new Game();\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n    this.bindKeyHandlers();\n    let that = this;\n\n    setInterval(function() {\n        that.game.step();\n        that.game.draw(that.ctx);\n    }, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function() {\n    let that = this;\n    key(\"w\", function(){\n        that.game.ship.power([0,-1]);\n    });\n    key(\"a\", function(){\n        that.game.ship.power([-1,0]);\n    });\n    key(\"s\", function(){\n        that.game.ship.power([0,1]);\n    });\n    key(\"d\", function(){\n        that.game.ship.power([1,0]);\n    });\n    key(\"d\", \"s\", function(){\n        that.game.ship.power([1,1]);\n    });\n\n\n\n    key(\"up\", function(){\n        that.game.ship.power([0,-1]);\n    });\n    key(\"left\", function(){\n        that.game.ship.power([-1,0]);\n    });\n    key(\"down\", function(){\n        that.game.ship.power([0,1]);\n    });\n    key(\"right\", function(){\n        that.game.ship.power([1,0]);\n    });\n\n    key(\"space\", function(){\n        that.game.fireBullet();\n    });\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingObject = require(\"./moving_object.js\");\n// const Asteroid = require(\"./asteroid.js\");\n// const Game = require(\"./game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n// window.MovingObject = MovingObject;\n// window.Asteroid = Asteroid;\nwindow.GameView = GameView;\n\nconst canvas = document.getElementById(\"game-canvas\");\n\nconst ctx = canvas.getContext(\"2d\");\nlet gV = new GameView(ctx);\n\n\ngV.start();\n\n// canvas.addEventListener(\"w\", gV.power(\"w\").bind(gV))\n// const mo = new MovingObject({\n    //     pos: [30, 30],\n    //     vel: [10, 10],\n    //     radius: 5,\n    //     color: \"#00FF00\"\n    // });\n    \n    // mo.draw(ctx);\n\n\n\n// let a1 = new Asteroid([100,100]);\n// a1.draw(ctx);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/keymaster.js":
/*!**************************!*\
  !*** ./src/keymaster.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//     keymaster.js\n//     (c) 2011-2013 Thomas Fuchs\n//     keymaster.js may be freely distributed under the MIT license.\n\n; (function (global) {\n    var k,\n        _handlers = {},\n        _mods = { 16: false, 18: false, 17: false, 91: false },\n        _scope = 'all',\n        // modifier keys\n        _MODIFIERS = {\n            '⇧': 16, shift: 16,\n            '⌥': 18, alt: 18, option: 18,\n            '⌃': 17, ctrl: 17, control: 17,\n            '⌘': 91, command: 91\n        },\n        // special keys\n        _MAP = {\n            backspace: 8, tab: 9, clear: 12,\n            enter: 13, 'return': 13,\n            esc: 27, escape: 27, space: 32,\n            left: 37, up: 38,\n            right: 39, down: 40,\n            del: 46, 'delete': 46,\n            home: 36, end: 35,\n            pageup: 33, pagedown: 34,\n            ',': 188, '.': 190, '/': 191,\n            '`': 192, '-': 189, '=': 187,\n            ';': 186, '\\'': 222,\n            '[': 219, ']': 221, '\\\\': 220\n        },\n        code = function (x) {\n            return _MAP[x] || x.toUpperCase().charCodeAt(0);\n        },\n        _downKeys = [];\n\n    for (k = 1; k < 20; k++) _MAP['f' + k] = 111 + k;\n\n    // IE doesn't support Array#indexOf, so have a simple replacement\n    function index(array, item) {\n        var i = array.length;\n        while (i--) if (array[i] === item) return i;\n        return -1;\n    }\n\n    // for comparing mods before unassignment\n    function compareArray(a1, a2) {\n        if (a1.length != a2.length) return false;\n        for (var i = 0; i < a1.length; i++) {\n            if (a1[i] !== a2[i]) return false;\n        }\n        return true;\n    }\n\n    var modifierMap = {\n        16: 'shiftKey',\n        18: 'altKey',\n        17: 'ctrlKey',\n        91: 'metaKey'\n    };\n    function updateModifierKey(event) {\n        for (k in _mods) _mods[k] = event[modifierMap[k]];\n    };\n\n    // handle keydown event\n    function dispatch(event) {\n        var key, handler, k, i, modifiersMatch, scope;\n        key = event.keyCode;\n\n        if (index(_downKeys, key) == -1) {\n            _downKeys.push(key);\n        }\n\n        // if a modifier key, set the key.<modifierkeyname> property to true and return\n        if (key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko\n        if (key in _mods) {\n            _mods[key] = true;\n            // 'assignKey' from inside this closure is exported to window.key\n            for (k in _MODIFIERS) if (_MODIFIERS[k] == key) assignKey[k] = true;\n            return;\n        }\n        updateModifierKey(event);\n\n        // see if we need to ignore the keypress (filter() can can be overridden)\n        // by default ignore key presses if a select, textarea, or input is focused\n        if (!assignKey.filter.call(this, event)) return;\n\n        // abort if no potentially matching shortcuts found\n        if (!(key in _handlers)) return;\n\n        scope = getScope();\n\n        // for each potential shortcut\n        for (i = 0; i < _handlers[key].length; i++) {\n            handler = _handlers[key][i];\n\n            // see if it's in the current scope\n            if (handler.scope == scope || handler.scope == 'all') {\n                // check if modifiers match if any\n                modifiersMatch = handler.mods.length > 0;\n                for (k in _mods)\n                    if ((!_mods[k] && index(handler.mods, +k) > -1) ||\n                        (_mods[k] && index(handler.mods, +k) == -1)) modifiersMatch = false;\n                // call the handler and stop the event if neccessary\n                if ((handler.mods.length == 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91]) || modifiersMatch) {\n                    if (handler.method(event, handler) === false) {\n                        if (event.preventDefault) event.preventDefault();\n                        else event.returnValue = false;\n                        if (event.stopPropagation) event.stopPropagation();\n                        if (event.cancelBubble) event.cancelBubble = true;\n                    }\n                }\n            }\n        }\n    };\n\n    // unset modifier keys on keyup\n    function clearModifier(event) {\n        var key = event.keyCode, k,\n            i = index(_downKeys, key);\n\n        // remove key from _downKeys\n        if (i >= 0) {\n            _downKeys.splice(i, 1);\n        }\n\n        if (key == 93 || key == 224) key = 91;\n        if (key in _mods) {\n            _mods[key] = false;\n            for (k in _MODIFIERS) if (_MODIFIERS[k] == key) assignKey[k] = false;\n        }\n    };\n\n    function resetModifiers() {\n        for (k in _mods) _mods[k] = false;\n        for (k in _MODIFIERS) assignKey[k] = false;\n    };\n\n    // parse and assign shortcut\n    function assignKey(key, scope, method) {\n        var keys, mods;\n        keys = getKeys(key);\n        if (method === undefined) {\n            method = scope;\n            scope = 'all';\n        }\n\n        // for each shortcut\n        for (var i = 0; i < keys.length; i++) {\n            // set modifier keys if any\n            mods = [];\n            key = keys[i].split('+');\n            if (key.length > 1) {\n                mods = getMods(key);\n                key = [key[key.length - 1]];\n            }\n            // convert to keycode and...\n            key = key[0]\n            key = code(key);\n            // ...store handler\n            if (!(key in _handlers)) _handlers[key] = [];\n            _handlers[key].push({ shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods });\n        }\n    };\n\n    // unbind all handlers for given key in current scope\n    function unbindKey(key, scope) {\n        var multipleKeys, keys,\n            mods = [],\n            i, j, obj;\n\n        multipleKeys = getKeys(key);\n\n        for (j = 0; j < multipleKeys.length; j++) {\n            keys = multipleKeys[j].split('+');\n\n            if (keys.length > 1) {\n                mods = getMods(keys);\n            }\n\n            key = keys[keys.length - 1];\n            key = code(key);\n\n            if (scope === undefined) {\n                scope = getScope();\n            }\n            if (!_handlers[key]) {\n                return;\n            }\n            for (i = 0; i < _handlers[key].length; i++) {\n                obj = _handlers[key][i];\n                // only clear handlers if correct scope and mods match\n                if (obj.scope === scope && compareArray(obj.mods, mods)) {\n                    _handlers[key][i] = {};\n                }\n            }\n        }\n    };\n\n    // Returns true if the key with code 'keyCode' is currently down\n    // Converts strings into key codes.\n    function isPressed(keyCode) {\n        if (typeof (keyCode) == 'string') {\n            keyCode = code(keyCode);\n        }\n        return index(_downKeys, keyCode) != -1;\n    }\n\n    function getPressedKeyCodes() {\n        return _downKeys.slice(0);\n    }\n\n    function filter(event) {\n        var tagName = (event.target || event.srcElement).tagName;\n        // ignore keypressed in any elements that support keyboard data input\n        return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');\n    }\n\n    // initialize key.<modifier> to false\n    for (k in _MODIFIERS) assignKey[k] = false;\n\n    // set current scope (default 'all')\n    function setScope(scope) { _scope = scope || 'all' };\n    function getScope() { return _scope || 'all' };\n\n    // delete all handlers for a given scope\n    function deleteScope(scope) {\n        var key, handlers, i;\n\n        for (key in _handlers) {\n            handlers = _handlers[key];\n            for (i = 0; i < handlers.length;) {\n                if (handlers[i].scope === scope) handlers.splice(i, 1);\n                else i++;\n            }\n        }\n    };\n\n    // abstract key logic for assign and unassign\n    function getKeys(key) {\n        var keys;\n        key = key.replace(/\\s/g, '');\n        keys = key.split(',');\n        if ((keys[keys.length - 1]) == '') {\n            keys[keys.length - 2] += ',';\n        }\n        return keys;\n    }\n\n    // abstract mods logic for assign and unassign\n    function getMods(key) {\n        var mods = key.slice(0, key.length - 1);\n        for (var mi = 0; mi < mods.length; mi++)\n            mods[mi] = _MODIFIERS[mods[mi]];\n        return mods;\n    }\n\n    // cross-browser events\n    function addEvent(object, event, method) {\n        if (object.addEventListener)\n            object.addEventListener(event, method, false);\n        else if (object.attachEvent)\n            object.attachEvent('on' + event, function () { method(window.event) });\n    };\n\n    // set the handlers globally on document\n    addEvent(document, 'keydown', function (event) { dispatch(event) }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48\n    addEvent(document, 'keyup', clearModifier);\n\n    // reset modifiers to false whenever the window is (re)focused.\n    addEvent(window, 'focus', resetModifiers);\n\n    // store previously defined key\n    var previousKey = global.key;\n\n    // restore previously defined key and return reference to our key object\n    function noConflict() {\n        var k = global.key;\n        global.key = previousKey;\n        return k;\n    }\n\n    // set window.key and window.key.set/get/deleteScope, and the default filter\n    global.key = assignKey;\n    global.key.setScope = setScope;\n    global.key.getScope = getScope;\n    global.key.deleteScope = deleteScope;\n    global.key.filter = filter;\n    global.key.isPressed = isPressed;\n    global.key.getPressedKeyCodes = getPressedKeyCodes;\n    global.key.noConflict = noConflict;\n    global.key.unbind = unbindKey;\n\n    if (true) module.exports = assignKey;\n\n})(this);\n\n//# sourceURL=webpack:///./src/keymaster.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Bullet = require('./bullet.js');\n\nfunction MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);\n    // ctx.fillStyle = this.color;\n    ctx.fillStyle = \"black\";\n    ctx.fill();\n    ctx.strokeStyle = this.color;\n    ctx.stroke();\n    // ctx.drawImage(document.getElementById('death-star'), 10, 10);\n}\n\nMovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    // if(!(this instanceof Bullet)) this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n    let a = this.pos[0] - otherObject.pos[0];\n    let b = this.pos[1] - otherObject.pos[1];\n\n    let c = Math.sqrt(a*a + b*b);\n\n    return c <= (this.radius + otherObject.radius);\n}\n\nMovingObject.prototype.collidedWith = function(otherObject) {\n    this.game.remove(otherObject);\n    this.game.remove(this);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nconst CONSTANTS = {\n    LENGTH: 5,\n    COLOR: \"green\"\n}\n\nUtil.inherits(Ship, MovingObject);\n\nfunction Ship(pos, game) {\n    let temp = {\n        pos: pos,\n        vel: [0,0],\n        radius: CONSTANTS.LENGTH,\n        color: CONSTANTS.COLOR,\n        game: game\n    }\n    MovingObject.call(this, temp);\n}\n\nShip.prototype.power = function(impulse) {\n    this.vel[0] += impulse[0];\n    this.vel[1] += impulse[1];\n}\n\nShip.prototype.fireBullet = function () {\n    return new Bullet(this);\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    // Inheritance Function\n    inherits(child, parent) {\n        function Surrogate() {};\n        Surrogate.prototype = parent.prototype;\n        child.prototype = new Surrogate();\n        child.prototype.constructor = child;\n    },\n    // Random Vector with Length\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });