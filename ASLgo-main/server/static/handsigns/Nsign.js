
const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;
export const nSign = new GestureDescription('N');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "Full Curl",
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
nSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
nSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

//Index
nSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
nSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

//Middle
nSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
nSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
nSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

