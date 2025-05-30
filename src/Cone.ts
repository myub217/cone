export class Cone {
  constructor(public radius: number, public height: number) {}

  getVolume(): number {
    return (1 / 3) * Math.PI * this.radius ** 2 * this.height;
  }
}
