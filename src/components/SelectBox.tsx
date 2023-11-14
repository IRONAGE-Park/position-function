import _Arrow from "@assets/arrow.svg";

interface SelectBoxProps {
  categories: string[];
  selectedCategory: string | null;
  onChangeCategory: (category: string) => void;
  color: string;
}

const SelectBox = ({
  categories,
  selectedCategory,
  onChangeCategory,
  color,
}: SelectBoxProps) => {
  return (
    <div
      className="View-PosSelector-Menu"
      style={{
        borderBottom: `solid 5px ${color}`,
      }}
    >
      <span className="View-PosSelector-Selected">
        {selectedCategory ?? "선택 없음"}
        <img className="View-PosSelector-Arrow" src={_Arrow} alt="arrow" />
      </span>
      <ul className="View-PosSelector-List">
        {categories.map(category => (
          <li
            key={category}
            className="View-PosSelector-Item"
            onClick={() => onChangeCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
