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

// node_modules/primereact/divider/divider.esm.js
var React = __toESM(require_react());
var DividerBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Divider",
    align: null,
    layout: "horizontal",
    type: "solid",
    style: null,
    className: null,
    children: void 0
  }
});
var Divider = React.forwardRef(function(inProps, ref) {
  var props = DividerBase.getProps(inProps);
  var _DividerBase$setMetaD = DividerBase.setMetaData({
    props
  }), ptm = _DividerBase$setMetaD.ptm;
  var elementRef = React.useRef(null);
  var horizontal = props.layout === "horizontal";
  var vertical = props.layout === "vertical";
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = mergeProps({
    ref: elementRef,
    style: props.style,
    className: classNames("p-divider p-component p-divider-".concat(props.layout, " p-divider-").concat(props.type), {
      "p-divider-left": horizontal && (!props.align || props.align === "left"),
      "p-divider-right": horizontal && props.align === "right",
      "p-divider-center": horizontal && props.align === "center" || vertical && (!props.align || props.align === "center"),
      "p-divider-top": vertical && props.align === "top",
      "p-divider-bottom": vertical && props.align === "bottom"
    }, props.className),
    role: "separator"
  }, DividerBase.getOtherProps(props), ptm("root"));
  var contentProps = mergeProps({
    className: "p-divider-content"
  }, ptm("content"));
  return React.createElement("div", rootProps, React.createElement("div", contentProps, props.children));
});
Divider.displayName = "Divider";
export {
  Divider
};
//# sourceMappingURL=primereact_divider.js.map
