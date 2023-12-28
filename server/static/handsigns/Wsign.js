const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const wSign = new GestureDescription('W');
// [
//     [
//       "Thumb",
//       "Half Curl",
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
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
wSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
wSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
wSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
wSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
wSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

//Index
wSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);
wSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
wSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
wSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);
wSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
wSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
wSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);
wSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);
wSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
wSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
wSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
wSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);
wSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
