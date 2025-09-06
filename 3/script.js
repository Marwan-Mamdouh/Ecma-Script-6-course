class Polygon {
  constructor(...side) {
    if (new.target === Polygon) {
      throw new Error("can't get instance from Polygon.");
    } else if (new.target.name === "Circle") {
      this.radius = side[0];
      return;
    } else if (new.target.name === "Triangle") {
      this.base = side[0];
      this.height = side[1];
      return;
    }
    this.height = side[0];
    this.width = side[1];
  }

  area() {
    return this.width * this.height;
  }

  toString() {
    return `the area of ${
      this.constructor.name
    } is: ${this.area()}, the width: ${this.width}, and the height is: ${
      this.height
    }`;
  }

  draw(context, x, y) {
    context.fillRect(x, y, this.width, this.height);
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super(width, height);
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super(radius);
  }

  area() {
    return Math.round(Math.PI * this.radius ** 2);
  }

  toString() {
    return `the area of ${
      this.constructor.name
    } is: ${this.area()}, the base: ${this.radius}`;
  }

  draw(context, x, y) {
    context.beginPath();
    context.arc(x, y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(base, height);
  }

  area() {
    return (this.base * this.height) / 2;
  }

  toString() {
    return `the area of ${
      this.constructor.name
    } is: ${this.area()}, the base: ${this.base}, and the height is: ${
      this.height
    }`;
  }

  draw(context, x, y) {
    context.beginPath();
    context.moveTo(x, this.height);
    context.lineTo(this.base, this.height);
    context.lineTo(this.base / 2, 0);
    context.closePath();
    context.fill();
  }
}

// const canva = document.querySelector("canvas");
// const context = canva.getContext("2d");

const r1 = new Rectangle(100, 50);
console.log(r1.area());
console.log(r1.toString());
// r1.draw(context, 100, 120);

const s1 = new Square(90);
console.log(s1.area());
console.log(s1.toString());
// s1.draw(context, 250, 120);

const c1 = new Circle(60);
console.log(c1.area());
console.log(c1.toString());
// c1.draw(context, 450, 120);

const t1 = new Triangle(90, 150);
console.log(t1.area());
console.log(t1.toString());
// t1.draw(context, 0, 120);
