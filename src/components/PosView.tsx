import { useState } from "react";

import PosGraph from "@components/PosGraph.tsx";
import PosSelector from "@components/PosSelector.tsx";

interface PosViewProps {
  products: string[];
  data: Data;
}

const PosView = ({ products, data }: PosViewProps) => {
  const [selectedVerticalCategory, setSelectedVerticalCategory] = useState<
    string | null
  >(null);
  const [selectedHorizontalCategory, setSelectedHorizontalCategory] = useState<
    string | null
  >(null);

  const onChangeSelected =
    (vector: "vertical" | "horizontal") => (category: string) => {
      if (vector === "vertical") {
        setSelectedVerticalCategory(category);
      } else {
        setSelectedHorizontalCategory(category);
      }
    };

  const calculateSelectedData = (products: string[], data: Data) => {
    const [_, ...amountData] = data;
    const verticalSelectedData = amountData.find(
      d => d.category === selectedVerticalCategory,
    );
    const horizontalSelectedData = amountData.find(
      d => d.category === selectedHorizontalCategory,
    );

    const compareData: PositionElement[] = products
      .map(product => ({
        product,
        image: data[0].value[product],
        x: 50,
        y: 50,
      }))
      .map(d => ({
        ...d,
        x: verticalSelectedData ? verticalSelectedData.value[d.product] : 0,
        y: horizontalSelectedData ? horizontalSelectedData.value[d.product] : 0,
      }));

    const maxX = Math.max(...compareData.map(data => data.x));
    const maxY = Math.max(...compareData.map(data => data.y));
    const minX = Math.min(...compareData.map(data => data.x));
    const minY = Math.min(...compareData.map(data => data.y));

    const isDifferX = maxX - minX !== 0;
    const isDifferY = maxY - minY !== 0;

    return compareData.map(d => {
      return {
        ...d,
        x: (isDifferX ? ((d.x - minX) / (maxX - minX)) * 90 : 45) + 5,
        y: (isDifferY ? ((d.y - minY) / (maxY - minY)) * 90 : 45) + 5,
      };
    });
  };

  const elements =
    selectedVerticalCategory || selectedHorizontalCategory
      ? calculateSelectedData(products, data)
      : [];

  return (
    <div className="View-Element">
      <PosGraph
        elements={elements}
        verticalCategory={selectedVerticalCategory}
        horizontalCategory={selectedHorizontalCategory}
      />
      <PosSelector
        categories={data.map(data => data.category)}
        selectedVerticalCategory={selectedVerticalCategory}
        selectedHorizontalCategory={selectedHorizontalCategory}
        onChangeVerticalCategory={onChangeSelected("vertical")}
        onChangeHorizontalCategory={onChangeSelected("horizontal")}
      />
    </div>
  );
};

export default PosView;
