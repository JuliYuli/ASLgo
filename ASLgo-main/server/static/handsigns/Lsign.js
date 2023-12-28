const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const lSign = new GestureDescription('L');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
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
lSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
lSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.8);
lSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.8);
lSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);
lSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);

//Index
lSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
lSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
lSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);
lSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

//Middle
lSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
lSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.8);
lSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.8);

//Ring
lSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
lSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.8);
lSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.8);

//Pinky
lSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
lSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.8);
lSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.8);
