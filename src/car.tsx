export interface Car {
  make: string;
  model: string;
  year: number;
}

// Car constructor function
export function createCar(make: string, model: string, year: number): Car {
  return {
    make,
    model,
    year
  };
}
