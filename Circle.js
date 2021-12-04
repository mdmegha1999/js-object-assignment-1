var Shape = require('./Shape');

class Circle extends Shape {
	constructor(radius){
		this.radius = radius;
	}
	calculateArea() {
		return 3.14 * this.radius * this.radius;
	}
}

module.exports.Circle;