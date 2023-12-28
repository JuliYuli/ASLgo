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

console.log(tf);

let test = [163,163,163,164,164,165,164,164,164,164,164,163,163,163,161,160,160,158,156,156,154,153,152,152,149,148,146,144,166,167,166,168,168,168,167,167,167,167,167,167,166,164,164,163,162,160,160,155,158,158,156,154,152,150,149,146,168,170,170,170,169,170,170,169,169,169,170,169,168,167,166,165,165,164,165,144,113,160,158,156,155,152,151,149,171,171,170,170,172,173,175,171,170,171,171,170,170,169,168,168,167,164,169,147,85,152,163,158,157,154,153,151,174,174,173,173,175,173,167,175,173,173,173,173,171,170,171,170,169,166,174,149,87,154,166,161,158,157,156,154,175,175,175,176,178,172,115,150,182,176,177,176,175,174,173,172,171,168,179,137,90,164,167,163,161,160,158,158,177,177,177,177,180,163,115,102,182,178,179,179,177,177,175,175,173,173,185,133,97,171,166,165,164,161,159,158,180,179,179,179,181,174,139,87,163,184,179,181,179,178,178,177,173,181,178,119,109,178,168,168,165,164,162,160,182,182,181,182,181,182,154,90,137,192,179,181,181,181,179,180,180,192,163,93,123,181,170,171,168,167,165,161,183,183,183,183,183,185,168,111,106,192,181,184,182,177,185,177,142,155,163,81,149,180,172,171,170,168,166,163,184,184,184,184,184,186,177,139,84,174,188,183,162,132,151,160,119,76,121,96,172,178,175,173,171,170,168,166,186,187,187,187,186,188,182,149,83,135,198,171,162,145,125,122,120,115,76,100,185,176,177,176,173,172,171,167,189,189,189,188,188,188,187,159,119,103,191,162,173,145,139,131,141,141,63,118,191,177,178,176,174,172,171,169,190,190,189,189,189,189,191,174,150,86,137,137,175,159,124,127,129,129,76,123,192,178,179,178,175,173,172,171,190,191,191,191,190,190,191,183,153,116,118,121,151,172,107,60,114,157,102,86,189,180,182,179,177,177,174,171,192,192,192,192,192,192,193,186,174,166,121,95,118,159,98,50,89,158,130,73,148,191,180,181,180,179,176,174,194,194,194,195,195,194,195,188,182,156,100,76,108,141,83,49,115,174,165,97,88,191,182,182,181,180,177,175,195,196,196,196,196,196,196,193,181,153,129,107,112,142,97,81,180,176,157,100,77,185,183,182,181,179,178,176,196,196,196,196,197,198,197,197,182,173,162,118,109,139,103,157,189,165,143,78,91,192,183,184,182,181,179,177,196,197,197,198,198,198,198,200,181,176,175,132,116,93,144,196,184,152,132,69,113,198,183,185,183,183,181,178,196,197,196,197,198,197,198,198,183,170,175,149,126,96,177,188,175,149,124,66,136,199,183,184,183,182,180,179,197,197,197,198,198,199,199,201,186,167,162,157,140,101,160,187,166,138,109,60,154,195,184,184,183,180,178,177,198,198,199,200,200,200,199,202,191,163,164,162,155,117,148,187,163,127,88,62,178,191,187,185,183,181,178,179,197,198,199,199,199,199,200,200,200,173,168,160,164,126,120,174,142,107,62,87,198,187,189,186,182,182,185,173,204,205,205,203,202,203,204,203,206,182,173,165,160,126,101,143,119,88,41,125,201,186,187,190,191,184,135,73,172,175,178,182,185,188,192,194,198,185,175,160,145,127,107,113,121,74,59,186,200,196,195,176,134,83,50,41,99,100,102,105,104,105,107,109,104,155,184,162,155,146,119,116,120,63,76,141,136,133,111,72,47,47,42,42,107,106,106,106,106,104,103,101,102,163,185,174,173,149,126,119,100,63,67,61,59,53,51,40,43,53,37,43];

const socket = io();

for(const x in test)
{
	test[x] = test[x]/255;
}


const handmodel = await tf.loadGraphModel('https://localhost/alphabet_model/model.json');
console.log(await calculateHand(test));

test = arrTo3d(test, 28, 28);

let results = handmodel.execute(test);
console.log((await results.buffer()).values);



console.log("hand model loaded");
console.log(handmodel);

const display = document.getElementById("display");
display.src = await blackAndWhiteFromArray((await test.buffer()).values, 28, 28);
console.log("set image");

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

resize();

video.addEventListener("loadedmetadata", resize);

window.addEventListener("resize", resize);

const model = await handpose.load();
centertext.innerHTML = "";

var currentLetter = undefined;
var timer = false;
var canplay = true;

