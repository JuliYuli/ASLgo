import Handsigns from "./handsigns/alphabet.js";
const GE = new fp.GestureEstimator(Handsigns);
const letter = document.getElementById("letter");
const centertext = document.getElementById("centertext");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const audio = new Audio();
audio.src = "ding.mp3";
audio.preservesPitch = false;
audio.mozPreservesPitch = false;
audio.webkitPreservesPitch = false;

//const handmodel = await tf.loadGraphModel('https://localhost/alphabet_model/model.json');

function generateEstimator(letters)
{
	let out = [];
	letters = letters.toLowerCase();
	let a = "a".charCodeAt(0);
	for(let i = 0; i<letters.length; i++)
	{
		out.push(Handsigns[letters.charAt(i).charCodeAt(0)-a]);
	}
	return new fp.GestureEstimator(out);
}

const video = document.getElementById("video");

var estimator = generateEstimator("abcdefghijklmnopqrstuvwxyz");

var ic = undefined;

navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
	video.srcObject = stream;
	ic = new ImageCapture(video.srcObject.getVideoTracks()[0]);
	//overlayCanvas(video, canvas); 
});

let resize = () => {
	if(video.videoWidth/video.videoHeight>window.innerWidth/window.innerHeight)
	{
		video.style.width = "100%";
		video.style.height = "auto";
	}
	else
	{
		video.style.width = "auto";
		video.style.height = "100%";
	}
	setTimeout(() => {
		canvas.width = video.offsetWidth;
		canvas.height = video.offsetHeight;
	}, 0);
};

Number.prototype.lerp = function(b, amount) {
	return this.valueOf()+(b.valueOf()-this.valueOf())*amount;
};

let sx = 0;
let sy = 0;
let swidth = 0;
let sheight = 0;
let boxX = 0;
let boxY = 0;
let boxWidth = 0;
let boxHeight = 0;

resize();

video.addEventListener("loadedmetadata", resize);

window.addEventListener("resize", resize);

const model = await handpose.load();
centertext.innerHTML = "";

var currentLetter = undefined;
var timer = false;
var canplay = true;

var count = 0;
var detect = false;
var notDetect = 0;

setInterval(async () => {
	context.clearRect(0, 0, canvas.width, canvas.height);
	if(currentLetter && canplay)
	{
		let predictions = await model.estimateHands(video, true);
		if(predictions[0])
		{
			let estimatedGestures = estimator.estimate(predictions[0].landmarks, 8);
			estimatedGestures.gestures.sort((a, b) => {
				return b.score-a.score;
			});
			console.log(estimatedGestures);
			console.log(predictions);
			let found = false;
			for(const gesture of estimatedGestures.gestures)
			{
				if(gesture.name == currentLetter)
				{
					count++;
					audio.playbackRate = 1+count/5*2;
					if (audio.paused)
					{
						audio.play();
					}
					else
					{
						audio.currentTime = 0;
					}
					context.strokeStyle = "#00" + (Math.floor(255*(count/5)).toString(16)) + "00";
					context.lineWidth = 25;
					let x1 = -1*canvas.width*(predictions[0].boundingBox.topLeft[0]/video.videoWidth);
					let x2 = -1*canvas.width*(predictions[0].boundingBox.bottomRight[0]/video.videoWidth);
					let y1 = canvas.height*(predictions[0].boundingBox.topLeft[1]/video.videoHeight);
					let y2 = canvas.height*(predictions[0].boundingBox.bottomRight[1]/video.videoHeight);
					boxX = x1;
					boxY = y1;
					boxWidth = x2-x1;
					boxHeight = y2-y1;
					console.log(predictions[0].boundingBox);
					let letterNow = currentLetter;
					let count2 = count;
					found = true;
					if(count == 5)
					{
						count = 0;
						currentLetter = undefined;
						notDetect = 3;
						detect = false;
						letter.innerHTML = "";
						timer = true;
						canplay = false;
						centertext.innerHTML = "3";
						setTimeout(() => {
							centertext.innerHTML = "2";
							setTimeout(() => {
								centertext.innerHTML = "1";
								setTimeout(() => {
									centertext.innerHTML = "";
									timer = false;
								}, 1000);
							}, 1000);
						}, 1000);
						return;
					}
					break;
				}
			}
			if(!found)
			{
				context.strokeStyle = "#AA0000";
				context.lineWidth = 25;
				let x1 = -1*canvas.width*(predictions[0].boundingBox.topLeft[0]/video.videoWidth);
				let width = -1*canvas.width*(predictions[0].boundingBox.bottomRight[0]/video.videoWidth)-x1;
				let y1 = canvas.height*(predictions[0].boundingBox.topLeft[1]/video.videoHeight);
				let height = canvas.height*(predictions[0].boundingBox.bottomRight[1]/video.videoHeight)-y1;
				x1+=width*0.15;
				width*=0.7;
				y1+=height*0.2;
				height*=0.8;
				boxX = x1;
				boxY = y1;
				boxWidth = width;
				boxHeight = height;
				count = 0;
			}
			if(!detect && notDetect > 2)
			{
				sx = boxX;
				sy = boxY;
				swidth = boxWidth;
				sheight = boxHeight;
			}
			detect = true;
			notDetect = 0;
		}
		else
		{
			count = 0;
			detect = false;
			notDetect++;
		}
	}
	else if(!canplay && !timer)
	{
		let predictions = await model.estimateHands(video, true);
		if(predictions[0])
		{
			centertext.innerHTML = "Move your hand away >:|";
		}
		else
		{
			centertext.innerHTML = "";
			canplay = true;
		}
	}
	else if(!timer)
	{
		currentLetter = String.fromCharCode("A".charCodeAt(0)+Math.floor(Math.random()*25)); //All except for Z
		letter.innerHTML = currentLetter;
	}
}, 200);

