import { createSlice } from "@reduxjs/toolkit";
// import image1 from "../assets/image1.avif";

const dataSlice = createSlice({
  name: "data",
  initialState: [
    // {
    //   name: "Black Polo",
    //   price: 300,
    //   color: "Black",
    //   image: image1,
    //   totalQuantity: 12,
    // },
    // {
    //   name: "Blue Polo",
    //   price: 300,
    //   color: "Blue",
    //   image: image1,
    //   totalQuantity: 18,
    // },
    // {
    //   name: "Black Hoodie",
    //   price: 300,
    //   color: "Black",
    //   image: image1,
    //   totalQuantity: 2,
    // },
    // {
    //   name: "Pink Round",
    //   price: 300,
    //   color: "Pink",
    //   image: image1,
    //   totalQuantity: 5,
    // },
    {
      id: 1,
      name: "Powlowski Group",
      price: "$0.20",
      color: "Pink",
      image: "http://dummyimage.com/238x100.png/cc0000/ffffff",
      totalQuantity: 8,
      gender: "Female",
    },
    {
      id: 2,
      name: "Nienow, Haley and Ullrich",
      price: "$7.60",
      color: "Red",
      image: "http://dummyimage.com/156x100.png/dddddd/000000",
      totalQuantity: 75,
      gender: "Female",
    },
    {
      id: 3,
      name: "Kutch Group",
      price: "$0.63",
      color: "Blue",
      image: "http://dummyimage.com/187x100.png/dddddd/000000",
      totalQuantity: 76,
      gender: "Male",
    },
    {
      id: 4,
      name: "Morar Inc",
      price: "$6.64",
      color: "Crimson",
      image: "http://dummyimage.com/131x100.png/dddddd/000000",
      totalQuantity: 94,
      gender: "Male",
    },
    {
      id: 5,
      name: "Roberts Group",
      price: "$7.26",
      color: "Fuscia",
      image: "http://dummyimage.com/239x100.png/cc0000/ffffff",
      totalQuantity: 82,
      gender: "Female",
    },
    {
      id: 6,
      name: "Goldner-Bruen",
      price: "$7.85",
      color: "Maroon",
      image: "http://dummyimage.com/199x100.png/5fa2dd/ffffff",
      totalQuantity: 38,
      gender: "Female",
    },
    {
      id: 7,
      name: "Veum-Powlowski",
      price: "$5.86",
      color: "Aquamarine",
      image: "http://dummyimage.com/221x100.png/cc0000/ffffff",
      totalQuantity: 64,
      gender: "Female",
    },
    {
      id: 8,
      name: "Weissnat, Mante and Morar",
      price: "$0.17",
      color: "Purple",
      image: "http://dummyimage.com/115x100.png/5fa2dd/ffffff",
      totalQuantity: 39,
      gender: "Female",
    },
    {
      id: 9,
      name: "Hegmann Inc",
      price: "$4.48",
      color: "Green",
      image: "http://dummyimage.com/161x100.png/5fa2dd/ffffff",
      totalQuantity: 19,
      gender: "Female",
    },
    {
      id: 10,
      name: "Effertz, Morissette and Becker",
      price: "$5.97",
      color: "Turquoise",
      image: "http://dummyimage.com/127x100.png/cc0000/ffffff",
      totalQuantity: 66,
      gender: "Male",
    },
    {
      id: 11,
      name: "Heathcote, Skiles and Beer",
      price: "$8.27",
      color: "Khaki",
      image: "http://dummyimage.com/181x100.png/dddddd/000000",
      totalQuantity: 100,
      gender: "Male",
    },
    {
      id: 12,
      name: "Luettgen, Raynor and Barrows",
      price: "$1.81",
      color: "Puce",
      image: "http://dummyimage.com/203x100.png/ff4444/ffffff",
      totalQuantity: 93,
      gender: "Male",
    },
    {
      id: 13,
      name: "Hickle-Abshire",
      price: "$6.86",
      color: "Indigo",
      image: "http://dummyimage.com/189x100.png/ff4444/ffffff",
      totalQuantity: 13,
      gender: "Female",
    },
    {
      id: 14,
      name: "Schowalter, Haag and Schmidt",
      price: "$5.90",
      color: "Turquoise",
      image: "http://dummyimage.com/105x100.png/cc0000/ffffff",
      totalQuantity: 32,
      gender: "Male",
    },
    {
      id: 15,
      name: "Turner-Monahan",
      price: "$3.44",
      color: "Yellow",
      image: "http://dummyimage.com/180x100.png/ff4444/ffffff",
      totalQuantity: 68,
      gender: "Female",
    },
    {
      id: 16,
      name: "Walter Group",
      price: "$4.50",
      color: "Puce",
      image: "http://dummyimage.com/128x100.png/5fa2dd/ffffff",
      totalQuantity: 72,
      gender: "Male",
    },
    {
      id: 17,
      name: "Kuhlman-Sanford",
      price: "$1.42",
      color: "Purple",
      image: "http://dummyimage.com/151x100.png/ff4444/ffffff",
      totalQuantity: 88,
      gender: "Male",
    },
    {
      id: 18,
      name: "Huel-Deckow",
      price: "$5.54",
      color: "Red",
      image: "http://dummyimage.com/247x100.png/ff4444/ffffff",
      totalQuantity: 82,
      gender: "Female",
    },
    {
      id: 19,
      name: "Erdman-Hegmann",
      price: "$2.37",
      color: "Teal",
      image: "http://dummyimage.com/138x100.png/cc0000/ffffff",
      totalQuantity: 92,
      gender: "Male",
    },
    {
      id: 20,
      name: "Hills LLC",
      price: "$1.34",
      color: "Purple",
      image: "http://dummyimage.com/161x100.png/ff4444/ffffff",
      totalQuantity: 30,
      gender: "Male",
    },
    {
      id: 21,
      name: "Kuvalis LLC",
      price: "$8.49",
      color: "Red",
      image: "http://dummyimage.com/164x100.png/5fa2dd/ffffff",
      totalQuantity: 50,
      gender: "Male",
    },
    {
      id: 22,
      name: "Haag LLC",
      price: "$8.24",
      color: "Purple",
      image: "http://dummyimage.com/164x100.png/cc0000/ffffff",
      totalQuantity: 50,
      gender: "Female",
    },
    {
      id: 23,
      name: "Hermiston, Hahn and Champlin",
      price: "$1.98",
      color: "Red",
      image: "http://dummyimage.com/140x100.png/cc0000/ffffff",
      totalQuantity: 12,
      gender: "Male",
    },
    {
      id: 24,
      name: "Bins, Rutherford and DuBuque",
      price: "$0.11",
      color: "Blue",
      image: "http://dummyimage.com/179x100.png/ff4444/ffffff",
      totalQuantity: 92,
      gender: "Female",
    },
    {
      id: 25,
      name: "Padberg-Satterfield",
      price: "$0.38",
      color: "Fuscia",
      image: "http://dummyimage.com/153x100.png/cc0000/ffffff",
      totalQuantity: 34,
      gender: "Male",
    },
    {
      id: 26,
      name: "Mohr LLC",
      price: "$7.95",
      color: "Fuscia",
      image: "http://dummyimage.com/119x100.png/ff4444/ffffff",
      totalQuantity: 8,
      gender: "Female",
    },
    {
      id: 27,
      name: "McKenzie, Little and Ruecker",
      price: "$8.38",
      color: "Teal",
      image: "http://dummyimage.com/106x100.png/ff4444/ffffff",
      totalQuantity: 33,
      gender: "Male",
    },
    {
      id: 28,
      name: "Wisozk, Kautzer and Turner",
      price: "$9.97",
      color: "Violet",
      image: "http://dummyimage.com/180x100.png/cc0000/ffffff",
      totalQuantity: 72,
      gender: "Female",
    },
    {
      id: 29,
      name: "Leannon Inc",
      price: "$7.01",
      color: "Indigo",
      image: "http://dummyimage.com/109x100.png/ff4444/ffffff",
      totalQuantity: 40,
      gender: "Male",
    },
    {
      id: 30,
      name: "Sporer-Schiller",
      price: "$4.88",
      color: "Goldenrod",
      image: "http://dummyimage.com/235x100.png/ff4444/ffffff",
      totalQuantity: 64,
      gender: "Male",
    },
    {
      id: 31,
      name: "McClure LLC",
      price: "$4.97",
      color: "Crimson",
      image: "http://dummyimage.com/181x100.png/ff4444/ffffff",
      totalQuantity: 43,
      gender: "Male",
    },
    {
      id: 32,
      name: "Fisher, Harris and Ernser",
      price: "$2.45",
      color: "Pink",
      image: "http://dummyimage.com/213x100.png/cc0000/ffffff",
      totalQuantity: 100,
      gender: "Female",
    },
    {
      id: 33,
      name: "Herzog LLC",
      price: "$6.54",
      color: "Violet",
      image: "http://dummyimage.com/103x100.png/ff4444/ffffff",
      totalQuantity: 82,
      gender: "Female",
    },
    {
      id: 34,
      name: "Roob, Lowe and Barton",
      price: "$7.00",
      color: "Purple",
      image: "http://dummyimage.com/228x100.png/5fa2dd/ffffff",
      totalQuantity: 60,
      gender: "Male",
    },
    {
      id: 35,
      name: "Mayer, Bergstrom and Langworth",
      price: "$8.10",
      color: "Blue",
      image: "http://dummyimage.com/242x100.png/5fa2dd/ffffff",
      totalQuantity: 58,
      gender: "Male",
    },
    {
      id: 36,
      name: "Stark Inc",
      price: "$3.98",
      color: "Fuscia",
      image: "http://dummyimage.com/137x100.png/ff4444/ffffff",
      totalQuantity: 100,
      gender: "Male",
    },
    {
      id: 37,
      name: "Barrows Inc",
      price: "$9.88",
      color: "Orange",
      image: "http://dummyimage.com/241x100.png/cc0000/ffffff",
      totalQuantity: 42,
      gender: "Male",
    },
    {
      id: 38,
      name: "Kling-Gerhold",
      price: "$7.28",
      color: "Pink",
      image: "http://dummyimage.com/245x100.png/ff4444/ffffff",
      totalQuantity: 79,
      gender: "Female",
    },
    {
      id: 39,
      name: "Sporer, Mayert and Rempel",
      price: "$9.43",
      color: "Turquoise",
      image: "http://dummyimage.com/163x100.png/ff4444/ffffff",
      totalQuantity: 58,
      gender: "Male",
    },
    {
      id: 40,
      name: "Bruen-Barton",
      price: "$5.54",
      color: "Pink",
      image: "http://dummyimage.com/102x100.png/5fa2dd/ffffff",
      totalQuantity: 4,
      gender: "Male",
    },
    {
      id: 41,
      name: "Fadel-Wilderman",
      price: "$1.13",
      color: "Mauv",
      image: "http://dummyimage.com/118x100.png/5fa2dd/ffffff",
      totalQuantity: 94,
      gender: "Male",
    },
    {
      id: 42,
      name: "Becker-Legros",
      price: "$5.41",
      color: "Pink",
      image: "http://dummyimage.com/121x100.png/dddddd/000000",
      totalQuantity: 98,
      gender: "Male",
    },
    {
      id: 43,
      name: "Medhurst-Bruen",
      price: "$6.21",
      color: "Fuscia",
      image: "http://dummyimage.com/198x100.png/5fa2dd/ffffff",
      totalQuantity: 67,
      gender: "Male",
    },
    {
      id: 44,
      name: "Morissette-Daugherty",
      price: "$3.38",
      color: "Goldenrod",
      image: "http://dummyimage.com/146x100.png/cc0000/ffffff",
      totalQuantity: 9,
      gender: "Female",
    },
    {
      id: 45,
      name: "Koss and Sons",
      price: "$1.81",
      color: "Red",
      image: "http://dummyimage.com/135x100.png/ff4444/ffffff",
      totalQuantity: 32,
      gender: "Male",
    },
    {
      id: 46,
      name: "Jaskolski Group",
      price: "$0.49",
      color: "Puce",
      image: "http://dummyimage.com/245x100.png/dddddd/000000",
      totalQuantity: 86,
      gender: "Female",
    },
    {
      id: 47,
      name: "Pfannerstill-Fay",
      price: "$3.28",
      color: "Aquamarine",
      image: "http://dummyimage.com/187x100.png/5fa2dd/ffffff",
      totalQuantity: 30,
      gender: "Female",
    },
    {
      id: 48,
      name: "Champlin LLC",
      price: "$2.81",
      color: "Blue",
      image: "http://dummyimage.com/155x100.png/5fa2dd/ffffff",
      totalQuantity: 53,
      gender: "Male",
    },
    {
      id: 49,
      name: "Brekke-Mills",
      price: "$3.09",
      color: "Violet",
      image: "http://dummyimage.com/127x100.png/dddddd/000000",
      totalQuantity: 11,
      gender: "Male",
    },
    {
      id: 50,
      name: "Schimmel-Jenkins",
      price: "$7.98",
      color: "Mauv",
      image: "http://dummyimage.com/133x100.png/ff4444/ffffff",
      totalQuantity: 21,
      gender: "Male",
    },
  ],
  reducers: {},
});

// export const {} = dataSlice.actions;

export default dataSlice.reducer;
