import React, { Component } from 'react';
import Plan from './Plan';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state ={
    items :[],
    text :""
  }
  handlechange = e =>{
  this.setState({text: e.target.value})
  }
  hadleadd = e =>{
    if(this.state.text  !== ""){
      const items =[...this.state.items,this.state.text];
      this.setState({items: items, text :""})
    }
  }
  handleDelete = id =>{
    console.log("Deleted",id);
    const olditems = [...this.state.items]
    const items = olditems.filter((element, i)=>{
      return i !== id
    })
    this.setState({items: items});
  }
  render() {
    return (
      <div className='container-fluid  my-5'>
       <div className='row'>
         <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
         <h1 className='text-center'>today's plan</h1>
          <div className='row'>
            <div className='col-9'>
              <input type='text' className='form-control' placeholder='write plan here'
              value={this.state.text} onChange={this.handlechange}>
              </input>
             </div>
                <div className='col-2'>
                  <botton className= "btn btn-warning px-5 fw-bold" onClick= {this.hadleadd}>ADD</botton>
                  </div>

                  <div className='container-fluid'>
                  <ul className='list-unstyled row m-5'>
                  {
                    this.state.items.map((value, i)=>{
                      return <Plan key={i} id={i} value={value} sendData = {this.handleDelete}
                      />
                    })
                  }
                  </ul>
           </div>
          </div>
         </div>
       </div>
      </div>
      )
         }
  }
  export default App;

