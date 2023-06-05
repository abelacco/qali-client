import {
  TimesIcon
} from "./chunk-CBOBCFBJ.js";
import {
  CSSTransition
} from "./chunk-6ZTX2EVK.js";
import "./chunk-T4MTQRGO.js";
import "./chunk-UCPK3CVF.js";
import {
  Ripple
} from "./chunk-RFGRIKBI.js";
import {
  IconBase
} from "./chunk-4MMGA47Q.js";
import {
  Portal,
  PrimeReact,
  localeOption
} from "./chunk-3SB2U25O.js";
import {
  useEventListener,
  useMountEffect,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-I4S4CD5Z.js";
import {
  ComponentBase
} from "./chunk-TENS523J.js";
import {
  DomHandler,
  IconUtils,
  ObjectUtils,
  UniqueComponentId,
  ZIndexUtils,
  classNames,
  mergeProps
} from "./chunk-ZGU4VZCK.js";
import "./chunk-RVSLBP3T.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/primereact/dialog/dialog.esm.js
var React3 = __toESM(require_react());

// node_modules/primereact/icons/windowmaximize/index.esm.js
var React = __toESM(require_react());
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var WindowMaximizeIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("g", {
    clipPath: "url(#clip0_414_20927)"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_414_20927"
  }, React.createElement("rect", {
    width: "14",
    height: "14",
    fill: "white"
  }))));
}));
WindowMaximizeIcon.displayName = "WindowMaximizeIcon";

// node_modules/primereact/icons/windowminimize/index.esm.js
var React2 = __toESM(require_react());
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var WindowMinimizeIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("g", {
    clipPath: "url(#clip0_414_20939)"
  }, React2.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  })), React2.createElement("defs", null, React2.createElement("clipPath", {
    id: "clip0_414_20939"
  }, React2.createElement("rect", {
    width: "14",
    height: "14",
    fill: "white"
  }))));
}));
WindowMinimizeIcon.displayName = "WindowMinimizeIcon";

