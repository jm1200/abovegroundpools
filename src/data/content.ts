export interface PoolData {
  shape: string;
  size: string;
  price: string;
}

export interface ManufacturerCardData {
  cardImgSrc: string;
  cardImgAltText: string;
  pools: PoolData[];
  manufacturer: string;
}

export type Manufacturer =
  | "southPort"
  | "sovana"
  | "tivoli"
  | "atlantic"
  | "aquaLeader";

export interface PackageDetail {
  feature: string;
  price: string;
}

export interface Content {
  manufacturers: {
    southPort: ManufacturerCardData;
    sovana: ManufacturerCardData;
    tivoli: ManufacturerCardData;
    atlantic: ManufacturerCardData;
    aquaLeader: ManufacturerCardData;
  };
  additionalProducts: {
    name: string;
    detail: string;
    price: string;
  }[];
  packageDetails: {
    included: PackageDetail[];
    optional: PackageDetail[];
  };
  poolpics: { desc: string; src: string }[];
}

export const content: Content = {
  manufacturers: {
    atlantic: {
      cardImgSrc: "/images/atlantic.jpg",
      cardImgAltText: "Atlantic Above Ground Pool",
      manufacturer: "Generation",
      pools: [
        // { shape: "Round", size: " 12'", price: "Sold Out" },
        { shape: "Round", size: " 15'", price: "$3699" },
        { shape: "Round", size: " 18'", price: "$3999" },
        { shape: "Round", size: " 21'", price: "$4499" },
        // { shape: "Round", size: " 24'", price: "Sold Out" },
        // { shape: "Round", size: " 27'", price: "Sold Out" },
        { shape: "Oval", size: " 12' x 24'", price: "$5899" },
        { shape: "Oval", size: " 15' x 24'", price: "$6299" },
        // { shape: "Oval", size: " 15' x 30'", price: "Sold Out" },
        // { shape: "Oval", size: " 18' x 33'", price: "Sold Out" },
      ],
    },
    aquaLeader: {
      cardImgSrc: "/images/aqualLeader.jpg",
      cardImgAltText: "Aqual Leader Above Ground Pool",
      manufacturer: "Aqua Leader",
      pools: [
        { shape: "Round", size: " 12'", price: "Sold Out" },
        { shape: "Round", size: " 15'", price: "Sold Out" },
        { shape: "Round", size: " 18'", price: "Sold Out" },
        { shape: "Round", size: " 21'", price: "Sold Out" },
        { shape: "Round", size: " 24'", price: "Sold Out" },
        { shape: "Round", size: " 27'", price: "$5999" },
        { shape: "Oval", size: " 12' x 23'", price: "Sold Out" },
        { shape: "Oval", size: " 15' x 30'", price: "Sold Out" },
        { shape: "Oval", size: " 18' x 33'", price: "Sold Out" },
      ],
    },
    tivoli: {
      cardImgSrc: "/images/tivoli.jpg",
      cardImgAltText: "Tivoli Above Ground Pool",
      manufacturer: "Tivoli",
      pools: [
        { shape: "Round", size: " 15'", price: "Sold Out" },
        { shape: "Round", size: " 18'", price: "Sold Out" },
        { shape: "Round", size: " 21'", price: "$4999" },
        { shape: "Round", size: " 24'", price: "$5399" },
        { shape: "Oval", size: " 12' x 24'", price: "Sold Out" },
        { shape: "Oval", size: " 15' x 30'", price: "Sold Out" },
      ],
    },
    southPort: {
      cardImgSrc: "/images/southport.jpg",
      cardImgAltText: "South Port Above Ground Pool",
      manufacturer: "South Port",
      pools: [
        { shape: "Round", size: " 15'", price: "Sold Out" },
        { shape: "Round", size: " 18'", price: "Sold Out" },
        { shape: "Round", size: " 21'", price: "Sold Out" },
        { shape: "Round", size: " 24'", price: "Sold Out" },
        { shape: "Oval", size: " 15' x 30'", price: "Sold Out" },
      ],
    },
    sovana: {
      cardImgSrc: "/images/sovana.jpg",
      cardImgAltText: "Sovana Above Ground Pool",
      manufacturer: "Sovana",
      pools: [
        { shape: "Round", size: " 15'", price: "$3999" },
        { shape: "Round", size: " 18'", price: "$4499" },
        { shape: "Round", size: " 21'", price: "$4799" },
        { shape: "Round", size: " 24'", price: "$4999" },
        { shape: "Oval", size: " 12' x 23'", price: "$6299" },
        { shape: "Oval", size: " 15' x 30'", price: "$7499" },
      ],
    },
  },
  additionalProducts: [
    {
      name: "Raypak Pool Heater",
      detail: "156A 156,000BTU",
      price: "$2099",
    },
    {
      name: "Raypak Pool Heater",
      detail: "206A 206,000BTU",
      price: "$2329",
    },
    {
      name: "Hayward Aqual Trol Salt Water System",
      detail: "",
      price: "$1199",
    },
    { name: "C-Pool Minerals", detail: "3L Tub", price: "$99" },
    { name: "Olympic Deck Ladder", detail: "", price: "Included!" },
    { name: "Olympic A-Frame Ladder", detail: "", price: "$479" },
    { name: "Royal Entrance Deck Steps", detail: "", price: "$569" },
  ],

  packageDetails: {
    included: [
      { feature: "Above Ground Pool Kit", price: "Included!" },
      {
        feature: "20 mil Deys pool liner - 10 year warranty!",
        price: "Included!",
      },
      { feature: "1HP Hayward Ultra Flow Pump", price: "Included!" },
      {
        feature: "Hayward Pro Series Sand Filter, sand included",
        price: "Included!",
      },
      { feature: "Skimmer/Return/Gaskets", price: "Included!" },
      { feature: "Olympic Deck Ladder", price: "Included!" },
      {
        feature: "Vacuum Pole, Vacuum Head & Hose",
        price: "Included!",
      },
      { feature: "Pool Brush, Leaf Skimmer", price: "Included!" },
      {
        feature: "Plumbing Kit (Flexhose, Clamps & Poly Fittings)",
        price: "Included!",
      },
      { feature: "25' Backwash Hose", price: "Included!" },
      { feature: "Instruction Manual & DVD", price: "Included!" },
      { feature: "Chemical Test Strips", price: "Included!" },
    ],
    optional: [
      { feature: "A-Frame Ladder", price: "$479" },
      {
        feature: "Hayward Aqua Trol Salt System",
        price: "$1199",
      },
      { feature: "Hayward Chlorinator", price: "$139" },
      {
        feature: "C-Pool Natural Minerals, 3L Tub",
        price: "$99",
      },
      { feature: "Chemical Start-Up", price: "$79" },
      { feature: "Solar Blanket", price: "*Call for price*" },
      { feature: "Winter Cover", price: "*Call for price*" },
      { feature: "Pool Heater", price: "*Call for price*" },
    ],
  },
  poolpics: [
    {
      desc: "Aqua Leader Influence - 18'",
      src: "/images/poolpics/18inf2020install.jpg",
    },
    {
      desc: "Aqua Leader Influence - 18'",
      src: "/images/poolpics/influence18pool ins2020.jpg",
    },
    {
      desc: "Aqua Leader Influence - 18'",
      src: "/images/poolpics/influence182020insta_.jpg",
    },
    {
      desc: "Atlantic Generation - 24'",
      src: "/images/poolpics/generation24.1poolinstall2020.jpg",
    },
    {
      desc: "Atlantic Generation - 24'",
      src: "/images/poolpics/generation24.2poolinstall2020.jpg",
    },
    {
      desc: "Aqua Leader Influence - 15'",
      src: "/images/poolpics/influence15.1pool install 2020.jpg",
    },
    {
      desc: "Aqua Leader Influence - 15'",
      src: "/images/poolpics/influence15poolinstall2020.jpg",
    },

    {
      desc: "Atlantic Tivoli - 21'",
      src: "/images/poolpics/tivili21.1poolinstall2020.jpg",
    },
    {
      desc: "Atlantic Tivoli - 21'",
      src: "/images/poolpics/tivoli21poolinstall2020.jpg",
    },
  ],
};
