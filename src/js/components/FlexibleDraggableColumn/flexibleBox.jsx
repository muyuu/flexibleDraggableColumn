import React, { propTypes, cloneElement} from "react";
import EventEmitter from 'events';

require("./style.css");

export default class FlexibleBox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      itemLength: 0,
      width: [],
    };

    this.emitter = new EventEmitter;

    this.children = this.props.children;
    this.setItemLength(this.children);
    this.setWidth(this.children);

    this.emitter.on("drag", (param)=>{
      const grab = "a";
      this.setState({
        width: []
      });
    });
  }

  setItemLength(children){
    // this.setState({
    //   itemLength: children.lnegth
    // });
  }

  setWidth(children){
    let width = children.map(v=> 100 / this.state.itemLength);
    // this.setState({width});
  }

  getChildren(){
    const children = this.props.children;

    console.log(children.length);
    // this.setItemLength(children);
    // this.setWidth(children);

    return React.Children.map(children, (child, index)=>{
      const ref = `flexibleChild-${index}`;
      const id = `flexibleChild-${index}`;

      return cloneElement(child, {ref, id});
    });
  }

  render(){
    return (
      <div className="flexibleBox">
        {this.getChildren()}
      </div>
    );
  }
};
