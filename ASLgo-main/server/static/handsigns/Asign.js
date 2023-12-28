const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const aSign = new fp.GestureDescription('A');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
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
aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
aSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.70);
aSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);

//Index
aSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);
aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);

//Middle
aSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
aSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.80);
aSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.80);


//Ring
aSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);
aSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.80);
aSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.80);

//Pinky
aSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
aSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.80);
aSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.80);
