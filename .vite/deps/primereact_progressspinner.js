import {
  ComponentBase
} from "./chunk-TENS523J.js";
import {
  classNames,
  mergeProps
} from "./chunk-ZGU4VZCK.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/primereact/progressspinner/progressspinner.esm.js
var React = __toESM(require_react());
var ProgressSpinnerBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "ProgressSpinner",
    id: null,
    style: null,
    className: null,
    strokeWidth: "2",
    fill: "none",
    animationDuration: "2s",
    children: void 0
  }
});
var ProgressSpinner = React.memo(React.forwardRef(function(inProps, ref) {
  var props = ProgressSpinnerBase.getProps(inProps);
  var elementRef = React.useRef(null);
  var className = classNames("p-progress-spinner", props.className);
  var _ProgressSpinnerBase$ = ProgressSpinnerBase.setMetaData({
    props
  }), ptm = _ProgressSpinnerBase$.ptm;
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = mergeProps({
    id: props.id,
    ref: elementRef,
    style: props.style,
    className,
    role: "alert",
    "aria-busy": true
  }, ptm("spinner"));
  var spinnerProps = mergeProps({
    className: "p-progress-spinner-svg",
    viewBox: "25 25 50 50",
    style: {
      animationDuration: props.animationDuration
    }
  }, ptm("spinner"));
  var circleProps = mergeProps({
    className: "p-progress-spinner-circle",
    cx: "50",
    cy: "50",
    r: "20",
    fill: props.fill,
    strokeWidth: props.strokeWidth,
    strokeMiterlimit: "10"
  }, ptm("circle"));
  return React.createElement("div", rootProps, React.createElement("svg", spinnerProps, React.createElement("circle", circleProps)));
}));
ProgressSpinner.displayName = "ProgressSpinner";
export {
  ProgressSpinner
};
//# sourceMappingURL=primereact_progressspinner.js.map
