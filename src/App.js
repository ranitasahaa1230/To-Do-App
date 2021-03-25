import React from "react";
// import logo from  "./logo.svg";
import  "./App.css";
//import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem:"",
      list: []
    };
  }

   addItem(todoValue){   
//    fetch this to input
    if(todoValue !== ""){
      const newItem={
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      // update
    const list=[...this.state.list];
    list.push(newItem);
    this.setState({
      list,//      list:list,//update list with list
      newItem: ""
    });
    }
  }

  deleteItem(id){
    //copy
    const list=[...this.state.list];
    //id which matches the itemid must skip that
    const updatedlist=list.filter(item => item.id !== id);
    this.setState({list: updatedlist})//updatelist to list
  }

  updatedInput(input){
    this.setState({newItem:input});
  }


 render(){
   return(
      <div>
        {/* <img src={logo} width="100" length="100" className="logo"   />  */}
        <h1 className="app-title">ToDo App</h1>
          <div className="container">
            Add an Item!
            <br />

            <input type="text" className="input-text" placeholder="Add your Todo List" required value={this.state.newItem} 
            onChange={e =>this.updatedInput(e.target.value)} //e for any update//the value which we vil get from here will go 2 method updatedInput and newIte list vil be updated
            /> 
            <button className="add-btn" onClick={() => this.addItem(this.state.newItem)} 
            disabled={!this.state.newItem.length}//this whole length is 0 so treated as false; is no. is 5 this would make false so disabled;
            > Add Todo </button>
            <div className="list">
              <ul>
                {this.state.list.map(item =>{
                return(//return a list item
                  <li key={item.id}> 
                    {/* //not using key, error  ; unique key everytime*/}
                    <input type="checkbox" name="idDone" checked={item.isDone} onChange={() => {}} />

                    {/* //item from map and values from list todoval */}
                    {item.value} 
                    <button className="btn" onClick={() =>this.deleteItem(item.id)}>Delete</button> 
                </li>
                );
                })}
                <li>
                  <input type="checkbox" name="" id="" />Assignment Completion
                  <button className="text-bttn">Delete</button>
                </li>
                

              </ul>              
            </div>

          </div>        


      </div>
   );
 }

  
}

export default App;
