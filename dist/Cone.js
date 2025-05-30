export class Cone {
    radius;
    height;
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        return (1 / 3) * Math.PI * this.radius ** 2 * this.height;
    }
}
