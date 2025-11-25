import Game from './Game.js';

import Fruit from './Fruit.js';

import CanvasRenderer from './CanvasRenderer.js';

import KeyListener from './KeyListener.js';

import Spider from './Spider.js';
import PLayer from './Player.js';

export default class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private fruit: Fruit[];

  private spider: Spider[];

  private player: PLayer;

  private keyListener: KeyListener;

  //private score: number;

  //private timeLeft: number;

  private timeToNextItem: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;

    this.fruit = [];

    this.spider = [];

    this.timeToNextItem = Math.random() * 300;
    this.player = new PLayer(screen.width, screen.height);
    this.keyListener = new KeyListener();
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    if(this.keyListener.isKeyDown(KeyListener.KEY_LEFT) == true) {
      this.player.moveLeft();
    }
    if(this.keyListener.isKeyDown(KeyListener.KEY_RIGHT) == true) {
      this.player.moveRight();

    }

  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time in ms elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    this.timeToNextItem -= elapsed;
    this.player.update(elapsed);
    this.player.update(elapsed);
    if (this.timeToNextItem < 0) {
      const randomNumber: number = Math.random();
      if (randomNumber < 0.1) {
        this.spider.push(new Spider(this.canvas.width));
      } else {
        this.fruit.push(new Fruit(this.canvas.width));
      }
      this.timeToNextItem = Math.random() * 300;
    }

    for (let i: number = 0; i < this.fruit.length; i++) {
      this.fruit[i].update(elapsed);
      if (this.player.isCollidingFruit(this.fruit[i])) {
        this.fruit.splice(i, 1);
      }
    }

    for (let i: number = 0; i < this.spider.length; i++) {
      this.spider[i].update(elapsed);
      if (this.player.isCollidingSpider(this.spider[i])) {
        this.spider.splice(i, 1);
      }
    }
    return true;
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    // Clear the canvas
    CanvasRenderer.clearCanvas(this.canvas);


    for (let i: number = 0; i < this.spider.length; i++) {
      this.spider[i].render(this.canvas);
    }
    for (let i: number = 0; i < this.fruit.length; i++) {
      this.fruit[i].render(this.canvas);
    }
    this.player.render(this.canvas);
  }
}
