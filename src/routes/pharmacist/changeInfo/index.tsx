import React,{useState} from 'react'
import Form from'../../../components/form';
import fields from"./fields";
import Button  from "../../../components/button";
import {Typography} from"@material-ui/core";
import { notifError,notifSuccess } from '../../util';
import {changePassword} from"../../../services/apis";
import { CONSTANTS } from '../../constants';
import ModalComponent from '../../../components/modal';
import { editInfoPayload } from '../../../services/helper';

import"./style.scss"; 

import FormHeading from '../../../components/form-heading';
import { payload_type1 } from '../../forgot-password/types';


const initialValues ={Address:"",Street:"",City:"",State:"",Code:"",Country:"",num:""};

const ChInf:React.FC=() => {
    const [address,setaddress]=useState();
    const[city,setCity]=useState();
    const[state,setState]=useState();
    const [code,setCOde]=useState();
    const[country,setCountry]=useState();
    const[number,setNumber]=useState();
    const [open,setOpen] = useState(false);
    const[value1,setValue1]=useState<payload_type1>({});

  
    const sendCode = (payload:payload_type1) =>{
       
        setValue1(payload)
       
      setOpen(true);
    }
    
    
    const changeInfo=()=>{
      console.log(value1);
      setOpen(false);
   }

    const cancel=()=>{
        setOpen(false);
    }
    const RandomButton=[{text:"cancel",action:cancel}]

    return (
        
    <>
 

<div id="forgot-password-setting">

<ModalComponent
					open={open}
					buttonText={"OK"}
                    
                  renderButtons={RandomButton}
                   buttonAction={
                    changeInfo
					}
					modalHeading={CONSTANTS.UPDATED_INFO}
					alongSidebar={true}								
				/>

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
