let x, y, bgColor = 0;

// p5js のセットアップ時に呼ばれる
function setup() {
  createCanvas(windowWidth, windowHeight);

  // x, y, 直径
  // canvasにおける原点は領域の左上
  // 指定した座標は「円の中心」となる
  // circle(width / 2, height / 2, 50);

  // ストロークや塗りの色設定は上書きされるまで保持される
  // 手続的に「設定」→「描画」の処理を書く
  // フチ線
  // strokeWeight(40);
  // 引数はフチ線の色
  stroke('red');
  // 引数は塗りの色
  // fill(240);
  noFill();
}

// requestAnimationFrame的に呼ばれる
function draw() {
  // canvasは明示的にclear処理を挟むまで前回の描画が残り続ける
  // ペイントツールなど、軌跡を残したい場合はclearしなければよい
  clear();
  background(bgColor);
  // ランダムはクリエイティブコーディングの雛形 面白い効果が作れる
  strokeWeight(40);
  circle(mouseX, mouseY, random(80, 100));
  // 楕円
  strokeWeight(4);
  ellipse(x, y, random(50, 300), random(50, 300));
  x++;
  y--;
}

function mouseClicked() {
  x = mouseX;
  y = mouseY;
  bgColor = random(255);
}