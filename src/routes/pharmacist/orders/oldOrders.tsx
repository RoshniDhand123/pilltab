import React,{useState} from 'react';
import{Typography} from '@material-ui/core';
import { CONSTANTS } from "../../constants";
import TableCmp from "../../../components/tableCmp"; 
import ButtonComponent from '../../../components/button';
import { HeadCell } from '../../../components/tableCmp/type';


const headCells: HeadCell[] = [	
	
	{name:"orderId",label:"OrderId",width:"5px"},
	{ name: "name", label: "Name",width:"10px" },
	{ name: "age", label: "Age" ,width:"5px"},
	{ name: "address", label: "Address" ,width:"50px"},
	{ name: "plan", label: "Plan",width:"10px" },
	{ name: "action", label: "Action",width:"20px" },	
	
];



 const OldOrders=() =>{
  


  const state = {
    loading: true,
    details: [],
    total: 0,
    open: false,		
    id: -1,
    userMedicalInfo:[],
  };

  
  const [count,setCount]=useState<number>();
  const [details,setDetails]=useState([]);
const [total,setTotal]=useState();



  const loadDetails = async (page = 0, perPage = 10) => {};

  const onPageChange = async (perPage: number, page: number) => {
		const { total, details = [] } = state;
		if (total > details.length && (page + 1) * perPage > details.length)
			await loadDetails(page, perPage);
		return state.details;
	};
  

    return (
      
      <>
      <div className="content nurse nursePageContainer">
      <Typography variant="h3" gutterBottom>
        {CONSTANTS.PHARMACIST_TITLE1}
      </Typography>
      </div>
      <div className="table-container">
    <TableCmp
    onPageChange={onPageChange}
    total={total}
    data={details}
    headers={headCells}
    title={""}
    />
    <ButtonComponent
  btnText="Track Order"/>
  </div>
  </>
    )
}

export default OldOrders;
