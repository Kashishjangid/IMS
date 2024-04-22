const data =
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
                { title: "Tag no." },
                { title: "Configuration" },
                { title: "RAM type" },
                { title: "RAM" },
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
                { title: "Size of Hard Disk" },
                {
                    title: "Harddisk unit",
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
                    title: "Product age",
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
                { title: "Tag no." },
                { title: "Configuration" },]
        }
    
    
    
    ]





export { data,demo};