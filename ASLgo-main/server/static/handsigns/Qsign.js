const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const qSign = new GestureDescription('Q');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Down"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Down Left"
//     ]
//   ]

//Thumb
qSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
qSign.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1);
qSign.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1);
qSign.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1);

//Index
qSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
qSign.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1);
qSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1);
qSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 1);

//Middle
qSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1);
qSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1);
qSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1);

//Ring
qSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1);
qSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 1);
qSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1);

//Pinky
qSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1);
qSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1);
qSign.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1);