var count = 0;

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
					console.log(x1 + ", " + y1 + " " + x2 + ", " + y2);
					/*
					let lms = [...predictions[0].landmarks];
					let lms2 = [...lms];
					lms.sort((a, b) => {
						return b[0]-a[0];
					});
					lms2.sort((a, b) => {
						return b[0]-a[0];
					});
					x1 = prop(-1*lms[0][0], video.videoWidth, canvas.width);
					y1 = prop(lms2[lms2.length-1][1], video.videoHeight, canvas.height);
					x2 = prop(-1*lms[lms.length-1][0], video.videoWidth, canvas.width);
					y2 = prop(lms2[0][1], video.videoHeight, canvas.height);
					if(y1>y2)
					{
						let y3 = y1;
						y1 = y2;
						y2 = y3;
					}
					console.log("sorted " +  x1 + ", " + y1 + " " + x2 + ", " + y2);
					*/
					roundRect(context, x1, y1, x2-x1, y2-y1, 25);
					console.log(predictions[0].boundingBox);
					let letterNow = currentLetter;
					let count2 = count;
					ic.grabFrame().then(f => {
						console.log(-1*predictions[0].boundingBox.topLeft[0] + " " +  predictions[0].boundingBox.topLeft[1] + " " + (-1*predictions[0].boundingBox.bottomRight[0]+predictions[0].boundingBox.topLeft[0]) + " " + (predictions[0].boundingBox.bottomRight[1]-predictions[0].boundingBox.topLeft[1]));
						let x = -1*predictions[0].boundingBox.topLeft[0];
						let y = predictions[0].boundingBox.topLeft[1];
						let width =  -1*predictions[0].boundingBox.bottomRight[0]+predictions[0].boundingBox.topLeft[0];
						let height = predictions[0].boundingBox.bottomRight[1]-predictions[0].boundingBox.topLeft[1];
						x+=width*0.15;
						width*=0.7;
						y+=height*0.2;
						height*=0.8;
						if(letterNow == "Q" || letterNow == "P")
						{
							height*=1.4;
						}							
						cutout(f, x, y, width, height).then(x => {
							return resizeimg(x, 28, 28);
						}).then(async x => {
							console.log("qiuhdiwufhiuhfqifhwiqf");
							let i = 0;
							let b = 0;
							let buff = await calculateHand(await getSingleNumbersFromImage(x));
							for(const a in buff)
							{
								if(buff[a]>b)
								{
									b = buff[a];
									i = a;
								}
							}
							console.log(buff);
							console.log(String.fromCharCode("A".charCodeAt(0)+parseInt(i)));
							let t = await imageToTensor(x, 28, 28);
							if(letterNow != "J" && count2 == 5)
							{
								console.log("wow");
								//socket.emit("save_image", (letterNow.charCodeAt(0)-"A".charCodeAt(0)) + "," + (await getSingleNumbersFromImage2(x)).join(",") + "\n");
							}
							//let info = await untrained.fit(t, tf.tensor1d(genLabel("A".charCodeAt(0)-letterNow.charCodeAt(0), 26)), {epochs: 20, batchSize: 128});
							//console.log(info);
							//display.src = x;
							/*
							let s = await getSingleNumbersFromImage(x);
							display.src = await blackAndWhiteFromArray(s, 28, 28);
							let t = await calculateHand(s);
							console.log(t);
							let i = 0;
							let b = 0;
							for(const a in t)
							{
								if(t[a]>b)
								{
									b = t[a];
									i = a;
								}
							}
							console.log(String.fromCharCode("A".charCodeAt(0)+parseInt(i)));
							*/
							/*window.setTimeout(async () => {
								let tensor = tf.browser.fromPixels(display, 1).toFloat().div(255);
								
								tensor.print();
								tensor = arrTo3d((await tensor.buffer()).values, 28, 28).toFloat();
								let results = handmodel.execute(tensor);
								console.log((await tensor.buffer()).values);
								//console.log(await tensor.buffer());
								//console.log(await results.buffer());
								//console.log(tensor.shape);
								console.log(tensor);
								let results2 = handmodel.execute(tensor);
								let i = 0;
								let b = 0;
								let buff = (await results2.buffer()).values;
								for(const a in buff)
								{
									if(buff[a]>b)
									{
										b = buff[a];
										i = a;
									}
								}
								console.log(String.fromCharCode("A".charCodeAt(0)+parseInt(i)));
								results.print();
								//console.log(display.width + " " + display.height);
								*/
								display.src = await blackAndWhiteFromArray((await t.buffer()).values, 28, 28);
							//}, 500);
						});
						//display.src = resizeimg(cutout(f, -1*predictions[0].boundingBox.topLeft[0], predictions[0].boundingBox.topLeft[1], -1*predictions[0].boundingBox.bottomRight[0]+predictions[0].boundingBox.topLeft[0], predictions[0].boundingBox.bottomRight[1]-predictions[0].boundingBox.topLeft[1]), 100, 100);
					});
					found = true;
					if(count == 5)
					{
						count = 0;
						currentLetter = undefined;
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
					}
					break;
				}
			}
			if(!found)
			{
				count = 0;
			}
		}
		else
		{
			count = 0;
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