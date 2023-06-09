import {
  DomHandler,
  ObjectUtils
} from "./chunk-ZGU4VZCK.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/primereact/hooks/hooks.esm.js
var React = __toESM(require_react());
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var usePrevious = function usePrevious2(newValue) {
  var ref = React.useRef(void 0);
  React.useEffect(function() {
    ref.current = newValue;
  });
  return ref.current;
};
var useUnmountEffect = function useUnmountEffect2(fn) {
  return React.useEffect(function() {
    return fn;
  }, []);
};
var useEventListener = function useEventListener2(_ref) {
  var _ref$target = _ref.target, target = _ref$target === void 0 ? "document" : _ref$target, type = _ref.type, listener = _ref.listener, options = _ref.options, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  var targetRef = React.useRef(null);
  var listenerRef = React.useRef(null);
  var prevOptions = usePrevious(options);
  var bind = function bind2() {
    var bindOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ObjectUtils.isNotEmpty(bindOptions.target)) {
      unbind();
      (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindOptions.target));
    }
    if (!listenerRef.current && targetRef.current) {
      listenerRef.current = function(event) {
        return listener && listener(event);
      };
      targetRef.current.addEventListener(type, listenerRef.current, options);
    }
  };
  var unbind = function unbind2() {
    if (listenerRef.current) {
      targetRef.current.removeEventListener(type, listenerRef.current, options);
      listenerRef.current = null;
    }
  };
  React.useEffect(function() {
    if (when) {
      targetRef.current = DomHandler.getTargetElement(target);
    } else {
      unbind();
      targetRef.current = null;
    }
  }, [target, when]);
  React.useEffect(function() {
    if (listenerRef.current && (listenerRef.current !== listener || prevOptions !== options)) {
      unbind();
      when && bind();
    }
  }, [listener, options]);
  useUnmountEffect(function() {
    unbind();
  });
  return [bind, unbind];
};
var useClickOutside = function useClickOutside2(ref, callback) {
  var isOutsideClicked = function isOutsideClicked2(event) {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    callback(event);
  };
  var _useEventListener = useEventListener({
    type: "mousedown",
    listener: isOutsideClicked
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindMouseDownListener = _useEventListener2[0], unbindMouseDownListener = _useEventListener2[1];
  var _useEventListener3 = useEventListener({
    type: "touchstart",
    listener: isOutsideClicked
  }), _useEventListener4 = _slicedToArray(_useEventListener3, 2), bindTouchStartListener = _useEventListener4[0], unbindTouchStartListener = _useEventListener4[1];
  React.useEffect(function() {
    if (!ref.current) {
      return;
    }
    bindMouseDownListener();
    bindTouchStartListener();
    return function() {
      unbindMouseDownListener();
      unbindTouchStartListener();
    };
  });
  return [ref, callback];
};
var useCounter = function useCounter2() {
  var initialValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    step: 1
  };
  var _React$useState = React.useState(initialValue), _React$useState2 = _slicedToArray(_React$useState, 2), count = _React$useState2[0], setCount = _React$useState2[1];
  var increment = function increment2() {
    if (options.max && count >= options.max) {
      return;
    }
    setCount(count + options.step);
  };
  var decrement = function decrement2() {
    if (options.min || options.min === 0 && count <= options.min) {
      return null;
    }
    setCount(count - options.step);
  };
  var reset = function reset2() {
    setCount(0);
  };
  return {
    count,
    increment,
    decrement,
    reset
  };
};
var useTimeout = function useTimeout2(fn) {
  var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var when = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var timeout = React.useRef(null);
  var savedCallback = React.useRef(null);
  var clear = React.useCallback(function() {
    return clearTimeout(timeout.current);
  }, [timeout.current]);
  React.useEffect(function() {
    savedCallback.current = fn;
  });
  React.useEffect(function() {
    function callback() {
      savedCallback.current();
    }
    if (when) {
      timeout.current = setTimeout(callback, delay);
      return clear;
    } else {
      clear();
    }
  }, [delay, when]);
  useUnmountEffect(function() {
    clear();
  });
  return [clear];
};
var useDebounce = function useDebounce2(initialValue, delay) {
  var _React$useState = React.useState(initialValue), _React$useState2 = _slicedToArray(_React$useState, 2), inputValue = _React$useState2[0], setInputValue = _React$useState2[1];
  var _React$useState3 = React.useState(initialValue), _React$useState4 = _slicedToArray(_React$useState3, 2), debouncedValue = _React$useState4[0], setDebouncedValue = _React$useState4[1];
  useTimeout(function() {
    setDebouncedValue(inputValue);
  }, delay, inputValue !== debouncedValue);
  return [inputValue, debouncedValue, setInputValue];
};
var TYPE_MAP = {
  ico: "image/x-icon",
  png: "image/png",
  svg: "image/svg+xml",
  gif: "image/gif"
};
var useFavicon = function useFavicon2() {
  var newIcon = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var rel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "shortcut icon";
  React.useLayoutEffect(function() {
    if (newIcon) {
      var linkElements = document.querySelectorAll("link[rel*='icon']");
      linkElements.forEach(function(linkEl) {
        document.head.removeChild(linkEl);
      });
      var link = document.createElement("link");
      link.setAttribute("type", TYPE_MAP[newIcon.split(".").pop()]);
      link.setAttribute("rel", rel);
      link.setAttribute("href", newIcon);
      document.head.appendChild(link);
    }
  }, [newIcon, rel]);
};
var useIntersectionObserver = function useIntersectionObserver2(ref) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), isElementVisible = _React$useState2[0], setIsElementVisible = _React$useState2[1];
  React.useEffect(function() {
    if (!ref.current)
      return;
    var observer = new IntersectionObserver(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 1), entry = _ref2[0];
      setIsElementVisible(entry.isIntersecting);
    }, options);
    observer.observe(ref.current);
    return function() {
      observer.disconnect();
    };
  }, [options, ref]);
  return isElementVisible;
};
var useInterval = function useInterval2(fn) {
  var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var when = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var timeout = React.useRef(null);
  var savedCallback = React.useRef(null);
  var clear = React.useCallback(function() {
    return clearInterval(timeout.current);
  }, [timeout.current]);
  React.useEffect(function() {
    savedCallback.current = fn;
  });
  React.useEffect(function() {
    function callback() {
      savedCallback.current();
    }
    if (when) {
      timeout.current = setInterval(callback, delay);
      return clear;
    } else {
      clear();
    }
  }, [delay, when]);
  useUnmountEffect(function() {
    clear();
  });
  return [clear];
};
var useMatchMedia = function useMatchMedia2(query) {
  var when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), matches = _React$useState2[0], setMatches = _React$useState2[1];
  var matchMedia = React.useRef(null);
  var handleChange = function handleChange2(e) {
    return setMatches(e.matches);
  };
  var bind = function bind2() {
    return matchMedia.current && matchMedia.current.addEventListener("change", handleChange);
  };
  var unbind = function unbind2() {
    return matchMedia.current && matchMedia.current.removeEventListener("change", handleChange) && (matchMedia.current = null);
  };
  React.useEffect(function() {
    if (when) {
      matchMedia.current = window.matchMedia(query);
      setMatches(matchMedia.current.matches);
      bind();
    }
    return unbind;
  }, [query, when]);
  return matches;
};
var useMountEffect = function useMountEffect2(fn) {
  var mounted = React.useRef(false);
  return React.useEffect(function() {
    if (!mounted.current) {
      mounted.current = true;
      return fn && fn();
    }
    return;
  }, []);
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var useMouse = function useMouse2() {
  var _React$useState = React.useState({
    x: 0,
    y: 0
  }), _React$useState2 = _slicedToArray(_React$useState, 2), position = _React$useState2[0], setPosition = _React$useState2[1];
  var ref = React.useRef(null);
  var handleMouseMove = React.useCallback(function(event) {
    var x, y;
    if (ref.current) {
      var rect = event.currentTarget.getBoundingClientRect();
      x = event.pageX - rect.left - (window.pageXOffset || window.scrollX);
      y = event.pageY - rect.top - (window.pageYOffset || window.scrollY);
    } else {
      x = event.clientX;
      y = event.clientY;
    }
    setPosition({
      x: Math.max(0, Math.round(x)),
      y: Math.max(0, Math.round(y))
    });
  }, []);
  var _useEventListener = useEventListener({
    target: ref,
    type: "mousemove",
    listener: handleMouseMove
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindMouseMoveEventListener = _useEventListener2[0], unbindMouseMoveEventListener = _useEventListener2[1];
  var _useEventListener3 = useEventListener({
    type: "mousemove",
    listener: handleMouseMove
  }), _useEventListener4 = _slicedToArray(_useEventListener3, 2), bindDocumentMoveEventListener = _useEventListener4[0], unbindDocumentMoveEventListener = _useEventListener4[1];
  var reset = function reset2() {
    return setPosition({
      x: 0,
      y: 0
    });
  };
  React.useEffect(function() {
    bindMouseMoveEventListener();
    if (!ref.current) {
      bindDocumentMoveEventListener();
    }
    return function() {
      unbindMouseMoveEventListener();
      if (!ref.current) {
        unbindDocumentMoveEventListener();
      }
    };
  }, [bindDocumentMoveEventListener, bindMouseMoveEventListener, unbindDocumentMoveEventListener, unbindMouseMoveEventListener]);
  return _objectSpread$1(_objectSpread$1({
    ref
  }, position), {}, {
    reset
  });
};
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function useMove(_ref) {
  var _ref$mode = _ref.mode, mode = _ref$mode === void 0 ? "both" : _ref$mode, _ref$initialValue = _ref.initialValue, initialValue = _ref$initialValue === void 0 ? {
    x: 0,
    y: 0
  } : _ref$initialValue;
  var _React$useState = React.useState(initialValue), _React$useState2 = _slicedToArray(_React$useState, 2), positions = _React$useState2[0], setPositions = _React$useState2[1];
  var _React$useState3 = React.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), active = _React$useState4[0], setActive = _React$useState4[1];
  var isMounted = React.useRef(false);
  var isSliding = React.useRef(false);
  var ref = React.useRef(null);
  var onMouseMove = function onMouseMove2(event) {
    return updateMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };
  var handlePositionChange = function handlePositionChange2(_ref2) {
    var clampedX = _ref2.clampedX, clampedY = _ref2.clampedY;
    if (mode === "vertical") {
      setPositions({
        y: 1 - clampedY
      });
    } else if (mode === "horizontal") {
      setPositions({
        x: clampedX
      });
    } else if (mode === "both") {
      setPositions({
        x: clampedX,
        y: clampedY
      });
    }
  };
  var onMouseDown = function onMouseDown2(event) {
    startScrubbing();
    event.preventDefault();
    onMouseMove(event);
  };
  var stopScrubbing = function stopScrubbing2() {
    if (isSliding.current && isMounted.current) {
      isSliding.current = false;
      setActive(false);
      unbindListeners();
    }
  };
  var onTouchMove = function onTouchMove2(event) {
    if (event.cancelable) {
      event.preventDefault();
    }
    updateMousePosition({
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY
    });
  };
  var onTouchStart = function onTouchStart2(event) {
    if (event.cancelable) {
      event.preventDefault();
    }
    startScrubbing();
    onTouchMove(event);
  };
  var _useEventListener = useEventListener({
    type: "mousemove",
    listener: onMouseMove
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindDocumentMouseMoveListener = _useEventListener2[0], unbindDocumentMouseMoveListener = _useEventListener2[1];
  var _useEventListener3 = useEventListener({
    type: "mouseup",
    listener: stopScrubbing
  }), _useEventListener4 = _slicedToArray(_useEventListener3, 2), bindDocumentMouseUpListener = _useEventListener4[0], unbindDocumentMouseUpListener = _useEventListener4[1];
  var _useEventListener5 = useEventListener({
    type: "touchmove",
    listener: onTouchMove
  }), _useEventListener6 = _slicedToArray(_useEventListener5, 2), bindDocumentTouchMoveListener = _useEventListener6[0], unbindDocumentTouchMoveListener = _useEventListener6[1];
  var _useEventListener7 = useEventListener({
    type: "touchend",
    listener: stopScrubbing
  }), _useEventListener8 = _slicedToArray(_useEventListener7, 2), bindDocumentTouchEndListener = _useEventListener8[0], unbindDocumentTouchEndListener = _useEventListener8[1];
  var _useEventListener9 = useEventListener({
    target: ref,
    type: "mousedown",
    listener: onMouseDown
  }), _useEventListener10 = _slicedToArray(_useEventListener9, 2), bindMouseDownListener = _useEventListener10[0], unbindMouseDownListener = _useEventListener10[1];
  var _useEventListener11 = useEventListener({
    target: ref,
    type: "touchstart",
    listener: onTouchStart,
    options: {
      passive: false
    }
  }), _useEventListener12 = _slicedToArray(_useEventListener11, 2), bindTouchStartListener = _useEventListener12[0], unbindTouchStartListener = _useEventListener12[1];
  var clamp = function clamp2(value, min, max) {
    return Math.min(Math.max(value, min), max);
  };
  var clampPositions = function clampPositions2(_ref3) {
    var x = _ref3.x, y = _ref3.y;
    return {
      clampedX: clamp(x, 0, 1),
      clampedY: clamp(y, 0, 1)
    };
  };
  var bindListeners = function bindListeners2() {
    bindDocumentMouseMoveListener();
    bindDocumentMouseUpListener();
    bindDocumentTouchMoveListener();
    bindDocumentTouchEndListener();
  };
  var unbindListeners = function unbindListeners2() {
    unbindDocumentMouseMoveListener();
    unbindDocumentMouseUpListener();
    unbindDocumentTouchMoveListener();
    unbindDocumentTouchEndListener();
  };
  var reset = function reset2() {
    setPositions(initialValue);
  };
  React.useEffect(function() {
    isMounted.current = true;
  }, []);
  var startScrubbing = function startScrubbing2() {
    if (!isSliding.current && isMounted.current) {
      isSliding.current = true;
      setActive(true);
      bindListeners();
    }
  };
  var updateMousePosition = function updateMousePosition2(_ref4) {
    var x = _ref4.x, y = _ref4.y;
    if (isSliding.current) {
      var rect = ref.current.getBoundingClientRect();
      var _clampPositions = clampPositions({
        x: (x - rect.left) / rect.width,
        y: (y - rect.top) / rect.height
      }), clampedX = _clampPositions.clampedX, clampedY = _clampPositions.clampedY;
      handlePositionChange({
        clampedX,
        clampedY
      });
    }
  };
  React.useEffect(function() {
    if (ref.current) {
      bindMouseDownListener();
      bindTouchStartListener();
    }
    return function() {
      if (ref.current) {
        unbindMouseDownListener();
        unbindTouchStartListener();
      }
    };
  }, [bindMouseDownListener, bindTouchStartListener, positions, unbindMouseDownListener, unbindTouchStartListener]);
  return _objectSpread(_objectSpread({
    ref
  }, positions), {}, {
    active,
    reset
  });
}
var useOverlayScrollListener = function useOverlayScrollListener2(_ref) {
  var target = _ref.target, listener = _ref.listener, options = _ref.options, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  var targetRef = React.useRef(null);
  var listenerRef = React.useRef(null);
  var scrollableParents = React.useRef([]);
  var prevOptions = usePrevious(options);
  var bind = function bind2() {
    var bindOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ObjectUtils.isNotEmpty(bindOptions.target)) {
      unbind();
      (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindOptions.target));
    }
    if (!listenerRef.current && targetRef.current) {
      var nodes = scrollableParents.current = DomHandler.getScrollableParents(targetRef.current);
      listenerRef.current = function(event) {
        return listener && listener(event);
      };
      nodes.forEach(function(node) {
        return node.addEventListener("scroll", listenerRef.current, options);
      });
    }
  };
  var unbind = function unbind2() {
    if (listenerRef.current) {
      var nodes = scrollableParents.current;
      nodes.forEach(function(node) {
        return node.removeEventListener("scroll", listenerRef.current, options);
      });
      listenerRef.current = null;
    }
  };
  React.useEffect(function() {
    if (when) {
      targetRef.current = DomHandler.getTargetElement(target);
    } else {
      unbind();
      targetRef.current = null;
    }
  }, [target, when]);
  React.useEffect(function() {
    if (listenerRef.current && (listenerRef.current !== listener || prevOptions !== options)) {
      unbind();
      when && bind();
    }
  }, [listener, options]);
  useUnmountEffect(function() {
    unbind();
  });
  return [bind, unbind];
};
var useResizeListener = function useResizeListener2(_ref) {
  var listener = _ref.listener, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  return useEventListener({
    target: "window",
    type: "resize",
    listener,
    when
  });
};
var useOverlayListener = function useOverlayListener2(_ref) {
  var target = _ref.target, overlay = _ref.overlay, _listener = _ref.listener, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  var targetRef = React.useRef(null);
  var overlayRef = React.useRef(null);
  var _useEventListener = useEventListener({
    type: "click",
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "outside",
        valid: event.which !== 3 && isOutsideClicked(event)
      });
    }
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindDocumentClickListener = _useEventListener2[0], unbindDocumentClickListener = _useEventListener2[1];
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "resize",
        valid: !DomHandler.isTouchDevice()
      });
    }
  }), _useResizeListener2 = _slicedToArray(_useResizeListener, 2), bindWindowResizeListener = _useResizeListener2[0], unbindWindowResizeListener = _useResizeListener2[1];
  var _useEventListener3 = useEventListener({
    target: "window",
    type: "orientationchange",
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "orientationchange",
        valid: true
      });
    }
  }), _useEventListener4 = _slicedToArray(_useEventListener3, 2), bindWindowOrientationChangeListener = _useEventListener4[0], unbindWindowOrientationChangeListener = _useEventListener4[1];
  var _useOverlayScrollList = useOverlayScrollListener({
    target,
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "scroll",
        valid: true
      });
    }
  }), _useOverlayScrollList2 = _slicedToArray(_useOverlayScrollList, 2), bindOverlayScrollListener = _useOverlayScrollList2[0], unbindOverlayScrollListener = _useOverlayScrollList2[1];
  var isOutsideClicked = function isOutsideClicked2(event) {
    return targetRef.current && !(targetRef.current.isSameNode(event.target) || targetRef.current.contains(event.target) || overlayRef.current && overlayRef.current.contains(event.target));
  };
  var bind = function bind2() {
    bindDocumentClickListener();
    bindWindowResizeListener();
    bindWindowOrientationChangeListener();
    bindOverlayScrollListener();
  };
  var unbind = function unbind2() {
    unbindDocumentClickListener();
    unbindWindowResizeListener();
    unbindWindowOrientationChangeListener();
    unbindOverlayScrollListener();
  };
  React.useEffect(function() {
    if (when) {
      targetRef.current = DomHandler.getTargetElement(target);
      overlayRef.current = DomHandler.getTargetElement(overlay);
    } else {
      unbind();
      targetRef.current = overlayRef.current = null;
    }
  }, [target, overlay, when]);
  React.useEffect(function() {
    unbind();
  }, [when]);
  useUnmountEffect(function() {
    unbind();
  });
  return [bind, unbind];
};
var useStorage = function useStorage2(initialValue, key) {
  var storage = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "local";
  var storageAvailable = typeof window !== "undefined";
  var _useEventListener = useEventListener({
    target: "window",
    type: "storage",
    listener: function listener(event) {
      var area = storage === "local" ? window.localStorage : window.sessionStorage;
      if (event.storageArea === area && event.key === key) {
        setStoredValue(event.newValue || void 0);
      }
    }
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindWindowStorageListener = _useEventListener2[0], unbindWindowStorageListener = _useEventListener2[1];
  var _React$useState = React.useState(initialValue), _React$useState2 = _slicedToArray(_React$useState, 2), storedValue = _React$useState2[0], setStoredValue = _React$useState2[1];
  var setValue = function setValue2(value) {
    try {
      var valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (storageAvailable) {
        var serializedValue = JSON.stringify(valueToStore);
        storage === "local" ? window.localStorage.setItem(key, serializedValue) : window.sessionStorage.setItem(key, serializedValue);
      }
    } catch (error) {
      throw new Error("PrimeReact useStorage: Failed to serialize the value at key: ".concat(key));
    }
  };
  React.useEffect(function() {
    if (!storageAvailable) {
      setStoredValue(initialValue);
    }
    try {
      var item = storage === "local" ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      setStoredValue(initialValue);
    }
    bindWindowStorageListener();
    return function() {
      return unbindWindowStorageListener();
    };
  }, []);
  return [storedValue, setValue];
};
var useLocalStorage = function useLocalStorage2(initialValue, key) {
  return useStorage(initialValue, key, "local");
};
var useSessionStorage = function useSessionStorage2(initialValue, key) {
  return useStorage(initialValue, key, "session");
};
var useUpdateEffect = function useUpdateEffect2(fn, deps) {
  var mounted = React.useRef(false);
  return React.useEffect(function() {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    return fn && fn();
  }, deps);
};

export {
  usePrevious,
  useUnmountEffect,
  useEventListener,
  useClickOutside,
  useCounter,
  useTimeout,
  useDebounce,
  useFavicon,
  useIntersectionObserver,
  useInterval,
  useMatchMedia,
  useMountEffect,
  useMouse,
  useMove,
  useOverlayScrollListener,
  useResizeListener,
  useOverlayListener,
  useStorage,
  useLocalStorage,
  useSessionStorage,
  useUpdateEffect
};
//# sourceMappingURL=chunk-I4S4CD5Z.js.map