// node_modules/primereact/dialog/dialog.esm.js
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
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
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
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
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var DialogBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Dialog",
    appendTo: null,
    ariaCloseIconLabel: null,
    baseZIndex: 0,
    blockScroll: false,
    breakpoints: null,
    className: null,
    closable: true,
    closeIcon: null,
    closeOnEscape: true,
    contentClassName: null,
    contentStyle: null,
    dismissableMask: false,
    draggable: true,
    focusOnShow: true,
    footer: null,
    header: null,
    headerClassName: null,
    headerStyle: null,
    icons: null,
    id: null,
    keepInViewport: true,
    maskClassName: null,
    maskStyle: null,
    maximizable: false,
    maximizeIcon: null,
    maximized: false,
    minX: 0,
    minY: 0,
    minimizeIcon: null,
    modal: true,
    onClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragStart: null,
    onHide: null,
    onMaskClick: null,
    onMaximize: null,
    onResize: null,
    onResizeEnd: null,
    onResizeStart: null,
    onShow: null,
    position: "center",
    resizable: true,
    rtl: false,
    showHeader: true,
    style: null,
    transitionOptions: null,
    visible: false,
    children: void 0
  }
});
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
var Dialog = React3.forwardRef(function(inProps, ref) {
  var props = DialogBase.getProps(inProps);
  var uniqueId = props.id ? props.id : UniqueComponentId();
  var _React$useState = React3.useState(uniqueId), _React$useState2 = _slicedToArray(_React$useState, 2), idState = _React$useState2[0];
  _React$useState2[1];
  var _React$useState3 = React3.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), maskVisibleState = _React$useState4[0], setMaskVisibleState = _React$useState4[1];
  var _React$useState5 = React3.useState(false), _React$useState6 = _slicedToArray(_React$useState5, 2), visibleState = _React$useState6[0], setVisibleState = _React$useState6[1];
  var _React$useState7 = React3.useState(props.maximized), _React$useState8 = _slicedToArray(_React$useState7, 2), maximizedState = _React$useState8[0], setMaximizedState = _React$useState8[1];
  var dialogRef = React3.useRef(null);
  var maskRef = React3.useRef(null);
  var pointerRef = React3.useRef(null);
  var contentRef = React3.useRef(null);
  var headerRef = React3.useRef(null);
  var footerRef = React3.useRef(null);
  var closeRef = React3.useRef(null);
  var dragging = React3.useRef(false);
  var resizing = React3.useRef(false);
  var lastPageX = React3.useRef(null);
  var lastPageY = React3.useRef(null);
  var styleElement = React3.useRef(null);
  var attributeSelector = React3.useRef(uniqueId);
  var maximized = props.onMaximize ? props.maximized : maximizedState;
  var _DialogBase$setMetaDa = DialogBase.setMetaData({
    props,
    state: {
      id: idState,
      maximized,
      containerVisible: maskVisibleState
    }
  }), ptm = _DialogBase$setMetaDa.ptm;
  var _useEventListener = useEventListener({
    type: "keydown",
    listener: function listener(event) {
      return onKeyDown(event);
    }
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindDocumentKeyDownListener = _useEventListener2[0], unbindDocumentKeyDownListener = _useEventListener2[1];
  var _useEventListener3 = useEventListener({
    type: "mousemove",
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onResize(event);
    }
  }), _useEventListener4 = _slicedToArray(_useEventListener3, 2), bindDocumentResizeListener = _useEventListener4[0], unbindDocumentResizeListener = _useEventListener4[1];
  var _useEventListener5 = useEventListener({
    type: "mouseup",
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onResizeEnd(event);
    }
  }), _useEventListener6 = _slicedToArray(_useEventListener5, 2), bindDocumentResizeEndListener = _useEventListener6[0], unbindDocumentResizEndListener = _useEventListener6[1];
  var _useEventListener7 = useEventListener({
    type: "mousemove",
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onDrag(event);
    }
  }), _useEventListener8 = _slicedToArray(_useEventListener7, 2), bindDocumentDragListener = _useEventListener8[0], unbindDocumentDragListener = _useEventListener8[1];
  var _useEventListener9 = useEventListener({
    type: "mouseup",
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onDragEnd(event);
    }
  }), _useEventListener10 = _slicedToArray(_useEventListener9, 2), bindDocumentDragEndListener = _useEventListener10[0], unbindDocumentDragEndListener = _useEventListener10[1];
  var onClose = function onClose2(event) {
    props.onHide();
    event.preventDefault();
  };
  var focus = function focus2() {
    var activeElement = document.activeElement;
    var isActiveElementInDialog = activeElement && dialogRef.current && dialogRef.current.contains(activeElement);
    if (!isActiveElementInDialog && props.closable && props.showHeader) {
      closeRef.current.focus();
    }
  };
  var onDialogPointerDown = function onDialogPointerDown2(event) {
    pointerRef.current = event.target;
    props.onPointerDown && props.onPointerDown(event);
  };
  var onMaskPointerUp = function onMaskPointerUp2(event) {
    if (props.dismissableMask && props.modal && maskRef.current === event.target && !pointerRef.current) {
      onClose(event);
    }
    props.onMaskClick && props.onMaskClick(event);
    pointerRef.current = null;
  };
  var toggleMaximize = function toggleMaximize2(event) {
    if (props.onMaximize) {
      props.onMaximize({
        originalEvent: event,
        maximized: !maximized
      });
    } else {
      setMaximizedState(function(prevMaximized) {
        return !prevMaximized;
      });
    }
    event.preventDefault();
  };
  var onKeyDown = function onKeyDown2(event) {
    var currentTarget = event.currentTarget;
    if (!currentTarget || !currentTarget.primeDialogParams) {
      return;
    }
    var params = currentTarget.primeDialogParams;
    var paramLength = params.length;
    var dialogId = params[paramLength - 1] ? params[paramLength - 1].id : void 0;
    if (dialogId !== idState) {
      return;
    }
    var dialog = document.getElementById(dialogId);
    if (props.closable && props.closeOnEscape && event.key === "Escape") {
      onClose(event);
      event.stopImmediatePropagation();
      params.splice(paramLength - 1, 1);
    } else if (event.key === "Tab") {
      event.preventDefault();
      var focusableElements = DomHandler.getFocusableElements(dialog);
      if (focusableElements && focusableElements.length > 0) {
        if (!document.activeElement) {
          focusableElements[0].focus();
        } else {
          var focusedIndex = focusableElements.indexOf(document.activeElement);
          if (event.shiftKey) {
            if (focusedIndex === -1 || focusedIndex === 0)
              focusableElements[focusableElements.length - 1].focus();
            else
              focusableElements[focusedIndex - 1].focus();
          } else {
            if (focusedIndex === -1 || focusedIndex === focusableElements.length - 1)
              focusableElements[0].focus();
            else
              focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
  };
  var onDragStart = function onDragStart2(event) {
    if (DomHandler.hasClass(event.target, "p-dialog-header-icon") || DomHandler.hasClass(event.target.parentElement, "p-dialog-header-icon")) {
      return;
    }
    if (props.draggable) {
      dragging.current = true;
      lastPageX.current = event.pageX;
      lastPageY.current = event.pageY;
      dialogRef.current.style.margin = "0";
      DomHandler.addClass(document.body, "p-unselectable-text");
      props.onDragStart && props.onDragStart(event);
    }
  };
  var onDrag = function onDrag2(event) {
    if (dragging.current) {
      var width = DomHandler.getOuterWidth(dialogRef.current);
      var height = DomHandler.getOuterHeight(dialogRef.current);
      var deltaX = event.pageX - lastPageX.current;
      var deltaY = event.pageY - lastPageY.current;
      var offset = dialogRef.current.getBoundingClientRect();
      var leftPos = offset.left + deltaX;
      var topPos = offset.top + deltaY;
      var viewport = DomHandler.getViewport();
      dialogRef.current.style.position = "fixed";
      if (props.keepInViewport) {
        if (leftPos >= props.minX && leftPos + width < viewport.width) {
          lastPageX.current = event.pageX;
          dialogRef.current.style.left = leftPos + "px";
        }
        if (topPos >= props.minY && topPos + height < viewport.height) {
          lastPageY.current = event.pageY;
          dialogRef.current.style.top = topPos + "px";
        }
      } else {
        lastPageX.current = event.pageX;
        dialogRef.current.style.left = leftPos + "px";
        lastPageY.current = event.pageY;
        dialogRef.current.style.top = topPos + "px";
      }
      props.onDrag && props.onDrag(event);
    }
  };
  var onDragEnd = function onDragEnd2(event) {
    if (dragging.current) {
      dragging.current = false;
      DomHandler.removeClass(document.body, "p-unselectable-text");
      props.onDragEnd && props.onDragEnd(event);
    }
  };
  var onResizeStart = function onResizeStart2(event) {
    if (props.resizable) {
      resizing.current = true;
      lastPageX.current = event.pageX;
      lastPageY.current = event.pageY;
      DomHandler.addClass(document.body, "p-unselectable-text");
      props.onResizeStart && props.onResizeStart(event);
    }
  };
  var convertToPx = function convertToPx2(value, property, viewport) {
    !viewport && (viewport = DomHandler.getViewport());
    var val = parseInt(value);
    if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(value)) {
      return val * (viewport[property] / 100);
    }
    return val;
  };
  var onResize = function onResize2(event) {
    if (resizing.current) {
      var deltaX = event.pageX - lastPageX.current;
      var deltaY = event.pageY - lastPageY.current;
      var width = DomHandler.getOuterWidth(dialogRef.current);
      var height = DomHandler.getOuterHeight(dialogRef.current);
      var offset = dialogRef.current.getBoundingClientRect();
      var viewport = DomHandler.getViewport();
      var hasBeenDragged = !parseInt(dialogRef.current.style.top) || !parseInt(dialogRef.current.style.left);
      var minWidth = convertToPx(dialogRef.current.style.minWidth, "width", viewport);
      var minHeight = convertToPx(dialogRef.current.style.minHeight, "height", viewport);
      var newWidth = width + deltaX;
      var newHeight = height + deltaY;
      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }
      if ((!minWidth || newWidth > minWidth) && offset.left + newWidth < viewport.width) {
        dialogRef.current.style.width = newWidth + "px";
      }
      if ((!minHeight || newHeight > minHeight) && offset.top + newHeight < viewport.height) {
        dialogRef.current.style.height = newHeight + "px";
      }
      lastPageX.current = event.pageX;
      lastPageY.current = event.pageY;
      props.onResize && props.onResize(event);
    }
  };
  var onResizeEnd = function onResizeEnd2(event) {
    if (resizing.current) {
      resizing.current = false;
      DomHandler.removeClass(document.body, "p-unselectable-text");
      props.onResizeEnd && props.onResizeEnd(event);
    }
  };
  var resetPosition = function resetPosition2() {
    dialogRef.current.style.position = "";
    dialogRef.current.style.left = "";
    dialogRef.current.style.top = "";
    dialogRef.current.style.margin = "";
  };
  var getPositionClass = function getPositionClass2() {
    var positions = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"];
    var pos = positions.find(function(item) {
      return item === props.position || item.replace("-", "") === props.position;
    });
    return pos ? "p-dialog-".concat(pos) : "";
  };
  var onEnter = function onEnter2() {
    dialogRef.current.setAttribute(attributeSelector.current, "");
  };
  var onEntered = function onEntered2() {
    props.onShow && props.onShow();
    if (props.focusOnShow) {
      focus();
    }
    enableDocumentSettings();
  };
  var onExiting = function onExiting2() {
    if (props.modal) {
      DomHandler.addClass(maskRef.current, "p-component-overlay-leave");
    }
    if (props.blockScroll) {
      DomHandler.removeClass(document.body, "p-overflow-hidden");
    }
  };
  var onExited = function onExited2() {
    dragging.current = false;
    ZIndexUtils.clear(maskRef.current);
    setMaskVisibleState(false);
    disableDocumentSettings();
  };
  var enableDocumentSettings = function enableDocumentSettings2() {
    bindGlobalListeners();
    if (props.blockScroll || props.maximizable && maximized) {
      DomHandler.addClass(document.body, "p-overflow-hidden");
    }
  };
  var disableDocumentSettings = function disableDocumentSettings2() {
    unbindGlobalListeners();
    var isMaximized = props.maximizable && maximized;
    if (props.modal) {
      var hasBlockScroll = document.primeDialogParams && document.primeDialogParams.some(function(param) {
        return param.hasBlockScroll;
      });
      if (hasBlockScroll || isMaximized) {
        DomHandler.removeClass(document.body, "p-overflow-hidden");
      }
    } else if (props.blockScroll || isMaximized) {
      DomHandler.removeClass(document.body, "p-overflow-hidden");
    }
  };
  var bindGlobalListeners = function bindGlobalListeners2() {
    if (props.draggable) {
      bindDocumentDragListener();
      bindDocumentDragEndListener();
    }
    if (props.resizable) {
      bindDocumentResizeListener();
      bindDocumentResizeEndListener();
    }
    bindDocumentKeyDownListener();
    var newParam = {
      id: idState,
      hasBlockScroll: props.blockScroll
    };
    document.primeDialogParams = document.primeDialogParams ? [].concat(_toConsumableArray(document.primeDialogParams), [newParam]) : [newParam];
  };
  var unbindGlobalListeners = function unbindGlobalListeners2() {
    unbindDocumentDragListener();
    unbindDocumentDragEndListener();
    unbindDocumentResizeListener();
    unbindDocumentResizEndListener();
    unbindDocumentKeyDownListener();
    document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(param) {
      return param.id !== idState;
    });
  };
  var createStyle = function createStyle2() {
    styleElement.current = DomHandler.createInlineStyle(PrimeReact.nonce);
    var innerHTML = "";
    for (var breakpoint in props.breakpoints) {
      innerHTML += "\n                @media screen and (max-width: ".concat(breakpoint, ") {\n                    .p-dialog[").concat(attributeSelector.current, "] {\n                        width: ").concat(props.breakpoints[breakpoint], " !important;\n                    }\n                }\n            ");
    }
    styleElement.current.innerHTML = innerHTML;
  };
  var changeScrollOnMaximizable = function changeScrollOnMaximizable2() {
    if (!props.blockScroll) {
      var funcName = maximized && visibleState ? "addClass" : "removeClass";
      DomHandler[funcName](document.body, "p-overflow-hidden");
    }
  };
  useMountEffect(function() {
    if (props.visible) {
      setMaskVisibleState(true);
    }
    if (props.breakpoints) {
      createStyle();
    }
  });
  useUpdateEffect(function() {
    if (props.visible && !maskVisibleState) {
      setMaskVisibleState(true);
    }
    if (props.visible !== visibleState && maskVisibleState) {
      setVisibleState(props.visible);
    }
  });
  useUpdateEffect(function() {
    if (maskVisibleState) {
      ZIndexUtils.set("modal", maskRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex["modal"]);
      setVisibleState(true);
    }
  }, [maskVisibleState]);
  useUpdateEffect(function() {
    changeScrollOnMaximizable();
  }, [props.maximized, maximizedState, visibleState]);
  useUnmountEffect(function() {
    disableDocumentSettings();
    DomHandler.removeInlineStyle(styleElement.current);
    ZIndexUtils.clear(maskRef.current);
  });
  React3.useImperativeHandle(ref, function() {
    return {
      props,
      resetPosition,
      getElement: function getElement() {
        return dialogRef.current;
      },
      getMask: function getMask() {
        return maskRef.current;
      },
      getContent: function getContent() {
        return contentRef.current;
      },
      getHeader: function getHeader() {
        return headerRef.current;
      },
      getFooter: function getFooter() {
        return footerRef.current;
      },
      getCloseButton: function getCloseButton() {
        return closeRef.current;
      }
    };
  });
  var createCloseIcon = function createCloseIcon2() {
    if (props.closable) {
      var ariaLabel = props.ariaCloseIconLabel || localeOption("close");
      var closeButtonIconProps = mergeProps({
        className: "p-dialog-header-close-icon",
        "aria-hidden": true
      }, ptm("closeButtonIcon"));
      var icon = props.closeIcon || React3.createElement(TimesIcon, closeButtonIconProps);
      var headerCloseIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, closeButtonIconProps), {
        props
      });
      var closeButtonProps = mergeProps({
        ref: closeRef,
        type: "button",
        className: "p-dialog-header-icon p-dialog-header-close p-link",
        "aria-label": ariaLabel,
        onClick: onClose
      }, ptm("closeButton"));
      return React3.createElement("button", closeButtonProps, headerCloseIcon, React3.createElement(Ripple, null));
    }
    return null;
  };
  var createMaximizeIcon = function createMaximizeIcon2() {
    var icon;
    var iconClassName = "p-dialog-header-maximize-icon";
    var maximizableIconProps = mergeProps({
      className: iconClassName
    }, ptm("maximizableIcon"));
    if (!maximized) {
      icon = props.maximizeIcon || React3.createElement(WindowMaximizeIcon, maximizableIconProps);
    } else {
      icon = props.minimizeIcon || React3.createElement(WindowMinimizeIcon, maximizableIconProps);
    }
    var toggleIcon = IconUtils.getJSXIcon(icon, maximizableIconProps, {
      props
    });
    if (props.maximizable) {
      var maximizableButtonProps = mergeProps({
        type: "button",
        className: "p-dialog-header-icon p-dialog-header-maximize p-link",
        onClick: toggleMaximize
      }, ptm("maximizableButton"));
      return React3.createElement("button", maximizableButtonProps, toggleIcon, React3.createElement(Ripple, null));
    }
    return null;
  };
  var createHeader = function createHeader2() {
    if (props.showHeader) {
      var closeIcon = createCloseIcon();
      var maximizeIcon = createMaximizeIcon();
      var icons = ObjectUtils.getJSXElement(props.icons, props);
      var header = ObjectUtils.getJSXElement(props.header, props);
      var headerId = idState + "_header";
      var headerClassName = classNames("p-dialog-header", props.headerClassName);
      var headerProps = mergeProps({
        ref: headerRef,
        style: props.headerStyle,
        className: headerClassName,
        onMouseDown: onDragStart
      }, ptm("header"));
      var headerTitleProps = mergeProps({
        id: headerId,
        className: "p-dialog-title"
      }, ptm("headerTitle"));
      var headerIconsProps = mergeProps({
        className: "p-dialog-header-icons"
      }, ptm("headerIcons"));
      return React3.createElement("div", headerProps, React3.createElement("div", headerTitleProps, header), React3.createElement("div", headerIconsProps, icons, maximizeIcon, closeIcon));
    }
    return null;
  };
  var createContent = function createContent2() {
    var className = classNames("p-dialog-content", props.contentClassName);
    var contentId = idState + "_content";
    var contentProps = mergeProps({
      id: contentId,
      ref: contentRef,
      style: props.contentStyle,
      className
    }, ptm("content"));
    return React3.createElement("div", contentProps, props.children);
  };
  var createFooter = function createFooter2() {
    var footer = ObjectUtils.getJSXElement(props.footer, props);
    var footerProps = mergeProps({
      ref: footerRef,
      className: "p-dialog-footer"
    }, ptm("footer"));
    return footer && React3.createElement("div", footerProps, footer);
  };
  var createResizer = function createResizer2() {
    if (props.resizable) {
      return React3.createElement("span", {
        className: "p-resizable-handle",
        style: {
          zIndex: 90
        },
        onMouseDown: onResizeStart
      });
    }
    return null;
  };
  var createElement4 = function createElement5() {
    var className = classNames("p-dialog p-component", props.className, {
      "p-dialog-rtl": props.rtl,
      "p-dialog-maximized": maximized,
      "p-dialog-default": !maximized,
      "p-input-filled": PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": PrimeReact.ripple === false
    });
    var maskClassName = classNames("p-dialog-mask", getPositionClass(), {
      "p-component-overlay p-component-overlay-enter": props.modal,
      "p-dialog-visible": maskVisibleState,
      "p-dialog-draggable": props.draggable,
      "p-dialog-resizable": props.resizable
    }, props.maskClassName);
    var header = createHeader();
    var content = createContent();
    var footer = createFooter();
    var resizer = createResizer();
    var headerId = idState + "_header";
    var contentId = idState + "_content";
    var transitionTimeout = {
      enter: props.position === "center" ? 150 : 300,
      exit: props.position === "center" ? 150 : 300
    };
    var maskProps = mergeProps({
      ref: maskRef,
      style: props.maskStyle,
      className: maskClassName,
      onPointerUp: onMaskPointerUp
    }, ptm("mask"));
    var rootProps = mergeProps({
      ref: dialogRef,
      id: idState,
      className,
      style: props.style,
      onClick: props.onClick,
      role: "dialog",
      "aria-labelledby": headerId,
      "aria-describedby": contentId,
      "aria-modal": props.modal,
      onPointerDown: onDialogPointerDown
    }, DialogBase.getOtherProps(props), ptm("root"));
    return React3.createElement("div", maskProps, React3.createElement(CSSTransition, {
      nodeRef: dialogRef,
      classNames: "p-dialog",
      timeout: transitionTimeout,
      "in": visibleState,
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter,
      onEntered,
      onExiting,
      onExited
    }, React3.createElement("div", rootProps, header, content, footer, resizer)));
  };
  var createDialog = function createDialog2() {
    var element = createElement4();
    return React3.createElement(Portal, {
      element,
      appendTo: props.appendTo,
      visible: true
    });
  };
  return maskVisibleState && createDialog();
});
Dialog.displayName = "Dialog";
export {
  Dialog
};
//# sourceMappingURL=primereact_dialog.js.map
