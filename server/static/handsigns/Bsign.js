const Finger = fp.Finger;
const GestureDescription = fp.GestureDescription;
const FingerCurl = fp.FingerCurl;
const FingerDirection = fp.FingerDirection;

export const bSign = new GestureDescription('B');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
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
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
bSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
bSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
bSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

//Index
bSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
bSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
bSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);


//Pinky
bSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
bSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);


