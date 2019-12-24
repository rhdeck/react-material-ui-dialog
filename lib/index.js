'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var reactMaterialUiKeyboardBadge = require('react-material-ui-keyboard-badge');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var es6Promise = createCommonjsModule(function (module) {
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.3.0
 */

(function() {
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$vertxNext;
    var lib$es6$promise$asap$$customSchedulerFn;

    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        if (lib$es6$promise$asap$$customSchedulerFn) {
          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
        } else {
          lib$es6$promise$asap$$scheduleFlush();
        }
      }
    };

    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
    }

    function lib$es6$promise$asap$$setAsap(asapFn) {
      lib$es6$promise$asap$$asap = asapFn;
    }

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      var nextTick = process.nextTick;
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // setImmediate should be used instead instead
      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
        nextTick = setImmediate;
      }
      return function() {
        nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertex() {
      try {
        var r = commonjsRequire;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof commonjsRequire === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFullfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$asap(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) ; else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      var enumerator = this;

      enumerator._instanceConstructor = Constructor;
      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (enumerator._validateInput(input)) {
        enumerator._input     = input;
        enumerator.length     = input.length;
        enumerator._remaining = input.length;

        enumerator._init();

        if (enumerator.length === 0) {
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
        } else {
          enumerator.length = enumerator.length || 0;
          enumerator._enumerate();
          if (enumerator._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
      }
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return lib$es6$promise$utils$$isArray(input);
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var enumerator = this;

      var length  = enumerator.length;
      var promise = enumerator.promise;
      var input   = enumerator._input;

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        enumerator._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var enumerator = this;
      var c = enumerator._instanceConstructor;

      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
          entry._onerror = null;
          enumerator._settledAt(entry._state, i, entry._result);
        } else {
          enumerator._willSettleAt(c.resolve(entry), i);
        }
      } else {
        enumerator._remaining--;
        enumerator._result[i] = entry;
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var enumerator = this;
      var promise = enumerator.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        enumerator._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          enumerator._result[i] = value;
        }
      }

      if (enumerator._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!lib$es6$promise$utils$$isArray(entries)) {
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

    var lib$es6$promise$promise$$counter = 0;

    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this._id = lib$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        if (!lib$es6$promise$utils$$isFunction(resolver)) {
          lib$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
          lib$es6$promise$promise$$needsNew();
        }

        lib$es6$promise$$internal$$initializePromise(this, resolver);
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor(lib$es6$promise$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          lib$es6$promise$asap$$asap(function(){
            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof commonjsGlobal !== 'undefined') {
          local = commonjsGlobal;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if ( module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(commonjsGlobal);
});

var Promise = commonjsGlobal.Promise || es6Promise.Promise;

var Deferred = function() {
  this.promise = new Promise((function(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
  }).bind(this));
  
  this.then = this.promise.then.bind(this.promise);
  this.catch = this.promise.catch.bind(this.promise);
};

var deferred = Deferred;

var context = React.createContext();
var Provider = context.Provider;

var DialogProvider = function DialogProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isDialog = _useState2[0],
      setIsDialog = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1];

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      pre = _useState6[0],
      setPre = _useState6[1];

  var _useState7 = React.useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      post = _useState8[0],
      setPost = _useState8[1];

  var _useState9 = React.useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      title = _useState10[0],
      setTitle = _useState10[1];

  var _useState11 = React.useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      actions = _useState12[0],
      setActions = _useState12[1];

  var _useState13 = React.useState([]),
      _useState14 = _slicedToArray(_useState13, 2),
      dialogActions = _useState14[0],
      setDialogActions = _useState14[1];

  var _useState15 = React.useState("cancel"),
      _useState16 = _slicedToArray(_useState15, 2),
      cancelText = _useState16[0],
      setCancelText = _useState16[1];

  var _useState17 = React.useState(),
      _useState18 = _slicedToArray(_useState17, 2),
      dismissKey = _useState18[0],
      setDismissKey = _useState18[1];

  var _useState19 = React.useState({}),
      _useState20 = _slicedToArray(_useState19, 2),
      contentStyle = _useState20[0],
      setContentStyle = _useState20[1];

  var _useState21 = React.useState({
    maxHeight: 300
  }),
      _useState22 = _slicedToArray(_useState21, 2),
      scrollViewStyle = _useState22[0],
      setScrollViewStyle = _useState22[1];

  var clearDismiss = React.useCallback(function () {
    return setDismissKey(null);
  }, []);
  var dismissDialog = React.useCallback(function (key) {
    setDismissKey(key);
    setIsDialog(false);
  }, []);

  var _useState23 = React.useState(true),
      _useState24 = _slicedToArray(_useState23, 2),
      isDismissable = _useState24[0],
      setIsDismissable = _useState24[1];

  var _useKeyboardScopes = reactMaterialUiKeyboardBadge.useKeyboardScopes(),
      enableOthers = _useKeyboardScopes.enableOthers,
      disableOthers = _useKeyboardScopes.disableOthers,
      enable = _useKeyboardScopes.enable,
      disable = _useKeyboardScopes.disable;

  var _useState25 = React.useState(false),
      _useState26 = _slicedToArray(_useState25, 2),
      disabledSimple = _useState26[0],
      setDisabledSimple = _useState26[1];

  React.useEffect(function () {
    if (isDialog && !disabledSimple) {
      disableOthers("dialog");
      enable("dialog");
      setDisabledSimple(true);
    } else if (!isDialog && disabledSimple) {
      enableOthers("dialog");
      disable("dialog");
      setDisabledSimple(false);
    }

    return function () {
      if (disabledSimple) {
        enableOthers("dialog");
        disable("dialog");
      }
    };
  }, [disabledSimple, isDialog]);

  var _useState27 = React.useState({
    cancelText: cancelText,
    dismissKey: dismissKey,
    clearDismiss: clearDismiss,
    isDialog: isDialog,
    setMessage: setMessage,
    setTitle: setTitle,
    setActions: setActions,
    setCancelText: setCancelText,
    setIsDialog: setIsDialog,
    setPre: setPre,
    setPost: setPost,
    setContentStyle: setContentStyle,
    setScrollViewStyle: setScrollViewStyle,
    setIsDismissable: setIsDismissable,
    isDismissable: isDismissable,
    setDismissKey: setDismissKey,
    setDialogActions: setDialogActions
  }),
      _useState28 = _slicedToArray(_useState27, 2),
      value = _useState28[0],
      setValue = _useState28[1];

  React.useEffect(function () {
    setValue({
      cancelText: cancelText,
      dismissKey: dismissKey,
      clearDismiss: clearDismiss,
      isDialog: isDialog,
      setMessage: setMessage,
      setTitle: setTitle,
      setActions: setActions,
      setCancelText: setCancelText,
      setIsDialog: setIsDialog,
      setPre: setPre,
      setPost: setPost,
      setContentStyle: setContentStyle,
      setScrollViewStyle: setScrollViewStyle,
      setIsDismissable: setIsDismissable,
      isDismissable: isDismissable,
      setDismissKey: setDismissKey,
      setDialogActions: setDialogActions
    });
  }, [cancelText, dismissKey, clearDismiss, isDialog, setMessage, setTitle, setActions, setCancelText, setIsDialog, setPre, setPost, setContentStyle, setScrollViewStyle, setIsDismissable, isDismissable, setDismissKey, setDialogActions]);
  var Message = message;
  return [React__default.createElement(core.Dialog, {
    key: "dialog",
    open: !!isDialog,
    onClose: function onClose() {
      if (!isDismissable) return;
      setIsDialog(false);
      setDismissKey("_reject");
    }
  }, title && React__default.createElement(core.DialogTitle, null, title), React__default.createElement(core.DialogContent, {
    style: contentStyle
  }, pre, !message ? null : typeof message === "String" ? React__default.createElement(DialogContentText, null, message) : typeof message === "function" ? React__default.createElement(Message, {
    dismissDialog: dismissDialog
  }) : message, post, actions && actions.map(function (_ref2, index) {
    var key = _ref2.key,
        icon = _ref2.icon,
        title = _ref2.title,
        hidden = _ref2.hidden,
        keyMap = _ref2.keyMap,
        windowsKeyMap = _ref2.windowsKeyMap,
        macKeyMap = _ref2.macKeyMap,
        description = _ref2.description;

    if (!keyMap && !windowsKeyMap && !macKeyMap) {
      keyMap = (index + 1).toString();
    }

    var action = function action() {
      return dismissDialog(key);
    };

    return React__default.createElement(core.ListItem, {
      button: true,
      onClick: action,
      key: "dialog-item-".concat(index)
    }, React__default.createElement(reactMaterialUiKeyboardBadge.KeyboardBadge, {
      key: keyMap ? keyMap : index,
      keyMap: keyMap,
      windowsKeyMap: windowsKeyMap,
      macKeyMap: macKeyMap,
      scope: "dialog",
      action: action,
      enabled: !hidden
    }, icon && React__default.createElement(core.ListItemAvatar, null, React__default.createElement(Avatar, null, icon)), React__default.createElement(core.ListItemText, {
      primary: title,
      secondary: description
    })));
  })), dialogActions.length && React__default.createElement(core.DialogActions, null, dialogActions.map(function (action) {}))), React__default.createElement(Provider, {
    key: "provider",
    value: value
  }, children)];
};

var withDialog = function withDialog(C) {
  return function (props) {
    return React__default.createElement(DialogProvider, null, React__default.createElement(C, props));
  };
};

var useAbortDialog = function useAbortDialog() {
  var _useContext = React.useContext(context),
      setIsDialog = _useContext.setIsDialog,
      setDismissKey = _useContext.setDismissKey,
      isDismissable = _useContext.isDismissable,
      setIsDismissable = _useContext.setIsDismissable,
      setPre = _useContext.setPre,
      setPost = _useContext.setPost,
      setMessage = _useContext.setMessage;

  var abortDialog = React.useCallback(function () {
    setIsDismissable && setIsDismissable(true);
    setIsDialog(false);
    if (isDismissable) setDismissKey("_reject");
    setPre(null);
    setMessage(null);
    setPost(null);
  }, [isDismissable, setIsDismissable, setIsDialog, setPre, setPost, setMessage]);
  return abortDialog;
};

var useShowDialog = function useShowDialog() {
  var _useContext2 = React.useContext(context),
      dismissKey = _useContext2.dismissKey,
      clearDismiss = _useContext2.clearDismiss,
      setMessage = _useContext2.setMessage,
      setTitle = _useContext2.setTitle,
      setActions = _useContext2.setActions,
      setDialogActions = _useContext2.setDialogActions,
      setCancelText = _useContext2.setCancelText,
      setIsDialog = _useContext2.setIsDialog,
      setPre = _useContext2.setPre,
      setPost = _useContext2.setPost,
      setContentStyle = _useContext2.setContentStyle,
      setScrollViewStyle = _useContext2.setScrollViewStyle,
      setIsDismissable = _useContext2.setIsDismissable;

  var showDialog = React.useCallback(function _callee(_ref3) {
    var title,
        _ref3$cancelText,
        cancelText,
        _ref3$actions,
        actions,
        _ref3$message,
        message,
        _ref3$pre,
        pre,
        _ref3$post,
        post,
        _ref3$contentStyle,
        contentStyle,
        _ref3$scrollViewStyle,
        scrollViewStyle,
        _ref3$isDismissable,
        isDismissable,
        _ref3$dialogActions,
        dialogActions,
        callback,
        deferred$1,
        outkey,
        _args = arguments;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            title = _ref3.title, _ref3$cancelText = _ref3.cancelText, cancelText = _ref3$cancelText === void 0 ? "Close" : _ref3$cancelText, _ref3$actions = _ref3.actions, actions = _ref3$actions === void 0 ? [] : _ref3$actions, _ref3$message = _ref3.message, message = _ref3$message === void 0 ? null : _ref3$message, _ref3$pre = _ref3.pre, pre = _ref3$pre === void 0 ? null : _ref3$pre, _ref3$post = _ref3.post, post = _ref3$post === void 0 ? null : _ref3$post, _ref3$contentStyle = _ref3.contentStyle, contentStyle = _ref3$contentStyle === void 0 ? {} : _ref3$contentStyle, _ref3$scrollViewStyle = _ref3.scrollViewStyle, scrollViewStyle = _ref3$scrollViewStyle === void 0 ? {
              maxHeight: 300
            } : _ref3$scrollViewStyle, _ref3$isDismissable = _ref3.isDismissable, isDismissable = _ref3$isDismissable === void 0 ? true : _ref3$isDismissable, _ref3$dialogActions = _ref3.dialogActions, dialogActions = _ref3$dialogActions === void 0 ? [] : _ref3$dialogActions;
            callback = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            _context.prev = 2;
            setTitle(title);
            setCancelText(cancelText);
            setActions(actions);
            setMessage(function () {
              return message;
            });
            setPre(function () {
              return pre;
            });
            setPost(function () {
              return post;
            });
            setContentStyle(contentStyle);
            setScrollViewStyle(scrollViewStyle);
            setIsDialog(true);
            setIsDismissable(isDismissable);
            setDialogActions(dialogActions);
            deferred$1 = new deferred();
            setPromise(deferred$1);
            _context.next = 18;
            return regeneratorRuntime.awrap(deferred$1.promise);

          case 18:
            outkey = _context.sent;
            setContentStyle({});

            if (!(typeof callback === "function")) {
              _context.next = 22;
              break;
            }

            return _context.abrupt("return", callback(outkey));

          case 22:
            return _context.abrupt("return", outkey);

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            throw "Dismissd dialog without accepted result";

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 25]]);
  }, [setTitle, setCancelText, setActions, setMessage, setPre, setPost, setContentStyle, setScrollViewStyle, setPromise, setContentStyle, setIsDismissable, setDialogActions]);

  var _useState29 = React.useState(null),
      _useState30 = _slicedToArray(_useState29, 2),
      promise = _useState30[0],
      setPromise = _useState30[1];

  React.useEffect(function () {
    if (!promise) return;

    if (dismissKey === "_reject") {
      promise.reject("dismisskey was _reject");
      clearDismiss();
      setPromise(null);
    } else if (dismissKey !== null && typeof dismissKey !== "undefined") {
      promise.resolve(dismissKey);
      clearDismiss();
      setPromise(null);
    }
  }, [dismissKey, promise]);
  return showDialog;
};

