import React,{useState} from 'react'
import Form from'../../../components/form';
import fields from"./fields";
import Button  from "../../../components/button";
import {Typography} from"@material-ui/core";
import { notifError,notifSuccess } from '../../util';
import {changePassword} from"../../../services/apis";

import"./style.scss"; 

interface payload_type{
    Address?:any;
    Street?:any;
    City?:any;
    State?:any;
    Code?:any;
    country?:any;
    num?:any;
}

const initialValues ={Address:"",Street:"",City:"",State:"",Code:"",Country:"",num:""};

const ChInf:React.FC<payload_type>=() => {
    const [address,setaddress]=useState();
    const[city,setCity]=useState();
    const[state,setState]=useState();
    const [code,setCOde]=useState();
    const[country,setCountry]=useState();
    const[number,setNumber]=useState();

    const sendCode =  async (payload: payload_type, { resetForm }: any) =>{
        const info={
            Address:payload.Address,
            Street:payload.Street,
            City:payload.City,
            State:payload.State,
            Code:payload.Code,
            Country:payload.country,
            Number:payload.num
        };
        console.log("ChangeInfo",info);
    
    



let resp = await changePassword(info);
		console.log(resp);

	if(resp && resp.data &&resp.data.status){
	notifSuccess("Information Changed ","Information has been Changed Successfully!");	
	}
	else{
		notifError("Something Went Wrong","Something went Wrong");
	}
    
    }

    return (
        
    <>

<div id="forgot-password-setting">

<Typography variant="h3" gutterBottom>
        Change Address and Telephone Number
    </Typography>

       <div className="table-container">"
   
        <Form 
         column={5}
           fields={fields}
        
           onSubmit={sendCode}
           initialValues={initialValues}
            renderCustomSubmit={
                <Button 
                    className="form-button button"
                   btnText="change Info"
                    type="submit"
                    
                />
            }
           alignCenter={true}
          
		   
           
        >

        </Form>
        </div>
        </div>
       
            </>
    )
}

export default ChInf;
