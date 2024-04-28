for creating form
{
    "category_id": 1,
    "subcategory_name": "Laptop",
    "brand_name": [
      "Dell",
      "HP"
    ],
    "form": [
      {
        "name": "model",
        "type": "text",
        "label": "Model"
      },
      {
        "name": "ram",
        "type": "number",
        "label": "Ram"
      },
      {
        "name": "hdd",
        "type": "number",
        "label": "HDD"
      },
      {
        "name": "ram_type",
        "type": "select",
        "label": "Ram Type",
        "option": [
          {
            "value": "ddr2",
            "label": "DDR2"
          },
          {
            "value": "ddr3",
            "label": "DDR3"
          },
          {
            "value": "ddr4",
            "label": "DDR4"
          }
        ]
      }
    ]
  }

http://localhost/ims/public/form/8
for reading form
  [
    {
        "category": {
            "id": 1,
            "name": "Electronics"
        },
        "subcategory": {
            "id": 8,
            "name": "Laptop"
        },
        "brand": [
            {
                "id": 9,
                "name": "Dell"
            }
        ],
        "form": [
            {
                "id": 5,
                "name": "model",
                "type": "text",
                "label": "Model"
            },
            {
                "id": 6,
                "name": "ram",
                "type": "number",
                "label": "Ram"
            },
            {
                "id": 7,
                "name": "hdd",
                "type": "number",
                "label": "HDD"
            },
            {
                "id": 8,
                "name": "ram_type",
                "type": "select",
                "label": "Ram Type",
                "option": [
                    {
                        "id": 1,
                        "value": "ddr2",
                        "label": "DDR2"
                    },
                    {
                        "id": 2,
                        "value": "ddr3",
                        "label": "DDR3"
                    },
                    {
                        "id": 3,
                        "value": "ddr4",
                        "label": "DDR4"
                    }
                ]
            }
        ]
    }
]