const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const dSign = new GestureDescription('D');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
dSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
dSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
dSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);
dSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
dSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
dSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
dSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
dSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
dSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

//Middle
dSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
dSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
dSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
dSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
dSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);

//Ring
dSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
dSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
dSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
dSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
dSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);

//Pinky
dSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
dSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
dSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
dSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
dSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
