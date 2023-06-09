import {
  InputText
} from "./chunk-CPG3YSWF.js";
import {
  Button
} from "./chunk-6LD624TQ.js";
import {
  ChevronDownIcon
} from "./chunk-BEZFDKTR.js";
import {
  OverlayService
} from "./chunk-NNDG6IBV.js";
import {
  CSSTransition
} from "./chunk-6ZTX2EVK.js";
import "./chunk-T4MTQRGO.js";
import "./chunk-UCPK3CVF.js";
import "./chunk-HTDECVSD.js";
import "./chunk-TT5QVHZX.js";
import {
  Ripple
} from "./chunk-RFGRIKBI.js";
import {
  IconBase
} from "./chunk-4MMGA47Q.js";
import {
  Portal,
  PrimeReact,
  localeOption,
  localeOptions
} from "./chunk-3SB2U25O.js";
import {
  useMountEffect,
  useOverlayListener,
  usePrevious,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-I4S4CD5Z.js";
import "./chunk-TENS523J.js";
import {
  DomHandler,
  IconUtils,
  ObjectUtils,
  UniqueComponentId,
  ZIndexUtils,
  classNames,
  mask
} from "./chunk-ZGU4VZCK.js";
import "./chunk-RVSLBP3T.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/primereact/calendar/calendar.esm.js
var React5 = __toESM(require_react());

// node_modules/primereact/icons/calendar/index.esm.js
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
var CalendarIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    d: "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z",
    fill: "currentColor"
  }));
}));
CalendarIcon.displayName = "CalendarIcon";

// node_modules/primereact/icons/chevronleft/index.esm.js
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
var ChevronLeftIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("path", {
    d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
    fill: "currentColor"
  }));
}));
ChevronLeftIcon.displayName = "ChevronLeftIcon";

// node_modules/primereact/icons/chevronright/index.esm.js
var React3 = __toESM(require_react());
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends3.apply(this, arguments);
}
var ChevronRightIcon = React3.memo(React3.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React3.createElement("svg", _extends3({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React3.createElement("path", {
    d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
    fill: "currentColor"
  }));
}));
ChevronRightIcon.displayName = "ChevronRightIcon";

// node_modules/primereact/icons/chevronup/index.esm.js
var React4 = __toESM(require_react());
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends4.apply(this, arguments);
}
var ChevronUpIcon = React4.memo(React4.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React4.createElement("svg", _extends4({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React4.createElement("path", {
    d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
    fill: "currentColor"
  }));
}));
ChevronUpIcon.displayName = "ChevronUpIcon";

