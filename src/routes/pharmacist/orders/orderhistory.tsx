import React ,{useEffect, useState}from 'react'
import { Typography } from '@material-ui/core';
import {CONSTANTS} from'../../constants';
import TableCmp from '../../../components/tableCmp';
import ButtonComponent from '../../../components/button';
import {HeadCell} from '../../../components/tableCmp/type';
import data from './dummydata';
import OrderCard from '../../../components/order-card';
import {getPatientOrderHistory} from '../../../services/apis';
import { parseOrderHistory } from '../../../services/helper';
import { notifError } from '../../util';

const Orderhistory = () => {

    const headCells: HeadCell[] = [	
      {name:"Id",label:"Id",width:"1px"},
        { name: "name", label: "Name",width:"5px" },
        { name: "age", label: "Age" ,width:"4px"},
        { name: "address", label: "Address" ,width:"60px"},
       {name:"Status",label:"Status",width:"30px"}	
        
    ];
const state = {
        loading: true,
        details: [],
        total: 0,
        open: false,		
        id: -1,
        userMedicalInfo:[],
      };
      const[orderHistory,setOrderHistory]=useState([]);
      const[upcomingOrders,setUpcomingOrders] =useState([]);
      const[loading,setloading]=useState(false);

      const order = async()=>{
        setloading(true);
        let resp = await getPatientOrderHistory();
        if (resp.data && resp.data.status) {
          // setOrderHistory(parseOrderHistory(resp.data.data));
          console.log(resp);

      }
      else {
        notifError("order", "Something went wrong");
      }
    }
      useEffect(()=>{
    
        order();
      })

      
      return (
      <>
     
      <div className="content edit-billing">
      <Typography variant="h3" gutterBottom>
        {CONSTANTS.ORDER_HEADER}
      </Typography>
      <div className="flex-column-start">

        <div className="table-container">
          <TableCmp
           title
            headers={headCells}
            data={orderHistory}
            // data={orderHistory}
          />
        </div>
      </div>
    </div>
   
  </>
      )
}

export default Orderhistory;
