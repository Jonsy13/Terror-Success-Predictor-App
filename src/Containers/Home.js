import React from "react";
import Content from "../Components/Content/Content";
import Form from "../Components/Form/Form";

import Content1 from "../Components/Content1/Content1";

class Home extends React.Component {
  render(){
    return (
      <div>
        <Content />
        <Content1 />
        <Form />
       
      </div>
    );
  }
}

export default Home;