let time = Date.now();

let paint = () => {
	let ntime = Date.now();
	let dtime = (ntime-time)/1000;
	time = ntime;
	context.clearRect(0, 0, canvas.width, canvas.height);
	if((detect || notDetect < 3) && currentLetter)
	{
		sx = sx.lerp(boxX, 1-0.2**dtime);
		sy = sy.lerp(boxY, 1-0.2**dtime);
		swidth = swidth.lerp(boxWidth, 1-0.2**dtime);
		sheight = sheight.lerp(boxHeight, 1-0.2**dtime);
		roundRect(context, sx, sy, swidth, sheight, 25);
	}
	requestAnimationFrame(paint);
};

requestAnimationFrame(paint);

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}

function cutout(img, x, y, width, height)
{
	if((typeof img) === "string")
	{
		return new Promise((res, err) => {
			let src = img;
			img = document.createElement("img");
			img.addEventListener("load", () => {
				let c = document.createElement("canvas");
				c.width = width;
				c.height = height;
				if(x<0)
				{
					c.width = x+width;
					x = 0;
				}
				else
				{
					c.width = (img.width-x)<width?(img.width-x):width;
				}
				if(y<0)
				{
					c.height = y+height;
					y = 0;
				}
				else
				{
					c.height = (img.height-y)<height?(img.height-y):height;
				}
				//c.width = (x+width>img.width)?(img.width-x):(width);
				//c.height = (y+height>img.height)?(img.height-x):(height);
				c.getContext("2d").drawImage(img, -x, -y);
				res(c.toDataURL("image/png"));
			});
			img.src = src;
		});
	}
	else
	{
		let c = document.createElement("canvas");
		c.width = width;
		c.height = height;
		if(x<0)
		{
			c.width = x+width;
			x = 0;
		}
		else
		{
			c.width = (img.width-x)<width?(img.width-x):width;
		}
		if(y<0)
		{
			c.height = y+height;
			y = 0;
		}
		else
		{
			c.height = (img.height-y)<height?(img.height-y):height;
		}
		//c.width = (x+width>img.width)?(img.width-x):(width);
		//c.height = (y+height>img.height)?(img.height-x):(height);
		c.getContext("2d").drawImage(img, -x, -y);
		return Promise.resolve(c.toDataURL("image/png"));
	}
}

