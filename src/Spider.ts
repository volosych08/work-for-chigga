import CanvasRenderer from './CanvasRenderer.js';

export default class Spider {
  private image: HTMLImageElement;

  private score: number;

  private posX: number;

  private posY: number;

  private speed: number;

  public constructor(maxX: number) {
    const randomNumber: number = Math.random();

    if (randomNumber < 0.1) {
      this.image = CanvasRenderer.loadNewImage('./assets/spider01.png');
      this.score = 5;
    } else if (randomNumber < 0.3) {
      this.image = CanvasRenderer.loadNewImage('./assets/spider02.png');
      this.score = 3;
    } else if (randomNumber < 0.6) {
      this.image = CanvasRenderer.loadNewImage('./assets/spider03.png');
      this.score = 2;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/spider04.png');
      this.score = 1;
    }

    this.posX = Math.random() * maxX;

    this.posY = 0;

    this.speed = 0.1;
  }

  public update(elapsed: number): void {
    this.posY += elapsed * this.speed;
  }

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
