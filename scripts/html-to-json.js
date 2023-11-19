import fs from "fs";
import xlsx from "xlsx";

const file = fs.readFileSync("./static/coupang.xlsx");
const excel = xlsx.read(file);

function splitByFirstNumber(string) {
  if (typeof string !== "string") {
    throw Error("`string` 타입이 아닙니다!");
  }

  const index = string.search(/[0-9]/);
  return [string.substring(0, index), string.substring(index, string.length)];
}

function parseRange(ref) {
  if (typeof ref !== "string") {
    throw Error("`string` 타입이 아닙니다!");
  }

  const [start, end] = ref.split(":");

  return {
    start: splitByFirstNumber(start),
    end: splitByFirstNumber(end),
  };
}

function createCharacterArrayByRange(start, end) {
  if (typeof start !== "string" || typeof end !== "string") {
    throw Error("`string` 타입이 아닙니다!");
  }

  return Array.from({ length: end.charCodeAt(0) - start.charCodeAt(0) }).map(
    (_, index) => String.fromCharCode(start.charCodeAt(0) + index),
  );
}

const sheets = Object.entries(excel.Sheets);

function parseRowData(data) {
  if (data === undefined) {
    return "";
  }
  if (typeof data !== "object" || !("t" in data)) {
    throw Error("`row data` 형식에 어긋나는 데이터입니다!");
  }

  if ("l" in data) {
    return data.l.Target;
  }

  return data.t === "n" || data.t === "s" ? data.v : "not supported data type!";
}

const jsons = sheets.map(([sheetName, sheet]) => {
  const {
    start: [startColumn, startRow],
    end: [endColumn, endRow],
  } = parseRange(sheet["!ref"]);

  const length = parseInt(endRow) - parseInt(startRow);

  return {
    name: sheetName,
    sheet: Array.from({ length: length - 1 }).map((_, index) =>
      createCharacterArrayByRange(startColumn, endColumn).reduce(
        (prev, char) => ({
          ...prev,
          [parseRowData(sheet[`${char}1`])]: parseRowData(
            sheet[`${char}${index + 2}`],
          ),
        }),
        {},
      ),
    ),
  };
});

jsons.forEach((json) =>
  fs.writeFileSync(`./static/${json.name}.json`, JSON.stringify(json, null, 2)),
);
