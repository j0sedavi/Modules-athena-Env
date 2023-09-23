export var display = false;
export var fontAlert = new Font();
export var fontAlert2 = new Font();
fontAlert.color = Color.new(0, 0, 0);
fontAlert2.color = Color.new(0, 0, 0);
fontAlert.scale = 0.8;
export var width = 300;
export var height = 100;
export var bg = true;
export var color = Color.new(255,255,255);
export var description =;null;
export var title =;null;
export function Show(titleb,descriptionb) {
  title = titleb;
  description = descriptionb;
  display = true;
}
export function Draw() {
  let sc = Screen.getMode();
  if(bg) {
    Draw.rect(0, 0, sc.width, sc.height,Color.new(0,0,0,85));
  }
  Draw.rect(sc.width / 2 - width /2, sc.height / 2 - height /2, width, height, color);
  let c1 = sc.width / 2 - width /2 - fontAlert.getTextSize(title);
  let c2 = sc.height / 2 - height /2;
  fontAlert.print(cc,c2,title);
  fontAlert2.print(sc.width / 2 - width /2,c2 + 40,description);
}
export function Hide() {
  display = false;
}
export edit(width,height,colorBg,colorTitle,colordescription,scaletitle,scale,description,bgp) {
  
}