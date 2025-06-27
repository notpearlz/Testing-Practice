function Analyze(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Not an array");
  }

  data = {
    average: 0,
    min: 0,
    max: 0,
    length: arr.length,
  };

  if (arr.length < 1) {
    return data;
  }

  data["min"] = arr[0];
  data["max"] = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < data["min"]) {
      data["min"] = arr[i];
    }
    if (arr[i] > data["max"]) {
      data["max"] = arr[i];
    }
    data["average"] += arr[i];
  }
  data["average"] /= data["length"];

  return data;
}

module.exports = Analyze;
