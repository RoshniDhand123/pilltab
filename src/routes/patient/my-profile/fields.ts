import Field from "../../../components/Field";
export const editFields = [
    {
        label:"First name",
        name: "firstName",
        component: Field,
        placeholder: "First name",
        type: "text",
        required: true,
        gridItem:6
    },
    {
        label:"Last name",
        name: "lastName",
        component: Field,
        placeholder: "Last name",
        type: "text",
        required: true,
        gridItem:6
    },
    {
        label:"Email",
        name: "email",
        component: Field,
        placeholder: "Email",
        type: "email",
        required: true,
        disabled:true,
        gridItem:6
    },
    {
		label: "Date of Birth",
		name: "dob",
		component: Field,
		type: "date",
		required: true,
        disabled:true,
        gridItem:6
	},
    {
        label:"Shipping Address",
        name: "shippingAddress",
        component: Field,
        placeholder: "Shipping Address",
        type: "text",
        required: true,
        gridItem:6
    },
    {
        label:"Shipping Address 2",
        name: "shippingAddress2",
        component: Field,
        placeholder: "Shipping Address 2",
        type: "text",
        required: true,
        gridItem:6
    },
    {
        label:"City",
        name: "shippingCity",
        component: Field,
        placeholder: "City",
        type: "text",
        required: true,
        gridItem:6
    },
    {
        label:"State",
        name: "shippingState",
        component: Field,
        placeholder: "State",
        type: "text",
        required: true,
        gridItem:6
    },
    {
        label:"Zip Code",
        name: "shippingZipCode",
        component: Field,
        placeholder: "Zip Code",
        type: "text",
        required: true,
        gridItem:6
    },
    {
		label: "Gender",
		name: "gender",
		type: "radio",
		options: [
			{
				value: "Male",
				label: "Male",
			},
			{
				value: "Female",
				label: "Female",
			},
			{
				value: "Other",
				label: "Other",
			},
		],
		required: true,
        disabled:true,
        gridItem:6
	},
    {
		label: "Marital Status",
		name: "maritalStatus",
		component: Field,
		type: "radio",
		options: [
			{
				value: "Single",
				label: "Single",
			},
			{
				value: "Married",
				label: "Married",
			},
			{
				value: "Other",
				label: "Other",
			},
		],
		required: true,
        gridItem:6
	},
    // {
	// 	label: "Race",
	// 	name: "race",
	// 	component: Field,
	// 	type: "radio",
	// 	options: [
	// 		{
	// 			value: "White",
	// 			label: "White",
	// 		},
	// 		{
	// 			value: "Black",
	// 			label: "Black",
	// 		},
	// 		{
	// 			value: "Other",
	// 			label: "Other",
	// 		},
	// 	],
	// 	required: true,
    //     disabled:true,
    //     gridItem:6
	// },
	{
		label: "Employment",
		name: "employment",
		component: Field,
		type: "radio",
		options: [
			{
				value: "Employed",
				label: "Employed",
			},
			{
				value: "Unemployed",
				label: "Unemployed",
			},
			{
				value: "Other",
				label: "Other",
			},
		],
		required: true,
        gridItem:6
	}
]