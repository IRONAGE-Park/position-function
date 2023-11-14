import { useState } from "react";

import tempPresets from "../temp";

interface ControllerPresetProps {
  onUpdateDate: (products: string[], data: Data) => void;
}

const ControllerPreset = ({ onUpdateDate }: ControllerPresetProps) => {
  const [presets, _] = useState<Preset[]>(tempPresets);

  return (
    <ul className="Controller-Preset">
      {presets.map(preset => (
        <li
          className="Controller-Preset-Element"
          key={preset.name}
          onClick={() =>
            onUpdateDate(preset.content.products, preset.content.data)
          }
        >
          {preset.name}
        </li>
      ))}
    </ul>
  );
};

export default ControllerPreset;
