import SelectBox from "@components/SelectBox.tsx";

interface PosSelectorProps {
  categories: string[];
  selectedVerticalCategory: string | null;
  selectedHorizontalCategory: string | null;
  onChangeVerticalCategory: (category: string) => void;
  onChangeHorizontalCategory: (category: string) => void;
}

const PosSelector = ({
  categories,
  selectedVerticalCategory,
  selectedHorizontalCategory,
  onChangeVerticalCategory,
  onChangeHorizontalCategory,
}: PosSelectorProps) => {
  return (
    <div className="View-PosSelector">
      <SelectBox
        categories={categories}
        selectedCategory={selectedVerticalCategory}
        onChangeCategory={onChangeVerticalCategory}
        color="#00C441"
      />
      <SelectBox
        categories={categories}
        selectedCategory={selectedHorizontalCategory}
        onChangeCategory={onChangeHorizontalCategory}
        color="#FF1200"
      />
    </div>
  );
};

export default PosSelector;
