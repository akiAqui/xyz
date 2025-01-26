function setup() {
  createCanvas(1000, 1000);
  background(255);
}
let max=Math.PI;
let nogo=false;
let a = 1.2;
let scaleFactor = 100; // スケール調整
let t=Math.PI/2.0;
let s=Math.PI/2.0;
function draw(){
    translate(width / 2, height / 2); // 中心を原点に設定
    stroke(0);
    strokeWeight(0.3);    
    t+=0.01;
    s-=0.01;
    // スカラベ曲線の点を計算
    let x1 = scaleFactor * (3 * a * cos(t) - cos(3 * t));
    let y1 = scaleFactor * (3 * a * sin(t) - sin(3 * t));

    let x2 = scaleFactor * (3 * a * cos(s) - cos(3 * s));
    let y2 = scaleFactor * (3 * a * sin(s) - sin(3 * s));
    
    // 接線の傾きを計算
    let dx_dt1 = -3 * a * sin(t) + 3 * sin(3 * t);
    let dy_dt1 =  3 * a * cos(t) - 3 * cos(3 * t);

    let dx_dt2 = -3 * a * sin(s) + 3 * sin(3 * s);
    let dy_dt2 =  3 * a * cos(s) - 3 * cos(3 * s);
    
    // 垂線の傾き
    let perpendicular_slope1 = -dx_dt1 / dy_dt1;
    let perpendicular_slope2 = -dx_dt2 / dy_dt2;    
    
    // 垂線の終点を計算
    let x_perpendicular_pos1 = x1 + 1150 * cos(atan(perpendicular_slope1));
    let y_perpendicular_pos1 = y1 + 1150 * sin(atan(perpendicular_slope1));
    let x_perpendicular_neg1 = x1 - 1150 * cos(atan(perpendicular_slope1));
    let y_perpendicular_neg1 = y1 - 1150 * sin(atan(perpendicular_slope1));

    let x_perpendicular_pos2 = x2 + 1150 * cos(atan(perpendicular_slope2));
    let y_perpendicular_pos2 = y2 + 1150 * sin(atan(perpendicular_slope2));
    let x_perpendicular_neg2 = x2 - 1150 * cos(atan(perpendicular_slope2));
    let y_perpendicular_neg2 = y2 - 1150 * sin(atan(perpendicular_slope2));
    
    // 垂線を描画
    line(x_perpendicular_pos1, y_perpendicular_pos1, x_perpendicular_neg1, y_perpendicular_neg1);
    line(x_perpendicular_pos2, y_perpendicular_pos2, x_perpendicular_neg2, y_perpendicular_neg2);

    
    if (nogo){
	noLoop();
    }else{

    }
	

}
function doubleClicked(){
    t=Math.PI/2.0;
    s=Math.PI/2.0;
    nogo=false;    
    background(255);
}
function mouseClicked(){

    if (nogo) {
	nogo=false;
	loop();	
    }
    else {
	nogo=true;
    }
}
