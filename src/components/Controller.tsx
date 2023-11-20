import { useState } from "react";

import ControllerPreset from "@components/ControllerPreset.tsx";
import ControllerTable from "@components/ControllerTable.tsx";

import "@components/Controller.css";

interface ControllerProps {
  products: string[];
  data: Data;
  onUpdateDate: (products: string[], data: Data) => void;
}

const Controller = ({ products, data, onUpdateDate }: ControllerProps) => {
  const [isSlide, setIsSlide] = useState(false);

  return (
    <div className="Controller">
      <span
        className="Controller-Sliding"
        style={{
          transform: `translateY(${isSlide ? 0 : -100}%)`,
        }}
        onClick={() => setIsSlide(!isSlide)}
      >
        {isSlide ? "▲" : "▼"}
      </span>
      <ControllerPreset onUpdateDate={onUpdateDate} />
      <section
        style={{
          width: "100%",
          overflow: "auto",
        }}
      >
        <ControllerTable
          products={products}
          data={data}
          onUpdateDate={onUpdateDate}
        />
      </section>
    </div>
  );
};

export default Controller;
