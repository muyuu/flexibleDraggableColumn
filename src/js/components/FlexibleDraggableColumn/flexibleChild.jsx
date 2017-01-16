import React, {PropTypes, cloneElement} from "react";

module.exports = React.createClass({

  propTypes: {
    id: PropTypes.string,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
  },

  onMouseDown(){
    console.log('mouse down');
  },
  onMouseUp(){
    console.log('mouse up');
  },
  render(){
    const id = this.props.id;

    return (
      <div className="flexibleChild" id={id}>
        {this.props.children}
        <div
          className="flexibleDivider"
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          >
          divider
        </div>
      </div>
    );
  }
});
