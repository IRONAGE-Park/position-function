import { useState } from "react";

import PosView from "@components/PosView.tsx";

import "@components/View.css";

interface ViewProps {
  products: string[];
  data: Data;
}

const View = ({ products, data }: ViewProps) => {
  const [elements, setElements] = useState<string[]>(["PosView"]);

  const onAddListener = () => setElements(elements.concat("PosView"));

  return (
    <div className="View">
      {elements.map(element => (
        <PosView key={element} products={products} data={data} />
      ))}
      <div className="View-Add-Button" onClick={onAddListener} />
    </div>
  );
};

export default View;
