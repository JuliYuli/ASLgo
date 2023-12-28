const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const gSign = new GestureDescription('G');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Horizontal Right"
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
//       "Full Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
gSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
gSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
gSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
gSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.6);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);

//Middle
gSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1);
gSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1);

//Ring
gSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1);
gSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1);

//Pinky
gSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1);
gSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1);

