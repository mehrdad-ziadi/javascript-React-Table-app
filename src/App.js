import React from 'react';
import './App.css';

class App extends React.Component{

constructor(props){ 
super(props); 

this.set=this.set.bind(this);
this.reset=this.reset.bind(this);

this.state={
   text: []
}
}
  set(){

    let person={};
     person['name']=this.name.value;   
     person['family']=this.family.value;
     person['age']=this.age.value;
    
    this.setState((prevstate)=>{
      return{
        text: prevstate.text.concat(person)     
      }
    })
  }

  reset(){
    this.name.value=""
    this.family.value=""
    this.age.value=""    
  }

render(){                                                        
  return(    
    <div className="App">
        <h1 className="App-title">فرم مشخصات فردی</h1>        
        <p> نام : <input type="Text" ref={Node=>this.name=Node} ></input> </p>
        <p> نام خانوادگی : <input type="Text" ref={Node=>this.family=Node} ></input> </p>
        <p> سن : <input type="Number" ref={Node=>this.age=Node}></input> </p>

        <button onClick={this.set}> ثبت اطلاعات </button>
        <button onClick={this.reset}>Reset</button>
        <p> -------------------------------------------------------------------------------------------  </p>

        <h1 className="App-title">جدول مشخصات</h1> 
        <p>----- *Name* ------------ *Family* ---------- *Age* ---</p>

          {this.state.text.map((tx)=>{
            return (<h1>{tx.name}///{tx.family}///{tx.age}</h1>)
          })}  
    </div>
  );
}
}
export default App;