function resizeimg(img, width, height)
{
	if((typeof img) === "string")
	{
		return new Promise((res, err) => {
			let src = img;
			img = document.createElement("img");
			img.addEventListener("load", () => {
				let c = document.createElement("canvas");
				c.width = width;
				c.height = height;
				c.getContext("2d").drawImage(img, 0, 0, width, height);
				res(c.toDataURL("image/png"));
			});
			img.src = src;
		});
	}
	else
	{
		let c = document.createElement("canvas");
		c.width = width;
		c.height = height;
		c.getContext("2d").drawImage(img, 0, 0, width, height);
		return Promise.resolve(c.toDataURL("image/png"));
	}
}

function resizePercent(img, p)
{
	if((typeof img) === "string")
	{
		return new Promise((res, err) => {
			let src = img;
			img = document.createElement("img");
			img.addEventListener("load", () => {
				let c = document.createElement("canvas");
				c.width = img.width*p;
				c.height = img.height*p;
				c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
				res(c.toDataURL("image/png"));
			});
			img.src = src;
		});
	}
	else
	{
		let c = document.createElement("canvas");
		c.width = img.width*p;
		c.height = img.height*p;
		c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
		return Promise.resolve(c.toDataURL("image/png"));
	}
}

function resizeProp(img, length, isHeight)
{
	if((typeof img) === "string")
	{
		return new Promise((res, err) => {
			let src = img;
			img = document.createElement("img");
			img.addEventListener("load", () => {
				let c = document.createElement("canvas");
				if(isHeight)
				{
					c.width = length/img.height*img.width;
					c.height = length;
				}
				else
				{
					c.width = length;
					c.height = length/img.width*img.height;
				}
				c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
				res(c.toDataURL("image/png"));
			});
			img.src = src;
		});
	}
	else
	{
		let c = document.createElement("canvas");
		if(isHeight)
		{
			c.width = length/img.height*img.width;
			c.height = length;
		}
		else
		{
			c.width = length;
			c.height = length/img.width*img.height;
		}
		c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
		return Promise.resolve(c.toDataURL("image/png"));
	}
}

function resizeMax(img, max)
{
	if((typeof img) === "string")
	{
		return new Promise((res, err) => {
			let src = img;
			img = document.createElement("img");
			img.addEventListener("load", () => {
				resizeProp(img, max, img.height>img.width).then(x => {
					res(x);
				});
			});
			img.src = src;
		});
	}
	else
	{
		return resizeProp(img, max, img.height>img.width);
	}
}

function outline(img, tolerance)
{
	if((typeof img) === "string")
	{
		return new Promise((res, err) => {
			let src = img;
			img = document.createElement("img");
			img.addEventListener("load", () => {
				let c = document.createElement("canvas");
				c.width = img.width;
				c.height = img.height;
				let context = c.getContext("2d");
				context.drawImage(img, 0, 0);
				let imgData = context.getImageData(0, 0, c.width, c.height);
				let data = imgData.data;
				let rgb = [0, 0, 0];
				for(let i = 0; i < data.length; i+=4)
				{
					let x = (i/4)%c.width;
					let y = Math.floor(i/4/c.width);
					if(x != 0)
					{
						let a = Math.abs(rgb[0]-data[i])+Math.abs(rgb[1]-data[i+1])+Math.abs(rgb[2]-data[i+2]);
						console.log("diff " + a);
						rgb[0] = data[i];
						rgb[1] = data[i+1];
						rgb[2] = data[i+2];
						if(a>tolerance)
						{
							data[i] = 0;
							data[i+1] = 0;
							data[i+2] = 0;
						}
						else
						{
							data[i] = 255;
							data[i+1] = 255;
							data[i+2] = 255;
						}
						data[i+3] = 255;
					}
					else
					{
						rgb[0] = data[i];
						rgb[1] = data[i+1];
						rgb[2] = data[i+2];
					}
				}
				context.putImageData(imgData, 0, 0);
				res(c.toDataURL("image/png"));
			});
			img.src = src;
		});
	}
	else
	{
		return Promise((res, err) => {
			let c = document.createElement("canvas");
			c.width = img.width;
			c.height = img.height;
			let context = c.getContext("2d");
			context.drawImage(img, 0, 0);
			let imgData = context.getImageData(0, 0, c.width, c.height);
			let data = imgData.data;
			let rgb = [0, 0, 0];
			for(let i = 0; i < data.length; i+=4)
			{
				let x = (i/4)%c.width;
				let y = Math.floor(i/4/c.width);
				if(x != 0)
				{
					let a = Math.abs(rgb[0]-data[i])+Math.abs(rgb[1]-data[i+1])+Math.abs(rgb[2]-data[i+2]);
					rgb[0] = data[i];
					rgb[1] = data[i+1];
					rgb[2] = data[i+2];
					if(a>tolerance)
					{
						data[i] = 0;
						data[i+1] = 0;
						data[i+2] = 0;
					}
					else
					{
						data[i] = 255;
						data[i+1] = 255;
						data[i+2] = 255;
					}
					data[i+3] = 255;
				}
				else
				{
					rgb[0] = data[i];
					rgb[1] = data[i+1];
					rgb[2] = data[i+2];
				}
			}
			context.putImageData(imgData, 0, 0);
			res(c.toDataURL("image/png"));
		});
	}
}

