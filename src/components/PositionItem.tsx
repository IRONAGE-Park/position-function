const PositionItem = ({ image, product, x, y }: PositionElement) => {
  return (
    <div
      className="View-PosGraph-Element"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        backgroundImage: `url(${image})`,
      }}
      onError={console.log}
    >
      {image ? "" : product}
    </div>
  );
};

export default PositionItem;
