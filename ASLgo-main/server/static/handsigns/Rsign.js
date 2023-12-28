const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const rSign = new GestureDescription('R');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
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
rSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
rSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
rSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
rSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

//Index
rSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
rSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);
rSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);
rSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
rSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
rSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.8);
rSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.8);
rSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
rSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
rSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
rSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
rSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
rSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
rSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
rSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
rSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
rSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
rSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

