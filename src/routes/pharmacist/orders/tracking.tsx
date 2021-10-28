
import { Button, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import TableComp from'../../../components/tableCmp';
import {HeadCell} from '../../../components/tableCmp/type';
import data from './dummydata';
import { CONSTANTS } from '../../constants';
import  Button1  from '../../../components/button';
const headCells: HeadCell[] = [
	{ name: "OrderId", label: "OrderId" ,width:"16px"},
	{ name: "Name", label: "Name" ,width:"20px"},
	{ name: "Status", label: "Status",width:"40px" }
];
interface modal{
    closeModal?:string,
    id?:number,
    button1:string
}
export type data = {
	name:string;
	id: any;
	value?: string;	
};
const showData = function (list:data) {
    return (
        <div className="container-box">
            {Object.entries(list).map(([key, value], index) => {
                return (
                    <div className="d-flex">
                        <div className="fieldName">{key}</div>
                        <div className="fieldValue">{Array.isArray(value) ? list : value}</div>
                    </div>
                );
            })}
        </div>
    );
};

const Tracking = ({closeModal,id,button1}:modal) => {
    const[modal,setmodal]=useState(false);
    const [open,setOpen]=useState(false);
    return (
        
        <>
        <div id = "trackOrder" style={{width:"50%",height:"200px",marginBottom:"23%",textAlign:"center"}}>

        <div className="detailInfo">					
					{data.map(showData)}
				</div>
                     
        </div>
         
     
        

      
    </>
       
    )
}

export default Tracking
