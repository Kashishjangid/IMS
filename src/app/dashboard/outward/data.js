const dataforproduct =
  [
    "Select type of products",
    "Laptop",
    "Deshtop",
    "Printer",
    "Projector",
    "TFT",
    "UPS",
    "Battery",
    "Screen",
    "Charge",
    "Fan",
    "Headphone",
    "Keyboard",
    "Mouse",
    "RAM",
    "Harddisk",
    "Mobile",
    "Toner",
    "Wifi card",
    "Connector"
  ];


const demo = [
  {
    title: "Laptop",
    fildes: [
      { title: "Model" },
      { title: "Serial / Pin no." },
      { title: "GCV no." },
      { title: "Configuration" },
      {
        title: "RAM type",
        option: true,
        options: [
          { title: "Please select RAM type" },
          { title: "DDR2" },
          { title: "DDR3" },
          { title: "DDR4" },
          { title: "DDR5" },
          
        ]
      },
      { title: "RAM Size" },
      {
        title: "RAM unit",
        option: true,
        options: [
          { title: "Please select RAM unit" },
          { title: "MB" },
          { title: "GB" },
          { title: "TB" },
        ]
      },
      {
        title: "Harddisk type",
        option: true,
        options: [
          { title: "Please select type of Harddisk" },
          { title: "SSD" },
          { title: "HDD" },

        ]
      },
      { title: "Hard Disk Size" },
      {
        title: "Hard Disk unit",
        option: true,
        options: [
          { title: "Please select Harddisk unit" },
          { title: "GB" },
          { title: "TB" },

        ]
      },
      {
        title: "Product age",
        option: true,
        options: [
          { title: "Select old product or new product" },
          { title: "New" },
          { title: "Old" },

        ]
      },
      {
        title: "Product Condition",
        option: true,
        options: [
          { title: "Select old product or new product" },
          { title: "Working" },
          { title: "Not Working" },

        ]
      },


    ]


  },
  {
    title: "Printer",
    fildes: [
      { title: "Model" },
      { title: "Serial / Pin no." },
      {
        title: "Product age",
        option: true,
        options: [
          { title: "Select old product or new product" },
          { title: "New" },
          { title: "Old" },

        ]
      },
      { title: "In date" },
      {
        title: "Status",
        option: true,
        options: [
          { title: "Select old product or new product" },
          { title: "Working" },
          { title: "Not working" },

        ]
      },
    ]
  },
  {
    title: "Mouse",
    fildes: [
      { title: "Model" },
      {
        title: "Product age",
        option: true,
        options: [
          { title: "Select old product or new product" },
          { title: "New" },
          { title: "Old" },

        ]
      },
      { title: "in date" },
      {
        title: "Status",
        option: true,
        options: [
          { title: "Select old product or new product" },
          { title: "Working" },
          { title: "Not working" },

        ]
      },]
  }



]

const allfildes = [

  "Model",
  "Serial / Pin no.",
  "Tag no.",
  "Configuration",
  "RAM type",
  "RAM",
  "RAM unit",
  "Harddisk type",
  "Size of Hard Disk",
  "Harddisk unit",
  "Product age",
  "In date",
  "Status"

]





export { dataforproduct, demo, allfildes };