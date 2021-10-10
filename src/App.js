import React,{useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.css';
const getLocalData=()=>{
  const lists=localStorage.getItem("mytodoList")
  if(lists)
  {
    return JSON.parse(lists)
  }
  else return [];
}
let s=""
let arr=[];
let i=0;
function App() {
 const [item,setitem]=useState("");
 const [itemarr,setitemarr]=useState(getLocalData());
 const [item1,setitem1]=useState("");
 const [itemSearch,setitemSearch]=useState([]);
 const [itemarr1,setitemarr1]=useState([]);
 const [itemarr2,setitemarr2]=useState([]);
 const [add,setadd]=useState("Add");
 const [idd,setidd]=useState(0);
 const [getId,setgetId]=useState("");
 const [is,setIs]=useState(false);

 useEffect(()=>{
  localStorage.setItem("mytodoList",JSON.stringify(itemarr))
 },[itemarr])

 const additem=()=>{
   if(item=="")
   {
     alert("enter an item first")
   }
   
  else if(add==="Edit" && item)
   { 
    // setitemarr(itemarr.map(x=>{
    //   if(x.id===idd)
    //   {
    //     return {...x,name:item}
    //   }
    //   return x;
    // }))
    console.log(idd+""+item);
    for(let i=0;i<itemarr.length;i++)
    {
      // if(itemarr[i].id===idd)
      // {
      //   itemarr[i].name=item;
      //   break;
      // }
      if(itemarr[i].id==getId)
      {
      itemarr[i].name=item;
      }
      console.log(itemarr[i]);
    }
    
    setitemarr(itemarr);
    setadd("Add")
  }
else{
 const obj={
     id:idd.toString(),
     name: item

   }
 
   
   setitemarr([...itemarr,obj]);
   setitemarr1([...itemarr1,item1]);
  
  
 }

 setidd(idd+1);
}
  return (
    <>
    
   
  {/* <div class="form-group"> */}
    <label for="exampleInputEmail1"></label>
    <input type="email"     value={item} onChange={(event) =>
     { setitem(event.target.value)
      
     }
      
      
      }  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="✍       Add Item"/>
     {/* <input  value={itemSearch} onChange={(event)=>{
       const updateitem=itemarr.filter(g=>{
 
        return  (g.name.toLowerCase().includes(event.target.value.toLowerCase()))
      
     })
    //  setitemarr(updateitem)
     setitemSearch(updateitem.name)
    }
} /><button onClick={()=>{
  if(itemSearch!='')
  {
  setIs(true);
  }
  else{
    setIs(false)}
}}>Search</button> */}
        
     
       
     
    {/* <small id="emailHelp" class="form-text text-muted"></small> */}
 
 
    <div class="row">
      <div class="col">
  <button type="button" onClick={additem
  } class="btn btn-success">{add}</button>
  </div>
  <div class="col">
 
  {/* </div> */}

   <button type="button" onClick={()=>{
     const removeAll=itemarr.filter(g=>{
       return g.id===-100
     })
     setitemarr(removeAll)
   }} class="btn btn-danger">Remove all</button>
   </div>
   </div>
   <br></br>
     
      
       {itemarr.map(x=>{
        if(x!="")
        {
        return (
          
          <div class="row">
          <div class="col"><List todo={x.name} todoDes={""}/></div> 
          <div class="col"><button onClick={()=>{

            const updateItem=itemarr.filter(g=>{
              return g.id!=x.id;
            })
            setitemarr(updateItem)

          }} class="btn btn-success">Done ✔</button></div>
          <div class="col"><button onClick={()=>{

const updateItem1=itemarr.find(g=>{
   if(g.id==x.id)
   {
     return g.name;
   }
})
setitem((updateItem1['name']))
setgetId(updateItem1['id'])
setadd("Edit");

}} class="btn btn-success">Edit ✍</button></div>
          </div>
          
        )
        i++;
        }
       
      })}
    
   
   
    </>
  )
}

export default App;
