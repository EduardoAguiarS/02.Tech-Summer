export interface ProductProps {
  [x: string]: any;
  cacheId: string;
  productId: string;
  description: string;
  productName: string;
  productReference: string;
  linkText: string;
  brand: string;
  brandId: number;
  link: string;
  categories: string[];
  categoryId: string;
  priceRange: PriceRange;
  specificationGroups: SpecificationGroup[];
  skuSpecifications: SkuSpecification[];
  properties: Property[];
  items: Item[];
}

export interface Item {
  itemId: string;
  name: string;
  nameComplete: string;
  complementName: string;
  ean: string;
  variations: Property[];
  referenceId: ReferenceID[];
  measurementUnit: string;
  unitMultiplier: number;
  images: Image[];
  __typename: string;
  videos: any[];
  sellers: Seller[];
  kitItems: any[];
  attachments: Attachment[];
  estimatedDateArrival: null;
}

export interface Attachment {
  id: string;
  name: string;
  required: boolean;
  __typename: string;
}

export interface Image {
  cacheId: string;
  imageId: string;
  imageLabel: string;
  imageTag: string;
  imageUrl: string;
  imageText: string;
  __typename: string;
}

export interface ReferenceID {
  Key: string;
  Value: string;
  __typename: string;
}

export interface Seller {
  sellerId: string;
  sellerName: string;
  sellerDefault: boolean;
  __typename: string;
  addToCartLink: string;
  commertialOffer: CommertialOffer;
}

export interface CommertialOffer {
  discountHighlights: any[];
  teasers: any[];
  Price: number;
  ListPrice: number;
  Tax: number;
  taxPercentage: number;
  spotPrice: number;
  PriceWithoutDiscount: number;
  RewardValue: number;
  PriceValidUntil: Date;
  AvailableQuantity: number;
  __typename: string;
  CacheVersionUsedToCallCheckout: string;
  Installments: Installment[];
}

export interface Installment {
  Value: number;
  InterestRate: number;
  TotalValuePlusInterestRate: number;
  NumberOfInstallments: number;
  Name: string;
  PaymentSystemName: string;
  __typename: Typename;
}

export enum Typename {
  Installment = "Installment"
}

export interface Property {
  name: string;
  values: string[];
  __typename: string;
}

export interface PriceRange {
  sellingPrice: Price;
  listPrice: Price;
  __typename: string;
}

export interface Price {
  highPrice: number;
  lowPrice: number;
  __typename: string;
}

export interface SkuSpecification {
  field: SpecificationGroup;
  values: SpecificationGroup[];
  __typename: string;
}

export interface SpecificationGroup {
  name: string;
  originalName: string;
  __typename: string;
  specifications?: SpecificationGroup[];
  values?: string[];
}
