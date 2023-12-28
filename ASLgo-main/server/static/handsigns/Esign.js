const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const eSign = new GestureDescription('E');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
eSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
eSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);
eSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
eSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
eSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
eSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
eSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
eSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
eSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

//Middle
eSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
eSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
eSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
eSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
eSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);

//Ring
eSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
eSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
eSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
eSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
eSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);

//Pinky
eSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
eSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
eSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
eSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
eSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
