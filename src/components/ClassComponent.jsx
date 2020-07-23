import React from "react";

export default class ClassComponent extends React.Component {
  // static defaultProps = {
  //   age: 0,
  // };
  render() {
    console.log(this.props);
    const {name, age, children} = this.props;
    console.log(name, age, children);
    return (
      <div>
        <h1>나는 클래스 컴포넌트야</h1>
        {name && <h3>나는 {name} 이야</h3>}
        {age !== undefined && <h3>나는 {age} 살이야 </h3>}
        {children && <h3>나는 자식이 있어</h3>}
      </div>
    );
  }
}
ClassComponent.defaultProps = {
  age: 0,
};
