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
  packageDetails: {
    included: PackageDetail[];
    optional: PackageDetail[];
  };
}

export const content: Content = {
  manufacturers: {
    atlantic: {
      cardImgSrc: "/images/atlantic.jpg",
      cardImgAltText: "Atlantic Above Ground Pool",
      manufacturer: "Generation",
      pools: [
        { shape: "Round", size: " 15'", price: "$2299" },
        { shape: "Round", size: " 18'", price: "$2799" },
        { shape: "Round", size: " 21'", price: "$2999" },
        { shape: "Round", size: " 24'", price: "$3299" },
        { shape: "Round", size: " 27'", price: "$3799" },
        { shape: "Oval", size: " 12' x 24'", price: "$3999" },
        { shape: "Oval", size: " 15' x 30'", price: "$4899" },
        { shape: "Oval", size: " 18' x 33'", price: "$5499" },
      ],
    },
    aquaLeader: {
      cardImgSrc: "/images/aqualLeader.jpg",
      cardImgAltText: "Aqual Leader Above Ground Pool",
      manufacturer: "Aqua Leader",
      pools: [
        { shape: "Round", size: " 12'", price: "$2499" },
        { shape: "Round", size: " 15'", price: "$2999" },
        { shape: "Round", size: " 18'", price: "$3399" },
        { shape: "Round", size: " 21'", price: "$3699" },
        { shape: "Round", size: " 24'", price: "$3999" },
        { shape: "Round", size: " 27'", price: "$4399" },
        { shape: "Oval", size: " 12' x 23'", price: "$5399" },
        { shape: "Oval", size: " 15' x 30'", price: "$6499" },
        { shape: "Oval", size: " 18' x 33'", price: "$6699" },
      ],
    },
    tivoli: {
      cardImgSrc: "/images/tivoli.jpg",
      cardImgAltText: "Tivoli Above Ground Pool",
      manufacturer: "Tivoli",
      pools: [
        { shape: "Round", size: " 15'", price: "$2699" },
        { shape: "Round", size: " 18'", price: "$2999" },
        { shape: "Round", size: " 21'", price: "$3199" },
        { shape: "Round", size: " 24'", price: "$3399" },
        { shape: "Oval", size: " 12' x 24'", price: "$4499" },
        { shape: "Oval", size: " 15' x 30'", price: "$5299" },
      ],
    },
    southPort: {
      cardImgSrc: "/images/southPort.jpg",
      cardImgAltText: "South Port Above Ground Pool",
      manufacturer: "South Port",
      pools: [
        { shape: "Round", size: " 15'", price: "$1999" },
        { shape: "Round", size: " 18'", price: "$2299" },
        { shape: "Round", size: " 21'", price: "$2599" },
        { shape: "Round", size: " 24'", price: "$2799" },
        { shape: "Oval", size: " 15' x 30'", price: "$3699" },
      ],
    },
    sovana: {
      cardImgSrc: "/images/sovana.jpg",
      cardImgAltText: "Sovana Above Ground Pool",
      manufacturer: "Sovana",
      pools: [
        { shape: "Round", size: " 15'", price: "$2599" },
        { shape: "Round", size: " 18'", price: "$2799" },
        { shape: "Round", size: " 21'", price: "$2999" },
        { shape: "Round", size: " 24'", price: "$3199" },
        { shape: "Oval", size: " 12' x 23'", price: "$3999" },
        { shape: "Oval", size: " 15' x 30'", price: "$4899" },
      ],
    },
  },

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
      { feature: "Vacuum Pole, Vacuum Head & Hose", price: "Included!" },
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
      { feature: "A-Frame Ladder", price: "$200" },
      {
        feature: "Hayward AquaTrol Salt System",
        price: "$749",
      },
      { feature: "Hayward Chlorometer", price: "$99" },
      {
        feature: "E-Pool Natural Chemicals",
        price: "$99",
      },
      { feature: "Chemical Start-Up", price: "$49" },
      { feature: "Solar Blanket", price: "*Call for price*" },
      { feature: "Winter Cover", price: "*Call for price*" },
    ],
  },
};
