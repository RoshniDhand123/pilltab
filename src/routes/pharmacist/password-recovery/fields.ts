import Field from "../../../components/Field";
  const fields = [
    {
        label:"Old Password",
        name: "oldPassword",
        component: Field,
        placeholder: "Old Password",
        type: "text",
        required: true,
        gridItem:6
    },
    {
        label:"New Password",
        name: "password",
        component: Field,
        placeholder: "New Password",
        type: "text",
        required: true,
        gridItem:6
    },
    {
        label:"Confirm Password",
        name: "cpassword",
        component: Field,
        placeholder: "Confirm Password",
        type: "text",
        required: true,
        gridItem:6
    },
 ]
 export default fields;