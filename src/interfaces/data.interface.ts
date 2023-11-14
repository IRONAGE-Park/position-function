interface Image {
  category: "Image";
  value: {
    [key: string]: string | null;
  };
}

interface Amount {
  category: string;
  value: {
    [key: string]: number;
  };
}

type Data = [Image, ...Amount[]];
