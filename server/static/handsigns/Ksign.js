const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const kSign = new GestureDescription('K');
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
kSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
kSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);
kSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
kSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
kSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
kSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

//Middle
kSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
kSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
kSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
kSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);

//Ring
kSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
kSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
kSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
kSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);

//Pinky
kSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
kSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
kSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
kSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
