(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Logo_Claim_A3_RGB = function() {
	this.initialize(img.Logo_Claim_A3_RGB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,687,169);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.testo_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape.setTransform(57.825,22.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_1.setTransform(47.8,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyBIIAAgRIBKhsIhFAAIAAgRIBeAAIAAARIhKBsIBMAAIAAARg");
	this.shape_2.setTransform(38.025,22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_3.setTransform(28.35,19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBJIAAhOIgBgUQAAgHgCgGQgCgHgEgDQgFgDgHgBQgKABgHAGQgHAGgFALQgFAKgDALQgDALAAALIAAA6IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgGAFgFQAFgGAIgEQAHgDALAAQASAAAJAMQAKANAAATIAABlg");
	this.shape_4.setTransform(17.275,22.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBoIAAjOIAXAAIAADOg");
	this.shape_5.setTransform(5.875,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,135.2,39);
p.frameBounds = [rect];


(lib.Simboloavanti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AszDXIAAmtIZnAAIAAGtg");
	this.shape.setTransform(82,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,164,43);
p.frameBounds = [rect];


(lib.Simbolo25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp26 = new cjs.Text("Condivisa con altri produttori di pompe di infusione", "22px 'RotisSansSerif'", "#00A97A");
	this.risp26.name = "risp26";
	this.risp26.lineHeight = 28;
	this.risp26.lineWidth = 403;
	this.risp26.parent = this;
	this.risp26.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp26).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo25, rect = new cjs.Rectangle(0,0,407,57.3), [rect]);


(lib.Simbolo24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp25 = new cjs.Text("Solo unica ma non brevettata", "22px 'RotisSansSerif'", "#00A97A");
	this.risp25.name = "risp25";
	this.risp25.lineHeight = 28;
	this.risp25.lineWidth = 348;
	this.risp25.parent = this;
	this.risp25.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp25).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo24, rect = new cjs.Rectangle(0,0,352,29.7), [rect]);


(lib.Simbolo23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp24 = new cjs.Text("Comune ad altre aziende", "22px 'RotisSansSerif'", "#00A97A");
	this.risp24.name = "risp24";
	this.risp24.lineHeight = 28;
	this.risp24.lineWidth = 360;
	this.risp24.parent = this;
	this.risp24.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp24).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo23, rect = new cjs.Rectangle(0,0,364,29.7), [rect]);


(lib.Simbolo22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp23 = new cjs.Text("Unica e brevettata", "22px 'RotisSansSerif'", "#00A97A");
	this.risp23.name = "risp23";
	this.risp23.lineHeight = 28;
	this.risp23.lineWidth = 380;
	this.risp23.parent = this;
	this.risp23.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp23).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo22, rect = new cjs.Rectangle(0,0,384,29.7), [rect]);


(lib.Simbolo21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp22 = new cjs.Text("IPX4", "22px 'RotisSansSerif'", "#00A97A");
	this.risp22.name = "risp22";
	this.risp22.lineHeight = 28;
	this.risp22.lineWidth = 75;
	this.risp22.parent = this;
	this.risp22.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp22).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo21, rect = new cjs.Rectangle(0,0,79.2,29.7), [rect]);


(lib.Simbolo20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp21 = new cjs.Text("IPX2", "22px 'RotisSansSerif'", "#00A97A");
	this.risp21.name = "risp21";
	this.risp21.lineHeight = 28;
	this.risp21.lineWidth = 49;
	this.risp21.parent = this;
	this.risp21.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp21).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo20, rect = new cjs.Rectangle(0,0,53.2,29.7), [rect]);


(lib.Simbolo19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp20 = new cjs.Text("IPX3", "22px 'RotisSansSerif'", "#00A97A");
	this.risp20.name = "risp20";
	this.risp20.lineHeight = 28;
	this.risp20.lineWidth = 44;
	this.risp20.parent = this;
	this.risp20.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp20).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo19, rect = new cjs.Rectangle(0,0,48.2,29.7), [rect]);


(lib.Simbolo18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp19 = new cjs.Text("IPX1", "22px 'RotisSansSerif'", "#00A97A");
	this.risp19.name = "risp19";
	this.risp19.lineHeight = 28;
	this.risp19.lineWidth = 53;
	this.risp19.parent = this;
	this.risp19.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp19).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo18, rect = new cjs.Rectangle(0,0,57.2,29.7), [rect]);


(lib.Simbolo17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.testointro = new cjs.Text("Infusione Sicura:\nTesta la tua conoscenza! ", "46px 'RotisSansSerif'", "#00A97A");
	this.testointro.name = "testointro";
	this.testointro.lineHeight = 56;
	this.testointro.lineWidth = 362;
	this.testointro.parent = this;
	this.testointro.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.testointro).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Simbolo17, rect = new cjs.Rectangle(0,0,366,169), [rect]);


