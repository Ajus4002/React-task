
import React from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function AddProduct({items, onSave}) {
    const [number,setNumber] = useState(0)
  const[savedetails,setsavedetails]=useState([])


useEffect(() => {
  if (!number) return

  if (number < 0) {
    alert("Invalid number")
    return
  }

  const details = [...savedetails];

if(details.length>number){
  details.splice(number)
}
else if(details.length===number){
  return
}
else {
  details.push(...(Array.from({length: (number - details.length)}).map((v,i)=>({productcode:null,productname:null,quantity:null}))))
}

setsavedetails([...details])

}, [number])

function storedetails(v,i,key){
  savedetails[i][key]=v
  setsavedetails([...savedetails])
}

function savebutton(){
  savedetails.forEach(v=>{if(!v.productcode||!v.productname||!v.quantity){
    return
  } 
  if (!items[v.productcode]){
    items[v.productcode]=v
  } else {
    items[v.productcode]['quantity'] = parseInt(items[v.productcode]['quantity']) + parseInt(v.quantity)}
  }
  )

  onSave({...items})

  setsavedetails([])
}

  return (
    <div className='container'>
    <div >
    <Form.Label  >Enter no of rows</Form.Label>
      
      <Form.Control style={{ width: '8rem' }}
        type="number"
       
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
      />
</div>
{ number > 0 && <div>
     <Table striped bordered hover className='mt-md mt-3' >
      <thead>
        <tr>
          <th>#</th>
          <th>Product Code</th>
          <th>Product Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
      {savedetails.map((v,i)=><tr key={i}>
      <td>{i+1}</td>
        <td>
        <Form.Control
        type="text"
      
        value={v[i]}
        onChange={(e)=>storedetails(e.target.value,i,'productcode')}
      />
        </td>
        <td>
        <Form.Control
        type="text"
      
        value={v[i]}
        onChange={(e)=>storedetails(e.target.value,i,'productname')}
      />
        </td>
        <td>
        <Form.Control
        type="number"
      
        value={v[i]}
        onChange={(e)=>storedetails(e.target.value,i,'quantity')}
      />
        </td>
        
        </tr>)}

      </tbody>
      </Table> 
      <Button className='button' onClick={savebutton}>Save</Button>{' '}
  </div>}
    </div>
  );
}

export default AddProduct;
