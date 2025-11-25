import CanvasRenderer from './CanvasRenderer.js';
import Fruit from './Fruit';
import Spider from './Spider';

export default class PLayer {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  private maxX: number;

  private speed: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  public constructor(maxX: number, maxY: number){
    this.image = CanvasRenderer.loadNewImage('./assets/basket.png');
    this.posX = maxX / 2;
    this.posY = maxY/1.3;
    this.maxX = maxX;
    this.movingLeft = false;
    this.movingRight = false;
    this.speed = 0.4;
  }

  public moveLeft(): void {
    this.movingLeft = true;
  }

  public moveRight(): void {
    this.movingRight = true;
  }

  public isCollidingFruit(fruit: Fruit): boolean{
    return (fruit.getPosX() + fruit.getWidth() > this.posX
    && fruit.getPosX() < this.posX + this.image.width
    && fruit.getPosY() + fruit.getHeight() > this.posY
    && fruit.getPosY() < this.posY + this.image.height
    );
  }

  public isCollidingSpider(spider: Spider): boolean{
    return (spider.getPosX() + spider.getWidth() > this.posX
    && spider.getPosX() < this.posX + this.image.width
    && spider.getPosY() + spider.getHeight() > this.posY
    && spider.getPosY() < this.posY + this.image.height
    );
  }

  public update(elapsed: number): void {
    if(this.movingRight == true) {
      this.posX += this.speed * elapsed;
      this.movingRight = false;
    }
    if(this.movingLeft == true) {
      this.posX -= this.speed * elapsed;
      this.movingLeft = false;
    }
  }

  public render(canvas: HTMLCanvasElement): void{
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }

  public getPosX():number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

}
