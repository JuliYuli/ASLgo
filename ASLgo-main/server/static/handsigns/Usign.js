const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const uSign = new GestureDescription('U');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
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
uSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
uSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
uSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
uSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
uSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

//Index
uSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
uSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);
uSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);
uSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
uSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
uSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.8);
uSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.8);
uSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
uSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
uSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
uSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
uSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
uSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
uSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
uSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
uSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
uSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
uSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

