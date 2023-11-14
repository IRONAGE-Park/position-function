import PositionItem from "@components/PositionItem.tsx";

import "@components/PosGraph.css";
interface PosGraphProps {
  elements: PositionElement[];
  verticalCategory: string | null;
  horizontalCategory: string | null;
}

const PosGraph = ({
  elements,
  verticalCategory,
  horizontalCategory,
}: PosGraphProps) => {
  return (
    <div className="View-PosGraph">
      <hr className="View-PosGraph-Line-horizontal" />
      <hr className="View-PosGraph-Line-vertical" />
      <span
        className="View-PosGraph-Line-Guide-horizontal"
        style={{ transform: "translate(-100%, 50%)" }}
      >
        ◀{horizontalCategory}
      </span>
      <span
        className="View-PosGraph-Line-Guide-horizontal"
        style={{ transform: "translate(100%, 50%)", right: 0 }}
      >
        {horizontalCategory}▶
      </span>
      <span
        className="View-PosGraph-Line-Guide-vertical"
        style={{ transform: "translate(50%, -100%)" }}
      >
        ▲{verticalCategory}
      </span>
      <span
        className="View-PosGraph-Line-Guide-vertical"
        style={{ transform: "translate(50%, 100%)", bottom: 0 }}
      >
        {verticalCategory}▼
      </span>
      {elements.map(element => (
        <PositionItem
          key={element.product}
          image={element.image}
          product={element.product}
          x={element.x}
          y={element.y}
        />
      ))}
    </div>
  );
};

export default PosGraph;
