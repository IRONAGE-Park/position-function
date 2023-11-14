import AirPods from "./temporaries/Airpods.jpeg";
import GalaxyBuds from "./temporaries/GalaxyBuds.jpeg";
import QCYT1 from "./temporaries/QCYT1.jpeg";
import SENNHEISER from "./temporaries/SENNHEISER.jpeg";
import PowerBeatsPRO from "./temporaries/PowerBeatsPRO.jpeg";
import 차이팟 from "./temporaries/차이팟.png";

const presets: Preset[] = [
  {
    name: "Preset1",
    content: {
      products: [
        "AirPods",
        "GalaxyBuds",
        "QCYT1",
        "SENNHEISER",
        "PowerBeatsPRO",
        "차이팟",
      ],
      data: [
        {
          category: "Image",
          value: {
            AirPods: AirPods,
            GalaxyBuds: GalaxyBuds,
            QCYT1: QCYT1,
            SENNHEISER: SENNHEISER,
            PowerBeatsPRO: PowerBeatsPRO,
            차이팟: 차이팟,
          },
        },
        {
          category: "가격(원)",
          value: {
            AirPods: 160000,
            GalaxyBuds: 170000,
            QCYT1: 18000,
            SENNHEISER: 330000,
            PowerBeatsPRO: 200000,
            차이팟: 45000,
          },
        },
        {
          category: "무게(g)",
          value: {
            AirPods: 46.5,
            GalaxyBuds: 51.3,
            QCYT1: 47.4,
            SENNHEISER: 69.8,
            PowerBeatsPRO: 11,
            차이팟: 50,
          },
        },
        {
          category: "유닛 배터리(hour)",
          value: {
            AirPods: 3,
            GalaxyBuds: 1.8,
            QCYT1: 4,
            SENNHEISER: 4,
            PowerBeatsPRO: 4.5,
            차이팟: 4,
          },
        },
        {
          category: "케이스 배터리(hour)",
          value: {
            AirPods: 24,
            GalaxyBuds: 13,
            QCYT1: 16,
            SENNHEISER: 12,
            PowerBeatsPRO: 24,
            차이팟: 4,
          },
        },
        {
          category: "블루투스 연결 최대거리(m)",
          value: {
            AirPods: 29,
            GalaxyBuds: 23,
            QCYT1: 10,
            SENNHEISER: 40,
            PowerBeatsPRO: 29,
            차이팟: 15,
          },
        },
      ],
    },
  },
  {
    name: "Preset2",
    content: {
      products: [],
      data: [
        {
          category: "Image",
          value: {},
        },
      ],
    },
  },
  {
    name: "Preset3",
    content: {
      products: [],
      data: [
        {
          category: "Image",
          value: {},
        },
      ],
    },
  },
];

export default presets;
