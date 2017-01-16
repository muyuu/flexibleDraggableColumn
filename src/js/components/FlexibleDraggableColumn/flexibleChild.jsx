import React, {PropTypes, cloneElement} from "react";

export default class FlexibleChild extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isDrag: false
    };

    this.onDrag = this.onDrag.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onMouseDown(){
    console.log('mouse down');
  }

  onDrag(){
    console.log('drag');
  }

  onDragStart(){
    this.setState({
      isDrag: true
    });
    console.log('drag start');
    console.log(this.state);
  }

  onDragEnd(){
    this.setState({
      isDrag: false
    });
    console.log('grag end');
    console.log(this.state);
  }

  render(){
    const id = this.props.id;

    return (
      <div className="flexibleChild" id={id}>
        {this.props.children}
        <div
          className="flexibleDivider"
          onMouseDown={this.onMouseDown}
          onDrag={this.onDrag}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          >
          divider
        </div>
      </div>
    );
  }
}