// node_modules/primereact/calendar/calendar.esm.js
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
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends5.apply(this, arguments);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}
var CalendarBase = {
  defaultProps: {
    __TYPE: "Calendar",
    appendTo: null,
    ariaLabelledBy: null,
    autoZIndex: true,
    baseZIndex: 0,
    className: null,
    clearButtonClassName: "p-button-secondary",
    dateFormat: null,
    dateTemplate: null,
    decadeTemplate: null,
    decrementIcon: null,
    disabled: false,
    disabledDates: null,
    disabledDays: null,
    footerTemplate: null,
    formatDateTime: null,
    headerTemplate: null,
    hideOnDateTimeSelect: false,
    hourFormat: "24",
    icon: null,
    iconPos: "right",
    id: null,
    incrementIcon: null,
    inline: false,
    inputClassName: null,
    inputId: null,
    inputMode: "none",
    inputRef: null,
    inputStyle: null,
    keepInvalid: false,
    locale: null,
    mask: null,
    maxDate: null,
    maxDateCount: null,
    minDate: null,
    monthNavigator: false,
    monthNavigatorTemplate: null,
    name: null,
    nextIcon: null,
    numberOfMonths: 1,
    onBlur: null,
    onChange: null,
    onClearButtonClick: null,
    onFocus: null,
    onHide: null,
    onInput: null,
    onMonthChange: null,
    onSelect: null,
    onShow: null,
    onTodayButtonClick: null,
    onViewDateChange: null,
    onVisibleChange: null,
    panelClassName: null,
    panelStyle: null,
    parseDateTime: null,
    placeholder: null,
    prevIcon: null,
    readOnlyInput: false,
    required: false,
    selectOtherMonths: false,
    selectionMode: "single",
    shortYearCutoff: "+10",
    showButtonBar: false,
    showIcon: false,
    showMillisec: false,
    showMinMaxRange: false,
    showOnFocus: true,
    showOtherMonths: true,
    showSeconds: false,
    showTime: false,
    showWeek: false,
    stepHour: 1,
    stepMillisec: 1,
    stepMinute: 1,
    stepSecond: 1,
    style: null,
    tabIndex: null,
    timeOnly: false,
    todayButtonClassName: "p-button-secondary",
    tooltip: null,
    tooltipOptions: null,
    touchUI: false,
    transitionOptions: null,
    value: null,
    view: "date",
    viewDate: null,
    visible: false,
    yearNavigator: false,
    yearNavigatorTemplate: null,
    yearRange: null,
    children: void 0
  },
  getProps: function getProps(props) {
    return ObjectUtils.getMergedProps(props, CalendarBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return ObjectUtils.getDiffProps(props, CalendarBase.defaultProps);
  }
};
var CalendarPanel = React5.forwardRef(function(props, ref) {
  var createElement6 = function createElement7() {
    return React5.createElement(CSSTransition, {
      nodeRef: ref,
      classNames: "p-connected-overlay",
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: props.onEnter,
      onEntered: props.onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, React5.createElement("div", {
      ref,
      className: props.className,
      style: props.style,
      onClick: props.onClick,
      onMouseUp: props.onMouseUp
    }, props.children));
  };
  var element = createElement6();
  return props.inline ? element : React5.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
});
CalendarPanel.displayName = "CalendarPanel";
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it["return"] != null)
        it["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var Calendar = React5.memo(React5.forwardRef(function(inProps, ref) {
  var _classNames;
  var props = CalendarBase.getProps(inProps);
  var _React$useState = React5.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focusedState = _React$useState2[0], setFocusedState = _React$useState2[1];
  var _React$useState3 = React5.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), overlayVisibleState = _React$useState4[0], setOverlayVisibleState = _React$useState4[1];
  var _React$useState5 = React5.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), viewDateState = _React$useState6[0], setViewDateState = _React$useState6[1];
  var elementRef = React5.useRef(null);
  var overlayRef = React5.useRef(null);
  var inputRef = React5.useRef(props.inputRef);
  var navigation = React5.useRef(null);
  var ignoreFocusFunctionality = React5.useRef(false);
  var isKeydown = React5.useRef(false);
  var timePickerTimer = React5.useRef(null);
  var viewStateChanged = React5.useRef(false);
  var touchUIMask = React5.useRef(null);
  var overlayEventListener = React5.useRef(null);
  var touchUIMaskClickListener = React5.useRef(null);
  var isOverlayClicked = React5.useRef(false);
  var ignoreMaskChange = React5.useRef(false);
  var _React$useState7 = React5.useState("date"), _React$useState8 = _slicedToArray(_React$useState7, 2), currentView = _React$useState8[0], setCurrentView = _React$useState8[1];
  var _React$useState9 = React5.useState(null), _React$useState10 = _slicedToArray(_React$useState9, 2), currentMonth = _React$useState10[0], setCurrentMonth = _React$useState10[1];
  var _React$useState11 = React5.useState(null), _React$useState12 = _slicedToArray(_React$useState11, 2), currentYear = _React$useState12[0], setCurrentYear = _React$useState12[1];
  var _React$useState13 = React5.useState([]), _React$useState14 = _slicedToArray(_React$useState13, 2), yearOptions = _React$useState14[0], setYearOptions = _React$useState14[1];
  var previousValue = usePrevious(props.value);
  var visible = props.inline || (props.onVisibleChange ? props.visible : overlayVisibleState);
  var attributeSelector = UniqueComponentId();
  var _useOverlayListener = useOverlayListener({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var type = _ref.type, valid = _ref.valid;
      if (valid) {
        type === "outside" ? !isOverlayClicked.current && !isNavIconClicked(event.target) && hide("outside") : hide();
      }
      isOverlayClicked.current = false;
    },
    when: !(props.touchUI || props.inline) && visible
  }), _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var getDateFormat = function getDateFormat2() {
    return props.dateFormat || localeOption("dateFormat", props.locale);
  };
  var onInputFocus = function onInputFocus2(event) {
    if (ignoreFocusFunctionality.current) {
      setFocusedState(true);
      ignoreFocusFunctionality.current = false;
    } else {
      if (props.showOnFocus && !visible) {
        show();
      }
      setFocusedState(true);
      props.onFocus && props.onFocus(event);
    }
  };
  var onInputBlur = function onInputBlur2(event) {
    setFocusedState(false);
    !props.keepInvalid && updateInputfield(props.value);
    props.onBlur && props.onBlur(event);
  };
  var onInputKeyDown = function onInputKeyDown2(event) {
    isKeydown.current = true;
    switch (event.which) {
      case 27: {
        hide();
        break;
      }
      case 9: {
        visible && trapFocus(event);
        props.touchUI && disableModality();
        break;
      }
    }
  };
  var onUserInput = function onUserInput2(event) {
    if (!isKeydown.current) {
      return;
    }
    isKeydown.current = false;
    updateValueOnInput(event, event.target.value);
    props.onInput && props.onInput(event);
  };
  var updateValueOnInput = function updateValueOnInput2(event, rawValue) {
    try {
      var value = parseValueFromString(rawValue);
      if (isValidSelection(value)) {
        updateModel(event, value);
        updateViewDate(event, value.length ? value[0] : value);
      }
    } catch (err) {
      var _value = props.keepInvalid ? rawValue : null;
      updateModel(event, _value);
    }
  };
  var reFocusInputField = function reFocusInputField2() {
    if (!props.inline && inputRef.current) {
      ignoreFocusFunctionality.current = true;
      DomHandler.focus(inputRef.current);
    }
  };
  var isValidSelection = function isValidSelection2(value) {
    var isValid = true;
    if (isSingleSelection()) {
      if (!(isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false) && isSelectableTime(value))) {
        isValid = false;
      }
    } else if (value.every(function(v) {
      return isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false) && isSelectableTime(v);
    })) {
      if (isRangeSelection()) {
        isValid = value.length > 1 && value[1] > value[0] ? true : false;
      }
    }
    return isValid;
  };
  var onButtonClick = function onButtonClick2() {
    visible ? hide() : show();
  };
  var onPrevButtonClick = function onPrevButtonClick2(event) {
    navigation.current = {
      backward: true,
      button: true
    };
    navBackward(event);
  };
  var onNextButtonClick = function onNextButtonClick2(event) {
    navigation.current = {
      backward: false,
      button: true
    };
    navForward(event);
  };
  var onContainerButtonKeydown = function onContainerButtonKeydown2(event) {
    switch (event.which) {
      case 9:
        trapFocus(event);
        break;
      case 27:
        hide(null, reFocusInputField);
        event.preventDefault();
        break;
    }
  };
  var trapFocus = function trapFocus2(event) {
    event.preventDefault();
    var focusableElements = DomHandler.getFocusableElements(overlayRef.current);
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
  };
  var updateFocus = function updateFocus2() {
    if (navigation.current) {
      if (navigation.current.button) {
        initFocusableCell();
        if (navigation.current.backward)
          DomHandler.findSingle(overlayRef.current, ".p-datepicker-prev").focus();
        else
          DomHandler.findSingle(overlayRef.current, ".p-datepicker-next").focus();
      } else {
        var cell;
        if (navigation.current.backward) {
          var cells = DomHandler.find(overlayRef.current, ".p-datepicker-calendar td span:not(.p-disabled)");
          cell = cells[cells.length - 1];
        } else {
          cell = DomHandler.findSingle(overlayRef.current, ".p-datepicker-calendar td span:not(.p-disabled)");
        }
        if (cell) {
          cell.tabIndex = "0";
          cell.focus();
        }
      }
      navigation.current = null;
    } else {
      initFocusableCell();
    }
  };
  var initFocusableCell = function initFocusableCell2() {
    var cell;
    if (props.view === "month") {
      var cells = DomHandler.find(overlayRef.current, ".p-monthpicker .p-monthpicker-month");
      var selectedCell = DomHandler.findSingle(overlayRef.current, ".p-monthpicker .p-monthpicker-month.p-highlight");
      cells.forEach(function(cell2) {
        return cell2.tabIndex = -1;
      });
      cell = selectedCell || cells[0];
    } else {
      cell = DomHandler.findSingle(overlayRef.current, "span.p-highlight");
      if (!cell) {
        var todayCell = DomHandler.findSingle(overlayRef.current, "td.p-datepicker-today span:not(.p-disabled)");
        cell = todayCell || DomHandler.findSingle(overlayRef.current, ".p-datepicker-calendar td span:not(.p-disabled)");
      }
    }
    if (cell) {
      cell.tabIndex = "0";
    }
  };
  var navBackward = function navBackward2(event) {
    if (props.disabled) {
      event.preventDefault();
      return;
    }
    var newViewDate = cloneDate(getViewDate());
    newViewDate.setDate(1);
    if (currentView === "date") {
      if (newViewDate.getMonth() === 0) {
        newViewDate.setMonth(11);
        newViewDate.setFullYear(decrementYear());
        setCurrentMonth(11);
      } else {
        newViewDate.setMonth(newViewDate.getMonth() - 1);
        setCurrentMonth(function(prevState) {
          return prevState - 1;
        });
      }
    } else if (currentView === "month") {
      var newYear = newViewDate.getFullYear() - 1;
      if (props.yearNavigator) {
        var minYear = parseInt(props.yearRange.split(":")[0], 10);
        if (newYear < minYear) {
          newYear = minYear;
        }
      }
      newViewDate.setFullYear(newYear);
    }
    if (currentView === "month") {
      newViewDate.setFullYear(decrementYear());
    } else if (currentView === "year") {
      newViewDate.setFullYear(decrementDecade());
    }
    updateViewDate(event, newViewDate);
    event.preventDefault();
  };
  var navForward = function navForward2(event) {
    if (props.disabled) {
      event.preventDefault();
      return;
    }
    var newViewDate = cloneDate(getViewDate());
    newViewDate.setDate(1);
    if (currentView === "date") {
      if (newViewDate.getMonth() === 11) {
        newViewDate.setMonth(0);
        newViewDate.setFullYear(incrementYear());
        setCurrentMonth(0);
      } else {
        newViewDate.setMonth(newViewDate.getMonth() + 1);
        setCurrentMonth(function(prevState) {
          return prevState + 1;
        });
      }
    } else if (currentView === "month") {
      var newYear = newViewDate.getFullYear() + 1;
      if (props.yearNavigator) {
        var maxYear = parseInt(props.yearRange.split(":")[1], 10);
        if (newYear > maxYear) {
          newYear = maxYear;
        }
      }
      newViewDate.setFullYear(newYear);
    }
    if (currentView === "month") {
      newViewDate.setFullYear(incrementYear());
    } else if (currentView === "year") {
      newViewDate.setFullYear(incrementDecade());
    }
    updateViewDate(event, newViewDate);
    event.preventDefault();
  };
  var populateYearOptions = function populateYearOptions2(start, end) {
    var _yearOptions = [];
    for (var i = start; i <= end; i++) {
      yearOptions.push(i);
    }
    setYearOptions(_yearOptions);
  };
  var decrementYear = function decrementYear2() {
    var _currentYear = currentYear - 1;
    setCurrentYear(_currentYear);
    if (props.yearNavigator && _currentYear < yearOptions[0]) {
      var difference = yearOptions[yearOptions.length - 1] - yearOptions[0];
      populateYearOptions(yearOptions[0] - difference, yearOptions[yearOptions.length - 1] - difference);
    }
    return _currentYear;
  };
  var incrementYear = function incrementYear2() {
    var _currentYear = currentYear + 1;
    setCurrentYear(_currentYear);
    if (props.yearNavigator && _currentYear.current > yearOptions[yearOptions.length - 1]) {
      var difference = yearOptions[yearOptions.length - 1] - yearOptions[0];
      populateYearOptions(yearOptions[0] + difference, yearOptions[yearOptions.length - 1] + difference);
    }
    return _currentYear;
  };
  var onMonthDropdownChange = function onMonthDropdownChange2(event, value) {
    var currentViewDate = getViewDate();
    var newViewDate = cloneDate(currentViewDate);
    newViewDate.setMonth(parseInt(value, 10));
    updateViewDate(event, newViewDate);
  };
  var onYearDropdownChange = function onYearDropdownChange2(event, value) {
    var currentViewDate = getViewDate();
    var newViewDate = cloneDate(currentViewDate);
    newViewDate.setFullYear(parseInt(value, 10));
    updateViewDate(event, newViewDate);
  };
  var onTodayButtonClick = function onTodayButtonClick2(event) {
    var today = /* @__PURE__ */ new Date();
    var dateMeta = {
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
      today: true,
      selectable: true
    };
    var timeMeta = {
      hours: today.getHours(),
      minutes: today.getMinutes(),
      seconds: today.getSeconds(),
      milliseconds: today.getMilliseconds()
    };
    updateViewDate(event, today);
    onDateSelect(event, dateMeta, timeMeta);
    props.onTodayButtonClick && props.onTodayButtonClick(event);
  };
  var onClearButtonClick = function onClearButtonClick2(event) {
    updateModel(event, null);
    updateInputfield(null);
    hide();
    props.onClearButtonClick && props.onClearButtonClick(event);
  };
  var onPanelClick = function onPanelClick2(event) {
    if (!props.inline) {
      OverlayService.emit("overlay-click", {
        originalEvent: event,
        target: elementRef.current
      });
    }
  };
  var onPanelMouseUp = function onPanelMouseUp2(event) {
    onPanelClick(event);
  };
  var onTimePickerElementMouseDown = function onTimePickerElementMouseDown2(event, type, direction) {
    if (!props.disabled) {
      repeat(event, null, type, direction);
      event.preventDefault();
    }
  };
  var onTimePickerElementMouseUp = function onTimePickerElementMouseUp2() {
    if (!props.disabled) {
      clearTimePickerTimer();
    }
  };
  var onTimePickerElementMouseLeave = function onTimePickerElementMouseLeave2() {
    if (!props.disabled) {
      clearTimePickerTimer();
    }
  };
  var repeat = function repeat2(event, interval, type, direction) {
    clearTimePickerTimer();
    timePickerTimer.current = setTimeout(function() {
      repeat2(event, 100, type, direction);
    }, interval || 500);
    switch (type) {
      case 0:
        if (direction === 1)
          incrementHour(event);
        else
          decrementHour(event);
        break;
      case 1:
        if (direction === 1)
          incrementMinute(event);
        else
          decrementMinute(event);
        break;
      case 2:
        if (direction === 1)
          incrementSecond(event);
        else
          decrementSecond(event);
        break;
      case 3:
        if (direction === 1)
          incrementMilliSecond(event);
        else
          decrementMilliSecond(event);
        break;
    }
  };
  var clearTimePickerTimer = function clearTimePickerTimer2() {
    if (timePickerTimer.current) {
      clearTimeout(timePickerTimer.current);
    }
  };
  var incrementHour = function incrementHour2(event) {
    var currentTime = getCurrentDateTime();
    var currentHour = currentTime.getHours();
    var newHour = currentHour + props.stepHour;
    newHour = newHour >= 24 ? newHour - 24 : newHour;
    if (validateHour(newHour, currentTime)) {
      if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getHours() === newHour) {
        if (props.maxDate.getMinutes() < currentTime.getMinutes()) {
          if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
            if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
              updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
            } else {
              updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), currentTime.getMilliseconds());
            }
          } else {
            updateTime(event, newHour, props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
          }
        } else if (props.maxDate.getMinutes() === currentTime.getMinutes()) {
          if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
            if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
              updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
            } else {
              updateTime(event, newHour, props.maxDate.getMinutes(), props.maxDate.getSeconds(), currentTime.getMilliseconds());
            }
          } else {
            updateTime(event, newHour, props.maxDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
          }
        } else {
          updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var decrementHour = function decrementHour2(event) {
    var currentTime = getCurrentDateTime();
    var currentHour = currentTime.getHours();
    var newHour = currentHour - props.stepHour;
    newHour = newHour < 0 ? newHour + 24 : newHour;
    if (validateHour(newHour, currentTime)) {
      if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getHours() === newHour) {
        if (props.minDate.getMinutes() > currentTime.getMinutes()) {
          if (props.minDate.getSeconds() > currentTime.getSeconds()) {
            if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
              updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), props.minDate.getMilliseconds());
            } else {
              updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), currentTime.getMilliseconds());
            }
          } else {
            updateTime(event, newHour, props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
          }
        } else if (props.minDate.getMinutes() === currentTime.getMinutes()) {
          if (props.minDate.getSeconds() > currentTime.getSeconds()) {
            if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
              updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), props.minDate.getMilliseconds());
            } else {
              updateTime(event, newHour, props.minDate.getMinutes(), props.minDate.getSeconds(), currentTime.getMilliseconds());
            }
          } else {
            updateTime(event, newHour, props.minDate.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
          }
        } else {
          updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var doStepMinute = function doStepMinute2(currentMinute, step) {
    if (props.stepMinute <= 1) {
      return step ? currentMinute + step : currentMinute;
    }
    if (!step) {
      step = props.stepMinute;
      if (currentMinute % step === 0) {
        return currentMinute;
      }
    }
    return Math.floor((currentMinute + step) / step) * step;
  };
  var incrementMinute = function incrementMinute2(event) {
    var currentTime = getCurrentDateTime();
    var currentMinute = currentTime.getMinutes();
    var newMinute = doStepMinute(currentMinute, props.stepMinute);
    newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
    if (validateMinute(newMinute, currentTime)) {
      if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getMinutes() === newMinute) {
        if (props.maxDate.getSeconds() < currentTime.getSeconds()) {
          if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
            updateTime(event, currentTime.getHours(), newMinute, props.maxDate.getSeconds(), props.maxDate.getMilliseconds());
          } else {
            updateTime(event, currentTime.getHours(), newMinute, props.maxDate.getSeconds(), currentTime.getMilliseconds());
          }
        } else {
          updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var decrementMinute = function decrementMinute2(event) {
    var currentTime = getCurrentDateTime();
    var currentMinute = currentTime.getMinutes();
    var newMinute = doStepMinute(currentMinute, -props.stepMinute);
    newMinute = newMinute < 0 ? newMinute + 60 : newMinute;
    if (validateMinute(newMinute, currentTime)) {
      if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getMinutes() === newMinute) {
        if (props.minDate.getSeconds() > currentTime.getSeconds()) {
          if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
            updateTime(event, currentTime.getHours(), newMinute, props.minDate.getSeconds(), props.minDate.getMilliseconds());
          } else {
            updateTime(event, currentTime.getHours(), newMinute, props.minDate.getSeconds(), currentTime.getMilliseconds());
          }
        } else {
          updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var incrementSecond = function incrementSecond2(event) {
    var currentTime = getCurrentDateTime();
    var currentSecond = currentTime.getSeconds();
    var newSecond = currentSecond + props.stepSecond;
    newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
    if (validateSecond(newSecond, currentTime)) {
      if (props.maxDate && props.maxDate.toDateString() === currentTime.toDateString() && props.maxDate.getSeconds() === newSecond) {
        if (props.maxDate.getMilliseconds() < currentTime.getMilliseconds()) {
          updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, props.maxDate.getMilliseconds());
        } else {
          updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var decrementSecond = function decrementSecond2(event) {
    var currentTime = getCurrentDateTime();
    var currentSecond = currentTime.getSeconds();
    var newSecond = currentSecond - props.stepSecond;
    newSecond = newSecond < 0 ? newSecond + 60 : newSecond;
    if (validateSecond(newSecond, currentTime)) {
      if (props.minDate && props.minDate.toDateString() === currentTime.toDateString() && props.minDate.getSeconds() === newSecond) {
        if (props.minDate.getMilliseconds() > currentTime.getMilliseconds()) {
          updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, props.minDate.getMilliseconds());
        } else {
          updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
        }
      } else {
        updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
      }
    }
    event.preventDefault();
  };
  var incrementMilliSecond = function incrementMilliSecond2(event) {
    var currentTime = getCurrentDateTime();
    var currentMillisecond = currentTime.getMilliseconds();
    var newMillisecond = currentMillisecond + props.stepMillisec;
    newMillisecond = newMillisecond > 999 ? newMillisecond - 1e3 : newMillisecond;
    if (validateMillisecond(newMillisecond, currentTime)) {
      updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
    }
    event.preventDefault();
  };
  var decrementMilliSecond = function decrementMilliSecond2(event) {
    var currentTime = getCurrentDateTime();
    var currentMillisecond = currentTime.getMilliseconds();
    var newMillisecond = currentMillisecond - props.stepMillisec;
    newMillisecond = newMillisecond < 0 ? newMillisecond + 999 : newMillisecond;
    if (validateMillisecond(newMillisecond, currentTime)) {
      updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
    }
    event.preventDefault();
  };
  var toggleAmPm = function toggleAmPm2(event) {
    var currentTime = getCurrentDateTime();
    var currentHour = currentTime.getHours();
    var newHour = currentHour >= 12 ? currentHour - 12 : currentHour + 12;
    if (validateHour(convertTo24Hour(newHour, !(currentHour > 11)), currentTime)) {
      updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
    }
    event.preventDefault();
  };
  var getViewDate = function getViewDate2(date) {
    var propValue = props.value;
    var viewDate = date || (props.onViewDateChange ? props.viewDate : viewDateState);
    if (Array.isArray(propValue)) {
      propValue = propValue[0];
    }
    return viewDate && isValidDate(viewDate) ? viewDate : propValue && isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
  };
  var getCurrentDateTime = function getCurrentDateTime2() {
    if (isSingleSelection()) {
      return props.value && props.value instanceof Date ? cloneDate(props.value) : getViewDate();
    } else if (isMultipleSelection()) {
      if (props.value && props.value.length) {
        return cloneDate(props.value[props.value.length - 1]);
      }
    } else if (isRangeSelection()) {
      if (props.value && props.value.length) {
        var startDate = cloneDate(props.value[0]);
        var endDate = cloneDate(props.value[1]);
        return endDate || startDate;
      }
    }
    return /* @__PURE__ */ new Date();
  };
  var cloneDate = function cloneDate2(date) {
    return isValidDate(date) ? new Date(date.valueOf()) : date;
  };
  var isValidDate = function isValidDate2(date) {
    return date instanceof Date && !isNaN(date);
  };
  var convertTo24Hour = function convertTo24Hour2(hour, pm) {
    if (props.hourFormat == "12") {
      return hour === 12 ? pm ? 12 : 0 : pm ? hour + 12 : hour;
    }
    return hour;
  };
  var validateHour = function validateHour2(hour, value) {
    var valid = true;
    var valueDateString = value ? value.toDateString() : null;
    if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
      if (props.minDate.getHours() > hour) {
        valid = false;
      }
    }
    if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
      if (props.maxDate.getHours() < hour) {
        valid = false;
      }
    }
    return valid;
  };
  var validateMinute = function validateMinute2(minute, value) {
    var valid = true;
    var valueDateString = value ? value.toDateString() : null;
    if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
      if (value.getHours() === props.minDate.getHours()) {
        if (props.minDate.getMinutes() > minute) {
          valid = false;
        }
      }
    }
    if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
      if (value.getHours() === props.maxDate.getHours()) {
        if (props.maxDate.getMinutes() < minute) {
          valid = false;
        }
      }
    }
    return valid;
  };
  var validateSecond = function validateSecond2(second, value) {
    var valid = true;
    var valueDateString = value ? value.toDateString() : null;
    if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
      if (value.getHours() === props.minDate.getHours() && value.getMinutes() === props.minDate.getMinutes()) {
        if (props.minDate.getSeconds() > second) {
          valid = false;
        }
      }
    }
    if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
      if (value.getHours() === props.maxDate.getHours() && value.getMinutes() === props.maxDate.getMinutes()) {
        if (props.maxDate.getSeconds() < second) {
          valid = false;
        }
      }
    }
    return valid;
  };
  var validateMillisecond = function validateMillisecond2(millisecond, value) {
    var valid = true;
    var valueDateString = value ? value.toDateString() : null;
    if (props.minDate && valueDateString && props.minDate.toDateString() === valueDateString) {
      if (value.getHours() === props.minDate.getHours() && value.getSeconds() === props.minDate.getSeconds() && value.getMinutes() === props.minDate.getMinutes()) {
        if (props.minDate.getMilliseconds() > millisecond) {
          valid = false;
        }
      }
    }
    if (props.maxDate && valueDateString && props.maxDate.toDateString() === valueDateString) {
      if (value.getHours() === props.maxDate.getHours() && value.getSeconds() === props.maxDate.getSeconds() && value.getMinutes() === props.maxDate.getMinutes()) {
        if (props.maxDate.getMilliseconds() < millisecond) {
          valid = false;
        }
      }
    }
    return valid;
  };
  var validateDate = function validateDate2(value) {
    if (props.yearNavigator) {
      var viewYear = value.getFullYear();
      var minRangeYear = props.yearRange ? parseInt(props.yearRange.split(":")[0], 10) : null;
      var maxRangeYear = props.yearRange ? parseInt(props.yearRange.split(":")[1], 10) : null;
      var minYear = props.minDate && minRangeYear != null ? Math.max(props.minDate.getFullYear(), minRangeYear) : props.minDate || minRangeYear;
      var maxYear = props.maxDate && maxRangeYear != null ? Math.min(props.maxDate.getFullYear(), maxRangeYear) : props.maxDate || maxRangeYear;
      if (minYear && minYear > viewYear) {
        viewYear = minYear;
      }
      if (maxYear && maxYear < viewYear) {
        viewYear = maxYear;
      }
      value.setFullYear(viewYear);
    }
    if (props.monthNavigator && props.view !== "month") {
      var viewMonth = value.getMonth();
      var viewMonthWithMinMax = parseInt(isInMinYear(value) && Math.max(props.minDate.getMonth(), viewMonth).toString() || isInMaxYear(value) && Math.min(props.maxDate.getMonth(), viewMonth).toString() || viewMonth);
      value.setMonth(viewMonthWithMinMax);
    }
  };
  var updateTime = function updateTime2(event, hour, minute, second, millisecond) {
    var newDateTime = getCurrentDateTime();
    newDateTime.setHours(hour);
    newDateTime.setMinutes(minute);
    newDateTime.setSeconds(second);
    newDateTime.setMilliseconds(millisecond);
    if (isMultipleSelection()) {
      if (props.value && props.value.length) {
        var value = _toConsumableArray(props.value);
        value[value.length - 1] = newDateTime;
        newDateTime = value;
      } else {
        newDateTime = [newDateTime];
      }
    } else if (isRangeSelection()) {
      if (props.value && props.value.length) {
        var startDate = props.value[0];
        var endDate = props.value[1];
        newDateTime = endDate ? [startDate, newDateTime] : [newDateTime, null];
      } else {
        newDateTime = [newDateTime, null];
      }
    }
    updateModel(event, newDateTime);
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        value: newDateTime
      });
    }
    updateInputfield(newDateTime);
  };
  var updateViewDate = function updateViewDate2(event, value) {
    validateDate(value);
    if (props.onViewDateChange) {
      props.onViewDateChange({
        originalEvent: event,
        value
      });
    } else {
      viewStateChanged.current = true;
      setViewDateState(value);
    }
    setCurrentMonth(value.getMonth());
    setCurrentYear(value.getFullYear());
  };
  var setNavigationState = function setNavigationState2(newViewDate) {
    if (!props.showMinMaxRange || props.view !== "date" || !overlayRef.current) {
      return;
    }
    var navPrev = DomHandler.findSingle(overlayRef.current, ".p-datepicker-prev");
    var navNext = DomHandler.findSingle(overlayRef.current, ".p-datepicker-next");
    if (props.disabled) {
      DomHandler.addClass(navPrev, "p-disabled");
      DomHandler.addClass(navNext, "p-disabled");
      return;
    }
    if (props.minDate) {
      var firstDayOfMonth = cloneDate(newViewDate);
      if (firstDayOfMonth.getMonth() === 0) {
        firstDayOfMonth.setMonth(11, 1);
        firstDayOfMonth.setFullYear(firstDayOfMonth.getFullYear() - 1);
      } else {
        firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() - 1, 1);
      }
      firstDayOfMonth.setHours(0);
      firstDayOfMonth.setMinutes(0);
      firstDayOfMonth.setSeconds(0);
      if (props.minDate > firstDayOfMonth) {
        DomHandler.addClass(navPrev, "p-disabled");
      } else {
        DomHandler.removeClass(navPrev, "p-disabled");
      }
    }
    if (props.maxDate) {
      var lastDayOfMonth = cloneDate(newViewDate);
      if (lastDayOfMonth.getMonth() === 11) {
        lastDayOfMonth.setMonth(0, 1);
        lastDayOfMonth.setFullYear(lastDayOfMonth.getFullYear() + 1);
      } else {
        lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1, 1);
      }
      lastDayOfMonth.setHours(0);
      lastDayOfMonth.setMinutes(0);
      lastDayOfMonth.setSeconds(0);
      lastDayOfMonth.setSeconds(-1);
      if (props.maxDate < lastDayOfMonth) {
        DomHandler.addClass(navNext, "p-disabled");
      } else {
        DomHandler.removeClass(navNext, "p-disabled");
      }
    }
  };
  var onDateCellKeydown = function onDateCellKeydown2(event, date, groupIndex) {
    var cellContent = event.currentTarget;
    var cell = cellContent.parentElement;
    switch (event.which) {
      case 40: {
        cellContent.tabIndex = "-1";
        var cellIndex = DomHandler.index(cell);
        var nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          var focusCell = nextRow.children[cellIndex].children[0];
          if (DomHandler.hasClass(focusCell, "p-disabled")) {
            navigation.current = {
              backward: false
            };
            navForward(event);
          } else {
            nextRow.children[cellIndex].children[0].tabIndex = "0";
            nextRow.children[cellIndex].children[0].focus();
          }
        } else {
          navigation.current = {
            backward: false
          };
          navForward(event);
        }
        event.preventDefault();
        break;
      }
      case 38: {
        cellContent.tabIndex = "-1";
        var _cellIndex = DomHandler.index(cell);
        var prevRow = cell.parentElement.previousElementSibling;
        if (prevRow) {
          var _focusCell = prevRow.children[_cellIndex].children[0];
          if (DomHandler.hasClass(_focusCell, "p-disabled")) {
            navigation.current = {
              backward: true
            };
            navBackward(event);
          } else {
            _focusCell.tabIndex = "0";
            _focusCell.focus();
          }
        } else {
          navigation.current = {
            backward: true
          };
          navBackward(event);
        }
        event.preventDefault();
        break;
      }
      case 37: {
        cellContent.tabIndex = "-1";
        var prevCell = cell.previousElementSibling;
        if (prevCell) {
          var _focusCell2 = prevCell.children[0];
          if (DomHandler.hasClass(_focusCell2, "p-disabled")) {
            navigateToMonth(true, groupIndex, event);
          } else {
            _focusCell2.tabIndex = "0";
            _focusCell2.focus();
          }
        } else {
          navigateToMonth(true, groupIndex, event);
        }
        event.preventDefault();
        break;
      }
      case 39: {
        cellContent.tabIndex = "-1";
        var nextCell = cell.nextElementSibling;
        if (nextCell) {
          var _focusCell3 = nextCell.children[0];
          if (DomHandler.hasClass(_focusCell3, "p-disabled")) {
            navigateToMonth(false, groupIndex, event);
          } else {
            _focusCell3.tabIndex = "0";
            _focusCell3.focus();
          }
        } else {
          navigateToMonth(false, groupIndex, event);
        }
        event.preventDefault();
        break;
      }
      case 13: {
        onDateSelect(event, date);
        event.preventDefault();
        break;
      }
      case 27: {
        hide(null, reFocusInputField);
        event.preventDefault();
        break;
      }
      case 9: {
        trapFocus(event);
        break;
      }
    }
  };
  var navigateToMonth = function navigateToMonth2(prev, groupIndex, event) {
    if (prev) {
      if (props.numberOfMonths === 1 || groupIndex === 0) {
        navigation.current = {
          backward: true
        };
        navBackward(event);
      } else {
        var prevMonthContainer = overlayRef.current.children[groupIndex - 1];
        var cells = DomHandler.find(prevMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled)");
        var focusCell = cells[cells.length - 1];
        focusCell.tabIndex = "0";
        focusCell.focus();
      }
    } else {
      if (props.numberOfMonths === 1 || groupIndex === props.numberOfMonths - 1) {
        navigation.current = {
          backward: false
        };
        navForward(event);
      } else {
        var nextMonthContainer = overlayRef.current.children[groupIndex + 1];
        var _focusCell4 = DomHandler.findSingle(nextMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled)");
        _focusCell4.tabIndex = "0";
        _focusCell4.focus();
      }
    }
  };
  var onDateSelect = function onDateSelect2(event, dateMeta, timeMeta) {
    if (props.disabled || !dateMeta.selectable) {
      event.preventDefault();
      return;
    }
    DomHandler.find(overlayRef.current, ".p-datepicker-calendar td span:not(.p-disabled)").forEach(function(cell) {
      return cell.tabIndex = -1;
    });
    event.currentTarget.focus();
    if (isMultipleSelection()) {
      if (isSelected(dateMeta)) {
        var value = props.value.filter(function(date, i) {
          return !isDateEquals(date, dateMeta);
        });
        updateModel(event, value);
        updateInputfield(value);
      } else if (!props.maxDateCount || !props.value || props.maxDateCount > props.value.length) {
        selectDate(event, dateMeta, timeMeta);
      }
    } else {
      selectDate(event, dateMeta, timeMeta);
    }
    if (!props.inline && isSingleSelection() && (!props.showTime || props.hideOnDateTimeSelect)) {
      setTimeout(function() {
        hide("dateselect");
      }, 100);
      if (touchUIMask.current) {
        disableModality();
      }
    }
    event.preventDefault();
  };
  var selectTime = function selectTime2(date, timeMeta) {
    if (props.showTime) {
      var hours, minutes, seconds, milliseconds;
      if (timeMeta) {
        hours = timeMeta.hours;
        minutes = timeMeta.minutes;
        seconds = timeMeta.seconds;
        milliseconds = timeMeta.milliseconds;
      } else {
        var time = getCurrentDateTime();
        var _ref2 = [time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()];
        hours = _ref2[0];
        minutes = _ref2[1];
        seconds = _ref2[2];
        milliseconds = _ref2[3];
      }
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(seconds);
      date.setMilliseconds(milliseconds);
    }
  };
  var selectDate = function selectDate2(event, dateMeta, timeMeta) {
    var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
    selectTime(date, timeMeta);
    if (props.minDate && props.minDate > date) {
      date = props.minDate;
    }
    if (props.maxDate && props.maxDate < date) {
      date = props.maxDate;
    }
    var selectedValues = date;
    if (isSingleSelection()) {
      updateModel(event, date);
    } else if (isMultipleSelection()) {
      selectedValues = props.value ? [].concat(_toConsumableArray(props.value), [date]) : [date];
      updateModel(event, selectedValues);
    } else if (isRangeSelection()) {
      if (props.value && props.value.length) {
        var startDate = props.value[0];
        var endDate = props.value[1];
        if (!endDate) {
          if (date.getTime() >= startDate.getTime()) {
            endDate = date;
          } else {
            endDate = startDate;
            startDate = date;
          }
        } else {
          startDate = date;
          endDate = null;
        }
        selectedValues = [startDate, endDate];
        updateModel(event, selectedValues);
      } else {
        selectedValues = [date, null];
        updateModel(event, selectedValues);
      }
    }
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        value: date
      });
    }
    updateInputfield(selectedValues);
  };
  var decrementDecade = function decrementDecade2() {
    var _currentYear = currentYear - 10;
    setCurrentYear(_currentYear);
    return _currentYear;
  };
  var incrementDecade = function incrementDecade2() {
    var _currentYear = currentYear + 10;
    setCurrentYear(_currentYear);
    return _currentYear;
  };
  var switchToMonthView = function switchToMonthView2(event) {
    setCurrentView("month");
    event.preventDefault();
  };
  var switchToYearView = function switchToYearView2(event) {
    setCurrentView("year");
    event.preventDefault();
  };
  var onMonthSelect = function onMonthSelect2(event, month) {
    if (props.view === "month") {
      onDateSelect(event, {
        year: currentYear,
        month,
        day: 1,
        selectable: true
      });
      event.preventDefault();
    } else {
      setCurrentMonth(month);
      createMonthsMeta(month, currentYear);
      var currentDate = cloneDate(getCurrentDateTime());
      currentDate.setDate(1);
      currentDate.setMonth(month);
      currentDate.setYear(currentYear);
      setViewDateState(currentDate);
      setCurrentView("date");
      props.onMonthChange && props.onMonthChange({
        month: month + 1,
        year: currentYear
      });
    }
  };
  var onYearSelect = function onYearSelect2(event, year) {
    if (props.view === "year") {
      onDateSelect(event, {
        year,
        month: 0,
        day: 1,
        selectable: true
      });
    } else {
      setCurrentYear(year);
      setCurrentView("month");
      props.onMonthChange && props.onMonthChange({
        month: currentMonth + 1,
        year
      });
    }
  };
  var updateModel = function updateModel2(event, value) {
    if (props.onChange) {
      var newValue = cloneDate(value);
      viewStateChanged.current = true;
      props.onChange({
        originalEvent: event,
        value: newValue,
        stopPropagation: function stopPropagation() {
          event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value: newValue
        }
      });
    }
  };
  var show = function show2(type) {
    if (props.onVisibleChange) {
      props.onVisibleChange({
        visible: true,
        type
      });
    } else {
      setOverlayVisibleState(true);
      overlayEventListener.current = function(e) {
        if (!isOutsideClicked(e)) {
          isOverlayClicked.current = true;
        }
      };
      OverlayService.on("overlay-click", overlayEventListener.current);
    }
  };
  var hide = function hide2(type, callback) {
    var _hideCallback = function _hideCallback2() {
      viewStateChanged.current = false;
      ignoreFocusFunctionality.current = false;
      isOverlayClicked.current = false;
      callback && callback();
      OverlayService.off("overlay-click", overlayEventListener.current);
      overlayEventListener.current = null;
    };
    props.touchUI && disableModality();
    if (props.onVisibleChange) {
      props.onVisibleChange({
        visible: false,
        type,
        callback: _hideCallback
      });
    } else {
      setOverlayVisibleState(false);
      _hideCallback();
    }
  };
  var onOverlayEnter = function onOverlayEnter2() {
    if (props.autoZIndex) {
      var key = props.touchUI ? "modal" : "overlay";
      ZIndexUtils.set(key, overlayRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex[key]);
    }
    alignOverlay();
  };
  var onOverlayEntered = function onOverlayEntered2() {
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit2() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited2() {
    ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var appendDisabled = function appendDisabled2() {
    return props.appendTo === "self" || props.inline;
  };
  var alignOverlay = function alignOverlay2() {
    if (props.touchUI) {
      enableModality();
    } else if (overlayRef && overlayRef.current && inputRef && inputRef.current) {
      DomHandler.alignOverlay(overlayRef.current, inputRef.current, props.appendTo || PrimeReact.appendTo);
      if (appendDisabled()) {
        DomHandler.relativePosition(overlayRef.current, inputRef.current);
      } else {
        if (currentView === "date") {
          overlayRef.current.style.width = DomHandler.getOuterWidth(overlayRef.current) + "px";
          overlayRef.current.style.minWidth = DomHandler.getOuterWidth(inputRef.current) + "px";
        } else {
          overlayRef.current.style.width = DomHandler.getOuterWidth(inputRef.current) + "px";
        }
        DomHandler.absolutePosition(overlayRef.current, inputRef.current);
      }
    }
  };
  var enableModality = function enableModality2() {
    if (!touchUIMask.current) {
      touchUIMask.current = document.createElement("div");
      touchUIMask.current.style.zIndex = String(ZIndexUtils.get(overlayRef.current) - 1);
      DomHandler.addMultipleClasses(touchUIMask.current, "p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay-enter");
      touchUIMaskClickListener.current = function() {
        disableModality();
        hide();
      };
      touchUIMask.current.addEventListener("click", touchUIMaskClickListener.current);
      document.body.appendChild(touchUIMask.current);
      DomHandler.addClass(document.body, "p-overflow-hidden");
    }
  };
  var disableModality = function disableModality2() {
    if (touchUIMask.current) {
      DomHandler.addClass(touchUIMask.current, "p-component-overlay-leave");
      touchUIMask.current.addEventListener("animationend", function() {
        destroyMask();
      });
    }
  };
  var destroyMask = function destroyMask2() {
    if (touchUIMask.current) {
      touchUIMask.current.removeEventListener("click", touchUIMaskClickListener.current);
      touchUIMaskClickListener.current = null;
      document.body.removeChild(touchUIMask.current);
      touchUIMask.current = null;
    }
    var bodyChildren = document.body.children;
    var hasBlockerMasks;
    for (var i = 0; i < bodyChildren.length; i++) {
      var bodyChild = bodyChildren[i];
      if (DomHandler.hasClass(bodyChild, "p-datepicker-mask-scrollblocker")) {
        hasBlockerMasks = true;
        break;
      }
    }
    if (!hasBlockerMasks) {
      DomHandler.removeClass(document.body, "p-overflow-hidden");
    }
  };
  var isOutsideClicked = function isOutsideClicked2(event) {
    return elementRef.current && !(elementRef.current.isSameNode(event.target) || isNavIconClicked(event.target) || elementRef.current.contains(event.target) || overlayRef.current && overlayRef.current.contains(event.target));
  };
  var isNavIconClicked = function isNavIconClicked2(target) {
    return DomHandler.hasClass(target, "p-datepicker-prev") || DomHandler.hasClass(target, "p-datepicker-prev-icon") || DomHandler.hasClass(target, "p-datepicker-next") || DomHandler.hasClass(target, "p-datepicker-next-icon");
  };
  var getFirstDayOfMonthIndex = function getFirstDayOfMonthIndex2(month, year) {
    var day = /* @__PURE__ */ new Date();
    day.setDate(1);
    day.setMonth(month);
    day.setFullYear(year);
    var dayIndex = day.getDay() + getSundayIndex();
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
  };
  var getDaysCountInMonth = function getDaysCountInMonth2(month, year) {
    return 32 - daylightSavingAdjust(new Date(year, month, 32)).getDate();
  };
  var getDaysCountInPrevMonth = function getDaysCountInPrevMonth2(month, year) {
    var prev = getPreviousMonthAndYear(month, year);
    return getDaysCountInMonth(prev.month, prev.year);
  };
  var daylightSavingAdjust = function daylightSavingAdjust2(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  };
  var getPreviousMonthAndYear = function getPreviousMonthAndYear2(month, year) {
    var m, y;
    if (month === 0) {
      m = 11;
      y = year - 1;
    } else {
      m = month - 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  };
  var getNextMonthAndYear = function getNextMonthAndYear2(month, year) {
    var m, y;
    if (month === 11) {
      m = 0;
      y = year + 1;
    } else {
      m = month + 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  };
  var getSundayIndex = function getSundayIndex2() {
    var firstDayOfWeek = localeOption("firstDayOfWeek", props.locale);
    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
  };
  var createWeekDaysMeta = function createWeekDaysMeta2() {
    var weekDays = [];
    var _localeOptions = localeOptions(props.locale), dayIndex = _localeOptions.firstDayOfWeek, dayNamesMin = _localeOptions.dayNamesMin;
    for (var i = 0; i < 7; i++) {
      weekDays.push(dayNamesMin[dayIndex]);
      dayIndex = dayIndex === 6 ? 0 : ++dayIndex;
    }
    return weekDays;
  };
  var createMonthsMeta = function createMonthsMeta2(month, year) {
    var months = [];
    for (var i = 0; i < props.numberOfMonths; i++) {
      var m = month + i;
      var y = year;
      if (m > 11) {
        m = m % 11 - 1;
        y = year + 1;
      }
      months.push(createMonthMeta(m, y));
    }
    return months;
  };
  var createMonthMeta = function createMonthMeta2(month, year) {
    var dates = [];
    var firstDay = getFirstDayOfMonthIndex(month, year);
    var daysLength = getDaysCountInMonth(month, year);
    var prevMonthDaysLength = getDaysCountInPrevMonth(month, year);
    var dayNo = 1;
    var today = /* @__PURE__ */ new Date();
    var weekNumbers = [];
    var monthRows = Math.ceil((daysLength + firstDay) / 7);
    for (var i = 0; i < monthRows; i++) {
      var week = [];
      if (i === 0) {
        for (var j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
          var prev = getPreviousMonthAndYear(month, year);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: isToday(today, j, prev.month, prev.year),
            selectable: isSelectable(j, prev.month, prev.year, true)
          });
        }
        var remainingDaysLength = 7 - week.length;
        for (var _j = 0; _j < remainingDaysLength; _j++) {
          week.push({
            day: dayNo,
            month,
            year,
            today: isToday(today, dayNo, month, year),
            selectable: isSelectable(dayNo, month, year, false)
          });
          dayNo++;
        }
      } else {
        for (var _j2 = 0; _j2 < 7; _j2++) {
          if (dayNo > daysLength) {
            var next = getNextMonthAndYear(month, year);
            week.push({
              day: dayNo - daysLength,
              month: next.month,
              year: next.year,
              otherMonth: true,
              today: isToday(today, dayNo - daysLength, next.month, next.year),
              selectable: isSelectable(dayNo - daysLength, next.month, next.year, true)
            });
          } else {
            week.push({
              day: dayNo,
              month,
              year,
              today: isToday(today, dayNo, month, year),
              selectable: isSelectable(dayNo, month, year, false)
            });
          }
          dayNo++;
        }
      }
      if (props.showWeek) {
        weekNumbers.push(getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
      }
      dates.push(week);
    }
    return {
      month,
      year,
      dates,
      weekNumbers
    };
  };
  var getWeekNumber = function getWeekNumber2(date) {
    var checkDate = cloneDate(date);
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    var time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
  };
  var isSelectable = function isSelectable2(day, month, year, otherMonth) {
    var validMin = true;
    var validMax = true;
    var validDate = true;
    var validDay = true;
    var validMonth = true;
    if (props.minDate) {
      if (props.minDate.getFullYear() > year) {
        validMin = false;
      } else if (props.minDate.getFullYear() === year) {
        if (props.minDate.getMonth() > month) {
          validMin = false;
        } else if (props.minDate.getMonth() === month) {
          if (day > 0 && props.minDate.getDate() > day) {
            validMin = false;
          }
        }
      }
    }
    if (props.maxDate) {
      if (props.maxDate.getFullYear() < year) {
        validMax = false;
      } else if (props.maxDate.getFullYear() === year) {
        if (props.maxDate.getMonth() < month) {
          validMax = false;
        } else if (props.maxDate.getMonth() === month) {
          if (day > 0 && props.maxDate.getDate() < day) {
            validMax = false;
          }
        }
      }
    }
    if (props.disabledDates) {
      validDate = !isDateDisabled(day, month, year);
    }
    if (props.disabledDays) {
      validDay = !isDayDisabled(day, month, year);
    }
    if (props.selectOtherMonths === false && otherMonth) {
      validMonth = false;
    }
    return validMin && validMax && validDate && validDay && validMonth;
  };
  var isSelectableTime = function isSelectableTime2(value) {
    var validMin = true;
    var validMax = true;
    if (props.minDate && props.minDate.toDateString() === value.toDateString()) {
      if (props.minDate.getHours() > value.getHours()) {
        validMin = false;
      } else if (props.minDate.getHours() === value.getHours()) {
        if (props.minDate.getMinutes() > value.getMinutes()) {
          validMin = false;
        } else if (props.minDate.getMinutes() === value.getMinutes()) {
          if (props.minDate.getSeconds() > value.getSeconds()) {
            validMin = false;
          } else if (props.minDate.getSeconds() === value.getSeconds()) {
            if (props.minDate.getMilliseconds() > value.getMilliseconds()) {
              validMin = false;
            }
          }
        }
      }
    }
    if (props.maxDate && props.maxDate.toDateString() === value.toDateString()) {
      if (props.maxDate.getHours() < value.getHours()) {
        validMax = false;
      } else if (props.maxDate.getHours() === value.getHours()) {
        if (props.maxDate.getMinutes() < value.getMinutes()) {
          validMax = false;
        } else if (props.maxDate.getMinutes() === value.getMinutes()) {
          if (props.maxDate.getSeconds() < value.getSeconds()) {
            validMax = false;
          } else if (props.maxDate.getSeconds() === value.getSeconds()) {
            if (props.maxDate.getMilliseconds() < value.getMilliseconds()) {
              validMax = false;
            }
          }
        }
      }
    }
    return validMin && validMax;
  };
  var isSelected = function isSelected2(dateMeta) {
    if (props.value) {
      if (isSingleSelection()) {
        return isDateEquals(props.value, dateMeta);
      } else if (isMultipleSelection()) {
        var selected = false;
        var _iterator = _createForOfIteratorHelper(props.value), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var date = _step.value;
            selected = isDateEquals(date, dateMeta);
            if (selected) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return selected;
      } else if (isRangeSelection()) {
        if (props.value[1])
          return isDateEquals(props.value[0], dateMeta) || isDateEquals(props.value[1], dateMeta) || isDateBetween(props.value[0], props.value[1], dateMeta);
        else {
          return isDateEquals(props.value[0], dateMeta);
        }
      }
    } else {
      return false;
    }
  };
  var isComparable = function isComparable2() {
    return props.value != null && typeof props.value !== "string";
  };
  var isMonthSelected = function isMonthSelected2(month) {
    if (isComparable()) {
      var value = isRangeSelection() ? props.value[0] : props.value;
      return !isMultipleSelection() ? value.getMonth() === month && value.getFullYear() === currentYear : false;
    }
    return false;
  };
  var isYearSelected = function isYearSelected2(year) {
    if (isComparable()) {
      var value = isRangeSelection() ? props.value[0] : props.value;
      return !isMultipleSelection() && isComparable() ? value.getFullYear() === year : false;
    }
    return false;
  };
  var switchViewButtonDisabled = function switchViewButtonDisabled2() {
    return props.numberOfMonths > 1 || props.disabled;
  };
  var isDateEquals = function isDateEquals2(value, dateMeta) {
    if (value && value instanceof Date)
      return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
    else
      return false;
  };
  var isDateBetween = function isDateBetween2(start, end, dateMeta) {
    var between = false;
    if (start && end) {
      var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
      return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
    }
    return between;
  };
  var isSingleSelection = function isSingleSelection2() {
    return props.selectionMode === "single";
  };
  var isRangeSelection = function isRangeSelection2() {
    return props.selectionMode === "range";
  };
  var isMultipleSelection = function isMultipleSelection2() {
    return props.selectionMode === "multiple";
  };
  var isToday = function isToday2(today, day, month, year) {
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  };
  var isDateDisabled = function isDateDisabled2(day, month, year) {
    return props.disabledDates ? props.disabledDates.some(function(d) {
      return d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;
    }) : false;
  };
  var isDayDisabled = function isDayDisabled2(day, month, year) {
    if (props.disabledDays) {
      var weekday = new Date(year, month, day);
      var weekdayNumber = weekday.getDay();
      return props.disabledDays.indexOf(weekdayNumber) !== -1;
    }
    return false;
  };
  var updateInputfield = function updateInputfield2(value) {
    if (!inputRef.current) {
      return;
    }
    var formattedValue = "";
    if (value) {
      try {
        if (isSingleSelection()) {
          formattedValue = isValidDate(value) ? formatDateTime(value) : props.keepInvalid ? value : "";
        } else if (isMultipleSelection()) {
          for (var i = 0; i < value.length; i++) {
            var selectedValue = value[i];
            var dateAsString = isValidDate(selectedValue) ? formatDateTime(selectedValue) : "";
            formattedValue += dateAsString;
            if (i !== value.length - 1) {
              formattedValue += ", ";
            }
          }
        } else if (isRangeSelection()) {
          if (value && value.length) {
            var startDate = value[0];
            var endDate = value[1];
            formattedValue = isValidDate(startDate) ? formatDateTime(startDate) : "";
            if (endDate) {
              formattedValue += isValidDate(endDate) ? " - " + formatDateTime(endDate) : "";
            }
          }
        }
      } catch (err) {
        formattedValue = value;
      }
    }
    inputRef.current.value = formattedValue;
  };
  var formatDateTime = function formatDateTime2(date) {
    if (props.formatDateTime) {
      return props.formatDateTime(date);
    }
    var formattedValue = null;
    if (date) {
      if (props.timeOnly) {
        formattedValue = formatTime(date);
      } else {
        formattedValue = formatDate(date, getDateFormat());
        if (props.showTime) {
          formattedValue += " " + formatTime(date);
        }
      }
    }
    return formattedValue;
  };
  var formatDate = function formatDate2(date, format) {
    if (!date) {
      return "";
    }
    var iFormat;
    var lookAhead = function lookAhead2(match) {
      var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, formatNumber = function formatNumber2(match, value, len) {
      var num = "" + value;
      if (lookAhead(match)) {
        while (num.length < len) {
          num = "0" + num;
        }
      }
      return num;
    }, formatName = function formatName2(match, value, shortNames, longNames) {
      return lookAhead(match) ? longNames[value] : shortNames[value];
    };
    var output = "";
    var literal = false;
    var _localeOptions2 = localeOptions(props.locale), dayNamesShort = _localeOptions2.dayNamesShort, dayNames = _localeOptions2.dayNames, monthNamesShort = _localeOptions2.monthNamesShort, monthNames = _localeOptions2.monthNames;
    if (date) {
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            output += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              output += formatNumber("d", date.getDate(), 2);
              break;
            case "D":
              output += formatName("D", date.getDay(), dayNamesShort, dayNames);
              break;
            case "o":
              output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              output += formatNumber("m", date.getMonth() + 1, 2);
              break;
            case "M":
              output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
              break;
            case "y":
              output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
              break;
            case "@":
              output += date.getTime();
              break;
            case "!":
              output += date.getTime() * 1e4 + ticksTo1970;
              break;
            case "'":
              if (lookAhead("'")) {
                output += "'";
              } else {
                literal = true;
              }
              break;
            default:
              output += format.charAt(iFormat);
          }
        }
      }
    }
    return output;
  };
  var formatTime = function formatTime2(date) {
    if (!date) {
      return "";
    }
    var output = "";
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    if (props.hourFormat === "12" && hours > 11 && hours !== 12) {
      hours -= 12;
    }
    if (props.hourFormat === "12") {
      output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
    } else {
      output += hours < 10 ? "0" + hours : hours;
    }
    output += ":";
    output += minutes < 10 ? "0" + minutes : minutes;
    if (props.showSeconds) {
      output += ":";
      output += seconds < 10 ? "0" + seconds : seconds;
    }
    if (props.showMillisec) {
      output += ".";
      output += milliseconds < 100 ? (milliseconds < 10 ? "00" : "0") + milliseconds : milliseconds;
    }
    if (props.hourFormat === "12") {
      output += date.getHours() > 11 ? " PM" : " AM";
    }
    return output;
  };
  var parseValueFromString = function parseValueFromString2(text) {
    if (!text || text.trim().length === 0) {
      return null;
    }
    var value;
    if (isSingleSelection()) {
      value = parseDateTime(text);
    } else if (isMultipleSelection()) {
      var tokens = text.split(",");
      value = [];
      var _iterator2 = _createForOfIteratorHelper(tokens), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var token = _step2.value;
          value.push(parseDateTime(token.trim()));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else if (isRangeSelection()) {
      var _tokens = text.split(" - ");
      value = [];
      for (var i = 0; i < _tokens.length; i++) {
        value[i] = parseDateTime(_tokens[i].trim());
      }
    }
    return value;
  };
  var parseDateTime = function parseDateTime2(text) {
    if (props.parseDateTime) {
      return props.parseDateTime(text);
    }
    var date;
    var parts = text.split(" ");
    if (props.timeOnly) {
      date = /* @__PURE__ */ new Date();
      populateTime(date, parts[0], parts[1]);
    } else {
      if (props.showTime) {
        date = parseDate(parts[0], getDateFormat());
        populateTime(date, parts[1], parts[2]);
      } else {
        date = parseDate(text, getDateFormat());
      }
    }
    return date;
  };
  var populateTime = function populateTime2(value, timeString, ampm) {
    if (props.hourFormat === "12" && ampm !== "PM" && ampm !== "AM") {
      throw new Error("Invalid Time");
    }
    var time = parseTime(timeString, ampm);
    value.setHours(time.hour);
    value.setMinutes(time.minute);
    value.setSeconds(time.second);
    value.setMilliseconds(time.millisecond);
  };
  var parseTime = function parseTime2(value, ampm) {
    value = props.showMillisec ? value.replace(".", ":") : value;
    var tokens = value.split(":");
    var validTokenLength = props.showSeconds ? 3 : 2;
    validTokenLength = props.showMillisec ? validTokenLength + 1 : validTokenLength;
    if (tokens.length !== validTokenLength || tokens[0].length !== 2 || tokens[1].length !== 2 || props.showSeconds && tokens[2].length !== 2 || props.showMillisec && tokens[3].length !== 3) {
      throw new Error("Invalid time");
    }
    var h = parseInt(tokens[0], 10);
    var m = parseInt(tokens[1], 10);
    var s = props.showSeconds ? parseInt(tokens[2], 10) : null;
    var ms = props.showMillisec ? parseInt(tokens[3], 10) : null;
    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || props.hourFormat === "12" && h > 12 || props.showSeconds && (isNaN(s) || s > 59) || props.showMillisec && (isNaN(s) || s > 1e3)) {
      throw new Error("Invalid time");
    } else {
      if (props.hourFormat === "12" && h !== 12 && ampm === "PM") {
        h += 12;
      }
      return {
        hour: h,
        minute: m,
        second: s,
        millisecond: ms
      };
    }
  };
  var parseDate = function parseDate2(value, format) {
    if (format == null || value == null) {
      throw new Error("Invalid arguments");
    }
    value = _typeof(value) === "object" ? value.toString() : value + "";
    if (value === "") {
      return null;
    }
    var iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof props.shortYearCutoff !== "string" ? props.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(props.shortYearCutoff, 10), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function lookAhead2(match) {
      var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, getNumber = function getNumber2(match) {
      var isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
      if (!num) {
        throw new Error("Missing number at position " + iValue);
      }
      iValue += num[0].length;
      return parseInt(num[0], 10);
    }, getName = function getName2(match, shortNames, longNames) {
      var index = -1;
      var arr = lookAhead(match) ? longNames : shortNames;
      var names = [];
      for (var i = 0; i < arr.length; i++) {
        names.push([i, arr[i]]);
      }
      names.sort(function(a, b) {
        return -(a[1].length - b[1].length);
      });
      for (var _i = 0; _i < names.length; _i++) {
        var name = names[_i][1];
        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
          index = names[_i][0];
          iValue += name.length;
          break;
        }
      }
      if (index !== -1) {
        return index + 1;
      } else {
        throw new Error("Unknown name at position " + iValue);
      }
    }, checkLiteral = function checkLiteral2() {
      if (value.charAt(iValue) !== format.charAt(iFormat)) {
        throw new Error("Unexpected literal at position " + iValue);
      }
      iValue++;
    };
    if (props.view === "month") {
      day = 1;
    }
    var _localeOptions3 = localeOptions(props.locale), dayNamesShort = _localeOptions3.dayNamesShort, dayNames = _localeOptions3.dayNames, monthNamesShort = _localeOptions3.monthNamesShort, monthNames = _localeOptions3.monthNames;
    for (iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
          literal = false;
        } else {
          checkLiteral();
        }
      } else {
        switch (format.charAt(iFormat)) {
          case "d":
            day = getNumber("d");
            break;
          case "D":
            getName("D", dayNamesShort, dayNames);
            break;
          case "o":
            doy = getNumber("o");
            break;
          case "m":
            month = getNumber("m");
            break;
          case "M":
            month = getName("M", monthNamesShort, monthNames);
            break;
          case "y":
            year = getNumber("y");
            break;
          case "@":
            date = new Date(getNumber("@"));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "!":
            date = new Date((getNumber("!") - ticksTo1970) / 1e4);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "'":
            if (lookAhead("'")) {
              checkLiteral();
            } else {
              literal = true;
            }
            break;
          default:
            checkLiteral();
        }
      }
    }
    if (iValue < value.length) {
      extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) {
        throw new Error("Extra/unparsed characters found in date: " + extra);
      }
    }
    if (year === -1) {
      year = (/* @__PURE__ */ new Date()).getFullYear();
    } else if (year < 100) {
      year += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
    }
    if (doy > -1) {
      month = 1;
      day = doy;
      do {
        dim = getDaysCountInMonth(year, month - 1);
        if (day <= dim) {
          break;
        }
        month++;
        day -= dim;
      } while (true);
    }
    date = daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
      throw new Error("Invalid date");
    }
    return date;
  };
  var isInMinYear = function isInMinYear2(viewDate) {
    return props.minDate && props.minDate.getFullYear() === viewDate.getFullYear();
  };
  var isInMaxYear = function isInMaxYear2(viewDate) {
    return props.maxDate && props.maxDate.getFullYear() === viewDate.getFullYear();
  };
  React5.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  useMountEffect(function() {
    var unbindMaskEvents = null;
    var viewDate = getViewDate(props.viewDate);
    validateDate(viewDate);
    setViewDateState(viewDate);
    setCurrentMonth(viewDate.getMonth());
    setCurrentYear(viewDate.getFullYear());
    setCurrentView(props.view);
    if (props.inline) {
      overlayRef && overlayRef.current.setAttribute(attributeSelector, "");
      if (!props.disabled) {
        initFocusableCell();
        if (props.numberOfMonths === 1) {
          overlayRef.current.style.width = DomHandler.getOuterWidth(overlayRef.current) + "px";
        }
      }
    } else if (props.mask) {
      unbindMaskEvents = mask(inputRef.current, {
        mask: props.mask,
        readOnly: props.readOnlyInput || props.disabled,
        onChange: function onChange(e) {
          !ignoreMaskChange.current && updateValueOnInput(e.originalEvent, e.value);
          ignoreMaskChange.current = false;
        },
        onBlur: function onBlur() {
          ignoreMaskChange.current = true;
        }
      }).unbindEvents;
    }
    if (props.value) {
      updateInputfield(props.value);
      setValue(props.value);
    }
    return function() {
      props.mask && unbindMaskEvents && unbindMaskEvents();
    };
  });
  useUpdateEffect(function() {
    setCurrentView(props.view);
  }, [props.view]);
  useUpdateEffect(function() {
    if (!props.onViewDateChange && !viewStateChanged.current) {
      setValue(props.value);
    }
  }, [props.onViewDateChange, props.value]);
  useUpdateEffect(function() {
    var newDate = props.value;
    if (previousValue !== newDate) {
      updateInputfield(newDate);
      if (!visible && newDate) {
        var viewDate = newDate;
        if (isMultipleSelection()) {
          if (newDate.length) {
            viewDate = newDate[newDate.length - 1];
          }
        } else if (isRangeSelection()) {
          if (newDate.length) {
            var startDate = newDate[0];
            var endDate = newDate[1];
            viewDate = endDate || startDate;
          }
        }
        if (viewDate instanceof Date) {
          validateDate(viewDate);
          setViewDateState(viewDate);
          setCurrentMonth(viewDate.getMonth());
          setCurrentYear(viewDate.getFullYear());
        }
      }
    }
  }, [props.value, visible]);
  useUpdateEffect(function() {
    updateInputfield(props.value);
  }, [props.dateFormat, props.hourFormat, props.timeOnly, props.showSeconds, props.showMillisec, props.showTime]);
  useUpdateEffect(function() {
    if (overlayRef.current) {
      setNavigationState(viewDateState);
      updateFocus();
    }
  });
  useUnmountEffect(function() {
    if (touchUIMask.current) {
      disableModality();
      touchUIMask.current = null;
    }
    ZIndexUtils.clear(overlayRef.current);
  });
  React5.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      hide,
      getCurrentDateTime,
      getViewDate,
      updateViewDate,
      focus: function focus() {
        return DomHandler.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  var setValue = function setValue2(propValue) {
    if (Array.isArray(propValue)) {
      propValue = propValue[0];
    }
    var prevPropValue = previousValue;
    if (Array.isArray(prevPropValue)) {
      prevPropValue = prevPropValue[0];
    }
    if (!prevPropValue && propValue || propValue && propValue instanceof Date && propValue.getTime() !== prevPropValue.getTime()) {
      var viewDate = props.viewDate && isValidDate(props.viewDate) ? props.viewDate : propValue && isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
      validateDate(viewDate);
      setViewDateState(viewDate);
      viewStateChanged.current = true;
    }
  };
  var createBackwardNavigator = function createBackwardNavigator2(isVisible) {
    var navigatorProps = isVisible ? {
      onClick: onPrevButtonClick,
      onKeyDown: function onKeyDown(e) {
        return onContainerButtonKeydown(e);
      }
    } : {
      style: {
        visibility: "hidden"
      }
    };
    var iconClassName = "p-datepicker-prev-icon";
    var icon = props.prevIcon || React5.createElement(ChevronLeftIcon, {
      className: iconClassName
    });
    var backwardNavigatorIcon = IconUtils.getJSXIcon(icon, {
      className: iconClassName
    }, {
      props
    });
    return React5.createElement("button", _extends5({
      type: "button",
      className: "p-datepicker-prev"
    }, navigatorProps), backwardNavigatorIcon, React5.createElement(Ripple, null));
  };
  var createForwardNavigator = function createForwardNavigator2(isVisible) {
    var navigatorProps = isVisible ? {
      onClick: onNextButtonClick,
      onKeyDown: function onKeyDown(e) {
        return onContainerButtonKeydown(e);
      }
    } : {
      style: {
        visibility: "hidden"
      }
    };
    var iconClassName = "p-datepicker-next-icon";
    var icon = props.nextIcon || React5.createElement(ChevronRightIcon, {
      className: iconClassName
    });
    var forwardNavigatorIcon = IconUtils.getJSXIcon(icon, {
      className: iconClassName
    }, {
      props
    });
    return React5.createElement("button", _extends5({
      type: "button",
      className: "p-datepicker-next"
    }, navigatorProps), forwardNavigatorIcon, React5.createElement(Ripple, null));
  };
  var createTitleMonthElement = function createTitleMonthElement2(month) {
    var monthNames = localeOption("monthNames", props.locale);
    if (props.monthNavigator && props.view !== "month") {
      var viewDate = getViewDate();
      var viewMonth = viewDate.getMonth();
      var displayedMonthOptions = monthNames.map(function(month2, index) {
        return (!isInMinYear(viewDate) || index >= props.minDate.getMonth()) && (!isInMaxYear(viewDate) || index <= props.maxDate.getMonth()) ? {
          label: month2,
          value: index,
          index
        } : null;
      }).filter(function(option) {
        return !!option;
      });
      var displayedMonthNames = displayedMonthOptions.map(function(option) {
        return option.label;
      });
      var _content = React5.createElement("select", {
        className: "p-datepicker-month",
        onChange: function onChange(e) {
          return onMonthDropdownChange(e, e.target.value);
        },
        value: viewMonth
      }, displayedMonthOptions.map(function(option) {
        return React5.createElement("option", {
          key: option.label,
          value: option.value
        }, option.label);
      }));
      if (props.monthNavigatorTemplate) {
        var defaultContentOptions = {
          onChange: onMonthDropdownChange,
          className: "p-datepicker-month",
          value: viewMonth,
          names: displayedMonthNames,
          options: displayedMonthOptions,
          element: _content,
          props
        };
        return ObjectUtils.getJSXElement(props.monthNavigatorTemplate, defaultContentOptions);
      }
      return _content;
    }
    return currentView === "date" && React5.createElement("button", {
      className: "p-datepicker-month p-link",
      onClick: switchToMonthView,
      disabled: switchViewButtonDisabled()
    }, monthNames[month]);
  };
  var createTitleYearElement = function createTitleYearElement2(metaYear) {
    if (props.yearNavigator) {
      var _yearOptions2 = [];
      var years = props.yearRange.split(":");
      var yearStart = parseInt(years[0], 10);
      var yearEnd = parseInt(years[1], 10);
      for (var i = yearStart; i <= yearEnd; i++) {
        _yearOptions2.push(i);
      }
      var viewDate = getViewDate();
      var viewYear = viewDate.getFullYear();
      var displayedYearNames = _yearOptions2.filter(function(year) {
        return !(props.minDate && props.minDate.getFullYear() > year) && !(props.maxDate && props.maxDate.getFullYear() < year);
      });
      var _content2 = React5.createElement("select", {
        className: "p-datepicker-year",
        onChange: function onChange(e) {
          return onYearDropdownChange(e, e.target.value);
        },
        value: viewYear
      }, displayedYearNames.map(function(year) {
        return React5.createElement("option", {
          key: year,
          value: year
        }, year);
      }));
      if (props.yearNavigatorTemplate) {
        var options = displayedYearNames.map(function(name, i2) {
          return {
            label: name,
            value: name,
            index: i2
          };
        });
        var defaultContentOptions = {
          onChange: onYearDropdownChange,
          className: "p-datepicker-year",
          value: viewYear,
          names: displayedYearNames,
          options,
          element: _content2,
          props
        };
        return ObjectUtils.getJSXElement(props.yearNavigatorTemplate, defaultContentOptions);
      }
      return _content2;
    }
    var displayYear = props.numberOfMonths > 1 ? metaYear : currentYear;
    return currentView !== "year" && React5.createElement("button", {
      className: "p-datepicker-year p-link",
      onClick: switchToYearView,
      disabled: switchViewButtonDisabled()
    }, displayYear);
  };
  var createTitleDecadeElement = function createTitleDecadeElement2() {
    var years = yearPickerValues();
    if (currentView === "year") {
      return React5.createElement("span", {
        className: "p-datepicker-decade"
      }, props.decadeTemplate ? props.decadeTemplate(years) : React5.createElement("span", null, "".concat(yearPickerValues()[0], " - ").concat(yearPickerValues()[yearPickerValues().length - 1])));
    }
    return null;
  };
  var createTitle = function createTitle2(monthMetaData) {
    var month = createTitleMonthElement(monthMetaData.month);
    var year = createTitleYearElement(monthMetaData.year);
    var decade = createTitleDecadeElement();
    return React5.createElement("div", {
      className: "p-datepicker-title"
    }, month, year, decade);
  };
  var createDayNames = function createDayNames2(weekDays) {
    var dayNames = weekDays.map(function(weekDay, index) {
      return React5.createElement("th", {
        key: "".concat(weekDay, "-").concat(index),
        scope: "col"
      }, React5.createElement("span", null, weekDay));
    });
    if (props.showWeek) {
      var weekHeader = React5.createElement("th", {
        scope: "col",
        key: "wn",
        className: "p-datepicker-weekheader p-disabled"
      }, React5.createElement("span", null, localeOption("weekHeader", props.locale)));
      return [weekHeader].concat(_toConsumableArray(dayNames));
    }
    return dayNames;
  };
  var createDateCellContent = function createDateCellContent2(date, className2, groupIndex) {
    var content2 = props.dateTemplate ? props.dateTemplate(date) : date.day;
    return React5.createElement("span", {
      className: className2,
      onClick: function onClick(e) {
        return onDateSelect(e, date);
      },
      onKeyDown: function onKeyDown(e) {
        return onDateCellKeydown(e, date, groupIndex);
      }
    }, content2, React5.createElement(Ripple, null));
  };
  var createWeek = function createWeek2(weekDates, weekNumber, groupIndex) {
    var week = weekDates.map(function(date) {
      var selected = isSelected(date);
      var cellClassName = classNames({
        "p-datepicker-other-month": date.otherMonth,
        "p-datepicker-today": date.today
      });
      var dateClassName = classNames({
        "p-highlight": selected,
        "p-disabled": !date.selectable
      });
      var content2 = date.otherMonth && !props.showOtherMonths ? null : createDateCellContent(date, dateClassName, groupIndex);
      return React5.createElement("td", {
        key: date.day,
        className: cellClassName
      }, content2);
    });
    if (props.showWeek) {
      var weekNumberCell = React5.createElement("td", {
        key: "wn" + weekNumber,
        className: "p-datepicker-weeknumber"
      }, React5.createElement("span", {
        className: "p-disabled"
      }, weekNumber));
      return [weekNumberCell].concat(_toConsumableArray(week));
    }
    return week;
  };
  var createDates = function createDates2(monthMetaData, groupIndex) {
    return monthMetaData.dates.map(function(weekDates, index) {
      return React5.createElement("tr", {
        key: index
      }, createWeek(weekDates, monthMetaData.weekNumbers[index], groupIndex));
    });
  };
  var createDateViewGrid = function createDateViewGrid2(monthMetaData, weekDays, groupIndex) {
    var dayNames = createDayNames(weekDays);
    var dates = createDates(monthMetaData, groupIndex);
    return currentView === "date" && React5.createElement("div", {
      className: "p-datepicker-calendar-container"
    }, React5.createElement("table", {
      className: "p-datepicker-calendar"
    }, React5.createElement("thead", null, React5.createElement("tr", null, dayNames)), React5.createElement("tbody", null, dates)));
  };
  var createMonth = function createMonth2(monthMetaData, index) {
    var weekDays = createWeekDaysMeta();
    var backwardNavigator = createBackwardNavigator(index === 0);
    var forwardNavigator = createForwardNavigator(props.numberOfMonths === 1 || index === props.numberOfMonths - 1);
    var title = createTitle(monthMetaData);
    var dateViewGrid = createDateViewGrid(monthMetaData, weekDays, index);
    var header = props.headerTemplate ? props.headerTemplate() : null;
    var monthKey = monthMetaData.month + "-" + monthMetaData.year;
    return React5.createElement("div", {
      key: monthKey,
      className: "p-datepicker-group"
    }, React5.createElement("div", {
      className: "p-datepicker-header"
    }, header, backwardNavigator, title, forwardNavigator), dateViewGrid);
  };
  var createMonths = function createMonths2(monthsMetaData) {
    var groups = monthsMetaData.map(createMonth);
    return React5.createElement("div", {
      className: "p-datepicker-group-container"
    }, groups);
  };
  var createDateView = function createDateView2() {
    var viewDate = getViewDate();
    var monthsMetaData = createMonthsMeta(viewDate.getMonth(), viewDate.getFullYear());
    var months = createMonths(monthsMetaData);
    return months;
  };
  var monthPickerValues = function monthPickerValues2() {
    var monthPickerValues3 = [];
    var monthNamesShort = localeOption("monthNamesShort", props.locale);
    for (var i = 0; i <= 11; i++) {
      monthPickerValues3.push(monthNamesShort[i]);
    }
    return monthPickerValues3;
  };
  var yearPickerValues = function yearPickerValues2() {
    var yearPickerValues3 = [];
    var base = currentYear - currentYear % 10;
    for (var i = 0; i < 10; i++) {
      yearPickerValues3.push(base + i);
    }
    return yearPickerValues3;
  };
  var createMonthYearView = function createMonthYearView2() {
    var backwardNavigator = createBackwardNavigator(true);
    var forwardNavigator = createForwardNavigator(true);
    var yearElement = createTitleYearElement(getViewDate().getFullYear());
    var decade = createTitleDecadeElement();
    return React5.createElement(React5.Fragment, null, React5.createElement("div", {
      className: "p-datepicker-group-container"
    }, React5.createElement("div", {
      className: "p-datepicker-group"
    }, React5.createElement("div", {
      className: "p-datepicker-header"
    }, backwardNavigator, React5.createElement("div", {
      className: "p-datepicker-title"
    }, yearElement, decade), forwardNavigator))));
  };
  var createDatePicker = function createDatePicker2() {
    if (!props.timeOnly) {
      if (props.view === "date") {
        return createDateView();
      } else {
        return createMonthYearView();
      }
    }
    return null;
  };
  var incrementIcon = IconUtils.getJSXIcon(props.incrementIcon || React5.createElement(ChevronUpIcon, null), void 0, {
    props
  });
  var decrementIcon = IconUtils.getJSXIcon(props.decrementIcon || React5.createElement(ChevronDownIcon, null), void 0, {
    props
  });
  var createHourPicker = function createHourPicker2() {
    var currentTime = getCurrentDateTime();
    var minute = doStepMinute(currentTime.getMinutes());
    var hour = currentTime.getHours();
    hour = minute > 59 ? hour + 1 : hour;
    if (props.hourFormat === "12") {
      if (hour === 0)
        hour = 12;
      else if (hour > 11 && hour !== 12)
        hour = hour - 12;
    }
    var hourDisplay = hour < 10 ? "0" + hour : hour;
    return React5.createElement("div", {
      className: "p-hour-picker"
    }, React5.createElement("button", {
      type: "button",
      className: "p-link",
      onMouseDown: function onMouseDown(e) {
        return onTimePickerElementMouseDown(e, 0, 1);
      },
      onMouseUp: onTimePickerElementMouseUp,
      onMouseLeave: onTimePickerElementMouseLeave,
      onKeyDown: function onKeyDown(e) {
        return onContainerButtonKeydown(e);
      }
    }, incrementIcon, React5.createElement(Ripple, null)), React5.createElement("span", null, hourDisplay), React5.createElement("button", {
      type: "button",
      className: "p-link",
      onMouseDown: function onMouseDown(e) {
        return onTimePickerElementMouseDown(e, 0, -1);
      },
      onMouseUp: onTimePickerElementMouseUp,
      onMouseLeave: onTimePickerElementMouseLeave,
      onKeyDown: function onKeyDown(e) {
        return onContainerButtonKeydown(e);
      }
    }, decrementIcon, React5.createElement(Ripple, null)));
  };
  var createMinutePicker = function createMinutePicker2() {
    var currentTime = getCurrentDateTime();
    var minute = doStepMinute(currentTime.getMinutes());
    minute = minute > 59 ? minute - 60 : minute;
    var minuteDisplay = minute < 10 ? "0" + minute : minute;
    return React5.createElement("div", {
      className: "p-minute-picker"
    }, React5.createElement("button", {
      type: "button",
      className: "p-link",
      onMouseDown: function onMouseDown(e) {
        return onTimePickerElementMouseDown(e, 1, 1);
      },
      onMouseUp: onTimePickerElementMouseUp,
      onMouseLeave: onTimePickerElementMouseLeave,
      onKeyDown: function onKeyDown(e) {
        return onContainerButtonKeydown(e);
      }
    }, incrementIcon, React5.createElement(Ripple, null)), React5.createElement("span", null, minuteDisplay), React5.createElement("button", {
      type: "button",
      className: "p-link",
      onMouseDown: function onMouseDown(e) {
        return onTimePickerElementMouseDown(e, 1, -1);
      },
      onMouseUp: onTimePickerElementMouseUp,
      onMouseLeave: onTimePickerElementMouseLeave,
      onKeyDown: function onKeyDown(e) {
        return onContainerButtonKeydown(e);
      }
    }, decrementIcon, React5.createElement(Ripple, null)));
  };
  var createSecondPicker = function createSecondPicker2() {
    if (props.showSeconds) {
      var currentTime = getCurrentDateTime();
      var second = currentTime.getSeconds();
      var secondDisplay = second < 10 ? "0" + second : second;
      return React5.createElement("div", {
        className: "p-second-picker"
      }, React5.createElement("button", {
        type: "button",
        className: "p-link",
        onMouseDown: function onMouseDown(e) {
          return onTimePickerElementMouseDown(e, 2, 1);
        },
        onMouseUp: onTimePickerElementMouseUp,
        onMouseLeave: onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return onContainerButtonKeydown(e);
        }
      }, incrementIcon, React5.createElement(Ripple, null)), React5.createElement("span", null, secondDisplay), React5.createElement("button", {
        type: "button",
        className: "p-link",
        onMouseDown: function onMouseDown(e) {
          return onTimePickerElementMouseDown(e, 2, -1);
        },
        onMouseUp: onTimePickerElementMouseUp,
        onMouseLeave: onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return onContainerButtonKeydown(e);
        }
      }, decrementIcon, React5.createElement(Ripple, null)));
    }
    return null;
  };
  var createMiliSecondPicker = function createMiliSecondPicker2() {
    if (props.showMillisec) {
      var currentTime = getCurrentDateTime();
      var millisecond = currentTime.getMilliseconds();
      var millisecondDisplay = millisecond < 100 ? (millisecond < 10 ? "00" : "0") + millisecond : millisecond;
      return React5.createElement("div", {
        className: "p-millisecond-picker"
      }, React5.createElement("button", {
        type: "button",
        className: "p-link",
        onMouseDown: function onMouseDown(e) {
          return onTimePickerElementMouseDown(e, 3, 1);
        },
        onMouseUp: onTimePickerElementMouseUp,
        onMouseLeave: onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return onContainerButtonKeydown(e);
        }
      }, incrementIcon, React5.createElement(Ripple, null)), React5.createElement("span", null, millisecondDisplay), React5.createElement("button", {
        type: "button",
        className: "p-link",
        onMouseDown: function onMouseDown(e) {
          return onTimePickerElementMouseDown(e, 3, -1);
        },
        onMouseUp: onTimePickerElementMouseUp,
        onMouseLeave: onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return onContainerButtonKeydown(e);
        }
      }, decrementIcon, React5.createElement(Ripple, null)));
    }
    return null;
  };
  var createAmPmPicker = function createAmPmPicker2() {
    if (props.hourFormat === "12") {
      var currentTime = getCurrentDateTime();
      var hour = currentTime.getHours();
      var display = hour > 11 ? "PM" : "AM";
      return React5.createElement("div", {
        className: "p-ampm-picker"
      }, React5.createElement("button", {
        type: "button",
        className: "p-link",
        onClick: toggleAmPm
      }, incrementIcon, React5.createElement(Ripple, null)), React5.createElement("span", null, display), React5.createElement("button", {
        type: "button",
        className: "p-link",
        onClick: toggleAmPm
      }, decrementIcon, React5.createElement(Ripple, null)));
    }
    return null;
  };
  var createSeparator = function createSeparator2(separator) {
    return React5.createElement("div", {
      className: "p-separator"
    }, React5.createElement("span", null, separator));
  };
  var createTimePicker = function createTimePicker2() {
    if ((props.showTime || props.timeOnly) && currentView === "date") {
      return React5.createElement("div", {
        className: "p-timepicker"
      }, createHourPicker(), createSeparator(":"), createMinutePicker(), props.showSeconds && createSeparator(":"), createSecondPicker(), props.showMillisec && createSeparator("."), createMiliSecondPicker(), props.hourFormat === "12" && createSeparator(":"), createAmPmPicker());
    }
    return null;
  };
  var createInputElement = function createInputElement2() {
    if (!props.inline) {
      return React5.createElement(InputText, {
        ref: inputRef,
        id: props.inputId,
        name: props.name,
        type: "text",
        className: props.inputClassName,
        style: props.inputStyle,
        readOnly: props.readOnlyInput,
        disabled: props.disabled,
        required: props.required,
        autoComplete: "off",
        placeholder: props.placeholder,
        tabIndex: props.tabIndex,
        onInput: onUserInput,
        onFocus: onInputFocus,
        onBlur: onInputBlur,
        onKeyDown: onInputKeyDown,
        "aria-labelledby": props.ariaLabelledBy,
        inputMode: props.inputMode,
        tooltip: props.tooltip,
        tooltipOptions: props.tooltipOptions
      });
    }
    return null;
  };
  var createButton = function createButton2() {
    if (props.showIcon) {
      return React5.createElement(Button, {
        type: "button",
        icon: props.icon || React5.createElement(CalendarIcon, null),
        onClick: onButtonClick,
        tabIndex: "-1",
        disabled: props.disabled,
        className: "p-datepicker-trigger"
      });
    }
    return null;
  };
  var createContent = function createContent2() {
    var input = createInputElement();
    var button = createButton();
    if (props.iconPos === "left") {
      return React5.createElement(React5.Fragment, null, button, input);
    }
    return React5.createElement(React5.Fragment, null, input, button);
  };
  var createButtonBar = function createButtonBar2() {
    if (props.showButtonBar) {
      var todayClassName = classNames("p-button-text", props.todayButtonClassName);
      var clearClassName = classNames("p-button-text", props.clearButtonClassName);
      var _localeOptions4 = localeOptions(props.locale), today = _localeOptions4.today, clear = _localeOptions4.clear;
      return React5.createElement("div", {
        className: "p-datepicker-buttonbar"
      }, React5.createElement(Button, {
        type: "button",
        label: today,
        onClick: onTodayButtonClick,
        onKeyDown: function onKeyDown(e) {
          return onContainerButtonKeydown(e);
        },
        className: todayClassName
      }), React5.createElement(Button, {
        type: "button",
        label: clear,
        onClick: onClearButtonClick,
        onKeyDown: function onKeyDown(e) {
          return onContainerButtonKeydown(e);
        },
        className: clearClassName
      }));
    }
    return null;
  };
  var createFooter = function createFooter2() {
    if (props.footerTemplate) {
      var _content3 = props.footerTemplate();
      return React5.createElement("div", {
        className: "p-datepicker-footer"
      }, _content3);
    }
    return null;
  };
  var createMonthPicker = function createMonthPicker2() {
    if (currentView === "month") {
      return React5.createElement("div", {
        className: "p-monthpicker"
      }, monthPickerValues().map(function(m, i) {
        return React5.createElement("span", {
          onClick: function onClick(event) {
            return onMonthSelect(event, i);
          },
          key: "month".concat(i + 1),
          className: classNames("p-monthpicker-month", {
            "p-highlight": isMonthSelected(i),
            "p-disabled": !isSelectable(1, i, currentYear)
          })
        }, m);
      }));
    }
    return null;
  };
  var createYearPicker = function createYearPicker2() {
    if (currentView === "year") {
      return React5.createElement("div", {
        className: "p-yearpicker"
      }, yearPickerValues().map(function(y, i) {
        return React5.createElement("span", {
          onClick: function onClick(event) {
            return onYearSelect(event, y);
          },
          key: "year".concat(i + 1),
          className: classNames("p-yearpicker-year", {
            "p-highlight": isYearSelected(y),
            "p-disabled": !(isSelectable(0, 0, y) || isSelectable(30, 11, y))
          })
        }, y);
      }));
    }
    return null;
  };
  var otherProps = CalendarBase.getOtherProps(props);
  var className = classNames("p-calendar p-component p-inputwrapper", props.className, (_classNames = {}, _defineProperty(_classNames, "p-calendar-w-btn p-calendar-w-btn-".concat(props.iconPos), props.showIcon), _defineProperty(_classNames, "p-calendar-disabled", props.disabled), _defineProperty(_classNames, "p-calendar-timeonly", props.timeOnly), _defineProperty(_classNames, "p-inputwrapper-filled", props.value || DomHandler.hasClass(inputRef.current, "p-filled") && inputRef.current.value !== ""), _defineProperty(_classNames, "p-inputwrapper-focus", focusedState), _classNames));
  var panelClassName = classNames("p-datepicker p-component", props.panelClassName, {
    "p-datepicker-inline": props.inline,
    "p-disabled": props.disabled,
    "p-datepicker-timeonly": props.timeOnly,
    "p-datepicker-multiple-month": props.numberOfMonths > 1,
    "p-datepicker-monthpicker": currentView === "month",
    "p-datepicker-touch-ui": props.touchUI,
    "p-input-filled": PrimeReact.inputStyle === "filled",
    "p-ripple-disabled": PrimeReact.ripple === false
  });
  var content = createContent();
  var datePicker = createDatePicker();
  var timePicker = createTimePicker();
  var buttonBar = createButtonBar();
  var footer = createFooter();
  var monthPicker = createMonthPicker();
  var yearPicker = createYearPicker();
  return React5.createElement("span", _extends5({
    ref: elementRef,
    id: props.id,
    className,
    style: props.style
  }, otherProps), content, React5.createElement(CalendarPanel, {
    ref: overlayRef,
    className: panelClassName,
    style: props.panelStyle,
    appendTo: props.appendTo,
    inline: props.inline,
    onClick: onPanelClick,
    onMouseUp: onPanelMouseUp,
    "in": visible,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    transitionOptions: props.transitionOptions
  }, datePicker, timePicker, monthPicker, yearPicker, buttonBar, footer));
}));
Calendar.displayName = "Calendar";
export {
  Calendar
};
//# sourceMappingURL=primereact_calendar.js.map
