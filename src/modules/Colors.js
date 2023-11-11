var Colors = [
    Black, Red, Green, Blue, White, LightBlue, DarkRed, LightGreen, DarkBlue, Purple,
    Yellow, Orange, Pink, Brown, Grey, LightGrey, DarkGrey, Cyan, Magenta, Salmon,
    Lime, Teal, Indigo, Turquoise, Gold, LightPink, DarkOrange, Olive, SlateGrey,
    Lavender, DarkSlateBlue, MediumSeaGreen, FireBrick, MediumPurple, DarkCyan,
    RosyBrown, PaleGoldenrod, MediumSpringGreen, Tomato, DarkGoldenrod, MidnightBlue,
    SlateBlue, DarkOliveGreen, Orchid, SeaGreen, Chocolate, Sienna, Peru, IndianRed,
    DarkViolet, SteelBlue, MediumVioletRed, DeepPink, MediumAquamarine, PaleVioletRed,
    DarkSlateGray, LightSlateGray, DarkSeaGreen, LightSeaGreen, MediumOrchid, Thistle,
    LightCoral, DarkKhaki, PaleTurquoise, MediumTurquoise, DarkTurquoise,
    LightGoldenrodYellow, CornflowerBlue, MediumBlue, RosyRed, LavenderBlush,
    CadetBlue, LightSteelBlue, DarkOrchid, PaleGreen, PowderBlue,Violet];
var Red = Color.new(255, 0, 0);
var Green = Color.new(0, 255, 0);
var Blue = Color.new(0, 0, 255);
 var White = Color.new(255, 255, 255);
 var Black = Color.new(0, 0, 0);
 var LightBlue = Color.new(173, 216, 230);
 var DarkRed = Color.new(139, 0, 0);
 var LightGreen = Color.new(144, 238, 144);
 var DarkBlue = Color.new(0, 0, 139);
 var Purple = Color.new(128, 0, 128);
 var Yellow = Color.new(255, 255, 0);
 var Orange = Color.new(255, 165, 0);
 var Pink = Color.new(255, 192, 203);
 var Brown = Color.new(165, 42, 42);
 var Grey = Color.new(128, 128, 128);
 var LightGrey = Color.new(211, 211, 211);
 var DarkGrey = Color.new(169, 169, 169);
 var Cyan = Color.new(0, 255, 255);
 var Magenta = Color.new(255, 0, 255);
 var Salmon = Color.new(250, 128, 114);
 var Lime = Color.new(0, 255, 0);
 var Teal = Color.new(0, 128, 128);
 var Indigo = Color.new(75, 0, 130);
 var Turquoise = Color.new(64, 224, 208);
 var Gold = Color.new(255, 215, 0);
 var LightPink = Color.new(255, 182, 193);
 var DarkOrange = Color.new(255, 140, 0);
 var Olive = Color.new(128, 128, 0);
 var SlateGrey = Color.new(112, 128, 144);
 var Lavender = Color.new(230, 230, 250);
 var DarkSlateBlue = Color.new(72, 61, 139);
 var MediumSeaGreen = Color.new(60, 179, 113);
 var FireBrick = Color.new(178, 34, 34);
 var MediumPurple = Color.new(147, 112, 219);
 var DarkCyan = Color.new(0, 139, 139);
 var RosyBrown = Color.new(188, 143, 143);
 var PaleGoldenrod = Color.new(238, 232, 170);
 var MediumSpringGreen = Color.new(0, 250, 154);
 var Tomato = Color.new(255, 99, 71);
 var DarkGoldenrod = Color.new(184, 134, 11);
 var MidnightBlue = Color.new(25, 25, 112);
 var SlateBlue = Color.new(106, 90, 205);
 var DarkOliveGreen = Color.new(85, 107, 47);
 var Orchid = Color.new(218, 112, 214);
 var SeaGreen = Color.new(46, 139, 87);
 var Chocolate = Color.new(210, 105, 30);
 var Sienna = Color.new(160, 82, 45);
 var Peru = Color.new(205, 133, 63);
 var IndianRed = Color.new(205, 92, 92);
 var DarkViolet = Color.new(148, 0, 211);
 var SteelBlue = Color.new(70, 130, 180);
 var MediumVioletRed = Color.new(199, 21, 133);
 var DeepPink = Color.new(255, 20, 147);
 var MediumAquamarine = Color.new(102, 205, 170);
 var PaleVioletRed = Color.new(219, 112, 147);
 var DarkSlateGray = Color.new(47, 79, 79);
 var LightSlateGray = Color.new(119, 136, 153);
 var DarkSeaGreen = Color.new(143, 188, 143);
 var LightSeaGreen = Color.new(32, 178, 170);
 var MediumOrchid = Color.new(186, 85, 211);
 var Thistle = Color.new(216, 191, 216);
 var LightCoral = Color.new(240, 128, 128);
 var DarkKhaki = Color.new(189, 183, 107);
 var PaleTurquoise = Color.new(175, 238, 238);
 var MediumTurquoise = Color.new(72, 209, 204);
 var DarkTurquoise = Color.new(0, 206, 209);
 var LightGoldenrodYellow = Color.new(250, 250, 210);
 var CornflowerBlue = Color.new(100, 149, 237);
 var MediumBlue = Color.new(0, 0, 205);
 var RosyRed = Color.new(204, 51, 51);
 var LavenderBlush = Color.new(255, 240, 245);
 var CadetBlue = Color.new(95, 158, 160);
 var LightSteelBlue = Color.new(176, 196, 222);
 var DarkOrchid = Color.new(153, 50, 204);
 var PaleGreen = Color.new(152, 251, 152);
 var PowderBlue = Color.new(176, 224, 230);
 var Violet = Color.new(238, 130, 238);
export function random() {
  return Cores[Math.round(Math.random()) * Cores.length]
}
export function generate() {
  return Color.new(Math.round(Math.random()) * 255,Math.round(Math.random()) * 255,Math.round(Math.random()) * 255)
}