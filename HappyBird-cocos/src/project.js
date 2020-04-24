window.__require=function e(t,o,n){function r(i,a){if(!o[i]){if(!t[i]){var p=i.split("/");if(p=p[p.length-1],!t[p]){var u="function"==typeof __require&&__require;if(!a&&u)return u(p,!0);if(c)return c(p,!0);throw new Error("Cannot find module '"+i+"'")}i=p}var s=o[i]={exports:{}};t[i][0].call(s.exports,function(e){return r(t[i][1][e]||e)},s,s.exports,e,t,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({Background:[function(e,t,o){"use strict";cc._RF.push(t,"46e93WEJ4tMvLwFFG7XeJ0T","Background"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./Game"),r=cc._decorator,c=r.ccclass,i=r.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.oneBackground=null,t.towBackground=null,t.moveSpeed=5,t}return __extends(t,e),t.prototype.update=function(e){n.default.isDie()||(this.moveBG(),this.watchBG())},t.prototype.moveBG=function(){this.oneBackground.x-=this.moveSpeed,this.towBackground.x-=this.moveSpeed},t.prototype.watchBG=function(){this.oneBackground.x<-1400&&(this.oneBackground.x=1420),this.towBackground.x<-1400&&(this.towBackground.x=1420)},__decorate([i(cc.Node)],t.prototype,"oneBackground",void 0),__decorate([i(cc.Node)],t.prototype,"towBackground",void 0),__decorate([i],t.prototype,"moveSpeed",void 0),t=__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{"./Game":"Game"}],Game:[function(e,t,o){"use strict";cc._RF.push(t,"f885fNvdDJK46oPSlF/I26C","Game"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./Player"),r=cc._decorator,c=r.ccclass,i=r.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.startButton=null,t.resetButton=null,t.endScore=null,t}var o;return __extends(t,e),o=t,t.prototype.update=function(){this.endScore.string="\u60a8\u7684\u5f97\u5206\uff1a"+o.score},t.addScore=function(){return o.score+=1,o.score},t.death=function(){this.die=!0,this.resetButton.active=!0},t.isDie=function(){return this.die},t.prototype.startGame=function(){o.score=0,this.startButton.active=!1,this.resetButton.active=!1,o.die=!1},t.prototype.resetGame=function(){cc.director.loadScene("Game")},t.prototype.onLoad=function(){var e=this;o.resetButton=this.resetButton,this.node.on(cc.Node.EventType.TOUCH_START,function(t){e.player.jump.call(e.player,t)},this)},t.score=0,t.die=!0,__decorate([i(cc.Node)],t.prototype,"startButton",void 0),__decorate([i(cc.Node)],t.prototype,"resetButton",void 0),__decorate([i(cc.Label)],t.prototype,"endScore",void 0),__decorate([i(n.default)],t.prototype,"player",void 0),t=o=__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{"./Player":"Player"}],Pipeline:[function(e,t,o){"use strict";cc._RF.push(t,"37cfbtS5QNOapHDgKrKRpV2","Pipeline"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./Game"),r=cc._decorator,c=r.ccclass,i=r.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.moveSpeed=5,t}return __extends(t,e),t.prototype.onLoad=function(){this.randomPos()},t.prototype.update=function(e){n.default.isDie()||(this.node.x-=this.moveSpeed,this.movePos())},t.prototype.movePos=function(){this.node.x<-800&&(this.node.x=1200,this.randomPos())},t.prototype.randomPos=function(){this.node.y=Math.round(250*Math.random())-100},__decorate([i],t.prototype,"moveSpeed",void 0),t=__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{"./Game":"Game"}],Player:[function(e,t,o){"use strict";cc._RF.push(t,"deabbo+YedP1I2QkzLyh/43","Player"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,r=n.ccclass,c=n.property,i=e("./Game"),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.showScore=null,t.downSpeed=3,t.jumpDuration=1,t.jumpHeight=200,t}return __extends(t,e),t.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.jump,this)},t.prototype.update=function(e){i.default.isDie()||(this.node.y-=this.downSpeed)},t.prototype.start=function(){},t.prototype.onCollisionExit=function(e,t){"AddScore<BoxCollider>"===e.name&&(this.showScore.string="\u5f97\u5206\uff1a"+i.default.addScore())},t.prototype.onCollisionEnter=function(e){"Up<BoxCollider>"!==e.name&&"Bottom<BoxCollider>"!==e.name&&"GrassThinSprite<BoxCollider>"!==e.name||(i.default.death(),this.die())},t.prototype.die=function(){var e=this.getComponent(cc.Animation);cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.jump,this),this.node.stopAllActions(),e.play("Die")},t.prototype.jump=function(e){if(!i.default.isDie()){console.log(e);var t=this.setJumpAction();switch(e.keyCode){case cc.macro.KEY.space:this.node.runAction(t)}switch(e.type){case"touchstart":this.node.runAction(t)}}},t.prototype.setJumpAction=function(){var e=cc.moveBy(this.jumpDuration,cc.v2(0,this.jumpHeight)).easing(cc.easeCubicActionOut()),t=cc.moveBy(0,cc.v2(0,0)).easing(cc.easeCubicActionIn());return cc.sequence(e,t)},__decorate([c(cc.Label)],t.prototype,"showScore",void 0),__decorate([c],t.prototype,"downSpeed",void 0),__decorate([c],t.prototype,"jumpDuration",void 0),__decorate([c],t.prototype,"jumpHeight",void 0),t=__decorate([r],t)}(cc.Component);o.default=a,cc._RF.pop()},{"./Game":"Game"}]},{},["Background","Game","Pipeline","Player"]);