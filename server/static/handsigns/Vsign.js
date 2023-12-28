const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const vSign = new GestureDescription('V');
// [
//     [
//       "Thumb",
//       "No Curl",
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
vSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
vSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
vSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
vSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
vSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

//Index
vSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
vSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);

//Middle
vSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
vSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
vSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
vSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.8);

//Ring
vSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
vSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
vSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
vSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
vSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
vSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
vSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
vSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

