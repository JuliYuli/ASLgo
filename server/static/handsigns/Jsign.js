const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const jSign = new GestureDescription('J');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
jSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
jSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
jSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
jSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
jSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

//Middle
jSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
jSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);

//Ring
jSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
jSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1);
jSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1);

//Pinky
jSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
jSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
jSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1);
jSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1);