(lib.Simbolo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AtREsIAApXIajAAIAAJXg");
	this.shape.setTransform(85,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,170,60);
p.frameBounds = [rect];


(lib.Simbolo15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.text = new cjs.Text("Riprova", "35px 'RotisSansSerif'", "#FFFFFF");
	this.text.lineHeight = 43;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,176,53.5);
p.frameBounds = [rect];


(lib.Simbolo14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.text = new cjs.Text("Avanti", "38px 'RotisSansSerif'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 133;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,137.1,60.8);
p.frameBounds = [rect];


(lib.Simbolo12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.text = new cjs.Text("Iscrivi qui per saperne di più sull'infusione sicura!", "35px 'RotisSansSerif'", "#00A97A");
	this.text.lineHeight = 43;
	this.text.lineWidth = 438;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,442,135.5);
p.frameBounds = [rect];


(lib.Simbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.text = new cjs.Text("Avanti", "38px 'RotisSansSerif'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 133;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,137,61.2);
p.frameBounds = [rect];


(lib.Simbolo10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.text = new cjs.Text("Avanti", "38px 'RotisSansSerif'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,148,57.7);
p.frameBounds = [rect];


(lib.Simbolo9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.text = new cjs.Text("Avanti", "38px 'RotisSansSerif'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 189;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,193,68.7);
p.frameBounds = [rect];


(lib.Simbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.Simbolo7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMCDIAAi0IAZAAIAAC0gAgQhgIAAgiIAhAAIAAAig");
	this.shape.setTransform(93.15,24.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBvQgLgMAAgYIAAh0IgeAAIAAgVIAeAAIAAgrIAZgQIAAA7IAwAAIAAAVIgwAAIAABvIABAKQAAAFADAFQAEAEAFAEQAHACAJAAIAIAAIAIgCIACgBIAAAXQgNACgLAAQgbAAgKgLg");
	this.shape_1.setTransform(82.5,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnBdIAAhkIgBgZQAAgJgDgIQgCgHgGgFQgFgEgKgBQgMABgJAHQgJAJgHANQgGANgEAPQgDAOAAAMIAABLIgaAAIAAi0IAaAAIAAApIABAAIAGgPQADgHAGgHQAHgHAKgFQAJgFAOAAQAWAAAMAQQANAQAAAZIAACAg");
	this.shape_2.setTransform(66.475,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBRQgNgNAAgYQAAgPAIgLQAJgLAOgHQANgFAOgDQAOgDANAAIASgBIAAgWIgBgNQgCgOgKgFQgJgGgMAAQgTAAgIAIQgHAIgCANIgdAAQAAgKADgIQAEgJAIgIQAHgHANgEQAMgFARAAQAUAAANAGQAMAFAGAJQAGAJACAJQACAKAAAKIAAB+IgZAAIAAgYIgBAAQgFAKgOAJQgOAKgVAAQgXAAgNgOgAAGAKQgJACgKAEQgKAFgFAHQgGAIAAALQAAAMAHAHQAIAHAKAAQALAAAMgIQANgIAFgMIABgCIAFgPIABgUIgPAAIgSACg");
	this.shape_3.setTransform(47.45,28.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBbIhFi0IAcAAIA0COIABAAIAuiOIAcAAIg9C0g");
	this.shape_4.setTransform(31.25,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABJCDIgbhRIhcAAIgaBRIgdAAIBTkFIAjAAIBVEFgAAmAaIgmiCIAAAAIgmCCIBMAAg");
	this.shape_5.setTransform(12.575,24.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,107,48.3);
p.frameBounds = [rect];


(lib.Simbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMCDIAAi0IAZAAIAAC0gAgQhgIAAgiIAhAAIAAAig");
	this.shape.setTransform(93.15,24.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBvQgLgMAAgYIAAh0IgeAAIAAgVIAeAAIAAgrIAZgQIAAA7IAwAAIAAAVIgwAAIAABvIABAKQAAAFADAFQAEAEAFAEQAHACAJAAIAIAAIAIgCIACgBIAAAXQgNACgLAAQgbAAgKgLg");
	this.shape_1.setTransform(82.5,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnBdIAAhkIgBgZQAAgJgDgIQgCgHgGgFQgFgEgKgBQgMABgJAHQgJAJgHANQgGANgEAPQgDAOAAAMIAABLIgaAAIAAi0IAaAAIAAApIABAAIAGgPQADgHAGgHQAHgHAKgFQAJgFAOAAQAWAAAMAQQANAQAAAZIAACAg");
	this.shape_2.setTransform(66.475,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBRQgNgNAAgYQAAgPAIgLQAJgLAOgHQANgFAOgDQAOgDANAAIASgBIAAgWIgBgNQgCgOgKgFQgJgGgMAAQgTAAgIAIQgHAIgCANIgdAAQAAgKADgIQAEgJAIgIQAHgHANgEQAMgFARAAQAUAAANAGQAMAFAGAJQAGAJACAJQACAKAAAKIAAB+IgZAAIAAgYIgBAAQgFAKgOAJQgOAKgVAAQgXAAgNgOgAAGAKQgJACgKAEQgKAFgFAHQgGAIAAALQAAAMAHAHQAIAHAKAAQALAAAMgIQANgIAFgMIABgCIAFgPIABgUIgPAAIgSACg");
	this.shape_3.setTransform(47.45,28.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBbIhFi0IAcAAIA0COIABAAIAuiOIAcAAIg9C0g");
	this.shape_4.setTransform(31.25,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABJCDIgbhRIhcAAIgaBRIgdAAIBTkFIAjAAIBVEFgAAmAaIgmiCIAAAAIgmCCIBMAAg");
	this.shape_5.setTransform(12.575,24.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,131,48.3);
p.frameBounds = [rect];


(lib.risp18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp18 = new cjs.Text("Di tipo capacitivo ma non funzionante con guanti", "22px 'RotisSansSerif'", "#00A97A");
	this.risp18.name = "risp18";
	this.risp18.lineHeight = 28;
	this.risp18.lineWidth = 389;
	this.risp18.parent = this;
	this.risp18.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp18).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.risp18, rect = new cjs.Rectangle(0,0,393,65.4), [rect]);


(lib.risp17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp17 = new cjs.Text(" Di tipo resistivo ma non funzionante con guanti", "22px 'RotisSansSerif'", "#00A97A");
	this.risp17.name = "risp17";
	this.risp17.lineHeight = 28;
	this.risp17.lineWidth = 386;
	this.risp17.parent = this;
	this.risp17.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp17).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.risp17, rect = new cjs.Rectangle(0,0,390,61.4), [rect]);


(lib.risp16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp16 = new cjs.Text("Di tipo resistivo e funziona anche con guanti bagnati", "22px 'RotisSansSerif'", "#00A97A");
	this.risp16.name = "risp16";
	this.risp16.lineHeight = 28;
	this.risp16.lineWidth = 383;
	this.risp16.parent = this;
	this.risp16.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.risp16, rect = new cjs.Rectangle(0,0,387,61.4), [rect]);


(lib.risp15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp15 = new cjs.Text("Di tipo capacitivo e funziona anche con guanti bagnati", "22px 'RotisSansSerif'", "#00A97A");
	this.risp15.name = "risp15";
	this.risp15.lineHeight = 28;
	this.risp15.lineWidth = 377;
	this.risp15.parent = this;
	this.risp15.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.risp15, rect = new cjs.Rectangle(0,0,381,77.4), [rect]);


(lib.risp14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp14 = new cjs.Text("Tutte le risposte sono corrette", "22px 'RotisSansSerif'", "#00A97A");
	this.risp14.name = "risp14";
	this.risp14.lineHeight = 28;
	this.risp14.lineWidth = 383;
	this.risp14.parent = this;
	this.risp14.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.risp14, rect = new cjs.Rectangle(0,0,387.4,35.2), [rect]);


(lib.risp13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp13 = new cjs.Text("Nutrizione parenterale e soluzioni infusionali generiche", "22px 'RotisSansSerif'", "#00A97A");
	this.risp13.name = "risp13";
	this.risp13.lineHeight = 28;
	this.risp13.lineWidth = 374;
	this.risp13.parent = this;
	this.risp13.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp13).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.risp13, rect = new cjs.Rectangle(0,0,378.4,64.1), [rect]);


(lib.risp12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp12 = new cjs.Text("Chemioterapici e infusioni che necessitano di un circuito chiuso", "22px 'RotisSansSerif'", "#00A97A");
	this.risp12.name = "risp12";
	this.risp12.lineHeight = 28;
	this.risp12.lineWidth = 373;
	this.risp12.parent = this;
	this.risp12.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.risp12, rect = new cjs.Rectangle(0,0,377.2,57.3), [rect]);


(lib.risp11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp11 = new cjs.Text("Sangue ed emocomponenti", "22px 'RotisSansSerif'", "#00A97A");
	this.risp11.name = "risp11";
	this.risp11.lineHeight = 28;
	this.risp11.lineWidth = 384;
	this.risp11.parent = this;
	this.risp11.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.risp11, rect = new cjs.Rectangle(0,0,388,32.1), [rect]);


(lib.risp10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.risp10 = new cjs.Text("Nutrizione enterale", "22px 'RotisSansSerif'", "#00A97A");
	this.risp10.name = "risp10";
	this.risp10.lineHeight = 28;
	this.risp10.lineWidth = 382;
	this.risp10.parent = this;
	this.risp10.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.risp10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.risp10, rect = new cjs.Rectangle(0,0,386.1,29.7), [rect]);


(lib.q3vera4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AkNCbIAAk1IIbAAIAAE1g");
	this.shape.setTransform(27,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,54,31);
p.frameBounds = [rect];


(lib.q3vera3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AkNCbIAAk1IIbAAIAAE1g");
	this.shape.setTransform(27,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,54,31);
p.frameBounds = [rect];


(lib.q3vera2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AkNCbIAAk1IIbAAIAAE1g");
	this.shape.setTransform(27,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,54,31);
p.frameBounds = [rect];


(lib.q3vera1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AkNCbIAAk1IIbAAIAAE1g");
	this.shape.setTransform(27,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,54,31);
p.frameBounds = [rect];


(lib.q2vera = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("Aj8CqIAAlTIH5AAIAAFTg");
	this.shape.setTransform(25.275,16.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50.6,34);
p.frameBounds = [rect];


(lib.q2falsa3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("Aj8CqIAAlTIH5AAIAAFTg");
	this.shape.setTransform(25.275,16.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50.6,34);
p.frameBounds = [rect];


(lib.q2falsa2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("Aj8CqIAAlTIH5AAIAAFTg");
	this.shape.setTransform(25.275,16.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50.6,34);
p.frameBounds = [rect];


(lib.q2falsa1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("Aj8CqIAAlTIH5AAIAAFTg");
	this.shape.setTransform(25.275,16.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50.6,34);
p.frameBounds = [rect];


(lib.q1vera4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AkhDDIAAmFIJDAAIAAGFg");
	this.shape.setTransform(29,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,58,39);
p.frameBounds = [rect];


(lib.q1vera3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AkhDDIAAmFIJDAAIAAGFg");
	this.shape.setTransform(29,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,58,39);
p.frameBounds = [rect];


(lib.Q1vera2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AkhDDIAAmFIJDAAIAAGFg");
	this.shape.setTransform(29,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,58,39);
p.frameBounds = [rect];


(lib.Q1vera = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AkhDDIAAmFIJDAAIAAGFg");
	this.shape.setTransform(29,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,58,39);
p.frameBounds = [rect];


(lib.BottoneStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("AwoEnIAApNMAhRAAAIAAJNg");
	this.shape.setTransform(126.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BottoneStart, rect = new cjs.Rectangle(20,0,213,59), [rect]);


// stage content:
(lib.QUIZVERSIONECORRETTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// RESET: mostra elementi iniziali
		this.button_start.visible = true;
		this.testo_start.visible = true;
		this.testointro.visible = true;
		
		// Nascondi il video
		this.introVideo.visible = false;
		
		// Ferma il video se stava suonando
		if (this.introVideo.stop) {
		    this.introVideo.stop();
		}
		
		// Pulsante Start
		this.button_start.addEventListener("click", function() {
		    this.button_start.visible = false;
		    this.testo_start.visible = false;
		    this.testointro.visible = false;
		    this.introVideo.visible = true;
		
		    // Avvia il video
		    if (this.introVideo.play) {
		        this.introVideo.play();
		    }
		
		    // Dopo 6 secondi vai al frame 1
		    setTimeout(function() {
		        if (this.introVideo.stop) {
		            this.introVideo.stop();
		        }
		        this.gotoAndStop(1);
		    }.bind(this), 6000);
		}.bind(this));
	}
	this.frame_1 = function() {
		this.stop();
		
		const self = this;
		
		// Imposta alpha iniziale a 0 per tutti i testi
		[self.risp1, self.risp2, self.risp3, self.risp4, self.risp5].forEach(function(txt) {
		    if (txt) txt.alpha = 0;
		});
		
		// Fading sequenziale
		if (self.risp1) {
		    createjs.Tween.get(self.risp1).to({ alpha: 1 }, 800); // primo subito
		}
		if (self.risp2) {
		    createjs.Tween.get(self.risp2).wait(500).to({ alpha: 1 }, 800); // dopo 0.5s
		}
		if (self.risp3) {
		    createjs.Tween.get(self.risp3).wait(1000).to({ alpha: 1 }, 800); // dopo 1s
		}
		if (self.risp4) {
		    createjs.Tween.get(self.risp4).wait(1500).to({ alpha: 1 }, 800); // dopo 1.5s
		}
		if (self.risp5) {
		    createjs.Tween.get(self.risp5).wait(2000).to({ alpha: 1 }, 800); // dopo 2s
		}
		
		// Risposta corretta
		if (self.q1corretta) {
		    self.q1corretta.cursor = "pointer";
		    self.q1corretta.mouseEnabled = true;
		    self.q1corretta.addEventListener("click", function () {
		        window.q1answer = 1;
		        self.gotoAndStop(2);
		    });
		}
		
		// Risposte false
		const falseAnswers = [self.q1falsa1, self.q1falsa2, self.q1falsa3, self.q1falsa4, self.q1falsa5];
		falseAnswers.forEach(function(btn) {
		    if (btn) {
		        btn.cursor = "pointer";
		        btn.mouseEnabled = true;
		        btn.addEventListener("click", function () {
		            window.q1answer = 0;
		            self.gotoAndStop(2);
		        });
		    }
		});
		
		// Pulsante Avanti
		if (self.Avanti1) {
		    self.Avanti1.cursor = "pointer";
		    self.Avanti1.mouseEnabled = true;
		    self.Avanti1.addEventListener("click", function () {
		        self.gotoAndStop(2);
		    });
		}
	}
	this.frame_2 = function() {
		this.button_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11() {
			this.gotoAndStop(3);
		}
		
		
		this.avanti2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.frame_3 = function() {
		    this.stop();
		
		    const self = this;
		
		    // Imposta alpha iniziale a 0 per tutti i testi
		    [self.risp6, self.risp7, self.risp8, self.risp9].forEach(function(txt) {
		        if (txt) txt.alpha = 0;
		    });
		
		    // Fading sequenziale
		    if (self.risp6) {
		        createjs.Tween.get(self.risp6).to({ alpha: 1 }, 800); // subito
		    }
		    if (self.risp7) {
		        createjs.Tween.get(self.risp7).wait(500).to({ alpha: 1 }, 800); // dopo 0.5s
		    }
		    if (self.risp8) {
		        createjs.Tween.get(self.risp8).wait(1000).to({ alpha: 1 }, 800); // dopo 1s
		    }
		    if (self.risp9) {
		        createjs.Tween.get(self.risp9).wait(1500).to({ alpha: 1 }, 800); // dopo 1.5s
		    }
		
		    // Risposta corretta
		    if (self.q2vera) {
		        self.q2vera.cursor = "pointer";
		        self.q2vera.mouseEnabled = true;
		        self.q2vera.addEventListener("click", function() {
		            window.q2answer = 1;
		            self.gotoAndStop(4);
		        });
		    }
		
		    // Risposte sbagliate
		    const falseAnswers = [self.q2falsa1, self.q2falsa2, self.q2falsa3];
		    falseAnswers.forEach(function(btn) {
		        if (btn) {
		            btn.cursor = "pointer";
		            btn.mouseEnabled = true;
		            btn.addEventListener("click", function() {
		                window.q2answer = 0;
		                self.gotoAndStop(4);
		            });
		        }
		    });
		};
		
		// Chiamata della funzione
		this.frame_3();
	}
	this.frame_4 = function() {
		this.bottone1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			this.gotoAndStop(5);
		}
		
		
		
		this.button_6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.stop();
		const self = this;
		
		// Imposta alpha iniziale a 0 per tutti i testi
		[self.risp10, self.risp11, self.risp12, self.risp13, self.risp14].forEach(function(txt) {
		    if (txt) txt.alpha = 0;
		});
		
		// Fading sequenziale
		if (self.risp10) {
		    createjs.Tween.get(self.risp10).to({ alpha: 1 }, 800); // primo subito
		}
		if (self.risp11) {
		    createjs.Tween.get(self.risp11).wait(500).to({ alpha: 1 }, 800); // dopo 0.5s
		}
		if (self.risp12) {
		    createjs.Tween.get(self.risp12).wait(1000).to({ alpha: 1 }, 800); // dopo 1s
		}
		if (self.risp13) {
		    createjs.Tween.get(self.risp13).wait(1500).to({ alpha: 1 }, 800); // dopo 1.5s
		}
		if (self.risp14) {
		    createjs.Tween.get(self.risp14).wait(2000).to({ alpha: 1 }, 800); // dopo 2s
		}
		// Click gestione
		if (self.q3vera) {
		    self.q3vera.cursor = "pointer";
		    self.q3vera.mouseEnabled = true;
		    self.q3vera.addEventListener("click", () => {
		        window.q3answer = 1;
		        self.gotoAndStop(6);
		    });
		}
		
		[self.q3falsa1, self.q3falsa2, self.q3falsa3, self.q3falsa4].forEach(btn => {
		    if (btn) {
		        btn.cursor = "pointer";
		        btn.mouseEnabled = true;
		        btn.addEventListener("click", () => {
		            window.q3answer = 0;
		            self.gotoAndStop(6);
		        });
		    }
		});
	}
	this.frame_6 = function() {
		this.bottone2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_17()
		{
			this.gotoAndStop(7);
		}
		
		
		
		this.button_7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_18.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_18()
		{
			this.gotoAndStop(7);
		}
		
		
		/* Clic per andare al fotogramma specificato e interrompere la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e il filmato si interrompe.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		
		this.avanti2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_25()
		{
			this.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		this.frame_7 = function() {
		    this.stop();
		
		    const self = this;
		
		   // Imposta alpha iniziale a 0 per tutti i testi
		    [self.risp15, self.risp16, self.risp17, self.risp18].forEach(function(txt) {
		        if (txt) txt.alpha = 0;
		    });
		
		    // Fading sequenziale
		    if (self.risp15) {
		        createjs.Tween.get(self.risp15).to({ alpha: 1 }, 800); // subito
		    }
		    if (self.risp16) {
		        createjs.Tween.get(self.risp16).wait(500).to({ alpha: 1 }, 800); // dopo 0.5s
		    }
		    if (self.risp17) {
		        createjs.Tween.get(self.risp17).wait(1000).to({ alpha: 1 }, 800); // dopo 1s
		    }
		    if (self.risp18) {
		        createjs.Tween.get(self.risp18).wait(1500).to({ alpha: 1 }, 800); // dopo 1.5s
		    }
		
		    // Risposta corretta
		    if (self.q4vera) {
		        self.q4vera.cursor = "pointer";
		        self.q4vera.mouseEnabled = true;
		        self.q4vera.addEventListener("click", function() {
		            window.q4answer = 1;
		            self.gotoAndStop(8);
		        });
		    }
		
		    // Risposte sbagliate
		    const falseAnswers = [self.q4falsa1, self.q4falsa2, self.q4falsa3];
		    falseAnswers.forEach(function(btn) {
		        if (btn) {
		            btn.cursor = "pointer";
		            btn.mouseEnabled = true;
		            btn.addEventListener("click", function() {
		                window.q4answer = 0;
		                self.gotoAndStop(8);
		            });
		        }
		    });
		};
		
		this.frame_7();
	}
	this.frame_8 = function() {
		this.button_8.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_19()
		{
			this.gotoAndStop(9);
		}
		
		
		this.button_9.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop(9);
		}
		
		
		/* Clic per andare al fotogramma specificato e interrompere la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e il filmato si interrompe.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		
		this.button9.addEventListener("click", fl_ClickToGoToAndStopAtFrame_24.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_24()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		this.frame_9 = function() {
		    this.stop();
		
		    const self = this;
		
		    // Imposta alpha iniziale a 0 per tutti i testi
		    [self.risp19, self.risp20, self.risp21, self.risp22].forEach(function(txt) {
		        if (txt) txt.alpha = 0;
		    });
		
		    // Fading sequenziale
		    if (self.risp19) {
		        createjs.Tween.get(self.risp19).to({ alpha: 1 }, 800); // subito
		    }
		    if (self.risp20) {
		        createjs.Tween.get(self.risp20).wait(500).to({ alpha: 1 }, 800); // dopo 0.5s
		    }
		    if (self.risp21) {
		        createjs.Tween.get(self.risp21).wait(1000).to({ alpha: 1 }, 800); // dopo 1s
		    }
		    if (self.risp22) {
		        createjs.Tween.get(self.risp22).wait(1500).to({ alpha: 1 }, 800); // dopo 1.5s
		    }
		
		    // Risposta corretta
		    if (self.q5vera) {
		        self.q5vera.cursor = "pointer";
		        self.q5vera.mouseEnabled = true;
		        self.q5vera.addEventListener("click", function() {
		            window.q5answer = 1;
		            self.gotoAndStop(10);
		        });
		    }
		
		    // Risposte sbagliate
		    const falseAnswers = [self.q5falsa1, self.q5falsa2, self.q5falsa3];
		    falseAnswers.forEach(function(btn) {
		        if (btn) {
		            btn.cursor = "pointer";
		            btn.mouseEnabled = true;
		            btn.addEventListener("click", function() {
		                window.q5answer = 0;
		                self.gotoAndStop(10);
		            });
		        }
		    });
		};
		
		this.frame_9();
	}
	this.frame_10 = function() {
		this.button11.addEventListener("click", fl_ClickToGoToAndStopAtFrame_21.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_21()
		{
			this.gotoAndStop(11);
		}
		
		
		
		this.button10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_22.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_22()
		{
			this.gotoAndStop(11);
		}
	}
	this.frame_11 = function() {
		this.frame_11 = function() {
		    this.stop();
		
		    const self = this;
		
		    // Imposta alpha iniziale a 0 per tutti i testi
		    [self.risp23, self.risp24, self.risp25, self.risp26].forEach(function(txt) {
		        if (txt) txt.alpha = 0;
		    });
		
		    // Fading sequenziale
		    if (self.risp23) {
		        createjs.Tween.get(self.risp23).to({ alpha: 1 }, 800); // subito
		    }
		    if (self.risp24) {
		        createjs.Tween.get(self.risp24).wait(500).to({ alpha: 1 }, 800); // dopo 0.5s
		    }
		    if (self.risp25) {
		        createjs.Tween.get(self.risp25).wait(1000).to({ alpha: 1 }, 800); // dopo 1s
		    }
		    if (self.risp26) {
		        createjs.Tween.get(self.risp26).wait(1500).to({ alpha: 1 }, 800); // dopo 1.5s
		    }
		
		    // Risposta corretta
		    if (self.q6vera) {
		        self.q6vera.cursor = "pointer";
		        self.q6vera.mouseEnabled = true;
		        self.q6vera.addEventListener("click", function() {
		            window.q6answer = 1;
		            self.gotoAndStop(12);
		        });
		    }
		
		    // Risposte sbagliate
		    const falseAnswers = [self.q6falsa3, self.q6falsa1, self.q6falsa2];
		    falseAnswers.forEach(function(btn) {
		        if (btn) {
		            btn.cursor = "pointer";
		            btn.mouseEnabled = true;
		            btn.addEventListener("click", function() {
		                window.q6answer = 0;
		                self.gotoAndStop(12);
		            });
		        }
		    });
		};
		
		this.frame_11();
	}
	this.frame_12 = function() {
		this.button111.addEventListener("click", fl_ClickToGoToAndStopAtFrame_26.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_26()
		{
			this.gotoAndStop(13);
		}
		
		
		this.avanti111.addEventListener("click", fl_ClickToGoToAndStopAtFrame_27.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_27()
		{
			this.gotoAndStop(13);
		}
	}
	this.frame_13 = function() {
		this.frame_13 = function() {
		    this.stop();
		
		    const self = this;
		
		    // Calcolo del punteggio totale
		    window.totalcorrect =
		        Number(window.q1answer || 0) +
		        Number(window.q2answer || 0) +
		        Number(window.q3answer || 0) +
		        Number(window.q4answer || 0) +
		        Number(window.q5answer || 0) +
		        Number(window.q6answer || 0);
		
		    // Mostra il punteggio con messaggio personalizzato
		    if (this.displayTotal) {
		        let msg = "Hai risposto correttamente a " + window.totalcorrect + " domande.\n";
		
		        if (window.totalcorrect === 0) {
		            msg += "Non preoccuparti, puoi sempre migliorare!";
		        } else if (window.totalcorrect <= 2) {
		            msg += "Hai ancora margini di miglioramento.";
		        } else if (window.totalcorrect <= 4) {
		            msg += "Sei sulla strada giusta!";
		        } else if (window.totalcorrect === 5) {
		            msg += "Ottimo! Quasi perfetto.";
		        } else if (window.totalcorrect === 6) {
		            msg += "Perfetto! Hai risposto correttamente a tutte le domande!";
		        }
		
		        this.displayTotal.text = msg;
		        this.addChild(this.displayTotal);
		    }
		
		    // Funzione di reset
		    function resetQuiz() {
		        window.totalcorrect = 0;
		        window.q1answer = 0;
		        window.q2answer = 0;
		        window.q3answer = 0;
		        window.q4answer = 0;
		        window.q5answer = 0;
		        window.q6answer = 0;
		    }
		
		    // Pulsante per aprire il form
		    if (this.form) {
		        this.form.cursor = "pointer";
		        this.form.addEventListener("click", function() {
		            window.open("https://bbraun.eu.qualtrics.com/jfe/form/SV_1YzRIbwBito9B9I");
		        });
		    }
		
		    // Pulsanti di restart
		    const restartButtons = [this.restart, this.buttonrestart];
		    restartButtons.forEach(btn => {
		        if (btn) {
		            btn.cursor = "pointer";
		            btn.addEventListener("click", function() {
		                resetQuiz();
		                self.gotoAndStop(0);
		            });
		        }
		    });
		};
		
		// Chiamata della funzione
		this.frame_13();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1));

	// Actions
	this.testo_start = new lib.testo_start();
	this.testo_start.name = "testo_start";
	this.testo_start.setTransform(347.2,340.05,1,1,0,0,0,67.6,19.5);
	new cjs.ButtonHelper(this.testo_start, 0, 1, 1);

	this.avanti2 = new lib.Simbolo4();
	this.avanti2.name = "avanti2";
	this.avanti2.setTransform(337.1,352.9,1,1,0,0,0,65.5,22.4);
	new cjs.ButtonHelper(this.avanti2, 0, 1, 1);

	this.button_6 = new lib.Simbolo7();
	this.button_6.name = "button_6";
	this.button_6.setTransform(358.4,318.25,1,1,0,0,0,53.5,22.4);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.button_8 = new lib.Simbolo8();
	this.button_8.name = "button_8";
	this.button_8.setTransform(381.5,358.35,0.8418,0.8419,0,0,0,73.5,23.3);
	new cjs.ButtonHelper(this.button_8, 0, 1, 1);

	this.button10 = new lib.Simbolo14();
	this.button10.name = "button10";
	this.button10.setTransform(356.1,324.75,0.8315,0.8314,0,0,0,68.8,30.6);
	new cjs.ButtonHelper(this.button10, 0, 1, 1);

	this.restart = new lib.Simbolo15();
	this.restart.name = "restart";
	this.restart.setTransform(350.6,447.8,0.9091,0.9084,0,0,0,88,26.8);
	new cjs.ButtonHelper(this.restart, 0, 1, 1);

	this.displayTotal = new cjs.Text("", "35px 'RotisSansSerif'", "#00A97A");
	this.displayTotal.name = "displayTotal";
	this.displayTotal.lineHeight = 43;
	this.displayTotal.lineWidth = 526;
	this.displayTotal.parent = this;
	this.displayTotal.setTransform(118,36.55);

	this.buttonrestart = new lib.Simbolo16();
	this.buttonrestart.name = "buttonrestart";
	this.buttonrestart.setTransform(326.6,443.2,0.8294,0.8292,0,0,0,85.1,30.1);
	new cjs.ButtonHelper(this.buttonrestart, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.testo_start}]}).to({state:[]},1).to({state:[{t:this.avanti2}]},1).to({state:[]},1).to({state:[{t:this.button_6}]},1).to({state:[]},1).to({state:[{t:this.button_8}]},3).to({state:[]},1).to({state:[{t:this.button10}]},1).to({state:[]},1).to({state:[{t:this.buttonrestart},{t:this.displayTotal},{t:this.restart}]},2).wait(1));

	// Menù
	this.testointro = new lib.Simbolo17();
	this.testointro.name = "testointro";
	this.testointro.setTransform(385.25,183.05,1,1,0,0,0,183,84.5);

	this.instance = new lib.Logo_Claim_A3_RGB();
	this.instance.setTransform(535,434,0.2096,0.2097);

	this.button_2 = new lib.Simboloavanti();
	this.button_2.name = "button_2";
	this.button_2.setTransform(326.6,357.25,1,1,0,0,0,82,21.4);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A97A").s().p("Ag0BTQgcgeAAg8QAAgyAWgcQAUgcAqgBQAmAAATAYQAUAWAAAmIAAALIh9AAIAAAMQAAANAEAQQADARAJAPQAJAPAPAKQAPAJAVABIAVgBIARgEIAGgCIAAAaQgVAHgeAAQgxAAgcgggAAtguQAAgGgCgHQgCgHgGgGQgEgHgIgEQgJgEgLAAQgKAAgIAEQgKAEgFAHQgFAGgDAHIgEANIBXAAIAAAAg");
	this.shape.setTransform(284.85,281.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQACAGADAGQAFAFAGAEQAIADALAAIAKgBIAJgCIADgBIAAAcQgQACgMAAQghAAgNgNg");
	this.shape_1.setTransform(267.15,277.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQACAGADAGQAFAFAGAEQAIADALAAIAKgBIAJgCIADgBIAAAcQgQACgMAAQghAAgNgNg");
	this.shape_2.setTransform(251.85,277.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A97A").s().p("Ag0BTQgcgeAAg8QAAgyAVgcQAWgcApgBQAmAAAUAYQATAWAAAmIAAALIh9AAIAAAMQAAANADAQQAFARAIAPQAJAPAPAKQAPAJAVABIAWgBIARgEIAFgCIAAAaQgVAHgdAAQgzAAgbgggAAtguQAAgGgCgHQgDgHgEgGQgFgHgJgEQgIgEgLAAQgKAAgJAEQgIAEgGAHQgFAGgDAHIgEANIBXAAIAAAAg");
	this.shape_3.setTransform(233.85,281.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A97A").s().p("AgzBwIAAjaIAeAAIAAAqIABAAQAEgIAEgHQAGgHAHgHQAIgIANgFQANgFASAAIAAAiQgkAAgTAbQgTAbAAAtIAABag");
	this.shape_4.setTransform(218,280.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A97A").s().p("AgzBwIAAjaIAeAAIAAAqIABAAQAEgIAEgHQAGgHAHgHQAIgIANgFQANgFARAAIAAAiQgjAAgTAbQgSAbgBAtIAABag");
	this.shape_5.setTransform(203.5,280.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A97A").s().p("AgoBqQgRgIgLgQQgLgQgEgUQgGgVAAgYQAAgYAGgVQAEgUALgQQALgQARgJQARgIAXgBQAXABARAIQASAJALAQQALAQAFAUQAFAVAAAYQAAAYgFAVQgFAVgLAPQgLAQgRAIQgSAJgXAAQgXAAgRgJgAgnhAQgOAXAAApQAAAqAOAXQANAYAaAAQAaAAAOgYQAOgXAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_6.setTransform(183.475,281.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A97A").s().p("AgzBUQgegeAAg6QAAgzAWgeQAWgdAsAAQAVAAAPAHQAOAFAJALQAJAKADAMQAEANAAAOIglAAQAAgTgJgNQgKgNgUAAQgNAAgLAHQgKAHgGALQgGALgDAOQgCANAAANQAAARADARQAEARAKAPQAKAPARAJQAQAKAaAAIASgBQAJgBAIgDIAAAYQgLAEgKACIgYABQg1AAgdgfg");
	this.shape_7.setTransform(163.125,281.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A97A").s().p("AgoBqQgRgJgLgPQgLgQgEgUQgGgVAAgYQAAgYAGgVQAEgUALgQQALgQARgIQARgKAXABQAXgBARAKQASAIALAQQALAQAFAUQAFAVAAAYQAAAZgFAUQgFAVgLAQQgLAOgRAJQgSAJgXgBQgXABgRgJgAgnhAQgOAYAAAoQAAAqAOAYQANAXAagBQAaABAOgXQAOgYAAgqQAAgogOgYQgOgXgaAAQgaAAgNAXg");
	this.shape_8.setTransform(524.675,225.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A97A").s().p("AAvBwIAAh4IgBgeQAAgMgDgJQgDgKgHgFQgHgFgLAAQgPAAgKAJQgMAKgIAQQgIAPgEATQgEARAAAPIAABaIgfAAIAAjaIAfAAIAAAzIABAAQADgKAEgJQAEgIAIgIQAHgKANgGQALgFARAAQAbAAAPAUQAOATAAAdIAACbg");
	this.shape_9.setTransform(502.125,225.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A97A").s().p("AgoBqQgRgJgLgPQgLgQgEgUQgGgVAAgYQAAgYAGgVQAEgUALgQQALgQARgIQARgKAXABQAXgBARAKQASAIALAQQALAQAFAUQAFAVAAAYQAAAZgFAUQgFAVgLAQQgLAOgRAJQgSAJgXgBQgXABgRgJgAgnhAQgOAYAAAoQAAAqAOAYQANAXAagBQAaABAOgXQAOgYAAgqQAAgogOgYQgOgXgaAAQgaAAgNAXg");
	this.shape_10.setTransform(479.525,225.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A97A").s().p("AgrBvIgbgGIAAgcIACAAIAaAIQAPADAOAAQAYAAAOgJQAOgIAAgSQABgMgKgJQgIgHgPgIIgHgEIgJgEIgKgGIgGgDQgVgLgMgMQgKgLgBgWQAAgbAUgPQAUgPAiAAQANAAALABIAYAFIAEABIAAAdIgXgHQgOgDgOAAQgSAAgNAIQgMAJAAALQAAAKAHAHQAIAGAPAHIAJAGIAJAFIAJAFIAEACIATAKQAHAEAGAHQAHAHAEAJQAEAKAAAMQAAAggWARQgVASglgBQgSAAgQgDg");
	this.shape_11.setTransform(460.2,225.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A97A").s().p("Ag1BUQgbgfAAg7QAAgzAWgcQAUgdArABQAlAAAUAWQATAYAAAlIAAAKIh9AAIAAAOQAAANAEAPQAEAQAIAQQAJAPAPAJQAOAKAXAAIAUgBIARgDIAGgBIAAAZQgVAHgegBQgyAAgcgegAAtguQAAgGgCgHQgDgHgFgHQgEgGgIgEQgJgEgLAAQgKAAgJAEQgIAEgFAGQgGAHgDAHIgEANIBXAAIAAAAg");
	this.shape_12.setTransform(429.45,225.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQABAGAFAGQADAFAIAEQAHADALAAIAKgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_13.setTransform(411.75,222.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A97A").s().p("AgrBvIgbgGIAAgcIACAAIAaAIQAPADAOAAQAYAAAOgJQAOgIAAgSQAAgMgJgJQgIgHgPgIIgHgEIgJgEIgKgGIgHgDQgUgLgLgMQgMgLAAgWQABgbATgPQATgPAkAAQAMAAALABIAYAFIAEABIAAAdIgXgHQgOgDgOAAQgSAAgNAIQgMAJAAALQgBAKAJAHQAHAGAOAHIAJAGIAKAFIAJAFIAEACIATAKQAGAEAHAHQAHAHAEAJQADAKABAMQgBAggUARQgWASglgBQgSAAgQgDg");
	this.shape_14.setTransform(395.6,225.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A97A").s().p("AgoBqQgRgJgLgPQgLgQgEgUQgGgVAAgYQAAgYAGgVQAEgUALgQQALgQARgIQARgKAXABQAXgBARAKQASAIALAQQALAQAFAUQAFAVAAAYQAAAZgFAUQgFAVgLAQQgLAOgRAJQgSAJgXgBQgXABgRgJgAgnhAQgOAYAAAoQAAAqAOAYQANAXAagBQAaABAOgXQAOgYAAgqQAAgogOgYQgOgXgaAAQgaAAgNAXg");
	this.shape_15.setTransform(375.775,225.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A97A").s().p("AhRChIAAk8IAfAAIAAAlIABAAQAEgPAPgOQAOgNAXAAQAnAAASAdQASAeAAA2QAAAWgEAVQgEAUgKAQQgJARgOAJQgOAKgTAAQgNAAgKgEQgLgEgGgGQgHgGgEgHIgGgOIgBAAIAACGgAgVh+QgKAIgGANQgHANgDAPQgDAQAAAOQAAAmAOAZQANAaAXAAQANAAAJgIQAKgJAFgNQAFgNACgRQACgRAAgSIgBgbQgCgNgFgMQgFgNgIgIQgKgIgOAAQgMAAgKAIg");
	this.shape_16.setTransform(354.45,230.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A97A").s().p("AgrBvIgbgGIAAgcIACAAIAaAIQAPADAOAAQAYAAAOgJQAOgIAAgSQAAgMgJgJQgIgHgPgIIgHgEIgJgEIgKgGIgHgDQgUgLgMgMQgKgLgBgWQAAgbAUgPQATgPAkAAQANAAAKABIAYAFIAEABIAAAdIgXgHQgOgDgOAAQgTAAgMAIQgMAJAAALQAAAKAIAHQAHAGAOAHIAJAGIAKAFIAJAFIAEACIATAKQAHAEAGAHQAHAHAEAJQADAKABAMQAAAggWARQgVASglgBQgTAAgPgDg");
	this.shape_17.setTransform(334.3,225.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_18.setTransform(319.975,220.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A97A").s().p("AgzBwIAAjaIAeAAIAAAqIABAAQAEgHAEgIQAGgHAHgIQAIgHANgFQANgFASAAIAAAiQgkAAgTAbQgTAbAAAsIAABbg");
	this.shape_19.setTransform(308.9,225.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A97A").s().p("Ag0BUQgcgfAAg7QAAgzAVgcQAWgdApABQAmAAAUAWQATAYAAAlIAAAKIh9AAIAAAOQAAANADAPQAFAQAIAQQAJAPAPAJQAPAKAVAAIAWgBIARgDIAFgBIAAAZQgVAHgdgBQgyAAgcgegAAtguQAAgGgCgHQgDgHgEgHQgFgGgJgEQgIgEgLAAQgKAAgJAEQgJAEgFAGQgFAHgDAHIgEANIBXAAIAAAAg");
	this.shape_20.setTransform(277.95,225.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A97A").s().p("AgPCfIAAk9IAfAAIAAE9g");
	this.shape_21.setTransform(262.075,220.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A97A").s().p("Ag0BUQgcgfAAg7QAAgzAVgcQAWgdApABQAmAAATAWQAUAYAAAlIAAAKIh9AAIAAAOQAAANADAPQAEAQAJAQQAJAPAPAJQAPAKAVAAIAWgBIAQgDIAGgBIAAAZQgVAHgegBQgxAAgcgegAAtguQAAgGgCgHQgCgHgFgHQgFgGgJgEQgIgEgLAAQgKAAgIAEQgJAEgGAGQgFAHgDAHIgEANIBXAAIAAAAg");
	this.shape_22.setTransform(234.55,225.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIACANQABAGADAGQAEAFAHAEQAIADALAAIAKgBIAJgCIADgBIAAAcQgQACgMAAQghAAgNgNg");
	this.shape_23.setTransform(216.85,222.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIACANQABAGADAGQAEAFAHAEQAIADALAAIAKgBIAJgCIADgBIAAAcQgQACgMAAQghAAgNgNg");
	this.shape_24.setTransform(201.55,222.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A97A").s().p("Ag/BdQgOgUAAgdIAAibIAfAAIAAB4IABAeQAAALADAKQADAKAHAGQAHAFALAAQAOAAAMgKQAMgKAHgQQAIgPAEgSQAEgSAAgPIAAhaIAfAAIAADaIgfAAIAAgyIgBAAIgHASQgEAIgIAJQgHAIgNAGQgLAGgRAAQgbAAgPgTg");
	this.shape_25.setTransform(181.975,225.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A97A").s().p("AgRCfIAAkfIhMAAIAAgeIC7AAIAAAeIhMAAIAAEfg");
	this.shape_26.setTransform(162.2,220.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A97A").s().p("AgWBtIAAguIAtAAIAAAugAgWg/IAAguIAtAAIAAAug");
	this.shape_27.setTransform(540.075,169.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A97A").s().p("Ag1CDQgbgfAAg8QAAgyAWgcQAUgcArAAQAlAAATAXQAUAXAAAkIAAALIh9AAIAAANQAAAOAEAQQADAQAJAPQAJAPAPAKQAOAKAWAAIAVgBIARgEIAGgBIAAAZQgVAHgeAAQgyAAgcgfgAAtAAQAAgFgCgHQgDgHgFgGQgEgHgIgEQgJgEgLAAQgKAAgIAEQgKAEgFAHQgFAGgDAHIgEAMIBXAAIAAAAgAgOhjIggg+IApAAIATA+g");
	this.shape_28.setTransform(522.35,165.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A97A").s().p("Ag+BiQgPgQgBgdQABgRAJgOQALgNAQgIQAQgIASgDQARgEAQABQAOAAAHgCIAAgZIgBgRQgDgRgMgGQgKgHgPAAQgXAAgJAKQgJAIgCARIgjAAQAAgMADgKQAFgLAJgJQAJgJAPgFQAPgGAVABQAYAAAPAGQAPAHAHAKQAIALACAMQADALAAANIAACYIgfAAIAAgdIgBAAQgGAMgRAMQgRALgagBQgbAAgQgQgAAHAMQgLADgMAFQgLAFgHAJQgIAJAAAOQAAAPAJAIQAJAIANAAQAOAAAPgJQAOgKAHgPIABgCIAGgSQACgGgBgSIgSAAQgKAAgMACg");
	this.shape_29.setTransform(488.65,169.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQACAGAEAGQAEAFAGAEQAIADALAAIAKgBIAJgCIADgBIAAAcQgQACgMAAQghAAgNgNg");
	this.shape_30.setTransform(471.45,166.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQACAGADAGQAFAFAGAEQAIADALAAIAKgBIAJgCIADgBIAAAcQgQACgMAAQghAAgNgNg");
	this.shape_31.setTransform(456.15,166.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A97A").s().p("Ag0BUQgcggAAg7QAAgyAVgcQAWgcApAAQAmgBAUAXQATAYAAAlIAAAKIh9AAIAAANQAAANADARQAFAQAIAPQAJAPAPAKQAPAKAVgBIAWgBIARgDIAFgCIAAAaQgVAGgdAAQgzAAgbgegAAtguQAAgGgCgHQgDgHgEgHQgFgGgJgEQgIgEgLAAQgKAAgIAEQgKAEgFAGQgFAHgDAHIgEANIBXAAIAAAAg");
	this.shape_32.setTransform(438.15,169.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A97A").s().p("AgzBwIAAjaIAeAAIAAAqIABAAQAEgHAEgIQAGgHAHgIQAIgHANgFQANgFASAAIAAAiQgkAAgTAbQgTAbAAAtIAABag");
	this.shape_33.setTransform(422.3,169.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A97A").s().p("AgzBwIAAjaIAeAAIAAAqIABAAQAEgHAEgIQAGgHAHgIQAIgHANgFQANgFARAAIAAAiQgjAAgTAbQgSAbgBAtIAABag");
	this.shape_34.setTransform(407.8,169.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A97A").s().p("AgoBqQgRgJgLgPQgLgPgEgWQgGgUAAgZQAAgYAGgUQAEgVALgQQALgPARgIQARgJAXAAQAXAAARAJQASAIALAPQALAQAFAVQAFAUAAAYQAAAZgFAVQgFAVgLAPQgLAQgRAIQgSAIgXAAQgXAAgRgIgAgnhAQgOAXAAApQAAAqAOAYQANAWAaAAQAaAAAOgWQAOgYAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_35.setTransform(387.775,169.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00A97A").s().p("AgzBUQgegeAAg6QAAg0AWgcQAWgdAsAAQAVAAAPAFQAOAHAJAKQAJAKADANQAEAMAAAPIglAAQAAgVgJgMQgKgNgUAAQgNAAgLAHQgKAGgGAMQgGALgDAOQgCAMAAAOQAAARADARQAEARAKAPQAKAPARAJQAQAJAaAAIASgBQAJgBAIgCIAAAYQgLAEgKACIgYAAQg1AAgdgeg");
	this.shape_36.setTransform(367.425,169.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00A97A").s().p("Ag+BiQgPgQAAgdQAAgRAKgOQAKgNAQgIQAQgIASgDQARgEAQABQAOAAAIgCIgBgZIgBgRQgDgRgLgGQgLgHgPAAQgXAAgJAKQgKAIgBARIgkAAQAAgMAFgKQADgLAKgJQAJgJAPgFQAQgGAUABQAYAAAPAGQAPAHAIAKQAHALADAMQABALAAANIAACYIgeAAIAAgdIAAAAQgGAMgSAMQgRALgagBQgbAAgQgQgAAHAMQgLADgMAFQgLAFgIAJQgGAJAAAOQgBAPAJAIQAJAIANAAQAPAAAOgJQAPgKAGgPIABgCIAGgSQACgGAAgSIgTAAQgKAAgMACg");
	this.shape_37.setTransform(333.7,169.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAfgTIAABGIA6AAIAAAbIg6AAIAACFIABANQABAGADAGQAFAFAHAEQAHADAMAAIAJgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_38.setTransform(316.5,166.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00A97A").s().p("AgrBwIgagHIAAgcIABABIAaAHQAPADAOAAQAXABAPgKQAOgIAAgSQABgNgKgHQgJgIgOgIIgHgDIgJgGIgKgFIgGgDQgVgLgMgLQgLgMAAgVQAAgcAUgPQAUgPAiAAQANAAALACIAYAEIAEABIAAAdIgXgHQgOgDgOAAQgTAAgMAIQgNAJAAAMQABAJAHAGQAIAHAPAHIAJAGIAJAFIAJAFIAEACIASAKQAHAEAHAHQAHAGAEAKQAEAJAAAOQAAAggWAQQgVARglAAQgTAAgPgCg");
	this.shape_39.setTransform(300.35,169.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00A97A").s().p("AgoBqQgRgJgLgPQgLgPgEgWQgGgUAAgZQAAgYAGgUQAEgVALgQQALgPARgIQARgJAXAAQAXAAARAJQASAIALAPQALAQAFAVQAFAUAAAYQAAAZgFAVQgFAVgLAPQgLAQgRAIQgSAIgXAAQgXAAgRgIgAgnhAQgOAXAAApQAAAqAOAYQANAWAaAAQAaAAAOgWQAOgYAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_40.setTransform(280.525,169.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00A97A").s().p("AhRChIAAk8IAfAAIAAAlIABAAQAEgPAPgOQAPgNAWAAQAnAAASAdQASAeAAA2QAAAWgEAVQgFAUgIAQQgJARgPAJQgOAKgUAAQgMAAgKgEQgLgEgGgGQgHgGgEgHIgGgOIgBAAIAACGgAgVh+QgKAIgHANQgGANgDAPQgDAQAAAOQAAAmANAZQAOAaAXAAQANAAAJgIQAJgJAGgNQAFgNACgRQACgRAAgSIgCgbQgBgNgFgMQgEgNgKgIQgJgIgOAAQgNAAgJAIg");
	this.shape_41.setTransform(259.2,174.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00A97A").s().p("AgrBwIgagHIAAgcIABABIAaAHQAOADAPAAQAXABAPgKQAOgIAAgSQABgNgKgHQgJgIgOgIIgHgDIgJgGIgKgFIgGgDQgVgLgMgLQgLgMABgVQgBgcAUgPQAUgPAiAAQANAAAMACIAXAEIAEABIAAAdIgXgHQgOgDgOAAQgTAAgMAIQgNAJAAAMQABAJAHAGQAIAHAPAHIAJAGIAJAFIAKAFIADACIASAKQAHAEAIAHQAGAGAEAKQADAJAAAOQABAggWAQQgVARgmAAQgSAAgPgCg");
	this.shape_42.setTransform(239.05,169.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_43.setTransform(224.725,164.975);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00A97A").s().p("AgzBwIAAjaIAeAAIAAAqIABAAQAEgHAEgIQAFgHAHgIQAJgHANgFQANgFARAAIAAAiQgjAAgTAbQgSAbgBAtIAABag");
	this.shape_44.setTransform(213.65,169.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00A97A").s().p("Ag9BiQgQgQgBgdQABgRAJgOQALgNAQgIQAQgIASgDQARgEAQABQAOAAAHgCIAAgZIgBgRQgDgRgMgGQgKgHgPAAQgXAAgJAKQgJAIgCARIgjAAQAAgMADgKQAFgLAJgJQAJgJAPgFQAPgGAVABQAYAAAPAGQAPAHAHAKQAIALACAMQADALAAANIAACYIgfAAIAAgdIgBAAQgGAMgRAMQgRALgagBQgbAAgPgQgAAHAMQgLADgMAFQgLAFgIAJQgHAJAAAOQAAAPAJAIQAJAIANAAQAOAAAPgJQAPgKAGgPIABgCIAGgSQACgGgBgSIgSAAQgKAAgMACg");
	this.shape_45.setTransform(181.3,169.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00A97A").s().p("AhKCfIAAk9IAkAAIAAEfIBxAAIAAAeg");
	this.shape_46.setTransform(164.175,164.975);

	this.bottone1 = new lib.Simboloavanti();
	this.bottone1.name = "bottone1";
	this.bottone1.setTransform(358.4,322.6,1,1,0,0,0,82,21.4);
	new cjs.ButtonHelper(this.bottone1, 0, 1, 1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00A97A").s().p("ABKCOQgOgIgIgPQgHgOgEgSQgDgTAAgUQAAgVADgSQAEgRAHgPQAIgOAOgJQANgIAUAAQATAAAOAIQANAJAIAOQAHAPAEARQADASAAAVQAAAUgDATQgEASgHAOQgIAPgNAIQgOAJgTAAQgUAAgNgJgABWgZQgIAGgFALQgEALgCAOQgBAOAAARQAAARABAOQACAOAEALQAFAMAIAGQAIAHANAAQAMAAAIgHQAIgGAFgMQAEgLACgOQABgOAAgRQAAgRgBgOQgCgOgEgLQgFgLgIgGQgIgHgMAAQgNAAgIAHgAg8CSIBfkjIAaAAIhfEjgAiKAuQgOgJgIgOQgHgOgEgSQgDgSAAgVQAAgUADgSQAEgSAHgPQAIgOANgIQAOgJATAAQAUAAANAIQAOAJAHAOQAIAPADASQADASAAAUQAAAVgDASQgDASgIAOQgHAOgOAJQgNAJgUAAQgTAAgNgJgAh+h5QgIAGgFALQgEAMgCANQgBAPAAAQQAAASABAOQACAOAEAKQAFALAIAHQAIAHAMAAQANAAAIgHQAIgHAEgLQAFgKABgOQACgOAAgSQAAgQgCgPQgBgNgFgMQgEgLgIgGQgIgHgNAAQgMAAgIAHg");
	this.shape_47.setTransform(399.725,236.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00A97A").s().p("AgnCRQgSgGgKgKQgKgKgFgLQgFgLgBgMIAoAAQABAIADAGQACAGAFAGQAFAGAJAEQAKAEANAAQAbAAANgOQANgOAAgdQAAgUgGgNQgGgMgKgGQgJgGgLgCQgLgCgMAAIAAgZQAgAAAOgNQAOgOAAgbQAAgagMgNQgMgNgVAAQgNAAgJAEQgKAEgFAGQgGAGgCAGQgCAGAAAHIgnAAQAAgLAFgLQAFgMAKgJQAKgKARgGQAQgGAVAAQAlAAAXAUQAXAVAAAlQAAAPgFAMQgFAMgHAIQgIAIgIAFQgIAFgHABIAAAAQALADAJAEQAJAFAHAIQAIAJAEAOQAFAOAAAUQAAAngYAUQgXAVgpAAQgXAAgRgGg");
	this.shape_48.setTransform(368.725,236.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00A97A").s().p("AhFAQIAAgfICLAAIAAAfg");
	this.shape_49.setTransform(336.725,239.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00A97A").s().p("Ag7DOIBWmbIAhAAIhWGbg");
	this.shape_50.setTransform(320.6,236.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00A97A").s().p("AgPBsIAAhiIhaAAIAAgbIBaAAIAAhaIAfAAIAABaIBaAAIAAAbIhaAAIAABig");
	this.shape_51.setTransform(300.55,240.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00A97A").s().p("AgWBuIAAgvIAtAAIAAAvgAgWg/IAAguIAtAAIAAAug");
	this.shape_52.setTransform(543.725,184.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00A97A").s().p("Ag1CDQgbgfAAg8QAAgyAVgcQAWgcApAAQAmAAAUAXQATAXAAAkIAAALIh9AAIAAANQAAAOADAQQAFAQAIAPQAJAPAPAKQAOAKAXAAIAVgBIARgEIAFgBIAAAZQgVAHgdAAQgzAAgcgfgAAtAAQAAgFgCgHQgDgHgEgGQgFgHgJgEQgIgEgLAAQgKAAgJAEQgJAEgEAHQgGAGgDAHIgEAMIBXAAIAAAAgAgPhjIgeg+IAoAAIASA+g");
	this.shape_53.setTransform(526,179.675);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00A97A").s().p("Ag9BiQgRgQABgdQgBgSALgNQAKgNAQgIQAQgIASgDQARgEAQABQAOgBAIgBIgBgZIgBgRQgDgRgMgGQgLgHgOAAQgXAAgJAKQgKAIgCARIgjAAQAAgMAFgLQADgKAKgJQAJgJAPgFQAQgGAUABQAYAAAPAGQAPAHAIAKQAHALACAMQACALAAANIAACZIgeAAIAAgeIAAAAQgHAMgRAMQgSALgZgBQgbABgPgRgAAHAMQgLACgLAGQgMAGgHAIQgIAJABAOQAAAOAIAJQAJAIANAAQAPAAAOgJQAPgKAGgPIABgCIAGgSQABgGABgSIgTAAQgKAAgMACg");
	this.shape_54.setTransform(492.3,184.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAfgTIAABGIA6AAIAAAbIg6AAIAACFIAAANQABAGAFAGQADAFAIAEQAHADAMAAIAJgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_55.setTransform(475.1,181.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAfgTIAABGIA6AAIAAAbIg6AAIAACFIABANQAAAGAFAGQADAFAIAEQAHADAMAAIAJgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_56.setTransform(459.8,181.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A97A").s().p("Ag1BUQgbggAAg6QAAgzAWgcQAUgcArAAQAlAAATAWQAUAYAAAlIAAAKIh9AAIAAAOQAAANAEAQQADAQAJAPQAJAPAPAJQAOALAWgBIAVgBIARgDIAGgBIAAAZQgVAGgeAAQgxAAgdgegAAtguQAAgGgCgHQgDgHgFgHQgEgGgIgEQgJgEgLAAQgKAAgIAEQgKAEgEAGQgGAHgDAHIgEANIBXAAIAAAAg");
	this.shape_57.setTransform(441.8,184.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00A97A").s().p("Ag0BwIAAjaIAgAAIAAAqIAAAAQAEgIAFgHQAFgHAGgIQAJgHANgFQANgFARAAIAAAiQgkAAgSAbQgSAbAAAtIAABag");
	this.shape_58.setTransform(425.95,184.15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00A97A").s().p("Ag0BwIAAjaIAgAAIAAAqIABAAQACgIAGgHQAFgHAGgIQAJgHANgFQANgFARAAIAAAiQgkAAgRAbQgUAbABAtIAABag");
	this.shape_59.setTransform(411.45,184.15);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00A97A").s().p("AgoBqQgRgJgLgPQgLgPgEgWQgGgUAAgZQAAgXAGgVQAEgUALgRQALgPARgIQARgJAXAAQAXAAARAJQASAIALAPQALARAFAUQAFAVAAAXQAAAZgFAVQgFAVgLAQQgLAPgRAIQgSAIgXAAQgXAAgRgIgAgnhAQgOAXAAApQAAAqAOAYQANAWAaAAQAaAAAOgWQAOgYAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_60.setTransform(391.425,184.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00A97A").s().p("AgzBUQgegeAAg6QAAgzAWgdQAWgdAsAAQAVAAAPAFQAOAHAJAKQAJAKADANQAEAMAAAPIglAAQAAgVgJgNQgKgMgUAAQgNAAgLAHQgKAGgGAMQgGALgDANQgCAOAAANQAAARADARQAEARAKAPQAKAPARAJQAQAJAaAAIASgBQAJgBAIgCIAAAYQgLAEgKACIgYAAQg1AAgdgeg");
	this.shape_61.setTransform(371.075,184.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A97A").s().p("Ag9BiQgQgQgBgdQAAgSAKgNQALgNAQgIQAQgIASgDQARgEAQABQAOgBAHgBIAAgZIgBgRQgDgRgMgGQgKgHgPAAQgXAAgJAKQgJAIgCARIgjAAQAAgMADgLQAEgKAKgJQAJgJAPgFQAPgGAVABQAYAAAPAGQAPAHAHAKQAIALACAMQACALABANIAACZIgfAAIAAgeIgBAAQgFAMgSAMQgRALgagBQgbABgPgRgAAHAMQgLACgMAGQgLAGgHAIQgIAJAAAOQAAAOAJAJQAJAIANAAQAOAAAPgJQAOgKAHgPIABgCIAGgSQACgGgBgSIgSAAQgKAAgMACg");
	this.shape_62.setTransform(337.35,184.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00A97A").s().p("AgrBwIgbgHIAAgcIACAAIAaAIQAOAEAPgBQAXABAPgKQAPgIAAgSQgBgMgIgJQgJgHgPgIIgHgDIgJgGIgKgFIgHgDQgUgLgLgLQgLgMAAgWQAAgbATgPQAUgPAjAAQANAAALACIAXAEIAEABIAAAdIgXgHQgOgDgOAAQgSAAgNAIQgNAJAAAMQAAAJAJAHQAHAGAOAHIAJAGIAKAFIAKAFIADACIATAKQAHAEAHAHQAGAGAEAKQADAJAAAOQAAAfgUARQgWARgmAAQgRAAgQgCg");
	this.shape_63.setTransform(304,184.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00A97A").s().p("AgoBqQgRgJgLgPQgLgPgEgWQgGgUAAgZQAAgXAGgVQAEgUALgRQALgPARgIQARgJAXAAQAXAAARAJQASAIALAPQALARAFAUQAFAVAAAXQAAAZgFAVQgFAVgLAQQgLAPgRAIQgSAIgXAAQgXAAgRgIgAgnhAQgOAXAAApQAAAqAOAYQANAWAaAAQAaAAAOgWQAOgYAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_64.setTransform(284.175,184.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00A97A").s().p("AhRChIAAk8IAfAAIAAAlIABAAQAEgPAPgOQAPgNAWAAQAmAAATAdQASAeAAA2QAAAWgEAVQgEAUgKAQQgIARgPAJQgOAKgTAAQgNAAgKgEQgLgEgGgGQgHgGgEgHIgGgOIgBAAIAACGgAgVh+QgKAIgGANQgHANgDAPQgDAQAAAOQAAAmAOAZQANAaAXAAQANAAAKgIQAIgJAFgNQAGgNACgRQACgRAAgSIgCgbQgBgNgFgMQgFgNgIgIQgKgIgPAAQgLAAgKAIg");
	this.shape_65.setTransform(262.85,189.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00A97A").s().p("AgrBwIgbgHIAAgcIACAAIAaAIQAOAEAPgBQAXABAPgKQAPgIAAgSQgBgMgIgJQgJgHgPgIIgHgDIgJgGIgKgFIgHgDQgUgLgLgLQgMgMAAgWQABgbATgPQAUgPAjAAQANAAAKACIAYAEIAEABIAAAdIgXgHQgOgDgOAAQgSAAgNAIQgMAJAAAMQgBAJAJAHQAHAGAOAHIAJAGIAKAFIAJAFIAEACIATAKQAGAEAHAHQAHAGAEAKQADAJABAOQgBAfgUARQgWARgmAAQgRAAgQgCg");
	this.shape_66.setTransform(242.7,184.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00A97A").s().p("Ag0BwIAAjaIAgAAIAAAqIABAAQACgIAGgHQAEgHAHgIQAJgHANgFQANgFASAAIAAAiQglAAgRAbQgUAbABAtIAABag");
	this.shape_67.setTransform(217.3,184.15);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00A97A").s().p("Ag9BiQgRgQABgdQgBgSALgNQAKgNAQgIQAQgIASgDQARgEAQABQAOgBAIgBIgBgZIgBgRQgDgRgMgGQgLgHgOAAQgXAAgJAKQgKAIgCARIgjAAQAAgMAFgLQADgKAKgJQAJgJAPgFQAQgGAUABQAYAAAPAGQAPAHAIAKQAHALACAMQACALAAANIAACZIgeAAIAAgeIAAAAQgHAMgRAMQgSALgZgBQgbABgPgRgAAHAMQgLACgLAGQgMAGgHAIQgIAJABAOQAAAOAIAJQAJAIANAAQAPAAAOgJQAPgKAGgPIABgCIAGgSQABgGABgSIgTAAQgKAAgMACg");
	this.shape_68.setTransform(184.95,184.4);

	this.avanti2_1 = new lib.Simbolo10();
	this.avanti2_1.name = "avanti2_1";
	this.avanti2_1.setTransform(342.95,357.25,0.7973,0.7962,0,0,0,96.5,34.6);
	new cjs.ButtonHelper(this.avanti2_1, 0, 1, 1);

	this.bottone2 = new lib.Simboloavanti();
	this.bottone2.name = "bottone2";
	this.bottone2.setTransform(342.85,358.45,0.9774,0.9779,0,0,0,112.5,29.4);
	new cjs.ButtonHelper(this.bottone2, 0, 1, 1);

	this.text = new cjs.Text("La risposta corretta è: Tutte le risposte sono corrette", "46px 'RotisSansSerif'", "#00A97A");
	this.text.lineHeight = 56;
	this.text.lineWidth = 456;
	this.text.parent = this;
	this.text.setTransform(154.85,135.05);

	this.button9 = new lib.Simbolo9();
	this.button9.name = "button9";
	this.button9.setTransform(371.85,374.85,0.8418,0.8419,0,0,0,97.5,35.5);
	new cjs.ButtonHelper(this.button9, 0, 1, 1);

	this.button_9 = new lib.Simboloavanti();
	this.button_9.name = "button_9";
	this.button_9.setTransform(353.3,364.8,0.9769,0.9774,0,0,0,94.3,25.6);
	new cjs.ButtonHelper(this.button_9, 0, 1, 1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAfgTIAABGIA6AAIAAAbIg6AAIAACFIAAANQABAGAFAGQADAFAIAEQAHADALAAIAKgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_69.setTransform(587.25,286.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00A97A").s().p("Ag+BjQgPgRgBgcQABgTAJgNQALgNAQgIQAQgHASgEQARgDAQgBQAOAAAHgBIAAgZIgBgRQgDgRgMgGQgKgHgPAAQgXAAgJAKQgJAJgCAQIgjAAQAAgMADgLQAFgKAJgJQAJgJAPgFQAPgFAVAAQAYgBAPAIQAPAGAHALQAIAKACALQADAMAAANIAACZIgfAAIAAgdIgBAAQgGALgRALQgRALgaAAQgbAAgQgPgAAHAMQgLADgMAFQgLAGgIAIQgHAJAAAOQAAAOAJAJQAJAJANgBQAOABAPgKQAOgKAHgPIABgCIAGgSQACgHgBgRIgSAAQgKAAgMACg");
	this.shape_70.setTransform(567.85,289.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A97A").s().p("AAvBwIAAh4IgBgeQAAgMgDgJQgDgKgHgFQgHgFgLAAQgPAAgKAJQgMAKgIAQQgIAPgEATQgEARAAAPIAABaIgfAAIAAjaIAfAAIAAAzIABAAQADgKAEgJQAEgIAIgIQAHgKANgFQALgGARAAQAbAAAPAUQAOATAAAdIAACbg");
	this.shape_71.setTransform(546.575,289.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00A97A").s().p("AgpCeIgXgFIgFAAIAAggIABAAQAKAFANAEQANAEASAAQATAAAOgGQANgFAHgKQAHgKACgNQADgMAAgRIAAgnIgBAAQgCAHgEAHQgFAHgGAGQgHAHgKAEQgLAEgMAAQgVAAgOgJQgPgIgIgQQgJgPgDgSQgEgTAAgWQAAgXAEgUQAEgVAJgQQAKgRAOgJQAOgKAUAAQAMAAAKAEQAKAEAHAHQAHAGAEAHQAFAHABAGIABAAIAAgkIAfAAIAADaQAAAvgXAZQgXAYguAAQgSAAgNgCgAgUh9QgJAHgGAMQgFANgDAQQgCAQAAATQAAAOACAOQACAOAFALQAFAMAIAHQAJAIAOAAQAMAAAKgIQAKgIAHgNQAGgMADgQQADgPAAgOQAAgOgDgOQgDgPgGgNQgHgNgJgIQgKgHgNAAQgMAAgIAHg");
	this.shape_72.setTransform(523.175,294.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00A97A").s().p("Ag9BjQgRgRABgcQgBgTAKgNQALgNAQgIQAQgHASgEQARgDAQgBQAOAAAIgBIgBgZIgBgRQgDgRgMgGQgLgHgOAAQgXAAgJAKQgKAJgCAQIgjAAQABgMAEgLQADgKAKgJQAJgJAPgFQAPgFAVAAQAYgBAPAIQAPAGAHALQAIAKACALQACAMAAANIAACZIgeAAIAAgdIAAAAQgHALgRALQgSALgZAAQgbAAgPgPgAAHAMQgLADgLAFQgMAGgHAIQgIAJABAOQAAAOAIAJQAJAJANgBQAPABAOgKQAPgKAGgPIABgCIAGgSQABgHABgRIgTAAQgKAAgMACg");
	this.shape_73.setTransform(501.4,289.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00A97A").s().p("AguCXQgRgKgIgPQgIgPgDgPQgCgPAAgPIAAjiIAfAAIAACHIABAAQAFgQAPgNQAPgNAYAAQAVAAAPAKQAQAKAJARQAJAQAEAUQAEAVAAAWQAAAZgFAUQgFAUgLAPQgKAPgRAJQgRAIgWAAQgcAAgQgKgAgXggQgKAJgHAOQgGANgEARQgDASAAARIACAZQABAMAGANQAEANALAIQAKAIAQAAQANAAAKgHQAKgHAHgNQAGgMADgPQADgQAAgRQAAgRgDgPQgCgQgGgMQgGgNgJgIQgKgHgMAAQgNAAgLAIg");
	this.shape_74.setTransform(481.025,285.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQABAGAFAGQAEAFAGAEQAIADALAAIAKgBIAJgCIADgBIAAAcQgQACgMAAQghAAgNgNg");
	this.shape_75.setTransform(439.05,286.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00A97A").s().p("AAvBwIAAh4IgBgeQAAgMgDgJQgDgKgHgFQgHgFgLAAQgPAAgKAJQgMAKgIAQQgIAPgEATQgEARAAAPIAABaIgfAAIAAjaIAfAAIAAAzIABAAQADgKAEgJQAEgIAIgIQAHgKANgFQALgGARAAQAbAAAPAUQAOATAAAdIAACbg");
	this.shape_76.setTransform(419.675,289.65);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00A97A").s().p("Ag9BjQgQgRgBgcQAAgTAKgNQALgNAQgIQAQgHASgEQARgDAQgBQAOAAAHgBIAAgZIgBgRQgDgRgMgGQgLgHgOAAQgXAAgJAKQgJAJgDAQIgiAAQAAgMADgLQAEgKAKgJQAJgJAPgFQAPgFAVAAQAYgBAPAIQAPAGAHALQAIAKACALQACAMAAANIAACZIgeAAIAAgdIgBAAQgFALgSALQgRALgaAAQgbAAgPgPgAAHAMQgLADgLAFQgMAGgHAIQgIAJAAAOQABAOAIAJQAJAJANgBQAOABAPgKQAOgKAHgPIABgCIAGgSQABgHAAgRIgSAAQgKAAgMACg");
	this.shape_77.setTransform(396.65,289.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00A97A").s().p("Ag/BdQgOgUAAgdIAAibIAfAAIAAB4IABAeQAAALADAKQADAKAHAGQAHAFALAAQAOAAAMgKQAMgKAHgQQAIgPAEgSQAEgSAAgOIAAhbIAfAAIAADaIgfAAIAAgyIgBAAIgHASQgEAIgIAJQgHAIgNAGQgLAGgRAAQgbAAgPgTg");
	this.shape_78.setTransform(375.175,290.15);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00A97A").s().p("AgpCeIgXgFIgFAAIAAggIABAAIAXAJQANAEASAAQATAAAOgGQANgFAHgKQAHgKACgNQADgMAAgRIAAgnIgBAAQgCAHgEAHQgFAHgGAGQgHAHgKAEQgLAEgMAAQgVAAgOgJQgPgIgIgQQgJgPgDgSQgEgTAAgWQAAgXAEgUQAEgVAJgQQAKgRAOgJQAOgKAUAAQAMAAAKAEQAKAEAHAHQAHAGAEAHQAFAHABAGIABAAIAAgkIAfAAIAADaQAAAvgXAZQgXAYguAAQgSAAgNgCgAgUh9QgJAHgGAMQgFANgDAQQgCAQAAATQAAAOACAOQACAOAFALQAFAMAIAHQAJAIAOAAQAMAAAKgIQAKgIAHgNQAGgMADgQQADgPAAgOQAAgOgDgOQgDgPgGgNQgHgNgJgIQgKgHgNAAQgMAAgIAHg");
	this.shape_79.setTransform(351.975,294.425);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00A97A").s().p("AAvBwIAAh4IgBgeQAAgMgDgJQgDgKgHgFQgHgFgLAAQgPAAgKAJQgMAKgIAQQgIAPgEATQgEARAAAPIAABaIgfAAIAAjaIAfAAIAAAzIABAAQADgKAEgJQAEgIAIgIQAHgKANgFQALgGARAAQAbAAAPAUQAOATAAAdIAACbg");
	this.shape_80.setTransform(318.325,289.65);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00A97A").s().p("AgzBUQgegfAAg5QAAg0AWgdQAWgcAsAAQAVgBAPAHQAOAFAJALQAJAKADANQAEAMAAAPIglAAQAAgVgJgNQgKgMgUAAQgNAAgLAHQgKAHgGALQgGALgDANQgCANAAAOQAAARADARQAEARAKAPQAKAPARAJQAQAKAagBIASgBQAJAAAIgDIAAAZQgLADgKABIgYABQg1ABgdgfg");
	this.shape_81.setTransform(275.375,289.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00A97A").s().p("Ag1BUQgbgfAAg7QAAgzAVgcQAVgdArABQAlAAAUAWQATAXAAAmIAAAKIh9AAIAAAOQAAANADAPQAFAQAIAQQAJAPAPAJQAOAKAXAAIAUgBIASgDIAFgBIAAAZQgVAHgdgBQgzAAgcgegAAtguQAAgGgCgHQgDgHgFgHQgEgGgIgEQgJgEgLAAQgKAAgJAEQgIAEgFAGQgGAHgDAHIgEANIBXAAIAAAAg");
	this.shape_82.setTransform(243.05,289.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00A97A").s().p("AAvCfIAAh6IgBgdQAAgLgDgJQgDgKgHgFQgHgGgLAAQgPAAgKAKQgMAKgIAPQgIAPgEASQgEASAAAQIAABaIgfAAIAAk9IAfAAIAACWIABAAQADgLAEgIQAEgIAIgJQAHgJANgFQALgGARAAQAbAAAPATQAOATAAAcIAACdg");
	this.shape_83.setTransform(221.275,284.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00A97A").s().p("AgzBUQgegfAAg5QAAg0AWgdQAWgcAsAAQAVgBAPAHQAOAFAJALQAJAKADANQAEAMAAAPIglAAQAAgVgJgNQgKgMgUAAQgNAAgLAHQgKAHgGALQgGALgDANQgCANAAAOQAAARADARQAEARAKAPQAKAPARAJQAQAKAagBIASgBQAJAAAIgDIAAAZQgLADgKABIgYABQg1ABgdgfg");
	this.shape_84.setTransform(200.475,289.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00A97A").s().p("AAvBwIAAh4IgBgeQAAgMgDgJQgDgKgHgFQgHgFgLAAQgPAAgKAJQgMAKgIAQQgIAPgEATQgEARAAAPIAABaIgfAAIAAjaIAfAAIAAAzIABAAQADgKAEgJQAEgIAIgIQAHgKANgFQALgGARAAQAbAAAPAUQAOATAAAdIAACbg");
	this.shape_85.setTransform(178.675,289.65);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00A97A").s().p("Ag+BjQgPgRgBgcQABgTAJgNQALgNAQgIQAQgHASgEQARgDAQgBQAOAAAHgBIAAgZIgBgRQgDgRgMgGQgKgHgPAAQgXAAgJAKQgJAJgCAQIgjAAQAAgMADgLQAFgKAJgJQAJgJAPgFQAPgFAVAAQAYgBAPAIQAPAGAHALQAIAKACALQADAMAAANIAACZIgfAAIAAgdIgBAAQgGALgRALQgRALgaAAQgbAAgQgPgAAHAMQgLADgMAFQgLAGgIAIQgHAJAAAOQAAAOAJAJQAJAJANgBQAOABAPgKQAPgKAGgPIABgCIAGgSQACgHgBgRIgSAAQgKAAgMACg");
	this.shape_86.setTransform(155.65,289.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00A97A").s().p("Ag9BiQgQgQgBgdQAAgRAKgOQALgNAQgIQAQgIASgDQARgEAQABQAOAAAHgCIAAgZIgBgRQgDgRgMgGQgLgHgOAAQgXAAgJAKQgJAIgCARIgjAAQAAgMADgKQAEgLAKgJQAJgJAPgFQAPgGAVABQAYAAAPAGQAPAHAHAKQAIALACAMQACALABANIAACYIgfAAIAAgdIgBAAQgFAMgSAMQgRALgagBQgbAAgPgQgAAHAMQgLADgMAFQgLAFgHAJQgIAJAAAOQAAAPAJAIQAJAIANAAQAOAAAPgJQAOgKAHgPIABgCIAGgSQACgGgBgSIgSAAQgKAAgMACg");
	this.shape_87.setTransform(615.45,234.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00A97A").s().p("AAvBwIAAh5IgBgdQAAgLgDgKQgDgJgHgGQgHgGgLABQgPgBgKAKQgMAKgIAQQgIAQgEARQgEASAAAPIAABaIgfAAIAAjaIAfAAIAAAyIABAAQADgKAEgIQAEgIAIgJQAHgIANgGQALgGARAAQAbAAAPATQAOATAAAeIAACbg");
	this.shape_88.setTransform(594.175,234);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_89.setTransform(554.925,229.325);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00A97A").s().p("AhOBtIAAgZIByimIhpAAIAAgbICPAAIAAAbIhwClIB1AAIAAAag");
	this.shape_90.setTransform(539.95,234.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00A97A").s().p("AAvBwIAAh5IgBgdQAAgLgDgKQgDgJgHgGQgHgGgLABQgPgBgKAKQgMAKgIAQQgIAQgEARQgEASAAAPIAABaIgfAAIAAjaIAfAAIAAAyIABAAQADgKAEgIQAEgIAIgJQAHgIANgGQALgGARAAQAbAAAPATQAOATAAAeIAACbg");
	this.shape_91.setTransform(519.225,234);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00A97A").s().p("Ag/BdQgOgUAAgdIAAibIAfAAIAAB4IABAeQAAAMADAKQADAJAHAFQAHAGALAAQAOAAAMgKQAMgKAHgQQAIgQAEgSQAEgQAAgPIAAhbIAfAAIAADaIgfAAIAAgzIgBAAIgHASQgEAJgIAIQgHAJgNAHQgLAFgRAAQgbAAgPgTg");
	this.shape_92.setTransform(496.025,234.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00A97A").s().p("AgjCfIAAi/IglAAIAAgbIAlAAIAAgeQAAgOADgNQAEgMAJgKQAIgJANgGQAOgFAUAAQASAAATAEIAAAcQgSgGgOAAQgaAAgKANQgJAMAAAYIAAAYIA+AAIAAAbIg+AAIAAC/g");
	this.shape_93.setTransform(478.775,229.275);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00A97A").s().p("Ag0BUQgcggAAg7QAAgyAWgcQAUgcAqAAQAmgBATAXQAUAYAAAlIAAAKIh9AAIAAANQAAANAEARQADAQAJAPQAJAPAPAJQAPALAVgBIAVAAIARgEIAGgCIAAAaQgVAGgeAAQgxAAgcgegAAtguQAAgGgCgHQgCgHgGgHQgEgGgJgEQgIgEgLAAQgKAAgIAEQgKAEgFAGQgFAHgDAHIgEANIBXAAIAAAAg");
	this.shape_94.setTransform(448.2,234.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A97A").s().p("AgKBtIhUjaIAiAAIA/CsIABAAIA5isIAhAAIhKDag");
	this.shape_95.setTransform(394.05,234.25);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_96.setTransform(378.675,229.325);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00A97A").s().p("AgrBwIgbgGIAAgdIACABIAaAHQAPADAOAAQAYABAOgKQAOgIAAgSQAAgNgJgHQgIgIgPgIIgHgDIgJgGIgKgFIgHgDQgUgLgMgLQgKgMgBgWQAAgbAUgPQATgPAkAAQAMAAALACIAYAEIAEABIAAAdIgXgHQgOgDgOAAQgTAAgMAIQgMAJAAAMQAAAJAIAGQAHAHAOAHIAJAGIAKAFIAJAFIAEACIATAKQAHAEAGAHQAHAGAEAKQADAJABAOQAAAggWAQQgVARglAAQgTAAgPgCg");
	this.shape_97.setTransform(349.6,234.25);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_98.setTransform(335.275,229.325);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A97A").s().p("AgrBwIgagGIAAgdIABABIAaAHQAOADAPAAQAXABAPgKQAOgIAAgSQABgNgKgHQgJgIgOgIIgHgDIgJgGIgKgFIgGgDQgVgLgMgLQgLgMAAgWQAAgbAUgPQAUgPAiAAQANAAALACIAYAEIAEABIAAAdIgXgHQgOgDgOAAQgTAAgMAIQgNAJAAAMQABAJAHAGQAIAHAPAHIAJAGIAJAFIAJAFIAEACIASAKQAHAEAHAHQAHAGAEAKQAEAJAAAOQAAAggWAQQgVARglAAQgTAAgPgCg");
	this.shape_99.setTransform(321.5,234.25);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00A97A").s().p("Ag1BUQgbggAAg7QAAgyAWgcQAVgcAqAAQAlgBATAXQAUAYAAAlIAAAKIh9AAIAAANQAAANAEARQADAQAJAPQAJAPAPAJQAOALAXgBIAUAAIARgEIAGgCIAAAaQgVAGgeAAQgyAAgcgegAAtguQAAgGgCgHQgDgHgFgHQgEgGgIgEQgJgEgLAAQgKAAgJAEQgIAEgFAGQgGAHgDAHIgEANIBXAAIAAAAg");
	this.shape_100.setTransform(302.65,234.25);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00A97A").s().p("Ag0BwIAAjaIAgAAIAAAqIABAAQACgHAGgIQAFgHAGgHQAJgIANgFQANgFARAAIAAAiQgkAAgRAbQgUAbABAtIAABag");
	this.shape_101.setTransform(286.8,234);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00A97A").s().p("AgoBqQgRgJgLgPQgLgPgEgWQgGgUAAgZQAAgYAGgUQAEgVALgQQALgPARgIQARgJAXAAQAXAAARAJQASAIALAPQALAQAFAVQAFAUAAAYQAAAZgFAVQgFAVgLAPQgLAQgRAIQgSAIgXAAQgXAAgRgIgAgnhAQgOAXAAApQAAAqAOAYQANAWAaAAQAaAAAOgWQAOgYAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_102.setTransform(254.875,234.25);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00A97A").s().p("AhRChIAAk8IAfAAIAAAlIABAAQAEgPAPgOQAPgNAWAAQAnAAASAdQASAeAAA2QAAAWgEAVQgFAUgIAQQgJARgPAJQgOAKgUAAQgMAAgKgEQgLgEgGgGQgHgGgEgHIgGgOIgBAAIAACGgAgVh+QgKAIgHANQgGANgDAPQgDAQAAAOQAAAmANAZQAOAaAXAAQANAAAKgIQAJgJAFgNQAFgNACgRQACgRAAgSIgCgbQgBgNgFgMQgEgNgKgIQgJgIgOAAQgNAAgJAIg");
	this.shape_103.setTransform(233.55,238.925);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_104.setTransform(216.075,229.325);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_105.setTransform(177.775,229.325);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00A97A").s().p("AhkCfIAAk9IBIAAQBEAAAeAoQAfAnAABPQAAAygLAgQgLAggUARQgTAQgZAGQgXAGggAAgAhACBIAZAAQAZAAARgFQASgFANgOQAOgNAHgaQAHgaAAgoQAAgpgIgaQgIgagNgNQgOgNgTgEQgRgFgbAAIgUAAg");
	this.shape_106.setTransform(159.825,229.325);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00A97A").s().p("AgWBtIAAguIAtAAIAAAugAgWg+IAAguIAtAAIAAAug");
	this.shape_107.setTransform(533.125,178.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00A97A").s().p("Ag1CDQgbgfAAg8QAAgyAWgcQAUgcArAAQAlAAATAXQAUAXAAAkIAAALIh9AAIAAANQAAAOAEAQQAEAQAIAPQAJAPAPAKQAOAKAXAAIAUgBIASgEIAFgBIAAAZQgVAHgdAAQgzAAgcgfgAAtAAQAAgFgCgHQgDgHgFgGQgEgHgIgEQgJgEgLAAQgKAAgJAEQgIAEgFAHQgGAGgDAHIgEAMIBXAAIAAAAgAgPhjIgeg+IAoAAIATA+g");
	this.shape_108.setTransform(515.4,173.875);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00A97A").s().p("Ag9BjQgQgQAAgdQgBgSAKgOQALgNAQgIQAQgIASgDQARgEAQAAQAOAAAHgBIAAgaIgBgQQgDgQgMgHQgLgHgOAAQgXAAgJAJQgJAJgDARIgiAAQAAgMADgKQAEgLAKgJQAJgJAPgFQAPgFAVgBQAYAAAPAHQAPAHAHALQAIAKACALQACAMAAANIAACYIgeAAIAAgcIgBAAQgFALgSALQgRAMgaAAQgbAAgPgQgAAHAMQgLACgLAGQgMAFgHAKQgIAIAAANQABAQAIAIQAJAJANAAQAOAAAPgKQAOgJAHgQIABgBIAGgSQABgIAAgRIgSAAQgKAAgMACg");
	this.shape_109.setTransform(481.7,178.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQABAGAFAGQADAFAHAEQAIADALAAIAKgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_110.setTransform(464.5,175.325);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00A97A").s().p("Ag0BTQgcgeAAg8QAAgyAVgcQAWgcApgBQAmAAATAYQAUAWAAAmIAAALIh9AAIAAAMQAAANADAQQAEARAJAPQAJAPAPAKQAPAJAVABIAWgBIAQgEIAGgCIAAAaQgVAHgeAAQgxAAgcgggAAtguQAAgGgCgHQgCgHgFgGQgFgHgJgEQgIgEgLAAQgKAAgIAEQgJAEgGAHQgFAGgDAHIgEANIBXAAIAAAAg");
	this.shape_111.setTransform(431.2,178.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00A97A").s().p("AgzBwIAAjaIAeAAIAAAqIABAAQADgIAFgHQAFgHAIgHQAIgIANgFQANgFARAAIAAAiQgjAAgTAbQgSAbgBAtIAABag");
	this.shape_112.setTransform(415.35,178.35);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00A97A").s().p("AgzBwIAAjaIAeAAIAAAqIABAAQAEgIAFgHQAEgHAHgHQAJgIANgFQANgFARAAIAAAiQgjAAgTAbQgSAbgBAtIAABag");
	this.shape_113.setTransform(400.85,178.35);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00A97A").s().p("AgoBqQgRgIgLgQQgLgQgEgVQgGgUAAgZQAAgXAGgVQAEgUALgQQALgQARgJQARgIAXgBQAXABARAIQASAJALAQQALAQAFAUQAFAVAAAXQAAAZgFAVQgFAVgLAPQgLAQgRAIQgSAJgXAAQgXAAgRgJgAgnhAQgOAXAAApQAAAqAOAXQANAYAaAAQAaAAAOgYQAOgXAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_114.setTransform(380.825,178.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00A97A").s().p("Ag+BjQgQgQAAgdQABgSAJgOQALgNAQgIQAQgIASgDQARgEAQAAQAOAAAHgBIAAgaIgBgQQgDgQgLgHQgMgHgOAAQgXAAgJAJQgKAJgBARIgjAAQAAgMADgKQAFgLAJgJQAJgJAPgFQAQgFAUgBQAYAAAPAHQAPAHAHALQAIAKADALQACAMAAANIAACYIgfAAIAAgcIgBAAQgGALgRALQgSAMgZAAQgbAAgQgQgAAHAMQgLACgMAGQgLAFgIAKQgGAIgBANQAAAQAJAIQAJAJANAAQAOAAAPgKQAOgJAHgQIABgBIAGgSQABgIAAgRIgSAAQgKAAgMACg");
	this.shape_115.setTransform(326.75,178.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00A97A").s().p("AgrBvIgagFIAAgdIABABIAaAHQAOADAPABQAYgBAOgIQAPgJAAgSQAAgNgJgHQgKgIgOgIIgHgEIgJgEIgKgGIgGgDQgVgLgMgMQgLgMABgUQAAgbATgQQATgQAjAAQANAAAMACIAXAFIAEABIAAAdIgXgHQgOgDgOAAQgTAAgMAIQgNAIAAAMQABAKAHAGQAIAHAPAHIAJAFIAJAGIAKAFIADACIASALQAHADAIAHQAGAHAEAJQAEAJgBANQABAhgVARQgWARgmAAQgSAAgPgEg");
	this.shape_116.setTransform(293.4,178.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00A97A").s().p("AgoBqQgRgIgLgQQgLgQgEgVQgGgUAAgZQAAgXAGgVQAEgUALgQQALgQARgJQARgIAXgBQAXABARAIQASAJALAQQALAQAFAUQAFAVAAAXQAAAZgFAVQgFAVgLAPQgLAQgRAIQgSAJgXAAQgXAAgRgJgAgnhAQgOAXAAApQAAAqAOAXQANAYAaAAQAaAAAOgYQAOgXAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_117.setTransform(273.575,178.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00A97A").s().p("AhRChIAAk8IAfAAIAAAlIABAAQAFgPAOgOQAOgNAXAAQAmAAATAdQASAeAAA2QAAAWgEAVQgEAUgKAQQgIARgPAJQgOAKgUAAQgMAAgKgEQgKgEgHgGQgHgGgEgHIgGgOIgBAAIAACGgAgVh+QgKAIgHANQgGANgDAPQgDAQAAAOQAAAmANAZQAOAaAXAAQANAAAKgIQAIgJAFgNQAGgNACgRQACgRAAgSIgCgbQgBgNgFgMQgEgNgKgIQgJgIgPAAQgMAAgJAIg");
	this.shape_118.setTransform(252.25,183.275);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A97A").s().p("AgrBvIgagFIAAgdIABABIAaAHQAOADAPABQAYgBAOgIQAPgJAAgSQgBgNgIgHQgKgIgOgIIgHgEIgJgEIgKgGIgHgDQgUgLgLgMQgLgMAAgUQAAgbATgQQATgQAjAAQAOAAALACIAXAFIAEABIAAAdIgXgHQgOgDgOAAQgTAAgMAIQgNAIAAAMQAAAKAJAGQAHAHAOAHIAKAFIAJAGIAKAFIADACIASALQAIADAHAHQAGAHAEAJQAEAJgBANQAAAhgUARQgWARgmAAQgRAAgQgEg");
	this.shape_119.setTransform(232.1,178.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_120.setTransform(217.775,173.675);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A97A").s().p("Ag0BwIAAjaIAgAAIAAAqIABAAQACgIAGgHQAFgHAGgHQAJgIANgFQANgFARAAIAAAiQgkAAgRAbQgUAbABAtIAABag");
	this.shape_121.setTransform(206.7,178.35);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A97A").s().p("Ag9BjQgQgQAAgdQgBgSAKgOQALgNAQgIQAQgIASgDQARgEAQAAQAOAAAHgBIAAgaIgBgQQgDgQgMgHQgLgHgOAAQgXAAgJAJQgJAJgDARIgiAAQAAgMADgKQAEgLAKgJQAJgJAPgFQAPgFAVgBQAYAAAPAHQAPAHAHALQAIAKACALQACAMAAANIAACYIgeAAIAAgcIgBAAQgFALgSALQgRAMgaAAQgbAAgPgQgAAHAMQgLACgLAGQgMAFgHAKQgIAIAAANQABAQAIAIQAJAJANAAQAOAAAPgKQAOgJAHgQIABgBIAGgSQABgIAAgRIgSAAQgKAAgMACg");
	this.shape_122.setTransform(174.35,178.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.testointro}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_46,p:{x:164.175,y:164.975}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:224.725,y:164.975}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:280.525,y:169.9}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:387.775,y:169.9}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:471.45,y:166.625}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:216.85,y:222.275}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:319.975,y:220.625}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:411.75,y:222.275}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:524.675,y:225.55}},{t:this.shape_7,p:{x:163.125,y:281.2}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.button_2}]},1).to({state:[]},1).to({state:[{t:this.instance},{t:this.shape_46,p:{x:167.825,y:179.475}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_18,p:{x:228.375,y:179.475}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_30,p:{x:320.15,y:181.125}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:475.1,y:181.125}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.bottone1}]},1).to({state:[]},1).to({state:[{t:this.instance},{t:this.text},{t:this.bottone2},{t:this.avanti2_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.shape_46,p:{x:157.225,y:173.675}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_23,p:{x:309.55,y:175.325}},{t:this.shape_115},{t:this.shape_7,p:{x:360.475,y:178.6}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_13,p:{x:449.2,y:175.325}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_30,p:{x:203.15,y:230.975}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_55,p:{x:365.75,y:230.975}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_40,p:{x:414.925,y:234.25}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_35,p:{x:571.575,y:234.25}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_8,p:{x:295.725,y:289.9}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_43,p:{x:451.975,y:284.975}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_18,p:{x:600.175,y:284.975}},{t:this.button_9},{t:this.button9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:526,y:419},0).wait(1).to({x:542,y:433},0).to({_off:true},1).wait(1).to({_off:false,x:530,y:424},0).to({_off:true},1).wait(1).to({_off:false,x:533,y:428},0).wait(1).to({x:523,y:431},0).wait(1).to({x:540,y:424},0).wait(4).to({x:520,y:422},0).wait(1).to({x:540,y:424},0).wait(1));

	// Avant
	this.button_start = new lib.BottoneStart();
	this.button_start.name = "button_start";
	this.button_start.setTransform(330.2,352.5,1,1,0,0,0,132.5,41.5);
	new cjs.ButtonHelper(this.button_start, 0, 1, 1);

	this.q1corretta = new lib.q1vera4();
	this.q1corretta.name = "q1corretta";
	this.q1corretta.setTransform(131,410.1,1,1,0,0,0,29,19.5);
	new cjs.ButtonHelper(this.q1corretta, 0, 1, 1);

	this.q1falsa1 = new lib.q1vera4();
	this.q1falsa1.name = "q1falsa1";
	this.q1falsa1.setTransform(131,348.8,1,1,0,0,0,29,19.5);
	new cjs.ButtonHelper(this.q1falsa1, 0, 1, 1);

	this.q1falsa2 = new lib.q1vera3();
	this.q1falsa2.name = "q1falsa2";
	this.q1falsa2.setTransform(131,277,1,1,0,0,0,29,19.5);
	new cjs.ButtonHelper(this.q1falsa2, 0, 1, 1);

	this.q1falsa3 = new lib.Q1vera2();
	this.q1falsa3.name = "q1falsa3";
	this.q1falsa3.setTransform(131,207.8,1,1,0,0,0,29,19.5);
	new cjs.ButtonHelper(this.q1falsa3, 0, 1, 1);

	this.q1falsa4 = new lib.Q1vera();
	this.q1falsa4.name = "q1falsa4";
	this.q1falsa4.setTransform(131,149.45,1,1,0,0,0,29,19.5);
	new cjs.ButtonHelper(this.q1falsa4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_start}]}).to({state:[{t:this.q1falsa4},{t:this.q1falsa3},{t:this.q1falsa2},{t:this.q1falsa1},{t:this.q1corretta}]},1).to({state:[]},1).to({state:[]},1).wait(11));

	// Risposte
	this.introVideo = new lib.an_Video({'id': 'introVideo', 'src':'videos/06%20Closer%20Logo%201080p%2050fps.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.introVideo.name = "introVideo";
	this.introVideo.setTransform(369.2,233.6,2.245,1.6836,0,0,0,199.7,150.1);

	this.risp5 = new cjs.Text("Tutte le risposte sono corrette", "22px 'RotisSansSerif'", "#00A97A");
	this.risp5.name = "risp5";
	this.risp5.lineHeight = 28;
	this.risp5.lineWidth = 403;
	this.risp5.parent = this;
	this.risp5.setTransform(189.25,397.95);

	this.risp4 = new cjs.Text("Visualizzazione della serigrafia della siringa a display su Space®plus Perfusor", "22px 'RotisSansSerif'", "#00A97A");
	this.risp4.name = "risp4";
	this.risp4.lineHeight = 28;
	this.risp4.lineWidth = 403;
	this.risp4.parent = this;
	this.risp4.setTransform(189.25,331.3);

	this.risp3 = new cjs.Text("L’upload da remoto di archivio farmaci, file di aggiornamento, file di configurazione", "22px 'RotisSansSerif'", "#00A97A");
	this.risp3.name = "risp3";
	this.risp3.lineHeight = 28;
	this.risp3.lineWidth = 405;
	this.risp3.parent = this;
	this.risp3.setTransform(189.25,252.5);

	this.risp2 = new cjs.Text("La centrale di monitoraggio delle infusioni e degli allarmi OneViewplus", "22px 'RotisSansSerif'", "#00A97A");
	this.risp2.name = "risp2";
	this.risp2.lineHeight = 28;
	this.risp2.lineWidth = 399;
	this.risp2.parent = this;
	this.risp2.setTransform(189.25,185.3);

	this.risp1 = new cjs.Text("Il collegamento e la fruizione di servizi attraverso B Braun Health Cloud", "22px 'RotisSansSerif'", "#00A97A");
	this.risp1.name = "risp1";
	this.risp1.lineHeight = 28;
	this.risp1.lineWidth = 375;
	this.risp1.parent = this;
	this.risp1.setTransform(189.25,122.95);

	this.instance_1 = new lib.Logo_Claim_A3_RGB();
	this.instance_1.setTransform(522,421,0.2096,0.2097);

	this.q2vera = new lib.q2vera();
	this.q2vera.name = "q2vera";
	this.q2vera.setTransform(361.7,300.6,1,1,0,0,0,25.2,16.9);
	new cjs.ButtonHelper(this.q2vera, 0, 1, 1);

	this.q2falsa3 = new lib.q2falsa3();
	this.q2falsa3.name = "q2falsa3";
	this.q2falsa3.setTransform(161.7,300.6,1,1,0,0,0,25.2,16.9);
	new cjs.ButtonHelper(this.q2falsa3, 0, 1, 1);

	this.q2falsa2 = new lib.q2falsa2();
	this.q2falsa2.name = "q2falsa2";
	this.q2falsa2.setTransform(361.7,223.85,1,1,0,0,0,25.2,16.9);
	new cjs.ButtonHelper(this.q2falsa2, 0, 1, 1);

	this.q2falsa1 = new lib.q2falsa1();
	this.q2falsa1.name = "q2falsa1";
	this.q2falsa1.setTransform(161.7,226.8,1,1,0,0,0,25.2,16.9);
	new cjs.ButtonHelper(this.q2falsa1, 0, 1, 1);

	this.risp14 = new lib.risp14();
	this.risp14.name = "risp14";
	this.risp14.setTransform(394.8,401.95,1,1,0,0,0,193.7,17.6);

	this.risp13 = new lib.risp13();
	this.risp13.name = "risp13";
	this.risp13.setTransform(389.65,343.65,1,1,0,0,0,189.2,32);

	this.risp12 = new lib.risp12();
	this.risp12.name = "risp12";
	this.risp12.setTransform(389.05,272.5,1,1,0,0,0,188.6,28.7);

	this.risp11 = new lib.risp11();
	this.risp11.name = "risp11";
	this.risp11.setTransform(394.45,212.3,1,1,0,0,0,194,16.1);

	this.risp10 = new lib.risp10();
	this.risp10.name = "risp10";
	this.risp10.setTransform(395.4,167.6,1,1,0,0,0,193,14.8);

	this.q3vera = new lib.q3vera4();
	this.q3vera.name = "q3vera";
	this.q3vera.setTransform(155.4,399.85,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q3vera, 0, 1, 1);

	this.q3falsa4 = new lib.q3vera4();
	this.q3falsa4.name = "q3falsa4";
	this.q3falsa4.setTransform(155.4,330.4,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q3falsa4, 0, 1, 1);

	this.q3falsa3 = new lib.q3vera3();
	this.q3falsa3.name = "q3falsa3";
	this.q3falsa3.setTransform(155.4,268.75,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q3falsa3, 0, 1, 1);

	this.q3falsa2 = new lib.q3vera2();
	this.q3falsa2.name = "q3falsa2";
	this.q3falsa2.setTransform(155.4,212.8,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q3falsa2, 0, 1, 1);

	this.q3falsa1 = new lib.q3vera1();
	this.q3falsa1.name = "q3falsa1";
	this.q3falsa1.setTransform(155.4,166.95,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q3falsa1, 0, 1, 1);

	this.risp18 = new lib.risp18();
	this.risp18.name = "risp18";
	this.risp18.setTransform(395.5,389.3,1,1,0,0,0,196.5,32.7);

	this.risp17 = new lib.risp17();
	this.risp17.name = "risp17";
	this.risp17.setTransform(397,318.3,1,1,0,0,0,195,30.7);

	this.risp16 = new lib.risp16();
	this.risp16.name = "risp16";
	this.risp16.setTransform(395.5,246.35,1,1,0,0,0,193.5,30.7);

	this.risp15 = new lib.risp15();
	this.risp15.name = "risp15";
	this.risp15.setTransform(392.5,183.75,1,1,0,0,0,190.5,38.7);

	this.q4vera = new lib.q3vera4();
	this.q4vera.name = "q4vera";
	this.q4vera.setTransform(155.4,237.95,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q4vera, 0, 1, 1);

	this.q4falsa3 = new lib.q3vera4();
	this.q4falsa3.name = "q4falsa3";
	this.q4falsa3.setTransform(155.4,310.4,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q4falsa3, 0, 1, 1);

	this.q4falsa2 = new lib.q3vera3();
	this.q4falsa2.name = "q4falsa2";
	this.q4falsa2.setTransform(155.4,378.75,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q4falsa2, 0, 1, 1);

	this.q4falsa1 = new lib.q3vera2();
	this.q4falsa1.name = "q4falsa1";
	this.q4falsa1.setTransform(155.4,165.8,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q4falsa1, 0, 1, 1);

	this.risp22 = new lib.Simbolo21();
	this.risp22.name = "risp22";
	this.risp22.setTransform(481.4,306.9,1,1,0,0,0,39.6,14.8);

	this.risp21 = new lib.Simbolo20();
	this.risp21.name = "risp21";
	this.risp21.setTransform(252.4,300.8,1,1,0,0,0,26.6,14.8);

	this.risp20 = new lib.Simbolo19();
	this.risp20.name = "risp20";
	this.risp20.setTransform(465.9,235.1,1,1,0,0,0,24.1,14.8);

	this.risp19 = new lib.Simbolo18();
	this.risp19.name = "risp19";
	this.risp19.setTransform(259.4,233.5,1,1,0,0,0,28.6,14.8);

	this.q5vera = new lib.q3vera4();
	this.q5vera.name = "q5vera";
	this.q5vera.setTransform(389.8,306.25,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q5vera, 0, 1, 1);

	this.q5falsa3 = new lib.q3vera4();
	this.q5falsa3.name = "q5falsa3";
	this.q5falsa3.setTransform(389.8,235.8,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q5falsa3, 0, 1, 1);

	this.q5falsa2 = new lib.q3vera3();
	this.q5falsa2.name = "q5falsa2";
	this.q5falsa2.setTransform(178.8,300.15,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q5falsa2, 0, 1, 1);

	this.q5falsa1 = new lib.q3vera2();
	this.q5falsa1.name = "q5falsa1";
	this.q5falsa1.setTransform(178.8,234.2,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q5falsa1, 0, 1, 1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A97A").s().p("AgOBIIAAgfIAdAAIAAAfgAgOgpIAAgdIAdAAIAAAdg");
	this.shape_123.setTransform(235.7,108.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A97A").s().p("AgiBVQgSgUAAgnQAAggAOgSQAOgTAbAAQAYAAANAPQANAPAAAYIAAAGIhRAAIAAAJQAAAJACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdAAIgBgHIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAHIA4AAIAAAAgAgJhAIgUgpIAaAAIAMApg");
	this.shape_124.setTransform(224.175,105.225);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAKACAJAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgKgFIgEgCIgFgEIgHgDIgEgCQgOgHgHgHQgIgIAAgOQAAgSAOgKQAMgKAXAAIAQABIAOADIADABIAAATIgPgEQgJgDgJAAQgLAAgJAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAGAEIADABIAMAHIAJAGQAEAFACAGQADAGAAAIQAAAVgOALQgNAMgZAAQgMAAgKgCg");
	this.shape_125.setTransform(204.3,108.325);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00A97A").s().p("AgpA9QgJgNAAgTIAAhlIAUAAIAABOIAAAUQABAHACAGQACAHAEADQAFAEAHAAQAJAAAIgHQAHgGAFgLQAGgKACgMQADgKgBgKIAAg7IAVAAIAACOIgVAAIAAghIAAAAIgEAMQgEAFgEAGQgGAGgIADQgGAEgMAAQgRAAgKgMg");
	this.shape_126.setTransform(191,108.475);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00A97A").s().p("AgJBoIAAjOIATAAIAADOg");
	this.shape_127.setTransform(179.95,105.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00A97A").s().p("Ag0BpIAAjOIAUAAIAAAYIABAAQACgJAKgKQAJgIAOAAQAaAAALATQAMAUAAAiQAAAPgCAOQgDANgGAKQgGALgJAGQgKAHgMAAQgHAAgIgDIgLgGQgEgFgDgEIgDgJIgBAAIAABXgAgNhRQgHAEgEAJQgEAIgCAKQgCALAAAJQAAAZAJAQQAIAQAPAAQAJAAAFgFQAGgGAEgIQADgIACgLIABgXIgBgRQgBgJgDgIQgDgJgGgEQgGgGgJAAQgIAAgGAGg");
	this.shape_128.setTransform(169.65,111.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00A97A").s().p("AgaBBQgNgFgJgKQgKgJgGgNQgFgNgBgOQABgOAFgNQAGgNAKgKQAJgJANgGQAMgFAOAAQAPAAAMAFQANAGAKAJQAJAKAGANQAFANABAOQgBAOgFANQgGANgJAJQgKAKgNAFQgMAFgPABQgNgBgNgFgAgWg2QgLAEgIAJQgIAIgFALQgFALAAAMQAAAMAFAKQAFALAIAIQAIAJALAFQALAEALAAQAMAAALgEQALgFAJgJQAHgIAFgLQAFgKAAgMQAAgMgFgLQgFgLgHgIQgJgJgLgEQgLgFgMAAQgLAAgLAFgAAPAkIgMgfIgPAAIAAAfIgOAAIAAhKIAZAAIAKABQAFAAAFADQAEADADAFQADAEgBAIQAAAJgCADQgEACgFADIgBAAIANAhgAgMgGIAPAAQAFAAADgBQAEgDAAgFQAAgKgNAAIgOAAg");
	this.shape_129.setTransform(154.4,101.45);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_130.setTransform(140.325,108.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00A97A").s().p("AghA3QgUgUABglQgBgiAOgTQAPgTAcAAQAOAAAKAEQAJAEAGAHQAFAGADAJQADAIAAAJIgZAAQAAgNgGgIQgGgJgOAAQgIAAgHAFQgGAEgEAIQgEAHgBAJQgDAIAAAJQAAALADALQADALAGAKQAGAJAMAGQAJAGASAAIALAAIALgCIAAAQIgNADIgQABQgiAAgTgUg");
	this.shape_131.setTransform(127.55,108.325);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_132.setTransform(113.275,108.325);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00A97A").s().p("Ag0BpIAAjOIAUAAIAAAYIAAAAQADgJAKgKQAKgIANAAQAaAAALATQAMAUABAiQgBAPgCAOQgDANgGAKQgGALgJAGQgJAHgNAAQgIAAgGgDIgMgGQgEgFgCgEIgFgJIAAAAIAABXgAgOhRQgGAEgEAJQgEAIgCAKQgCALAAAJQAAAZAIAQQAKAQAOAAQAJAAAFgFQAHgGADgIQADgIACgLIABgXIgBgRQgBgJgDgIQgDgJgGgEQgGgGgJAAQgIAAgHAGg");
	this.shape_133.setTransform(100.2,111.35);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00A97A").s().p("AgiBpIgWgEIgCgBIAAgXIABAAQAJAEANADQAMADAPAAQATAAANgJQAMgJAAgRQAAgPgIgJQgIgIgQgIIgDgCIgHgFIgKgFIgEgCIgQgJIgMgJQgGgHgDgIQgEgHAAgLQAAgaATgNQASgOAdAAQAMAAAKACIATADIACAAIAAAYIgTgGQgMgDgOAAQgRgBgKAJQgLAJAAAOQAAAMAIAHQAJAJAQAIIACABIAHAFIALAFIAAAAIARALQAHAEAGAGQAGAHAEAIQAEAJAAAMQAAAPgGAMQgGALgKAHQgKAHgNADQgNADgOAAQgNAAgLgCg");
	this.shape_134.setTransform(85.325,105.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00A97A").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_135.setTransform(478.3,68.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00A97A").s().p("AgpBWQgMgTABgjQgBgPADgOQADgMAGgLQAGgLAJgGQAKgGAMAAQAIAAAGACQAHADAEAEIAHAIIAEAJIABAAIAAhXIAVAAIAADOIgVAAIAAgZIgBAAQgDAKgJAJQgKAJgOAAQgZAAgMgTgAgOgVQgFAFgEAJQgEAIgBALIgBAYIABARQABAIADAIQADAIAGAGQAGAFAJAAQAIAAAGgFQAHgGAEgIQAEgIACgKQACgKAAgKQAAgZgIgQQgJgQgQAAQgHAAgHAFg");
	this.shape_136.setTransform(466.95,68.275);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00A97A").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_137.setTransform(448.85,68.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00A97A").s().p("AgoBWQgMgTAAgjQAAgPACgOQADgMAGgLQAGgLAJgGQAKgGAMAAQAIAAAHACQAGADAEAEIAIAIIADAJIABAAIAAhXIAVAAIAADOIgVAAIAAgZIgBAAQgCAKgKAJQgJAJgPAAQgZAAgLgTgAgOgVQgFAFgEAJQgEAIgBALIgBAYIABARQABAIADAIQADAIAGAGQAHAFAIAAQAIAAAGgFQAHgGAEgIQAEgIACgKQACgKAAgKQAAgZgJgQQgIgQgQAAQgIAAgGAFg");
	this.shape_138.setTransform(437.5,68.275);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00A97A").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_139.setTransform(427.15,68.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00A97A").s().p("AgoA9QgKgNAAgTIAAhlIAUAAIAABOIABAUQAAAHACAGQACAHAFADQADAEAIAAQAJAAAHgHQAIgGAFgLQAGgKACgMQADgKAAgKIAAg7IAUAAIAACOIgUAAIAAghIgBAAIgFAMQgDAFgFAGQgFAGgHADQgIAEgKAAQgTAAgIgMg");
	this.shape_140.setTransform(415.95,71.475);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00A97A").s().p("AAhBpIAAhXIgBAAIgEAJQgCAEgFAFIgLAGQgGADgIAAQgNAAgJgHQgJgGgGgLQgGgKgDgNQgCgOAAgPQAAgjALgTQAMgTAZAAQAOAAAKAJQAJAJADAJIABAAIAAgYIAUAAIAADOgAgPhSQgGAFgDAJIgEARIgBARQAAAMABALQACALADAHQAEAJAFAGQAGAFAIAAQAQAAAIgQQAJgQAAgZIgCgUQgCgKgEgIQgEgJgHgFQgGgFgIAAQgJAAgGAFg");
	this.shape_141.setTransform(400.825,74.35);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00A97A").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_142.setTransform(390.45,68.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00A97A").s().p("AgJBoIAAjOIATAAIAADOg");
	this.shape_143.setTransform(383.2,68.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00A97A").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_144.setTransform(368.2,68.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_145.setTransform(357.075,71.325);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00A97A").s().p("AgpBWQgLgTgBgjQABgPACgOQADgMAGgLQAGgLAJgGQAJgGANAAQAIAAAGACQAHADAEAEIAHAIIAFAJIAAAAIAAhXIAUAAIAADOIgUAAIAAgZIAAAAQgEAKgJAJQgJAJgOAAQgaAAgMgTgAgOgVQgGAFgDAJQgEAIgBALIgBAYIABARQABAIADAIQADAIAGAGQAGAFAJAAQAIAAAHgFQAGgGAEgIQAEgIACgKQACgKAAgKQAAgZgIgQQgJgQgQAAQgHAAgHAFg");
	this.shape_146.setTransform(342.95,68.275);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_147.setTransform(321.925,71.325);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgUQAAgHgCgGQgCgHgEgDQgFgDgHgBQgKABgHAGQgHAGgFALQgFAKgDALQgDALAAALIAAA6IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgGAFgFQAFgGAIgEQAHgDALAAQASAAAJAMQAKANAAATIAABlg");
	this.shape_148.setTransform(307.725,71.15);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgDgNQgDgOAAgQQAAgPADgOQADgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQALAGAHAKQAHAKAEANQAEAOAAAPQAAAQgEAOQgEANgHALQgHAJgLAGQgLAGgPAAQgPAAgLgGgAgagqQgJAQAAAaQAAAbAJAPQAKAPAQAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgQAAgKAPg");
	this.shape_149.setTransform(293,71.325);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00A97A").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_150.setTransform(282.1,68.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00A97A").s().p("AgyBIIAAgRIBKhsIhFAAIAAgRIBeAAIAAARIhKBsIBMAAIAAARg");
	this.shape_151.setTransform(272.325,71.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_152.setTransform(259.725,71.325);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00A97A").s().p("AgHBXQgKgIABgUIAAhbIgYAAIAAgRIAYAAIAAghIATgNIAAAuIAmAAIAAARIgmAAIAABXIAAAIQACAEACAEQACADAFADQAFACAIAAIAFAAIAGgCIACgBIAAATIgSABQgVAAgIgJg");
	this.shape_153.setTransform(248.15,69.175);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgEgNQgDgOAAgQQAAgPADgOQAEgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQAMAGAGAKQAIAKADANQADAOAAAPQAAAQgDAOQgDANgIALQgGAJgMAGQgLAGgPAAQgPAAgLgGgAgZgqQgJAQAAAaQAAAbAJAPQAIAPARAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgRAAgIAPg");
	this.shape_154.setTransform(235.8,71.325);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAbIABAAIAFgJIAHgKQAGgFAJgDQAIgDALAAIAAAWQgXAAgMARQgMASAAAdIAAA7g");
	this.shape_155.setTransform(224.925,71.15);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00A97A").s().p("Ag0BpIAAjOIAUAAIAAAYIABAAQACgJAKgJQAJgJAOAAQAaAAALATQAMAUAAAiQAAAPgCAOQgDANgGAKQgGALgJAGQgKAHgMAAQgHAAgIgDIgLgGQgEgFgDgEIgDgJIgBAAIAABXgAgNhSQgHAGgEAIQgEAIgCAKQgCALAAAJQAAAZAJAQQAIAQAPAAQAJAAAFgFQAGgGAEgJQADgHACgLIABgXIgBgRQgBgJgDgIQgDgJgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_156.setTransform(212.4,74.35);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00A97A").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_157.setTransform(193.25,68.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00A97A").s().p("AgpBWQgLgTAAgjQAAgPACgOQADgMAGgLQAGgLAJgGQAKgGAMAAQAIAAAHACQAGADAFAEIAHAIIADAJIABAAIAAhXIAVAAIAADOIgVAAIAAgZIgBAAQgCAKgKAJQgJAJgPAAQgZAAgMgTgAgOgVQgFAFgEAJQgEAIgBALIgBAYIABARQABAIADAIQADAIAGAGQAHAFAIAAQAIAAAGgFQAHgGAEgIQAEgIACgKQACgKAAgKQAAgZgJgQQgIgQgQAAQgIAAgGAFg");
	this.shape_158.setTransform(181.9,68.275);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgDgNQgDgOAAgQQAAgPADgOQADgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQALAGAHAKQAHAKAEANQAEAOAAAPQAAAQgEAOQgEANgHALQgHAJgLAGQgLAGgPAAQgPAAgLgGgAgagqQgJAQAAAaQAAAbAJAPQAKAPAQAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgQAAgKAPg");
	this.shape_159.setTransform(160.25,71.325);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00A97A").s().p("AgoBWQgNgTAAgjQAAgPADgOQADgMAGgLQAGgLAJgGQAKgGAMAAQAIAAAHACQAGADAFAEIAHAIIAEAJIAAAAIAAhXIAUAAIAADOIgUAAIAAgZIAAAAQgDAKgKAJQgKAJgNAAQgaAAgLgTgAgNgVQgHAFgDAJQgDAIgCALIgBAYIABARQABAIADAIQADAIAGAGQAHAFAIAAQAIAAAGgFQAHgGAEgIQAEgIACgKQACgKAAgKQAAgZgJgQQgIgQgQAAQgIAAgFAFg");
	this.shape_160.setTransform(145.25,68.275);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_161.setTransform(131.025,71.325);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAbIABAAIAFgJIAHgKQAGgFAJgDQAIgDALAAIAAAWQgXAAgMARQgMASAAAdIAAA7g");
	this.shape_162.setTransform(121.025,71.15);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00A97A").s().p("AgaBnIgPgDIgEgBIAAgUIABAAIAPAGQAIACAMAAQANAAAIgEQAJgDAEgHQAFgGACgIQABgJAAgKIAAgZIgBAAQAAAEgDAEIgHAJQgFAEgHADQgGADgIAAQgOAAgJgGQgJgGgGgKQgGgKgCgLQgDgNAAgOQAAgPADgNQADgNAGgLQAGgLAJgGQAKgGANAAQAHAAAHACQAGADAFAEQAFAEACAFIADAIIABAAIAAgXIAUAAIAACOQAAAfgOAPQgQAQgdAAQgMAAgIgBgAgNhRQgFAEgEAIQgEAIgCALQgBALAAAMIABASQACAJADAHQADAIAGAFQAFAFAJAAQAHAAAIgGQAGgFAEgIQAEgIADgKIABgTIgBgTIgHgSQgEgIgGgFQgGgFgJAAQgHAAgGAFg");
	this.shape_163.setTransform(107.45,74.275);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00A97A").s().p("AgJBoIAAjOIATAAIAADOg");
	this.shape_164.setTransform(89.35,68.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00A97A").s().p("AgLBoIAAjOIAXAAIAADOg");
	this.shape_165.setTransform(81.875,68.1);

	this.button11 = new lib.Simboloavanti();
	this.button11.name = "button11";
	this.button11.setTransform(376.65,312.9,1.0348,0.9781,0,0,0,105.8,13.9);
	new cjs.ButtonHelper(this.button11, 0, 1, 1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00A97A").s().p("AARCSIAAhSIh2AAIAAgcIB0i1IAlAAIAACyIAyAAIAAAfIgyAAIAABSgAhDAhIBUAAIAAiKIgBAAg");
	this.shape_166.setTransform(372.175,230.625);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00A97A").s().p("ABQCfIhQiGIhQCGIgnAAIBkimIhaiXIAnAAIBGB3IBGh3IAnAAIhZCXIBkCmg");
	this.shape_167.setTransform(348.2,229.325);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00A97A").s().p("AhWCfIAAk9IBKAAQANAAAPACQAPACARAJQARAIALASQALATAAAeQAAAugbAVQgbAUgtAAIgmAAIAACOgAgygMIAmAAQAgAAAQgPQAPgOAAgcQAAgVgHgMQgHgMgLgGQgLgGgLgBIgYgBIgeAAg");
	this.shape_168.setTransform(326.725,229.325);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00A97A").s().p("AgRCfIAAk9IAjAAIAAE9g");
	this.shape_169.setTransform(308.15,229.325);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00A97A").s().p("AgWBtIAAguIAtAAIAAAugAgWg+IAAguIAtAAIAAAug");
	this.shape_170.setTransform(546.675,178.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00A97A").s().p("Ag0CDQgcgfAAg8QAAgyAVgcQAWgcApAAQAmAAAUAXQATAXAAAkIAAALIh9AAIAAANQAAAOADAQQAEAQAJAPQAJAPAPAKQAPAKAVAAIAWgBIARgEIAFgBIAAAZQgVAHgdAAQgyAAgcgfgAAtAAQAAgFgCgHQgCgHgFgGQgFgHgJgEQgIgEgLAAQgKAAgIAEQgJAEgGAHQgFAGgDAHIgEAMIBXAAIAAAAgAgPhjIgeg+IAoAAIASA+g");
	this.shape_171.setTransform(528.95,173.875);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00A97A").s().p("Ag+BjQgPgQAAgdQAAgSAKgOQAKgNAQgIQAQgIASgDQARgEAQAAQAOAAAIgBIgBgaIgBgQQgDgQgLgHQgLgHgPAAQgXAAgJAJQgKAJgCARIgjAAQAAgMAFgKQADgLAKgJQAJgJAPgFQAQgFAUgBQAYAAAPAHQAPAHAIALQAHAKADALQABAMABANIAACYIgfAAIAAgcIAAAAQgGALgSALQgRAMgaAAQgbAAgQgQgAAHAMQgLACgMAGQgLAFgIAKQgGAIAAANQgBAQAJAIQAJAJANAAQAPAAAOgKQAPgJAGgQIABgBIAGgSQACgIAAgRIgTAAQgKAAgMACg");
	this.shape_172.setTransform(495.25,178.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAfgTIAABGIA6AAIAAAbIg6AAIAACFIABANQABAGADAGQAFAFAHAEQAHADAMAAIAJgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_173.setTransform(478.05,175.325);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAfgTIAABGIA6AAIAAAbIg6AAIAACFIABANQABAGADAGQAFAFAHAEQAHADAMAAIAJgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_174.setTransform(462.75,175.325);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00A97A").s().p("Ag1BTQgbgeAAg8QAAgyAWgcQAUgcArgBQAlAAATAYQAUAWAAAmIAAALIh9AAIAAAMQAAANAEAQQAEARAIAPQAJAPAPAKQAOAJAXABIAUgBIARgEIAGgCIAAAaQgVAHgeAAQgyAAgcgggAAtguQAAgGgCgHQgDgHgFgGQgEgHgIgEQgJgEgLAAQgKAAgJAEQgIAEgFAHQgGAGgDAHIgEANIBXAAIAAAAg");
	this.shape_175.setTransform(444.75,178.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00A97A").s().p("Ag0BwIAAjaIAgAAIAAAqIABAAQACgIAGgHQAEgHAHgHQAJgIANgFQANgFASAAIAAAiQglAAgRAbQgUAbABAtIAABag");
	this.shape_176.setTransform(428.9,178.35);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00A97A").s().p("Ag0BwIAAjaIAgAAIAAAqIABAAQACgIAGgHQAEgHAHgHQAJgIANgFQANgFASAAIAAAiQglAAgRAbQgUAbABAtIAABag");
	this.shape_177.setTransform(414.4,178.35);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00A97A").s().p("AgoBqQgRgIgLgQQgLgQgEgVQgGgUAAgZQAAgXAGgVQAEgUALgQQALgQARgJQARgIAXgBQAXABARAIQASAJALAQQALAQAFAUQAFAVAAAXQAAAZgFAVQgFAVgLAPQgLAQgRAIQgSAJgXAAQgXAAgRgJgAgnhAQgOAXAAApQAAAqAOAXQANAYAaAAQAaAAAOgYQAOgXAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_178.setTransform(394.375,178.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00A97A").s().p("AgzBUQgegeAAg6QAAgzAWgeQAWgdAsAAQAVAAAPAHQAOAFAJALQAJAKADAMQAEANAAAOIglAAQAAgTgJgNQgKgNgUAAQgNAAgLAHQgKAHgGALQgGALgDAOQgCANAAANQAAARADARQAEARAKAPQAKAPARAJQAQAKAaAAIASgBQAJgBAIgDIAAAYQgLAEgKACIgYABQg1AAgdgfg");
	this.shape_179.setTransform(374.025,178.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00A97A").s().p("Ag9BjQgRgQABgdQgBgSAKgOQALgNAQgIQAQgIASgDQARgEAQAAQAOAAAIgBIgBgaIgBgQQgDgQgMgHQgLgHgOAAQgXAAgJAJQgKAJgCARIgjAAQABgMAEgKQADgLAKgJQAJgJAPgFQAPgFAVgBQAYAAAPAHQAPAHAHALQAIAKACALQACAMAAANIAACYIgeAAIAAgcIAAAAQgHALgRALQgSAMgZAAQgbAAgPgQgAAHAMQgLACgLAGQgMAFgHAKQgIAIABANQAAAQAIAIQAJAJANAAQAPAAAOgKQAPgJAGgQIABgBIAGgSQABgIABgRIgTAAQgKAAgMACg");
	this.shape_180.setTransform(340.3,178.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQABAGAFAGQADAFAIAEQAHADALAAIAKgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_181.setTransform(323.1,175.325);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00A97A").s().p("AgrBvIgbgFIAAgdIACABIAaAHQAPADAOABQAYgBAOgIQAOgJAAgSQAAgNgJgHQgIgIgPgIIgHgEIgJgEIgKgGIgHgDQgUgLgLgMQgMgMAAgUQABgbATgQQATgQAkAAQAMAAALACIAYAFIAEABIAAAdIgXgHQgOgDgOAAQgSAAgNAIQgMAIAAAMQgBAKAJAGQAHAHAOAHIAJAFIAKAGIAJAFIAEACIATALQAGADAHAHQAHAHAEAJQADAJABANQgBAhgUARQgWARglAAQgSAAgQgEg");
	this.shape_182.setTransform(306.95,178.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00A97A").s().p("AgoBqQgRgIgLgQQgLgQgEgVQgGgUAAgZQAAgXAGgVQAEgUALgQQALgQARgJQARgIAXgBQAXABARAIQASAJALAQQALAQAFAUQAFAVAAAXQAAAZgFAVQgFAVgLAPQgLAQgRAIQgSAJgXAAQgXAAgRgJgAgnhAQgOAXAAApQAAAqAOAXQANAYAaAAQAaAAAOgYQAOgXAAgqQAAgpgOgXQgOgXgaAAQgaAAgNAXg");
	this.shape_183.setTransform(287.125,178.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00A97A").s().p("AhRChIAAk8IAfAAIAAAlIABAAQAEgPAPgOQAOgNAXAAQAnAAASAdQASAeAAA2QAAAWgEAVQgEAUgKAQQgJARgOAJQgOAKgTAAQgNAAgKgEQgLgEgGgGQgHgGgEgHIgGgOIgBAAIAACGgAgVh+QgKAIgGANQgHANgDAPQgDAQAAAOQAAAmAOAZQANAaAXAAQANAAAJgIQAKgJAFgNQAFgNACgRQACgRAAgSIgBgbQgCgNgFgMQgFgNgIgIQgKgIgOAAQgMAAgKAIg");
	this.shape_184.setTransform(265.8,183.275);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00A97A").s().p("AgrBvIgbgFIAAgdIACABIAaAHQAPADAOABQAYgBAOgIQAOgJAAgSQAAgNgJgHQgIgIgPgIIgHgEIgJgEIgKgGIgGgDQgVgLgMgMQgKgMgBgUQAAgbAUgQQATgQAkAAQANAAAKACIAYAFIAEABIAAAdIgXgHQgOgDgOAAQgTAAgMAIQgMAIAAAMQAAAKAIAGQAHAHAPAHIAIAFIAKAGIAJAFIAEACIATALQAHADAGAHQAHAHAEAJQADAJABANQAAAhgWARQgVARglAAQgTAAgPgEg");
	this.shape_185.setTransform(245.65,178.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_186.setTransform(231.325,173.675);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00A97A").s().p("AgzBwIAAjaIAeAAIAAAqIABAAQAEgIAEgHQAGgHAHgHQAIgIANgFQANgFASAAIAAAiQgkAAgTAbQgTAbAAAtIAABag");
	this.shape_187.setTransform(220.25,178.35);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00A97A").s().p("Ag+BjQgPgQAAgdQAAgSAKgOQAKgNAQgIQAQgIASgDQARgEAQAAQAOAAAIgBIgBgaIgBgQQgDgQgLgHQgLgHgPAAQgXAAgJAJQgKAJgBARIgkAAQAAgMAFgKQADgLAKgJQAJgJAPgFQAQgFAUgBQAYAAAPAHQAPAHAIALQAHAKADALQABAMAAANIAACYIgeAAIAAgcIAAAAQgGALgSALQgRAMgaAAQgbAAgQgQgAAHAMQgLACgMAGQgLAFgIAKQgGAIAAANQgBAQAJAIQAJAJANAAQAPAAAOgKQAPgJAGgQIABgBIAGgSQACgIAAgRIgTAAQgKAAgMACg");
	this.shape_188.setTransform(187.9,178.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00A97A").s().p("AhKCfIAAk9IAkAAIAAEfIBxAAIAAAeg");
	this.shape_189.setTransform(170.775,173.675);

	this.risp26 = new lib.Simbolo25();
	this.risp26.name = "risp26";
	this.risp26.setTransform(415.9,390.2,1,1,0,0,0,203.5,28.7);

	this.risp25 = new lib.Simbolo24();
	this.risp25.name = "risp25";
	this.risp25.setTransform(388.4,315.45,1,1,0,0,0,176,14.8);

	this.risp24 = new lib.Simbolo23();
	this.risp24.name = "risp24";
	this.risp24.setTransform(389.4,256.15,1,1,0,0,0,182,14.8);

	this.risp23 = new lib.Simbolo22();
	this.risp23.name = "risp23";
	this.risp23.setTransform(404.4,199.85,1,1,0,0,0,192,14.8);

	this.q6falsa3 = new lib.q3vera4();
	this.q6falsa3.name = "q6falsa3";
	this.q6falsa3.setTransform(160.4,375.65,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q6falsa3, 0, 1, 1);

	this.q6falsa2 = new lib.q3vera4();
	this.q6falsa2.name = "q6falsa2";
	this.q6falsa2.setTransform(160.4,316.15,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q6falsa2, 0, 1, 1);

	this.q6falsa1 = new lib.q3vera3();
	this.q6falsa1.name = "q6falsa1";
	this.q6falsa1.setTransform(160.4,255.5,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q6falsa1, 0, 1, 1);

	this.q6vera = new lib.q3vera2();
	this.q6vera.name = "q6vera";
	this.q6vera.setTransform(160.4,200.55,1,1,0,0,0,27,15.5);
	new cjs.ButtonHelper(this.q6vera, 0, 1, 1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00A97A").s().p("AgOBHIAAgdIAdAAIAAAdgAgOgoIAAgfIAdAAIAAAfg");
	this.shape_190.setTransform(195.15,122.65);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAcIABAAIAFgKIAHgKQAGgEAJgEQAIgDALAAIAAAWQgXAAgMASQgMARAAAdIAAA7g");
	this.shape_191.setTransform(165.525,122.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgDgNQgDgOgBgQQABgPADgOQADgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQALAGAIAKQAGAKAEANQADAOAAAPQAAAQgDAOQgEANgGALQgIAJgLAGQgLAGgPAAQgPAAgLgGgAgagqQgJAQAAAaQAAAbAJAPQAKAPAQAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgQAAgKAPg");
	this.shape_192.setTransform(152.5,122.675);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgFgEIgHgDIgEgCQgOgHgHgHQgIgIAAgOQAAgSAOgKQAMgKAXAAIAQABIAOADIADABIAAATIgPgEQgJgDgJAAQgLAAgJAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAHAEIACABIALAHIAKAGQAEAFACAGQADAGAAAIQAAAVgOALQgOAMgYAAQgMAAgKgCg");
	this.shape_193.setTransform(139.85,122.675);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00A97A").s().p("AgoA9QgKgNAAgTIAAhlIAUAAIAABOIAAAUQABAHACAGQACAHAEADQAFAEAHAAQAJAAAHgHQAIgGAFgLQAGgKACgMQACgKAAgKIAAg7IAVAAIAACOIgVAAIAAghIAAAAIgFAMQgDAFgEAGQgGAGgIADQgGAEgMAAQgRAAgJgMg");
	this.shape_194.setTransform(126.55,122.825);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00A97A").s().p("AgXBoIAAh8IgYAAIAAgSIAYAAIAAgTQABgKABgIQADgIAGgHQAFgFAJgEQAIgEANAAQANAAAMADIAAASQgMgDgJAAQgRAAgGAHQgHAJAAAPIAAAQIApAAIAAASIgpAAIAAB8g");
	this.shape_195.setTransform(115.3,119.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAcIABAAIAFgKIAHgKQAGgEAJgEQAIgDALAAIAAAWQgXAAgMASQgMARAAAdIAAA7g");
	this.shape_196.setTransform(106.075,122.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00A97A").s().p("Ag4BnIAAjOIAwAAIATACQAKABAKAFQALAGAIAMQAHAMAAAUQAAAdgSAOQgRANgeAAIgYAAIAABcgAgggHIAZAAQAUAAALgKQAJgJAAgTQAAgNgEgJQgFgHgHgEQgHgDgHgCIgQAAIgTAAg");
	this.shape_197.setTransform(81.825,119.45);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00A97A").s().p("AgbBJIgSgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgKgFIgEgCIgFgEIgHgDIgEgCQgNgHgIgHQgIgIABgOQAAgSAMgKQANgKAWAAIARABIAPADIACABIAAATIgPgEQgJgDgJAAQgLAAgJAGQgIAFAAAIQAAAGAFAEQAFAFAJAEIAGAEIAGADIAGAEIADABIAMAHIAJAGQAEAFADAGQACAGAAAIQAAAVgOALQgOAMgYAAQgLAAgKgCg");
	this.shape_198.setTransform(536.6,85.675);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00A97A").s().p("AgpA9QgJgNAAgTIAAhlIAUAAIAABOIABAUQAAAHACAGQACAHAFADQAEAEAHAAQAJAAAIgHQAHgGAFgLQAFgKADgMQACgKAAgKIAAg7IAVAAIAACOIgVAAIAAghIAAAAIgEAMQgDAFgFAGQgFAGgJADQgGAEgMAAQgRAAgKgMg");
	this.shape_199.setTransform(523.3,85.825);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00A97A").s().p("AgJBnIAAjOIATAAIAADOg");
	this.shape_200.setTransform(512.25,82.45);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00A97A").s().p("Ag0BpIAAjOIAUAAIAAAYIAAAAQADgJAKgKQAKgIANAAQAaAAALATQANATAAAkQAAAPgDANQgDAMgGALQgGALgJAGQgJAGgNABQgIgBgGgCIgMgHQgEgEgCgFIgFgJIAAAAIAABYgAgOhRQgGAEgEAJQgEAJgCAJQgCAKAAAKQAAAZAIAPQAKARAOAAQAJAAAFgFQAHgFADgJQADgIACgLIABgYIgBgRQgBgIgDgJQgDgHgGgFQgGgGgJAAQgIAAgHAGg");
	this.shape_201.setTransform(501.95,88.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00A97A").s().p("AgaBBQgNgFgJgKQgLgKgFgNQgGgNAAgOQAAgNAGgNQAFgNALgJQAJgKANgGQANgFANgBQAPABAMAFQANAGAKAKQAKAJAFANQAFANAAANQAAAOgFANQgFANgKAKQgKAKgNAFQgMAGgPAAQgNAAgNgGgAgWg2QgLAFgIAIQgJAIgEALQgFALAAALQAAANAFALQAEAKAJAJQAIAIALAEQALAFALAAQANAAAKgFQALgEAIgIQAJgJAEgKQAFgLAAgNQAAgLgFgLQgEgLgJgIQgIgIgLgFQgKgFgNAAQgLAAgLAFgAAPAjIgMgdIgPAAIAAAdIgOAAIAAhJIAZAAIAKABQAGAAAEADQAEADADAEQACAFAAAIQAAAJgDADQgDACgGADIAAAAIAOAggAgMgGIAPAAQAFAAAEgCQADgCAAgFQAAgKgNAAIgOAAg");
	this.shape_202.setTransform(486.7,78.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00A97A").s().p("AgiA3QgSgUgBglQABgiAOgTQAOgTAcAAQAOAAAKAEQAJAEAGAHQAGAGACAJQACAIABAJIgZAAQAAgNgGgIQgGgJgOAAQgHAAgHAFQgHAEgEAIQgDAHgCAJQgCAIAAAJQAAALACALQADALAGAKQAGAJAMAGQAKAGARAAIALAAIALgCIAAAQIgNADIgQABQgiAAgUgUg");
	this.shape_203.setTransform(459.85,85.675);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00A97A").s().p("Ag1BpIAAjOIAVAAIAAAYIAAAAQAEgJAJgKQAJgIAPAAQAZAAAMATQAMATAAAkQgBAPgCANQgDAMgGALQgGALgJAGQgKAGgMABQgIgBgGgCIgLgHQgFgEgCgFIgFgJIAAAAIAABYgAgOhRQgGAEgEAJQgEAJgCAJQgCAKAAAKQAAAZAIAPQAJARAPAAQAIAAAHgFQAFgFAEgJQADgIACgLIABgYIgBgRQgBgIgDgJQgDgHgGgFQgGgGgKAAQgHAAgHAGg");
	this.shape_204.setTransform(432.5,88.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00A97A").s().p("AgiBpIgWgEIgCAAIAAgZIABABQAJAEANADQAMAEAPgBQATAAANgJQAMgKAAgQQAAgPgIgIQgIgIgQgJIgDgCIgHgFIgKgFIgEgCIgQgJIgMgKQgGgGgDgHQgEgJAAgJQAAgaATgOQASgOAdAAQAMAAAKACIATADIACAAIAAAYIgTgHQgMgCgOAAQgRAAgKAIQgLAJAAAOQAAAMAIAIQAJAHAQAJIACABIAHAFIALAGIAAAAIARAKQAHADAGAHQAGAHAEAIQAEAJAAALQAAAQgGALQgGAMgKAGQgKAIgNACQgNAEgOAAQgNAAgLgCg");
	this.shape_205.setTransform(417.625,82.45);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgNhMIAAgbIAaAAIAAAbg");
	this.shape_206.setTransform(398.9,82.45);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00A97A").s().p("AgpBWQgLgTAAgjQAAgPACgOQADgMAGgLQAGgLAJgGQAKgGAMAAQAIAAAHACQAGADAEAEIAIAIIADAJIABAAIAAhXIAVAAIAADOIgVAAIAAgZIgBAAQgCAKgKAJQgJAJgPAAQgZAAgMgTgAgNgVQgGAFgEAJQgEAIgBALIgBAYIABARQABAIADAIQADAIAGAGQAHAFAIAAQAIAAAGgFQAHgGAEgIQAEgIACgKQACgKAAgKQAAgZgJgQQgIgQgQAAQgIAAgFAFg");
	this.shape_207.setTransform(387.55,82.625);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgDgNQgDgOAAgQQAAgPADgOQADgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQALAGAIAKQAGAKAEANQAEAOAAAPQAAAQgEAOQgEANgGALQgIAJgLAGQgLAGgPAAQgPAAgLgGgAgagqQgJAQAAAaQAAAbAJAPQAKAPAQAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgQAAgKAPg");
	this.shape_208.setTransform(365.9,85.675);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAcIABAAIAFgKIAHgKQAGgFAJgDQAIgDALAAIAAAWQgXAAgMASQgMARAAAdIAAA7g");
	this.shape_209.setTransform(355.025,85.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00A97A").s().p("AgeBjQgLgHgFgKQgFgKgCgJIgBgUIAAiTIAUAAIAABYIAAAAQAEgKAKgJQAJgIAQAAQANAAAKAGQAKAHAGAKQAGALADANQADANgBAPQABAQgEANQgDANgHAKQgHAKgLAGQgLAFgOAAQgSAAgLgGgAgPgVQgHAGgEAJQgEAJgCALQgCALAAALIABAQQABAJAEAIQACAIAIAGQAGAFALAAQAHAAAIgFQAGgEAEgIQAEgJACgKQACgKAAgLQAAgLgCgKQgBgKgEgIQgEgIgGgFQgGgFgJAAQgIAAgHAFg");
	this.shape_210.setTransform(329,82.625);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgNhMIAAgbIAaAAIAAAbg");
	this.shape_211.setTransform(317.8,82.45);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00A97A").s().p("AgJBnIAAjOIATAAIAADOg");
	this.shape_212.setTransform(310.55,82.45);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgDgNQgDgOgBgQQABgPADgOQADgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQALAGAIAKQAGAKAEANQADAOAAAPQAAAQgDAOQgEANgGALQgIAJgLAGQgLAGgPAAQgPAAgLgGgAgZgqQgKAQAAAaQAAAbAKAPQAJAPAQAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgQAAgJAPg");
	this.shape_213.setTransform(292,85.675);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgFgEIgHgDIgEgCQgOgHgHgHQgIgIAAgOQAAgSAOgKQAMgKAXAAIAQABIAOADIADABIAAATIgPgEQgJgDgJAAQgLAAgJAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAHAEIACABIALAHIAKAGQAEAFACAGQADAGAAAIQAAAVgOALQgOAMgYAAQgMAAgKgCg");
	this.shape_214.setTransform(279.35,85.675);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00A97A").s().p("AgbBJIgSgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgGgEIgGgDIgEgCQgNgHgIgHQgHgIgBgOQAAgSANgKQANgKAWAAIAQABIAQADIACABIAAATIgPgEQgJgDgJAAQgMAAgIAGQgIAFAAAIQAAAGAFAEQAFAFAJAEIAGAEIAGADIAHAEIACABIALAHIAKAGQAEAFADAGQACAGAAAIQAAAVgOALQgNAMgZAAQgLAAgKgCg");
	this.shape_215.setTransform(268.25,85.675);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00A97A").s().p("AgoA9QgKgNAAgTIAAhlIAUAAIAABOIABAUQAAAHACAGQACAHAFADQADAEAIAAQAJAAAHgHQAIgGAFgLQAFgKADgMQADgKAAgKIAAg7IAUAAIAACOIgUAAIAAghIgBAAIgFAMQgCAFgGAGQgFAGgHADQgIAEgKAAQgTAAgIgMg");
	this.shape_216.setTransform(254.95,85.825);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00A97A").s().p("AgJBnIAAjOIATAAIAADOg");
	this.shape_217.setTransform(243.9,82.45);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00A97A").s().p("AgXBoIAAh8IgYAAIAAgSIAYAAIAAgTQAAgKACgIQADgIAGgHQAFgFAJgEQAIgEANAAQANAAALADIAAASQgLgEgJAAQgRABgHAHQgFAJgBAPIAAAQIApAAIAAASIgpAAIAAB8g");
	this.shape_218.setTransform(236.45,82.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00A97A").s().p("AgtAKIAAgTIBbAAIAAATg");
	this.shape_219.setTransform(224.775,85.325);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgMhMIAAgbIAaAAIAAAbg");
	this.shape_220.setTransform(215,82.45);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00A97A").s().p("AgHBXQgJgIAAgUIAAhbIgYAAIAAgRIAYAAIAAghIATgNIAAAuIAmAAIAAARIgmAAIAABXIABAIQABAEACAEQACADAFADQAFACAHAAIAGAAIAHgCIABgBIAAATIgSABQgVAAgIgJg");
	this.shape_221.setTransform(206.55,83.525);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgEgHABQgKgBgHAHQgHAGgFAKQgFALgDAMQgDAKAAAKIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgFAFgGQAFgFAIgEQAHgEALAAQASAAAJANQAKAMAAATIAABlg");
	this.shape_222.setTransform(193.925,85.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00A97A").s().p("ABDBJIAAhOIgBgUQAAgHgCgHQgCgFgEgEQgFgEgHABQgIgBgIAHQgGAGgFAKQgFALgCAMQgCAKAAAKIAAA7IgTAAIAAhOIAAgTQgBgIgCgGQgCgHgEgDQgFgEgHABQgJgBgGAHQgHAGgFAKQgEALgCAMQgDAKAAAKIAAA7IgVAAIAAiOIAVAAIAAAhIAAAAIAFgMQADgFAEgGQAEgFAIgEQAGgEALAAQAQAAAJAIQAIAKACAOIAAAAIAFgKIAHgKQAGgGAHgCQAHgEAIAAQASAAAJANQAKAMAAATIAABlg");
	this.shape_223.setTransform(139.7,85.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_224.setTransform(121.075,85.675);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00A97A").s().p("AgJBnIAAjOIATAAIAADOg");
	this.shape_225.setTransform(111.05,82.45);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_226.setTransform(92.175,85.675);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00A97A").s().p("AgwBnIAAjOIAYAAIAAC7IBJAAIAAATg");
	this.shape_227.setTransform(81.025,82.45);

	this.avanti111 = new lib.Simbolo11();
	this.avanti111.name = "avanti111";
	this.avanti111.setTransform(362.4,347.75,1,1,0,0,0,68.5,30.6);
	new cjs.ButtonHelper(this.avanti111, 0, 1, 1);

	this.button10_1 = new lib.Simbolo8();
	this.button10_1.name = "button10_1";
	this.button10_1.setTransform(379.15,345.55,0.9885,0.9342,0,0,0,72.5,22.7);
	new cjs.ButtonHelper(this.button10_1, 0, 1, 1);

	this.button111 = new lib.Simboloavanti();
	this.button111.name = "button111";
	this.button111.setTransform(370.45,344.35,1.0347,0.9781,0,0,0,105.6,27.8);
	new cjs.ButtonHelper(this.button111, 0, 1, 1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00A97A").s().p("Ag9BiQgRgQABgdQgBgRALgOQAKgNAQgIQAQgIASgDQARgEAQABQAOAAAIgCIgBgZIgBgRQgDgRgMgGQgLgHgOAAQgXAAgJAKQgKAIgCARIgjAAQAAgMAFgKQADgLAKgJQAJgJAPgFQAQgGAUABQAYAAAPAGQAPAHAIAKQAHALACAMQACALAAANIAACYIgeAAIAAgdIAAAAQgHAMgRAMQgSALgZgBQgbAAgPgQgAAHAMQgLADgLAFQgMAFgHAJQgIAJABAOQAAAPAIAIQAJAIANAAQAPAAAOgJQAPgJAGgQIABgCIAGgSQABgGABgSIgTAAQgKAAgMACg");
	this.shape_228.setTransform(500.85,254.05);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAfgTIAABGIA6AAIAAAbIg6AAIAACFIAAANQABAGAFAGQADAFAIAEQAHADAMAAIAJgBIAJgCIACgBIAAAcQgPACgMAAQghAAgNgNg");
	this.shape_229.setTransform(483.65,250.775);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00A97A").s().p("Ag9BiQgQgQgBgdQAAgRAKgOQALgNAQgIQAQgIASgDQARgEAQABQAOAAAHgCIAAgZIgBgRQgDgRgMgGQgLgHgOAAQgXAAgJAKQgJAIgCARIgjAAQAAgMADgKQAEgLAKgJQAJgJAPgFQAPgGAVABQAYAAAPAGQAPAHAHAKQAIALACAMQACALABANIAACYIgfAAIAAgdIgBAAQgFAMgSAMQgRALgagBQgbAAgPgQgAAHAMQgLADgLAFQgMAFgHAJQgIAJAAAOQAAAPAJAIQAJAIANAAQAOAAAPgJQAOgJAHgQIABgCIAGgSQACgGgBgSIgSAAQgKAAgMACg");
	this.shape_230.setTransform(464.25,254.05);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQACAGAEAGQAEAFAGAEQAIADALAAIAKgBIAJgCIADgBIAAAcQgQACgMAAQghAAgNgNg");
	this.shape_231.setTransform(447.05,250.775);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00A97A").s().p("AgMCGQgOgNAAgeIAAiMIgkAAIAAgbIAkAAIAAgzIAegTIAABGIA7AAIAAAbIg7AAIAACFIABANQACAGAEAGQAEAFAGAEQAIADALAAIAKgBIAJgCIADgBIAAAcQgQACgMAAQghAAgNgNg");
	this.shape_232.setTransform(431.75,250.775);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00A97A").s().p("Ag0BUQgcggAAg7QAAgyAVgcQAWgcApAAQAmgBAUAXQATAYAAAlIAAAKIh9AAIAAANQAAAOADAQQAEAQAJAPQAJAPAPAJQAPALAVgBIAWgBIARgDIAFgCIAAAaQgVAGgdAAQgyAAgcgegAAtguQAAgGgCgHQgCgHgFgHQgFgGgJgEQgIgEgLAAQgKAAgIAEQgJAEgGAGQgFAHgDAHIgEANIBXAAIAAAAg");
	this.shape_233.setTransform(413.75,254.05);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00A97A").s().p("AgLBtIhSjaIAiAAIA/CsIABAAIA4isIAiAAIhLDag");
	this.shape_234.setTransform(393.65,254.05);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00A97A").s().p("Ag1BUQgbggAAg7QAAgyAWgcQAUgcArAAQAlgBATAXQAUAYAAAlIAAAKIh9AAIAAANQAAAOAEAQQADAQAJAPQAJAPAPAJQAOALAXgBIAUgBIARgDIAGgCIAAAaQgVAGgeAAQgyAAgcgegAAtguQAAgGgCgHQgDgHgFgHQgEgGgIgEQgJgEgLAAQgKAAgJAEQgIAEgFAGQgGAHgDAHIgEANIBXAAIAAAAg");
	this.shape_235.setTransform(373.75,254.05);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00A97A").s().p("Ag0BwIAAjaIAgAAIAAAqIABAAQACgHAGgIQAFgHAGgIQAJgHANgFQANgFARAAIAAAiQgkAAgRAbQgUAbABAtIAABag");
	this.shape_236.setTransform(357.9,253.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00A97A").s().p("AguCXQgRgKgIgPQgIgPgDgPQgCgPAAgPIAAjiIAfAAIAACHIABAAQAFgQAPgNQAPgNAYAAQAVAAAPAKQAQAKAJARQAJAQAEAUQAEAVAAAWQAAAZgFAUQgFAUgLAPQgKAPgRAJQgRAIgWAAQgcAAgQgKgAgXggQgKAJgHAOQgGANgEARQgDASAAARIACAZQABAMAGANQAEANALAIQAKAIAQAAQANAAAKgHQAKgHAHgNQAGgMADgPQADgQAAgRQAAgRgDgPQgCgQgGgMQgGgNgJgIQgKgHgMAAQgNAAgLAIg");
	this.shape_237.setTransform(338.375,249.375);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00A97A").s().p("Ag1BUQgbggAAg7QAAgyAWgcQAUgcArAAQAlgBATAXQAUAYAAAlIAAAKIh9AAIAAANQAAAOAEAQQAEAQAIAPQAJAPAPAJQAOALAXgBIAUgBIASgDIAFgCIAAAaQgVAGgdAAQgzAAgcgegAAtguQAAgGgCgHQgDgHgFgHQgEgGgIgEQgJgEgLAAQgKAAgJAEQgIAEgFAGQgGAHgDAHIgEANIBXAAIAAAAg");
	this.shape_238.setTransform(304.8,254.05);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00A97A").s().p("Ag9BiQgQgQgBgdQAAgRAKgOQALgNAQgIQAQgIASgDQARgEAQABQAOAAAIgCIgBgZIgBgRQgDgRgMgGQgLgHgOAAQgXAAgJAKQgJAIgDARIgiAAQAAgMADgKQAEgLAKgJQAJgJAPgFQAPgGAVABQAYAAAPAGQAPAHAHAKQAIALACAMQACALAAANIAACYIgeAAIAAgdIAAAAQgGAMgSAMQgRALgagBQgbAAgPgQgAAHAMQgLADgLAFQgMAFgHAJQgIAJABAOQAAAPAIAIQAJAIANAAQAOAAAPgJQAOgJAHgQIABgCIAGgSQABgGABgSIgTAAQgKAAgMACg");
	this.shape_239.setTransform(271.1,254.05);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#00A97A").s().p("AgzBUQgegeAAg6QAAg0AWgcQAWgdAsAAQAVAAAPAFQAOAHAJAKQAJAKADANQAEAMAAAPIglAAQAAgVgJgMQgKgNgUAAQgNAAgLAHQgKAGgGAMQgGALgDANQgCANAAAOQAAARADARQAEARAKAPQAKAPARAJQAQAJAaAAIASgBQAJgBAIgCIAAAYQgLAEgKACIgYAAQg1AAgdgeg");
	this.shape_240.setTransform(252.025,254.05);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#00A97A").s().p("AAvBwIAAh5IgBgdQAAgLgDgKQgDgJgHgGQgHgGgLABQgPgBgKAKQgMAKgIAQQgIAQgEARQgEASAAAPIAABaIgfAAIAAjaIAfAAIAAAyIABAAQADgKAEgIQAEgIAIgJQAHgIANgGQALgGARAAQAbAAAPATQAOATAAAeIAACbg");
	this.shape_241.setTransform(219.125,253.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#00A97A").s().p("Ag0CXQgUgKgKgQQgKgRgDgRQgEgSAAgTIAAjWIAkAAIAADPQAAASACANQABAOAGAMQAGAMANAIQANAIAVAAQAWAAAOgIQAOgIAHgMQAFgMABgNQACgNAAgTIAAjPIAkAAIAADWQAAAUgDASQgDARgKAQQgKAQgWAKQgVAKghAAQgfAAgTgKg");
	this.shape_242.setTransform(193.95,249.375);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#00A97A").s().p("AgWBtIAAgtIAtAAIAAAtgAgWg+IAAguIAtAAIAAAug");
	this.shape_243.setTransform(555.675,198.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#00A97A").s().p("Ag+BjQgPgQAAgdQAAgSAKgOQAKgNAQgIQAQgIASgDQARgEAQAAQAOAAAIgBIgBgaIgBgQQgDgQgLgHQgLgHgPAAQgXAAgJAJQgKAJgCARIgjAAQAAgMAFgKQADgLAKgJQAJgJAPgFQAQgFAUgBQAYAAAPAHQAPAHAIALQAHAKADALQABAMAAANIAACYIgeAAIAAgcIAAAAQgGALgSALQgRAMgaAAQgbAAgQgQgAAHAMQgLACgMAGQgLAFgIAKQgGAIAAANQgBAQAJAIQAJAJANAAQAPAAAOgKQAPgJAGgQIABgBIAGgSQACgIAAgRIgTAAQgKAAgMACg");
	this.shape_244.setTransform(504.25,198.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#00A97A").s().p("AgzBUQgegeAAg6QAAgzAWgeQAWgdAsAAQAVAAAPAHQAOAFAJALQAJAKADAMQAEANAAAOIglAAQAAgTgJgNQgKgNgUAAQgNAAgLAHQgKAHgGALQgGALgDAOQgCANAAANQAAARADARQAEARAKAPQAKAPARAJQAQAKAaAAIASgBQAJgBAIgDIAAAZQgLADgKACIgYABQg1AAgdgfg");
	this.shape_245.setTransform(383.025,198.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#00A97A").s().p("AgrBvIgbgFIAAgdIACABIAaAHQAPADAOABQAYgBAOgIQAOgJAAgSQAAgNgJgHQgIgIgPgIIgHgEIgJgEIgKgGIgGgDQgVgLgMgMQgKgMgBgUQAAgbAUgQQATgQAkAAQAMAAALACIAYAFIAEABIAAAdIgXgHQgOgDgOAAQgTAAgMAIQgMAIAAAMQAAAKAIAGQAHAHAPAHIAIAFIAKAGIAJAFIAEACIATALQAHADAGAHQAHAHAEAJQADAJABANQAAAhgWARQgVARglAAQgTAAgPgEg");
	this.shape_246.setTransform(254.65,198.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#00A97A").s().p("AgPCfIAAjaIAfAAIAADagAgUh0IAAgqIApAAIAAAqg");
	this.shape_247.setTransform(240.325,193.475);

	this.form = new lib.Simbolo12();
	this.form.name = "form";
	this.form.setTransform(377,331.25,1,1,0,0,0,221,67.8);
	new cjs.ButtonHelper(this.form, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.introVideo}]}).to({state:[{t:this.risp1},{t:this.risp2},{t:this.risp3},{t:this.risp4},{t:this.risp5}]},1).to({state:[]},1).to({state:[{t:this.q2falsa1},{t:this.q2falsa2},{t:this.q2falsa3},{t:this.q2vera},{t:this.instance_1,p:{x:522,y:421}}]},1).to({state:[]},1).to({state:[{t:this.q3falsa1},{t:this.q3falsa2},{t:this.q3falsa3},{t:this.q3falsa4},{t:this.q3vera},{t:this.instance_1,p:{x:537,y:442}},{t:this.risp10},{t:this.risp11},{t:this.risp12},{t:this.risp13},{t:this.risp14}]},1).to({state:[]},1).to({state:[{t:this.q4falsa1},{t:this.q4falsa2},{t:this.q4falsa3},{t:this.q4vera},{t:this.risp15},{t:this.risp16},{t:this.risp17},{t:this.risp18}]},1).to({state:[]},1).to({state:[{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161,p:{x:131.025,y:71.325}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152,p:{x:259.725,y:71.325}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147,p:{x:321.925,y:71.325}},{t:this.shape_146},{t:this.shape_145,p:{x:357.075,y:71.325}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:113.275,y:108.325}},{t:this.shape_131},{t:this.shape_130,p:{x:140.325,y:108.325}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:224.175,y:105.225}},{t:this.shape_123},{t:this.q5falsa1},{t:this.q5falsa2},{t:this.q5falsa3},{t:this.q5vera},{t:this.risp19},{t:this.risp20},{t:this.risp21},{t:this.risp22}]},1).to({state:[{t:this.shape_189,p:{x:170.775,y:173.675}},{t:this.shape_188,p:{x:187.9,y:178.6}},{t:this.shape_187,p:{x:220.25,y:178.35}},{t:this.shape_186,p:{x:231.325,y:173.675}},{t:this.shape_185},{t:this.shape_184,p:{x:265.8,y:183.275}},{t:this.shape_183,p:{x:287.125,y:178.6}},{t:this.shape_182,p:{x:306.95,y:178.6}},{t:this.shape_181,p:{x:323.1,y:175.325}},{t:this.shape_180,p:{x:340.3,y:178.6}},{t:this.shape_179},{t:this.shape_178,p:{x:394.375,y:178.6}},{t:this.shape_177,p:{x:414.4,y:178.35}},{t:this.shape_176,p:{x:428.9,y:178.35}},{t:this.shape_175,p:{x:444.75,y:178.6}},{t:this.shape_174,p:{x:462.75,y:175.325}},{t:this.shape_173,p:{x:478.05,y:175.325}},{t:this.shape_172},{t:this.shape_171,p:{x:528.95,y:173.875}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.button11}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_161,p:{x:157.225,y:85.675}},{t:this.shape_145,p:{x:178.875,y:85.675}},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_152,p:{x:342.625,y:85.675}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_132,p:{x:445.575,y:85.675}},{t:this.shape_203},{t:this.shape_147,p:{x:472.625,y:85.675}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_130,p:{x:93.675,y:122.675}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_124,p:{x:183.625,y:119.575}},{t:this.shape_190},{t:this.q6vera},{t:this.q6falsa1},{t:this.q6falsa2},{t:this.q6falsa3},{t:this.risp23},{t:this.risp24},{t:this.risp25},{t:this.risp26}]},1).to({state:[{t:this.shape_189,p:{x:179.775,y:193.475}},{t:this.shape_188,p:{x:196.9,y:198.4}},{t:this.shape_187,p:{x:229.25,y:198.15}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_184,p:{x:274.8,y:203.075}},{t:this.shape_183,p:{x:296.125,y:198.4}},{t:this.shape_182,p:{x:315.95,y:198.4}},{t:this.shape_181,p:{x:332.1,y:195.125}},{t:this.shape_180,p:{x:349.3,y:198.4}},{t:this.shape_245},{t:this.shape_178,p:{x:403.375,y:198.4}},{t:this.shape_177,p:{x:423.4,y:198.15}},{t:this.shape_176,p:{x:437.9,y:198.15}},{t:this.shape_175,p:{x:453.75,y:198.4}},{t:this.shape_174,p:{x:471.75,y:195.125}},{t:this.shape_173,p:{x:487.05,y:195.125}},{t:this.shape_244},{t:this.shape_171,p:{x:537.95,y:193.675}},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_186,p:{x:236.125,y:249.125}},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.button111},{t:this.button10_1},{t:this.avanti111}]},1).to({state:[{t:this.form}]},1).wait(1));

	// Domande
	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#00A97A").s().p("AgOBHIAAgdIAdAAIAAAdgAgOgoIAAgfIAdAAIAAAfg");
	this.shape_248.setTransform(456.95,89);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgDgNQgEgOAAgQQAAgPAEgOQADgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQALAGAIAKQAGAKAEANQAEAOgBAPQABAQgEAOQgEANgGALQgIAJgLAGQgLAGgPAAQgPAAgLgGgAgZgqQgKAQABAaQgBAbAKAPQAIAPARAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgRAAgIAPg");
	this.shape_249.setTransform(444.8,89.025);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgDgHAAQgKAAgHAGQgHAGgFAKQgFALgDAMQgDALAAAJIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgGAFgFQAFgGAIgDQAHgEALAAQASAAAJAMQAKANAAATIAABlg");
	this.shape_250.setTransform(430.075,88.85);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgEgNQgDgOAAgQQAAgPADgOQAEgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQAMAGAGAKQAIAKADANQADAOAAAPQAAAQgDAOQgDANgIALQgGAJgMAGQgLAGgPAAQgPAAgLgGgAgZgqQgJAQAAAaQAAAbAJAPQAIAPARAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgRAAgIAPg");
	this.shape_251.setTransform(415.35,89.025);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00A97A").s().p("AgbBJIgSgEIAAgTIABAAIARAFQAKACAJAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgKgFIgEgCIgGgEIgGgDIgEgCQgNgHgIgHQgHgIAAgOQgBgSANgKQANgKAWAAIAQABIAQADIACABIAAATIgPgEQgJgDgJAAQgMAAgIAGQgIAFAAAIQAAAGAFAEQAFAFAJAEIAGAEIAGADIAGAEIADABIALAHIAKAGQAEAFADAGQACAGAAAIQAAAVgOALQgNAMgZAAQgLAAgKgCg");
	this.shape_252.setTransform(402.7,89.025);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAKACAJAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgKgFIgEgCIgFgEIgHgDIgEgCQgOgHgHgHQgIgIAAgOQAAgSAOgKQAMgKAXAAIAQABIAOADIADABIAAATIgPgEQgJgDgJAAQgMAAgIAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAGAEIADABIAMAHIAJAGQAEAFACAGQADAGAAAIQAAAVgOALQgNAMgZAAQgMAAgKgCg");
	this.shape_253.setTransform(383.85,89.025);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00A97A").s().p("AgpA9QgJgNAAgTIAAhlIAUAAIAABOIAAAUQABAHACAGQACAHAEADQAFAEAHAAQAJAAAIgHQAHgGAFgLQAGgKACgMQADgKgBgKIAAg7IAVAAIAACOIgVAAIAAghIAAAAIgEAMQgEAFgEAGQgGAGgIADQgGAEgMAAQgRAAgKgMg");
	this.shape_254.setTransform(370.55,89.175);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00A97A").s().p("AgJBnIAAjOIATAAIAADOg");
	this.shape_255.setTransform(359.5,85.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00A97A").s().p("Ag0BpIAAjOIAUAAIAAAZIABAAQACgLAKgIQAJgJAOAAQAaAAALATQAMAUAAAjQAAAOgCAOQgDAMgGALQgGALgJAGQgKAGgMAAQgHABgIgDIgLgHQgEgEgDgFIgDgJIgBAAIAABYgAgNhSQgHAFgEAJQgEAJgCAKQgCAJAAAKQAAAZAJAPQAIARAPAAQAJAAAFgFQAGgFAEgKQADgHACgLIABgYIgBgRQgBgIgDgIQgDgJgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_256.setTransform(349.2,92.05);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_257.setTransform(334.875,89.025);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00A97A").s().p("AgHBXQgKgIABgUIAAhbIgYAAIAAgRIAYAAIAAghIATgNIAAAuIAmAAIAAARIgmAAIAABXIAAAIQACAEACAEQACADAFADQAFACAIAAIAFAAIAGgCIACgBIAAATIgSABQgVAAgIgJg");
	this.shape_258.setTransform(323.3,86.875);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgNhMIAAgbIAaAAIAAAbg");
	this.shape_259.setTransform(314.5,85.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00A97A").s().p("AgoA9QgKgNAAgTIAAhlIAUAAIAABOIAAAUQABAHACAGQACAHAEADQAEAEAIAAQAJAAAHgHQAIgGAFgLQAGgKACgMQACgKABgKIAAg7IAUAAIAACOIgUAAIAAghIgBAAIgFAMQgCAFgGAGQgEAGgIADQgIAEgKAAQgSAAgJgMg");
	this.shape_260.setTransform(303.3,89.175);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00A97A").s().p("AgiBpIgWgEIgCgBIAAgYIABABQAJAEANADQAMAEAPAAQATAAANgKQAMgKAAgQQAAgPgIgIQgIgJgQgJIgDgBIgHgFIgKgFIgEgBIgQgKIgMgKQgGgGgDgHQgEgJAAgJQAAgaATgOQASgOAdAAQAMAAAKABIATAEIACABIAAAWIgTgGQgMgDgOAAQgRAAgKAJQgLAJAAAOQAAAMAIAIQAJAHAQAJIACABIAHAFIALAGIAAAAIARAJQAHAEAGAHQAGAGAEAJQAEAJAAALQAAAQgGALQgGAMgKAGQgKAIgNACQgNAEgOAAQgNAAgLgCg");
	this.shape_261.setTransform(289.325,85.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_262.setTransform(275.425,89.025);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgDgHAAQgKAAgHAGQgHAGgFAKQgFALgDAMQgDALAAAJIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgGAFgFQAFgGAIgDQAHgEALAAQASAAAJAMQAKANAAATIAABlg");
	this.shape_263.setTransform(261.225,88.85);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgNhMIAAgbIAaAAIAAAbg");
	this.shape_264.setTransform(250.05,85.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00A97A").s().p("AgJBnIAAjOIATAAIAADOg");
	this.shape_265.setTransform(242.8,85.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgDgHAAQgKAAgHAGQgHAGgFAKQgFALgDAMQgDALAAAJIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgGAFgFQAFgGAIgDQAHgEALAAQASAAAJAMQAKANAAATIAABlg");
	this.shape_266.setTransform(231.725,88.85);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00A97A").s().p("AgjBiQgOgJgIgPQgJgQgDgSQgEgTAAgVQAAgUAEgUQADgSAJgPQAIgPAOgJQAPgJAUAAQAWAAAOAJQAOAJAJAPQAIAPADASQAEAUAAAUQAAAVgEATQgDASgIAQQgIAPgPAJQgOAJgWAAQgUAAgPgJgAgXhPQgKAJgFAMQgFANgCAOQgCAPAAAQQAAAPACAPQACAPAFANQAFANAKAJQAKAHANABQAPgBAKgHQAJgJAFgNQAFgNACgPQACgPAAgPQAAgQgCgPQgCgOgFgNQgFgMgJgJQgKgIgPAAQgNAAgKAIg");
	this.shape_267.setTransform(215.325,85.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00A97A").s().p("AAxBjQgHgDgEgGQgEgFgBgFQgBgGAAgIIAAhAIg2AAQgUAAgKALQgKAMAAARQAAAVANALQAMAKAQAAIAOgBIANgEIAAATIgBAAIgMADIgPABQgeAAgSgPQgRgPAAgbQAAgNADgKQAEgJAFgGQAGgGAFgDQAGgDAGgCIAAAAIgMgFQgFgDgFgFQgFgFgDgIQgDgHAAgLQAAgNAFgJQAFgKAJgGQAIgGALgDQALgDALAAQANAAARAFIAAATIgNgFIgPgBIgNABQgGACgGAEQgFAEgDAHQgDAGAAAJQAAASAKAJQALAJAUAAIAyAAIAAg1IAUgMIAABBIAkAAIAAAQIgkAAIAAA7QAAAKAFAHQAFAGAMAAIAHAAIAHgBIAAARQgMACgIAAQgMAAgHgDg");
	this.shape_268.setTransform(189.675,86.325);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00A97A").s().p("AgbBJIgSgEIAAgTIABAAIARAFQAKACAJAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgGgEIgGgDIgEgCQgNgHgIgHQgHgIAAgOQgBgSANgKQANgKAWAAIAQABIAQADIACABIAAATIgPgEQgJgDgJAAQgMAAgIAGQgIAFAAAIQAAAGAFAEQAFAFAJAEIAGAEIAGADIAHAEIACABIALAHIAKAGQAEAFADAGQACAGAAAIQAAAVgOALQgNAMgZAAQgLAAgKgCg");
	this.shape_269.setTransform(166.1,89.025);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00A97A").s().p("AgoA9QgKgNAAgTIAAhlIAUAAIAABOIABAUQAAAHACAGQACAHAFADQADAEAIAAQAJAAAHgHQAIgGAFgLQAFgKADgMQADgKAAgKIAAg7IAUAAIAACOIgUAAIAAghIgBAAIgFAMQgCAFgGAGQgFAGgHADQgIAEgKAAQgTAAgIgMg");
	this.shape_270.setTransform(152.8,89.175);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#00A97A").s().p("AgJBnIAAjOIATAAIAADOg");
	this.shape_271.setTransform(141.75,85.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#00A97A").s().p("Ag1BpIAAjOIAVAAIAAAZIAAAAQAEgLAJgIQAJgJAPAAQAZAAAMATQAMAUAAAjQgBAOgCAOQgDAMgGALQgGALgJAGQgJAGgNAAQgIABgGgDIgLgHQgFgEgCgFIgFgJIAAAAIAABYgAgOhSQgGAFgEAJQgEAJgCAKQgCAJAAAKQAAAZAIAPQAJARAPAAQAIAAAHgFQAFgFAEgKQADgHACgLIABgYIgBgRQgBgIgDgIQgDgJgGgFQgGgFgKAAQgHAAgHAFg");
	this.shape_272.setTransform(131.45,92.05);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#00A97A").s().p("AgaBCQgNgGgKgKQgKgJgFgOQgGgNABgOQgBgNAGgNQAFgMAKgKQAKgKANgGQAMgGAOAAQAOAAANAGQANAGAJAKQALAKAFAMQAGANgBANQABAOgGANQgGAOgJAJQgKAKgNAGQgNAEgOAAQgNAAgNgEgAgWg2QgLAEgIAJQgIAIgFALQgFALAAALQAAAMAFAMQAFAKAIAJQAIAIALAEQAKAFAMAAQANAAAKgFQALgEAIgIQAJgJAEgKQAFgMAAgMQAAgLgFgLQgEgLgJgIQgIgJgLgEQgKgFgNAAQgMAAgKAFgAAOAjIgLgdIgPAAIAAAdIgNAAIAAhJIAYAAIALABQAFABAEACQAFADACAEQACAGABAHQAAAJgEADQgDADgGACIgBABIAPAfgAgMgFIAPAAQAFgBAEgCQACgCAAgFQAAgKgMAAIgOAAg");
	this.shape_273.setTransform(116.2,82.15);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_274.setTransform(102.125,89.025);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#00A97A").s().p("AgiA3QgTgUAAglQAAgiAPgTQAOgTAdAAQANAAAJAEQAKAEAGAHQAFAGADAJQADAIgBAJIgYAAQAAgNgGgIQgGgJgNAAQgJAAgGAFQgHAEgEAIQgEAHgCAJQgBAIAAAJQgBALADALQACALAHAKQAGAJALAGQALAGAQAAIANAAIALgCIAAAQIgOADIgQABQgiAAgUgUg");
	this.shape_275.setTransform(89.35,89.025);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_276.setTransform(75.075,89.025);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#00A97A").s().p("Ag1BpIAAjOIAVAAIAAAZIABAAQACgLAKgIQAJgJAPAAQAZAAAMATQALAUAAAjQAAAOgCAOQgDAMgGALQgGALgJAGQgKAGgMAAQgHABgIgDIgLgHQgEgEgDgFIgDgJIgBAAIAABYgAgNhSQgHAFgEAJQgEAJgCAKQgCAJAAAKQAAAZAJAPQAIARAPAAQAJAAAGgFQAFgFAEgKQAEgHABgLIABgYIgBgRQgBgIgDgIQgDgJgGgFQgGgFgKAAQgHAAgGAFg");
	this.shape_277.setTransform(62,92.05);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#00A97A").s().p("AgiBpIgWgEIgCgBIAAgYIABABQAJAEANADQAMAEAPAAQATAAANgKQAMgKAAgQQAAgPgIgIQgIgJgQgJIgDgBIgHgFIgKgFIgEgBIgQgKIgMgKQgGgGgDgHQgEgJAAgJQAAgaATgOQASgOAdAAQAMAAAKABIATAEIACABIAAAWIgTgGQgMgDgOAAQgRAAgKAJQgLAJAAAOQAAAMAIAIQAJAHAQAJIACABIAHAFIALAGIAAAAIARAJQAHAEAGAHQAGAGAEAJQAEAJAAALQAAAQgGALQgGAMgKAGQgKAIgNACQgNAEgOAAQgNAAgLgCg");
	this.shape_278.setTransform(47.125,85.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_279.setTransform(536.725,52.025);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#00A97A").s().p("ABDBJIAAhOIAAgUQgBgHgCgHQgCgFgEgEQgEgEgIABQgJAAgGAGQgIAGgEAKQgEALgCAMQgDAKAAAKIAAA7IgTAAIAAhOIgBgTQAAgIgCgGQgCgHgFgDQgDgEgIABQgIAAgIAGQgGAGgEAKQgFALgDAMQgCAKAAAKIAAA7IgUAAIAAiOIAUAAIAAAhIAAAAIAFgMQACgGAFgFQAEgGAIgDQAHgEAJAAQASAAAIAIQAIAKABAOIABAAIAFgKIAIgKQAFgGAGgCQAHgEAJAAQASAAAKANQAKAMgBATIAABlg");
	this.shape_280.setTransform(519.2,51.85);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_281.setTransform(501.525,52.025);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#00A97A").s().p("AgIBXQgIgIgBgUIAAhbIgXAAIAAgRIAXAAIAAghIAUgNIAAAuIAmAAIAAARIgmAAIAABXIABAIQAAAEADAEQADADAEADQAFACAHAAIAGAAIAHgCIABgBIAAATIgSABQgVAAgJgJg");
	this.shape_282.setTransform(489.95,49.875);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgGgEIgGgDIgEgCQgNgHgIgHQgHgIgBgOQABgSANgKQAMgKAXAAIAPABIAQADIACABIAAATIgPgEQgJgDgJAAQgMAAgIAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAHAEIACABIALAHIAKAGQAEAFADAGQACAGAAAIQAAAVgOALQgNAMgZAAQgLAAgLgCg");
	this.shape_283.setTransform(479.4,52.025);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgMhMIAAgbIAaAAIAAAbg");
	this.shape_284.setTransform(470.05,48.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgFgEIgHgDIgEgCQgOgHgHgHQgIgIAAgOQABgSANgKQAMgKAXAAIAPABIAPADIADABIAAATIgPgEQgJgDgJAAQgMAAgIAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAHAEIACABIALAHIAKAGQAEAFACAGQADAGAAAIQAAAVgOALQgOAMgYAAQgLAAgLgCg");
	this.shape_285.setTransform(461.05,52.025);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgDgNQgDgOgBgQQABgPADgOQADgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQALAGAIAKQAGAKAEANQADAOAAAPQAAAQgDAOQgEANgGALQgIAJgLAGQgLAGgPAAQgPAAgLgGgAgZgqQgKAQABAaQgBAbAKAPQAJAPAQAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgQAAgJAPg");
	this.shape_286.setTransform(448.15,52.025);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#00A97A").s().p("AgiA3QgSgUgBglQABgiAOgTQAOgTAdAAQANAAAJAEQAKAEAGAHQAGAGACAJQADAIgBAJIgYAAQAAgNgGgIQgGgJgNAAQgJAAgGAFQgHAEgEAIQgDAHgDAJQgBAIAAAJQgBALADALQACALAHAKQAGAJALAGQALAGAQAAIAMAAIAMgCIAAAQIgOADIgQABQgiAAgUgUg");
	this.shape_287.setTransform(434.85,52.025);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_288.setTransform(421.525,52.025);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#00A97A").s().p("AgOAgIADg/IAaAAIgKA/g");
	this.shape_289.setTransform(411.8,41.675);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#00A97A").s().p("AgJBnIAAjOIATAAIAADOg");
	this.shape_290.setTransform(405.05,48.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#00A97A").s().p("AgJBnIAAjOIATAAIAADOg");
	this.shape_291.setTransform(397.8,48.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_292.setTransform(387.625,52.025);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#00A97A").s().p("AgoBWQgMgTAAgjQAAgPACgOQADgMAGgLQAGgLAJgGQAKgGAMAAQAIAAAHACQAGADAEAEIAIAIIADAJIABAAIAAhXIAVAAIAADOIgVAAIAAgZIgBAAQgCAKgKAJQgJAJgPAAQgZAAgLgTgAgOgVQgFAFgEAJQgEAIgBALIgBAYIABARQABAIADAIQADAIAGAGQAHAFAIAAQAIAAAGgFQAHgGAEgIQAEgIACgKQACgKAAgKQAAgZgJgQQgIgQgQAAQgIAAgGAFg");
	this.shape_293.setTransform(373.15,48.975);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_294.setTransform(352.125,52.025);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#00A97A").s().p("AgHBHIg2iOIAXAAIAoBxIABAAIAlhxIAVAAIgwCOg");
	this.shape_295.setTransform(339,52);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgMhMIAAgbIAZAAIAAAbg");
	this.shape_296.setTransform(328.95,48.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#00A97A").s().p("AgHBXQgJgIAAgUIAAhbIgYAAIAAgRIAYAAIAAghIATgNIAAAuIAmAAIAAARIgmAAIAABXIABAIQABAEACAEQACADAFADQAFACAIAAIAFAAIAHgCIABgBIAAATIgSABQgVAAgIgJg");
	this.shape_297.setTransform(320.5,49.875);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgEgHABQgKAAgHAGQgHAGgFAKQgFALgDAMQgDAKAAAKIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgGAFgFQAFgGAIgDQAHgEALAAQASAAAJANQAKAMAAATIAABlg");
	this.shape_298.setTransform(307.875,51.85);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgMhMIAAgbIAaAAIAAAbg");
	this.shape_299.setTransform(296.7,48.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#00A97A").s().p("AgIBXQgIgIgBgUIAAhbIgXAAIAAgRIAXAAIAAghIAUgNIAAAuIAmAAIAAARIgmAAIAABXIABAIQAAAEADAEQADADAEADQAFACAHAAIAHAAIAGgCIABgBIAAATIgSABQgVAAgJgJg");
	this.shape_300.setTransform(288.25,49.875);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#00A97A").s().p("AgbBJIgSgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgGgEIgGgDIgEgCQgNgHgIgHQgHgIgBgOQAAgSANgKQANgKAWAAIAQABIAQADIACABIAAATIgPgEQgJgDgJAAQgMAAgIAGQgIAFAAAIQAAAGAFAEQAFAFAJAEIAGAEIAGADIAHAEIACABIALAHIAKAGQAEAFADAGQACAGAAAIQAAAVgOALQgNAMgZAAQgLAAgKgCg");
	this.shape_301.setTransform(277.7,52.025);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgMhMIAAgbIAaAAIAAAbg");
	this.shape_302.setTransform(268.35,48.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#00A97A").s().p("AgpBWQgLgTgBgjQABgPACgOQADgMAGgLQAGgLAJgGQAJgGANAAQAIAAAGACQAHADAEAEIAHAIIAFAJIAAAAIAAhXIAVAAIAADOIgVAAIAAgZIAAAAQgEAKgJAJQgJAJgOAAQgaAAgMgTgAgOgVQgGAFgDAJQgDAIgCALIgBAYIABARQABAIADAIQADAIAGAGQAGAFAJAAQAIAAAHgFQAGgGAEgIQAEgIACgKQACgKAAgKQAAgZgIgQQgJgQgQAAQgHAAgHAFg");
	this.shape_303.setTransform(257,48.975);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_304.setTransform(235.975,52.025);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#00A97A").s().p("AAfBnIAAhPIgBgTQAAgHgCgFQgCgHgEgDQgFgEgHAAQgKAAgHAHQgHAGgFAJQgFAKgDAMQgDAMAAAKIAAA6IgUAAIAAjOIAUAAIAABiIABAAQACgHADgFQACgFAFgHQAFgFAIgEQAHgDALgBQASAAAJANQAKAMAAATIAABlg");
	this.shape_305.setTransform(221.775,48.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#00A97A").s().p("AghA3QgTgUAAglQgBgiAOgTQAPgTAcAAQAOAAAKAEQAJAEAGAHQAGAGACAJQACAIABAJIgZAAQAAgNgGgIQgGgJgOAAQgHAAgIAFQgGAEgEAIQgDAHgCAJQgCAIgBAJQAAALADALQACALAHAKQAGAJAMAGQAJAGASAAIALAAIALgCIAAAQIgNADIgQABQgiAAgTgUg");
	this.shape_306.setTransform(208.2,52.025);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgMhMIAAgbIAaAAIAAAbg");
	this.shape_307.setTransform(197.8,48.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#00A97A").s().p("AgIBXQgIgIgBgUIAAhbIgXAAIAAgRIAXAAIAAghIAUgNIAAAuIAmAAIAAARIgmAAIAABXIABAIQAAAEADAEQADADAEADQAFACAHAAIAGAAIAHgCIABgBIAAATIgSABQgVAAgJgJg");
	this.shape_308.setTransform(189.35,49.875);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgGgEIgGgDIgEgCQgNgHgIgHQgHgIgBgOQABgSANgKQAMgKAXAAIAPABIAPADIADABIAAATIgPgEQgJgDgJAAQgMAAgIAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAHAEIACABIALAHIAKAGQAEAFACAGQADAGAAAIQAAAVgOALQgNAMgZAAQgLAAgLgCg");
	this.shape_309.setTransform(178.8,52.025);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgMhMIAAgbIAaAAIAAAbg");
	this.shape_310.setTransform(169.45,48.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAcIABAAIAFgKIAHgKQAGgEAJgEQAIgDALAAIAAAWQgXAAgMASQgMARAAAdIAAA7g");
	this.shape_311.setTransform(162.225,51.85);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_312.setTransform(149.825,52.025);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#00A97A").s().p("AgHBXQgJgIAAgUIAAhbIgYAAIAAgRIAYAAIAAghIATgNIAAAuIAmAAIAAARIgmAAIAABXIAAAIQACAEACAEQACADAFADQAFACAIAAIAFAAIAHgCIABgBIAAATIgSABQgVAAgIgJg");
	this.shape_313.setTransform(138.25,49.875);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#00A97A").s().p("AgHBXQgJgIAAgUIAAhbIgYAAIAAgRIAYAAIAAghIATgNIAAAuIAmAAIAAARIgmAAIAABXIABAIQABAEACAEQACADAFADQAFACAHAAIAGAAIAHgCIABgBIAAATIgSABQgVAAgIgJg");
	this.shape_314.setTransform(128.25,49.875);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_315.setTransform(115.575,52.025);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAcIABAAIAFgKIAHgKQAGgEAJgEQAIgDALAAIAAAWQgXAAgMASQgMARAAAdIAAA7g");
	this.shape_316.setTransform(105.575,51.85);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_317.setTransform(92.225,52.025);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#00A97A").s().p("AgiA3QgSgUgBglQABgiAOgTQAOgTAdAAQANAAAJAEQAKAEAGAHQAGAGACAJQADAIgBAJIgYAAQAAgNgGgIQgGgJgNAAQgJAAgGAFQgHAEgEAIQgDAHgDAJQgBAIAAAJQgBALADALQACALAHAKQAGAJAMAGQAKAGAQAAIAMAAIAMgCIAAAQIgOADIgQABQgiAAgUgUg");
	this.shape_318.setTransform(79.8,52.025);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#00A97A").s().p("AgiA2QgSgUAAgmQAAghAOgSQAOgTAbAAQAYAAANAPQANAPAAAZIAAAGIhRAAIAAAJQAAAIACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdgeIgBgIIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAIIA4AAIAAAAg");
	this.shape_319.setTransform(58.725,52.025);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#00A97A").s().p("AgwBnIAAjOIAYAAIAAC7IBJAAIAAATg");
	this.shape_320.setTransform(47.225,48.8);

	this.risp6 = new cjs.Text("+/- 2% ", "35px 'RotisSansSerif'", "#00A97A");
	this.risp6.name = "risp6";
	this.risp6.lineHeight = 43;
	this.risp6.lineWidth = 114;
	this.risp6.parent = this;
	this.risp6.setTransform(198.65,202.85);

	this.risp7 = new cjs.Text("+/- 10%", "35px 'RotisSansSerif'", "#00A97A");
	this.risp7.name = "risp7";
	this.risp7.lineHeight = 43;
	this.risp7.lineWidth = 119;
	this.risp7.parent = this;
	this.risp7.setTransform(418.75,200.1);

	this.risp8 = new cjs.Text("+/- 5%", "35px 'RotisSansSerif'", "#00A97A");
	this.risp8.name = "risp8";
	this.risp8.lineHeight = 43;
	this.risp8.lineWidth = 109;
	this.risp8.parent = this;
	this.risp8.setTransform(198.65,280.8);

	this.risp9 = new cjs.Text("+/- 3%", "35px 'RotisSansSerif'", "#00A97A");
	this.risp9.name = "risp9";
	this.risp9.lineHeight = 43;
	this.risp9.lineWidth = 116;
	this.risp9.parent = this;
	this.risp9.setTransform(418.75,280.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#00A97A").s().p("AgiBVQgSgUAAgnQAAggAOgSQAOgTAbAAQAYAAANAPQANAPAAAYIAAAGIhRAAIAAAJQAAAJACALQACAKAGAKQAGAKAKAGQAJAGAOAAIAOAAIALgCIADgBIAAAQQgNAFgTAAQghAAgSgVgAAdAAIgBgHIgFgJQgDgEgFgDQgGgDgHAAQgGAAgGADQgGADgDAEIgFAJIgDAHIA4AAIAAAAgAgJhAIgUgpIAaAAIAMApg");
	this.shape_321.setTransform(450.075,133.525);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#00A97A").s().p("ABDBJIAAhOIgBgUQAAgHgCgHQgCgFgEgEQgFgEgHABQgJAAgHAGQgGAGgFAKQgEALgDAMQgCAKAAAKIAAA7IgTAAIAAhOIAAgTQgBgIgCgGQgCgHgEgDQgEgEgIABQgJAAgGAGQgHAGgEAKQgFALgCAMQgDAKAAAKIAAA7IgVAAIAAiOIAVAAIAAAhIABAAIAEgMQADgGAEgFQAFgGAGgDQAIgEAJAAQARAAAJAIQAJAKAAAOIABAAIAFgKIAIgKQAEgGAIgCQAGgEAKAAQARAAAKANQAJAMABATIAABlg");
	this.shape_322.setTransform(400.55,136.45);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#00A97A").s().p("AgoA9QgKgNAAgTIAAhlIAUAAIAABOIABAUQAAAHACAGQACAHAEADQAEAEAIAAQAJAAAHgHQAIgGAFgLQAFgKADgMQACgKABgKIAAg7IAUAAIAACOIgUAAIAAghIgBAAIgFAMQgCAFgGAGQgFAGgHADQgIAEgKAAQgTAAgIgMg");
	this.shape_323.setTransform(356.3,136.775);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#00A97A").s().p("AgWBoIAAh8IgZAAIAAgSIAZAAIAAgTQAAgKABgIQADgIAGgHQAFgFAJgEQAIgEANAAQAMAAANADIAAASQgMgDgJAAQgRAAgGAHQgHAJAAAPIAAAQIApAAIAAASIgpAAIAAB8g");
	this.shape_324.setTransform(345.05,133.35);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#00A97A").s().p("AgLBnIAAjOIAXAAIAADOg");
	this.shape_325.setTransform(320.575,133.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#00A97A").s().p("AgoA9QgKgNAAgTIAAhlIAUAAIAABOIAAAUQABAHACAGQACAHAEADQAEAEAIAAQAJAAAHgHQAIgGAFgLQAGgKACgMQACgKABgKIAAg7IAUAAIAACOIgUAAIAAghIgBAAIgFAMQgCAFgGAGQgEAGgJADQgHAEgKAAQgSAAgJgMg");
	this.shape_326.setTransform(290.25,136.775);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#00A97A").s().p("Ag1BpIAAjOIAVAAIAAAZIABAAQACgKAKgKQAJgIAPAAQAZAAAMATQAMAUgBAjQABAOgDAOQgDAMgGALQgGALgJAGQgKAGgMAAQgHABgIgDIgKgHQgFgEgDgFIgDgJIgBAAIAABYgAgNhSQgHAFgEAJQgEAJgCAKQgCAKAAAJQAAAZAJAPQAIARAPAAQAIAAAHgFQAFgFAEgKQAEgHABgLIABgYIgBgRQgBgIgDgJQgDgIgGgFQgGgFgKAAQgHAAgGAFg");
	this.shape_327.setTransform(268.9,139.65);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#00A97A").s().p("AgaBBQgNgFgKgKQgJgJgGgOQgFgNgBgOQABgNAFgNQAGgNAJgJQAKgKANgGQAMgGAOAAQAOAAANAGQANAGAJAKQAKAJAGANQAGANAAANQAAAOgGANQgFAOgKAJQgKAKgNAFQgNAGgOAAQgNAAgNgGgAgWg2QgLAEgIAJQgIAIgFALQgFALAAALQAAAMAFAMQAFAKAIAJQAIAIALAEQALAFALAAQAMAAALgFQALgEAJgIQAHgJAFgKQAFgMAAgMQAAgLgFgLQgFgLgHgIQgJgJgLgEQgLgFgMAAQgLAAgLAFgAAOAjIgLgdIgPAAIAAAdIgNAAIAAhJIAYAAIALABQAEABAFACQAFADACAEQACAFABAIQgBAJgCADQgEADgFACIgBABIANAfgAgMgGIAPAAQAFAAADgCQADgCAAgFQAAgKgMAAIgOAAg");
	this.shape_328.setTransform(253.65,129.75);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#00A97A").s().p("AghA3QgUgUABglQAAgiANgTQAPgTAcAAQAOAAAKAEQAJAEAGAHQAFAGADAJQACAIAAAJIgYAAQAAgNgGgIQgGgJgNAAQgIAAgIAFQgGAEgEAIQgEAHgCAJQgCAIAAAJQABALACALQACALAHAKQAGAJALAGQAKAGARAAIANAAIAKgCIAAAQIgNADIgQABQgiAAgTgUg");
	this.shape_329.setTransform(226.8,136.625);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#00A97A").s().p("Ag0BpIAAjOIAUAAIAAAZIAAAAQADgKAKgKQAKgIANAAQAaAAALATQANAUAAAjQAAAOgDAOQgDAMgGALQgGALgJAGQgKAGgMAAQgHABgIgDIgLgHQgEgEgDgFIgEgJIAAAAIAABYgAgNhSQgHAFgEAJQgEAJgCAKQgCAKAAAJQAAAZAJAPQAJARAOAAQAJAAAFgFQAHgFADgKQADgHACgLIABgYIgBgRQgBgIgDgJQgDgIgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_330.setTransform(199.45,139.65);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#00A97A").s().p("AgiBpIgWgEIgCAAIAAgZIABABQAJAEANADQAMADAPAAQATABANgKQAMgKAAgQQAAgPgIgIQgIgIgQgJIgDgCIgHgFIgKgFIgEgCIgQgJIgMgKQgGgGgDgHQgEgIAAgKQAAgaATgOQASgOAdAAQAMAAAKABIATAEIACAAIAAAYIgTgHQgMgCgOAAQgRAAgKAIQgLAJAAAOQAAAMAIAIQAJAHAQAJIACABIAHAFIALAGIAAAAIARAJQAHAEAGAHQAGAHAEAIQAEAJAAALQAAAQgGALQgGAMgKAGQgKAIgNACQgNAEgOAAQgNAAgLgCg");
	this.shape_331.setTransform(184.575,133.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#00A97A").s().p("AgpBWQgMgTABgjQgBgPADgOQADgMAGgLQAGgLAJgGQAKgGAMAAQAIAAAHACQAGADAEAEIAIAIIADAJIABAAIAAhXIAVAAIAADOIgVAAIAAgZIgBAAQgDAKgJAJQgJAJgPAAQgZAAgMgTgAgOgVQgFAFgEAJQgEAIgBALIgBAYIABARQABAIADAIQADAIAGAGQAHAFAIAAQAIAAAGgFQAHgGAEgIQAEgIACgKQACgKAAgKQAAgZgJgQQgIgQgQAAQgHAAgHAFg");
	this.shape_332.setTransform(488.9,96.575);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgEgHABQgKgBgHAHQgHAGgFAKQgFALgDAMQgDAKAAAKIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgFAFgGQAFgFAIgEQAHgEALAAQASAAAJANQAKAMAAATIAABlg");
	this.shape_333.setTransform(453.675,99.45);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgDgNQgEgOAAgQQAAgPAEgOQADgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQALAGAIAKQAGAKAEANQAEAOgBAPQABAQgEAOQgEANgGALQgIAJgLAGQgLAGgPAAQgPAAgLgGgAgZgqQgKAQABAaQgBAbAKAPQAIAPARAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgRAAgIAPg");
	this.shape_334.setTransform(438.95,99.625);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgKgFIgEgCIgFgEIgHgDIgEgCQgOgHgHgHQgIgIABgOQAAgSAMgKQANgKAWAAIARABIAOADIADABIAAATIgPgEQgJgDgJAAQgLAAgJAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAGAEIADABIAMAHIAJAGQAEAFACAGQADAGAAAIQAAAVgOALQgNAMgZAAQgMAAgKgCg");
	this.shape_335.setTransform(419.05,99.625);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#00A97A").s().p("AgpA9QgJgNAAgTIAAhlIAUAAIAABOIAAAUQABAHACAGQACAHAEADQAFAEAHAAQAJAAAIgHQAHgGAFgLQAFgKADgMQADgKgBgKIAAg7IAVAAIAACOIgVAAIAAghIAAAAIgEAMQgEAFgEAGQgGAGgIADQgGAEgMAAQgRAAgKgMg");
	this.shape_336.setTransform(405.75,99.775);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#00A97A").s().p("AgXBoIAAh8IgXAAIAAgSIAXAAIAAgTQAAgKACgIQADgIAGgHQAFgFAIgEQAJgEANAAQAMAAAMADIAAASQgMgEgIAAQgRABgHAHQgFAJgBAQIAAAPIApAAIAAASIgpAAIAAB8g");
	this.shape_337.setTransform(394.5,96.35);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgEgHABQgKgBgHAHQgHAGgFAKQgFALgDAMQgDAKAAAKIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgFAFgGQAFgFAIgEQAHgEALAAQASAAAJANQAKAMAAATIAABlg");
	this.shape_338.setTransform(381.425,99.45);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgNhMIAAgbIAaAAIAAAbg");
	this.shape_339.setTransform(355.25,96.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgEgHABQgKgBgHAHQgHAGgFAKQgFALgDAMQgDAKAAAKIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgFAFgGQAFgFAIgEQAHgEALAAQASAAAJANQAKAMAAATIAABlg");
	this.shape_340.setTransform(308.675,99.45);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgEgNQgDgOAAgQQAAgPADgOQAEgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQALAGAIAKQAGAKAEANQADAOAAAPQAAAQgDAOQgEANgGALQgIAJgLAGQgLAGgPAAQgPAAgLgGgAgZgqQgJAQAAAaQAAAbAJAPQAIAPARAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgRAAgIAPg");
	this.shape_341.setTransform(293.95,99.625);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgNhMIAAgbIAaAAIAAAbg");
	this.shape_342.setTransform(283.05,96.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAKACAJAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgFgEIgHgDIgEgCQgOgHgHgHQgIgIAAgOQAAgSAOgKQAMgKAXAAIAQABIAOADIADABIAAATIgPgEQgJgDgJAAQgLAAgJAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAGAEIADABIAMAHIAJAGQAEAFACAGQADAGAAAIQAAAVgOALQgNAMgZAAQgMAAgKgCg");
	this.shape_343.setTransform(274.05,99.625);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#00A97A").s().p("AgJBnIAAiOIATAAIAACOgAgNhMIAAgbIAaAAIAAAbg");
	this.shape_344.setTransform(264.7,96.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#00A97A").s().p("AghA3QgUgUAAglQAAgiAPgTQAOgTAdAAQANAAAJAEQAKAEAGAHQAFAGADAJQACAIAAAJIgYAAQAAgNgGgIQgGgJgNAAQgIAAgHAFQgHAEgEAIQgEAHgCAJQgBAIAAAJQAAALACALQACALAHAKQAGAJALAGQALAGAQAAIANAAIALgCIAAAQIgOADIgQABQgiAAgTgUg");
	this.shape_345.setTransform(255.05,99.625);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAcIABAAIAFgKIAHgKQAGgFAJgDQAIgDALAAIAAAWQgXAAgMASQgMARAAAdIAAA7g");
	this.shape_346.setTransform(231.375,99.45);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#00A97A").s().p("Ag1BpIAAjOIAVAAIAAAYIABAAQADgJAJgKQAKgIAOAAQAZAAAMATQAMATgBAkQABAPgDANQgDAMgGALQgGALgJAGQgKAGgMAAQgHAAgHgCIgLgHQgFgEgCgFIgEgIIgBAAIAABXgAgNhRQgHAEgEAJQgEAJgCAJQgCAKAAAKQAAAZAIAPQAKARAOAAQAIAAAHgFQAFgFAEgJQAEgIABgLIABgYIgBgRQgBgIgDgJQgDgHgGgFQgGgGgKAAQgHAAgGAGg");
	this.shape_347.setTransform(218.85,102.65);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#00A97A").s().p("AgOBHIAAgeIAdAAIAAAegAgOgoIAAgfIAdAAIAAAfg");
	this.shape_348.setTransform(318.4,107.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAbIABAAIAFgJIAHgKQAGgEAJgEQAIgDALAAIAAAWQgXAAgMASQgMARAAAdIAAA7g");
	this.shape_349.setTransform(309.825,107.75);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAbIABAAIAFgJIAHgKQAGgEAJgEQAIgDALAAIAAAWQgXAAgMASQgMARAAAdIAAA7g");
	this.shape_350.setTransform(257.625,107.75);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgEgNQgCgOAAgQQAAgPACgOQAEgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQAMAGAGAKQAIAKADANQADAOABAPQgBAQgDAOQgDANgIALQgGAJgMAGQgLAGgPAAQgPAAgLgGgAgagqQgIAQgBAaQABAbAIAPQAKAPAQAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgQAAgKAPg");
	this.shape_351.setTransform(244.6,107.925);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#00A97A").s().p("AgbBJIgSgEIAAgTIABAAIARAFQAKACAJAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgKgFIgEgCIgFgEIgHgDIgEgCQgNgHgIgHQgIgIABgOQAAgSAMgKQANgKAWAAIARABIAPADIACABIAAATIgPgEQgJgDgJAAQgLAAgJAGQgIAFAAAIQAAAGAFAEQAFAFAJAEIAGAEIAGADIAGAEIADABIAMAHIAJAGQAEAFADAGQACAGAAAIQAAAVgOALQgOAMgYAAQgLAAgKgCg");
	this.shape_352.setTransform(231.95,107.925);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgFgEIgHgDIgEgCQgOgHgHgHQgIgIAAgOQAAgSAOgKQAMgKAXAAIAQABIAOADIADABIAAATIgPgEQgJgDgJAAQgLAAgJAGQgIAFAAAIQAAAGAFAEQAFAFAKAEIAFAEIAGADIAHAEIACABIALAHIAKAGQAEAFACAGQADAGAAAIQAAAVgOALQgOAMgYAAQgMAAgKgCg");
	this.shape_353.setTransform(220.85,107.925);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#00A97A").s().p("AgpA9QgJgNAAgTIAAhlIAUAAIAABOIAAAUQABAHACAGQACAHAEADQAFAEAHAAQAJAAAHgHQAIgGAFgLQAGgKACgMQACgKAAgKIAAg7IAVAAIAACOIgVAAIAAghIAAAAIgFAMQgDAFgEAGQgGAGgIADQgGAEgMAAQgRAAgKgMg");
	this.shape_354.setTransform(207.55,108.075);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#00A97A").s().p("AgXBoIAAh8IgXAAIAAgSIAXAAIAAgTQABgKACgIQACgIAGgHQAFgFAIgEQAJgEANAAQAMAAAMADIAAASQgMgEgIABQgRAAgHAIQgFAIAAAPIAAAQIAoAAIAAASIgoAAIAAB8g");
	this.shape_355.setTransform(189.05,104.65);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#00A97A").s().p("AgpBWQgMgTABgjQAAgPACgOQADgMAGgLQAGgLAJgGQAJgGANAAQAIAAAGACQAHADAEAEIAHAIIAFAJIAAAAIAAhXIAVAAIAADOIgVAAIAAgZIAAAAQgEAKgJAJQgJAJgPAAQgZAAgMgTgAgOgVQgFAFgEAJQgDAIgCALIgBAYIABARQABAIADAIQADAIAGAGQAGAFAJAAQAIAAAHgFQAGgGAEgIQAEgIACgKQACgKAAgKQAAgZgIgQQgJgQgQAAQgHAAgHAFg");
	this.shape_356.setTransform(162.4,104.875);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#00A97A").s().p("AghBJIAAiOIAUAAIAAAbIABAAIAFgJIAHgKQAGgEAJgEQAIgDALAAIAAAWQgXAAgMASQgMARAAAdIAAA7g");
	this.shape_357.setTransform(130.425,107.75);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#00A97A").s().p("AgaBnIgQgDIgDgBIAAgUIACAAIAOAGQAJACALAAQAMAAAJgEQAIgDAGgHQAEgGABgIQACgJAAgKIAAgZIgBAAQgBAEgDAEIgHAJQgEAEgHADQgHADgHAAQgNAAgKgGQgJgGgGgKQgGgKgCgLQgDgNABgOQgBgPADgNQADgNAGgLQAGgLAJgGQAJgGANAAQAIAAAHACQAGADAFAEQAEAEADAFIADAIIABAAIAAgXIAVAAIAACOQgBAfgPAPQgOAQgeAAQgMAAgIgBgAgNhRQgGAEgDAIQgDAIgCALQgCALAAAMIABASQABAJAEAHQADAIAFAFQAHAFAIAAQAIAAAGgGQAHgFAEgIQAEgIACgKIACgTIgCgTIgFgSQgFgIgHgFQgGgFgIAAQgIAAgFAFg");
	this.shape_358.setTransform(116.85,110.875);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgDgHAAQgKAAgHAGQgHAGgFAKQgFALgDAMQgDALAAAJIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgGAFgFQAFgGAIgEQAHgDALAAQASAAAJAMQAKANAAATIAABlg");
	this.shape_359.setTransform(79.375,107.75);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#00A97A").s().p("AgbBJIgSgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgJgFIgFgCIgGgEIgGgDIgEgCQgNgHgIgHQgHgIAAgOQgBgSANgKQANgKAWAAIAQABIAQADIACABIAAATIgPgEQgJgDgJAAQgMAAgIAGQgIAFAAAIQAAAGAFAEQAFAFAJAEIAGAEIAGADIAHAEIACABIALAHIAKAGQAEAFADAGQACAGAAAIQAAAVgOALQgNAMgZAAQgLAAgKgCg");
	this.shape_360.setTransform(558.05,70.925);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#00A97A").s().p("Ag1BpIAAjOIAVAAIAAAZIAAAAQAEgKAJgKQAJgIAPAAQAZAAAMATQAMAUAAAjQgBAOgCAOQgDAMgGALQgGALgJAGQgKAGgMAAQgIABgGgDIgLgHQgFgEgCgFIgFgJIAAAAIAABYgAgOhSQgGAFgEAJQgEAJgCAKQgCAKAAAJQAAAZAIAPQAJARAPAAQAIAAAHgFQAFgFAEgKQADgHACgLIABgYIgBgRQgBgIgDgJQgDgIgGgFQgGgFgKAAQgHAAgHAFg");
	this.shape_361.setTransform(523.4,73.95);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#00A97A").s().p("AgaBBQgNgFgKgKQgKgJgFgOQgGgNABgOQgBgNAGgNQAFgNAKgJQAKgKANgGQAMgGAOAAQAOAAANAGQANAGAJAKQALAJAFANQAGANgBANQABAOgGANQgGAOgJAJQgKAKgNAFQgNAGgOgBQgNABgNgGgAgWg2QgLAEgIAJQgJAIgEALQgFALAAALQAAAMAFAMQAEAKAJAJQAIAIALAEQAKAFAMAAQANAAAKgFQALgEAIgIQAJgJAEgKQAFgMAAgMQAAgLgFgLQgEgLgJgIQgIgJgLgEQgKgFgNAAQgMAAgKAFgAAOAjIgLgdIgPAAIAAAdIgNAAIAAhJIAYAAIALABQAFAAAEADQAFADACAEQACAFABAIQAAAJgEADQgDADgGACIgBABIAPAfgAgMgGIAPAAQAFAAAEgCQACgCAAgFQAAgKgMAAIgOAAg");
	this.shape_362.setTransform(508.15,64.05);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#00A97A").s().p("Ag1BpIAAjOIAVAAIAAAZIABAAQACgKAKgKQAJgIAPAAQAZAAAMATQALAUAAAjQAAAOgCAOQgDAMgGALQgGALgJAGQgKAGgMAAQgHABgIgDIgLgHQgEgEgDgFIgDgJIgBAAIAABYgAgNhSQgHAFgEAJQgEAJgCAKQgCAKAAAJQAAAZAJAPQAIARAPAAQAJAAAFgFQAGgFAEgKQAEgHABgLIABgYIgBgRQgBgIgDgJQgDgIgGgFQgGgFgKAAQgHAAgGAFg");
	this.shape_363.setTransform(453.95,73.95);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#00A97A").s().p("AgiBpIgWgEIgCAAIAAgZIABABQAJAEANADQAMADAPAAQATABANgKQAMgKAAgQQAAgPgIgIQgIgJgQgJIgDgBIgHgFIgKgFIgEgCIgQgJIgMgKQgGgGgDgHQgEgIAAgKQAAgaATgOQASgOAdAAQAMAAAKABIATAEIACAAIAAAXIgTgGQgMgCgOAAQgRAAgKAIQgLAJAAAOQAAAMAIAIQAJAHAQAJIACABIAHAFIALAGIAAAAIARAJQAHAEAGAHQAGAHAEAIQAEAJAAALQAAAQgGALQgGAMgKAGQgKAIgNACQgNAEgOAAQgNAAgLgCg");
	this.shape_364.setTransform(439.075,67.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#00A97A").s().p("Ag7BnIAAjOIA3AAQAYABAPANQAQANAAAZQAAAMgEAIQgEAJgEAFQgGAFgEADIgIADIAAABIANAFQAHACAGAGQAGAGAEAJQADALAAANQABAQgGALQgFALgKAGQgIAHgMADQgMACgMAAgAgkBUIAbAAIANgBQAIgBAHgEQAIgDAFgJQAFgIAAgNQAAgSgNgLQgMgLgSAAIgeAAgAgkgNIAUAAIAOgBQAGgBAHgDQAHgEAEgIQAFgIABgMQgBgKgEgIQgEgGgFgEQgGgDgHgBIgOgBIgXAAg");
	this.shape_365.setTransform(363.15,67.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#00A97A").s().p("Ag7BnIAAjOIA3AAQAYABAPANQAQANAAAZQAAAMgEAIQgEAJgEAFQgGAFgEADIgIADIAAABIANAFQAHACAGAGQAGAGAEAJQADALAAANQAAAQgFALQgFALgJAGQgKAHgLADQgMACgMAAgAgkBUIAbAAIANgBQAIgBAHgEQAIgDAFgJQAFgIAAgNQAAgSgNgLQgMgLgSAAIgeAAgAgkgNIAUAAIAOgBQAGgBAHgDQAHgEAEgIQAFgIABgMQgBgKgEgIQgEgGgGgEQgFgDgHgBIgOgBIgXAAg");
	this.shape_366.setTransform(339.3,67.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgEgHABQgKAAgHAGQgHAGgFAKQgFALgDAMQgDAKAAAKIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgGAFgFQAFgGAIgDQAHgEALAAQASAAAJANQAKAMAAATIAABlg");
	this.shape_367.setTransform(302.175,70.75);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#00A97A").s().p("AgaBFQgLgGgHgKQgHgKgEgNQgCgOAAgQQAAgPACgOQAEgNAHgKQAHgKALgGQALgGAPAAQAPAAALAGQAMAGAGAKQAIAKADANQADAOABAPQgBAQgDAOQgDANgIALQgGAJgMAGQgLAGgPAAQgPAAgLgGgAgagqQgIAQgBAaQABAbAIAPQAKAPAQAAQARAAAJgPQAJgPAAgbQAAgagJgQQgJgPgRAAQgQAAgKAPg");
	this.shape_368.setTransform(287.45,70.925);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgTQAAgIgCgGQgCgHgEgDQgFgEgHABQgKAAgHAGQgHAGgFAKQgFALgDAMQgDAKAAAKIAAA7IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgGAFgFQAFgGAIgDQAHgEALAAQASAAAJANQAKAMAAATIAABlg");
	this.shape_369.setTransform(229.925,70.75);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#00A97A").s().p("AgoBWQgNgTAAgjQAAgPADgOQADgMAGgLQAGgLAJgGQAJgGANAAQAIAAAGACQAHADAFAEIAGAIIAFAJIAAAAIAAhXIAUAAIAADOIgUAAIAAgZIAAAAQgDAKgKAJQgKAJgNAAQgaAAgLgTgAgNgVQgHAFgDAJQgDAIgCALIgBAYIABARQABAIADAIQADAIAGAGQAHAFAIAAQAIAAAHgFQAGgGAEgIQAEgIACgKQACgKAAgKQAAgZgJgQQgIgQgQAAQgIAAgFAFg");
	this.shape_370.setTransform(192.4,67.875);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#00A97A").s().p("Ag0BpIAAjOIAUAAIAAAZIAAAAQADgKAKgKQAKgIANAAQAaAAALATQAMAUABAjQgBAOgCAOQgDAMgGALQgGALgJAGQgJAGgNAAQgIABgGgDIgMgHQgEgEgCgFIgFgJIAAAAIAABYgAgOhSQgGAFgEAJQgEAJgCAKQgCAKAAAJQAAAZAIAPQAKARAOAAQAJAAAFgFQAHgFADgKQADgHACgLIABgYIgBgRQgBgIgDgJQgDgIgGgFQgGgFgJAAQgIAAgHAFg");
	this.shape_371.setTransform(157.35,73.95);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#00A97A").s().p("ABDBJIAAhOIgBgUQAAgHgCgHQgCgFgEgEQgFgEgHABQgIAAgIAGQgGAGgFAKQgFALgCAMQgCAKAAAKIAAA7IgTAAIAAhOIAAgTQgBgIgCgGQgCgHgEgDQgFgEgHABQgJAAgGAGQgHAGgFAKQgEALgCAMQgDAKAAAKIAAA7IgVAAIAAiOIAVAAIAAAhIAAAAIAFgMQADgGAEgFQAFgGAGgDQAIgEAKAAQAQAAAJAIQAIAKACAOIAAAAIAFgKIAHgKQAGgGAHgCQAHgEAIAAQASAAAJANQALAMAAATIAABlg");
	this.shape_372.setTransform(138.45,70.75);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#00A97A").s().p("Ag0BpIAAjOIAUAAIAAAZIABAAQACgKAKgKQAJgIAPAAQAZAAALATQAMAUAAAjQAAAOgCAOQgDAMgGALQgGALgJAGQgKAGgMAAQgHABgIgDIgLgHQgEgEgDgFIgDgJIgBAAIAABYgAgNhSQgHAFgEAJQgEAJgCAKQgCAKAAAJQAAAZAJAPQAIARAPAAQAJAAAFgFQAGgFAEgKQADgHACgLIABgYIgBgRQgBgIgDgJQgDgIgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_373.setTransform(106.2,73.95);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#00A97A").s().p("AgoBAQgKgKAAgTQAAgMAHgJQAGgIALgGQAKgEAMgCQALgDAKAAIAOgBIAAgQIgBgLQgCgLgHgEQgHgFgKAAQgPAAgGAGQgGAHgBAKIgXAAQAAgHADgHQACgHAGgGQAHgGAJgDQAKgEANAAQAQAAAKAFQAKAEAFAHQAEAHACAHQABAIAAAIIAABjIgTAAIAAgTIgBAAQgEAIgLAHQgMAIgQAAQgRAAgLgLgAAFAIQgHABgIAEQgHADgFAGQgFAGAAAJQAAAJAGAGQAGAFAIAAQAJAAAKgGQAKgGAEgKIAAgBIAEgMIABgPIgMAAIgOABg");
	this.shape_374.setTransform(83.175,70.925);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#00A97A").s().p("AgOBIIAAgeIAdAAIAAAegAgOgpIAAgeIAdAAIAAAeg");
	this.shape_375.setTransform(432.55,103.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#00A97A").s().p("AgpA9QgJgNAAgTIAAhlIAUAAIAABOIABAUQAAAHACAGQACAHAFADQAEAEAHAAQAJAAAIgHQAHgGAFgLQAFgKADgMQACgKAAgKIAAg7IAVAAIAACOIgVAAIAAghIAAAAIgEAMQgDAFgFAGQgFAGgJADQgGAEgMAAQgRAAgKgMg");
	this.shape_376.setTransform(387.85,104.075);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#00A97A").s().p("AgJBoIAAjOIATAAIAADOg");
	this.shape_377.setTransform(376.8,100.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#00A97A").s().p("Ag0BpIAAjOIAUAAIAAAYIAAAAQADgKAKgJQAKgIANAAQAaAAALATQANAUAAAiQAAAPgDAOQgDAMgGALQgGALgJAGQgJAGgNABQgIgBgGgCIgMgGQgEgFgCgEIgFgJIAAAAIAABXgAgOhRQgGAEgEAJQgEAIgCAKQgCAKAAAKQAAAZAIAPQAKARAOAAQAJAAAFgFQAHgGADgIQADgIACgLIABgXIgBgSQgBgIgDgJQgDgHgGgFQgGgGgJAAQgIAAgHAGg");
	this.shape_378.setTransform(366.5,106.95);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#00A97A").s().p("AgaBBQgNgFgJgKQgLgKgFgMQgGgNAAgOQAAgOAGgNQAFgNALgKQAJgJANgGQANgFANAAQAPAAAMAFQANAGAKAJQAKAKAFANQAFANAAAOQAAAOgFANQgFAMgKAKQgKAKgNAFQgMAFgPABQgNgBgNgFgAgWg2QgLAFgIAIQgJAIgEALQgFALAAAMQAAAMAFAKQAEALAJAJQAIAIALAEQALAFALAAQANAAAKgFQALgEAJgIQAIgJAEgLQAFgKAAgMQAAgMgFgLQgEgLgIgIQgJgIgLgFQgKgFgNAAQgLAAgLAFgAAPAkIgMgfIgPAAIAAAfIgOAAIAAhKIAZAAIAKABQAGAAAEADQAEADADAFQACAEAAAIQAAAIgDAEQgDACgGADIgBAAIAPAhgAgMgGIAPAAQAFAAAEgBQADgDAAgFQAAgKgNAAIgOAAg");
	this.shape_379.setTransform(351.25,97.05);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#00A97A").s().p("AgiA3QgSgUgBglQABgiAOgTQAOgTAcAAQAOAAAJAEQAKAEAGAHQAGAGACAJQACAIABAJIgZAAQAAgNgGgIQgGgJgOAAQgHAAgHAFQgHAEgEAIQgDAHgCAJQgCAIAAAJQAAALACALQADALAGAKQAGAJAMAGQAKAGARAAIALAAIALgCIAAAQIgNADIgQABQgiAAgUgUg");
	this.shape_380.setTransform(324.4,103.925);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#00A97A").s().p("Ag1BpIAAjOIAVAAIAAAYIAAAAQAEgKAJgJQAJgIAPAAQAZAAAMATQAMAUgBAiQAAAPgCAOQgDAMgGALQgGALgJAGQgKAGgMABQgIgBgGgCIgLgGQgFgFgCgEIgFgJIAAAAIAABXgAgOhRQgGAEgEAJQgEAIgCAKQgCAKAAAKQAAAZAIAPQAJARAPAAQAIAAAHgFQAFgGAEgIQADgIACgLIABgXIgBgSQgBgIgDgJQgDgHgGgFQgGgGgKAAQgHAAgHAGg");
	this.shape_381.setTransform(297.05,106.95);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#00A97A").s().p("AgiBpIgWgEIgCAAIAAgYIABAAQAJAEANADQAMADAPAAQATAAANgJQAMgKAAgQQAAgPgIgIQgIgJgQgIIgDgCIgHgFIgKgFIgEgCIgQgJIgMgKQgGgFgDgJQgEgHAAgLQAAgZATgOQASgOAdAAQAMAAAKACIATADIACAAIAAAYIgTgHQgMgCgOAAQgRgBgKAJQgLAJAAAOQAAAMAIAHQAJAJAQAIIACABIAHAFIALAFIAAAAIARALQAHAEAGAGQAGAGAEAJQAEAJAAAMQAAAPgGAMQgGALgKAHQgKAGgNAEQgNADgOAAQgNAAgLgCg");
	this.shape_382.setTransform(282.175,100.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#00A97A").s().p("AgJBoIAAiOIATAAIAACOgAgNhLIAAgbIAaAAIAAAbg");
	this.shape_383.setTransform(263.45,100.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#00A97A").s().p("AgpBWQgLgTAAgjQAAgPACgOQADgMAGgLQAGgLAJgGQAKgGAMAAQAIAAAHACQAGADAFAEIAHAIIADAJIABAAIAAhXIAVAAIAADOIgVAAIAAgZIgBAAQgCAKgKAJQgJAJgPAAQgZAAgMgTgAgOgVQgFAFgEAJQgEAIgBALIgBAYIABARQABAIADAIQADAIAGAGQAHAFAIAAQAIAAAGgFQAHgGAEgIQAEgIACgKQACgKAAgKQAAgZgJgQQgIgQgQAAQgIAAgGAFg");
	this.shape_384.setTransform(252.1,100.875);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#00A97A").s().p("AAfBJIAAhOIgBgUQAAgHgCgGQgCgGgEgEQgFgEgHAAQgKAAgHAHQgHAGgFAKQgFALgDALQgDALAAALIAAA6IgUAAIAAiOIAUAAIAAAhIABAAIAFgMQACgFAFgGQAFgFAIgEQAHgEALAAQASAAAJANQAKAMAAATIAABlg");
	this.shape_385.setTransform(230.175,103.75);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#00A97A").s().p("AghA3QgUgUABglQAAgiANgTQAPgTAcAAQAOAAAKAEQAJAEAGAHQAGAGACAJQADAIAAAJIgZAAQAAgNgGgIQgGgJgOAAQgIAAgHAFQgGAEgEAIQgDAHgDAJQgCAIAAAJQABALACALQADALAGAKQAGAJALAGQAKAGASAAIAMAAIAKgCIAAAQIgNADIgQABQgiAAgTgUg");
	this.shape_386.setTransform(180.55,103.925);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#00A97A").s().p("AgcBJIgRgEIAAgTIABAAIARAFQAJACAKAAQAPAAAJgFQAKgGAAgMQAAgIgGgFQgGgFgKgFIgEgCIgFgEIgHgDIgEgCQgOgHgHgHQgIgIABgOQAAgSAMgKQANgKAWAAIARABIAOADIADABIAAATIgPgEQgJgDgJAAQgLAAgJAGQgIAFAAAIQAAAGAFAEQAFAFAJAEIAGAEIAGADIAGAEIADABIAMAHIAJAGQAEAFACAGQADAGAAAIQAAAVgOALQgNAMgZAAQgMAAgKgCg");
	this.shape_387.setTransform(168.4,103.925);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#00A97A").s().p("AAfBoIAAhQIgBgTQAAgGgCgHQgCgGgEgEQgFgDgHAAQgKAAgHAHQgHAFgFAKQgFALgDALQgDAMAAAKIAAA7IgUAAIAAjOIAUAAIAABhIABAAQACgHADgFQACgGAFgGQAFgFAIgEQAHgDALAAQASAAAJAMQAKAMAAATIAABmg");
	this.shape_388.setTransform(147.475,100.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#00A97A").s().p("AgIBXQgIgIgBgUIAAhbIgXAAIAAgRIAXAAIAAghIAUgNIAAAuIAmAAIAAARIgmAAIAABXIABAIQABAEACAEQADADAEADQAFACAHAAIAHAAIAFgCIACgBIAAATIgSABQgVAAgJgJg");
	this.shape_389.setTransform(92.85,101.775);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#00A97A").s().p("AgJBoIAAjOIATAAIAADOg");
	this.shape_390.setTransform(76.3,100.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#00A97A").s().p("AgLBoIAAjOIAXAAIAADOg");
	this.shape_391.setTransform(68.825,100.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_320,p:{x:47.225,y:48.8}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317,p:{x:92.225,y:52.025}},{t:this.shape_316},{t:this.shape_315,p:{x:115.575,y:52.025}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311,p:{x:162.225,y:51.85}},{t:this.shape_310,p:{x:169.45,y:48.8}},{t:this.shape_309,p:{x:178.8,y:52.025}},{t:this.shape_308},{t:this.shape_307,p:{x:197.8,y:48.8}},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302,p:{x:268.35,y:48.8}},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299,p:{x:296.7,y:48.8}},{t:this.shape_298,p:{x:307.875,y:51.85}},{t:this.shape_297,p:{x:320.5,y:49.875}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293,p:{x:373.15,y:48.975}},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288,p:{x:421.525,y:52.025}},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285,p:{x:461.05,y:52.025}},{t:this.shape_284,p:{x:470.05,y:48.8}},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281,p:{x:501.525,y:52.025}},{t:this.shape_280},{t:this.shape_279,p:{x:536.725,y:52.025}},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276,p:{x:75.075,y:89.025}},{t:this.shape_275,p:{x:89.35,y:89.025}},{t:this.shape_274,p:{x:102.125,y:89.025}},{t:this.shape_273},{t:this.shape_272,p:{x:131.45,y:92.05}},{t:this.shape_271},{t:this.shape_270,p:{x:152.8,y:89.175}},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:242.8,y:85.8}},{t:this.shape_264,p:{x:250.05,y:85.8}},{t:this.shape_263},{t:this.shape_262,p:{x:275.425,y:89.025}},{t:this.shape_261},{t:this.shape_260,p:{x:303.3,y:89.175}},{t:this.shape_259,p:{x:314.5,y:85.8}},{t:this.shape_258,p:{x:323.3,y:86.875}},{t:this.shape_257,p:{x:334.875,y:89.025}},{t:this.shape_256},{t:this.shape_255,p:{x:359.5,y:85.8}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251,p:{x:415.35,y:89.025}},{t:this.shape_250},{t:this.shape_249,p:{x:444.8,y:89.025}},{t:this.shape_248,p:{x:456.95,y:89}}]},1).to({state:[]},1).to({state:[{t:this.shape_320,p:{x:184.675,y:96.4}},{t:this.shape_315,p:{x:195.825,y:99.625}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_281,p:{x:241.725,y:99.625}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341,p:{x:293.95,y:99.625}},{t:this.shape_340},{t:this.shape_274,p:{x:322.875,y:99.625}},{t:this.shape_293,p:{x:343.9,y:96.575}},{t:this.shape_339},{t:this.shape_284,p:{x:370.25,y:96.4}},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336,p:{x:405.75,y:99.775}},{t:this.shape_335},{t:this.shape_264,p:{x:428.05,y:96.4}},{t:this.shape_334},{t:this.shape_333},{t:this.shape_262,p:{x:467.875,y:99.625}},{t:this.shape_332},{t:this.shape_259,p:{x:500.25,y:96.4}},{t:this.shape_331},{t:this.shape_330},{t:this.shape_279,p:{x:212.525,y:136.625}},{t:this.shape_329},{t:this.shape_257,p:{x:239.575,y:136.625}},{t:this.shape_328},{t:this.shape_327},{t:this.shape_255,p:{x:279.2,y:133.4}},{t:this.shape_326,p:{x:290.25,y:136.775}},{t:this.shape_285,p:{x:303.55,y:136.625}},{t:this.shape_325},{t:this.shape_298,p:{x:331.975,y:136.45}},{t:this.shape_324,p:{x:345.05,y:133.35}},{t:this.shape_323},{t:this.shape_309,p:{x:369.6,y:136.625}},{t:this.shape_249,p:{x:382.25,y:136.625}},{t:this.shape_322},{t:this.shape_276,p:{x:418.075,y:136.625}},{t:this.shape_297,p:{x:430.75,y:134.475}},{t:this.shape_321,p:{x:450.075,y:133.525}},{t:this.shape_248,p:{x:461.6,y:136.6}},{t:this.risp9},{t:this.risp8},{t:this.risp7},{t:this.risp6}]},1).to({state:[]},1).to({state:[{t:this.shape_320,p:{x:72.025,y:67.7}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_251,p:{x:120.15,y:70.925}},{t:this.shape_372},{t:this.shape_371},{t:this.shape_317,p:{x:170.425,y:70.925}},{t:this.shape_370},{t:this.shape_310,p:{x:203.75,y:67.7}},{t:this.shape_307,p:{x:218.75,y:67.7}},{t:this.shape_369},{t:this.shape_324,p:{x:243,y:67.65}},{t:this.shape_326,p:{x:254.25,y:71.075}},{t:this.shape_285,p:{x:267.55,y:70.925}},{t:this.shape_302,p:{x:276.55,y:67.7}},{t:this.shape_368},{t:this.shape_367},{t:this.shape_288,p:{x:316.375,y:70.925}},{t:this.shape_366},{t:this.shape_365},{t:this.shape_311,p:{x:376.475,y:70.75}},{t:this.shape_315,p:{x:386.475,y:70.925}},{t:this.shape_260,p:{x:401.4,y:71.075}},{t:this.shape_298,p:{x:416.525,y:70.75}},{t:this.shape_364},{t:this.shape_363},{t:this.shape_279,p:{x:467.025,y:70.925}},{t:this.shape_275,p:{x:481.3,y:70.925}},{t:this.shape_281,p:{x:494.075,y:70.925}},{t:this.shape_362},{t:this.shape_361},{t:this.shape_265,p:{x:533.7,y:67.7}},{t:this.shape_270,p:{x:544.75,y:71.075}},{t:this.shape_360},{t:this.shape_299,p:{x:68.2,y:104.7}},{t:this.shape_359},{t:this.shape_258,p:{x:92,y:105.775}},{t:this.shape_274,p:{x:103.575,y:107.925}},{t:this.shape_358},{t:this.shape_357},{t:this.shape_276,p:{x:140.425,y:107.925}},{t:this.shape_356},{t:this.shape_262,p:{x:176.875,y:107.925}},{t:this.shape_355},{t:this.shape_255,p:{x:196.5,y:104.7}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352,p:{x:231.95,y:107.925}},{t:this.shape_351},{t:this.shape_350},{t:this.shape_284,p:{x:264.85,y:104.7}},{t:this.shape_272,p:{x:284,y:110.95}},{t:this.shape_257,p:{x:297.425,y:107.925}},{t:this.shape_349},{t:this.shape_348}]},1).to({state:[]},1).to({state:[{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_341,p:{x:104.95,y:103.925}},{t:this.shape_336,p:{x:119.55,y:104.075}},{t:this.shape_275,p:{x:133.9,y:103.925}},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_311,p:{x:192.425,y:103.75}},{t:this.shape_274,p:{x:202.775,y:103.925}},{t:this.shape_262,p:{x:216.075,y:103.925}},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_276,p:{x:310.125,y:103.925}},{t:this.shape_380},{t:this.shape_257,p:{x:337.175,y:103.925}},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_352,p:{x:401.15,y:103.925}},{t:this.shape_321,p:{x:421.025,y:100.825}},{t:this.shape_375}]},1).to({state:[]},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(271.8,223.1,900.2,506.8);
p.frameBounds = [rect, new cjs.Rectangle(389.8,272.3,632.2,425.2), new cjs.Rectangle(502.8,379.2,535.2,332.3), new cjs.Rectangle(488.5,319.9,529.5,379.5), new cjs.Rectangle(506.5,393.7,519.6,308.8), new cjs.Rectangle(414.6,291.2,618.4,429.3), new cjs.Rectangle(504.9,376.1,524.2,330.4), new cjs.Rectangle(415,324.2,604.1,385.3), new cjs.Rectangle(495.9,387.9,540.2,314.6), new cjs.Rectangle(428,291.6,608,410.9), new cjs.Rectangle(509.4,387.9,526.6,314.6), new cjs.Rectangle(423.6,306,612.4,396.5), new cjs.Rectangle(518.4,407.7,497.6,292.8), new cjs.Rectangle(468,277.6,568,437.5)];
// library properties:
lib.properties = {
	id: 'F3D6A1464077734089B85703905D27DE',
	width: 704,
	height: 486,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Logo_Claim_A3_RGB.png?1763638572598", id:"Logo_Claim_A3_RGB"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1763638572598", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1763638572598", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1763638572598", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F3D6A1464077734089B85703905D27DE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;