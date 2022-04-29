const itemIn = {
  collectA: [
    { id: 1, type: "a", number: 27.34 },
    { id: 2, type: "a", number: 27.33 },
    { id: 3, type: "a", number: 27.33 },
  ],
  trackA: [
    { id: 4, type: "a", number: 10 },
    { id: 5, type: "a", number: 8 },
  ],
  collectB1: [
    { id: 6, type: "b", number: 13.67 },
    { id: 7, type: "b", number: 13.66 },
    { id: 8, type: "b", number: 13.67 },
  ],
  collectB2: [{ id: 9, type: "b", number: 41 }],
  trackB: [
    { id: 10, type: "b", number: 10 },
    { id: 11, type: "b", number: 8 },
  ],
};

/*  RULES
  1. Add value called "half" to each of the objects in the arrays within the itemIn object that is half of the value in the "number" field of that object.
  2. The "half" fields may not have more than 2 decimal places
  3. The sum of the "half" fields for each "type" must equal 50
  */

const func = (obj) => {
  let typeATotal = 0;
  let typeBTotal = 0;

  for (let value in obj) {
    for (let object of obj[value]) {
      console.log(object);
      object.half = +(object.number / 2).toFixed(2);
      if (object.type === "a") typeATotal += object.half;
      if (object.type === "b") typeBTotal += object.half;
    }
  }

  console.log(typeATotal, typeBTotal);
};

func(itemIn);
