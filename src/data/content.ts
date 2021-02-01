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

export interface Content {
  manufacturers: {
    southPort: ManufacturerCardData;
    sovana: ManufacturerCardData;
    tivoli: ManufacturerCardData;
    atlantic: ManufacturerCardData;
    aquaLeader: ManufacturerCardData;
  };
}

export const content: Content = {
  manufacturers: {
    southPort: {
      cardImgSrc: "/images/southPort.png",
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
      cardImgSrc: "/images/sovana.png",
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
    tivoli: {
      cardImgSrc: "/images/tivoli.png",
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
    atlantic: {
      cardImgSrc: "/images/atlantic.png",
      cardImgAltText: "Atlantic Above Ground Pool",
      manufacturer: "Atlantic",
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
      cardImgSrc: "/images/aqualLeader.png",
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
  },
};
