import CanvasRenderer from './CanvasRenderer.js';

export default class Fruit {
  private image: HTMLImageElement;

  private score: number;

  private posX: number;

  private posY: number;

  private speed: number;

  public constructor(maxX: number) {
    const randomNumber: number = Math.random();

    if (randomNumber < 0.1) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-cherries.png');
      this.score = 10;
    } else if (randomNumber < 0.3) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-strawberry.png');
      this.score = 7;
    } else if (randomNumber < 0.6) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-orange.png');
      this.score = 5;
    } else if (randomNumber < 0.8) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-grapes.png');
      this.score = 3;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-banana.png');
      this.score = 1;
    }

    this.posX = Math.random() * maxX;

    this.posY = 0;

    this.speed = 0.1;
  }

  /**
   *
   */
  public update(delta: number): void {
    this.posY += delta * this.speed;
    this.speed = this.speed + (0.0001 * delta);
  }

  /**
   *
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }

  public getPosX():number {
    return this.posX;
  }

  public getPosY():number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }
}

