
const form = [
    {
        "name": "username_and_number",
        "type": "text",
        "label": "User Name & Number"
    },
    {
        "name": "in_date",
        "type": "date",
        "label": "In Date"
    },
    
    {
        "name": "product_condition",
        "type": "select",
        "label": "Product Condition",
        "option": [
            {
                "value": "ok",
                "label": "Ok"
            },
            {
                "value": "Not ok",
                "label": "Not Ok"
            },
            {
                "value": "pending",
                "label": "Pending"
            },
            
        ]
    },
    {
        "name":"return_replace",
        "type":"select",
        "label":"Return/Replace",
        "option":[
            {
                "value":"return",
                "label":"Return"
            },
            {
                "value":"replace",
                "label":"Replace"
            }
        ]
    }
]

const outwardfields=[
    {
        "name": "challan_number",
        "type": "text",
        "label": "Challan_Number"
    },
    {
        "name": "employee_id",
        "type": "text",
        "label": "Employee Id"
    },
    {
        "name": "delivery_location",
        "type": "text",
        "label": "Delivery Location"
    },
    {
        "name": "contact_number",
        "type": "text",
        "label": "Contact Number"
    },
    {
        "name": "request_type",
        "type": "text",
        "label": "Request Type"
    },
    {
        "name": "return_status",
        "type": "text",
        "label": "Return Status"
    },
    {
        "name": "employee_code",
        "type": "text",
        "label": "Employee Code"
    },
    {
        "name": "docket_number",
        "type": "text",
        "label": "Docket Number"
    },
    {
        "name": "out_date",
        "type": "text",
        "label": "Out Date"
    },
    {
        "name": "product_condition",
        "type": "select",
        "label": "Product Condition",
        "option": [
            {
                "value": "ok",
                "label": "Ok"
            },
            {
                "value": "Not ok",
                "label": "Not Ok"
            },
            {
                "value": "pending",
                "label": "Pending"
            },
            
        ]
    },
]

export { form,outwardfields };

