import { Button, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import TableComp from'../../../components/tableCmp';
import {HeadCell} from '../../../components/tableCmp/type';
import data1 from './dummydata';
import { CONSTANTS } from '../../constants';
import  Button1  from '../../../components/button';
import ModalComponent from '../../../components/modal';
import"./style.scss";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const data2={
   
    orderId:"OOitf1",
     name:"jacky",
     age:"35",
     plan:"4000",
}


interface Iprops {
	closeModel: any;	
	orderId?: number;
	button1?:string;
	Orders?:any;
    data?:any;
    status:any;
}



const Tracking = ({closeModel,orderId,button1,data,status}:Iprops) => {
    const close=()=>{
        setmodal(false);
    }
    const[modal,setmodal]=useState(false);
    const [open,setOpen]=useState(true);
    const [status1, setStatus1] = React.useState('');
    console.log("data",data);
    console.log("button",button1);
    console.timeLog("orderId",orderId);

    const handleChange = (event: SelectChangeEvent) => {
        setStatus1(event.target.value as string);
      };
    return (
        
        <>
       
        <div id = "trackOrder" style={{width:"50%",height:"300px",marginBottom:"23%",textAlign:"center"}}>
      
        {Object.entries(data2).map(([key, value], index) => {  
            console.log(value);         
					return (
						<div className="d-flex">
                            <div className="fieldValue">{key}:
                            {value}</div>
						{/* <div className="fieldValue">{value}</div> */}
                        
					
						</div>
					);
				})}
                
                  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status1}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={10}>Processing</MenuItem>
          <MenuItem value={20}>Dispatched</MenuItem>
          <MenuItem value={30}>Delievered</MenuItem>
        </Select>
      </FormControl>

      <button  style ={{marginLeft:"70%"}} className ="btn" onClick={close}>Back</button>

         </div>        
               
    
         
     
        

      
    </>
       
    )
}

export default Tracking;