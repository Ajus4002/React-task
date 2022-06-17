
import React from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function DeleteProduct({items, onSave}) {
    const [number,setNumbers] = useState(0)
  const[savedetails,setsavedetails]=useState([])


useEffect(() => {
  if (!number) return

  if (number < 0) {
    alert("Invalid number")
    return
  }

if(savedetails.length>number){
  savedetails.splice(number)
}
else if(savedetails.length===number){
  return
}
else {
  savedetails.push(...(Array.from({length: number - savedetails.length}).map(()=>({productcode:null,quantity:null}))))
}

setsavedetails([...savedetails])

}, [number])

function storedetails(v,i,key){
  savedetails[i][key]=v
  setsavedetails([...savedetails])
}

function savebutton(){
  savedetails.forEach(v=>{
    if(!v.productcode || !v.quantity || v.quantity < 0){
        return
    } 

  if (items[v.productcode]){
    items[v.productcode]['quantity'] = parseInt(items[v.productcode]['quantity']) - parseInt(v.quantity)
    if (items[v.productcode]['quantity'] < 0) {
        items[v.productcode]['quantity'] = 0;
    }
  }
  }
  )

  onSave({...items})

  setsavedetails([])
}

  return (
    <div>
    <Form.Label htmlFor="inputPassword5">Enter the number</Form.Label>
      
      <Form.Control style={{ width: '8rem' }}
        type="number"
       
        value={number}
        onChange={(e)=>setNumbers(e.target.value)}
      />

      { number > 0 && <div>
      <Table striped bordered hover className='mt-md mt-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Code</th>
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

export default DeleteProduct;
