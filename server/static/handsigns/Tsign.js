const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const tSign = new GestureDescription('T');
// [
//     [
//       "Thumb",
//       "No Curl",
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
tSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
tSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
tSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
tSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.8);

//Index
tSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
tSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
tSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
tSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
tSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
tSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
tSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
tSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
tSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
tSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
tSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
tSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
tSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

