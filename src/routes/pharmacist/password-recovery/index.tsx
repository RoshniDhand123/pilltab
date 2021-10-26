import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Form from'../../../components/form';
import Button from '../../../components/button';
import Loading from '../../../components/loader';
import {Typography} from '@material-ui/core';
import {PASSWORD_RECOVERY,CONSTANTS} from '../../constants';
import { changePassword } from '../../../services/apis';
import { notifError, notifSuccess } from '../../util';
import fields from'./fields';
import { type } from 'os';
import ModalComponent from '../../../components/modal';
import {changepassword1} from '../../../services/helper';

interface payload_type{
    oldPassword:any;
    password:any;
    cpassword:any;
   
}

const initialValues ={oldPassword:"",password:"",cpassword:""};

const Frgpass:React.FC<payload_type> = () =>{
	

    const [loading,setloading]=useState(false);
  
    const [newpassword,setnewPassword]=useState("");
   
  

 const 	sendCode = async (payload: payload_type, { resetForm }: any) => {
	const info={
		oldPass:payload.oldPassword,
		newPass:payload.password,
		confPass:payload.cpassword
	};

     console.log("Info",info);
	 
		let resp = await changePassword(info);
		console.log(resp);

	if(resp && resp.data &&resp.data.status){
	notifSuccess("Password Changed ","password  has been Changed Successfully!");	
	}
	else{
		notifError("Something Went Wrong","Something went Wrong");
	}
    
	};

    return(
        <>
       <div id="forgot-password-setting">

        	<Typography variant="h3" gutterBottom>
					Change Password
				</Typography>

                <div className="table-container">
					{/* <Typography variant="h5" gutterBottom>
						Enter your email address to retrive your password.
					</Typography> */}
					<Form
						fields={fields}
						onSubmit={sendCode}
						initialValues={initialValues}
						renderCustomSubmit={
							<Button
								className="form-button button"
								btnText="change password"
								type="submit"
							/>
							
						}
						alignCenter={true}
						gridItem={6}
						column={12}

						
						
					/>
					
				</div>
				<Loading show={loading} />
            
            
        
       </div>
        
        </>
    )
}

export default Frgpass;