function prop(x, y, y2)
{
	return x/y*y2;
}

function blackAndWhiteFromArray(arr, width, height)
{
	return new Promise((res, err) => {
		let c = document.createElement("canvas");
		c.width = width;
		c.height = height;
		let context = c.getContext("2d");
		let imgData = context.getImageData(0, 0, c.width, c.height);
		let data = imgData.data;
		for(const x in arr)
		{
			data[x*4] = arr[x]*255;
			data[x*4+1] = arr[x]*255;
			data[x*4+2] = arr[x]*255;
			data[x*4+3] = 255;
		}
		context.putImageData(imgData, 0, 0);
		res(c.toDataURL("image/png"));
	});
}

function getImage(img)
{
	return new Promise((res, err) => {
		if((typeof img) === "string")
		{
			let src = img;
			img = document.createElement("img");
			img.addEventListener("load", () => {
				res(img);
			});
			img.src = src;
		}
		else
		{
			res(img);
		}
	});
}

function getSingleNumbersFromImage(img)
{
	return new Promise(async (res, err) => {
		img = await getImage(img);
		let c = document.createElement("canvas");
		c.width = img.width;
		c.height = img.height;
		let context = c.getContext("2d");
		context.drawImage(img, 0, 0);
		let imgData = context.getImageData(0, 0, c.width, c.height);
		let data = imgData.data;
		let out = [];
		for(let x = 0; x<data.length/4; x++)
		{
			out.push((data[x*4] + data[x*4+1] + data[x*4+2])/3/255);
		}
		res(out);
	});
}

function getSingleNumbersFromImage2(img)
{
	return new Promise(async (res, err) => {
		img = await getImage(img);
		let c = document.createElement("canvas");
		c.width = img.width;
		c.height = img.height;
		let context = c.getContext("2d");
		context.drawImage(img, 0, 0);
		let imgData = context.getImageData(0, 0, c.width, c.height);
		let data = imgData.data;
		let out = [];
		for(let x = 0; x<data.length/4; x++)
		{
			out.push(Math.floor((data[x*4] + data[x*4+1] + data[x*4+2])/3));
		}
		res(out);
	});
}

function arrTo3d(arr, x, y)
{
	return tf.tensor1d(arr).reshape([-1, x, y, 1]);
}

async function imageToTensor(img, width, height)
{
	img = await getImage(img);
	return arrTo3d(await getSingleNumbersFromImage(img), width, height);
}

async function calculateHand(arr)
{
	console.log(arr);
	arr = arrTo3d(arr, 28, 28);
	let r = handmodel.execute(arr);
	return (await r.buffer()).values;
}

function genLabel(n, length)
{
	let out = [];
	for(let i = 0; i<length; i++)
	{
		out.push(n == i?1:0);
	}
	return out;
}