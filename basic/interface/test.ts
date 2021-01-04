interface LabelledValue {
    label: string;
  }
  
  function printLabel(obj: LabelledValue) {
    console.log(obj.label);
  }
  
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);