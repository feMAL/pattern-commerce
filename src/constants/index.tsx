import { CatalogPattern } from "@/types/index";

export const data :CatalogPattern[] = [
    {
        name: "Easta",
        title: "Easta",
        products: [
            {
                id: new Date().getTime().toString() + "1",
                name: 'Super_Tooth',
                image: 'https://www.lorartsofficial.com/wp-content/uploads/2024/02/Super-Tooth-Info_0006_BUBBLE.jpg',
                title: 'Super Tooth',
                price: 13,
                description: `Please check your inbox/spam after the transaction is successful. Click the DOWNLOAD section to get the file.\n\n

        * Panel and PNG can be ordered\n
        *Additional size, colors (limited slots), and format are possible. Please contact me via email at pazpatterns.official@gmail.com or DM on IG.\n
        *Small fee may applies for an extra modification.\n\n
        
        Please NOTE:
        – The patterns are purposed for fabric prints only.
        – You can’t sublicense, sell, or distribute the file to any other party, in person or online.
        – You can’t modify the original file.
        – Purchasing means you own the license to use the file, not the properties.
        – Compensation fee may apply for breaking the terms.
        
        For more info, please contact pazpatterns.official@gmail.com`, 
                isExclusive: false,
                variants: [
                    {
                        name: "super_tooth_blue",
                        image: 'https://www.lorartsofficial.com/wp-content/uploads/2024/02/Super-Tooth-Info_0006_BUBBLE.jpg',
                        color: "blue"
                    }
                ],
                tags:[]
            },
            {
                id: new Date().getTime().toString() + "2",
                name: 'Pretty-Flamingo',
                image: 'https://www.lorartsofficial.com/wp-content/uploads/2024/01/Pretty-Flamingo-PNG.jpg',
                title: 'Pretty-Flamingo',
                price: 18,
                isExclusive: true,
                variants: [],
                tags:[]
            },
            {
                id: new Date().getTime().toString() + "3",
                name: 'Pretty-Flamingo',
                image: 'https://www.lorartsofficial.com/wp-content/uploads/2024/01/Pretty-Flamingo-PNG.jpg',
                title: 'Pretty-Flamingo',
                price: 40,
                isExclusive: true,
                variants: [],
                tags:[]
            },
            {
                id: new Date().getTime().toString() + "4",
                name: 'Pretty-Flamingo',
                image: 'https://www.lorartsofficial.com/wp-content/uploads/2024/01/Pretty-Flamingo-PNG.jpg',
                title: 'Pretty-Flamingo',
                price: 40,
                isExclusive: true,
                variants: [],
                tags:[]
            }
        ]
    },
    {
        name: "Primavera",
        title: "Primavera",
        products: [
            {
                id: new Date().getTime().toString()  + "5",
                name: 'Pretty-Flamingo',
                image: 'https://www.lorartsofficial.com/wp-content/uploads/2024/01/Pretty-Flamingo-PNG.jpg',
                title: 'Pretty-Flamingo',
                price: 23,
                isExclusive: false,
                variants: [],
                tags:[]
            },
            {
                id: new Date().getTime().toString() + "6",
                name: 'Pretty-Flamingo',
                image: 'https://www.lorartsofficial.com/wp-content/uploads/2024/01/Pretty-Flamingo-PNG.jpg',
                title: 'Pretty-Flamingo',
                price: 15,
                isExclusive: true,
                variants: [],
                tags:[]
            },
            {
                id: new Date().getTime().toString()  + "7",
                name: 'Pretty-Flamingo',
                image: 'https://www.lorartsofficial.com/wp-content/uploads/2024/01/Pretty-Flamingo-PNG.jpg',
                title: 'Pretty-Flamingo',
                price: 18,
                isExclusive: false,
                variants: [],
                tags:[]
            },
            {
                id: new Date().getTime().toString()  + "8s",
                name: 'Pretty-Flamingo',
                image: 'https://www.lorartsofficial.com/wp-content/uploads/2024/01/Pretty-Flamingo-PNG.jpg',
                title: 'Pretty-Flamingo',
                price: 400,
                isExclusive: false,
                variants: [],
                tags:[]
            }
        ]
    }
]
