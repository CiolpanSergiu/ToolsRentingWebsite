export interface ProductData {
  link: string;
  imgUrl: string;
  imgAlt: string;
  // this can be later replaced with all possible values a tool's category can holds
  // it can also be set as an arrat in case some tools have multiple categories
  category: string;
  productName: string;
  price: number;
  // optional in case some tools have a different renting period
  // maxRentingDays: number
}

const productsData: ProductData[] = [
  {
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Hand Tool",
    category: "machinery",
    productName: "Hammer 1",
    price: 123,
  },
  {
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Hand Tool",
    category: "hand tool",
    productName: "Hammer 2",
    price: 123,
  },
  {
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Hand Tool",
    category: "hand tool",
    productName: "Hammer 3",
    price: 123,
  },
  {
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Hand Tool",
    category: "garden tool",
    productName: "Hammer 4",
    price: 123,
  },
  {
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Hand Tool",
    category: "heavy duty tool",
    productName: "Hammer 5",
    price: 123,
  },
  {
    link: "#",
    imgUrl:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Hand Tool",
    category: "car",
    productName: "Hammer 6",
    price: 123,
  },
];

export default productsData;
