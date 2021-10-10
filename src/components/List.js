import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

 const List = ({todo,todoDes}) => {
   const [a,seta]=useState(0);
    return (
   <>
   
    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{todo}</h5>
        <p class="card-text">{todoDes}</p>
       
      </div>
    </div>
  </div>
    

    </>
    )
}
export default List;