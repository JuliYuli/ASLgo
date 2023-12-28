const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const fSign = new GestureDescription('F');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
fSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
fSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);
fSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
fSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
fSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
fSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
fSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
fSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

//Middle
fSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
fSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
fSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);

//Ring
fSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
fSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
fSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);

//Pinky
fSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
fSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
fSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);

