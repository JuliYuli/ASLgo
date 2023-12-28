const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const sSign = new GestureDescription('S');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
sSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

//Index
sSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
sSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
sSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
sSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
sSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
sSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
sSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
sSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
sSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
sSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
sSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
sSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
