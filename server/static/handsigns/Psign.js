const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const pSign = new GestureDescription('P');
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
//       "Full Curl",
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
//       "Diagonal Down Right"
//     ]
//   ]

//Thumb
pSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);
pSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);
pSign.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1);
pSign.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1);


//Index
pSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.7);
pSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
pSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1);
pSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);
pSign.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1);
pSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1);

//Middle
pSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.7);
pSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1);
pSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1);
pSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1);

//Ring
pSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.7);
pSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1);
pSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 1);
pSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1);

//Pinky
pSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.7);
pSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1);
pSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1);
pSign.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1);
