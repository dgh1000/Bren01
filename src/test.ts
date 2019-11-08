import { SomeData } from "./data";

function draw(canv: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canv.width, canv.height);
    ctx.fillRect(100, 100, 200, 200);
}

let canv = document.getElementById("canv") as HTMLCanvasElement;
let ctx = canv.getContext("2d");
draw(canv, ctx);

let d : SomeData = {x: 3, ys: [1, 2, 3]};


