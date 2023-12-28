const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const iSign = new GestureDescription('I');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "Full Curl",
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
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
iSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
iSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
iSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);
iSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
iSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
iSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
iSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
iSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

//Middle
iSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
iSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
iSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);

//Ring
iSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
iSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
iSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);

//Pinky
iSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
iSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
iSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
iSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
