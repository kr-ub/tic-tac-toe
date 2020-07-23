import React from "react";

export default function FunctionalComponent({name, age, children}) {
  return (
    <div>
      <h1>나는 함수형 컴포넌트</h1>
      {name && <h3>나는 {name} 이야</h3>}
      {age !== undefined && <h3>나는 {age} 살이야 </h3>}
      {children && <h3>나는 자식이 있어</h3>}
    </div>
  );
}
FunctionalComponent.defaultProps = {
  age: 0,
};
