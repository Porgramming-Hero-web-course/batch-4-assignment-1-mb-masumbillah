{
  // problem - 7

  class Car {
    public make: string;
    public model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge() {
      const currentYear = new Date().getFullYear();
      const carYear = currentYear - this.year;
      return `${carYear} (assuming current year is ${currentYear})`;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());

  //
}
