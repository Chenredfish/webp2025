import React from "react";
import MKButton from "components/MKButton";
const changeText = (event) => {
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了!"
  }

const multiButton=(num)=>{
    var output = [];
    for(let i=1;i<=num; i++)
      output.push(<MKButton variant="gradient" color="info" size="small"
        onClick={changeText}>第{i}個按鈕</MKButton>)
  
    return output;
  }

export default multiButton;