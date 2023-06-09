import {
  IconUtils,
  ObjectUtils,
  classNames
} from "./chunk-ZGU4VZCK.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/primereact/steps/steps.esm.js
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
var StepsBase = {
  defaultProps: {
    __TYPE: "Steps",
    id: null,
    model: null,
    activeIndex: 0,
    readOnly: true,
    style: null,
    className: null,
    onSelect: null,
    children: void 0
  },
  getProps: function getProps(props) {
    return ObjectUtils.getMergedProps(props, StepsBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return ObjectUtils.getDiffProps(props, StepsBase.defaultProps);
  }
};
var Steps = React.memo(React.forwardRef(function(inProps, ref) {
  var props = StepsBase.getProps(inProps);
  var elementRef = React.useRef(null);
  var itemClick = function itemClick2(event, item, index) {
    if (props.readOnly || item.disabled) {
      event.preventDefault();
      return;
    }
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        item,
        index
      });
    }
    if (!item.url) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item,
        index
      });
    }
  };
  var createItem = function createItem2(item, index) {
    if (item.visible === false) {
      return null;
    }
    var key = item.label + "_" + index;
    var active = index === props.activeIndex;
    var disabled = item.disabled || index !== props.activeIndex && props.readOnly;
    var tabIndex = disabled ? -1 : "";
    var className2 = classNames("p-steps-item", item.className, {
      "p-highlight p-steps-current": active,
      "p-disabled": disabled
    });
    var iconClassName = classNames("p-menuitem-icon", item.icon);
    var icon = IconUtils.getJSXIcon(item.icon, {
      className: "p-menuitem-icon"
    }, {
      props
    });
    var label = item.label && React.createElement("span", {
      className: "p-steps-title"
    }, item.label);
    var content = React.createElement("a", {
      href: item.url || "#",
      className: "p-menuitem-link",
      role: "presentation",
      target: item.target,
      onClick: function onClick(event) {
        return itemClick(event, item, index);
      },
      tabIndex
    }, React.createElement("span", {
      className: "p-steps-number"
    }, index + 1), icon, label);
    if (item.template) {
      var defaultContentOptions = {
        onClick: function onClick(event) {
          return itemClick(event, item, index);
        },
        className: "p-menuitem-link",
        labelClassName: "p-steps-title",
        numberClassName: "p-steps-number",
        iconClassName,
        element: content,
        props,
        tabIndex,
        active,
        disabled
      };
      content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
    }
    return React.createElement("li", {
      key,
      id: item.id,
      className: className2,
      style: item.style,
      role: "tab",
      "aria-selected": active,
      "aria-expanded": active
    }, content);
  };
  var createItems = function createItems2() {
    if (props.model) {
      var _items = props.model.map(createItem);
      return React.createElement("ul", {
        role: "tablist"
      }, _items);
    }
    return null;
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var otherProps = StepsBase.getOtherProps(props);
  var className = classNames("p-steps p-component", {
    "p-readonly": props.readOnly
  }, props.className);
  var items = createItems();
  return React.createElement("div", _extends({
    id: props.id,
    ref: elementRef,
    className,
    style: props.style
  }, otherProps), items);
}));
Steps.displayName = "Steps";
export {
  Steps
};
//# sourceMappingURL=primereact_steps.js.map
