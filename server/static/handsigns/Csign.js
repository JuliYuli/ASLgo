const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const cSign = new GestureDescription('C');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Up Right"
//     ]
//   ]

console.log(FingerDirection);

//Thumb
cSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
cSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
cSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);
cSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
cSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);

//Index
cSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
cSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);

//Middle
cSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
cSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
cSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);

//Ring
cSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
cSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
cSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);

//Pinky
cSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
cSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
cSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