var useSpinner = function useSpinner() {
  var _useContext3 = React.useContext(context),
      setIsDismissable = _useContext3.setIsDismissable;

  var showDialog = useShowDialog();
  var stopDialog = useAbortDialog();

  var _useState31 = React.useState(false),
      _useState32 = _slicedToArray(_useState31, 2),
      isShowing = _useState32[0],
      setIsShowing = _useState32[1];

  var stop = React.useCallback(function () {
    if (!isShowing) return;
    setIsShowing(false);
    stopDialog();
  }, [isShowing]);
  var spinnerFunc = React.useCallback(function () {
    setIsShowing(true);
    var promise = showDialog({
      isDismissable: false,
      message: function message() {
        return React__default.createElement(core.Grid, {
          container: true,
          justify: "center"
        }, React__default.createElement(core.Grid, {
          item: true
        }, React__default.createElement(core.CircularProgress, null)));
      }
    });
    promise.then(function () {
      return setIsDismissable(true);
    }, function () {
      return setIsDismissable(true);
    });
    return stop;
  }, [showDialog, stop]);
  React.useEffect(function () {
    return function () {
      stop();
    };
  }, [stop]);
  return spinnerFunc;
};

var useAreYouSure = function useAreYouSure() {
  var showDialog = useShowDialog();
  return React.useCallback(function _callee2() {
    var _ref4,
        _ref4$yesText,
        yesText,
        _ref4$noText,
        noText,
        props,
        result,
        _args2 = arguments;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref4$yesText = _ref4.yesText, yesText = _ref4$yesText === void 0 ? "Yes I am sure" : _ref4$yesText, _ref4$noText = _ref4.noText, noText = _ref4$noText === void 0 ? "Never mind" : _ref4$noText, props = _objectWithoutProperties(_ref4, ["yesText", "noText"]);
            _context2.next = 3;
            return regeneratorRuntime.awrap(showDialog(_objectSpread2({
              actions: [{
                title: yesText,
                key: "yes"
              }, {
                title: noText,
                key: "no"
              }]
            }, props)));

          case 3:
            result = _context2.sent;

            if (!(result === "yes")) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", true);

          case 8:
            throw "rejected AYS";

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    });
  }, [showDialog]);
};

exports.DialogProvider = DialogProvider;
exports.default = DialogProvider;
exports.useAbortDialog = useAbortDialog;
exports.useAreYouSure = useAreYouSure;
exports.useShowDialog = useShowDialog;
exports.useSpinner = useSpinner;
exports.withDialog = withDialog;
//# sourceMappingURL=index.js.map
