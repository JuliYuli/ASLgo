const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const oSign = new GestureDescription('O');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
oSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
oSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
oSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
oSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);
oSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);

//Index
oSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
oSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
oSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
oSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1);
oSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);

//Middle
oSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.7);
oSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
oSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
oSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
oSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1);
oSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1);

//Ring
oSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.7);
oSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
oSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
oSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
oSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1);
oSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1);

//Pinky
oSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.7);
oSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
oSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
oSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
oSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1);
oSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1);
