const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const xSign = new GestureDescription('X');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Half Curl",
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
xSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
xSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.6);
xSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);
xSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
xSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
xSign.addCurl(Finger.Index, FingerCurl.NoCurl, 0.75);
xSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
xSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
xSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

//Middle
xSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
xSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
xSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);

//Ring
xSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
xSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
xSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);

//Pinky
xSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
xSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
xSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);