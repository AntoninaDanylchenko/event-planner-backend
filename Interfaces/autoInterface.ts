interface Automobile<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

enum AutoType {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutoBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutoColors {
  red = "red",
  blue = "blue",
  white = "white",
  black = " black",
}

const ferrari: Automobile<AutoType, AutoBrands, AutoColors> = {
  type: AutoType.car,
  brand: AutoBrands.ferrari,
  colors: [AutoColors.black, AutoColors.red],
  description: "It is  a Ferrari",
};

const toyota: Automobile<AutoType, AutoBrands, number> = {
  type: AutoType.car,
  brand: AutoBrands.toyota,
  colors: [5588, 4488],
  description: "It is  a Toyota",
};

class Car implements Automobile<string, AutoBrands, AutoColors> {
  public type: string = "car";

  constructor(
    public brand: AutoBrands,
    public colors: AutoColors[],
    public description: string
  ) {}
}

const ferrariCar: Car = new Car(
  AutoBrands.ferrari,
  [AutoColors.red, AutoColors.white],
  "This is a Ferrari"
);
