const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const hSign = new GestureDescription('H');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
hSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
hSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
hSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
hSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.6);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);

//Middle
hSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
hSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1);
hSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1);

//Ring
hSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
hSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1);
hSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1);

//Pinky
hSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
hSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1);
hSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1);

