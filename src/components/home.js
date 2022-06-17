import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import '../components/home.css'
import React from 'react';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';


function NoAnimationExample() {
  
  const [items, setItems] = useState({})



  return (
    <div className='tabs'>
    <div className='container'>
    <Tabs
      defaultActiveKey="home"
      transition={false}
     
      className="mb-3"
    >
     <Tab eventKey="home" title="Add product">
     
      <AddProduct items={items} onSave={v => setItems(v)}/>
     
  
      </Tab>
      <Tab eventKey="profile" title="List Products">
        

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Code</th>
          <th>Product Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
      {Object.values(items).map((v,i)=>   <tr>
        <td>{i+1}</td>
        <td>{v.productcode}</td>
        <td>{v.productname}</td>
        <td>{v.quantity}</td>
      </tr>)}
     
    
      </tbody>
    </Table>

             
      </Tab>
      <Tab eventKey="contact" title="Remove Products">
        <DeleteProduct items={items} onSave={v => setItems(v)}/>
      </Tab>
    </Tabs>
    </div>
    </div>
  );
}

export default NoAnimationExample;