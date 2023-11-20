import { ChangeEvent } from "react";

import _AddSky from "@assets/add_sky.svg";
import _AddGrey from "@assets/add_grey.svg";

interface ControllerTableProps {
  products: string[];
  data: Data;
  onUpdateDate: (products: string[], data: Data) => void;
}

const ControllerTable = ({
  products,
  data,
  onUpdateDate,
}: ControllerTableProps) => {
  const createNotOverlappedProduct = () => {
    let count = 0;
    while (data[0].value[`newProduct${count}`] !== undefined) count++;
    return `newProduct${count}`;
  };

  const insertProduct = () => {
    const newName = createNotOverlappedProduct();
    const newProducts = [...products, newName];
    const [image, ...amountData] = data;
    const newData: Data = [
      {
        ...image,
        value: {
          ...image.value,
          [newName]: null,
        },
      },
      ...amountData.map((amount) => ({
        ...amount,
        value: {
          ...amount.value,
          [newName]: 0,
        },
      })),
    ];

    onUpdateDate(newProducts, newData);
  };

  const updateProduct =
    (product: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const [image, ...amountData] = data;
      const newProducts = products.filter((p) => p !== product);
      const newData: Data = [
        image,
        ...amountData
          .map((amount) => {
            delete amount.value[product];
            return amount;
          })
          .map((amount) => ({
            ...amount,
            value: {
              ...amount.value,
              [product]: parseInt(e.target.value),
            },
          })),
      ];
      onUpdateDate(newProducts, newData);
    };

  const deleteProduct = (product: string) => () => {
    const [image, ...amountData] = data;
    const newProducts = products.filter((p) => p !== product);
    const newData: Data = [
      image,
      ...amountData.map((amount) => {
        delete amount.value[product];
        return amount;
      }),
    ];
    onUpdateDate(newProducts, newData);
  };

  const insertCategory = () => {
    const [image, ...amount] = data;
    const newData: Data = [
      image,
      ...amount.concat({
        category: "newCategory",
        value: products.reduce(
          (acc, cur) => ({
            ...acc,
            [cur]: 0,
          }),
          {} as { [key: string]: number },
        ),
      }),
    ];
    onUpdateDate(products, newData);
  };

  const updateCategory =
    (category: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const [image, ...amountData] = data;
      const newData: Data = [
        image,
        ...amountData.map((amount) => ({
          ...amount,
          [category]: e.target.value,
        })),
      ];
      onUpdateDate(products, newData);
    };

  const deleteCategory = (category: string) => () => {
    const [image, ...amountData] = data;
    const newData: Data = [
      image,
      ...amountData.filter((amount) => amount.category !== category),
    ];
    onUpdateDate(products, newData);
  };

  const updateData =
    (category: string, product: string) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const [image, ...amountData] = data;
      const newData: Data = [
        image,
        ...amountData.map((amount) => {
          if (amount.category === category) {
            return {
              ...amount,
              value: {
                ...amount.value,
                [product]: parseInt(e.target.value),
              },
            };
          }
          return amount;
        }),
      ];
      onUpdateDate(products, newData);
    };

  const uploadImage =
    (product: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const fileName = e.target.value;
      if (
        !/(\.gif|\.jpg|\.jpeg|\.svg|\.png|\.tif|\.tiff|\.bmp)$/i.test(fileName)
      ) {
        return alert("이미지 파일만 업로드 가능합니다.");
      }
      const file = e.target.files;
      if (file === null) {
        return alert("파일을 선택해주세요.");
      }
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.addEventListener("load", (e) => {
        const [image, ...amountData] = data;
        const newData: Data = [
          {
            ...image,
            value: {
              ...image.value,
              [product]: e.target?.result?.toString() ?? null,
            },
          },
          ...amountData,
        ];
        onUpdateDate(products, newData);
      });
    };

  const [image, ...amounts] = data;

  return (
    <table className="Controller-Table">
      <tbody>
        <tr className="Controller-Table-Header">
          <td className="Controller-Table-Body" />
          {products.map((product) => (
            <td className="Controller-Table-Body">
              <button
                className="Controller-Table-Delete"
                onClick={deleteProduct(product)}
              >
                X
              </button>
              <input
                className="Controller-Table-Update"
                type="text"
                value={product}
                onBlur={updateProduct(product)}
              />
            </td>
          ))}
          <td
            className="Controller-Table-Add Right-Button"
            rowSpan={data.length + 1}
            onClick={insertProduct}
          >
            <img
              className="Controller-Table-Addition"
              src={_AddSky}
              alt="add"
            />
          </td>
        </tr>
        <tr style={{ height: "160px" }}>
          <td
            className="Controller-Table-Body"
            style={{
              background: "#C7C7C7",
            }}
          >
            Image
          </td>
          {products.map((product) => (
            <td key={product} className="Controller-Table-Body">
              <label
                className="Controller-Table-Image"
                style={{
                  backgroundImage: `url(${image.value[product]})`,
                }}
              >
                <input
                  style={{
                    display: "none",
                  }}
                  type="file"
                  accept="image/*"
                  onChange={uploadImage(product)}
                />
              </label>
            </td>
          ))}
        </tr>
        {amounts.map((amount) => (
          <tr key={amount.category}>
            <td
              className="Controller-Table-Body"
              style={{ background: "#C7C7C7" }}
            >
              <button
                className="Controller-Table-Delete"
                onClick={deleteCategory(amount.category)}
              >
                X
              </button>
              <input
                className="Controller-Table-Update"
                type="text"
                value={amount.category}
                onBlur={updateCategory(amount.category)}
              />
            </td>
            {products.map((product) => (
              <td key={product} className="Controller-Table-Body">
                <input
                  className="Controller-Table-Update"
                  type="text"
                  value={amount.value[product] ?? 0}
                  onBlur={updateData(amount.category, product)}
                />
              </td>
            ))}
          </tr>
        ))}
        <tr>
          <td
            className="Controller-Table-Add Bottom-Button"
            colSpan={products.length + 1}
            onClick={insertCategory}
            style={{ background: "#C7C7C7" }}
          >
            <img
              className="Controller-Table-Addition"
              src={_AddGrey}
              alt="add"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ControllerTable;
