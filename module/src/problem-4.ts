{
  // problem - 4

  type Circle = {
    shape: string;
    radius: number;
  };

  type Rectangle = {
    shape: string;
    width: number;
    height: number;
  };

  function calculateShapeArea(value: Circle | Rectangle): number | undefined {
    if ("radius" in value) {
      const area: number = Math.PI * value?.radius * value?.radius;
      return parseFloat(area.toFixed(2));
    } else if ("height" in value && "width" in value) {
      const area: number = value?.height * value?.width;
      return area;
    }
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea, circleArea);

  //
}
