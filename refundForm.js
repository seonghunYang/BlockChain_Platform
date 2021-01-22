"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var RefundForm = function (_React$Component) {
  _inherits(RefundForm, _React$Component);

  function RefundForm(props) {
    _classCallCheck(this, RefundForm);

    var _this = _possibleConstructorReturn(this, (RefundForm.__proto__ || Object.getPrototypeOf(RefundForm)).call(this, props));

    _this.state = {
      numOfSteps: document.getElementById("numOfSteps"),
      numOfStepsValue: _this.state.numOfSteps.value
    };
    return _this;
  }

  _createClass(RefundForm, [{
    key: "onChange",
    value: function onChange() {
      this.setState({
        numOfStepsValue: this.state.numOfSteps.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.state.numOfSteps.addEventListener("change", this.onChange);
      console.log(this.state.numOfStepsValue);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Apollo University, Delhi, India Test"
        ),
        React.createElement(
          "span",
          { className: "time_date" },
          " 11:01 AM | Today"
        )
      );
    }
  }]);

  return RefundForm;
}(React.Component);
// Find all DOM containers, and render Like buttons into them.
// domContainer = document.querySelector("#acceptApproval");
// console.log("true");
// ReactDOM.render(e(AcceptApproval), domContainer);
// ReactDOM.render(<AcceptApproval></AcceptApproval>);


document.querySelectorAll(".refundForm").forEach(function (domContainer) {
  // Read the comment ID from a data-* attribute.
  console.log(domContainer);
  ReactDOM.render(e(RefundForm), domContainer);
});