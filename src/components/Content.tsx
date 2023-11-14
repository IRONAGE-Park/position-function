import { useState } from "react";

import View from "@components/View.tsx";
import Controller from "@components/Controller.tsx";

const Content = () => {
  const [products, setProducts] = useState<string[]>([
    "Product1",
    "Product2",
    "Product3",
    "Product4",
    "Product5",
  ]);

  const [data, setData] = useState<Data>([
    {
      category: "Image",
      value: {
        Product1: null,
        Product2: null,
        Product3: null,
        Product4: null,
        Product5: null,
      },
    },
    {
      category: "Category1",
      value: {
        Product1: 100,
        Product2: 200,
        Product3: 300,
        Product4: 400,
        Product5: 500,
      },
    },
    {
      category: "Category2",
      value: {
        Product1: 100,
        Product2: 200,
        Product3: 300,
        Product4: 400,
        Product5: 500,
      },
    },
    {
      category: "Category3",
      value: {
        Product1: 100,
        Product2: 200,
        Product3: 300,
        Product4: 400,
        Product5: 500,
      },
    },
  ]);

  const onUpdateDate = (products: string[], data: Data) => {
    setProducts(products);
    setData(data);
  };

  return (
    <div className="Content">
      <View products={products} data={data} />
      <Controller products={products} data={data} onUpdateDate={onUpdateDate} />
    </div>
  );
};
export default Content;
