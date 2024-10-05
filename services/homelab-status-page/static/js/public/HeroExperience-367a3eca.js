import{E as Ao,g as De}from"./index.js";import{n as xd}from"./index-1fcef937.js";import{g as yd,c as bd}from"./_commonjsHelpers-725317a4.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="139",Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_d=0,Hl=1,Ad=2,Cu=1,wd=2,Yr=3,vr=0,en=1,zn=2,Eu=1,ni=0,pr=1,ii=2,Gl=3,Vl=4,Md=5,cr=100,Sd=101,Cd=102,Wl=103,jl=104,Ed=200,Td=201,Ld=202,Pd=203,Tu=204,Lu=205,Id=206,Rd=207,kd=208,Bd=209,Dd=210,Fd=0,Od=1,zd=2,Va=3,Nd=4,Ud=5,Hd=6,Gd=7,wo=0,Vd=1,Wd=2,wn=0,Pu=1,Iu=2,Ru=3,ku=4,jd=5,Bu=300,xr=301,yr=302,Wa=303,ja=304,Mo=306,li=1e3,ln=1001,yo=1002,Pt=1003,qa=1004,Xa=1005,Rt=1006,Du=1007,Ti=1008,ci=1009,qd=1010,Xd=1011,ts=1012,Yd=1013,mo=1014,ti=1015,mr=1016,Zd=1017,$d=1018,gr=1020,Kd=1021,Jd=1022,Qt=1023,Qd=1024,ef=1025,Mi=1026,br=1027,tf=1028,nf=1029,rf=1030,sf=1031,of=1033,go=33776,ta=33777,na=33778,vo=33779,Ya=35840,ql=35841,Za=35842,Xl=35843,Fu=36196,$a=37492,Ka=37496,Ja=37808,Yl=37809,Zl=37810,$l=37811,Kl=37812,Jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,rc=37819,sc=37820,oc=37821,Qa=36492,af=2200,lf=2201,cf=2202,ns=2300,_r=2301,ia=2302,ur=2400,hr=2401,bo=2402,ml=2500,Ou=2501,uf=0,hf=1,zu=2,Mn=3e3,We=3001,df=3200,ff=3201,Li=0,pf=1,Dn="srgb",wi="srgb-linear",ra=7680,mf=519,is=35044,rs=35048,ac="300 es",el=1035;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Nt=[];for(let o=0;o<256;o++)Nt[o]=(o<16?"0":"")+o.toString(16);let lc=1234567;const $r=Math.PI/180,ss=180/Math.PI;function cn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[o&255]+Nt[o>>8&255]+Nt[o>>16&255]+Nt[o>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function kt(o,e,t){return Math.max(e,Math.min(t,o))}function gl(o,e){return(o%e+e)%e}function gf(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function vf(o,e,t){return o!==e?(t-o)/(e-o):0}function Kr(o,e,t){return(1-t)*o+t*e}function xf(o,e,t,n){return Kr(o,e,1-Math.exp(-t*n))}function yf(o,e=1){return e-Math.abs(gl(o,e*2)-e)}function bf(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function _f(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Af(o,e){return o+Math.floor(Math.random()*(e-o+1))}function wf(o,e){return o+Math.random()*(e-o)}function Mf(o){return o*(.5-Math.random())}function Sf(o){o!==void 0&&(lc=o);let e=lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cf(o){return o*$r}function Ef(o){return o*ss}function tl(o){return(o&o-1)===0&&o!==0}function Nu(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function _o(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Tf(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),d=s((e-n)/2),f=r((n-e)/2),p=s((n-e)/2);switch(i){case"XYX":o.set(a*u,l*h,l*d,a*c);break;case"YZY":o.set(l*d,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*d,a*u,a*c);break;case"XZX":o.set(a*u,l*p,l*f,a*c);break;case"YXY":o.set(l*f,a*u,l*p,a*c);break;case"ZYZ":o.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Lf(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pf(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var If=Object.freeze({__proto__:null,DEG2RAD:$r,RAD2DEG:ss,generateUUID:cn,clamp:kt,euclideanModulo:gl,mapLinear:gf,inverseLerp:vf,lerp:Kr,damp:xf,pingpong:yf,smoothstep:bf,smootherstep:_f,randInt:Af,randFloat:wf,randFloatSpread:Mf,seededRandom:Sf,degToRad:Cf,radToDeg:Ef,isPowerOfTwo:tl,ceilPowerOfTwo:Nu,floorPowerOfTwo:_o,setQuaternionFromProperEuler:Tf,normalize:Pf,denormalize:Lf});class le{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}le.prototype.isVector2=!0;class Ut{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],m=i[0],g=i[3],x=i[6],v=i[1],A=i[4],w=i[7],M=i[2],k=i[5],U=i[8];return r[0]=s*m+a*v+l*M,r[3]=s*g+a*A+l*k,r[6]=s*x+a*w+l*U,r[1]=c*m+u*v+h*M,r[4]=c*g+u*A+h*k,r[7]=c*x+u*w+h*U,r[2]=d*m+f*v+p*M,r[5]=d*g+f*A+p*k,r[8]=d*x+f*w+p*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*l-u*r,f=c*r-s*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(a*n-i*s)*m,e[3]=d*m,e[4]=(u*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(s*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*s+n*c,i[6]=t*a+n*u,i[1]=-n*r+t*l,i[4]=-n*s+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Ut.prototype.isMatrix3=!0;function Uu(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function os(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Si(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function xo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const sa={[Dn]:{[wi]:Si},[wi]:{[Dn]:xo}},fn={legacyMode:!0,get workingColorSpace(){return wi},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(sa[e]&&sa[e][t]!==void 0){const n=sa[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},It={r:0,g:0,b:0},pn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function oa(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Bs(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Le{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=wi){return this.r=e,this.g=t,this.b=n,fn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=wi){if(e=gl(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=oa(s,r,e+1/3),this.g=oa(s,r,e),this.b=oa(s,r,e-1/3)}return fn.toWorkingColorSpace(this,i),this}setStyle(e,t=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,fn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,fn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,fn.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,fn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Dn){const n=Hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return fn.fromWorkingColorSpace(Bs(this,It),e),kt(It.r*255,0,255)<<16^kt(It.g*255,0,255)<<8^kt(It.b*255,0,255)<<0}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wi){fn.fromWorkingColorSpace(Bs(this,It),t);const n=It.r,i=It.g,r=It.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wi){return fn.fromWorkingColorSpace(Bs(this,It),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Dn){return fn.fromWorkingColorSpace(Bs(this,It),e),e!==Dn?`color(${e} ${It.r} ${It.g} ${It.b})`:`rgb(${It.r*255|0},${It.g*255|0},${It.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(pn),pn.h+=e,pn.s+=t,pn.l+=n,this.setHSL(pn.h,pn.s,pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(ks);const n=Kr(pn.h,ks.h,t),i=Kr(pn.s,ks.s,t),r=Kr(pn.l,ks.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Le.NAMES=Hu;Le.prototype.isColor=!0;Le.prototype.r=1;Le.prototype.g=1;Le.prototype.b=1;let ji;class Pi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=os("canvas")),ji.width=e.width,ji.height=e.height;const n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Si(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gu{constructor(e=null){this.uuid=cn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(aa(i[s].image)):r.push(aa(i[s]))}else r=aa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function aa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Pi.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Gu.prototype.isSource=!0;let Rf=0;class Et extends hi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=ln,i=ln,r=Rt,s=Ti,a=Qt,l=ci,c=1,u=Mn){super(),Object.defineProperty(this,"id",{value:Rf++}),this.uuid=cn(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case li:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case li:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Bu;Et.prototype.isTexture=!0;class vt{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],m=l[2],g=l[6],x=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,w=(f+1)/2,M=(x+1)/2,k=(u+d)/4,U=(h+m)/4,V=(p+g)/4;return A>w&&A>M?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=k/n,r=U/n):w>M?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=k/i,r=V/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=U/r,i=V/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-m)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}vt.prototype.isVector4=!0;class tn extends hi{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.prototype.isWebGLRenderTarget=!0;class So extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}So.prototype.isDataArrayTexture=!0;class kf extends tn{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new So(null,e,t,n),this.texture.isRenderTargetTexture=!0}}kf.prototype.isWebGLArrayRenderTarget=!0;class vl extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}vl.prototype.isData3DTexture=!0;class Bf extends tn{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new vl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}Bf.prototype.isWebGL3DRenderTarget=!0;class Df extends tn{constructor(e,t,n,i={}){super(e,t,i);const r=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=r.clone(),this.texture[s].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Df.prototype.isWebGLMultipleRenderTargets=!0;class Ht{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[s+0],f=r[s+1],p=r[s+2],m=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(h!==m||l!==d||c!==f||u!==p){let g=1-a;const x=l*d+c*f+u*p+h*m,v=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){const M=Math.sqrt(A),k=Math.atan2(M,x*v);g=Math.sin(g*k)/M,a=Math.sin(a*k)/M}const w=a*v;if(l=l*g+d*w,c=c*g+f*w,u=u*g+p*w,h=h*g+m*w,g===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],d=r[s+1],f=r[s+2],p=r[s+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(s){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ht.prototype.isQuaternion=!0;class L{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-s*t,d=-r*t-s*n-a*i;return this.x=c*l+d*-r+u*-a-h*-s,this.y=u*l+d*-s+h*-r-c*-a,this.z=h*l+d*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}L.prototype.isVector3=!0;const la=new L,cc=new Ht;class hn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>s&&(s=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>s&&(s=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,a=r.count;s<a;s++)vi.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox),ca.applyMatrix4(e.matrixWorld),this.union(ca);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Ds.subVectors(this.max,Or),qi.subVectors(e.a,Or),Xi.subVectors(e.b,Or),Yi.subVectors(e.c,Or),Wn.subVectors(Xi,qi),jn.subVectors(Yi,Xi),xi.subVectors(qi,Yi);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-xi.z,xi.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,xi.z,0,-xi.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-xi.y,xi.x,0];return!ua(t,qi,Xi,Yi,Ds)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,qi,Xi,Yi,Ds))?!1:(Fs.crossVectors(Wn,jn),t=[Fs.x,Fs.y,Fs.z],ua(t,qi,Xi,Yi,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}hn.prototype.isBox3=!0;const Tn=[new L,new L,new L,new L,new L,new L,new L,new L],vi=new L,ca=new hn,qi=new L,Xi=new L,Yi=new L,Wn=new L,jn=new L,xi=new L,Or=new L,Ds=new L,Fs=new L,yi=new L;function ua(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){yi.fromArray(o,r);const a=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ff=new hn,uc=new L,Os=new L,ha=new L;class Ii{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ff.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ha.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Os.set(0,0,1).multiplyScalar(e.radius):Os.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(uc.copy(e.center).add(Os)),this.expandByPoint(uc.copy(e.center).sub(Os)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new L,da=new L,zs=new L,qn=new L,fa=new L,Ns=new L,pa=new L;class Ri{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.direction).multiplyScalar(t).add(this.origin),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){da.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,s=-this.direction.dot(zs),a=qn.dot(this.direction),l=-qn.dot(zs),c=qn.lengthSq(),u=Math.abs(1-s*s);let h,d,f,p;if(u>0)if(h=s*l-a,d=s*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){const m=1/u;h*=m,d*=m,f=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(zs).multiplyScalar(d).add(da),f}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,r){fa.subVectors(t,e),Ns.subVectors(n,e),pa.crossVectors(fa,Ns);let s=this.direction.dot(pa),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(Ns.crossVectors(qn,Ns));if(l<0)return null;const c=a*this.direction.dot(fa.cross(qn));if(c<0||l+c>s)return null;const u=-a*qn.dot(pa);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,a,l,c,u,h,d,f,p,m,g){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=s,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=d,x[3]=f,x[7]=p,x[11]=m,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),s=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,f=s*h,p=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=p+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,m=c*h;t[0]=d+m*a,t[4]=p*a-f,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=f*a-p,t[6]=m+d*a,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,m=c*h;t[0]=d-m*a,t[4]=-s*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=s*u,t[9]=m-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*h,p=a*u,m=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,p=a*l,m=a*c;t[0]=l*u,t[4]=m-d*h,t[8]=p*h+f,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-m*h}else if(e.order==="XZY"){const d=s*l,f=s*c,p=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=s*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,zf)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Xn.crossVectors(n,Kt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Xn.crossVectors(n,Kt)),Xn.normalize(),Us.crossVectors(Kt,Xn),i[0]=Xn.x,i[4]=Us.x,i[8]=Kt.x,i[1]=Xn.y,i[5]=Us.y,i[9]=Kt.y,i[2]=Xn.z,i[6]=Us.z,i[10]=Kt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],m=n[6],g=n[10],x=n[14],v=n[3],A=n[7],w=n[11],M=n[15],k=i[0],U=i[4],V=i[8],oe=i[12],j=i[1],C=i[5],O=i[9],re=i[13],G=i[2],q=i[6],Z=i[10],te=i[14],W=i[3],ae=i[7],ce=i[11],xe=i[15];return r[0]=s*k+a*j+l*G+c*W,r[4]=s*U+a*C+l*q+c*ae,r[8]=s*V+a*O+l*Z+c*ce,r[12]=s*oe+a*re+l*te+c*xe,r[1]=u*k+h*j+d*G+f*W,r[5]=u*U+h*C+d*q+f*ae,r[9]=u*V+h*O+d*Z+f*ce,r[13]=u*oe+h*re+d*te+f*xe,r[2]=p*k+m*j+g*G+x*W,r[6]=p*U+m*C+g*q+x*ae,r[10]=p*V+m*O+g*Z+x*ce,r[14]=p*oe+m*re+g*te+x*xe,r[3]=v*k+A*j+w*G+M*W,r[7]=v*U+A*C+w*q+M*ae,r[11]=v*V+A*O+w*Z+M*ce,r[15]=v*oe+A*re+w*te+M*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],m=e[7],g=e[11],x=e[15];return p*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+m*(+t*l*f-t*c*d+r*s*d-i*s*f+i*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*s*h+n*s*f+r*a*u-n*c*u)+x*(-i*a*u-t*l*h+t*a*d+i*s*h-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],m=e[13],g=e[14],x=e[15],v=h*g*c-m*d*c+m*l*f-a*g*f-h*l*x+a*d*x,A=p*d*c-u*g*c-p*l*f+s*g*f+u*l*x-s*d*x,w=u*m*c-p*h*c+p*a*f-s*m*f-u*a*x+s*h*x,M=p*h*l-u*m*l-p*a*d+s*m*d+u*a*g-s*h*g,k=t*v+n*A+i*w+r*M;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return e[0]=v*U,e[1]=(m*d*r-h*g*r-m*i*f+n*g*f+h*i*x-n*d*x)*U,e[2]=(a*g*r-m*l*r+m*i*c-n*g*c-a*i*x+n*l*x)*U,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*U,e[4]=A*U,e[5]=(u*g*r-p*d*r+p*i*f-t*g*f-u*i*x+t*d*x)*U,e[6]=(p*l*r-s*g*r-p*i*c+t*g*c+s*i*x-t*l*x)*U,e[7]=(s*d*r-u*l*r+u*i*c-t*d*c-s*i*f+t*l*f)*U,e[8]=w*U,e[9]=(p*h*r-u*m*r-p*n*f+t*m*f+u*n*x-t*h*x)*U,e[10]=(s*m*r-p*a*r+p*n*c-t*m*c-s*n*x+t*a*x)*U,e[11]=(u*a*r-s*h*r-u*n*c+t*h*c+s*n*f-t*a*f)*U,e[12]=M*U,e[13]=(u*m*i-p*h*i+p*n*d-t*m*d-u*n*g+t*h*g)*U,e[14]=(p*a*i-s*m*i-p*n*l+t*m*l+s*n*g-t*a*g)*U,e[15]=(s*h*i-u*a*i+u*n*l-t*h*l-s*n*d+t*a*d)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,u=s+s,h=a+a,d=r*c,f=r*u,p=r*h,m=s*u,g=s*h,x=a*h,v=l*c,A=l*u,w=l*h,M=n.x,k=n.y,U=n.z;return i[0]=(1-(m+x))*M,i[1]=(f+w)*M,i[2]=(p-A)*M,i[3]=0,i[4]=(f-w)*k,i[5]=(1-(d+x))*k,i[6]=(g+v)*k,i[7]=0,i[8]=(p+A)*U,i[9]=(g-v)*U,i[10]=(1-(d+m))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zi.set(i[0],i[1],i[2]).length();const s=Zi.set(i[4],i[5],i[6]).length(),a=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const c=1/r,u=1/s,h=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(s+r)/(s-r),f=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,d=(n+i)*c,f=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Ve.prototype.isMatrix4=!0;const Zi=new L,mn=new Ve,Of=new L(0,0,0),zf=new L(1,1,1),Xn=new L,Us=new L,Kt=new L,hc=new Ve,dc=new Ht;class ki{constructor(e=0,t=0,n=0,i=ki.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dc.setFromEuler(this),this.setFromQuaternion(dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ki.prototype.isEuler=!0;ki.DefaultOrder="XYZ";ki.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nf=0;const fc=new L,$i=new Ht,Pn=new Ve,Hs=new L,zr=new L,Uf=new L,Hf=new Ht,pc=new L(1,0,0),mc=new L(0,1,0),gc=new L(0,0,1),Gf={type:"added"},vc={type:"removed"};class ht extends hi{constructor(){super(),Object.defineProperty(this,"id",{value:Nf++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DefaultUp.clone();const e=new L,t=new ki,n=new Ht,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ut}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ht.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(pc,e)}rotateY(e){return this.rotateOnAxis(mc,e)}rotateZ(e){return this.rotateOnAxis(gc,e)}translateOnAxis(e,t){return fc.copy(e).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pc,e)}translateY(e){return this.translateOnAxis(mc,e)}translateZ(e){return this.translateOnAxis(gc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(zr,Hs,this.up):Pn.lookAt(Hs,zr,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Pn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(vc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),p=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DefaultUp=new L(0,1,0);ht.DefaultMatrixAutoUpdate=!0;ht.prototype.isObject3D=!0;const gn=new L,In=new L,ma=new L,Rn=new L,Ki=new L,Ji=new L,xc=new L,ga=new L,va=new L,xa=new L;class Bt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gn.subVectors(i,t),In.subVectors(n,t),ma.subVectors(e,t);const s=gn.dot(gn),a=gn.dot(In),l=gn.dot(ma),c=In.dot(In),u=In.dot(ma),h=s*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,p=(s*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,Rn),l.set(0,0),l.addScaledVector(r,Rn.x),l.addScaledVector(s,Rn.y),l.addScaledVector(a,Rn.z),l}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),In.subVectors(e,t),gn.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),gn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Bt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Ki.subVectors(i,n),Ji.subVectors(r,n),ga.subVectors(e,n);const l=Ki.dot(ga),c=Ji.dot(ga);if(l<=0&&c<=0)return t.copy(n);va.subVectors(e,i);const u=Ki.dot(va),h=Ji.dot(va);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Ki,s);xa.subVectors(e,r);const f=Ki.dot(xa),p=Ji.dot(xa);if(p>=0&&f<=p)return t.copy(r);const m=f*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ji,a);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return xc.subVectors(r,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(xc,a);const x=1/(g+m+d);return s=m*x,a=d*x,t.copy(n).addScaledVector(Ki,s).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vf=0;class Ct extends hi{constructor(){super(),Object.defineProperty(this,"id",{value:Vf++}),this.uuid=cn(),this.name="",this.type="Material",this.fog=!0,this.blending=pr,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Tu,this.blendDst=Lu,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Eu;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Ct.prototype.isMaterial=!0;Ct.fromType=function(){return null};class mt extends Ct{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}mt.prototype.isMeshBasicMaterial=!0;const Tt=new L,Gs=new le;class xt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=is,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new Le),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new le),t[n++]=s.x,t[n++]=s.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new L),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new vt),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==is&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}xt.prototype.isBufferAttribute=!0;class Vu extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wu extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wf extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Wf.prototype.isFloat16BufferAttribute=!0;class bt extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jf=0;const on=new Ve,ya=new ht,Qi=new L,Jt=new hn,Nr=new hn,Ft=new L;class dt extends hi{constructor(){super(),Object.defineProperty(this,"id",{value:jf++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Wu:Vu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(Jt.min,Nr.min),Jt.expandByPoint(Ft),Ft.addVectors(Jt.max,Nr.max),Jt.expandByPoint(Ft)):(Jt.expandByPoint(Nr.min),Jt.expandByPoint(Nr.max))}Jt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),Ft.add(Qi)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let j=0;j<a;j++)c[j]=new L,u[j]=new L;const h=new L,d=new L,f=new L,p=new le,m=new le,g=new le,x=new L,v=new L;function A(j,C,O){h.fromArray(i,j*3),d.fromArray(i,C*3),f.fromArray(i,O*3),p.fromArray(s,j*2),m.fromArray(s,C*2),g.fromArray(s,O*2),d.sub(h),f.sub(h),m.sub(p),g.sub(p);const re=1/(m.x*g.y-g.x*m.y);isFinite(re)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(re),v.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(re),c[j].add(x),c[C].add(x),c[O].add(x),u[j].add(v),u[C].add(v),u[O].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let j=0,C=w.length;j<C;++j){const O=w[j],re=O.start,G=O.count;for(let q=re,Z=re+G;q<Z;q+=3)A(n[q+0],n[q+1],n[q+2])}const M=new L,k=new L,U=new L,V=new L;function oe(j){U.fromArray(r,j*3),V.copy(U);const C=c[j];M.copy(C),M.sub(U.multiplyScalar(U.dot(C))).normalize(),k.crossVectors(V,C);const re=k.dot(u[j])<0?-1:1;l[j*4]=M.x,l[j*4+1]=M.y,l[j*4+2]=M.z,l[j*4+3]=re}for(let j=0,C=w.length;j<C;++j){const O=w[j],re=O.start,G=O.count;for(let q=re,Z=re+G;q<Z;q+=3)oe(n[q+0]),oe(n[q+1]),oe(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,s=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,s.length-c);for(let h=0,d=c;h<u;h++,d++)s[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*u;for(let x=0;x<u;x++)d[p++]=c[f++]}return new xt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}dt.prototype.isBufferGeometry=!0;const yc=new Ve,er=new Ri,ba=new Ii,Yn=new L,Zn=new L,$n=new L,_a=new L,Aa=new L,wa=new L,Vs=new L,Ws=new L,js=new L,qs=new le,Xs=new le,Ys=new le,Ma=new L,Zs=new L;class Ye extends ht{constructor(e=new dt,t=new mt){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),e.ray.intersectsSphere(ba)===!1)||(yc.copy(r).invert(),er.copy(e.ray).applyMatrix4(yc),n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const x=f[m],v=i[x.materialIndex],A=Math.max(x.start,p.start),w=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let M=A,k=w;M<k;M+=3){const U=a.getX(M),V=a.getX(M+1),oe=a.getX(M+2);s=$s(this,v,e,er,l,c,u,h,d,U,V,oe),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let x=m,v=g;x<v;x+=3){const A=a.getX(x),w=a.getX(x+1),M=a.getX(x+2);s=$s(this,i,e,er,l,c,u,h,d,A,w,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const x=f[m],v=i[x.materialIndex],A=Math.max(x.start,p.start),w=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let M=A,k=w;M<k;M+=3){const U=M,V=M+1,oe=M+2;s=$s(this,v,e,er,l,c,u,h,d,U,V,oe),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let x=m,v=g;x<v;x+=3){const A=x,w=x+1,M=x+2;s=$s(this,i,e,er,l,c,u,h,d,A,w,M),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Ye.prototype.isMesh=!0;function qf(o,e,t,n,i,r,s,a){let l;if(e.side===en?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side!==zn,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Zs);return c<t.near||c>t.far?null:{distance:c,point:Zs.clone(),object:o}}function $s(o,e,t,n,i,r,s,a,l,c,u,h){Yn.fromBufferAttribute(i,c),Zn.fromBufferAttribute(i,u),$n.fromBufferAttribute(i,h);const d=o.morphTargetInfluences;if(r&&d){Vs.set(0,0,0),Ws.set(0,0,0),js.set(0,0,0);for(let p=0,m=r.length;p<m;p++){const g=d[p],x=r[p];g!==0&&(_a.fromBufferAttribute(x,c),Aa.fromBufferAttribute(x,u),wa.fromBufferAttribute(x,h),s?(Vs.addScaledVector(_a,g),Ws.addScaledVector(Aa,g),js.addScaledVector(wa,g)):(Vs.addScaledVector(_a.sub(Yn),g),Ws.addScaledVector(Aa.sub(Zn),g),js.addScaledVector(wa.sub($n),g)))}Yn.add(Vs),Zn.add(Ws),$n.add(js)}o.isSkinnedMesh&&(o.boneTransform(c,Yn),o.boneTransform(u,Zn),o.boneTransform(h,$n));const f=qf(o,e,t,n,Yn,Zn,$n,Ma);if(f){a&&(qs.fromBufferAttribute(a,c),Xs.fromBufferAttribute(a,u),Ys.fromBufferAttribute(a,h),f.uv=Bt.getUV(Ma,Yn,Zn,$n,qs,Xs,Ys,new le)),l&&(qs.fromBufferAttribute(l,c),Xs.fromBufferAttribute(l,u),Ys.fromBufferAttribute(l,h),f.uv2=Bt.getUV(Ma,Yn,Zn,$n,qs,Xs,Ys,new le));const p={a:c,b:u,c:h,normal:new L,materialIndex:0};Bt.getNormal(Yn,Zn,$n,p.normal),f.face=p}return f}class Sr extends dt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,s,r,0),p("z","y","x",1,-1,n,t,-e,s,r,1),p("x","z","y",1,1,e,n,t,i,s,2),p("x","z","y",1,-1,e,n,-t,i,s,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function p(m,g,x,v,A,w,M,k,U,V,oe){const j=w/U,C=M/V,O=w/2,re=M/2,G=k/2,q=U+1,Z=V+1;let te=0,W=0;const ae=new L;for(let ce=0;ce<Z;ce++){const xe=ce*C-re;for(let de=0;de<q;de++){const pe=de*j-O;ae[m]=pe*v,ae[g]=xe*A,ae[x]=G,c.push(ae.x,ae.y,ae.z),ae[m]=0,ae[g]=0,ae[x]=k>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(de/U),h.push(1-ce/V),te+=1}}for(let ce=0;ce<V;ce++)for(let xe=0;xe<U;xe++){const de=d+xe+q*ce,pe=d+xe+q*(ce+1),je=d+(xe+1)+q*(ce+1),Re=d+(xe+1)+q*ce;l.push(de,pe,Re),l.push(pe,je,Re),W+=6}a.addGroup(f,W,oe),f+=W,d+=te}}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(o){const e={};for(let t=0;t<o.length;t++){const n=Ar(o[t]);for(const i in n)e[i]=n[i]}return e}const yl={clone:Ar,merge:Vt};var Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class at extends Ct{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Xf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}at.prototype.isShaderMaterial=!0;let bl=class extends ht{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};bl.prototype.isCamera=!0;class Wt extends bl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Wt.prototype.isPerspectiveCamera=!0;const tr=90,nr=1;class _l extends ht{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Wt(tr,nr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const r=new Wt(tr,nr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const s=new Wt(tr,nr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new L(0,1,0)),this.add(s);const a=new Wt(tr,nr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new Wt(tr,nr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new Wt(tr,nr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=e.getRenderTarget(),h=e.outputEncoding,d=e.toneMapping,f=e.xr.enabled;e.outputEncoding=Mn,e.toneMapping=wn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.outputEncoding=h,e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Co extends Et{constructor(e,t,n,i,r,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,n,i,r,s,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Co.prototype.isCubeTexture=!0;class ju extends tn{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Co(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Sr(5,5,5),r=new at({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ni});r.uniforms.tEquirect.value=t;const s=new Ye(i,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Rt),new _l(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}ju.prototype.isWebGLCubeRenderTarget=!0;const Sa=new L,Zf=new L,$f=new Ut;class Fn{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sa.subVectors(n,t).cross(Zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$f.getNormalMatrix(e),i=this.coplanarPoint(Sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Fn.prototype.isPlane=!0;const ir=new Ii,Ks=new L;class Eo{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,r=new Fn,s=new Fn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],p=n[10],m=n[11],g=n[12],x=n[13],v=n[14],A=n[15];return t[0].setComponents(a-i,h-l,m-d,A-g).normalize(),t[1].setComponents(a+i,h+l,m+d,A+g).normalize(),t[2].setComponents(a+r,h+c,m+f,A+x).normalize(),t[3].setComponents(a-r,h-c,m-f,A-x).normalize(),t[4].setComponents(a-s,h-u,m-p,A-v).normalize(),t[5].setComponents(a+s,h+u,m+p,A+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ks.x=i.normal.x>0?e.max.x:e.min.x,Ks.y=i.normal.y>0?e.max.y:e.min.y,Ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qu(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Kf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=o.createBuffer();o.bindBuffer(u,f),o.bufferData(u,h,d),c.onUploadCallback();let p;if(h instanceof Float32Array)p=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(h instanceof Int16Array)p=5122;else if(h instanceof Uint32Array)p=5125;else if(h instanceof Int32Array)p=5124;else if(h instanceof Int8Array)p=5120;else if(h instanceof Uint8Array)p=5121;else if(h instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,f=u.updateRange;o.bindBuffer(h,c),f.count===-1?o.bufferSubData(h,0,d):(t?o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:a,update:l}}class On extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],m=[],g=[];for(let x=0;x<u;x++){const v=x*d-s;for(let A=0;A<c;A++){const w=A*h-r;p.push(w,-v,0),m.push(0,0,1),g.push(A/a),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){const A=v+c*x,w=v+c*(x+1),M=v+1+c*(x+1),k=v+1+c*x;f.push(A,w,k),f.push(w,M,k)}this.setIndex(f),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(m,3)),this.setAttribute("uv",new bt(g,2))}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp="vec3 transformed = vec3( position );",sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Dp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Np=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,jp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,am=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,um=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Em=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Nm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Um=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Hm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Gm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,jm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Km=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,st={alphamap_fragment:Jf,alphamap_pars_fragment:Qf,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,begin_vertex:rp,beginnormal_vertex:sp,bsdfs:op,bumpmap_pars_fragment:ap,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:up,clipping_planes_vertex:hp,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:xp,displacementmap_pars_vertex:yp,displacementmap_vertex:bp,emissivemap_fragment:_p,emissivemap_pars_fragment:Ap,encodings_fragment:wp,encodings_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Ep,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Np,envmap_vertex:Lp,fog_vertex:Pp,fog_pars_vertex:Ip,fog_fragment:Rp,fog_pars_fragment:kp,gradientmap_pars_fragment:Bp,lightmap_fragment:Dp,lightmap_pars_fragment:Fp,lights_lambert_vertex:Op,lights_pars_begin:zp,lights_toon_fragment:Up,lights_toon_pars_fragment:Hp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Wp,lights_physical_pars_fragment:jp,lights_fragment_begin:qp,lights_fragment_maps:Xp,lights_fragment_end:Yp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:Jp,map_fragment:Qp,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:rm,morphcolor_vertex:sm,morphnormal_vertex:om,morphtarget_pars_vertex:am,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:um,normal_pars_fragment:hm,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:vm,output_fragment:xm,packing:ym,premultiplied_alpha_fragment:bm,project_vertex:_m,dithering_fragment:Am,dithering_pars_fragment:wm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Em,shadowmap_vertex:Tm,shadowmask_pars_fragment:Lm,skinbase_vertex:Pm,skinning_pars_vertex:Im,skinning_vertex:Rm,skinnormal_vertex:km,specularmap_fragment:Bm,specularmap_pars_fragment:Dm,tonemapping_fragment:Fm,tonemapping_pars_fragment:Om,transmission_fragment:zm,transmission_pars_fragment:Nm,uv_pars_fragment:Um,uv_pars_vertex:Hm,uv_vertex:Gm,uv2_pars_fragment:Vm,uv2_pars_vertex:Wm,uv2_vertex:jm,worldpos_vertex:qm,background_vert:Xm,background_frag:Ym,cube_vert:Zm,cube_frag:$m,depth_vert:Km,depth_frag:Jm,distanceRGBA_vert:Qm,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:sg,meshbasic_frag:og,meshlambert_vert:ag,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:ug,meshnormal_vert:hg,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:vg,meshtoon_frag:xg,points_vert:yg,points_frag:bg,shadow_vert:_g,shadow_frag:Ag,sprite_vert:wg,sprite_frag:Mg},Se={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},_n={basic:{uniforms:Vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.fog,Se.lights,{emissive:{value:new Le(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Vt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Vt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Vt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Le(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Vt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Vt([Se.points,Se.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Vt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Vt([Se.common,Se.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Vt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Vt([Se.sprite,Se.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null}},vertexShader:st.background_vert,fragmentShader:st.background_frag},cube:{uniforms:Vt([Se.envmap,{opacity:{value:1}}]),vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Vt([Se.common,Se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Vt([Se.lights,Se.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};_n.physical={uniforms:Vt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};function Sg(o,e,t,n,i,r){const s=new Le(0);let a=i===!0?0:1,l,c,u=null,h=0,d=null;function f(m,g){let x=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=e.get(v));const A=o.xr,w=A.getSession&&A.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?p(s,a):v&&v.isColor&&(p(v,1),x=!0),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Mo)?(c===void 0&&(c=new Ye(new Sr(1,1,1),new at({name:"BackgroundCubeMaterial",uniforms:Ar(_n.cube.uniforms),vertexShader:_n.cube.vertexShader,fragmentShader:_n.cube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,k,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=o.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new On(2,2),new at({name:"BackgroundMaterial",uniforms:Ar(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==o.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=o.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null))}function p(m,g){t.buffers.color.setClear(m.r,m.g,m.b,g,r)}return{getClearColor:function(){return s},setClearColor:function(m,g=1){s.set(m),a=g,p(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,p(s,a)},render:f}}function Cg(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=g(null);let c=l,u=!1;function h(G,q,Z,te,W){let ae=!1;if(s){const ce=m(te,Z,q);c!==ce&&(c=ce,f(c.object)),ae=x(te,W),ae&&v(te,W)}else{const ce=q.wireframe===!0;(c.geometry!==te.id||c.program!==Z.id||c.wireframe!==ce)&&(c.geometry=te.id,c.program=Z.id,c.wireframe=ce,ae=!0)}G.isInstancedMesh===!0&&(ae=!0),W!==null&&t.update(W,34963),(ae||u)&&(u=!1,V(G,q,Z,te),W!==null&&o.bindBuffer(34963,t.get(W).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function f(G){return n.isWebGL2?o.bindVertexArray(G):r.bindVertexArrayOES(G)}function p(G){return n.isWebGL2?o.deleteVertexArray(G):r.deleteVertexArrayOES(G)}function m(G,q,Z){const te=Z.wireframe===!0;let W=a[G.id];W===void 0&&(W={},a[G.id]=W);let ae=W[q.id];ae===void 0&&(ae={},W[q.id]=ae);let ce=ae[te];return ce===void 0&&(ce=g(d()),ae[te]=ce),ce}function g(G){const q=[],Z=[],te=[];for(let W=0;W<i;W++)q[W]=0,Z[W]=0,te[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:te,object:G,attributes:{},index:null}}function x(G,q){const Z=c.attributes,te=G.attributes;let W=0;for(const ae in te){const ce=Z[ae],xe=te[ae];if(ce===void 0||ce.attribute!==xe||ce.data!==xe.data)return!0;W++}return c.attributesNum!==W||c.index!==q}function v(G,q){const Z={},te=G.attributes;let W=0;for(const ae in te){const ce=te[ae],xe={};xe.attribute=ce,ce.data&&(xe.data=ce.data),Z[ae]=xe,W++}c.attributes=Z,c.attributesNum=W,c.index=q}function A(){const G=c.newAttributes;for(let q=0,Z=G.length;q<Z;q++)G[q]=0}function w(G){M(G,0)}function M(G,q){const Z=c.newAttributes,te=c.enabledAttributes,W=c.attributeDivisors;Z[G]=1,te[G]===0&&(o.enableVertexAttribArray(G),te[G]=1),W[G]!==q&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,q),W[G]=q)}function k(){const G=c.newAttributes,q=c.enabledAttributes;for(let Z=0,te=q.length;Z<te;Z++)q[Z]!==G[Z]&&(o.disableVertexAttribArray(Z),q[Z]=0)}function U(G,q,Z,te,W,ae){n.isWebGL2===!0&&(Z===5124||Z===5125)?o.vertexAttribIPointer(G,q,Z,W,ae):o.vertexAttribPointer(G,q,Z,te,W,ae)}function V(G,q,Z,te){if(n.isWebGL2===!1&&(G.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const W=te.attributes,ae=Z.getAttributes(),ce=q.defaultAttributeValues;for(const xe in ae){const de=ae[xe];if(de.location>=0){let pe=W[xe];if(pe===void 0&&(xe==="instanceMatrix"&&G.instanceMatrix&&(pe=G.instanceMatrix),xe==="instanceColor"&&G.instanceColor&&(pe=G.instanceColor)),pe!==void 0){const je=pe.normalized,Re=pe.itemSize,ne=t.get(pe);if(ne===void 0)continue;const Je=ne.buffer,Xe=ne.type,qe=ne.bytesPerElement;if(pe.isInterleavedBufferAttribute){const me=pe.data,Ze=me.stride,K=pe.offset;if(me.isInstancedInterleavedBuffer){for(let se=0;se<de.locationSize;se++)M(de.location+se,me.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let se=0;se<de.locationSize;se++)w(de.location+se);o.bindBuffer(34962,Je);for(let se=0;se<de.locationSize;se++)U(de.location+se,Re/de.locationSize,Xe,je,Ze*qe,(K+Re/de.locationSize*se)*qe)}else{if(pe.isInstancedBufferAttribute){for(let me=0;me<de.locationSize;me++)M(de.location+me,pe.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<de.locationSize;me++)w(de.location+me);o.bindBuffer(34962,Je);for(let me=0;me<de.locationSize;me++)U(de.location+me,Re/de.locationSize,Xe,je,Re*qe,Re/de.locationSize*me*qe)}}else if(ce!==void 0){const je=ce[xe];if(je!==void 0)switch(je.length){case 2:o.vertexAttrib2fv(de.location,je);break;case 3:o.vertexAttrib3fv(de.location,je);break;case 4:o.vertexAttrib4fv(de.location,je);break;default:o.vertexAttrib1fv(de.location,je)}}}}k()}function oe(){O();for(const G in a){const q=a[G];for(const Z in q){const te=q[Z];for(const W in te)p(te[W].object),delete te[W];delete q[Z]}delete a[G]}}function j(G){if(a[G.id]===void 0)return;const q=a[G.id];for(const Z in q){const te=q[Z];for(const W in te)p(te[W].object),delete te[W];delete q[Z]}delete a[G.id]}function C(G){for(const q in a){const Z=a[q];if(Z[G.id]===void 0)continue;const te=Z[G.id];for(const W in te)p(te[W].object),delete te[W];delete Z[G.id]}}function O(){re(),u=!0,c!==l&&(c=l,f(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:re,dispose:oe,releaseStatesOfGeometry:j,releaseStatesOfProgram:C,initAttributes:A,enableAttribute:w,disableUnusedAttributes:k}}function Eg(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=o,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=a,this.renderInstances=l}function Tg(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(U){if(U==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),p=o.getParameter(34076),m=o.getParameter(34921),g=o.getParameter(36347),x=o.getParameter(36348),v=o.getParameter(36349),A=d>0,w=s||e.has("OES_texture_float"),M=A&&w,k=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:k}}function Lg(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Fn,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const p=h.length!==0||d||n!==0||i;return i=d,t=u(h,f,0),n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,f){const p=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,x=o.get(h);if(!i||p===null||p.length===0||r&&!g)r?u(null):c();else{const v=r?0:n,A=v*4;let w=x.clippingState||null;l.value=w,w=u(p,d,A,f);for(let M=0;M!==A;++M)w[M]=t[M];x.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const m=h!==null?h.length:0;let g=null;if(m!==0){if(g=l.value,p!==!0||g===null){const x=f+m*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<x)&&(g=new Float32Array(x));for(let A=0,w=f;A!==m;++A,w+=4)s.copy(h[A]).applyMatrix4(v,a),s.normal.toArray(g,w),g[w+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function Pg(o){let e=new WeakMap;function t(s,a){return a===Wa?s.mapping=xr:a===ja&&(s.mapping=yr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Wa||a===ja)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new ju(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class To extends bl{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}To.prototype.isOrthographicCamera=!0;const dr=4,bc=[.125,.215,.35,.446,.526,.582],Ai=20,Ca=new To,_c=new Le;let Ea=null;const bi=(1+Math.sqrt(5))/2,rr=1/bi,Ac=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,bi,rr),new L(0,bi,-rr),new L(rr,0,bi),new L(-rr,0,bi),new L(bi,rr,0),new L(-bi,rr,0)];class wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ea=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea),e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:mr,format:Qt,encoding:Mn,depthBuffer:!1},i=Mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(r)),this._blurMaterial=Rg(r,e,t)}return i}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,i){const a=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_c),u.toneMapping=wn,u.autoClear=!1;const f=new mt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),p=new Ye(new Sr,f);let m=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,m=!0):(f.color.copy(_c),m=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):v===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const A=this._cubeSize;Js(i,v*A,x>2?A:0,A,A),u.setRenderTarget(i),m&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xr||e.mapping===yr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Ac[(i-1)%Ac.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ye(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),m=r/p,g=isFinite(r)?1+Math.floor(u*m):Ai;g>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);const x=[];let v=0;for(let U=0;U<Ai;++U){const V=U/m,oe=Math.exp(-V*V/2);x.push(oe),U===0?v+=oe:U<g&&(v+=2*oe)}for(let U=0;U<x.length;U++)x[U]=x[U]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=x,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=p,d.mipInt.value=A-n;const w=this._sizeLods[i],M=3*w*(i>A-dr?i-A+dr:0),k=4*(this._cubeSize-w);Js(t,M,k,3*w,2*w),l.setRenderTarget(t),l.render(h,Ca)}}function Ig(o){const e=[],t=[],n=[];let i=o;const r=o-dr+1+bc.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>o-dr?l=bc[s-o+dr-1]:s===0&&(l=0),n.push(l);const c=1/(a-1),u=-c/2,h=1+c/2,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,m=3,g=2,x=1,v=new Float32Array(m*p*f),A=new Float32Array(g*p*f),w=new Float32Array(x*p*f);for(let k=0;k<f;k++){const U=k%3*2/3-1,V=k>2?0:-1,oe=[U,V,0,U+2/3,V,0,U+2/3,V+1,0,U,V,0,U+2/3,V+1,0,U,V+1,0];v.set(oe,m*p*k),A.set(d,g*p*k);const j=[k,k,k,k,k,k];w.set(j,x*p*k)}const M=new dt;M.setAttribute("position",new xt(v,m)),M.setAttribute("uv",new xt(A,g)),M.setAttribute("faceIndex",new xt(w,x)),e.push(M),i>dr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mc(o,e,t){const n=new tn(o,e,t);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Rg(o,e,t){const n=new Float32Array(Ai),i=new L(0,1,0);return new at({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Sc(){return new at({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Cc(){return new at({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kg(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wa||l===ja,u=l===xr||l===yr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new wc(o)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new wc(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Bg(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dg(o,e,t,n){const i={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],34962);const f=h.morphAttributes;for(const p in f){const m=f[p];for(let g=0,x=m.length;g<x;g++)e.update(m[g],34962)}}function c(h){const d=[],f=h.index,p=h.attributes.position;let m=0;if(f!==null){const v=f.array;m=f.version;for(let A=0,w=v.length;A<w;A+=3){const M=v[A+0],k=v[A+1],U=v[A+2];d.push(M,k,k,U,U,M)}}else{const v=p.array;m=p.version;for(let A=0,w=v.length/3-1;A<w;A+=3){const M=A+0,k=A+1,U=A+2;d.push(M,k,k,U,U,M)}}const g=new(Uu(d)?Wu:Vu)(d,1);g.version=m;const x=r.get(h);x&&e.remove(x),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Fg(o,e,t,n){const i=n.isWebGL2;let r;function s(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,f){o.drawElements(r,f,a,d*l),t.update(f,r,1)}function h(d,f,p){if(p===0)return;let m,g;if(i)m=o,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,f,a,d*l,p),t.update(f,r,p)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Og(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zg(o,e){return o[0]-e[0]}function Ng(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Ta(o,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(t)}function Ug(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==m){let q=function(){re.dispose(),r.delete(u),u.removeEventListener("dispose",q)};g!==void 0&&g.texture.dispose();const A=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,k=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],V=u.morphAttributes.color||[];let oe=0;A===!0&&(oe=1),w===!0&&(oe=2),M===!0&&(oe=3);let j=u.attributes.position.count*oe,C=1;j>e.maxTextureSize&&(C=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const O=new Float32Array(j*C*4*m),re=new So(O,j,C,m);re.type=ti,re.needsUpdate=!0;const G=oe*4;for(let Z=0;Z<m;Z++){const te=k[Z],W=U[Z],ae=V[Z],ce=j*C*4*Z;for(let xe=0;xe<te.count;xe++){const de=xe*G;A===!0&&(s.fromBufferAttribute(te,xe),te.normalized===!0&&Ta(s,te),O[ce+de+0]=s.x,O[ce+de+1]=s.y,O[ce+de+2]=s.z,O[ce+de+3]=0),w===!0&&(s.fromBufferAttribute(W,xe),W.normalized===!0&&Ta(s,W),O[ce+de+4]=s.x,O[ce+de+5]=s.y,O[ce+de+6]=s.z,O[ce+de+7]=0),M===!0&&(s.fromBufferAttribute(ae,xe),ae.normalized===!0&&Ta(s,ae),O[ce+de+8]=s.x,O[ce+de+9]=s.y,O[ce+de+10]=s.z,O[ce+de+11]=ae.itemSize===4?s.w:1)}}g={count:m,texture:re,size:new le(j,C)},r.set(u,g),u.addEventListener("dispose",q)}let x=0;for(let A=0;A<f.length;A++)x+=f[A];const v=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",f),d.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{const p=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let w=0;w<p;w++)m[w]=[w,0];n[u.id]=m}for(let w=0;w<p;w++){const M=m[w];M[0]=w,M[1]=f[w]}m.sort(Ng);for(let w=0;w<8;w++)w<p&&m[w][1]?(a[w][0]=m[w][0],a[w][1]=m[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(zg);const g=u.morphAttributes.position,x=u.morphAttributes.normal;let v=0;for(let w=0;w<8;w++){const M=a[w],k=M[0],U=M[1];k!==Number.MAX_SAFE_INTEGER&&U?(g&&u.getAttribute("morphTarget"+w)!==g[k]&&u.setAttribute("morphTarget"+w,g[k]),x&&u.getAttribute("morphNormal"+w)!==x[k]&&u.setAttribute("morphNormal"+w,x[k]),i[w]=U,v+=U):(g&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),x&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),i[w]=0)}const A=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(o,"morphTargetBaseInfluence",A),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Hg(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Xu=new Et,Yu=new So,Zu=new vl,$u=new Co,Ec=[],Tc=[],Lc=new Float32Array(16),Pc=new Float32Array(9),Ic=new Float32Array(4);function Cr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=Ec[i];if(r===void 0&&(r=new Float32Array(i),Ec[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function Yt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function jt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Lo(o,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Gg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Vg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;o.uniform2fv(this.addr,e),jt(t,e)}}function Wg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;o.uniform3fv(this.addr,e),jt(t,e)}}function jg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;o.uniform4fv(this.addr,e),jt(t,e)}}function qg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,n))return;Ic.set(n),o.uniformMatrix2fv(this.addr,!1,Ic),jt(t,n)}}function Xg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,n))return;Pc.set(n),o.uniformMatrix3fv(this.addr,!1,Pc),jt(t,n)}}function Yg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,n))return;Lc.set(n),o.uniformMatrix4fv(this.addr,!1,Lc),jt(t,n)}}function Zg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function $g(o,e){const t=this.cache;Yt(t,e)||(o.uniform2iv(this.addr,e),jt(t,e))}function Kg(o,e){const t=this.cache;Yt(t,e)||(o.uniform3iv(this.addr,e),jt(t,e))}function Jg(o,e){const t=this.cache;Yt(t,e)||(o.uniform4iv(this.addr,e),jt(t,e))}function Qg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function ev(o,e){const t=this.cache;Yt(t,e)||(o.uniform2uiv(this.addr,e),jt(t,e))}function tv(o,e){const t=this.cache;Yt(t,e)||(o.uniform3uiv(this.addr,e),jt(t,e))}function nv(o,e){const t=this.cache;Yt(t,e)||(o.uniform4uiv(this.addr,e),jt(t,e))}function iv(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Xu,i)}function rv(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zu,i)}function sv(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$u,i)}function ov(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yu,i)}function av(o){switch(o){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return jg;case 35674:return qg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return ov}}function lv(o,e){o.uniform1fv(this.addr,e)}function cv(o,e){const t=Cr(e,this.size,2);o.uniform2fv(this.addr,t)}function uv(o,e){const t=Cr(e,this.size,3);o.uniform3fv(this.addr,t)}function hv(o,e){const t=Cr(e,this.size,4);o.uniform4fv(this.addr,t)}function dv(o,e){const t=Cr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function fv(o,e){const t=Cr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function pv(o,e){const t=Cr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function mv(o,e){o.uniform1iv(this.addr,e)}function gv(o,e){o.uniform2iv(this.addr,e)}function vv(o,e){o.uniform3iv(this.addr,e)}function xv(o,e){o.uniform4iv(this.addr,e)}function yv(o,e){o.uniform1uiv(this.addr,e)}function bv(o,e){o.uniform2uiv(this.addr,e)}function _v(o,e){o.uniform3uiv(this.addr,e)}function Av(o,e){o.uniform4uiv(this.addr,e)}function wv(o,e,t){const n=e.length,i=Lo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Xu,i[r])}function Mv(o,e,t){const n=e.length,i=Lo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Zu,i[r])}function Sv(o,e,t){const n=e.length,i=Lo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||$u,i[r])}function Cv(o,e,t){const n=e.length,i=Lo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Yu,i[r])}function Ev(o){switch(o){case 5126:return lv;case 35664:return cv;case 35665:return uv;case 35666:return hv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return vv;case 35669:case 35673:return xv;case 5125:return yv;case 36294:return bv;case 36295:return _v;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Tv(o,e,t){this.id=o,this.addr=t,this.cache=[],this.setValue=av(e.type)}function Ku(o,e,t){this.id=o,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Ev(e.type)}Ku.prototype.updateCache=function(o){const e=this.cache;o instanceof Float32Array&&e.length!==o.length&&(this.cache=new Float32Array(o.length)),jt(e,o)};function Ju(o){this.id=o,this.seq=[],this.map={}}Ju.prototype.setValue=function(o,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.setValue(o,e[s.id],t)}};const La=/(\w+)(\])?(\[|\.)?/g;function Rc(o,e){o.seq.push(e),o.map[e.id]=e}function Lv(o,e,t){const n=o.name,i=n.length;for(La.lastIndex=0;;){const r=La.exec(n),s=La.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){Rc(t,c===void 0?new Tv(a,o,e):new Ku(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new Ju(a),Rc(t,h)),t=h}}}function ri(o,e){this.seq=[],this.map={};const t=o.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=o.getActiveUniform(e,n),r=o.getUniformLocation(e,i.name);Lv(i,r,this)}}ri.prototype.setValue=function(o,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(o,t,n)};ri.prototype.setOptional=function(o,e,t){const n=e[t];n!==void 0&&this.setValue(o,t,n)};ri.upload=function(o,e,t,n){for(let i=0,r=e.length;i!==r;++i){const s=e[i],a=t[s.id];a.needsUpdate!==!1&&s.setValue(o,a.value,n)}};ri.seqWithValue=function(o,e){const t=[];for(let n=0,i=o.length;n!==i;++n){const r=o[n];r.id in e&&t.push(r)}return t};function kc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Pv=0;function Iv(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++)n.push(s+1+": "+t[s]);return n.join(`
`)}function Rv(o){switch(o){case Mn:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Bc(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);return t.toUpperCase()+`

`+i+`

`+Iv(o.getShaderSource(e),r)}function kv(o,e){const t=Rv(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Bv(o,e){let t;switch(e){case Pu:t="Linear";break;case Iu:t="Reinhard";break;case Ru:t="OptimizedCineon";break;case ku:t="ACESFilmic";break;case jd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dv(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zr).join(`
`)}function Fv(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ov(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function Zr(o){return o!==""}function Dc(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(o){return o.replace(zv,Nv)}function Nv(o,e){const t=st[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return nl(t)}const Uv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(o){return o.replace(Hv,Qu).replace(Uv,Gv)}function Gv(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Qu(o,e,t,n)}function Qu(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zc(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Yr&&(e="SHADOWMAP_TYPE_VSM"),e}function Wv(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jv(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function qv(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Vd:e="ENVMAP_BLENDING_MIX";break;case Wd:e="ENVMAP_BLENDING_ADD";break}return e}function Xv(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yv(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=Vv(t),c=Wv(t),u=jv(t),h=qv(t),d=Xv(t),f=t.isWebGL2?"":Dv(t),p=Fv(r),m=i.createProgram();let g,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[p].filter(Zr).join(`
`),g.length>0&&(g+=`
`),x=[f,p].filter(Zr).join(`
`),x.length>0&&(x+=`
`)):(g=[zc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),x=[f,zc(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?st.tonemapping_pars_fragment:"",t.toneMapping!==wn?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.encodings_pars_fragment,kv("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),s=nl(s),s=Dc(s,t),s=Fc(s,t),a=nl(a),a=Dc(a,t),a=Fc(a,t),s=Oc(s),a=Oc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=v+g+s,w=v+x+a,M=kc(i,35633,A),k=kc(i,35632,w);if(i.attachShader(m,M),i.attachShader(m,k),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),o.debug.checkShaderErrors){const oe=i.getProgramInfoLog(m).trim(),j=i.getShaderInfoLog(M).trim(),C=i.getShaderInfoLog(k).trim();let O=!0,re=!0;if(i.getProgramParameter(m,35714)===!1){O=!1;const G=Bc(i,M,"vertex"),q=Bc(i,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+oe+`
`+G+`
`+q)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(j===""||C==="")&&(re=!1);re&&(this.diagnostics={runnable:O,programLog:oe,vertexShader:{log:j,prefix:g},fragmentShader:{log:C,prefix:x}})}i.deleteShader(M),i.deleteShader(k);let U;this.getUniforms=function(){return U===void 0&&(U=new ri(i,m)),U};let V;return this.getAttributes=function(){return V===void 0&&(V=Ov(i,m)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Pv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=k,this}let Zv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Kv(e);t.set(e,n)}return t.get(e)}}class Kv{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}}function Jv(o,e,t,n,i,r,s){const a=new xl,l=new $v,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,p=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(C){const re=C.skeleton.bones;if(d)return 1024;{const q=Math.floor((f-20)/4),Z=Math.min(q,re.length);return Z<re.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+re.length+" bones. This GPU supports "+Z+"."),0):Z}}function v(C,O,re,G,q){const Z=G.fog,te=q.geometry,W=C.isMeshStandardMaterial?G.environment:null,ae=(C.isMeshStandardMaterial?t:e).get(C.envMap||W),ce=ae&&ae.mapping===Mo?ae.image.height:null,xe=g[C.type],de=q.isSkinnedMesh?x(q):0;C.precision!==null&&(m=i.getMaxPrecision(C.precision),m!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",m,"instead."));const pe=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,je=pe!==void 0?pe.length:0;let Re=0;te.morphAttributes.position!==void 0&&(Re=1),te.morphAttributes.normal!==void 0&&(Re=2),te.morphAttributes.color!==void 0&&(Re=3);let ne,Je,Xe,qe;if(xe){const ge=_n[xe];ne=ge.vertexShader,Je=ge.fragmentShader}else ne=C.vertexShader,Je=C.fragmentShader,l.update(C),Xe=l.getVertexShaderID(C),qe=l.getFragmentShaderID(C);const me=o.getRenderTarget(),Ze=C.alphaTest>0,K=C.clearcoat>0;return{isWebGL2:u,shaderID:xe,shaderName:C.type,vertexShader:ne,fragmentShader:Je,defines:C.defines,customVertexShaderID:Xe,customFragmentShaderID:qe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:p,outputEncoding:me===null?o.outputEncoding:me.isXRRenderTarget===!0?me.texture.encoding:Mn,map:!!C.map,matcap:!!C.matcap,envMap:!!ae,envMapMode:ae&&ae.mapping,envMapCubeUVHeight:ce,lightMap:!!C.lightMap,aoMap:!!C.aoMap,emissiveMap:!!C.emissiveMap,bumpMap:!!C.bumpMap,normalMap:!!C.normalMap,objectSpaceNormalMap:C.normalMapType===pf,tangentSpaceNormalMap:C.normalMapType===Li,decodeVideoTexture:!!C.map&&C.map.isVideoTexture===!0&&C.map.encoding===We,clearcoat:K,clearcoatMap:K&&!!C.clearcoatMap,clearcoatRoughnessMap:K&&!!C.clearcoatRoughnessMap,clearcoatNormalMap:K&&!!C.clearcoatNormalMap,displacementMap:!!C.displacementMap,roughnessMap:!!C.roughnessMap,metalnessMap:!!C.metalnessMap,specularMap:!!C.specularMap,specularIntensityMap:!!C.specularIntensityMap,specularColorMap:!!C.specularColorMap,opaque:C.transparent===!1&&C.blending===pr,alphaMap:!!C.alphaMap,alphaTest:Ze,gradientMap:!!C.gradientMap,sheen:C.sheen>0,sheenColorMap:!!C.sheenColorMap,sheenRoughnessMap:!!C.sheenRoughnessMap,transmission:C.transmission>0,transmissionMap:!!C.transmissionMap,thicknessMap:!!C.thicknessMap,combine:C.combine,vertexTangents:!!C.normalMap&&!!te.attributes.tangent,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,vertexUvs:!!C.map||!!C.bumpMap||!!C.normalMap||!!C.specularMap||!!C.alphaMap||!!C.emissiveMap||!!C.roughnessMap||!!C.metalnessMap||!!C.clearcoatMap||!!C.clearcoatRoughnessMap||!!C.clearcoatNormalMap||!!C.displacementMap||!!C.transmissionMap||!!C.thicknessMap||!!C.specularIntensityMap||!!C.specularColorMap||!!C.sheenColorMap||!!C.sheenRoughnessMap,uvsVertexOnly:!(C.map||C.bumpMap||C.normalMap||C.specularMap||C.alphaMap||C.emissiveMap||C.roughnessMap||C.metalnessMap||C.clearcoatNormalMap||C.transmission>0||C.transmissionMap||C.thicknessMap||C.specularIntensityMap||C.specularColorMap||C.sheen>0||C.sheenColorMap||C.sheenRoughnessMap)&&!!C.displacementMap,fog:!!Z,useFog:C.fog,fogExp2:Z&&Z.isFogExp2,flatShading:!!C.flatShading,sizeAttenuation:C.sizeAttenuation,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0&&de>0,maxBones:de,useVertexTexture:d,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:Re,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&re.length>0,shadowMapType:o.shadowMap.type,toneMapping:C.toneMapped?o.toneMapping:wn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===zn,flipSided:C.side===en,depthPacking:C.depthPacking!==void 0?C.depthPacking:!1,index0AttributeName:C.index0AttributeName,extensionDerivatives:C.extensions&&C.extensions.derivatives,extensionFragDepth:C.extensions&&C.extensions.fragDepth,extensionDrawBuffers:C.extensions&&C.extensions.drawBuffers,extensionShaderTextureLOD:C.extensions&&C.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function A(C){const O=[];if(C.shaderID?O.push(C.shaderID):(O.push(C.customVertexShaderID),O.push(C.customFragmentShaderID)),C.defines!==void 0)for(const re in C.defines)O.push(re),O.push(C.defines[re]);return C.isRawShaderMaterial===!1&&(w(O,C),M(O,C),O.push(o.outputEncoding)),O.push(C.customProgramCacheKey),O.join()}function w(C,O){C.push(O.precision),C.push(O.outputEncoding),C.push(O.envMapMode),C.push(O.envMapCubeUVHeight),C.push(O.combine),C.push(O.vertexUvs),C.push(O.fogExp2),C.push(O.sizeAttenuation),C.push(O.maxBones),C.push(O.morphTargetsCount),C.push(O.morphAttributeCount),C.push(O.numDirLights),C.push(O.numPointLights),C.push(O.numSpotLights),C.push(O.numHemiLights),C.push(O.numRectAreaLights),C.push(O.numDirLightShadows),C.push(O.numPointLightShadows),C.push(O.numSpotLightShadows),C.push(O.shadowMapType),C.push(O.toneMapping),C.push(O.numClippingPlanes),C.push(O.numClipIntersection)}function M(C,O){a.disableAll(),O.isWebGL2&&a.enable(0),O.supportsVertexTextures&&a.enable(1),O.instancing&&a.enable(2),O.instancingColor&&a.enable(3),O.map&&a.enable(4),O.matcap&&a.enable(5),O.envMap&&a.enable(6),O.lightMap&&a.enable(7),O.aoMap&&a.enable(8),O.emissiveMap&&a.enable(9),O.bumpMap&&a.enable(10),O.normalMap&&a.enable(11),O.objectSpaceNormalMap&&a.enable(12),O.tangentSpaceNormalMap&&a.enable(13),O.clearcoat&&a.enable(14),O.clearcoatMap&&a.enable(15),O.clearcoatRoughnessMap&&a.enable(16),O.clearcoatNormalMap&&a.enable(17),O.displacementMap&&a.enable(18),O.specularMap&&a.enable(19),O.roughnessMap&&a.enable(20),O.metalnessMap&&a.enable(21),O.gradientMap&&a.enable(22),O.alphaMap&&a.enable(23),O.alphaTest&&a.enable(24),O.vertexColors&&a.enable(25),O.vertexAlphas&&a.enable(26),O.vertexUvs&&a.enable(27),O.vertexTangents&&a.enable(28),O.uvsVertexOnly&&a.enable(29),O.fog&&a.enable(30),C.push(a.mask),a.disableAll(),O.useFog&&a.enable(0),O.flatShading&&a.enable(1),O.logarithmicDepthBuffer&&a.enable(2),O.skinning&&a.enable(3),O.useVertexTexture&&a.enable(4),O.morphTargets&&a.enable(5),O.morphNormals&&a.enable(6),O.morphColors&&a.enable(7),O.premultipliedAlpha&&a.enable(8),O.shadowMapEnabled&&a.enable(9),O.physicallyCorrectLights&&a.enable(10),O.doubleSided&&a.enable(11),O.flipSided&&a.enable(12),O.depthPacking&&a.enable(13),O.dithering&&a.enable(14),O.specularIntensityMap&&a.enable(15),O.specularColorMap&&a.enable(16),O.transmission&&a.enable(17),O.transmissionMap&&a.enable(18),O.thicknessMap&&a.enable(19),O.sheen&&a.enable(20),O.sheenColorMap&&a.enable(21),O.sheenRoughnessMap&&a.enable(22),O.decodeVideoTexture&&a.enable(23),O.opaque&&a.enable(24),C.push(a.mask)}function k(C){const O=g[C.type];let re;if(O){const G=_n[O];re=yl.clone(G.uniforms)}else re=C.uniforms;return re}function U(C,O){let re;for(let G=0,q=c.length;G<q;G++){const Z=c[G];if(Z.cacheKey===O){re=Z,++re.usedTimes;break}}return re===void 0&&(re=new Yv(o,O,C,r),c.push(re)),re}function V(C){if(--C.usedTimes===0){const O=c.indexOf(C);c[O]=c[c.length-1],c.pop(),C.destroy()}}function oe(C){l.remove(C)}function j(){l.dispose()}return{getParameters:v,getProgramCacheKey:A,getUniforms:k,acquireProgram:U,releaseProgram:V,releaseShaderCache:oe,programs:c,dispose:j}}function Qv(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ex(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Nc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Uc(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,d,f,p,m,g){let x=o[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:m,group:g},o[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=f,x.groupOrder=p,x.renderOrder=h.renderOrder,x.z=m,x.group=g),e++,x}function a(h,d,f,p,m,g){const x=s(h,d,f,p,m,g);f.transmission>0?n.push(x):f.transparent===!0?i.push(x):t.push(x)}function l(h,d,f,p,m,g){const x=s(h,d,f,p,m,g);f.transmission>0?n.unshift(x):f.transparent===!0?i.unshift(x):t.unshift(x)}function c(h,d){t.length>1&&t.sort(h||ex),n.length>1&&n.sort(d||Nc),i.length>1&&i.sort(d||Nc)}function u(){for(let h=e,d=o.length;h<d;h++){const f=o[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function tx(){let o=new WeakMap;function e(n,i){let r;return o.has(n)===!1?(r=new Uc,o.set(n,[r])):i>=o.get(n).length?(r=new Uc,o.get(n).push(r)):r=o.get(n)[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function nx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return o[e.id]=t,t}}}function ix(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let rx=0;function sx(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function ox(o,e){const t=new nx,n=ix(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,s=new Ve,a=new Ve;function l(u,h){let d=0,f=0,p=0;for(let oe=0;oe<9;oe++)i.probe[oe].set(0,0,0);let m=0,g=0,x=0,v=0,A=0,w=0,M=0,k=0;u.sort(sx);const U=h!==!0?Math.PI:1;for(let oe=0,j=u.length;oe<j;oe++){const C=u[oe],O=C.color,re=C.intensity,G=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=O.r*re*U,f+=O.g*re*U,p+=O.b*re*U;else if(C.isLightProbe)for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(C.sh.coefficients[Z],re);else if(C.isDirectionalLight){const Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity*U),C.castShadow){const te=C.shadow,W=n.get(C);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=C.shadow.matrix,w++}i.directional[m]=Z,m++}else if(C.isSpotLight){const Z=t.get(C);if(Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(O).multiplyScalar(re*U),Z.distance=G,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,C.castShadow){const te=C.shadow,W=n.get(C);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=q,i.spotShadowMatrix[x]=C.shadow.matrix,k++}i.spot[x]=Z,x++}else if(C.isRectAreaLight){const Z=t.get(C);Z.color.copy(O).multiplyScalar(re),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=Z,v++}else if(C.isPointLight){const Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity*U),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){const te=C.shadow,W=n.get(C);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=C.shadow.matrix,M++}i.point[g]=Z,g++}else if(C.isHemisphereLight){const Z=t.get(C);Z.skyColor.copy(C.color).multiplyScalar(re*U),Z.groundColor.copy(C.groundColor).multiplyScalar(re*U),i.hemi[A]=Z,A++}}v>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const V=i.hash;(V.directionalLength!==m||V.pointLength!==g||V.spotLength!==x||V.rectAreaLength!==v||V.hemiLength!==A||V.numDirectionalShadows!==w||V.numPointShadows!==M||V.numSpotShadows!==k)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=A,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=k,i.spotShadowMap.length=k,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=k,V.directionalLength=m,V.pointLength=g,V.spotLength=x,V.rectAreaLength=v,V.hemiLength=A,V.numDirectionalShadows=w,V.numPointShadows=M,V.numSpotShadows=k,i.version=rx++)}function c(u,h){let d=0,f=0,p=0,m=0,g=0;const x=h.matrixWorldInverse;for(let v=0,A=u.length;v<A;v++){const w=u[v];if(w.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),d++}else if(w.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),p++}else if(w.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(w.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(x),f++}else if(w.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(x),M.direction.normalize(),g++}}}return{setup:l,setupView:c,state:i}}function Hc(o,e){const t=new ox(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function ax(o,e){let t=new WeakMap;function n(r,s=0){let a;return t.has(r)===!1?(a=new Hc(o,e),t.set(r,[a])):s>=t.get(r).length?(a=new Hc(o,e),t.get(r).push(a)):a=t.get(r)[s],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class wl extends Ct{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}wl.prototype.isMeshDepthMaterial=!0;class Ml extends Ct{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Ml.prototype.isMeshDistanceMaterial=!0;const lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eh(o,e,t){let n=new Eo;const i=new le,r=new le,s=new vt,a=new wl({depthPacking:ff}),l=new Ml,c={},u=t.maxTextureSize,h={0:en,1:vr,2:zn},d=new at({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:lx,fragmentShader:cx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new dt;p.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ye(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu,this.render=function(w,M,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const U=o.getRenderTarget(),V=o.getActiveCubeFace(),oe=o.getActiveMipmapLevel(),j=o.state;j.setBlending(ni),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);for(let C=0,O=w.length;C<O;C++){const re=w[C],G=re.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const q=G.getFrameExtents();if(i.multiply(q),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/q.x),i.x=r.x*q.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/q.y),i.y=r.y*q.y,G.mapSize.y=r.y)),G.map===null&&!G.isPointLightShadow&&this.type===Yr&&(G.map=new tn(i.x,i.y),G.map.texture.name=re.name+".shadowMap",G.mapPass=new tn(i.x,i.y),G.camera.updateProjectionMatrix()),G.map===null){const te={minFilter:Pt,magFilter:Pt,format:Qt};G.map=new tn(i.x,i.y,te),G.map.texture.name=re.name+".shadowMap",G.camera.updateProjectionMatrix()}o.setRenderTarget(G.map),o.clear();const Z=G.getViewportCount();for(let te=0;te<Z;te++){const W=G.getViewport(te);s.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),j.viewport(s),G.updateMatrices(re,te),n=G.getFrustum(),A(M,k,G.camera,re,this.type)}!G.isPointLightShadow&&this.type===Yr&&x(G,k),G.needsUpdate=!1}g.needsUpdate=!1,o.setRenderTarget(U,V,oe)};function x(w,M){const k=e.update(m);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(M,null,k,d,m,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(M,null,k,f,m,null)}function v(w,M,k,U,V,oe){let j=null;const C=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0?j=C:j=k.isPointLight===!0?l:a,o.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const O=j.uuid,re=M.uuid;let G=c[O];G===void 0&&(G={},c[O]=G);let q=G[re];q===void 0&&(q=j.clone(),G[re]=q),j=q}return j.visible=M.visible,j.wireframe=M.wireframe,oe===Yr?j.side=M.shadowSide!==null?M.shadowSide:M.side:j.side=M.shadowSide!==null?M.shadowSide:h[M.side],j.alphaMap=M.alphaMap,j.alphaTest=M.alphaTest,j.clipShadows=M.clipShadows,j.clippingPlanes=M.clippingPlanes,j.clipIntersection=M.clipIntersection,j.displacementMap=M.displacementMap,j.displacementScale=M.displacementScale,j.displacementBias=M.displacementBias,j.wireframeLinewidth=M.wireframeLinewidth,j.linewidth=M.linewidth,k.isPointLight===!0&&j.isMeshDistanceMaterial===!0&&(j.referencePosition.setFromMatrixPosition(k.matrixWorld),j.nearDistance=U,j.farDistance=V),j}function A(w,M,k,U,V){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&V===Yr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const C=e.update(w),O=w.material;if(Array.isArray(O)){const re=C.groups;for(let G=0,q=re.length;G<q;G++){const Z=re[G],te=O[Z.materialIndex];if(te&&te.visible){const W=v(w,te,U,k.near,k.far,V);o.renderBufferDirect(k,null,C,W,w,Z)}}}else if(O.visible){const re=v(w,O,U,k.near,k.far,V);o.renderBufferDirect(k,null,C,re,w,null)}}const j=w.children;for(let C=0,O=j.length;C<O;C++)A(j[C],M,k,U,V)}}function ux(o,e,t){const n=t.isWebGL2;function i(){let N=!1;const ye=new vt;let be=null;const Ue=new vt(0,0,0,0);return{setMask:function(Ee){be!==Ee&&!N&&(o.colorMask(Ee,Ee,Ee,Ee),be=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,ze,Ce,Ge,yt){yt===!0&&(Ee*=Ge,ze*=Ge,Ce*=Ge),ye.set(Ee,ze,Ce,Ge),Ue.equals(ye)===!1&&(o.clearColor(Ee,ze,Ce,Ge),Ue.copy(ye))},reset:function(){N=!1,be=null,Ue.set(-1,0,0,0)}}}function r(){let N=!1,ye=null,be=null,Ue=null;return{setTest:function(Ee){Ee?Re(2929):ne(2929)},setMask:function(Ee){ye!==Ee&&!N&&(o.depthMask(Ee),ye=Ee)},setFunc:function(Ee){if(be!==Ee){if(Ee)switch(Ee){case Fd:o.depthFunc(512);break;case Od:o.depthFunc(519);break;case zd:o.depthFunc(513);break;case Va:o.depthFunc(515);break;case Nd:o.depthFunc(514);break;case Ud:o.depthFunc(518);break;case Hd:o.depthFunc(516);break;case Gd:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);be=Ee}},setLocked:function(Ee){N=Ee},setClear:function(Ee){Ue!==Ee&&(o.clearDepth(Ee),Ue=Ee)},reset:function(){N=!1,ye=null,be=null,Ue=null}}}function s(){let N=!1,ye=null,be=null,Ue=null,Ee=null,ze=null,Ce=null,Ge=null,yt=null;return{setTest:function(nt){N||(nt?Re(2960):ne(2960))},setMask:function(nt){ye!==nt&&!N&&(o.stencilMask(nt),ye=nt)},setFunc:function(nt,Ot,Zt){(be!==nt||Ue!==Ot||Ee!==Zt)&&(o.stencilFunc(nt,Ot,Zt),be=nt,Ue=Ot,Ee=Zt)},setOp:function(nt,Ot,Zt){(ze!==nt||Ce!==Ot||Ge!==Zt)&&(o.stencilOp(nt,Ot,Zt),ze=nt,Ce=Ot,Ge=Zt)},setLocked:function(nt){N=nt},setClear:function(nt){yt!==nt&&(o.clearStencil(nt),yt=nt)},reset:function(){N=!1,ye=null,be=null,Ue=null,Ee=null,ze=null,Ce=null,Ge=null,yt=null}}}const a=new i,l=new r,c=new s;let u={},h={},d=new WeakMap,f=[],p=null,m=!1,g=null,x=null,v=null,A=null,w=null,M=null,k=null,U=!1,V=null,oe=null,j=null,C=null,O=null;const re=o.getParameter(35661);let G=!1,q=0;const Z=o.getParameter(7938);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=q>=2);let te=null,W={};const ae=o.getParameter(3088),ce=o.getParameter(2978),xe=new vt().fromArray(ae),de=new vt().fromArray(ce);function pe(N,ye,be){const Ue=new Uint8Array(4),Ee=o.createTexture();o.bindTexture(N,Ee),o.texParameteri(N,10241,9728),o.texParameteri(N,10240,9728);for(let ze=0;ze<be;ze++)o.texImage2D(ye+ze,0,6408,1,1,0,6408,5121,Ue);return Ee}const je={};je[3553]=pe(3553,3553,1),je[34067]=pe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(2929),l.setFunc(Va),ge(!1),B(Hl),Re(2884),K(ni);function Re(N){u[N]!==!0&&(o.enable(N),u[N]=!0)}function ne(N){u[N]!==!1&&(o.disable(N),u[N]=!1)}function Je(N,ye){return h[N]!==ye?(o.bindFramebuffer(N,ye),h[N]=ye,n&&(N===36009&&(h[36160]=ye),N===36160&&(h[36009]=ye)),!0):!1}function Xe(N,ye){let be=f,Ue=!1;if(N)if(be=d.get(ye),be===void 0&&(be=[],d.set(ye,be)),N.isWebGLMultipleRenderTargets){const Ee=N.texture;if(be.length!==Ee.length||be[0]!==36064){for(let ze=0,Ce=Ee.length;ze<Ce;ze++)be[ze]=36064+ze;be.length=Ee.length,Ue=!0}}else be[0]!==36064&&(be[0]=36064,Ue=!0);else be[0]!==1029&&(be[0]=1029,Ue=!0);Ue&&(t.isWebGL2?o.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function qe(N){return p!==N?(o.useProgram(N),p=N,!0):!1}const me={[cr]:32774,[Sd]:32778,[Cd]:32779};if(n)me[Wl]=32775,me[jl]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(me[Wl]=N.MIN_EXT,me[jl]=N.MAX_EXT)}const Ze={[Ed]:0,[Td]:1,[Ld]:768,[Tu]:770,[Dd]:776,[kd]:774,[Id]:772,[Pd]:769,[Lu]:771,[Bd]:775,[Rd]:773};function K(N,ye,be,Ue,Ee,ze,Ce,Ge){if(N===ni){m===!0&&(ne(3042),m=!1);return}if(m===!1&&(Re(3042),m=!0),N!==Md){if(N!==g||Ge!==U){if((x!==cr||w!==cr)&&(o.blendEquation(32774),x=cr,w=cr),Ge)switch(N){case pr:o.blendFuncSeparate(1,771,1,771);break;case ii:o.blendFunc(1,1);break;case Gl:o.blendFuncSeparate(0,769,0,1);break;case Vl:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case pr:o.blendFuncSeparate(770,771,1,771);break;case ii:o.blendFunc(770,1);break;case Gl:o.blendFuncSeparate(0,769,0,1);break;case Vl:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,A=null,M=null,k=null,g=N,U=Ge}return}Ee=Ee||ye,ze=ze||be,Ce=Ce||Ue,(ye!==x||Ee!==w)&&(o.blendEquationSeparate(me[ye],me[Ee]),x=ye,w=Ee),(be!==v||Ue!==A||ze!==M||Ce!==k)&&(o.blendFuncSeparate(Ze[be],Ze[Ue],Ze[ze],Ze[Ce]),v=be,A=Ue,M=ze,k=Ce),g=N,U=null}function se(N,ye){N.side===zn?ne(2884):Re(2884);let be=N.side===en;ye&&(be=!be),ge(be),N.blending===pr&&N.transparent===!1?K(ni):K(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Ue=N.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),H(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Re(32926):ne(32926)}function ge(N){V!==N&&(N?o.frontFace(2304):o.frontFace(2305),V=N)}function B(N){N!==_d?(Re(2884),N!==oe&&(N===Hl?o.cullFace(1029):N===Ad?o.cullFace(1028):o.cullFace(1032))):ne(2884),oe=N}function z(N){N!==j&&(G&&o.lineWidth(N),j=N)}function H(N,ye,be){N?(Re(32823),(C!==ye||O!==be)&&(o.polygonOffset(ye,be),C=ye,O=be)):ne(32823)}function Y(N){N?Re(3089):ne(3089)}function fe(N){N===void 0&&(N=33984+re-1),te!==N&&(o.activeTexture(N),te=N)}function Fe(N,ye){te===null&&fe();let be=W[te];be===void 0&&(be={type:void 0,texture:void 0},W[te]=be),(be.type!==N||be.texture!==ye)&&(o.bindTexture(N,ye||je[N]),be.type=N,be.texture=ye)}function ke(){const N=W[te];N!==void 0&&N.type!==void 0&&(o.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function I(){try{o.compressedTexImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function E(){try{o.texSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{o.texSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{o.texStorage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{o.texStorage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{o.texImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function T(){try{o.texImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(N){xe.equals(N)===!1&&(o.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function Me(N){de.equals(N)===!1&&(o.viewport(N.x,N.y,N.z,N.w),de.copy(N))}function we(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},te=null,W={},h={},d=new WeakMap,f=[],p=null,m=!1,g=null,x=null,v=null,A=null,w=null,M=null,k=null,U=!1,V=null,oe=null,j=null,C=null,O=null,xe.set(0,0,o.canvas.width,o.canvas.height),de.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:ne,bindFramebuffer:Je,drawBuffers:Xe,useProgram:qe,setBlending:K,setMaterial:se,setFlipSided:ge,setCullFace:B,setLineWidth:z,setPolygonOffset:H,setScissorTest:Y,activeTexture:fe,bindTexture:Fe,unbindTexture:ke,compressedTexImage2D:I,texImage2D:Ne,texImage3D:T,texStorage2D:Te,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:ve,scissor:X,viewport:Me,reset:we}}function hx(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,E){return x?new OffscreenCanvas(I,E):os("canvas")}function A(I,E,Q,ve){let Te=1;if((I.width>ve||I.height>ve)&&(Te=ve/Math.max(I.width,I.height)),Te<1||E===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Pe=E?_o:Math.floor,Ne=Pe(Te*I.width),T=Pe(Te*I.height);m===void 0&&(m=v(Ne,T));const X=Q?v(Ne,T):m;return X.width=Ne,X.height=T,X.getContext("2d").drawImage(I,0,0,Ne,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Ne+"x"+T+")."),X}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function w(I){return tl(I.width)&&tl(I.height)}function M(I){return a?!1:I.wrapS!==ln||I.wrapT!==ln||I.minFilter!==Pt&&I.minFilter!==Rt}function k(I,E){return I.generateMipmaps&&E&&I.minFilter!==Pt&&I.minFilter!==Rt}function U(I){o.generateMipmap(I)}function V(I,E,Q,ve,Te=!1){if(a===!1)return E;if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe=E;return E===6403&&(Q===5126&&(Pe=33326),Q===5131&&(Pe=33325),Q===5121&&(Pe=33321)),E===33319&&(Q===5126&&(Pe=33328),Q===5131&&(Pe=33327),Q===5121&&(Pe=33323)),E===6408&&(Q===5126&&(Pe=34836),Q===5131&&(Pe=34842),Q===5121&&(Pe=ve===We&&Te===!1?35907:32856),Q===32819&&(Pe=32854),Q===32820&&(Pe=32855)),(Pe===33325||Pe===33326||Pe===33327||Pe===33328||Pe===34842||Pe===34836)&&e.get("EXT_color_buffer_float"),Pe}function oe(I,E,Q){return k(I,Q)===!0||I.isFramebufferTexture&&I.minFilter!==Pt&&I.minFilter!==Rt?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function j(I){return I===Pt||I===qa||I===Xa?9728:9729}function C(I){const E=I.target;E.removeEventListener("dispose",C),re(E),E.isVideoTexture&&p.delete(E)}function O(I){const E=I.target;E.removeEventListener("dispose",O),q(E)}function re(I){const E=n.get(I);if(E.__webglInit===void 0)return;const Q=I.source,ve=g.get(Q);if(ve){const Te=ve[E.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&G(I),Object.keys(ve).length===0&&g.delete(Q)}n.remove(I)}function G(I){const E=n.get(I);o.deleteTexture(E.__webglTexture);const Q=I.source,ve=g.get(Q);delete ve[E.__cacheKey],s.memory.textures--}function q(I){const E=I.texture,Q=n.get(I),ve=n.get(E);if(ve.__webglTexture!==void 0&&(o.deleteTexture(ve.__webglTexture),s.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let Te=0;Te<6;Te++)o.deleteFramebuffer(Q.__webglFramebuffer[Te]),Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer[Te]);else o.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer&&o.deleteRenderbuffer(Q.__webglColorRenderbuffer),Q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Q.__webglDepthRenderbuffer);if(I.isWebGLMultipleRenderTargets)for(let Te=0,Pe=E.length;Te<Pe;Te++){const Ne=n.get(E[Te]);Ne.__webglTexture&&(o.deleteTexture(Ne.__webglTexture),s.memory.textures--),n.remove(E[Te])}n.remove(E),n.remove(I)}let Z=0;function te(){Z=0}function W(){const I=Z;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),Z+=1,I}function ae(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.encoding),E.join()}function ce(I,E){const Q=n.get(I);if(I.isVideoTexture&&Fe(I),I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){const ve=I.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(Q,I,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,Q.__webglTexture)}function xe(I,E){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){Xe(Q,I,E);return}t.activeTexture(33984+E),t.bindTexture(35866,Q.__webglTexture)}function de(I,E){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){Xe(Q,I,E);return}t.activeTexture(33984+E),t.bindTexture(32879,Q.__webglTexture)}function pe(I,E){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){qe(Q,I,E);return}t.activeTexture(33984+E),t.bindTexture(34067,Q.__webglTexture)}const je={[li]:10497,[ln]:33071,[yo]:33648},Re={[Pt]:9728,[qa]:9984,[Xa]:9986,[Rt]:9729,[Du]:9985,[Ti]:9987};function ne(I,E,Q){if(Q?(o.texParameteri(I,10242,je[E.wrapS]),o.texParameteri(I,10243,je[E.wrapT]),(I===32879||I===35866)&&o.texParameteri(I,32882,je[E.wrapR]),o.texParameteri(I,10240,Re[E.magFilter]),o.texParameteri(I,10241,Re[E.minFilter])):(o.texParameteri(I,10242,33071),o.texParameteri(I,10243,33071),(I===32879||I===35866)&&o.texParameteri(I,32882,33071),(E.wrapS!==ln||E.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(I,10240,j(E.magFilter)),o.texParameteri(I,10241,j(E.minFilter)),E.minFilter!==Pt&&E.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(E.type===ti&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===mr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(o.texParameterf(I,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Je(I,E){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",C));const ve=E.source;let Te=g.get(ve);Te===void 0&&(Te={},g.set(ve,Te));const Pe=ae(E);if(Pe!==I.__cacheKey){Te[Pe]===void 0&&(Te[Pe]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),Te[Pe].usedTimes++;const Ne=Te[I.__cacheKey];Ne!==void 0&&(Te[I.__cacheKey].usedTimes--,Ne.usedTimes===0&&G(E)),I.__cacheKey=Pe,I.__webglTexture=Te[Pe].texture}return Q}function Xe(I,E,Q){let ve=3553;E.isDataArrayTexture&&(ve=35866),E.isData3DTexture&&(ve=32879);const Te=Je(I,E),Pe=E.source;if(t.activeTexture(33984+Q),t.bindTexture(ve,I.__webglTexture),Pe.version!==Pe.__currentVersion||Te===!0){o.pixelStorei(37440,E.flipY),o.pixelStorei(37441,E.premultiplyAlpha),o.pixelStorei(3317,E.unpackAlignment),o.pixelStorei(37443,0);const Ne=M(E)&&w(E.image)===!1;let T=A(E.image,Ne,!1,u);T=ke(E,T);const X=w(T)||a,Me=r.convert(E.format,E.encoding);let we=r.convert(E.type),N=V(E.internalFormat,Me,we,E.encoding,E.isVideoTexture);ne(ve,E,X);let ye;const be=E.mipmaps,Ue=a&&E.isVideoTexture!==!0,Ee=I.__version===void 0,ze=oe(E,T,X);if(E.isDepthTexture)N=6402,a?E.type===ti?N=36012:E.type===mo?N=33190:E.type===gr?N=35056:N=33189:E.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Mi&&N===6402&&E.type!==ts&&E.type!==mo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ts,we=r.convert(E.type)),E.format===br&&N===6402&&(N=34041,E.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=gr,we=r.convert(E.type))),Ue&&Ee?t.texStorage2D(3553,1,N,T.width,T.height):t.texImage2D(3553,0,N,T.width,T.height,0,Me,we,null);else if(E.isDataTexture)if(be.length>0&&X){Ue&&Ee&&t.texStorage2D(3553,ze,N,be[0].width,be[0].height);for(let Ce=0,Ge=be.length;Ce<Ge;Ce++)ye=be[Ce],Ue?t.texSubImage2D(3553,Ce,0,0,ye.width,ye.height,Me,we,ye.data):t.texImage2D(3553,Ce,N,ye.width,ye.height,0,Me,we,ye.data);E.generateMipmaps=!1}else Ue?(Ee&&t.texStorage2D(3553,ze,N,T.width,T.height),t.texSubImage2D(3553,0,0,0,T.width,T.height,Me,we,T.data)):t.texImage2D(3553,0,N,T.width,T.height,0,Me,we,T.data);else if(E.isCompressedTexture){Ue&&Ee&&t.texStorage2D(3553,ze,N,be[0].width,be[0].height);for(let Ce=0,Ge=be.length;Ce<Ge;Ce++)ye=be[Ce],E.format!==Qt?Me!==null?Ue?t.compressedTexSubImage2D(3553,Ce,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(3553,Ce,N,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,Ce,0,0,ye.width,ye.height,Me,we,ye.data):t.texImage2D(3553,Ce,N,ye.width,ye.height,0,Me,we,ye.data)}else if(E.isDataArrayTexture)Ue?(Ee&&t.texStorage3D(35866,ze,N,T.width,T.height,T.depth),t.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,Me,we,T.data)):t.texImage3D(35866,0,N,T.width,T.height,T.depth,0,Me,we,T.data);else if(E.isData3DTexture)Ue?(Ee&&t.texStorage3D(32879,ze,N,T.width,T.height,T.depth),t.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,Me,we,T.data)):t.texImage3D(32879,0,N,T.width,T.height,T.depth,0,Me,we,T.data);else if(E.isFramebufferTexture)Ue&&Ee?t.texStorage2D(3553,ze,N,T.width,T.height):t.texImage2D(3553,0,N,T.width,T.height,0,Me,we,null);else if(be.length>0&&X){Ue&&Ee&&t.texStorage2D(3553,ze,N,be[0].width,be[0].height);for(let Ce=0,Ge=be.length;Ce<Ge;Ce++)ye=be[Ce],Ue?t.texSubImage2D(3553,Ce,0,0,Me,we,ye):t.texImage2D(3553,Ce,N,Me,we,ye);E.generateMipmaps=!1}else Ue?(Ee&&t.texStorage2D(3553,ze,N,T.width,T.height),t.texSubImage2D(3553,0,0,0,Me,we,T)):t.texImage2D(3553,0,N,Me,we,T);k(E,X)&&U(ve),Pe.__currentVersion=Pe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function qe(I,E,Q){if(E.image.length!==6)return;const ve=Je(I,E),Te=E.source;if(t.activeTexture(33984+Q),t.bindTexture(34067,I.__webglTexture),Te.version!==Te.__currentVersion||ve===!0){o.pixelStorei(37440,E.flipY),o.pixelStorei(37441,E.premultiplyAlpha),o.pixelStorei(3317,E.unpackAlignment),o.pixelStorei(37443,0);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ne=E.image[0]&&E.image[0].isDataTexture,T=[];for(let Ce=0;Ce<6;Ce++)!Pe&&!Ne?T[Ce]=A(E.image[Ce],!1,!0,c):T[Ce]=Ne?E.image[Ce].image:E.image[Ce],T[Ce]=ke(E,T[Ce]);const X=T[0],Me=w(X)||a,we=r.convert(E.format,E.encoding),N=r.convert(E.type),ye=V(E.internalFormat,we,N,E.encoding),be=a&&E.isVideoTexture!==!0,Ue=I.__version===void 0;let Ee=oe(E,X,Me);ne(34067,E,Me);let ze;if(Pe){be&&Ue&&t.texStorage2D(34067,Ee,ye,X.width,X.height);for(let Ce=0;Ce<6;Ce++){ze=T[Ce].mipmaps;for(let Ge=0;Ge<ze.length;Ge++){const yt=ze[Ge];E.format!==Qt?we!==null?be?t.compressedTexSubImage2D(34069+Ce,Ge,0,0,yt.width,yt.height,we,yt.data):t.compressedTexImage2D(34069+Ce,Ge,ye,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(34069+Ce,Ge,0,0,yt.width,yt.height,we,N,yt.data):t.texImage2D(34069+Ce,Ge,ye,yt.width,yt.height,0,we,N,yt.data)}}}else{ze=E.mipmaps,be&&Ue&&(ze.length>0&&Ee++,t.texStorage2D(34067,Ee,ye,T[0].width,T[0].height));for(let Ce=0;Ce<6;Ce++)if(Ne){be?t.texSubImage2D(34069+Ce,0,0,0,T[Ce].width,T[Ce].height,we,N,T[Ce].data):t.texImage2D(34069+Ce,0,ye,T[Ce].width,T[Ce].height,0,we,N,T[Ce].data);for(let Ge=0;Ge<ze.length;Ge++){const nt=ze[Ge].image[Ce].image;be?t.texSubImage2D(34069+Ce,Ge+1,0,0,nt.width,nt.height,we,N,nt.data):t.texImage2D(34069+Ce,Ge+1,ye,nt.width,nt.height,0,we,N,nt.data)}}else{be?t.texSubImage2D(34069+Ce,0,0,0,we,N,T[Ce]):t.texImage2D(34069+Ce,0,ye,we,N,T[Ce]);for(let Ge=0;Ge<ze.length;Ge++){const yt=ze[Ge];be?t.texSubImage2D(34069+Ce,Ge+1,0,0,we,N,yt.image[Ce]):t.texImage2D(34069+Ce,Ge+1,ye,we,N,yt.image[Ce])}}}k(E,Me)&&U(34067),Te.__currentVersion=Te.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function me(I,E,Q,ve,Te){const Pe=r.convert(Q.format,Q.encoding),Ne=r.convert(Q.type),T=V(Q.internalFormat,Pe,Ne,Q.encoding);n.get(E).__hasExternalTextures||(Te===32879||Te===35866?t.texImage3D(Te,0,T,E.width,E.height,E.depth,0,Pe,Ne,null):t.texImage2D(Te,0,T,E.width,E.height,0,Pe,Ne,null)),t.bindFramebuffer(36160,I),fe(E)?d.framebufferTexture2DMultisampleEXT(36160,ve,Te,n.get(Q).__webglTexture,0,Y(E)):o.framebufferTexture2D(36160,ve,Te,n.get(Q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ze(I,E,Q){if(o.bindRenderbuffer(36161,I),E.depthBuffer&&!E.stencilBuffer){let ve=33189;if(Q||fe(E)){const Te=E.depthTexture;Te&&Te.isDepthTexture&&(Te.type===ti?ve=36012:Te.type===mo&&(ve=33190));const Pe=Y(E);fe(E)?d.renderbufferStorageMultisampleEXT(36161,Pe,ve,E.width,E.height):o.renderbufferStorageMultisample(36161,Pe,ve,E.width,E.height)}else o.renderbufferStorage(36161,ve,E.width,E.height);o.framebufferRenderbuffer(36160,36096,36161,I)}else if(E.depthBuffer&&E.stencilBuffer){const ve=Y(E);Q&&fe(E)===!1?o.renderbufferStorageMultisample(36161,ve,35056,E.width,E.height):fe(E)?d.renderbufferStorageMultisampleEXT(36161,ve,35056,E.width,E.height):o.renderbufferStorage(36161,34041,E.width,E.height),o.framebufferRenderbuffer(36160,33306,36161,I)}else{const ve=E.isWebGLMultipleRenderTargets===!0?E.texture[0]:E.texture,Te=r.convert(ve.format,ve.encoding),Pe=r.convert(ve.type),Ne=V(ve.internalFormat,Te,Pe,ve.encoding),T=Y(E);Q&&fe(E)===!1?o.renderbufferStorageMultisample(36161,T,Ne,E.width,E.height):fe(E)?d.renderbufferStorageMultisampleEXT(36161,T,Ne,E.width,E.height):o.renderbufferStorage(36161,Ne,E.width,E.height)}o.bindRenderbuffer(36161,null)}function K(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce(E.depthTexture,0);const ve=n.get(E.depthTexture).__webglTexture,Te=Y(E);if(E.depthTexture.format===Mi)fe(E)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ve,0,Te):o.framebufferTexture2D(36160,36096,3553,ve,0);else if(E.depthTexture.format===br)fe(E)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ve,0,Te):o.framebufferTexture2D(36160,33306,3553,ve,0);else throw new Error("Unknown depthTexture format")}function se(I){const E=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");K(E.__webglFramebuffer,I)}else if(Q){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(36160,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]=o.createRenderbuffer(),Ze(E.__webglDepthbuffer[ve],I,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),Ze(E.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function ge(I,E,Q){const ve=n.get(I);E!==void 0&&me(ve.__webglFramebuffer,I,I.texture,36064,3553),Q!==void 0&&se(I)}function B(I){const E=I.texture,Q=n.get(I),ve=n.get(E);I.addEventListener("dispose",O),I.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=E.version,s.memory.textures++);const Te=I.isWebGLCubeRenderTarget===!0,Pe=I.isWebGLMultipleRenderTargets===!0,Ne=w(I)||a;if(Te){Q.__webglFramebuffer=[];for(let T=0;T<6;T++)Q.__webglFramebuffer[T]=o.createFramebuffer()}else if(Q.__webglFramebuffer=o.createFramebuffer(),Pe)if(i.drawBuffers){const T=I.texture;for(let X=0,Me=T.length;X<Me;X++){const we=n.get(T[X]);we.__webglTexture===void 0&&(we.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&I.samples>0&&fe(I)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=o.createRenderbuffer(),o.bindRenderbuffer(36161,Q.__webglColorRenderbuffer);const T=r.convert(E.format,E.encoding),X=r.convert(E.type),Me=V(E.internalFormat,T,X,E.encoding),we=Y(I);o.renderbufferStorageMultisample(36161,we,Me,I.width,I.height),t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064,36161,Q.__webglColorRenderbuffer),o.bindRenderbuffer(36161,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Ze(Q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}if(Te){t.bindTexture(34067,ve.__webglTexture),ne(34067,E,Ne);for(let T=0;T<6;T++)me(Q.__webglFramebuffer[T],I,E,36064,34069+T);k(E,Ne)&&U(34067),t.unbindTexture()}else if(Pe){const T=I.texture;for(let X=0,Me=T.length;X<Me;X++){const we=T[X],N=n.get(we);t.bindTexture(3553,N.__webglTexture),ne(3553,we,Ne),me(Q.__webglFramebuffer,I,we,36064+X,3553),k(we,Ne)&&U(3553)}t.unbindTexture()}else{let T=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?T=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,ve.__webglTexture),ne(T,E,Ne),me(Q.__webglFramebuffer,I,E,36064,T),k(E,Ne)&&U(T),t.unbindTexture()}I.depthBuffer&&se(I)}function z(I){const E=w(I)||a,Q=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ve=0,Te=Q.length;ve<Te;ve++){const Pe=Q[ve];if(k(Pe,E)){const Ne=I.isWebGLCubeRenderTarget?34067:3553,T=n.get(Pe).__webglTexture;t.bindTexture(Ne,T),U(Ne),t.unbindTexture()}}}function H(I){if(a&&I.samples>0&&fe(I)===!1){const E=I.width,Q=I.height;let ve=16384;const Te=[36064],Pe=I.stencilBuffer?33306:36096;I.depthBuffer&&Te.push(Pe);const Ne=n.get(I),T=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;T===!1&&(I.depthBuffer&&(ve|=256),I.stencilBuffer&&(ve|=1024)),t.bindFramebuffer(36008,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ne.__webglFramebuffer),T===!0&&(o.invalidateFramebuffer(36008,[Pe]),o.invalidateFramebuffer(36009,[Pe])),o.blitFramebuffer(0,0,E,Q,0,0,E,Q,ve,9728),f&&o.invalidateFramebuffer(36008,Te),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Ne.__webglMultisampledFramebuffer)}}function Y(I){return Math.min(h,I.samples)}function fe(I){const E=n.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Fe(I){const E=s.render.frame;p.get(I)!==E&&(p.set(I,E),I.update())}function ke(I,E){const Q=I.encoding,ve=I.format,Te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===el||Q!==Mn&&(Q===We?a===!1?e.has("EXT_sRGB")===!0&&ve===Qt?(I.format=el,I.minFilter=Rt,I.generateMipmaps=!1):E=Pi.sRGBToLinear(E):(ve!==Qt||Te!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Q)),E}this.allocateTextureUnit=W,this.resetTextureUnits=te,this.setTexture2D=ce,this.setTexture2DArray=xe,this.setTexture3D=de,this.setTextureCube=pe,this.rebindTextures=ge,this.setupRenderTarget=B,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=me,this.useMultisampledRTT=fe}function dx(o,e,t){const n=t.isWebGL2;function i(r,s=null){let a;if(r===ci)return 5121;if(r===Zd)return 32819;if(r===$d)return 32820;if(r===qd)return 5120;if(r===Xd)return 5122;if(r===ts)return 5123;if(r===Yd)return 5124;if(r===mo)return 5125;if(r===ti)return 5126;if(r===mr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Kd)return 6406;if(r===Qt)return 6408;if(r===Qd)return 6409;if(r===ef)return 6410;if(r===Mi)return 6402;if(r===br)return 34041;if(r===tf)return 6403;if(r===Jd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===el)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===nf)return 36244;if(r===rf)return 33319;if(r===sf)return 33320;if(r===of)return 36249;if(r===go||r===ta||r===na||r===vo)if(s===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===go)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===go)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ya||r===ql||r===Za||r===Xl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ql)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Za)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$a||r===Ka)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===$a)return s===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ka)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ja||r===Yl||r===Zl||r===$l||r===Kl||r===Jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===rc||r===sc||r===oc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ja)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yl)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zl)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$l)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kl)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jl)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ql)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ec)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tc)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nc)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ic)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rc)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sc)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oc)return s===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Qa)return s===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===gr)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class th extends Wt{constructor(e=[]){super(),this.cameras=e}}th.prototype.isArrayCamera=!0;class St extends ht{constructor(){super(),this.type="Group"}}St.prototype.isGroup=!0;const fx={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fx))),c&&e.hand){s=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const v=new St;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[m.jointName]=v,c.add(v)}const x=c.joints[m.jointName];g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=g.radius),x.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}}class nh extends Et{constructor(e,t,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:Mi,u!==Mi&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mi&&(n=ts),n===void 0&&u===br&&(n=gr),super(null,i,r,s,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1}}nh.prototype.isDepthTexture=!0;class px extends hi{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=null,c=null,u=null,h=null,d=null;const f=t.getContextAttributes();let p=null,m=null;const g=[],x=new Map,v=new Wt;v.layers.enable(1),v.viewport=new vt;const A=new Wt;A.layers.enable(2),A.viewport=new vt;const w=[v,A],M=new th;M.layers.enable(1),M.layers.enable(2);let k=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ae=g[W];return ae===void 0&&(ae=new Pa,g[W]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(W){let ae=g[W];return ae===void 0&&(ae=new Pa,g[W]=ae),ae.getGripSpace()},this.getHand=function(W){let ae=g[W];return ae===void 0&&(ae=new Pa,g[W]=ae),ae.getHandSpace()};function V(W){const ae=x.get(W.inputSource);ae&&ae.dispatchEvent({type:W.type,data:W.inputSource})}function oe(){x.forEach(function(W,ae){W.disconnect(ae)}),x.clear(),k=null,U=null,e.setRenderTarget(p),h=null,u=null,c=null,i=null,m=null,te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return c},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",oe),i.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:h}),m=new tn(h.framebufferWidth,h.framebufferHeight,{format:Qt,type:ci,encoding:e.outputEncoding})}else{let ae=null,ce=null,xe=null;f.depth&&(xe=f.stencil?35056:33190,ae=f.stencil?br:Mi,ce=f.stencil?gr:ts);const de={colorFormat:e.outputEncoding===We?35907:32856,depthFormat:xe,scaleFactor:r};c=new XRWebGLBinding(i,t),u=c.createProjectionLayer(de),i.updateRenderState({layers:[u]}),m=new tn(u.textureWidth,u.textureHeight,{format:Qt,type:ci,depthTexture:new nh(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const pe=e.properties.get(m);pe.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),s=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function j(W){const ae=i.inputSources;for(let ce=0;ce<g.length;ce++)x.set(ae[ce],g[ce]);for(let ce=0;ce<W.removed.length;ce++){const xe=W.removed[ce],de=x.get(xe);de&&(de.dispatchEvent({type:"disconnected",data:xe}),x.delete(xe))}for(let ce=0;ce<W.added.length;ce++){const xe=W.added[ce],de=x.get(xe);de&&de.dispatchEvent({type:"connected",data:xe})}}const C=new L,O=new L;function re(W,ae,ce){C.setFromMatrixPosition(ae.matrixWorld),O.setFromMatrixPosition(ce.matrixWorld);const xe=C.distanceTo(O),de=ae.projectionMatrix.elements,pe=ce.projectionMatrix.elements,je=de[14]/(de[10]-1),Re=de[14]/(de[10]+1),ne=(de[9]+1)/de[5],Je=(de[9]-1)/de[5],Xe=(de[8]-1)/de[0],qe=(pe[8]+1)/pe[0],me=je*Xe,Ze=je*qe,K=xe/(-Xe+qe),se=K*-Xe;ae.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(se),W.translateZ(K),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const ge=je+K,B=Re+K,z=me-se,H=Ze+(xe-se),Y=ne*Re/B*ge,fe=Je*Re/B*ge;W.projectionMatrix.makePerspective(z,H,Y,fe,ge,B)}function G(W,ae){ae===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ae.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;M.near=A.near=v.near=W.near,M.far=A.far=v.far=W.far,(k!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),k=M.near,U=M.far);const ae=W.parent,ce=M.cameras;G(M,ae);for(let de=0;de<ce.length;de++)G(ce[de],ae);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),W.position.copy(M.position),W.quaternion.copy(M.quaternion),W.scale.copy(M.scale),W.matrix.copy(M.matrix),W.matrixWorld.copy(M.matrixWorld);const xe=W.children;for(let de=0,pe=xe.length;de<pe;de++)xe[de].updateMatrixWorld(!0);ce.length===2?re(M,v,A):M.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(W){u!==null&&(u.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)};let q=null;function Z(W,ae){if(l=ae.getViewerPose(s),d=ae,l!==null){const xe=l.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let de=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let pe=0;pe<xe.length;pe++){const je=xe[pe];let Re=null;if(h!==null)Re=h.getViewport(je);else{const Je=c.getViewSubImage(u,je);Re=Je.viewport,pe===0&&(e.setRenderTargetTextures(m,Je.colorTexture,u.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(m))}const ne=w[pe];ne.matrix.fromArray(je.transform.matrix),ne.projectionMatrix.fromArray(je.projectionMatrix),ne.viewport.set(Re.x,Re.y,Re.width,Re.height),pe===0&&M.matrix.copy(ne.matrix),de===!0&&M.cameras.push(ne)}}const ce=i.inputSources;for(let xe=0;xe<g.length;xe++){const de=g[xe],pe=ce[xe];de.update(pe,ae,s)}q&&q(W,ae),d=null}const te=new qu;te.setAnimationLoop(Z),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}}function mx(o,e){function t(m,g){m.fogColor.value.copy(g.color),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,x,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?i(m,g):g.isMeshToonMaterial?(i(m,g),u(m,g)):g.isMeshPhongMaterial?(i(m,g),c(m,g)):g.isMeshStandardMaterial?(i(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,A)):g.isMeshMatcapMaterial?(i(m,g),f(m,g)):g.isMeshDepthMaterial?i(m,g):g.isMeshDistanceMaterial?(i(m,g),p(m,g)):g.isMeshNormalMaterial?i(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&s(m,g)):g.isPointsMaterial?a(m,g,x,v):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function i(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===en&&(m.bumpScale.value*=-1)),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===en&&m.normalScale.value.negate()),g.specularMap&&(m.specularMap.value=g.specularMap),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const w=o.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*w}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let v;g.map?v=g.map:g.specularMap?v=g.specularMap:g.displacementMap?v=g.displacementMap:g.normalMap?v=g.normalMap:g.bumpMap?v=g.bumpMap:g.roughnessMap?v=g.roughnessMap:g.metalnessMap?v=g.metalnessMap:g.alphaMap?v=g.alphaMap:g.emissiveMap?v=g.emissiveMap:g.clearcoatMap?v=g.clearcoatMap:g.clearcoatNormalMap?v=g.clearcoatNormalMap:g.clearcoatRoughnessMap?v=g.clearcoatRoughnessMap:g.specularIntensityMap?v=g.specularIntensityMap:g.specularColorMap?v=g.specularColorMap:g.transmissionMap?v=g.transmissionMap:g.thicknessMap?v=g.thicknessMap:g.sheenColorMap?v=g.sheenColorMap:g.sheenRoughnessMap&&(v=g.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let A;g.aoMap?A=g.aoMap:g.lightMap&&(A=g.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uv2Transform.value.copy(A.matrix))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function s(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function a(m,g,x,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=v*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let A;g.map?A=g.map:g.alphaMap&&(A=g.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uvTransform.value.copy(A.matrix))}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x;g.map?x=g.map:g.alphaMap&&(x=g.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===en&&m.clearcoatNormalScale.value.negate())),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap)}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function p(m,g){m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function gx(){const o=os("canvas");return o.style.display="block",o}function gt(o={}){const e=o.canvas!==void 0?o.canvas:gx(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;o.context!==void 0?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,d=null;const f=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mn,this.physicallyCorrectLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const m=this;let g=!1,x=0,v=0,A=null,w=-1,M=null;const k=new vt,U=new vt;let V=null,oe=e.width,j=e.height,C=1,O=null,re=null;const G=new vt(0,0,oe,j),q=new vt(0,0,oe,j);let Z=!1;const te=new Eo;let W=!1,ae=!1,ce=null;const xe=new Ve,de=new le,pe=new L,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return A===null?C:1}let ne=t;function Je(R,$){for(let ie=0;ie<R.length;ie++){const J=R[ie],ue=e.getContext(J,$);if(ue!==null)return ue}return null}try{const R={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",N,!1),e.addEventListener("webglcontextrestored",ye,!1),ne===null){const $=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&$.shift(),ne=Je($,R),ne===null)throw Je($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xe,qe,me,Ze,K,se,ge,B,z,H,Y,fe,Fe,ke,I,E,Q,ve,Te,Pe,Ne,T,X;function Me(){Xe=new Bg(ne),qe=new Tg(ne,Xe,o),Xe.init(qe),T=new dx(ne,Xe,qe),me=new ux(ne,Xe,qe),Ze=new Og,K=new Qv,se=new hx(ne,Xe,me,K,qe,T,Ze),ge=new Pg(m),B=new kg(m),z=new Kf(ne,qe),X=new Cg(ne,Xe,z,qe),H=new Dg(ne,z,Ze,X),Y=new Hg(ne,H,z,Ze),Te=new Ug(ne,qe,se),E=new Lg(K),fe=new Jv(m,ge,B,Xe,qe,X,E),Fe=new mx(m,K),ke=new tx,I=new ax(Xe,qe),ve=new Sg(m,ge,me,Y,u,s),Q=new eh(m,Y,qe),Pe=new Eg(ne,Xe,Ze,qe),Ne=new Fg(ne,Xe,Ze,qe),Ze.programs=fe.programs,m.capabilities=qe,m.extensions=Xe,m.properties=K,m.renderLists=ke,m.shadowMap=Q,m.state=me,m.info=Ze}Me();const we=new px(m,ne);this.xr=we,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(R){R!==void 0&&(C=R,this.setSize(oe,j,!1))},this.getSize=function(R){return R.set(oe,j)},this.setSize=function(R,$,ie){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,j=$,e.width=Math.floor(R*C),e.height=Math.floor($*C),ie!==!1&&(e.style.width=R+"px",e.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(oe*C,j*C).floor()},this.setDrawingBufferSize=function(R,$,ie){oe=R,j=$,C=ie,e.width=Math.floor(R*ie),e.height=Math.floor($*ie),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,$,ie,J){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,$,ie,J),me.viewport(k.copy(G).multiplyScalar(C).floor())},this.getScissor=function(R){return R.copy(q)},this.setScissor=function(R,$,ie,J){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,$,ie,J),me.scissor(U.copy(q).multiplyScalar(C).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(R){me.setScissorTest(Z=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(R=!0,$=!0,ie=!0){let J=0;R&&(J|=16384),$&&(J|=256),ie&&(J|=1024),ne.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",N,!1),e.removeEventListener("webglcontextrestored",ye,!1),ke.dispose(),I.dispose(),K.dispose(),ge.dispose(),B.dispose(),Y.dispose(),X.dispose(),fe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ge),we.removeEventListener("sessionend",yt),ce&&(ce.dispose(),ce=null),nt.stop()};function N(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const R=Ze.autoReset,$=Q.enabled,ie=Q.autoUpdate,J=Q.needsUpdate,ue=Q.type;Me(),Ze.autoReset=R,Q.enabled=$,Q.autoUpdate=ie,Q.needsUpdate=J,Q.type=ue}function be(R){const $=R.target;$.removeEventListener("dispose",be),Ue($)}function Ue(R){Ee(R),K.remove(R)}function Ee(R){const $=K.get(R).programs;$!==void 0&&($.forEach(function(ie){fe.releaseProgram(ie)}),R.isShaderMaterial&&fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ie,J,ue,$e){$===null&&($=je);const Qe=ue.isMesh&&ue.matrixWorld.determinant()<0,tt=Di(R,$,ie,J,ue);me.setMaterial(J,Qe);let et=ie.index;const lt=ie.attributes.position;if(et===null){if(lt===void 0||lt.count===0)return}else if(et.count===0)return;let it=1;J.wireframe===!0&&(et=H.getWireframeAttribute(ie),it=2),X.setup(ue,J,tt,ie,et);let rt,_t=Pe;et!==null&&(rt=z.get(et),_t=Ne,_t.setIndex(rt));const dn=et!==null?et.count:lt.count,En=ie.drawRange.start*it,Vn=ie.drawRange.count*it,nn=$e!==null?$e.start*it:0,ct=$e!==null?$e.count*it:1/0,rn=Math.max(En,nn),At=Math.min(dn,En+Vn,nn+ct)-1,zt=Math.max(0,At-rn+1);if(zt!==0){if(ue.isMesh)J.wireframe===!0?(me.setLineWidth(J.wireframeLinewidth*Re()),_t.setMode(1)):_t.setMode(4);else if(ue.isLine){let sn=J.linewidth;sn===void 0&&(sn=1),me.setLineWidth(sn*Re()),ue.isLineSegments?_t.setMode(1):ue.isLineLoop?_t.setMode(2):_t.setMode(3)}else ue.isPoints?_t.setMode(0):ue.isSprite&&_t.setMode(4);if(ue.isInstancedMesh)_t.renderInstances(rn,zt,ue.count);else if(ie.isInstancedBufferGeometry){const sn=Math.min(ie.instanceCount,ie._maxInstanceCount);_t.renderInstances(rn,zt,sn)}else _t.render(rn,zt)}},this.compile=function(R,$){d=I.get(R),d.init(),p.push(d),R.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(d.pushLight(ie),ie.castShadow&&d.pushShadow(ie))}),d.setupLights(m.physicallyCorrectLights),R.traverse(function(ie){const J=ie.material;if(J)if(Array.isArray(J))for(let ue=0;ue<J.length;ue++){const $e=J[ue];Hn($e,R,ie)}else Hn(J,R,ie)}),p.pop(),d=null};let ze=null;function Ce(R){ze&&ze(R)}function Ge(){nt.stop()}function yt(){nt.start()}const nt=new qu;nt.setAnimationLoop(Ce),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(R){ze=R,we.setAnimationLoop(R),R===null?nt.stop():nt.start()},we.addEventListener("sessionstart",Ge),we.addEventListener("sessionend",yt),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;R.autoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera($),$=we.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,$,A),d=I.get(R,p.length),d.init(),p.push(d),xe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),te.setFromProjectionMatrix(xe),ae=this.localClippingEnabled,W=E.init(this.clippingPlanes,ae,$),h=ke.get(R,f.length),h.init(),f.push(h),Ot(R,$,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(O,re),W===!0&&E.beginShadows();const ie=d.state.shadowsArray;if(Q.render(ie,R,$),W===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(h,R),d.setupLights(m.physicallyCorrectLights),$.isArrayCamera){const J=$.cameras;for(let ue=0,$e=J.length;ue<$e;ue++){const Qe=J[ue];Zt(h,R,Qe,Qe.viewport)}}else Zt(h,R,$);A!==null&&(se.updateMultisampleRenderTarget(A),se.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(m,R,$),X.resetDefaultState(),w=-1,M=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Ot(R,$,ie,J){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){J&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);const Qe=Y.update(R),tt=R.material;tt.visible&&h.push(R,Qe,tt,ie,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Ze.render.frame&&(R.skeleton.update(),R.skeleton.frame=Ze.render.frame),!R.frustumCulled||te.intersectsObject(R))){J&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);const Qe=Y.update(R),tt=R.material;if(Array.isArray(tt)){const et=Qe.groups;for(let lt=0,it=et.length;lt<it;lt++){const rt=et[lt],_t=tt[rt.materialIndex];_t&&_t.visible&&h.push(R,Qe,_t,ie,pe.z,rt)}}else tt.visible&&h.push(R,Qe,tt,ie,pe.z,null)}}const $e=R.children;for(let Qe=0,tt=$e.length;Qe<tt;Qe++)Ot($e[Qe],$,ie,J)}function Zt(R,$,ie,J){const ue=R.opaque,$e=R.transmissive,Qe=R.transparent;d.setupLightsView(ie),$e.length>0&&zo(ue,$,ie),J&&me.viewport(k.copy(J)),ue.length>0&&Un(ue,$,ie),$e.length>0&&Un($e,$,ie),Qe.length>0&&Un(Qe,$,ie),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function zo(R,$,ie){const J=qe.isWebGL2;ce===null&&(ce=new tn(1,1,{generateMipmaps:!0,type:T.convert(mr)!==null?mr:ci,minFilter:Ti,samples:J&&r===!0?4:0})),m.getDrawingBufferSize(de),J?ce.setSize(de.x,de.y):ce.setSize(_o(de.x),_o(de.y));const ue=m.getRenderTarget();m.setRenderTarget(ce),m.clear();const $e=m.toneMapping;m.toneMapping=wn,Un(R,$,ie),m.toneMapping=$e,se.updateMultisampleRenderTarget(ce),se.updateRenderTargetMipmap(ce),m.setRenderTarget(ue)}function Un(R,$,ie){const J=$.isScene===!0?$.overrideMaterial:null;for(let ue=0,$e=R.length;ue<$e;ue++){const Qe=R[ue],tt=Qe.object,et=Qe.geometry,lt=J===null?Qe.material:J,it=Qe.group;tt.layers.test(ie.layers)&&No(tt,$,ie,et,lt,it)}}function No(R,$,ie,J,ue,$e){R.onBeforeRender(m,$,ie,J,ue,$e),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ue.onBeforeRender(m,$,ie,J,R,$e),ue.transparent===!0&&ue.side===zn?(ue.side=en,ue.needsUpdate=!0,m.renderBufferDirect(ie,$,J,ue,R,$e),ue.side=vr,ue.needsUpdate=!0,m.renderBufferDirect(ie,$,J,ue,R,$e),ue.side=zn):m.renderBufferDirect(ie,$,J,ue,R,$e),R.onAfterRender(m,$,ie,J,ue,$e)}function Hn(R,$,ie){$.isScene!==!0&&($=je);const J=K.get(R),ue=d.state.lights,$e=d.state.shadowsArray,Qe=ue.state.version,tt=fe.getParameters(R,ue.state,$e,$,ie),et=fe.getProgramCacheKey(tt);let lt=J.programs;J.environment=R.isMeshStandardMaterial?$.environment:null,J.fog=$.fog,J.envMap=(R.isMeshStandardMaterial?B:ge).get(R.envMap||J.environment),lt===void 0&&(R.addEventListener("dispose",be),lt=new Map,J.programs=lt);let it=lt.get(et);if(it!==void 0){if(J.currentProgram===it&&J.lightsStateVersion===Qe)return ys(R,tt),it}else tt.uniforms=fe.getUniforms(R),R.onBuild(ie,tt,m),R.onBeforeCompile(tt,m),it=fe.acquireProgram(tt,et),lt.set(et,it),J.uniforms=tt.uniforms;const rt=J.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(rt.clippingPlanes=E.uniform),ys(R,tt),J.needsLights=Rr(R),J.lightsStateVersion=Qe,J.needsLights&&(rt.ambientLightColor.value=ue.state.ambient,rt.lightProbe.value=ue.state.probe,rt.directionalLights.value=ue.state.directional,rt.directionalLightShadows.value=ue.state.directionalShadow,rt.spotLights.value=ue.state.spot,rt.spotLightShadows.value=ue.state.spotShadow,rt.rectAreaLights.value=ue.state.rectArea,rt.ltc_1.value=ue.state.rectAreaLTC1,rt.ltc_2.value=ue.state.rectAreaLTC2,rt.pointLights.value=ue.state.point,rt.pointLightShadows.value=ue.state.pointShadow,rt.hemisphereLights.value=ue.state.hemi,rt.directionalShadowMap.value=ue.state.directionalShadowMap,rt.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,rt.spotShadowMap.value=ue.state.spotShadowMap,rt.spotShadowMatrix.value=ue.state.spotShadowMatrix,rt.pointShadowMap.value=ue.state.pointShadowMap,rt.pointShadowMatrix.value=ue.state.pointShadowMatrix);const _t=it.getUniforms(),dn=ri.seqWithValue(_t.seq,rt);return J.currentProgram=it,J.uniformsList=dn,it}function ys(R,$){const ie=K.get(R);ie.outputEncoding=$.outputEncoding,ie.instancing=$.instancing,ie.skinning=$.skinning,ie.morphTargets=$.morphTargets,ie.morphNormals=$.morphNormals,ie.morphColors=$.morphColors,ie.morphTargetsCount=$.morphTargetsCount,ie.numClippingPlanes=$.numClippingPlanes,ie.numIntersection=$.numClipIntersection,ie.vertexAlphas=$.vertexAlphas,ie.vertexTangents=$.vertexTangents,ie.toneMapping=$.toneMapping}function Di(R,$,ie,J,ue){$.isScene!==!0&&($=je),se.resetTextureUnits();const $e=$.fog,Qe=J.isMeshStandardMaterial?$.environment:null,tt=A===null?m.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Mn,et=(J.isMeshStandardMaterial?B:ge).get(J.envMap||Qe),lt=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,it=!!J.normalMap&&!!ie.attributes.tangent,rt=!!ie.morphAttributes.position,_t=!!ie.morphAttributes.normal,dn=!!ie.morphAttributes.color,En=J.toneMapped?m.toneMapping:wn,Vn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,nn=Vn!==void 0?Vn.length:0,ct=K.get(J),rn=d.state.lights;if(W===!0&&(ae===!0||R!==M)){const Gt=R===M&&J.id===w;E.setState(J,R,Gt)}let At=!1;J.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==rn.state.version||ct.outputEncoding!==tt||ue.isInstancedMesh&&ct.instancing===!1||!ue.isInstancedMesh&&ct.instancing===!0||ue.isSkinnedMesh&&ct.skinning===!1||!ue.isSkinnedMesh&&ct.skinning===!0||ct.envMap!==et||J.fog&&ct.fog!==$e||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==E.numPlanes||ct.numIntersection!==E.numIntersection)||ct.vertexAlphas!==lt||ct.vertexTangents!==it||ct.morphTargets!==rt||ct.morphNormals!==_t||ct.morphColors!==dn||ct.toneMapping!==En||qe.isWebGL2===!0&&ct.morphTargetsCount!==nn)&&(At=!0):(At=!0,ct.__version=J.version);let zt=ct.currentProgram;At===!0&&(zt=Hn(J,$,ue));let sn=!1,fi=!1,pi=!1;const Dt=zt.getUniforms(),xn=ct.uniforms;if(me.useProgram(zt.program)&&(sn=!0,fi=!0,pi=!0),J.id!==w&&(w=J.id,fi=!0),sn||M!==R){if(Dt.setValue(ne,"projectionMatrix",R.projectionMatrix),qe.logarithmicDepthBuffer&&Dt.setValue(ne,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),M!==R&&(M=R,fi=!0,pi=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const Gt=Dt.map.cameraPosition;Gt!==void 0&&Gt.setValue(ne,pe.setFromMatrixPosition(R.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Dt.setValue(ne,"isOrthographic",R.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||ue.isSkinnedMesh)&&Dt.setValue(ne,"viewMatrix",R.matrixWorldInverse)}if(ue.isSkinnedMesh){Dt.setOptional(ne,ue,"bindMatrix"),Dt.setOptional(ne,ue,"bindMatrixInverse");const Gt=ue.skeleton;Gt&&(qe.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Dt.setValue(ne,"boneTexture",Gt.boneTexture,se),Dt.setValue(ne,"boneTextureSize",Gt.boneTextureSize)):Dt.setOptional(ne,Gt,"boneMatrices"))}const kr=ie.morphAttributes;return(kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0&&qe.isWebGL2===!0)&&Te.update(ue,ie,J,zt),(fi||ct.receiveShadow!==ue.receiveShadow)&&(ct.receiveShadow=ue.receiveShadow,Dt.setValue(ne,"receiveShadow",ue.receiveShadow)),fi&&(Dt.setValue(ne,"toneMappingExposure",m.toneMappingExposure),ct.needsLights&&Gn(xn,pi),$e&&J.fog&&Fe.refreshFogUniforms(xn,$e),Fe.refreshMaterialUniforms(xn,J,C,j,ce),ri.upload(ne,ct.uniformsList,xn,se)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ri.upload(ne,ct.uniformsList,xn,se),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Dt.setValue(ne,"center",ue.center),Dt.setValue(ne,"modelViewMatrix",ue.modelViewMatrix),Dt.setValue(ne,"normalMatrix",ue.normalMatrix),Dt.setValue(ne,"modelMatrix",ue.matrixWorld),zt}function Gn(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Rr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,$,ie){K.get(R.texture).__webglTexture=$,K.get(R.depthTexture).__webglTexture=ie;const J=K.get(R);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=ie===void 0,J.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,$){const ie=K.get(R);ie.__webglFramebuffer=$,ie.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,ie=0){A=R,x=$,v=ie;let J=!0;if(R){const et=K.get(R);et.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),J=!1):et.__webglFramebuffer===void 0?se.setupRenderTarget(R):et.__hasExternalTextures&&se.rebindTextures(R,K.get(R.texture).__webglTexture,K.get(R.depthTexture).__webglTexture)}let ue=null,$e=!1,Qe=!1;if(R){const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture)&&(Qe=!0);const lt=K.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ue=lt[$],$e=!0):qe.isWebGL2&&R.samples>0&&se.useMultisampledRTT(R)===!1?ue=K.get(R).__webglMultisampledFramebuffer:ue=lt,k.copy(R.viewport),U.copy(R.scissor),V=R.scissorTest}else k.copy(G).multiplyScalar(C).floor(),U.copy(q).multiplyScalar(C).floor(),V=Z;if(me.bindFramebuffer(36160,ue)&&qe.drawBuffers&&J&&me.drawBuffers(R,ue),me.viewport(k),me.scissor(U),me.setScissorTest(V),$e){const et=K.get(R.texture);ne.framebufferTexture2D(36160,36064,34069+$,et.__webglTexture,ie)}else if(Qe){const et=K.get(R.texture),lt=$||0;ne.framebufferTextureLayer(36160,36064,et.__webglTexture,ie||0,lt)}w=-1},this.readRenderTargetPixels=function(R,$,ie,J,ue,$e,Qe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Qe!==void 0&&(tt=tt[Qe]),tt){me.bindFramebuffer(36160,tt);try{const et=R.texture,lt=et.format,it=et.type;if(lt!==Qt&&T.convert(lt)!==ne.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=it===mr&&(Xe.has("EXT_color_buffer_half_float")||qe.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(it!==ci&&T.convert(it)!==ne.getParameter(35738)&&!(it===ti&&(qe.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-J&&ie>=0&&ie<=R.height-ue&&ne.readPixels($,ie,J,ue,T.convert(lt),T.convert(it),$e)}finally{const et=A!==null?K.get(A).__webglFramebuffer:null;me.bindFramebuffer(36160,et)}}},this.copyFramebufferToTexture=function(R,$,ie=0){if($.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const J=Math.pow(2,-ie),ue=Math.floor($.image.width*J),$e=Math.floor($.image.height*J);se.setTexture2D($,0),ne.copyTexSubImage2D(3553,ie,0,0,R.x,R.y,ue,$e),me.unbindTexture()},this.copyTextureToTexture=function(R,$,ie,J=0){const ue=$.image.width,$e=$.image.height,Qe=T.convert(ie.format),tt=T.convert(ie.type);se.setTexture2D(ie,0),ne.pixelStorei(37440,ie.flipY),ne.pixelStorei(37441,ie.premultiplyAlpha),ne.pixelStorei(3317,ie.unpackAlignment),$.isDataTexture?ne.texSubImage2D(3553,J,R.x,R.y,ue,$e,Qe,tt,$.image.data):$.isCompressedTexture?ne.compressedTexSubImage2D(3553,J,R.x,R.y,$.mipmaps[0].width,$.mipmaps[0].height,Qe,$.mipmaps[0].data):ne.texSubImage2D(3553,J,R.x,R.y,Qe,tt,$.image),J===0&&ie.generateMipmaps&&ne.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(R,$,ie,J,ue=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const $e=R.max.x-R.min.x+1,Qe=R.max.y-R.min.y+1,tt=R.max.z-R.min.z+1,et=T.convert(J.format),lt=T.convert(J.type);let it;if(J.isData3DTexture)se.setTexture3D(J,0),it=32879;else if(J.isDataArrayTexture)se.setTexture2DArray(J,0),it=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(37440,J.flipY),ne.pixelStorei(37441,J.premultiplyAlpha),ne.pixelStorei(3317,J.unpackAlignment);const rt=ne.getParameter(3314),_t=ne.getParameter(32878),dn=ne.getParameter(3316),En=ne.getParameter(3315),Vn=ne.getParameter(32877),nn=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;ne.pixelStorei(3314,nn.width),ne.pixelStorei(32878,nn.height),ne.pixelStorei(3316,R.min.x),ne.pixelStorei(3315,R.min.y),ne.pixelStorei(32877,R.min.z),ie.isDataTexture||ie.isData3DTexture?ne.texSubImage3D(it,ue,$.x,$.y,$.z,$e,Qe,tt,et,lt,nn.data):ie.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(it,ue,$.x,$.y,$.z,$e,Qe,tt,et,nn.data)):ne.texSubImage3D(it,ue,$.x,$.y,$.z,$e,Qe,tt,et,lt,nn),ne.pixelStorei(3314,rt),ne.pixelStorei(32878,_t),ne.pixelStorei(3316,dn),ne.pixelStorei(3315,En),ne.pixelStorei(32877,Vn),ue===0&&J.generateMipmaps&&ne.generateMipmap(it),me.unbindTexture()},this.initTexture=function(R){se.setTexture2D(R,0),me.unbindTexture()},this.resetState=function(){x=0,v=0,A=null,me.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}gt.prototype.isWebGLRenderer=!0;class vx extends gt{}vx.prototype.isWebGL1Renderer=!0;class Sl extends ht{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Sl.prototype.isScene=!0;class Er{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=is,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Er.prototype.isInterleavedBuffer=!0;const Xt=new L;class wr{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}wr.prototype.isInterleavedBufferAttribute=!0;class Cl extends Ct{constructor(e){super(),this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Cl.prototype.isSpriteMaterial=!0;let sr;const Ur=new L,or=new L,ar=new L,lr=new le,Hr=new le,ih=new Ve,Qs=new L,Gr=new L,eo=new L,Gc=new le,Ia=new le,Vc=new le;class xx extends ht{constructor(e){if(super(),this.type="Sprite",sr===void 0){sr=new dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Er(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new wr(n,3,0,!1)),sr.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=sr,this.material=e!==void 0?e:new Cl,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),ih.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-ar.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;to(Qs.set(-.5,-.5,0),ar,s,or,i,r),to(Gr.set(.5,-.5,0),ar,s,or,i,r),to(eo.set(.5,.5,0),ar,s,or,i,r),Gc.set(0,0),Ia.set(1,0),Vc.set(1,1);let a=e.ray.intersectTriangle(Qs,Gr,eo,!1,Ur);if(a===null&&(to(Gr.set(-.5,.5,0),ar,s,or,i,r),Ia.set(0,1),a=e.ray.intersectTriangle(Qs,eo,Gr,!1,Ur),a===null))return;const l=e.ray.origin.distanceTo(Ur);l<e.near||l>e.far||t.push({distance:l,point:Ur.clone(),uv:Bt.getUV(Ur,Qs,Gr,eo,Gc,Ia,Vc,new le),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}xx.prototype.isSprite=!0;function to(o,e,t,n,i,r){lr.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(Hr.x=r*lr.x-i*lr.y,Hr.y=i*lr.x+r*lr.y):Hr.copy(lr),o.copy(e),o.x+=Hr.x,o.y+=Hr.y,o.applyMatrix4(ih)}const Wc=new L,jc=new vt,qc=new vt,yx=new L,Xc=new Ve;class El extends Ye{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;jc.fromBufferAttribute(i.attributes.skinIndex,e),qc.fromBufferAttribute(i.attributes.skinWeight,e),Wc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=qc.getComponent(r);if(s!==0){const a=jc.getComponent(r);Xc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yx.copy(Wc).applyMatrix4(Xc),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}El.prototype.isSkinnedMesh=!0;class Tl extends ht{constructor(){super(),this.type="Bone"}}Tl.prototype.isBone=!0;class rh extends Et{constructor(e=null,t=1,n=1,i,r,s,a,l,c=Pt,u=Pt,h,d){super(null,s,a,l,c,u,i,r,h,d),this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}rh.prototype.isDataTexture=!0;const Yc=new Ve,bx=new Ve;class Ll{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:bx;Yc.multiplyMatrices(a,t[r]),Yc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ll(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Nu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rh(t,e,e,Qt,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Tl),this.bones.push(s),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class il extends xt{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}il.prototype.isInstancedBufferAttribute=!0;const Zc=new Ve,$c=new Ve,no=[],Vr=new Ye;class ei extends Ye{constructor(e,t,n){super(e,t),this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Zc),$c.multiplyMatrices(n,Zc),Vr.matrixWorld=$c,Vr.raycast(e,no);for(let s=0,a=no.length;s<a;s++){const l=no[s];l.instanceId=r,l.object=this,t.push(l)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}ei.prototype.isInstancedMesh=!0;class Bi extends Ct{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Le(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Bi.prototype.isLineBasicMaterial=!0;const Kc=new L,Jc=new L,Qc=new Ve,Ra=new Ri,io=new Ii;class Po extends ht{constructor(e=new dt,t=new Bi){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Kc.fromBufferAttribute(t,i-1),Jc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Kc.distanceTo(Jc);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Qc.copy(i).invert(),Ra.copy(e.ray).applyMatrix4(Qc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,d=new L,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const p=n.index,g=n.attributes.position;if(p!==null){const x=Math.max(0,s.start),v=Math.min(p.count,s.start+s.count);for(let A=x,w=v-1;A<w;A+=f){const M=p.getX(A),k=p.getX(A+1);if(c.fromBufferAttribute(g,M),u.fromBufferAttribute(g,k),Ra.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(d);V<e.near||V>e.far||t.push({distance:V,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,s.start),v=Math.min(g.count,s.start+s.count);for(let A=x,w=v-1;A<w;A+=f){if(c.fromBufferAttribute(g,A),u.fromBufferAttribute(g,A+1),Ra.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(d);k<e.near||k>e.far||t.push({distance:k,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Po.prototype.isLine=!0;const eu=new L,tu=new L;class Io extends Po{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)eu.fromBufferAttribute(t,i),tu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+eu.distanceTo(tu);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Io.prototype.isLineSegments=!0;class sh extends Po{constructor(e,t){super(e,t),this.type="LineLoop"}}sh.prototype.isLineLoop=!0;class Ro extends Ct{constructor(e){super(),this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Ro.prototype.isPointsMaterial=!0;const nu=new Ve,rl=new Ri,ro=new Ii,so=new L;class ko extends ht{constructor(e=new dt,t=new Ro){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;nu.copy(i).invert(),rl.copy(e.ray).applyMatrix4(nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let p=d,m=f;p<m;p++){const g=c.getX(p);so.fromBufferAttribute(h,g),iu(so,g,l,i,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let p=d,m=f;p<m;p++)so.fromBufferAttribute(h,p),iu(so,p,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ko.prototype.isPoints=!0;function iu(o,e,t,n,i,r,s){const a=rl.distanceSqToPoint(o);if(a<t){const l=new L;rl.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class _x extends Et{constructor(e,t,n,i,r,s,a,l,c){super(e,t,n,i,r,s,a,l,c),this.minFilter=s!==void 0?s:Rt,this.magFilter=r!==void 0?r:Rt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}_x.prototype.isVideoTexture=!0;class Ax extends Et{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}}Ax.prototype.isFramebufferTexture=!0;class sl extends Et{constructor(e,t,n,i,r,s,a,l,c,u,h,d){super(null,s,a,l,c,u,i,r,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}sl.prototype.isCompressedTexture=!0;class oh extends Et{constructor(e,t,n,i,r,s,a,l,c){super(e,t,n,i,r,s,a,l,c),this.needsUpdate=!0}}oh.prototype.isCanvasTexture=!0;class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-s,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(s-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),l=t||(s.isVector2?new le:new L);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],s=[],a=new L,l=new Ve;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new L)}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(kt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(kt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),s[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bo extends un{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new le,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Bo.prototype.isEllipseCurve=!0;class ah extends Bo{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.type="ArcCurve"}}ah.prototype.isArcCurve=!0;function Pl(){let o=0,e=0,t=0,n=0;function i(r,s,a,l){o=r,e=a,t=-3*r+3*s-2*a-l,n=2*r-2*s+a+l}return{initCatmullRom:function(r,s,a,l,c){i(s,a,c*(a-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,a,l,c,u,h){let d=(s-r)/c-(a-r)/(c+u)+(a-s)/u,f=(a-s)/u-(l-s)/(u+h)+(l-a)/h;d*=u,f*=u,i(s,a,d,f)},calc:function(r){const s=r*r,a=s*r;return o+e*r+t*s+n*a}}}const oo=new L,ka=new Pl,Ba=new Pl,Da=new Pl;class lh extends un{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(oo.subVectors(i[0],i[1]).add(i[0]),c=oo);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(oo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=oo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);m<1e-4&&(m=1),p<1e-4&&(p=m),g<1e-4&&(g=m),ka.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,m,g),Ba.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,m,g),Da.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,m,g)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ba.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Da.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ka.calc(l),Ba.calc(l),Da.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}lh.prototype.isCatmullRomCurve3=!0;function ru(o,e,t,n,i){const r=(n-e)*.5,s=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*a+r*o+t}function wx(o,e){const t=1-o;return t*t*e}function Mx(o,e){return 2*(1-o)*o*e}function Sx(o,e){return o*o*e}function Jr(o,e,t,n){return wx(o,e)+Mx(o,t)+Sx(o,n)}function Cx(o,e){const t=1-o;return t*t*t*e}function Ex(o,e){const t=1-o;return 3*t*t*o*e}function Tx(o,e){return 3*(1-o)*o*o*e}function Lx(o,e){return o*o*o*e}function Qr(o,e,t,n,i){return Cx(o,e)+Ex(o,t)+Tx(o,n)+Lx(o,i)}class Il extends un{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Qr(e,i.x,r.x,s.x,a.x),Qr(e,i.y,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Il.prototype.isCubicBezierCurve=!0;class ch extends un{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Qr(e,i.x,r.x,s.x,a.x),Qr(e,i.y,r.y,s.y,a.y),Qr(e,i.z,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ch.prototype.isCubicBezierCurve3=!0;class Do extends un{constructor(e=new le,t=new le){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new le;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Do.prototype.isLineCurve=!0;class Px extends un{constructor(e=new L,t=new L){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rl extends un{constructor(e=new le,t=new le,n=new le){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Jr(e,i.x,r.x,s.x),Jr(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Rl.prototype.isQuadraticBezierCurve=!0;class uh extends un{constructor(e=new L,t=new L,n=new L){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Jr(e,i.x,r.x,s.x),Jr(e,i.y,r.y,s.y),Jr(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}uh.prototype.isQuadraticBezierCurve3=!0;class kl extends un{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),a=r-s,l=i[s===0?s:s-1],c=i[s],u=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(ru(a,l.x,c.x,u.x,h.x),ru(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}kl.prototype.isSplineCurve=!0;var hh=Object.freeze({__proto__:null,ArcCurve:ah,CatmullRomCurve3:lh,CubicBezierCurve:Il,CubicBezierCurve3:ch,EllipseCurve:Bo,LineCurve:Do,LineCurve3:Px,QuadraticBezierCurve:Rl,QuadraticBezierCurve3:uh,SplineCurve:kl});class Ix extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Do(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const s=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-s/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new hh[i.type]().fromJSON(i))}return this}}class ol extends Ix{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Do(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Rl(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){const a=new Il(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,s,a,l),this}absellipse(e,t,n,i,r,s,a,l){const c=new Bo(e,t,n,i,r,s,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bl extends dt{constructor(e=[new le(0,.5),new le(.5,0),new le(0,-.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=kt(i,0,Math.PI*2);const r=[],s=[],a=[],l=[],c=[],u=1/t,h=new L,d=new le,f=new L,p=new L,m=new L;let g=0,x=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,f.x=x*1,f.y=-g,f.z=x*0,m.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:g=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,f.x=x*1,f.y=-g,f.z=x*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),l.push(f.x,f.y,f.z),m.copy(p)}for(let v=0;v<=t;v++){const A=n+v*u*i,w=Math.sin(A),M=Math.cos(A);for(let k=0;k<=e.length-1;k++){h.x=e[k].x*w,h.y=e[k].y,h.z=e[k].x*M,s.push(h.x,h.y,h.z),d.x=v/t,d.y=k/(e.length-1),a.push(d.x,d.y);const U=l[3*k+0]*w,V=l[3*k+1],oe=l[3*k+0]*M;c.push(U,V,oe)}}for(let v=0;v<t;v++)for(let A=0;A<e.length-1;A++){const w=A+v*e.length,M=w,k=w+e.length,U=w+e.length+1,V=w+1;r.push(M,k,V),r.push(U,V,k)}this.setIndex(r),this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(a,2)),this.setAttribute("normal",new bt(c,3))}static fromJSON(e){return new Bl(e.points,e.segments,e.phiStart,e.phiLength)}}class Fo extends dt{constructor(e=1,t=1,n=1,i=8,r=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const m=[],g=n/2;let x=0;v(),s===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function v(){const w=new L,M=new L;let k=0;const U=(t-e)/n;for(let V=0;V<=r;V++){const oe=[],j=V/r,C=j*(t-e)+e;for(let O=0;O<=i;O++){const re=O/i,G=re*l+a,q=Math.sin(G),Z=Math.cos(G);M.x=C*q,M.y=-j*n+g,M.z=C*Z,h.push(M.x,M.y,M.z),w.set(q,U,Z).normalize(),d.push(w.x,w.y,w.z),f.push(re,1-j),oe.push(p++)}m.push(oe)}for(let V=0;V<i;V++)for(let oe=0;oe<r;oe++){const j=m[oe][V],C=m[oe+1][V],O=m[oe+1][V+1],re=m[oe][V+1];u.push(j,C,re),u.push(C,O,re),k+=6}c.addGroup(x,k,0),x+=k}function A(w){const M=p,k=new le,U=new L;let V=0;const oe=w===!0?e:t,j=w===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,g*j,0),d.push(0,j,0),f.push(.5,.5),p++;const C=p;for(let O=0;O<=i;O++){const G=O/i*l+a,q=Math.cos(G),Z=Math.sin(G);U.x=oe*Z,U.y=g*j,U.z=oe*q,h.push(U.x,U.y,U.z),d.push(0,j,0),k.x=q*.5+.5,k.y=Z*.5*j+.5,f.push(k.x,k.y),p++}for(let O=0;O<i;O++){const re=M+O,G=C+O;w===!0?u.push(G,G+1,re):u.push(G+1,G,re),V+=3}c.addGroup(x,V,w===!0?1:2),x+=V}}static fromJSON(e){return new Fo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ps extends ol{constructor(e){super(e),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ol().fromJSON(i))}return this}}const Rx={triangulate:function(o,e,t=2){const n=e&&e.length,i=n?e[0]*t:o.length;let r=dh(o,0,i,t,!0);const s=[];if(!r||r.next===r.prev)return s;let a,l,c,u,h,d,f;if(n&&(r=Ox(o,e,r,t)),o.length>80*t){a=c=o[0],l=u=o[1];for(let p=t;p<i;p+=t)h=o[p],d=o[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?1/f:0}return as(r,s,t,a,l,f),s}};function dh(o,e,t,n,i){let r,s;if(i===Yx(o,e,t,n)>0)for(r=e;r<t;r+=n)s=su(r,o[r],o[r+1],s);else for(r=t-n;r>=e;r-=n)s=su(r,o[r],o[r+1],s);return s&&Oo(s,s.next)&&(cs(s),s=s.next),s}function ui(o,e){if(!o)return o;e||(e=o);let t=o,n;do if(n=!1,!t.steiner&&(Oo(t,t.next)||Mt(t.prev,t,t.next)===0)){if(cs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function as(o,e,t,n,i,r,s){if(!o)return;!s&&r&&Gx(o,n,i,r);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,r?Bx(o,n,i,r):kx(o)){e.push(l.i/t),e.push(o.i/t),e.push(c.i/t),cs(o),o=c.next,a=c.next;continue}if(o=c,o===a){s?s===1?(o=Dx(ui(o),e,t),as(o,e,t,n,i,r,2)):s===2&&Fx(o,e,t,n,i,r):as(ui(o),e,t,n,i,r,1);break}}}function kx(o){const e=o.prev,t=o,n=o.next;if(Mt(e,t,n)>=0)return!1;let i=o.next.next;for(;i!==o.prev;){if(fr(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Mt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Bx(o,e,t,n){const i=o.prev,r=o,s=o.next;if(Mt(i,r,s)>=0)return!1;const a=i.x<r.x?i.x<s.x?i.x:s.x:r.x<s.x?r.x:s.x,l=i.y<r.y?i.y<s.y?i.y:s.y:r.y<s.y?r.y:s.y,c=i.x>r.x?i.x>s.x?i.x:s.x:r.x>s.x?r.x:s.x,u=i.y>r.y?i.y>s.y?i.y:s.y:r.y>s.y?r.y:s.y,h=al(a,l,e,t,n),d=al(c,u,e,t,n);let f=o.prevZ,p=o.nextZ;for(;f&&f.z>=h&&p&&p.z<=d;){if(f!==o.prev&&f!==o.next&&fr(i.x,i.y,r.x,r.y,s.x,s.y,f.x,f.y)&&Mt(f.prev,f,f.next)>=0||(f=f.prevZ,p!==o.prev&&p!==o.next&&fr(i.x,i.y,r.x,r.y,s.x,s.y,p.x,p.y)&&Mt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==o.prev&&f!==o.next&&fr(i.x,i.y,r.x,r.y,s.x,s.y,f.x,f.y)&&Mt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==o.prev&&p!==o.next&&fr(i.x,i.y,r.x,r.y,s.x,s.y,p.x,p.y)&&Mt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Dx(o,e,t){let n=o;do{const i=n.prev,r=n.next.next;!Oo(i,r)&&fh(i,n,n.next,r)&&ls(i,r)&&ls(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),cs(n),cs(n.next),n=o=r),n=n.next}while(n!==o);return ui(n)}function Fx(o,e,t,n,i,r){let s=o;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&jx(s,a)){let l=ph(s,a);s=ui(s,s.next),l=ui(l,l.next),as(s,e,t,n,i,r),as(l,e,t,n,i,r);return}a=a.next}s=s.next}while(s!==o)}function Ox(o,e,t,n){const i=[];let r,s,a,l,c;for(r=0,s=e.length;r<s;r++)a=e[r]*n,l=r<s-1?e[r+1]*n:o.length,c=dh(o,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Wx(c));for(i.sort(zx),r=0;r<i.length;r++)Nx(i[r],t),t=ui(t,t.next);return t}function zx(o,e){return o.x-e.x}function Nx(o,e){if(e=Ux(o,e),e){const t=ph(e,o);ui(e,e.next),ui(t,t.next)}}function Ux(o,e){let t=e;const n=o.x,i=o.y;let r=-1/0,s;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!s)return null;if(n===r)return s;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do n>=t.x&&t.x>=l&&n!==t.x&&fr(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),ls(t,o)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Hx(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Hx(o,e){return Mt(o.prev,o,e.prev)<0&&Mt(e.next,o,o.next)<0}function Gx(o,e,t,n){let i=o;do i.z===null&&(i.z=al(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,Vx(i)}function Vx(o){let e,t,n,i,r,s,a,l,c=1;do{for(t=o,o=null,r=null,s=0;t;){for(s++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:o=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(s>1);return o}function al(o,e,t,n,i){return o=32767*(o-t)*i,e=32767*(e-n)*i,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function Wx(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function fr(o,e,t,n,i,r,s,a){return(i-s)*(e-a)-(o-s)*(r-a)>=0&&(o-s)*(n-a)-(t-s)*(e-a)>=0&&(t-s)*(r-a)-(i-s)*(n-a)>=0}function jx(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!qx(o,e)&&(ls(o,e)&&ls(e,o)&&Xx(o,e)&&(Mt(o.prev,o,e.prev)||Mt(o,e.prev,e))||Oo(o,e)&&Mt(o.prev,o,o.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function Oo(o,e){return o.x===e.x&&o.y===e.y}function fh(o,e,t,n){const i=lo(Mt(o,e,t)),r=lo(Mt(o,e,n)),s=lo(Mt(t,n,o)),a=lo(Mt(t,n,e));return!!(i!==r&&s!==a||i===0&&ao(o,t,e)||r===0&&ao(o,n,e)||s===0&&ao(t,o,n)||a===0&&ao(t,e,n))}function ao(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function lo(o){return o>0?1:o<0?-1:0}function qx(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&fh(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function ls(o,e){return Mt(o.prev,o,o.next)<0?Mt(o,e,o.next)>=0&&Mt(o,o.prev,e)>=0:Mt(o,e,o.prev)<0||Mt(o,o.next,e)<0}function Xx(o,e){let t=o,n=!1;const i=(o.x+e.x)/2,r=(o.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==o);return n}function ph(o,e){const t=new ll(o.i,o.x,o.y),n=new ll(e.i,e.x,e.y),i=o.next,r=e.prev;return o.next=e,e.prev=o,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function su(o,e,t,n){const i=new ll(o,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function cs(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function ll(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yx(o,e,t,n){let i=0;for(let r=e,s=t-n;r<t;r+=n)i+=(o[s]-o[r])*(o[r+1]+o[s+1]),s=r;return i}class si{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return si.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];ou(e),au(n,e);let s=e.length;t.forEach(ou);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,au(n,t[l]);const a=Rx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ou(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function au(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class Tr extends dt{constructor(e=new ps([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s(c)}this.setAttribute("position",new bt(i,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function s(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Zx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let A,w=!1,M,k,U,V;x&&(A=x.getSpacedPoints(u),w=!0,d=!1,M=x.computeFrenetFrames(u,!1),k=new L,U=new L,V=new L),d||(g=0,f=0,p=0,m=0);const oe=a.extractPoints(c);let j=oe.shape;const C=oe.holes;if(!si.isClockWise(j)){j=j.reverse();for(let K=0,se=C.length;K<se;K++){const ge=C[K];si.isClockWise(ge)&&(C[K]=ge.reverse())}}const re=si.triangulateShape(j,C),G=j;for(let K=0,se=C.length;K<se;K++){const ge=C[K];j=j.concat(ge)}function q(K,se,ge){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().multiplyScalar(ge).add(K)}const Z=j.length,te=re.length;function W(K,se,ge){let B,z,H;const Y=K.x-se.x,fe=K.y-se.y,Fe=ge.x-K.x,ke=ge.y-K.y,I=Y*Y+fe*fe,E=Y*ke-fe*Fe;if(Math.abs(E)>Number.EPSILON){const Q=Math.sqrt(I),ve=Math.sqrt(Fe*Fe+ke*ke),Te=se.x-fe/Q,Pe=se.y+Y/Q,Ne=ge.x-ke/ve,T=ge.y+Fe/ve,X=((Ne-Te)*ke-(T-Pe)*Fe)/(Y*ke-fe*Fe);B=Te+Y*X-K.x,z=Pe+fe*X-K.y;const Me=B*B+z*z;if(Me<=2)return new le(B,z);H=Math.sqrt(Me/2)}else{let Q=!1;Y>Number.EPSILON?Fe>Number.EPSILON&&(Q=!0):Y<-Number.EPSILON?Fe<-Number.EPSILON&&(Q=!0):Math.sign(fe)===Math.sign(ke)&&(Q=!0),Q?(B=-fe,z=Y,H=Math.sqrt(I)):(B=Y,z=fe,H=Math.sqrt(I/2))}return new le(B/H,z/H)}const ae=[];for(let K=0,se=G.length,ge=se-1,B=K+1;K<se;K++,ge++,B++)ge===se&&(ge=0),B===se&&(B=0),ae[K]=W(G[K],G[ge],G[B]);const ce=[];let xe,de=ae.concat();for(let K=0,se=C.length;K<se;K++){const ge=C[K];xe=[];for(let B=0,z=ge.length,H=z-1,Y=B+1;B<z;B++,H++,Y++)H===z&&(H=0),Y===z&&(Y=0),xe[B]=W(ge[B],ge[H],ge[Y]);ce.push(xe),de=de.concat(xe)}for(let K=0;K<g;K++){const se=K/g,ge=f*Math.cos(se*Math.PI/2),B=p*Math.sin(se*Math.PI/2)+m;for(let z=0,H=G.length;z<H;z++){const Y=q(G[z],ae[z],B);Je(Y.x,Y.y,-ge)}for(let z=0,H=C.length;z<H;z++){const Y=C[z];xe=ce[z];for(let fe=0,Fe=Y.length;fe<Fe;fe++){const ke=q(Y[fe],xe[fe],B);Je(ke.x,ke.y,-ge)}}}const pe=p+m;for(let K=0;K<Z;K++){const se=d?q(j[K],de[K],pe):j[K];w?(U.copy(M.normals[0]).multiplyScalar(se.x),k.copy(M.binormals[0]).multiplyScalar(se.y),V.copy(A[0]).add(U).add(k),Je(V.x,V.y,V.z)):Je(se.x,se.y,0)}for(let K=1;K<=u;K++)for(let se=0;se<Z;se++){const ge=d?q(j[se],de[se],pe):j[se];w?(U.copy(M.normals[K]).multiplyScalar(ge.x),k.copy(M.binormals[K]).multiplyScalar(ge.y),V.copy(A[K]).add(U).add(k),Je(V.x,V.y,V.z)):Je(ge.x,ge.y,h/u*K)}for(let K=g-1;K>=0;K--){const se=K/g,ge=f*Math.cos(se*Math.PI/2),B=p*Math.sin(se*Math.PI/2)+m;for(let z=0,H=G.length;z<H;z++){const Y=q(G[z],ae[z],B);Je(Y.x,Y.y,h+ge)}for(let z=0,H=C.length;z<H;z++){const Y=C[z];xe=ce[z];for(let fe=0,Fe=Y.length;fe<Fe;fe++){const ke=q(Y[fe],xe[fe],B);w?Je(ke.x,ke.y+A[u-1].y,A[u-1].x+ge):Je(ke.x,ke.y,h+ge)}}}je(),Re();function je(){const K=i.length/3;if(d){let se=0,ge=Z*se;for(let B=0;B<te;B++){const z=re[B];Xe(z[2]+ge,z[1]+ge,z[0]+ge)}se=u+g*2,ge=Z*se;for(let B=0;B<te;B++){const z=re[B];Xe(z[0]+ge,z[1]+ge,z[2]+ge)}}else{for(let se=0;se<te;se++){const ge=re[se];Xe(ge[2],ge[1],ge[0])}for(let se=0;se<te;se++){const ge=re[se];Xe(ge[0]+Z*u,ge[1]+Z*u,ge[2]+Z*u)}}n.addGroup(K,i.length/3-K,0)}function Re(){const K=i.length/3;let se=0;ne(G,se),se+=G.length;for(let ge=0,B=C.length;ge<B;ge++){const z=C[ge];ne(z,se),se+=z.length}n.addGroup(K,i.length/3-K,1)}function ne(K,se){let ge=K.length;for(;--ge>=0;){const B=ge;let z=ge-1;z<0&&(z=K.length-1);for(let H=0,Y=u+g*2;H<Y;H++){const fe=Z*H,Fe=Z*(H+1),ke=se+B+fe,I=se+z+fe,E=se+z+Fe,Q=se+B+Fe;qe(ke,I,E,Q)}}}function Je(K,se,ge){l.push(K),l.push(se),l.push(ge)}function Xe(K,se,ge){me(K),me(se),me(ge);const B=i.length/3,z=v.generateTopUV(n,i,B-3,B-2,B-1);Ze(z[0]),Ze(z[1]),Ze(z[2])}function qe(K,se,ge,B){me(K),me(se),me(B),me(se),me(ge),me(B);const z=i.length/3,H=v.generateSideWallUV(n,i,z-6,z-3,z-2,z-1);Ze(H[0]),Ze(H[1]),Ze(H[3]),Ze(H[1]),Ze(H[2]),Ze(H[3])}function me(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function Ze(K){r.push(K.x),r.push(K.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $x(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new hh[i.type]().fromJSON(i)),new Tr(n,e.options)}}const Zx={generateTopUV:function(o,e,t,n,i){const r=e[t*3],s=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new le(r,s),new le(a,l),new le(c,u)]},generateSideWallUV:function(o,e,t,n,i,r){const s=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],m=e[r*3],g=e[r*3+1],x=e[r*3+2];return Math.abs(a-u)<Math.abs(s-c)?[new le(s,1-l),new le(c,1-h),new le(d,1-p),new le(m,1-x)]:[new le(a,1-l),new le(u,1-h),new le(f,1-p),new le(g,1-x)]}};function $x(o,e,t){if(t.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const r=o[n];t.shapes.push(r.uuid)}else t.shapes.push(o.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Dl extends dt{constructor(e=new ps([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],s=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new bt(i,3)),this.setAttribute("normal",new bt(r,3)),this.setAttribute("uv",new bt(s,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;si.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,x=p.length;g<x;g++){const v=p[g];si.isClockWise(v)===!0&&(p[g]=v.reverse())}const m=si.triangulateShape(f,p);for(let g=0,x=p.length;g<x;g++){const v=p[g];f=f.concat(v)}for(let g=0,x=f.length;g<x;g++){const v=f[g];i.push(v.x,v.y,0),r.push(0,0,1),s.push(v.x,v.y)}for(let g=0,x=m.length;g<x;g++){const v=m[g],A=v[0]+h,w=v[1]+h,M=v[2]+h;n.push(A,w,M),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Kx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const s=t[e.shapes[i]];n.push(s)}return new Dl(n,e.curveSegments)}}function Kx(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,n=o.length;t<n;t++){const i=o[t];e.shapes.push(i.uuid)}else e.shapes.push(o.uuid);return e}class Fl extends dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let c=0;const u=[],h=new L,d=new L,f=[],p=[],m=[],g=[];for(let x=0;x<=n;x++){const v=[],A=x/n;let w=0;x==0&&s==0?w=.5/t:x==n&&l==Math.PI&&(w=-.5/t);for(let M=0;M<=t;M++){const k=M/t;h.x=-e*Math.cos(i+k*r)*Math.sin(s+A*a),h.y=e*Math.cos(s+A*a),h.z=e*Math.sin(i+k*r)*Math.sin(s+A*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),g.push(k+w,1-A),v.push(c++)}u.push(v)}for(let x=0;x<n;x++)for(let v=0;v<t;v++){const A=u[x][v+1],w=u[x][v],M=u[x+1][v],k=u[x+1][v+1];(x!==0||s>0)&&f.push(A,w,k),(x!==n-1||l<Math.PI)&&f.push(w,M,k)}this.setIndex(f),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(m,3)),this.setAttribute("uv",new bt(g,2))}static fromJSON(e){return new Fl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mh extends Ct{constructor(e){super(),this.type="ShadowMaterial",this.color=new Le(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}mh.prototype.isShadowMaterial=!0;class gh extends at{constructor(e){super(e),this.type="RawShaderMaterial"}}gh.prototype.isRawShaderMaterial=!0;class Lr extends Ct{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Lr.prototype.isMeshStandardMaterial=!0;class di extends Lr{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}di.prototype.isMeshPhysicalMaterial=!0;class vh extends Ct{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}vh.prototype.isMeshPhongMaterial=!0;class xh extends Ct{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}xh.prototype.isMeshToonMaterial=!0;class yh extends Ct{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}yh.prototype.isMeshNormalMaterial=!0;class bh extends Ct{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}bh.prototype.isMeshLambertMaterial=!0;class Lt extends Ct{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Le(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Li,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Lt.prototype.isMeshMatcapMaterial=!0;class _h extends Bi{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}_h.prototype.isLineDashedMaterial=!0;const Jx={ShadowMaterial:mh,SpriteMaterial:Cl,RawShaderMaterial:gh,ShaderMaterial:at,PointsMaterial:Ro,MeshPhysicalMaterial:di,MeshStandardMaterial:Lr,MeshPhongMaterial:vh,MeshToonMaterial:xh,MeshNormalMaterial:yh,MeshLambertMaterial:bh,MeshDepthMaterial:wl,MeshDistanceMaterial:Ml,MeshBasicMaterial:mt,MeshMatcapMaterial:Lt,LineDashedMaterial:_h,LineBasicMaterial:Bi,Material:Ct};Ct.fromType=function(o){return new Jx[o]};const wt={arraySlice:function(o,e,t){return wt.isTypedArray(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)},convertArray:function(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i},flattenJSON:function(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)},subclip:function(o,e,t,n,i=30){const r=o.clone();r.name=e;const s=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){h.push(c.times[f]);for(let m=0;m<u;++m)d.push(c.values[f*u+m])}}h.length!==0&&(c.times=wt.convertArray(h,c.times.constructor),c.values=wt.convertArray(d,c.values.constructor),s.push(c))}r.tracks=s;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(o,e=0,t=o,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let s=0;s<i;++s){const a=t.tracks[s],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=o.tracks.find(function(x){return x.name===a.name&&x.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let m;if(r<=a.times[0]){const x=u,v=h-u;m=wt.arraySlice(a.values,x,v)}else if(r>=a.times[p]){const x=p*h+u,v=x+h-u;m=wt.arraySlice(a.values,x,v)}else{const x=a.createInterpolant(),v=u,A=h-u;x.evaluate(r),m=wt.arraySlice(x.resultBuffer,v,A)}l==="quaternion"&&new Ht().fromArray(m).normalize().conjugate().toArray(m);const g=c.times.length;for(let x=0;x<g;++x){const v=x*f+d;if(l==="quaternion")Ht.multiplyQuaternionsFlat(c.values,v,m,0,c.values,v);else{const A=f-d*2;for(let w=0;w<A;++w)c.values[v+w]-=m[w]}}}return o.blendMode=Ou,o}};class Nn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Nn.prototype.beforeStart_=Nn.prototype.copySampleValue_;Nn.prototype.afterEnd_=Nn.prototype.copySampleValue_;class Qx extends Nn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ur,endingEnd:ur}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case hr:r=e,a=2*t-n;break;case bo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hr:s=e,l=2*n-t;break;case bo:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),m=p*p,g=m*p,x=-d*g+2*d*m-d*p,v=(1+d)*g+(-1.5-2*d)*m+(-.5+d)*p+1,A=(-1-f)*g+(1.5+f)*m+.5*p,w=f*g-f*m;for(let M=0;M!==a;++M)r[M]=x*s[u+M]+v*s[c+M]+A*s[l+M]+w*s[h+M];return r}}class Ah extends Nn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=s[c+d]*h+s[l+d]*u;return r}}class e0 extends Nn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wt.convertArray(t,this.TimeBufferType),this.values=wt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wt.convertArray(e.times,Array),values:wt.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new e0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ns:t=this.InterpolantFactoryMethodDiscrete;break;case _r:t=this.InterpolantFactoryMethodLinear;break;case ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ns;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=wt.arraySlice(n,r,s),this.values=wt.arraySlice(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&wt.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=wt.arraySlice(this.times),t=wt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===ia,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const m=t[h+p];if(m!==t[d+p]||m!==t[f+p]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const h=a*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=wt.arraySlice(e,0,s),this.values=wt.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=wt.arraySlice(this.times,0),t=wt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=_r;class Pr extends Cn{}Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=ns;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class wh extends Cn{}wh.prototype.ValueTypeName="color";class us extends Cn{}us.prototype.ValueTypeName="number";class t0 extends Nn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ht.slerpFlat(r,0,s,c-a,s,c,l);return r}}class Ci extends Cn{InterpolantFactoryMethodLinear(e){return new t0(this.times,this.values,this.getValueSize(),e)}}Ci.prototype.ValueTypeName="quaternion";Ci.prototype.DefaultInterpolation=_r;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class Ir extends Cn{}Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=ns;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends Cn{}hs.prototype.ValueTypeName="vector";class cl{constructor(e,t=-1,n,i=ml){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(i0(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=wt.getKeyframeOrder(l);l=wt.sortedArray(l,1,u),c=wt.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new us(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,m){if(f.length!==0){const g=[],x=[];wt.flattenJSON(f,g,x,p),g.length!==0&&m.push(new h(d,g,x))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let m=0;m<d[p].morphTargets.length;m++)f[d[p].morphTargets[m]]=-1;for(const m in f){const g=[],x=[];for(let v=0;v!==d[p].morphTargets.length;++v){const A=d[p];g.push(A.time),x.push(A.morphTarget===m?1:0)}i.push(new us(".morphTargetInfluence["+m+"]",g,x))}l=f.length*s}else{const f=".bones["+t[h].name+"]";n(hs,f+".position",d,"pos",i),n(Ci,f+".quaternion",d,"rot",i),n(hs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function n0(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return wh;case"quaternion":return Ci;case"bool":case"boolean":return Pr;case"string":return Ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function i0(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=n0(o.type);if(o.times===void 0){const t=[],n=[];wt.flattenJSON(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Mr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class r0{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const s0=new r0;let vn=class{constructor(e){this.manager=e!==void 0?e:s0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const kn={};class oi extends vn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Mr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:i});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=kn[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let m=0;const g=new ReadableStream({start(x){v();function v(){h.read().then(({done:A,value:w})=>{if(A)x.close();else{m+=w.byteLength;const M=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:f});for(let k=0,U=u.length;k<U;k++){const V=u[k];V.onProgress&&V.onProgress(M)}x.enqueue(w),v()}})}}});return new Response(g)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Mr.add(e,c);const u=kn[e];delete kn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Mh extends vn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Mr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=os("img");function l(){u(),Mr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class o0 extends vn{constructor(e){super(e)}load(e,t,n,i){const r=new Co,s=new Mh(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function l(c){s.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Sh extends vn{constructor(e){super(e)}load(e,t,n,i){const r=new Et,s=new Mh(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Sn extends ht{constructor(e,t=1){super(),this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Sn.prototype.isLight=!0;class a0 extends Sn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(ht.DefaultUp),this.updateMatrix(),this.groundColor=new Le(t)}copy(e){return Sn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}a0.prototype.isHemisphereLight=!0;const lu=new Ve,cu=new L,uu=new L;class Ol{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uu),t.updateMatrixWorld(),lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ch extends Ol{constructor(){super(new Wt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Ch.prototype.isSpotLightShadow=!0;class Eh extends Sn{constructor(e,t,n=0,i=Math.PI/3,r=0,s=1){super(e,t),this.type="SpotLight",this.position.copy(ht.DefaultUp),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Eh.prototype.isSpotLight=!0;const hu=new Ve,Wr=new L,Fa=new L;class Th extends Ol{constructor(){super(new Wt(90,1,.5,500)),this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wr),Fa.copy(n.position),Fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fa),n.updateMatrixWorld(),i.makeTranslation(-Wr.x,-Wr.y,-Wr.z),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}}Th.prototype.isPointLightShadow=!0;class Lh extends Sn{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Lh.prototype.isPointLight=!0;class Ph extends Ol{constructor(){super(new To(-5,5,5,-5,.5,500))}}Ph.prototype.isDirectionalLightShadow=!0;class Ih extends Sn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(ht.DefaultUp),this.updateMatrix(),this.target=new ht,this.shadow=new Ph}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Ih.prototype.isDirectionalLight=!0;class l0 extends Sn{constructor(e,t){super(e,t),this.type="AmbientLight"}}l0.prototype.isAmbientLight=!0;class c0 extends Sn{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}c0.prototype.isRectAreaLight=!0;class Rh{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*i),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*n),t.addScaledVector(s[4],1.092548*(n*i)),t.addScaledVector(s[5],1.092548*(i*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(n*r)),t.addScaledVector(s[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*i),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*n),t.addScaledVector(s[4],2*.429043*n*i),t.addScaledVector(s[5],2*.429043*i*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*n*r),t.addScaledVector(s[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}Rh.prototype.isSphericalHarmonics3=!0;class zl extends Sn{constructor(e=new Rh,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}zl.prototype.isLightProbe=!0;class ai{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class u0 extends dt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}u0.prototype.isInstancedBufferGeometry=!0;class kh extends vn{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Mr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Mr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}kh.prototype.isImageBitmapLoader=!0;let co;const h0={getContext:function(){return co===void 0&&(co=new(window.AudioContext||window.webkitAudioContext)),co},setContext:function(o){co=o}};class d0 extends vn{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new oi(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{const l=a.slice(0);h0.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}}class f0 extends zl{constructor(e,t,n=1){super(void 0,n);const i=new Le().set(e),r=new Le().set(t),s=new L(i.r,i.g,i.b),a=new L(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(c)}}f0.prototype.isHemisphereLightProbe=!0;class p0 extends zl{constructor(e,t=1){super(void 0,t);const n=new Le().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}p0.prototype.isAmbientLightProbe=!0;class m0 extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class g0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==i;++a)n[r+a]=n[a];s=t}else{s+=t;const a=t/s;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]}_slerp(e,t,n,i){Ht.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const s=this._workIndex*r;Ht.multiplyQuaternionsFlat(e,s,e,t,e,n),Ht.slerpFlat(e,t,e,t,e,s,i)}_lerp(e,t,n,i,r){const s=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*s+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let s=0;s!==r;++s){const a=t+s;e[a]=e[a]+e[n+s]*i}}}const Nl="\\[\\]\\.:\\/",v0=new RegExp("["+Nl+"]","g"),Ul="[^"+Nl+"]",x0="[^"+Nl.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",Ul),b0=/(WCOD+)?/.source.replace("WCOD",x0),_0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),A0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),w0=new RegExp("^"+y0+b0+_0+A0+"$"),M0=["material","materials","bones"];class S0{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v0,"")}static parseTrackName(e){const t=w0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);M0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=S0;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class C0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,s=r.length,a=new Array(s),l={endingStart:ur,endingEnd:ur};for(let c=0;c!==s;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,a=i/r;e.warp(1,s,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const s=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ou:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulateAdditive(a);break;case ml:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===cf;if(e===0)return r===-1?i:s&&(r&1)===1?t-i:i;if(n===af){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(s&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=hr,i.endingEnd=hr):(e?i.endingStart=this.zeroSlopeAtStart?hr:ur:i.endingStart=bo,t?i.endingEnd=this.zeroSlopeAtEnd?hr:ur:i.endingEnd=bo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,l=s.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}class E0 extends hi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,s[h]=p;else{if(p=s[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;p=new g0(ft.create(n,f,m),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),s[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,a=s[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete s[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ah(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?cl.findByName(i,e):e;const a=s!==null?s.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=ml),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const u=new C0(this,s,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?cl.findByName(n,e):e,s=r?r.uuid:e,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let a=0,l=s.length;a!==l;++a){const c=s[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const a=n[s].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const a=r[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}E0.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class T0 extends Er{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}T0.prototype.isInstancedInterleavedBuffer=!0;class Bh{constructor(e,t,n=0,i=1/0){this.ray=new Ri(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ul(e,this,n,t),n.sort(du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ul(e[i],this,n,t);return n.sort(du),n}}function du(o,e){return o.distance-e.distance}function ul(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,s=i.length;r<s;r++)ul(i[r],e,t,!0)}}class ds{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kn=new L,uo=new Ve,Oa=new Ve;class L0 extends Io{constructor(e){const t=Dh(e),n=new dt,i=[],r=[],s=new Le(0,0,1),a=new Le(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new bt(i,3)),n.setAttribute("color",new bt(r,3));const l=new Bi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Oa.copy(this.root.matrixWorld).invert();for(let r=0,s=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(uo.multiplyMatrices(Oa,a.matrixWorld),Kn.setFromMatrixPosition(uo),i.setXYZ(s,Kn.x,Kn.y,Kn.z),uo.multiplyMatrices(Oa,a.parent.matrixWorld),Kn.setFromMatrixPosition(uo),i.setXYZ(s+1,Kn.x,Kn.y,Kn.z),s+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Dh(o){const e=[];o.isBone===!0&&e.push(o);for(let t=0;t<o.children.length;t++)e.push.apply(e,Dh(o.children[t]));return e}class P0 extends Io{constructor(e=10,t=10,n=4473924,i=8947848){n=new Le(n),i=new Le(i);const r=t/2,s=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=s){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const m=d===r?n:i;m.toArray(c,f),f+=3,m.toArray(c,f),f+=3,m.toArray(c,f),f+=3,m.toArray(c,f),f+=3}const u=new dt;u.setAttribute("position",new bt(l,3)),u.setAttribute("color",new bt(c,3));const h=new Bi({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const yn=new Uint32Array(512),bn=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(yn[o]=0,yn[o|256]=32768,bn[o]=24,bn[o|256]=24):e<-14?(yn[o]=1024>>-e-14,yn[o|256]=1024>>-e-14|32768,bn[o]=-e-1,bn[o|256]=-e-1):e<=15?(yn[o]=e+15<<10,yn[o|256]=e+15<<10|32768,bn[o]=13,bn[o|256]=13):e<128?(yn[o]=31744,yn[o|256]=64512,bn[o]=24,bn[o|256]=24):(yn[o]=31744,yn[o|256]=64512,bn[o]=13,bn[o|256]=13)}const Fh=new Uint32Array(2048),ms=new Uint32Array(64),I0=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Fh[o]=e|t}for(let o=1024;o<2048;++o)Fh[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)ms[o]=o<<23;ms[31]=1199570944;ms[32]=2147483648;for(let o=33;o<63;++o)ms[o]=2147483648+(o-32<<23);ms[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(I0[o]=1024);un.create=function(o,e){return console.log("THREE.Curve.create() has been deprecated"),o.prototype=Object.create(un.prototype),o.prototype.constructor=o,o.prototype.getPoint=e,o};ol.prototype.fromPoints=function(o){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(o)};P0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};L0.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};vn.prototype.extractUrlBase=function(o){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),ai.extractUrlBase(o)};vn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};hn.prototype.center=function(o){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(o)};hn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};hn.prototype.isIntersectionBox=function(o){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};hn.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};hn.prototype.size=function(o){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(o)};ki.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Ii.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Eo.prototype.setFromMatrix=function(o){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(o)};Ut.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};Ut.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};Ut.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Ut.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};Ut.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Ut.prototype.getInverse=function(o){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};Ve.prototype.extractPosition=function(o){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(o)};Ve.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};Ve.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};Ve.prototype.setRotationFromQuaternion=function(o){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(o)};Ve.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Ve.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};Ve.prototype.multiplyVector4=function(o){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};Ve.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Ve.prototype.rotateAxis=function(o){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),o.transformDirection(this)};Ve.prototype.crossVector=function(o){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};Ve.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Ve.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Ve.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Ve.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Ve.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Ve.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};Ve.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Ve.prototype.makeFrustum=function(o,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(o,e,n,t,i,r)};Ve.prototype.getInverse=function(o){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};Fn.prototype.isIntersectionLine=function(o){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(o)};Ht.prototype.multiplyVector3=function(o){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),o.applyQuaternion(this)};Ht.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Ri.prototype.isIntersectionBox=function(o){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Ri.prototype.isIntersectionPlane=function(o){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(o)};Ri.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};Bt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Bt.prototype.barycoordFromPoint=function(o,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(o,e)};Bt.prototype.midpoint=function(o){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(o)};Bt.prototypenormal=function(o){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(o)};Bt.prototype.plane=function(o){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(o)};Bt.barycoordFromPoint=function(o,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Bt.getBarycoord(o,e,t,n,i)};Bt.normal=function(o,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Bt.getNormal(o,e,t,n)};ps.prototype.extractAllPoints=function(o){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(o)};ps.prototype.extrude=function(o){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Tr(this,o)};ps.prototype.makeGeometry=function(o){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Dl(this,o)};le.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};le.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};le.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(o){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(o)};L.prototype.getScaleFromMatrix=function(o){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(o)};L.prototype.getColumnFromMatrix=function(o,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,o)};L.prototype.applyProjection=function(o){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(o)};L.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};L.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};vt.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};vt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ht.prototype.getChildByName=function(o){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(o)};ht.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};ht.prototype.translate=function(o,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,o)};ht.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};ht.prototype.applyMatrix=function(o){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(ht.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(o){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=o}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Ye.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Ye.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),uf},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});El.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Wt.prototype.setLens=function(o,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(o)};Object.defineProperties(Sn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(o){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=o}},shadowCameraLeft:{set:function(o){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=o}},shadowCameraRight:{set:function(o){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=o}},shadowCameraTop:{set:function(o){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=o}},shadowCameraBottom:{set:function(o){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=o}},shadowCameraNear:{set:function(o){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=o}},shadowCameraFar:{set:function(o){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=o}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(o){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=o}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(o){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=o}},shadowMapHeight:{set:function(o){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=o}}});Object.defineProperties(xt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===rs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(rs)}}});xt.prototype.setDynamic=function(o){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?rs:is),this};xt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},xt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};dt.prototype.addIndex=function(o){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(o)};dt.prototype.addAttribute=function(o,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(o,new xt(arguments[1],arguments[2]))):o==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(o,e)};dt.prototype.addDrawCall=function(o,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(o,e)};dt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};dt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};dt.prototype.removeAttribute=function(o){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(o)};dt.prototype.applyMatrix=function(o){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(dt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Er.prototype.setDynamic=function(o){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?rs:is),this};Er.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Tr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Tr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Tr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Sl.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Ct.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Le}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(o){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=o===Eu}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(o){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=o}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(at.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(o){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=o}}});gt.prototype.clearTarget=function(o,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(o),this.clear(e,t,n)};gt.prototype.animate=function(o){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(o)};gt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};gt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};gt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};gt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};gt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};gt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};gt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};gt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};gt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};gt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};gt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};gt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};gt.prototype.enableScissorTest=function(o){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(o)};gt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};gt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};gt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};gt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};gt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};gt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};gt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};gt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};gt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};gt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(gt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=o}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=o}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(o){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=o===!0?We:Mn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(eh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(tn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=o}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=o}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=o}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=o}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(o){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=o}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(o){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=o}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(o){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=o}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(o){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=o}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(o){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=o}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(o){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=o}}});m0.prototype.load=function(o){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new d0().load(o,function(n){e.setBuffer(n)}),this};_l.prototype.updateCubeMap=function(o,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(o,e)};_l.prototype.clear=function(o,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(o,e,t,n)};Pi.crossOrigin=void 0;Pi.loadTexture=function(o,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Sh;i.setCrossOrigin(this.crossOrigin);const r=i.load(o,t,void 0,n);return e&&(r.mapping=e),r};Pi.loadTextureCube=function(o,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new o0;i.setCrossOrigin(this.crossOrigin);const r=i.load(o,t,void 0,n);return e&&(r.mapping=e),r};Pi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Pi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);class R0{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.debug=this.experience.debug,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.canvas=this.experience.canvas,this.debug&&this.debug.Register({type:"folder",label:"Composition",open:!0}),this.setRenderer(),this.resize()}setRenderer(){if(this.renderer=new gt({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.physicallyCorrectLights=!0,this.renderer.setClearColor("#ffffff"),this.renderer.outputEncoding=We,this.renderer.setPixelRatio(this.renderer.capabilities.isWebGL2?this.config.pixelRatio:2),this.debug){const e={};e[wn]="NoToneMapping",e[Pu]="LinearToneMapping",e[Iu]="ReinhardToneMapping",e[Ru]="CineonToneMapping",e[ku]="ACESFilmicToneMapping",this.debug.Register({object:this.renderer,property:"toneMapping",type:"select",folder:"Composition",label:"toneMapping",options:e,onChange:()=>{this.renderer.toneMapping=parseInt(this.renderer.toneMapping),this.scene.traverse(t=>{t instanceof Ye&&(t.material.needsUpdate=!0)})}}),this.debug.Register({object:this.renderer,property:"toneMappingExposure",folder:"Composition",type:"range",label:"toneMappingExposure",min:0,max:3,step:.01})}}resize(){this.renderer.setSize(this.config.width,this.config.height),this.renderer.setPixelRatio(this.renderer.capabilities.isWebGL2?this.config.pixelRatio:2)}render(){this.renderer.render(this.scene,this.camera.base)}destroy(){this.renderer.dispose()}}const fu={type:"change"},za={type:"start"},pu={type:"end"};class k0 extends hi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",ke),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fu),n.update(),r=i.NONE},this.update=function(){const T=new L,X=new Ht().setFromUnitVectors(e.up,new L(0,1,0)),Me=X.clone().invert(),we=new L,N=new Ht,ye=2*Math.PI;return function(){const Ue=n.object.position;T.copy(Ue).sub(n.target),T.applyQuaternion(X),a.setFromVector3(T),n.autoRotate&&r===i.NONE&&oe(U()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ee=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Ee)&&isFinite(ze)&&(Ee<-Math.PI?Ee+=ye:Ee>Math.PI&&(Ee-=ye),ze<-Math.PI?ze+=ye:ze>Math.PI&&(ze-=ye),Ee<=ze?a.theta=Math.max(Ee,Math.min(ze,a.theta)):a.theta=a.theta>(Ee+ze)/2?Math.max(Ee,a.theta):Math.min(ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(Me),Ue.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||we.distanceToSquared(n.object.position)>s||8*(1-N.dot(n.object.quaternion))>s?(n.dispatchEvent(fu),we.copy(n.object.position),N.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Q),n.domElement.removeEventListener("pointerdown",ge),n.domElement.removeEventListener("pointercancel",H),n.domElement.removeEventListener("wheel",Fe),n.domElement.removeEventListener("pointermove",B),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ke)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new ds,l=new ds;let c=1;const u=new L;let h=!1;const d=new le,f=new le,p=new le,m=new le,g=new le,x=new le,v=new le,A=new le,w=new le,M=[],k={};function U(){return 2*Math.PI/60/60*n.autoRotateSpeed}function V(){return Math.pow(.95,n.zoomSpeed)}function oe(T){l.theta-=T}function j(T){l.phi-=T}const C=function(){const T=new L;return function(Me,we){T.setFromMatrixColumn(we,0),T.multiplyScalar(-Me),u.add(T)}}(),O=function(){const T=new L;return function(Me,we){n.screenSpacePanning===!0?T.setFromMatrixColumn(we,1):(T.setFromMatrixColumn(we,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(Me),u.add(T)}}(),re=function(){const T=new L;return function(Me,we){const N=n.domElement;if(n.object.isPerspectiveCamera){const ye=n.object.position;T.copy(ye).sub(n.target);let be=T.length();be*=Math.tan(n.object.fov/2*Math.PI/180),C(2*Me*be/N.clientHeight,n.object.matrix),O(2*we*be/N.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(Me*(n.object.right-n.object.left)/n.object.zoom/N.clientWidth,n.object.matrix),O(we*(n.object.top-n.object.bottom)/n.object.zoom/N.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(T){n.object.isPerspectiveCamera?c/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(T){n.object.isPerspectiveCamera?c*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(T){d.set(T.clientX,T.clientY)}function te(T){v.set(T.clientX,T.clientY)}function W(T){m.set(T.clientX,T.clientY)}function ae(T){f.set(T.clientX,T.clientY),p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const X=n.domElement;oe(2*Math.PI*p.x/X.clientHeight),j(2*Math.PI*p.y/X.clientHeight),d.copy(f),n.update()}function ce(T){A.set(T.clientX,T.clientY),w.subVectors(A,v),w.y>0?G(V()):w.y<0&&q(V()),v.copy(A),n.update()}function xe(T){g.set(T.clientX,T.clientY),x.subVectors(g,m).multiplyScalar(n.panSpeed),re(x.x,x.y),m.copy(g),n.update()}function de(T){T.deltaY<0?q(V()):T.deltaY>0&&G(V()),n.update()}function pe(T){let X=!1;switch(T.code){case n.keys.UP:re(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:re(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:re(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:re(-n.keyPanSpeed,0),X=!0;break}X&&(T.preventDefault(),n.update())}function je(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),X=.5*(M[0].pageY+M[1].pageY);d.set(T,X)}}function Re(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),X=.5*(M[0].pageY+M[1].pageY);m.set(T,X)}}function ne(){const T=M[0].pageX-M[1].pageX,X=M[0].pageY-M[1].pageY,Me=Math.sqrt(T*T+X*X);v.set(0,Me)}function Je(){n.enableZoom&&ne(),n.enablePan&&Re()}function Xe(){n.enableZoom&&ne(),n.enableRotate&&je()}function qe(T){if(M.length==1)f.set(T.pageX,T.pageY);else{const Me=Ne(T),we=.5*(T.pageX+Me.x),N=.5*(T.pageY+Me.y);f.set(we,N)}p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const X=n.domElement;oe(2*Math.PI*p.x/X.clientHeight),j(2*Math.PI*p.y/X.clientHeight),d.copy(f)}function me(T){if(M.length===1)g.set(T.pageX,T.pageY);else{const X=Ne(T),Me=.5*(T.pageX+X.x),we=.5*(T.pageY+X.y);g.set(Me,we)}x.subVectors(g,m).multiplyScalar(n.panSpeed),re(x.x,x.y),m.copy(g)}function Ze(T){const X=Ne(T),Me=T.pageX-X.x,we=T.pageY-X.y,N=Math.sqrt(Me*Me+we*we);A.set(0,N),w.set(0,Math.pow(A.y/v.y,n.zoomSpeed)),G(w.y),v.copy(A)}function K(T){n.enableZoom&&Ze(T),n.enablePan&&me(T)}function se(T){n.enableZoom&&Ze(T),n.enableRotate&&qe(T)}function ge(T){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",B),n.domElement.addEventListener("pointerup",z)),ve(T),T.pointerType==="touch"?I(T):Y(T))}function B(T){n.enabled!==!1&&(T.pointerType==="touch"?E(T):fe(T))}function z(T){Te(T),M.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",B),n.domElement.removeEventListener("pointerup",z)),n.dispatchEvent(pu),r=i.NONE}function H(T){Te(T)}function Y(T){let X;switch(T.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Vi.DOLLY:if(n.enableZoom===!1)return;te(T),r=i.DOLLY;break;case Vi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;W(T),r=i.PAN}else{if(n.enableRotate===!1)return;Z(T),r=i.ROTATE}break;case Vi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Z(T),r=i.ROTATE}else{if(n.enablePan===!1)return;W(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(za)}function fe(T){if(n.enabled!==!1)switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ae(T);break;case i.DOLLY:if(n.enableZoom===!1)return;ce(T);break;case i.PAN:if(n.enablePan===!1)return;xe(T);break}}function Fe(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(za),de(T),n.dispatchEvent(pu))}function ke(T){n.enabled===!1||n.enablePan===!1||pe(T)}function I(T){switch(Pe(T),M.length){case 1:switch(n.touches.ONE){case Wi.ROTATE:if(n.enableRotate===!1)return;je(),r=i.TOUCH_ROTATE;break;case Wi.PAN:if(n.enablePan===!1)return;Re(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Wi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Je(),r=i.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(za)}function E(T){switch(Pe(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;qe(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;me(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;K(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;se(T),n.update();break;default:r=i.NONE}}function Q(T){n.enabled!==!1&&T.preventDefault()}function ve(T){M.push(T)}function Te(T){delete k[T.pointerId];for(let X=0;X<M.length;X++)if(M[X].pointerId==T.pointerId){M.splice(X,1);return}}function Pe(T){let X=k[T.pointerId];X===void 0&&(X=new le,k[T.pointerId]=X),X.set(T.pageX,T.pageY)}function Ne(T){const X=T.pointerId===M[0].pointerId?M[1]:M[0];return k[X.pointerId]}n.domElement.addEventListener("contextmenu",Q),n.domElement.addEventListener("pointerdown",ge),n.domElement.addEventListener("pointercancel",H),n.domElement.addEventListener("wheel",Fe,{passive:!1}),this.update()}}class B0{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.debug=this.experience.debug,this.sizes=this.experience.sizes,this.time=this.experience.time,this.scene=this.experience.scene,this.mode="default",this.speed=0,this.setBase(),this.setControls(),this.setDefault(),this.debug&&(this.debug.Register({type:"folder",label:"Camera",open:!1}),this.debug.Register({object:this,property:"mode",type:"select",folder:"Camera",label:"mode",options:["default","controls"],onChange:()=>{this.controls.instance.enabled=this.mode==="controls"}}))}setBase(){this.base=new Wt(25,this.config.width/this.config.height,1,50),this.base.rotation.order="YXZ",this.base.position.z=2.5*2,this.base.position.y=3*2,this.base.position.x=2.5*2,this.scene.add(this.base)}setControls(){this.controls={},this.controls.active=!0,this.controls.camera=this.base.clone(),this.controls.instance=new k0(this.controls.camera,this.experience.canvas),this.controls.instance.enabled=this.mode==="controls",this.controls.instance.enableDamping=!0,this.controls.instance.zoomSpeed=.2,this.controls.instance.target.y=3.5,this.controls.instance.target.x=-2,this.controls.instance.target.z=-4,this.controls.camera.position.y=6,this.controls.camera.position.multiplyScalar(3)}setDefault(){this.default={},this.default.camera=this.base.clone()}update(){this.controls.instance.update(),this.speed=this.base.position.distanceTo(this[this.mode].camera.position)*this.time.delta,this.base.position.copy(this[this.mode].camera.position),this.base.quaternion.copy(this[this.mode].camera.quaternion)}resize(){this.base.aspect=this.config.width/this.config.height,this.base.updateProjectionMatrix()}}class D0 extends vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new N0(t)}),this.register(function(t){return new j0(t)}),this.register(function(t){return new q0(t)}),this.register(function(t){return new U0(t)}),this.register(function(t){return new H0(t)}),this.register(function(t){return new G0(t)}),this.register(function(t){return new V0(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new O0(t)}),this.register(function(t){return new X0(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ai.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new oi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={};if(typeof e=="string")r=e;else if(ai.decodeText(new Uint8Array(e,0,4))===Oh){try{s[ot.KHR_BINARY_GLTF]=new Y0(e)}catch(h){i&&i(h);return}r=s[ot.KHR_BINARY_GLTF].content}else r=ai.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ay(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,s[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],d=l.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:s[h]=new z0;break;case ot.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[h]=new K0;break;case ot.KHR_DRACO_MESH_COMPRESSION:s[h]=new Z0(l,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:s[h]=new $0;break;case ot.KHR_MESH_QUANTIZATION:s[h]=new J0;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function F0(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class O0{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ih(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Lh(u),c.distance=h;break;case"spot":c=new Eh(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class z0{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return mt}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,We))}return Promise.all(i)}}class N0{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(a,a)}return Promise.all(r)}}class U0{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,We)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class H0{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class G0{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Le(a[0],a[1],a[2]),Promise.all(r)}}class V0{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class W0{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Le(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,We)),Promise.all(r)}}class j0{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class q0{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class X0{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,s.ready]).then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new ArrayBuffer(u*h),f=new Uint8Array(a[0],l,c);return s.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})}else return null}}const Oh="glTF",jr=12,mu={JSON:1313821514,BIN:5130562};class Y0{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jr);if(this.header={magic:ai.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Oh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-jr,i=new DataView(e,jr);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===mu.JSON){const l=new Uint8Array(e,jr+r,s);this.content=ai.decodeText(l)}else if(a===mu.BIN){const l=jr+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Z0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const u in s){const h=dl[u]||u.toLowerCase();a[h]=s[u]}for(const u in e.attributes){const h=dl[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],f=fs[d.componentType];c[h]=f,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const p=d.attributes[f],m=l[f];m!==void 0&&(p.normalized=m)}h(d)},a,c)})})}}class $0{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hl extends Lr{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Le().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class K0{constructor(){this.name=ot.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return hl}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new Le(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const s=i.diffuseFactor;e.color.fromArray(s),e.opacity=s[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture,We)),e.emissive=new Le(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Le(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const s=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",s)),r.push(n.assignTexture(e,"specularMap",s,We))}return Promise.all(r)}createMaterial(e){const t=new hl(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Li,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class J0{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class Ei extends Nn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}}Ei.prototype.beforeStart_=Ei.prototype.copySampleValue_;Ei.prototype.afterEnd_=Ei.prototype.copySampleValue_;Ei.prototype.interpolate_=function(o,e,t,n){const i=this.resultBuffer,r=this.sampleValues,s=this.valueSize,a=s*2,l=s*3,c=n-e,u=(t-e)/c,h=u*u,d=h*u,f=o*l,p=f-l,m=-2*d+3*h,g=d-h,x=1-m,v=g-h+u;for(let A=0;A!==s;A++){const w=r[p+A+s],M=r[p+A+a]*c,k=r[f+A+s],U=r[f+A]*c;i[A]=x*w+v*M+m*k+g*U}return i};const Q0=new Ht;class ey extends Ei{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Q0.fromArray(r).normalize().toArray(r),r}}const Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gu={9728:Pt,9729:Rt,9984:qa,9985:Du,9986:Xa,9987:Ti},vu={33071:ln,33648:yo,10497:li},xu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ty={CUBICSPLINE:void 0,LINEAR:_r,STEP:ns},Na={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ny(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Lr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vr})),o.DefaultMaterial}function qr(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iy(o,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):o.attributes.position;s.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),r&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function ry(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sy(o){const e=o.extensions&&o.extensions[ot.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+yu(e.attributes):t=o.indices+":"+yu(o.attributes)+":"+o.mode,t}function yu(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function fl(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oy(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class ay{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new F0,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!1?this.textureLoader=new kh(this.options.manager):this.textureLoader=new Sh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};qr(r,a,i),_i(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,u]of s.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(ai.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=xu[i.type],c=fs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let m,g;if(f&&f!==h){const x=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let A=t.cache.get(v);A||(m=new c(a,x*f,i.count*f/u),A=new Er(m,f/u),t.cache.add(v,A)),g=new wr(A,l,d%f/u,p)}else a===null?m=new c(i.count*l):m=new c(a,d,i.count*l),g=new xt(m,l,p);if(i.sparse!==void 0){const x=xu.SCALAR,v=fs[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,M=new v(s[1],A,i.sparse.count*x),k=new c(s[2],w,i.sparse.count*l);a!==null&&(g=new xt(g.array.slice(),g.itemSize,g.normalized));for(let U=0,V=M.length;U<V;U++){const oe=M[U];if(g.setX(oe,k[U*l]),l>=2&&g.setY(oe,k[U*l+1]),l>=3&&g.setZ(oe,k[U*l+2]),l>=4&&g.setW(oe,k[U*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,s.name&&(u.name=s.name);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=gu[d.magFilter]||Rt,u.minFilter=gu[d.minFilter]||Ti,u.wrapS=vu[d.wrapS]||li,u.wrapT=vu[d.wrapT]||li,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:s.mimeType});return l=a.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(m){const g=new Et(m);g.needsUpdate=!0,d(g)}),t.load(ai.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=s.mimeType||oy(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ro,Ct.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Bi,Ct.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Lr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[ot.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else if(l[ot.KHR_MATERIALS_UNLIT]){const h=i[ot.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,We)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=zn);const u=r.alphaMode||Na.OPAQUE;if(u===Na.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Na.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==mt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new le(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==mt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==mt&&(a.emissive=new Le().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==mt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,We)),Promise.all(c).then(function(){let h;return s===hl?h=i[ot.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new s(a),r.name&&(h.name=r.name),_i(h,r),t.associations.set(h,{materials:e}),r.extensions&&qr(i,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return bu(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=sy(c),h=i[u];if(h)s.push(h.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=bu(new dt,c,t),i[u]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?ny(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){const m=u[f],g=s[f];let x;const v=c[f];if(g.mode===Bn.TRIANGLES||g.mode===Bn.TRIANGLE_STRIP||g.mode===Bn.TRIANGLE_FAN||g.mode===void 0)x=r.isSkinnedMesh===!0?new El(m,v):new Ye(m,v),x.isSkinnedMesh===!0&&!x.geometry.attributes.skinWeight.normalized&&x.normalizeSkinWeights(),g.mode===Bn.TRIANGLE_STRIP?x.geometry=_u(x.geometry,hf):g.mode===Bn.TRIANGLE_FAN&&(x.geometry=_u(x.geometry,zu));else if(g.mode===Bn.LINES)x=new Io(m,v);else if(g.mode===Bn.LINE_STRIP)x=new Po(m,v);else if(g.mode===Bn.LINE_LOOP)x=new sh(m,v);else if(g.mode===Bn.POINTS)x=new ko(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(x.geometry.morphAttributes).length>0&&ry(x,r),x.name=t.createUniqueName(r.name||"mesh_"+e),_i(x,r),g.extensions&&qr(i,x,g),t.assignFinalMaterial(x),h.push(x)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return h[0];const d=new St;t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(If.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new To(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],f=h.target,p=f.node!==void 0?f.node:f.id,m=n.parameters!==void 0?n.parameters[d.input]:d.input,g=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",p)),r.push(this.getDependency("accessor",m)),s.push(this.getDependency("accessor",g)),a.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],f=c[3],p=c[4],m=[];for(let x=0,v=u.length;x<v;x++){const A=u[x],w=h[x],M=d[x],k=f[x],U=p[x];if(A===void 0)continue;A.updateMatrix(),A.matrixAutoUpdate=!0;let V;switch(Jn[U.path]){case Jn.weights:V=us;break;case Jn.rotation:V=Ci;break;case Jn.position:case Jn.scale:default:V=hs;break}const oe=A.name?A.name:A.uuid,j=k.interpolation!==void 0?ty[k.interpolation]:_r,C=[];Jn[U.path]===Jn.weights?A.traverse(function(re){re.morphTargetInfluences&&C.push(re.name?re.name:re.uuid)}):C.push(oe);let O=M.array;if(M.normalized){const re=fl(O.constructor),G=new Float32Array(O.length);for(let q=0,Z=O.length;q<Z;q++)G[q]=O[q]*re;O=G}for(let re=0,G=C.length;re<G;re++){const q=new V(C[re]+"."+Jn[U.path],w.array,O,j);k.interpolation==="CUBICSPLINE"&&(q.createInterpolant=function(te){const W=this instanceof Ci?ey:Ei;return new W(this.times,this.values,this.getValueSize()/3,te)},q.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(q)}}const g=n.name?n.name:"animation_"+e;return new cl(g,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new Tl:a.length>1?l=new St:a.length===1?l=a[0]:l=new ht,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=s),_i(l,r),r.extensions&&qr(n,l,r),r.matrix!==void 0){const c=new Ve;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,s=new St;i.name&&(s.name=r.createUniqueName(i.name)),_i(s,i),i.extensions&&qr(n,s,i);const a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(zh(a[c],s,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,f]of r.associations)(d instanceof Ct||d instanceof Et)&&h.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=c(s),s})}}function zh(o,e,t,n){const i=t.nodes[o];return n.getDependency("node",o).then(function(r){if(i.skin===void 0)return r;let s;return n.getDependency("skin",i.skin).then(function(a){s=a;const l=[];for(let c=0,u=s.joints.length;c<u;c++)l.push(n.getDependency("node",s.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,d=a.length;h<d;h++){const f=a[h];if(f){c.push(f);const p=new Ve;s.inverseBindMatrices!==void 0&&p.fromArray(s.inverseBindMatrices.array,h*16),u.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[h])}l.bind(new Ll(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const s=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];s.push(zh(u,r,t,n))}}return Promise.all(s)})}function ly(o,e,t){const n=e.attributes,i=new hn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=fl(fs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const m=fl(fs[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new Ii;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function bu(o,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=dl[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(s)}return _i(o,e),ly(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iy(o,e.targets,t):o})}function _u(o,e){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===zu)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r}const Ua=new WeakMap;class cy extends vn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new oi(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,a).then(t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const c=t.attributeTypes[l];c.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=c.name)}const n=JSON.stringify(t);if(Ua.has(e)){const l=Ua.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(r,s).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Ua.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new dt;e.index&&t.setIndex(new xt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,s=i.array,a=i.itemSize;t.setAttribute(r,new xt(s,a))}return t}_loadLibrary(e,t){const n=new oi(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=uy.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const s=r.data;switch(s.type){case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function uy(){let o,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(u){o.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder,f=new h.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const p=t(h,d,f,c),m=p.attributes.map(g=>g.array.buffer);p.index&&m.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},m)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{h.destroy(f),h.destroy(d)}});break}};function t(s,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const p=a.GetEncodedGeometryType(l);if(p===s.TRIANGULAR_MESH)d=new s.Mesh,f=a.DecodeBufferToMesh(l,d);else if(p===s.POINT_CLOUD)d=new s.PointCloud,f=a.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const m={index:null,attributes:[]};for(const g in u){const x=self[h[g]];let v,A;if(c.useUniqueIDs)A=u[g],v=a.GetAttributeByUniqueId(d,A);else{if(A=a.GetAttributeId(d,s[u[g]]),A===-1)continue;v=a.GetAttribute(d,A)}m.attributes.push(i(s,a,d,g,x,v))}return p===s.TRIANGULAR_MESH&&(m.index=n(s,a,d)),s.destroy(d),m}function n(s,a,l){const u=l.num_faces()*3,h=u*4,d=s._malloc(h);a.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(s.HEAPF32.buffer,d,u).slice();return s._free(d),{array:f,itemSize:1}}function i(s,a,l,c,u,h){const d=h.num_components(),p=l.num_points()*d,m=p*u.BYTES_PER_ELEMENT,g=r(s,u),x=s._malloc(m);a.GetAttributeDataArrayForAllPoints(l,h,g,m,x);const v=new u(s.HEAPF32.buffer,x,p).slice();return s._free(x),{name:c,array:v,itemSize:d}}function r(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}class hy{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:r,transfer:s}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(r,s)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const dy=2,fy=1,Ha=new WeakMap;let Ga=0;class An extends vn{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new hy,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new oi(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new oi(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([r,s])=>{const a=An.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(An.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(An.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(An.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=s,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),c})}),Ga>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Ga++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new oi(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials);const s=new sl;return r.load(e,a=>{if(Ha.has(a))return Ha.get(a).promise.then(t).catch(i);this._createTexture([a]).then(function(l){s.copy(l),s.needsUpdate=!0,t&&t(s)}).catch(i)},n,i),s}_createTextureFrom(e){const{mipmaps:t,width:n,height:i,format:r,type:s,error:a,dfdTransferFn:l,dfdFlags:c}=e;if(s==="error")return Promise.reject(a);const u=new sl(t,n,i,r,ci);return u.minFilter=t.length===1?Rt:Ti,u.magFilter=Rt,u.generateMipmaps=!1,u.needsUpdate=!0,u.encoding=l===dy?We:Mn,u.premultiplyAlpha=!!(c&fy),u}_createTexture(e,t={}){const n=t,i=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffers:e,taskConfig:n},e)).then(r=>this._createTextureFrom(r.data));return Ha.set(e[0],{promise:i}),i}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Ga--,this}}An.BasisFormat={ETC1S:0,UASTC_4x4:1};An.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};An.EngineFormat={RGBAFormat:Qt,RGBA_ASTC_4x4_Format:Ja,RGBA_BPTC_Format:Qa,RGBA_ETC2_EAC_Format:Ka,RGBA_PVRTC_4BPPV1_Format:Za,RGBA_S3TC_DXT5_Format:vo,RGB_ETC1_Format:Fu,RGB_ETC2_Format:$a,RGB_PVRTC_4BPPV1_Format:Ya,RGB_S3TC_DXT1_Format:go};An.BasisWorker=function(){let o,e,t;const n=_EngineFormat,i=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(f){const p=f.data;switch(p.type){case"init":o=p.config,s(p.transcoderBinary);break;case"transcode":e.then(()=>{try{const{width:m,height:g,hasAlpha:x,mipmaps:v,format:A,dfdTransferFn:w,dfdFlags:M}=a(p.buffers[0]),k=[];for(let U=0;U<v.length;++U)k.push(v[U].data.buffer);self.postMessage({type:"transcode",id:p.id,width:m,height:g,hasAlpha:x,mipmaps:v,format:A,dfdTransferFn:w,dfdFlags:M},k)}catch(m){console.error(m),self.postMessage({type:"error",id:p.id,error:m.message})}});break}});function s(f){e=new Promise(p=>{t={wasmBinary:f,onRuntimeInitialized:p},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function a(f){const p=new t.KTX2File(new Uint8Array(f));function m(){p.close(),p.delete()}if(!p.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const g=p.isUASTC()?r.UASTC_4x4:r.ETC1S,x=p.getWidth(),v=p.getHeight(),A=p.getLevels(),w=p.getHasAlpha(),M=p.getDFDTransferFunc(),k=p.getDFDFlags(),{transcoderFormat:U,engineFormat:V}=h(g,x,v,w);if(!x||!v||!A)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!p.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");const oe=[];for(let j=0;j<A;j++){const C=p.getImageLevelInfo(j,0,0),O=C.origWidth,re=C.origHeight,G=new Uint8Array(p.getImageTranscodedSizeInBytes(j,0,0,U));if(!p.transcodeImage(G,j,0,0,U,0,-1,-1))throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");oe.push({data:G,width:O,height:re})}return m(),{width:x,height:v,hasAlpha:w,mipmaps:oe,format:V,dfdTransferFn:M,dfdFlags:k}}const l=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGB_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(f,p){return f.priorityETC1S-p.priorityETC1S}),u=l.sort(function(f,p){return f.priorityUASTC-p.priorityUASTC});function h(f,p,m,g){let x,v;const A=f===r.ETC1S?c:u;for(let w=0;w<A.length;w++){const M=A[w];if(o[M.if]&&M.basisFormat.includes(f)&&!(g&&M.transcoderFormat.length<2)&&!(M.needsPowerOfTwo&&!(d(p)&&d(m))))return x=M.transcoderFormat[g?1:0],v=M.engineFormat[g?1:0],{transcoderFormat:x,engineFormat:v}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),x=i.RGBA32,v=n.RGBAFormat,{transcoderFormat:x,engineFormat:v}}function d(f){return f<=2?!0:(f&f-1)===0&&f!==0}};class py extends Ao{constructor(e){super(),this.experience=e.experience,this.composition=this.experience.composition,this.setLoaders(),this.toLoad=0,this.loaded=0,this.items={}}setLoaders(){this.loaders=[],this.loaders.push({extensions:["jpg","png","webp"],action:i=>{const r=new Image;r.addEventListener("load",()=>{this.fileLoadEnd(i,r)}),r.addEventListener("error",()=>{this.fileLoadEnd(i,r)}),r.src=i.source}});const e=new An;e.setTranscoderPath("/assets/experience/basis/"),e.detectSupport(this.composition.renderer),this.loaders.push({extensions:["ktx2"],action:i=>{e.load(i.source,r=>{this.fileLoadEnd(i,r)})}});const t=new cy;t.setDecoderPath("assets/experience/draco/"),this.loaders.push({extensions:["drc"],action:i=>{t.load(i.source,r=>{this.fileLoadEnd(i,r)})}});const n=new D0;n.setDRACOLoader(t),this.loaders.push({extensions:["glb","gltf"],action:i=>{n.load(i.source,r=>{this.fileLoadEnd(i,r)})}})}load(e=[]){for(const t of e){this.toLoad++;const n=t.source.match(/\.([a-z0-9]+)$/);if(typeof n[1]<"u"){const i=n[1],r=this.loaders.find(s=>s.extensions.find(a=>a===i));r?r.action(t):console.warn(`Cannot found loader for ${t}`)}else console.warn(`Cannot found extension of ${t}`)}}fileLoadEnd(e,t){this.loaded++,this.items[e.name]=t,this.trigger("fileEnd",[e,t]),this.loaded===this.toLoad&&this.trigger("end")}}class my extends Ao{constructor(e,t){super(),this.experience=t.experience,this.items={},this.loader=new py({experience:this.experience}),this.groups={},this.groups.assets=e,this.groups.loaded=[],this.groups.current=null,this.loadNextGroup(),this.loader.on("fileEnd",(n,i)=>{let r=i;n.type==="texture"&&(r=new Et(i),r.encoding=We,r.needsUpdate=!0),this.items[n.name]=r,this.groups.current.loaded++,this.trigger("progress",[this.groups.current,n,r])}),this.loader.on("end",()=>{this.groups.loaded.push(this.groups.current),this.trigger("groupEnd",[this.groups.current]),this.groups.assets.length>0?this.loadNextGroup():this.trigger("end")})}loadNextGroup(){this.groups.current=this.groups.assets.shift(),this.groups.current.toLoad=this.groups.current.items.length,this.groups.current.loaded=0,this.loader.load(this.groups.current.items)}createInstancedMeshes(e,t){const n=[];for(const r of t)n.push({name:r.name,regex:r.regex,meshesGroups:[],instancedMeshes:[]});const i={};for(const r of n)i[r.name]=r.instancedMeshes;return i}destroy(){for(const e in this.items){const t=this.items[e];t instanceof Et&&t.dispose()}}}var gy=`varying vec3 vColor;

#include <common>
#include <dithering_pars_fragment>

void main()
{
    gl_FragColor = vec4(vColor, 1.0);

    #include <dithering_fragment>
}`,vy=`uniform vec3 uColorInner;
uniform vec3 uColorOuter;

varying vec3 vColor;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    float distanceToCenter = length(modelPosition) * 0.04;
    distanceToCenter += 0.05;
    distanceToCenter = clamp(distanceToCenter, 0.0, 1.0);



    vColor = mix(uColorInner, uColorOuter, distanceToCenter);
}`;function xy(o={}){const e={uColorInner:{value:null},uColorOuter:{value:null}},t={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},n={DITHERING:""};return new at({wireframe:!1,transparent:!1,depthTest:!0,depthWrite:!0,side:en,lights:!1,uniforms:e,extensions:t,defines:n,vertexShader:vy,fragmentShader:gy})}class yy{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.composition=this.experience.composition,this.resources=this.experience.resources,this.colors=this.experience.colors,this.setLathe()}setLathe(){this.lathe={},this.lathe.count=15,this.lathe.points=[];for(let e=0;e<this.lathe.count;e++)this.lathe.points.push(new le(Math.pow(e/this.lathe.count,.3)*25,Math.max(0,(e-1)/this.lathe.count*25)));this.lathe.geometry=new Bl(this.lathe.points),this.lathe.material=new xy,this.lathe.material.uniforms.uColorInner.value=this.colors.floorInner.instance,this.lathe.material.uniforms.uColorOuter.value=this.colors.floorOuter.instance,this.lathe.mesh=new Ye(this.lathe.geometry,this.lathe.material),this.scene.add(this.lathe.mesh)}destroy(){this.lathe.geometry.dispose(),this.lathe.material.dispose()}}/*!
 * paths 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var by=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,_y=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Ay=Math.PI/180,ho=Math.sin,fo=Math.cos,es=Math.abs,Xr=Math.sqrt,wy=function(e){return typeof e=="number"},Au=1e5,Qn=function(e){return Math.round(e*Au)/Au||0};function My(o,e,t,n,i,r,s){for(var a=o.length,l,c,u,h,d;--a>-1;)for(l=o[a],c=l.length,u=0;u<c;u+=2)h=l[u],d=l[u+1],l[u]=h*e+d*n+r,l[u+1]=h*t+d*i+s;return o._dirty=1,o}function Sy(o,e,t,n,i,r,s,a,l){if(!(o===a&&e===l)){t=es(t),n=es(n);var c=i%360*Ay,u=fo(c),h=ho(c),d=Math.PI,f=d*2,p=(o-a)/2,m=(e-l)/2,g=u*p+h*m,x=-h*p+u*m,v=g*g,A=x*x,w=v/(t*t)+A/(n*n);w>1&&(t=Xr(w)*t,n=Xr(w)*n);var M=t*t,k=n*n,U=(M*k-M*A-k*v)/(M*A+k*v);U<0&&(U=0);var V=(r===s?-1:1)*Xr(U),oe=V*(t*x/n),j=V*-(n*g/t),C=(o+a)/2,O=(e+l)/2,re=C+(u*oe-h*j),G=O+(h*oe+u*j),q=(g-oe)/t,Z=(x-j)/n,te=(-g-oe)/t,W=(-x-j)/n,ae=q*q+Z*Z,ce=(Z<0?-1:1)*Math.acos(q/Xr(ae)),xe=(q*W-Z*te<0?-1:1)*Math.acos((q*te+Z*W)/Xr(ae*(te*te+W*W)));isNaN(xe)&&(xe=d),!s&&xe>0?xe-=f:s&&xe<0&&(xe+=f),ce%=f,xe%=f;var de=Math.ceil(es(xe)/(f/4)),pe=[],je=xe/de,Re=4/3*ho(je/2)/(1+fo(je/2)),ne=u*t,Je=h*t,Xe=h*-n,qe=u*n,me;for(me=0;me<de;me++)i=ce+me*je,g=fo(i),x=ho(i),q=fo(i+=je),Z=ho(i),pe.push(g-Re*x,x+Re*g,q+Re*Z,Z-Re*q,q,Z);for(me=0;me<pe.length;me+=2)g=pe[me],x=pe[me+1],pe[me]=g*ne+x*Xe+re,pe[me+1]=g*Je+x*qe+G;return pe[me-2]=a,pe[me-1]=l,pe}}function Cy(o){var e=(o+"").replace(_y,function(oe){var j=+oe;return j<1e-4&&j>-1e-4?0:j}).match(by)||[],t=[],n=0,i=0,r=2/3,s=e.length,a=0,l="ERROR: malformed path: "+o,c,u,h,d,f,p,m,g,x,v,A,w,M,k,U,V=function(j,C,O,re){v=(O-j)/3,A=(re-C)/3,m.push(j+v,C+A,O-v,re-A,O,re)};if(!o||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<s;c++)if(M=f,isNaN(e[c])?(f=e[c].toUpperCase(),p=f!==e[c]):c--,h=+e[c+1],d=+e[c+2],p&&(h+=n,d+=i),c||(g=h,x=d),f==="M")m&&(m.length<8?t.length-=1:a+=m.length),n=g=h,i=x=d,m=[h,d],t.push(m),c+=2,f="L";else if(f==="C")m||(m=[0,0]),p||(n=i=0),m.push(h,d,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(f==="S")v=n,A=i,(M==="C"||M==="S")&&(v+=n-m[m.length-4],A+=i-m[m.length-3]),p||(n=i=0),m.push(v,A,h,d,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(f==="Q")v=n+(h-n)*r,A=i+(d-i)*r,p||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,m.push(v,A,n+(h-n)*r,i+(d-i)*r,n,i),c+=4;else if(f==="T")v=n-m[m.length-4],A=i-m[m.length-3],m.push(n+v,i+A,h+(n+v*1.5-h)*r,d+(i+A*1.5-d)*r,n=h,i=d),c+=2;else if(f==="H")V(n,i,n=h,i),c+=1;else if(f==="V")V(n,i,n,i=h+(p?i-n:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(h=g,d=x,m.closed=!0),(f==="L"||es(n-h)>.5||es(i-d)>.5)&&(V(n,i,h,d),f==="L"&&(c+=2)),n=h,i=d;else if(f==="A"){if(k=e[c+4],U=e[c+5],v=e[c+6],A=e[c+7],u=7,k.length>1&&(k.length<3?(A=v,v=U,u--):(A=U,v=k.substr(2),u-=2),U=k.charAt(1),k=k.charAt(0)),w=Sy(n,i,+e[c+1],+e[c+2],+e[c+3],+k,+U,(p?n:0)+v*1,(p?i:0)+A*1),c+=u,w)for(u=0;u<w.length;u++)m.push(w[u]);n=m[m.length-2],i=m[m.length-1]}else console.log(l);return c=m.length,c<6?(t.pop(),c=0):m[0]===m[c-2]&&m[1]===m[c-1]&&(m.closed=!0),t.totalPoints=a+c,t}function Ey(o){wy(o[0])&&(o=[o]);var e="",t=o.length,n,i,r,s;for(i=0;i<t;i++){for(s=o[i],e+="M"+Qn(s[0])+","+Qn(s[1])+" C",n=s.length,r=2;r<n;r++)e+=Qn(s[r++])+","+Qn(s[r++])+" "+Qn(s[r++])+","+Qn(s[r++])+" "+Qn(s[r++])+","+Qn(s[r])+" ";s.closed&&(e+="z")}return e}/*!
 * CustomEase 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $t,Nh,Uh=function(){return $t||typeof window<"u"&&($t=window.gsap)&&$t.registerPlugin&&$t},wu=function(){$t=Uh(),$t?($t.registerEase("_CE",gs.create),Nh=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Ty=1e20,po=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Ly=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Py=/[cLlsSaAhHvVtTqQ]/g,Iy=function(e){var t=e.length,n=Ty,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},Ry=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,r=-n,s=e.length,a=1/(+e[s-2]+i),l=-t||(Math.abs(+e[s-1]-+e[1])<.01*(+e[s-2]-+e[0])?Iy(e)+r:+e[s-1]+r),c;for(l?l=1/l:l=-a,c=0;c<s;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+r)*l},ky=function o(e,t,n,i,r,s,a,l,c,u,h){var d=(e+n)/2,f=(t+i)/2,p=(n+r)/2,m=(i+s)/2,g=(r+a)/2,x=(s+l)/2,v=(d+p)/2,A=(f+m)/2,w=(p+g)/2,M=(m+x)/2,k=(v+w)/2,U=(A+M)/2,V=a-e,oe=l-t,j=Math.abs((n-a)*oe-(i-l)*V),C=Math.abs((r-a)*oe-(s-l)*V),O;return u||(u=[{x:e,y:t},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:k,y:U}),(j+C)*(j+C)>c*(V*V+oe*oe)&&(O=u.length,o(e,t,d,f,v,A,k,U,c,u,h),o(k,U,w,M,g,x,a,l,c,u,h+1+(u.length-O))),u},gs=function(){function o(t,n,i){Nh||wu(),this.id=t,this.setData(n,i)}var e=o.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var r=n.match(Ly),s=1,a=[],l=[],c=i.precision||1,u=c<=1,h,d,f,p,m,g,x,v,A;if(this.data=n,(Py.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(r=Cy(n)[0]),h=r.length,h===4)r.unshift(0,0),r.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[h-2]!=1)&&Ry(r,i.height,i.originY),this.segment=r,p=2;p<h;p+=6)d={x:+r[p-2],y:+r[p-1]},f={x:+r[p+4],y:+r[p+5]},a.push(d,f),ky(d.x,d.y,+r[p],+r[p+1],+r[p+2],+r[p+3],f.x,f.y,1/(c*2e5),a,a.length-1);for(h=a.length,p=0;p<h;p++)x=a[p],v=a[p-1]||x,(x.x>v.x||v.y!==x.y&&v.x===x.x||x===v)&&x.x<=1?(v.cx=x.x-v.x,v.cy=x.y-v.y,v.n=x,v.nx=x.x,u&&p>1&&Math.abs(v.cy/v.cx-a[p-2].cy/a[p-2].cx)>2&&(u=0),v.cx<s&&(v.cx?s=v.cx:(v.cx=.001,p===h-1&&(v.x-=.001,s=Math.min(s,.001),u=0)))):(a.splice(p--,1),h--);if(h=1/s+1|0,m=1/h,g=0,x=a[0],u){for(p=0;p<h;p++)A=p*m,x.nx<A&&(x=a[++g]),d=x.y+(A-x.x)/x.cx*x.cy,l[p]={x:A,cx:m,y:d,cy:0,nx:9},p&&(l[p-1].cy=d-l[p-1].y);l[h-1].cy=a[a.length-1].y-d}else{for(p=0;p<h;p++)x.nx<p*m&&(x=a[++g]),l[p]=x;g<a.length-1&&(l[p-1]=a[a.length-2])}return this.ease=function(w){var M=l[w*h|0]||l[h-1];return M.nx<w&&(M=M.n),M.y+(w-M.x)/M.cx*M.cy},this.ease.custom=this,this.id&&$t&&$t.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return o.getSVGData(this,n)},o.create=function(n,i,r){return new o(n,i,r).ease},o.register=function(n){$t=n,wu()},o.get=function(n){return $t.parseEase(n)},o.getSVGData=function(n,i){i=i||{};var r=i.width||100,s=i.height||100,a=i.x||0,l=(i.y||0)+s,c=$t.utils.toArray(i.path)[0],u,h,d,f,p,m,g,x,v,A;if(i.invert&&(s=-s,l=0),typeof n=="string"&&(n=$t.parseEase(n)),n.custom&&(n=n.custom),n instanceof o)u=Ey(My([n.segment],r,0,0,-s,a,l));else{for(u=[a,l],g=Math.max(5,(i.precision||1)*200),f=1/g,g+=2,x=5/g,v=po(a+f*r),A=po(l+n(f)*-s),h=(A-l)/(v-a),d=2;d<g;d++)p=po(a+d*f*r),m=po(l+n(d*f)*-s),(Math.abs((m-A)/(p-v)-h)>x||d===g-1)&&(u.push(v,A),h=(m-A)/(p-v)),v=p,A=m;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},o}();Uh()&&$t.registerPlugin(gs);gs.version="3.12.2";De.registerPlugin(gs);class By extends Ao{constructor(e){super(),this.experience=e.experience,this.config=e.experience.config,this.debug=e.experience.debug,this.canvas=e.experience.canvas,this.time=e.experience.time,this.sizes=e.experience.sizes,this.camera=e.experience.camera,this.scene=e.experience.scene,this.levels=e.levels,this.screws=e.screws,this.debug&&this.debug.Register({type:"folder",label:"Navigation",open:!1}),this.level=null,this.setView(),this.setPointer(),this.setInteractions(),this.setControls()}setView(){this.view={},this.view.active=!0,this.view.position={},this.view.position.min=new L(-1,.2,-1),this.view.position.max=new L(15,12,15),this.view.target={},this.view.target.multiplier=-2,this.view.target.baseValue=new L(0,.75,0),this.view.target.value=this.view.target.baseValue.clone(),this.view.target.easedValue=this.view.target.baseValue.clone(),this.view.target.easing=.01,this.view.target.min=new L(-.25,.2,-.75),this.view.target.max=new L(1,1.5,1.25),this.view.rotation={},this.view.rotation.phi={},this.view.rotation.phi.baseValue=Math.PI*.35,this.view.rotation.phi.value=this.view.rotation.phi.baseValue,this.view.rotation.phi.easedValue=this.view.rotation.phi.baseValue,this.view.rotation.phi.easing=.01,this.view.rotation.phi.multiplier=-2,this.view.rotation.phi.min=.75,this.view.rotation.phi.max=1.75,this.view.rotation.theta={},this.view.rotation.theta.baseValue=Math.PI*.25,this.view.rotation.theta.value=this.view.rotation.theta.baseValue,this.view.rotation.theta.easedValue=this.view.rotation.theta.baseValue,this.view.rotation.theta.easing=.01,this.view.rotation.theta.multiplier=-2,this.view.rotation.theta.min=0,this.view.rotation.theta.max=Math.PI*.5,this.view.distance={},this.view.distance.baseValue=8,this.view.distance.value=this.view.distance.baseValue,this.view.distance.easedValue=this.view.distance.baseValue,this.view.distance.easing=.02,this.view.distance.min=5,this.view.distance.max=12,this.view.sphericalCoordinates=new ds(this.view.distance.value,this.view.rotation.phi.value,this.view.rotation.theta.value)}setPointer(){this.pointer={},this.pointer.offset={},this.pointer.offset.current=new L,this.pointer.offset.target=new L,this.pointer.raycaster={},this.pointer.hoveredLevel=null,this.pointer.raycaster.instance=new Bh,this.pointer.position=new le,this.pointer.mouseMoveEvent=e=>{const t=e.clientX-this.config.left,n=e.clientY-this.config.top;this.pointer.position.x=t/this.config.width*2-1,this.pointer.position.y=-(n/this.config.height*2-1)},this.pointer.mousedownEvent=e=>{if(this.isLevelReachable(this.pointer.hoveredLevel)){const t=e.clientX,n=e.clientY;document.addEventListener("mouseup",i=>{Math.hypot(t-i.clientX,n-i.clientY)<15&&this.controls.mouse.hovered&&this.trigger("levelClick",[this.pointer.hoveredLevel.index])},{once:!0})}},document.addEventListener("mousemove",this.pointer.mouseMoveEvent),this.canvas.addEventListener("mousedown",this.pointer.mousedownEvent),this.debug&&(this.debug.Register({folder:"Navigation",type:"button",action:this.previous,label:"previous"}),this.debug.Register({folder:"Navigation",type:"button",action:this.next,label:"next"}))}isLevelReachable(e){return!(!e||e===this.level)}goTo(e){if(e===this.level.index)return;const t=this.levels.items[e];De.to(this.pointer.offset.target,{duration:1,ease:gs.create("custom","M0,0 C0.242,0.059 0.492,1.014 1,1.014 "),...t.offset}),this.level=t}previous(){this.level.index<=0||this.trigger("levelClick",[this.level.index-1])}next(){this.level.index>=this.levels.items.length-1||this.trigger("levelClick",[this.level.index+1])}setInteractions(){this.interactions={},this.interactions.delay=null,this.interactions.tween=null,this.interactions.mixStrength=0,this.interactions.active=!1,this.interactions.inactiveView=this.camera.base.clone(),this.interactions.inactiveView.position.multiplyScalar(1.15),this.interactions.inactiveView.position.y*=.25,this.interactions.inactiveView.lookAt(new L(0,.75,0)),this.interactions.activeView=this.camera.base.clone(),this.interactions.start=()=>{this.interactions.delay&&this.interactions.delay.kill(),this.interactions.active||(this.interactions.active=!0,this.interactions.tween&&this.interactions.tween.kill(),this.interactions.tween=De.to(this.interactions,{duration:1,delay:.3,ease:"power4.inOut",mixStrength:1}),this.trigger("interactionStart"))},this.interactions.end=()=>{this.interactions.active&&(this.interactions.active=!1,this.interactions.tween&&this.interactions.tween.kill(),this.interactions.tween=De.to(this.interactions,{duration:1,ease:"Power3.easeInOut",mixStrength:0}),this.trigger("interactionEnd"))}}setControls(){this.controls={},this.controls.wheel={},this.controls.wheel.multiplier=.002,this.controls.wheel.event=e=>{if(!this.interactions.active||!this.controls.mouse.hovered)return;e.preventDefault(),this.interactions.start();const t=xd(e);this.view.distance.value+=t.pixelY*this.controls.wheel.multiplier,this.view.distance.value=Math.min(Math.max(this.view.distance.value,this.view.distance.min),this.view.distance.max)},document.addEventListener("mousewheel",this.controls.wheel.event,{passive:!1}),this.controls.mouse={},this.controls.mouse.down=!1,this.controls.mouse.previous={x:0,y:0},this.controls.mouse.delta={x:0,y:0},this.controls.mouse.mode=null,this.controls.mouse.hovered=!1,this.controls.mouse.mouseEnterEvent=()=>{this.controls.mouse.hovered=!0},this.controls.mouse.mouseLeaveEvent=()=>{this.controls.mouse.hovered=!1},this.controls.mouse.mouseDownEvent=e=>{e.preventDefault(),this.controls.mouse.down=!0,this.interactions.start(),this.canvas.style.cursor="grabbing",this.controls.mouse.mode=e.which===1&&!this.controls.keyboard.downs.shift?"rotation":"position";const t=Math.max(this.sizes.viewport.width,this.sizes.viewport.height),n=e.clientX/t,i=e.clientY/t;this.controls.mouse.previous.x=n,this.controls.mouse.previous.y=i,document.addEventListener("mousemove",this.controls.mouse.mouseMoveEvent),document.addEventListener("mouseup",this.controls.mouse.mouseUpEvent)},this.controls.mouse.mouseMoveEvent=e=>{if(e.preventDefault(),!this.view.active)return;this.interactions.start();const t=Math.max(this.sizes.viewport.width,this.sizes.viewport.height),n=e.clientX/t,i=e.clientY/t;if(this.controls.mouse.delta.x=n-this.controls.mouse.previous.x,this.controls.mouse.delta.y=i-this.controls.mouse.previous.y,this.controls.mouse.previous.x=n,this.controls.mouse.previous.y=i,this.controls.mouse.mode==="rotation")this.view.rotation.theta.value+=this.controls.mouse.delta.x*this.view.rotation.theta.multiplier,this.view.rotation.theta.value=Math.min(Math.max(this.view.rotation.theta.value,this.view.rotation.theta.min),this.view.rotation.theta.max),this.view.rotation.phi.value+=this.controls.mouse.delta.y*this.view.rotation.phi.multiplier,this.view.rotation.phi.value=Math.min(Math.max(this.view.rotation.phi.value,this.view.rotation.phi.min),this.view.rotation.phi.max);else if(this.controls.mouse.mode==="position"){const r=new L(1,0,0);r.applyQuaternion(this.camera.base.quaternion),r.setLength(this.controls.mouse.delta.x*this.view.target.multiplier);const s=new L(0,1,0);s.applyQuaternion(this.camera.base.quaternion),s.setLength(-this.controls.mouse.delta.y*this.view.target.multiplier),this.view.target.value.add(r),this.view.target.value.add(s),this.view.target.value.clamp(this.view.target.min,this.view.target.max)}},this.controls.mouse.mouseUpEvent=()=>{this.controls.mouse.down=!1,this.canvas.style.cursor=this.isLevelReachable(this.pointer.hoveredLevel)?"pointer":"",document.removeEventListener("mousemove",this.controls.mouse.mouseMoveEvent),document.removeEventListener("mouseup",this.controls.mouse.mouseUpEvent)},this.canvas.addEventListener("mouseenter",this.controls.mouse.mouseEnterEvent),this.canvas.addEventListener("mouseleave",this.controls.mouse.mouseLeaveEvent),this.canvas.addEventListener("mousedown",this.controls.mouse.mouseDownEvent),this.controls.touch={},this.controls.touch.previous={x:0,y:0},this.controls.touch.delta={x:0,y:0},this.controls.touch.mode=null,this.controls.touch.pinch={},this.controls.touch.pinch.previous=0,this.controls.touch.pinch.delta=0,this.controls.touch.pinch.multiplier=-4,this.controls.touch.touchStartEvent=e=>{e.preventDefault(),this.interactions.start(),this.controls.touch.mode=e.touches.length===1?"mono":"poly";const t=Math.max(this.sizes.viewport.width,this.sizes.viewport.height),n=e.touches[0].clientX/t,i=e.touches[0].clientY/t;if(this.controls.touch.previous.x=n,this.controls.touch.previous.y=i,this.controls.touch.mode==="poly"){const r=e.touches[1].clientX/t,s=e.touches[1].clientY/t;this.controls.touch.pinch.previous=Math.hypot(n-r,i-s),this.controls.touch.pinch.delta=0}},this.controls.touch.touchMoveEvent=e=>{e.preventDefault(),this.interactions.start();const t=Math.max(this.sizes.viewport.width,this.sizes.viewport.height),n=e.touches[0].clientX/t,i=e.touches[0].clientY/t;if(this.controls.touch.delta.x=n-this.controls.touch.previous.x,this.controls.touch.delta.y=i-this.controls.touch.previous.y,this.controls.touch.previous.x=n,this.controls.touch.previous.y=i,this.controls.touch.mode==="mono")this.view.rotation.theta.value+=this.controls.touch.delta.x*this.view.rotation.theta.multiplier,this.view.rotation.theta.value=Math.min(Math.max(this.view.rotation.theta.value,this.view.rotation.theta.min),this.view.rotation.theta.max),this.view.rotation.phi.value+=this.controls.touch.delta.y*this.view.rotation.phi.multiplier,this.view.rotation.phi.value=Math.min(Math.max(this.view.rotation.phi.value,this.view.rotation.phi.min),this.view.rotation.phi.max);else if(this.controls.touch.mode==="poly"){const r=e.touches[1].clientX/t,s=e.touches[1].clientY/t,a=Math.hypot(n-r,i-s);if(this.controls.touch.pinch.delta=a-this.controls.touch.pinch.previous,this.controls.touch.pinch.previous=a,Math.abs(this.controls.touch.pinch.delta)<.003){const l=new L(1,0,0);l.applyQuaternion(this.camera.base.quaternion),l.setLength(this.controls.touch.delta.x*this.view.target.multiplier);const c=new L(0,1,0);c.applyQuaternion(this.camera.base.quaternion),c.setLength(-this.controls.touch.delta.y*this.view.target.multiplier),this.view.target.value.add(l),this.view.target.value.add(c),this.view.target.value.clamp(this.view.target.min,this.view.target.max)}else this.view.distance.value+=this.controls.touch.pinch.delta*this.controls.touch.pinch.multiplier,this.view.distance.value=Math.min(Math.max(this.view.distance.value,this.view.distance.min),this.view.distance.max)}},this.controls.touch.touchEndEvent=e=>{this.controls.touch.mode=e.touches.length===1?"rotation":"position"},this.canvas.addEventListener("touchmove",this.controls.touch.touchMoveEvent,{passive:!1}),this.canvas.addEventListener("touchstart",this.controls.touch.touchStartEvent,{passive:!1}),this.canvas.addEventListener("touchend",this.controls.touch.touchEndEvent,{passive:!1}),this.controls.contextMenu={},this.controls.contextMenu.event=e=>{this.interactions.active&&e.preventDefault()},document.addEventListener("contextmenu",this.controls.contextMenu.event),this.controls.keyboard={},this.controls.keyboard.downs={},this.controls.keyboard.downs.shift=!1,this.controls.keyboard.downEvent=e=>{switch(e.code){case"ShiftLeft":this.controls.keyboard.downs.shift=!0;break;case"Escape":this.interactions.end();break;case"ArrowLeft":this.interactions.active&&this.previous();break;case"ArrowRight":this.interactions.active&&this.next();break}},this.controls.keyboard.upEvent=e=>{switch(e.code){case"ShiftLeft":this.controls.keyboard.downs.shift=!1;break}},document.addEventListener("keydown",this.controls.keyboard.downEvent),document.addEventListener("keyup",this.controls.keyboard.upEvent)}resize(){}update(){this.pointer.offset.current.lerp(this.pointer.offset.target,.01*this.time.delta),this.view.target.easedValue.lerp(this.view.target.value,this.time.delta*this.view.target.easing),this.view.target.debug&&this.view.target.debug.position.copy(this.view.target.easedValue),this.view.distance.easedValue+=(this.view.distance.value-this.view.distance.easedValue)*this.time.delta*this.view.distance.easing,this.view.rotation.phi.easedValue+=(this.view.rotation.phi.value-this.view.rotation.phi.easedValue)*this.time.delta*this.view.rotation.phi.easing,this.view.rotation.theta.easedValue+=(this.view.rotation.theta.value-this.view.rotation.theta.easedValue)*this.time.delta*this.view.rotation.theta.easing,this.view.sphericalCoordinates.set(this.view.distance.easedValue,this.view.rotation.phi.easedValue,this.view.rotation.theta.easedValue),this.interactions.activeView.position.setFromSpherical(this.view.sphericalCoordinates),this.interactions.activeView.position.add(this.view.target.easedValue),this.interactions.activeView.position.clamp(this.view.position.min,this.view.position.max),this.interactions.activeView.lookAt(this.view.target.easedValue),this.camera.default.camera.position.copy(this.interactions.inactiveView.position).lerp(this.interactions.activeView.position,this.interactions.mixStrength),this.camera.default.camera.quaternion.copy(this.interactions.inactiveView.quaternion).slerp(this.interactions.activeView.quaternion,this.interactions.mixStrength),this.camera.default.camera.position.add(this.pointer.offset.current),this.pointer.raycaster.instance.setFromCamera(this.pointer.position,this.camera.base);const e=this.levels.items.map(i=>i.intersect),t=this.pointer.raycaster.instance.intersectObjects(e);let n=null;t.length&&(n=this.levels.items.find(i=>i.intersect==t[0].object)),this.controls.mouse.down||(n===null&&this.pointer.hoveredLevel!==null&&(this.canvas.style.cursor=""),(n!==null&&this.pointer.hoveredLevel===null||n!==this.pointer.hoveredLevel)&&(this.isLevelReachable(n)?this.canvas.style.cursor="pointer":this.canvas.style.cursor="")),this.pointer.hoveredLevel=n}destroy(){document.removeEventListener("mousewheel",this.controls.wheel.event),document.removeEventListener("mousemove",this.controls.mouse.mouseMoveEvent),document.removeEventListener("mouseup",this.controls.mouse.mouseUpEvent),document.removeEventListener("contextmenu",this.controls.contextMenu.event),document.removeEventListener("keydown",this.controls.keyboard.downEvent),document.removeEventListener("keyup",this.controls.keyboard.upEvent),document.removeEventListener("mousemove",this.pointer.mouseMoveEvent),document.removeEventListener("mousedown",this.pointer.mousedownEvent),this.canvas.removeEventListener("mouseenter",this.controls.mouse.mouseEnterEvent),this.canvas.removeEventListener("mouseleave",this.controls.mouse.mouseLeaveEvent),this.canvas.removeEventListener("mousedown",this.controls.mouse.mouseDownEvent),this.canvas.removeEventListener("touchmove",this.controls.touch.touchMoveEvent),this.canvas.removeEventListener("touchstart",this.controls.touch.touchStartEvent),this.canvas.removeEventListener("touchend",this.controls.touch.touchEndEvent)}}class Dy{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.colors=this.experience.colors,this.resources=this.experience.resources,this.time=this.experience.time,this.scene=this.experience.scene,this.camera=this.experience.camera,this.index=e.index,this.offset=new L(0,0,0),this.intersect=this.resources.items.level1IntersectModel.scene.children[0],this.intersect.visible=!1,this.scene.add(this.intersect),this.group=new St,this.group.visible=!1,this.scene.add(this.group),this.setBaked(),this.setCameraHead(),this.setDog(),this.setSudoHead(),this.setCactus(),this.setCube(),this.setPyramid(),this.setEmissives(),this.show()}show(){this.group.visible=!0;const e=-this.offset.y-2,t=Math.abs(e)*.5;this.group.position.y=e,window.requestAnimationFrame(()=>{De.to(this.group.position,{duration:t,ease:"power4.out",y:0})})}setBaked(){this.baked={},this.baked.apply=e=>{e.traverse(t=>{t instanceof Ye&&(t.material=this.baked.material)})},this.baked.texture=this.resources.items.level1BakedTexture,this.baked.texture.flipY=!1,this.baked.texture.encoding=We,this.baked.texture.anisotropy=4,this.baked.model=this.resources.items.level1BakedModel.scene,this.baked.material=new mt({map:this.baked.texture}),this.baked.apply(this.baked.model),this.group.add(this.baked.model)}setCameraHead(){this.cameraHead={},this.cameraHead.model=this.resources.items.level1CameraHeadModel.scene.children[0],this.cameraHead.model.position.y-=.01,this.cameraHead.target=new L,this.cameraHead.easedTarget=new L,this.cameraHead.easing=.005,this.cameraHead.watchingYou=!1,this.baked.apply(this.cameraHead.model),this.group.add(this.cameraHead.model),this.cameraHead.lookAtSomething=()=>{this.cameraHead.watchingYou||(De.killTweensOf(this.cameraHead.target),De.to(this.cameraHead.target,{duration:.3,x:Math.random()*2,y:Math.random()*1.5,z:(Math.random()-.5)*1})),De.delayedCall(1+Math.random()*5,this.cameraHead.lookAtSomething)},this.cameraHead.lookAtSomething()}setDog(){this.dog={},this.dog.model=this.resources.items.level1DogModel.scene,this.baked.apply(this.dog.model),this.group.add(this.dog.model)}setSudoHead(){this.sudoHead={},this.sudoHead.model=this.resources.items.level1SudoHeadModel.scene.children[0],this.sudoHead.model.rotation.order="YXZ",this.sudoHead.model.position.y-=.01,this.sudoHead.tiltObject=this.sudoHead.model.children[0],this.sudoHead.target=new L,this.sudoHead.easedTarget=new L,this.sudoHead.easing=.005,this.sudoHead.watchingYou=!1,this.baked.apply(this.sudoHead.model),this.config.ouka||this.group.add(this.sudoHead.model);const e=this.sudoHead.model.getObjectByName("earsInside");e&&(e.material=new Lt({matcap:this.resources.items.matcapPinkOnBeigeTexture}));const t=this.sudoHead.model.getObjectByName("earsOutside");t&&(t.material=new Lt({matcap:this.resources.items.matcapWhiteOnPurpleTexture})),this.sudoHead.lookAtSomething=()=>{this.sudoHead.watchingYou||(De.killTweensOf(this.sudoHead.target),De.to(this.sudoHead.target,{duration:.3,x:.6+Math.random()*.4,y:.25+Math.random()*.25,z:0})),De.delayedCall(1+Math.random()*2,this.sudoHead.lookAtSomething)},this.sudoHead.lookAtSomething(),this.sudoHead.tilt=()=>{De.to(this.sudoHead.tiltObject.rotation,{duration:1,ease:"Power3.easeInOut",z:Math.random()<.5?0:(Math.random()-.5)*Math.PI*.35}),De.delayedCall(.5+Math.random()*2,this.sudoHead.tilt)},this.sudoHead.tilt()}setCactus(){this.cactus={},this.cactus.model=this.resources.items.level1CactusModel.scene.children[0],this.cactus.mesh=this.cactus.model.children[0],this.baked.apply(this.cactus.model),this.group.add(this.cactus.model),this.cactus.uniforms={},this.cactus.uniforms.uTime={value:0},this.cactus.material=new mt({map:this.baked.texture}),this.cactus.mesh.material=this.cactus.material,this.cactus.material.onBeforeCompile=e=>{e.uniforms.uTime=this.cactus.uniforms.uTime,e.vertexShader=e.vertexShader.replace("#include <common>",`
                    #include <common>
                    uniform float uTime;

                    vec2 rotate(vec2 v, float a) {
                        float s = sin(a);
                        float c = cos(a);
                        mat2 m = mat2(c, -s, s, c);
                        return m * v;
                    }
                `),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
                    #include <begin_vertex>

                    float angleMultiplier = 0.25;
                    float timeFrequency = 0.002;
                    float elevationOffsetMultiplier = 3.0;

                    vec2 transformedRotated = rotate(transformed.xz, sin(uTime * timeFrequency + transformed.z * elevationOffsetMultiplier) * log(abs(transformed.z) + 1.0) * angleMultiplier);
                    transformed.xz = transformedRotated;
                `)}}setCube(){this.cube={},this.cube.basePosition=new L,this.cube.rotationX=0,this.cube.rotationY=0,this.cube.model=this.resources.items.level1CubeModel.scene.children[0],this.cube.mesh=this.cube.model.children[0],this.cube.basePosition.copy(this.cube.model.position),this.cube.material=new Lt({matcap:this.resources.items.matcapPinkOnBeigeTexture}),this.cube.mesh.material=this.cube.material,this.group.add(this.cube.model),this.cube.jump=()=>{this.cube.rotationX+=Math.ceil(Math.random()*3),this.cube.rotationY+=Math.ceil(Math.random()*3),De.killTweensOf(this.cube.mesh.position),De.killTweensOf(this.cube.mesh.rotation),De.to(this.cube.model.position,{duration:.5,ease:"Power4.easeOut",y:this.cube.basePosition.y+.2,onComplete:()=>{De.to(this.cube.model.position,{duration:.5,ease:"Power2.easeIn",y:this.cube.basePosition.y})}}),De.to(this.cube.mesh.rotation,{duration:1,x:this.cube.rotationX*Math.PI*.5,y:this.cube.rotationY*Math.PI*.5}),De.delayedCall(1.5,this.cube.jump)},this.cube.jump()}setPyramid(){this.pyramid={},this.pyramid.time=0,this.pyramid.timeMultiplier=.01,this.pyramid.model=this.resources.items.level1PyramidModel.scene.children[0],this.pyramid.mesh=this.pyramid.model.children[0],this.pyramid.material=new Lt({matcap:this.resources.items.matcapCyanOnBeigeTexture}),this.pyramid.mesh.material=this.pyramid.material,this.group.add(this.pyramid.model),this.pyramid.rotateX=()=>{De.to(this.pyramid.model.rotation,{duration:1,ease:"Power3.easeInOut",x:(Math.random()-.5)*Math.PI*3}),De.delayedCall(.5+Math.random()*2,this.pyramid.rotateX)},this.pyramid.rotateY=()=>{De.to(this.pyramid.model.rotation,{duration:1,ease:"Power3.easeInOut",z:(Math.random()-.5)*Math.PI*3}),De.delayedCall(.5+Math.random()*2,this.pyramid.rotateY)},this.pyramid.rotateX(),this.pyramid.rotateY()}setEmissives(){this.emissives={},this.emissives.model=this.resources.items.level1EmissivesModel.scene,this.emissives.materials={},this.emissives.materials.white=new mt({color:16777215}),this.emissives.model.traverse(e=>{e instanceof Ye&&(e.material=this.emissives.materials.white)}),this.group.add(this.emissives.model)}update(){const e=Math.atan2(this.camera.base.position.x-this.cameraHead.model.position.x,this.camera.base.position.z-this.cameraHead.model.position.z),t=Math.atan2(this.camera.base.position.x-this.cameraHead.model.position.x,this.camera.base.position.y-this.cameraHead.model.position.y);this.cameraHead.wathingYou=this.camera.speed>.01&&e>1&&e<2&&t>1&&t<2,this.cameraHead.wathingYou&&(this.cameraHead.target.copy(this.camera.base.position),this.cameraHead.target.y-=.2),this.cameraHead.debugTarget&&this.cameraHead.debugTarget.position.copy(this.cameraHead.target),this.cameraHead.easedTarget.lerp(this.cameraHead.target,this.cameraHead.easing*this.time.delta),this.cameraHead.model.lookAt(this.cameraHead.easedTarget);const n=Math.atan2(this.camera.base.position.x-this.sudoHead.model.position.x,this.camera.base.position.z-this.sudoHead.model.position.z),i=Math.atan2(this.camera.base.position.z-this.sudoHead.model.position.z,this.camera.base.position.y-this.sudoHead.model.position.y),r=this.camera.base.position.length();this.sudoHead.watchingYou=r<8&&this.camera.speed>.002&&n>-.5&&n<1.25&&i>1&&i<2,this.sudoHead.watchingYou&&(this.sudoHead.target.copy(this.camera.base.position),this.sudoHead.target.y-=.2),this.sudoHead.debugTarget&&this.sudoHead.debugTarget.position.copy(this.sudoHead.target),this.sudoHead.easedTarget.lerp(this.sudoHead.target,this.sudoHead.easing*this.time.delta),this.sudoHead.model.lookAt(this.sudoHead.easedTarget),this.sudoHead.model.rotation.x=Math.min(this.sudoHead.model.rotation.x,-.05),this.cactus.uniforms.uTime.value=this.time.elapsed}destroy(){this.baked.material.dispose()}}var Fy=`uniform sampler2D uTexture;
uniform sampler2D uBeamTexture;
uniform sampler2D uBeamGradientTexture;
uniform float uBeamMultiplier;
uniform float uBeamOffset;

varying vec2 vUv;

void main()
{
    vec3 textureColor = texture2D(uTexture, vUv).rgb;

    float beamStrength = texture2D(uBeamTexture, vUv).r;
    beamStrength += uBeamOffset;
    beamStrength *= uBeamMultiplier;
    beamStrength = max(0.0, beamStrength);

    vec3 beamColor = texture2D(uBeamGradientTexture, vec2(beamStrength / uBeamMultiplier, 0.5)).rgb;

    textureColor = mix(textureColor, beamColor, beamStrength);

    gl_FragColor = vec4(textureColor, 1.0);


	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Oy=`varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`;function zy(o={}){const e={uTexture:{value:null},uBeamTexture:{value:null},uBeamGradientTexture:{value:null},uBeamMultiplier:{value:null},uBeamOffset:{value:null}},t={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},n={};return new at({wireframe:!1,transparent:!1,depthTest:!0,depthWrite:!0,lights:!1,uniforms:e,extensions:t,defines:n,vertexShader:Oy,fragmentShader:Fy})}var Ny=`varying vec4 vColor;

void main()
{
    gl_FragColor = vColor;
}`,Uy=`uniform vec3 uColor;
uniform float uAlpha;

varying vec4 vColor;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    vColor = vec4(uColor, uAlpha);
}`;function Hy(o={}){const e={uColor:{value:null},uAlpha:{value:null}},t={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},n={};return new at({wireframe:!1,side:en,transparent:!0,depthTest:!0,depthWrite:!0,lights:!1,uniforms:e,extensions:t,defines:n,vertexShader:Uy,fragmentShader:Ny})}var Gy=`varying vec4 vColor;

void main()
{
    if(vColor.a == 0.0)
    {
        discard;
    }
    gl_FragColor = vColor;
}`,Vy=`uniform float uMask;

attribute float alpha;

varying vec4 vColor;

void main()
{
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;

    gl_PointSize = 7.0;
    gl_PointSize *= (1.0 / - modelViewPosition.z);

    vColor = vec4(color, alpha);

    vec2 screenPosition = gl_Position.xy / gl_Position.w;
    if(screenPosition.x > uMask)
    {
        vColor.a = 0.0;
    }

}`;function Wy(o={}){const e={uMask:{value:null}},t={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},n={};return new at({wireframe:!1,transparent:!1,depthTest:!0,depthWrite:!1,lights:!1,blending:ii,vertexColors:!0,uniforms:e,extensions:t,defines:n,vertexShader:Vy,fragmentShader:Gy})}var jy=`uniform float uMask;

varying float screenPositionX;

void main()
{
    if(screenPositionX > uMask)
    {
        discard;
    }

    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`,qy=`varying vec2 vUv;
varying float screenPositionX;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;

    screenPositionX = gl_Position.x / gl_Position.w;
}`;function Xy(o={}){const e={uTexture:{value:null},uMask:{value:null}},t={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},n={};return new at({wireframe:!1,transparent:!1,depthTest:!0,depthWrite:!0,lights:!1,uniforms:e,extensions:t,defines:n,vertexShader:qy,fragmentShader:jy})}class Yy{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.debug=this.experience.debug,this.colors=this.experience.colors,this.resources=this.experience.resources,this.sizes=this.experience.sizes,this.time=this.experience.time,this.scene=this.experience.scene,this.camera=this.experience.camera,this.index=e.index,this.debug&&(this.debug.Register({type:"folder",label:"Level 2",open:!1}),this.debug.Register({type:"folder",folder:"Level 2",label:"Laser",open:!1}),this.debug.Register({type:"folder",folder:"Laser",label:"Cylinders",open:!1}),this.debug.Register({type:"folder",folder:"Laser",label:"Galaxy",open:!1})),this.offset=new L(0,2,-2),this.baseY=-this.offset.y-2,this.intersect=this.resources.items.level2IntersectModel.scene.children[0],this.intersect.visible=!1,this.scene.add(this.intersect),this.group=new St,this.group.position.y=this.baseY,this.scene.add(this.group),this.setLaser(),this.setBaked(),this.setBlock(),this.setBasics(),this.setGalaxy()}show(){const e=Math.abs(this.baseY)*.5;window.requestAnimationFrame(()=>{De.to(this.group.position,{duration:e,ease:"power4.out",y:0})})}setBaked(){this.baked={},this.baked.apply=e=>{e.traverse(t=>{t instanceof Ye&&(t.material=this.laser.bakedMaterial)})},this.baked.model=this.resources.items.level2BakedModel.scene,this.baked.apply(this.baked.model),this.group.add(this.baked.model)}setBlock(){this.block={},this.block.model=this.resources.items.level2BlockBakedModel.scene,this.block.texture=this.resources.items.level2BlockBakedTexture,this.block.texture.flipY=!1,this.block.texture.encoding=We,this.block.material=new mt({map:this.block.texture}),this.block.model.traverse(e=>{e instanceof Ye&&(e.material=this.block.material)}),this.group.add(this.block.model)}setBasics(){this.basics={},this.basics.model=this.resources.items.level2BasicsModel.scene,this.basics.lampInner=this.basics.model.children.find(e=>e.name.match(/^lampInner/)),this.basics.lampInner.material=new mt({color:16777215}),this.basics.saberLaser=this.basics.model.children.find(e=>e.name.match(/^saberLaser/)),this.basics.saberLaser.material=new mt({color:16711680}),this.group.add(this.basics.model)}setGalaxy(){this.galaxy={},this.galaxy.landmark={},this.galaxy.landmark.object=new ht,this.galaxy.landmark.object.position.set(.6,3.2,-2.85),this.galaxy.window={},this.galaxy.window.material=new Xy,this.galaxy.window.material.uniforms.uMask.value=1,this.galaxy.window.material.uniforms.uTexture.value=this.laser.bakedTexture,this.galaxy.window.mesh=this.basics.model.children.find(e=>e.name.match(/^window/)),this.galaxy.window.mesh.material=this.galaxy.window.material,this.group.add(this.galaxy.window.mesh),this.galaxy.parameters={},this.galaxy.parameters.count=22e3,this.galaxy.parameters.size=.005,this.galaxy.parameters.radius=.45,this.galaxy.parameters.branches=3,this.galaxy.parameters.spin=20,this.galaxy.parameters.randomness=.2,this.galaxy.parameters.randomnessPower=3,this.galaxy.parameters.insideColor="#fc3204",this.galaxy.parameters.outsideColor="#0044ff",this.galaxy.parameters.rotationX=.025,this.galaxy.parameters.rotationZ=-.24,this.galaxy.update=()=>{this.galaxy.points&&(this.galaxy.geometry.dispose(),this.galaxy.material.dispose(),this.group.remove(this.galaxy.points)),this.galaxy.geometry=new dt;const e=new Float32Array(this.galaxy.parameters.count*3),t=new Float32Array(this.galaxy.parameters.count*3),n=new Float32Array(this.galaxy.parameters.count),i=new Le(this.galaxy.parameters.insideColor),r=new Le(this.galaxy.parameters.outsideColor);for(let s=0;s<this.galaxy.parameters.count;s++){const a=s*3,l=Math.random()*this.galaxy.parameters.radius,c=l*this.galaxy.parameters.spin,u=s%this.galaxy.parameters.branches/this.galaxy.parameters.branches*Math.PI*2,h=Math.pow(Math.random(),this.galaxy.parameters.randomnessPower)*(Math.random()<.5?1:-1)*this.galaxy.parameters.randomness*l,d=Math.pow(Math.random(),this.galaxy.parameters.randomnessPower)*(Math.random()<.5?1:-1)*this.galaxy.parameters.randomness*l,f=Math.pow(Math.random(),this.galaxy.parameters.randomnessPower)*(Math.random()<.5?1:-1)*this.galaxy.parameters.randomness*l;e[a]=Math.cos(u+c)*l+h,e[a+1]=d,e[a+2]=Math.sin(u+c)*l+f;const p=i.clone();p.lerp(r,l/this.galaxy.parameters.radius),t[a]=p.r,t[a+1]=p.g,t[a+2]=p.b,n[s]=Math.random()}this.galaxy.geometry.setAttribute("position",new xt(e,3)),this.galaxy.geometry.setAttribute("color",new xt(t,3)),this.galaxy.geometry.setAttribute("alpha",new xt(n,1)),this.galaxy.material=new Wy,this.galaxy.material.uniforms.uMask.value=1,this.galaxy.points=new ko(this.galaxy.geometry,this.galaxy.material),this.galaxy.points.rotation.reorder("XZY"),this.galaxy.points.rotation.x=this.galaxy.parameters.rotationX,this.galaxy.points.rotation.z=this.galaxy.parameters.rotationZ,this.galaxy.points.position.y=3,this.galaxy.points.position.z=-3.1,this.group.add(this.galaxy.points)},this.galaxy.update(),this.debug&&(this.debug.Register({object:this.galaxy.parameters,property:"count",folder:"Galaxy",type:"range",label:"count",min:1e3,max:1e5,step:1,onChange:this.galaxy.update}),this.debug.Register({object:this.galaxy.parameters,property:"radius",folder:"Galaxy",type:"range",label:"radius",min:0,max:1,step:.01,onChange:this.galaxy.update}),this.debug.Register({object:this.galaxy.parameters,property:"branches",folder:"Galaxy",type:"range",label:"branches",min:0,max:10,step:1,onChange:this.galaxy.update}),this.debug.Register({object:this.galaxy.parameters,property:"spin",folder:"Galaxy",type:"range",label:"spin",min:0,max:100,step:.1,onChange:this.galaxy.update}),this.debug.Register({object:this.galaxy.parameters,property:"randomness",folder:"Galaxy",type:"range",label:"randomness",min:0,max:1,step:.01,onChange:this.galaxy.update}),this.debug.Register({object:this.galaxy.parameters,property:"randomnessPower",folder:"Galaxy",type:"range",label:"randomnessPower",min:0,max:5,step:.01,onChange:this.galaxy.update}),this.debug.Register({object:this.galaxy.parameters,property:"insideColor",type:"color",folder:"Galaxy",label:"insideColor",format:"hex",onChange:this.galaxy.update}),this.debug.Register({object:this.galaxy.parameters,property:"outsideColor",type:"color",folder:"Galaxy",label:"outsideColor",format:"hex",onChange:this.galaxy.update}),this.debug.Register({object:this.galaxy.parameters,property:"rotationX",folder:"Galaxy",type:"range",label:"rotationX",min:-Math.PI,max:Math.PI,step:.001,onChange:this.galaxy.update}),this.debug.Register({object:this.galaxy.parameters,property:"rotationZ",folder:"Galaxy",type:"range",label:"rotationZ",min:-Math.PI,max:Math.PI,step:.001,onChange:this.galaxy.update}))}setLaser(){this.laser={},this.laser.spherical=new ds,this.laser.model={},this.laser.model.container=this.resources.items.level2LaserModel.scene.children[0],this.laser.model.container.rotation.reorder("YXZ"),this.laser.model.pan=this.laser.model.container.children[0],this.laser.model.tilt=this.laser.model.pan.children.find(e=>e.name.match(/^tilt/)),this.laser.model.base=this.laser.model.pan.children.find(e=>e.name.match(/^base/)),this.laser.model.cylinder=this.laser.model.tilt.children.find(e=>e.name.match(/^cylinder/)),this.laser.model.theta={value:0,smoothed:0},this.laser.model.phi={value:0,smoothed:0},this.laser.model.cylinder.material=new Lt({matcap:this.resources.items.matcapDarkGreyOnWhiteTexture}),this.laser.model.base.material=new Lt({matcap:this.resources.items.matcapWhiteOnPurpleTexture}),this.group.add(this.laser.model.container),this.laser.beam={},this.laser.beam.group=new St,this.laser.model.tilt.add(this.laser.beam.group),this.laser.beam.options=[{color:"#ee00a0",scale:.01,alpha:.2},{color:"#ff007d",scale:.005,alpha:.6},{color:"#ffbb00",scale:.003,alpha:.8},{color:"#ffdba1",scale:.0015,alpha:1}],this.laser.beam.geometry=new Fo(1,1,1,32,1,!1),this.laser.beam.geometry.translate(0,.5,0);for(const e of this.laser.beam.options){const t=new Hy;t.blending=ii,t.uniforms.uColor.value=new Le(e.color),t.uniforms.uAlpha.value=e.alpha;const n=new Ye(this.laser.beam.geometry,t);n.scale.x=e.scale,n.scale.z=e.scale,this.laser.beam.group.add(n),this.debug&&(this.debug.Register({object:e,property:"color",type:"color",folder:"Cylinders",label:"color",format:"hex",onChange:()=>{t.uniforms.uColor.value.set(e.color)}}),this.debug.Register({object:e,property:"scale",folder:"Cylinders",type:"range",label:"scale",min:0,max:.02,step:1e-5,onChange:()=>{n.scale.x=e.scale,n.scale.z=e.scale}}),this.debug.Register({object:t.uniforms.uAlpha,property:"value",folder:"Cylinders",type:"range",label:"alpha",min:0,max:1,step:.01}))}this.laser.raycaster={},this.laser.raycaster.instance=new Bh,this.laser.raycaster.intersect=this.resources.items.level2IntersectsModel.scene.children[0],this.laser.raycaster.intersect.visible=!1,this.scene.add(this.laser.raycaster.intersect),this.laser.raycaster.pointer=new le,window.addEventListener("mousemove",e=>{const t=e.clientX-this.config.left,n=e.clientY-this.config.top;this.laser.raycaster.pointer.x=t/this.config.width*2-1,this.laser.raycaster.pointer.y=-(n/this.config.height*2-1)}),this.laser.canvas={},this.laser.canvas.visible=!1,this.laser.canvas.size=512,this.laser.canvas.beamRatio=.015,this.laser.canvas.dumping=.02,this.laser.canvas.beamImage=this.resources.items.level2Beam,this.laser.canvas.element=document.createElement("canvas"),this.laser.canvas.element.width=this.laser.canvas.size,this.laser.canvas.element.height=this.laser.canvas.size,this.laser.canvas.element.style.position="fixed",this.laser.canvas.element.style.top=0,this.laser.canvas.element.style.left=0,this.laser.canvas.element.style.zIndex=10,this.laser.canvas.visible&&document.body.appendChild(this.laser.canvas.element),this.laser.canvas.context=this.laser.canvas.element.getContext("2d"),this.laser.canvas.context.fillRect(0,0,this.laser.canvas.size,this.laser.canvas.size),this.laser.texture=new oh(this.laser.canvas.element),this.laser.texture.flipY=!1,this.laser.bakedTexture=this.resources.items.level2BakedTexture,this.laser.bakedTexture.flipY=!1,this.laser.bakedTexture.encoding=We,this.laser.bakedTexture.anisotropy=4,this.laser.bakedMaterial=new zy,this.laser.bakedMaterial.uniforms.uTexture.value=this.laser.bakedTexture,this.laser.bakedMaterial.uniforms.uBeamTexture.value=this.laser.texture,this.laser.bakedMaterial.uniforms.uBeamGradientTexture.value=this.resources.items.level2BeamGradientTexture,this.laser.bakedMaterial.uniforms.uBeamMultiplier.value=3,this.laser.bakedMaterial.uniforms.uBeamOffset.value=-.1,this.debug&&(this.debug.Register({object:this.laser.canvas,property:"visible",folder:"Laser",type:"checkbox",label:"visible",onChange:()=>{this.laser.canvas.visible?document.body.appendChild(this.laser.canvas.element):document.body.removeChild(this.laser.canvas.element)}}),this.debug.Register({object:this.laser.canvas,property:"beamRatio",folder:"Laser",type:"range",label:"beamRatio",min:.001,max:.1,step:.001}),this.debug.Register({object:this.laser.canvas,property:"dumping",folder:"Laser",type:"range",label:"dumping",min:.01,max:.2,step:.01}),this.debug.Register({object:this.laser.bakedMaterial.uniforms.uBeamMultiplier,property:"value",folder:"Laser",type:"range",label:"beamMultiplier",min:1,max:20,step:.1}),this.debug.Register({object:this.laser.bakedMaterial.uniforms.uBeamOffset,property:"value",folder:"Laser",type:"range",label:"beamOffset",min:-1,max:0,step:.01}))}update(){const e=new L;this.galaxy.landmark.object.updateMatrixWorld(),e.setFromMatrixPosition(this.galaxy.landmark.object.matrixWorld),e.project(this.camera.base),this.galaxy.window.material.uniforms.uMask.value=e.x,this.galaxy.material.uniforms.uMask.value=e.x,this.galaxy.points.rotation.y+=this.time.delta*4e-5,this.laser.raycaster.instance.setFromCamera(this.laser.raycaster.pointer,this.camera.base);const t=this.laser.raycaster.instance.intersectObject(this.laser.raycaster.intersect);if(t.length){const a=t[0].point.clone();a.sub(this.laser.model.container.position),this.laser.spherical.setFromVector3(a,"YXZ"),this.laser.model.theta.value=this.laser.spherical.theta,this.laser.model.theta.value<0&&(this.laser.model.theta.value=Math.PI+(Math.PI-Math.abs(this.laser.model.theta.value))),this.laser.model.phi.value=Math.min(this.laser.spherical.phi,Math.PI*.5)}this.laser.model.theta.smoothed+=(this.laser.model.theta.value-this.laser.model.theta.smoothed)*this.time.delta*.008,this.laser.model.phi.smoothed+=(this.laser.model.phi.value-this.laser.model.phi.smoothed)*this.time.delta*.008,this.laser.model.pan.rotation.y=this.laser.model.theta.smoothed+Math.PI*.5,this.laser.model.tilt.rotation.z=this.laser.model.phi.smoothed;const n=new ds(1,this.laser.model.phi.smoothed,this.laser.model.theta.smoothed),i=new L;i.setFromSpherical(n),this.laser.raycaster.instance.set(this.laser.model.container.position,i);const r=this.laser.raycaster.instance.intersectObject(this.laser.raycaster.intersect);if(r.length){const s=r[0].point.clone(),a=r[0].uv;this.laser.canvas.context.globalCompositeOperation="lighter",this.laser.canvas.context.globalAlpha=1,this.laser.canvas.context.fillStyle="#ffffff";const l=.25+Math.random()*.75,c=this.laser.canvas.beamRatio*this.laser.canvas.size*l;this.laser.canvas.context.drawImage(this.laser.canvas.beamImage,a.x*this.laser.canvas.size-c*.5,a.y*this.laser.canvas.size-c*.5,c,c);const u=this.laser.model.container.position.distanceTo(s);this.laser.beam.group.scale.y=u}this.laser.canvas.context.globalCompositeOperation="source-over",this.laser.canvas.context.globalAlpha=this.laser.canvas.dumping,this.laser.canvas.context.fillStyle="#000000",this.laser.canvas.context.fillRect(0,0,this.laser.canvas.size,this.laser.canvas.size),this.laser.texture.needsUpdate=!0}destroy(){this.laser.bakedMaterial.dispose()}}var vs=`varying vec2 vUv;
varying float vElevation;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    vUv = uv;
    vElevation = modelPosition.y;
}`,xs=`uniform sampler2D uTexture;
uniform vec2 uFade;

varying vec2 vUv;
varying float vElevation;

void main()
{
    vec3 textureColor = texture2D(uTexture, vUv).rgb;
    float alpha = smoothstep(uFade.y, uFade.x, vElevation);

    gl_FragColor = vec4(textureColor, alpha);

	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`;class Zy{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.debug=this.experience.debug,this.colors=this.experience.colors,this.resources=this.experience.resources,this.sizes=this.experience.sizes,this.time=this.experience.time,this.scene=this.experience.scene,this.camera=this.experience.camera,this.index=e.index,this.debug&&this.debug.Register({type:"folder",label:"Level 3",open:!1}),this.offset=new L(-2,4,-2),this.baseY=-this.offset.y-2,this.intersect=this.resources.items.level3IntersectModel.scene.children[0],this.intersect.visible=!1,this.scene.add(this.intersect),this.group=new St,this.group.position.y=this.baseY,this.scene.add(this.group),this.setMaterials(),this.setBaked(),this.setBlock(),this.setPrinter(),this.setDrone()}show(){const e=Math.abs(this.baseY)*.5;window.requestAnimationFrame(()=>{De.to(this.group.position,{duration:e,ease:"power4.out",y:0})})}setMaterials(){this.materials={},this.materials.orangeMatcapMaterial=new Lt({matcap:this.resources.items.matcapOrangeOnDarkGreyTexture}),this.materials.cyanMatcapMaterial=new Lt({matcap:this.resources.items.matcapCyanOnBeigeTexture}),this.materials.redMatcapMaterial=new Lt({matcap:this.resources.items.matcapRedOnPurpleTexture}),this.materials.darkGreyOnWhiteMatcapMaterial=new Lt({matcap:this.resources.items.matcapDarkGreyOnWhiteTexture}),this.materials.darkGreyOnDarkMatcapMaterial=new Lt({matcap:this.resources.items.matcapDarkGreyOnDarkGreyTexture}),this.materials.carOrangeMatcapMaterial=this.materials.orangeMatcapMaterial.clone(),this.materials.carOrangeMatcapMaterial.transparent=!0,this.materials.carOrangeMatcapMaterial.side=zn,this.materials.uniforms={uProgress:{value:0},uElevation:{value:.115}},this.materials.carOrangeMatcapMaterial.onBeforeCompile=e=>{e.uniforms.uProgress=this.materials.uniforms.uProgress,e.uniforms.uElevation=this.materials.uniforms.uElevation,e.vertexShader=e.vertexShader.replace("#include <common>",`
                    #include <common>

                    varying float transformedY;
                `),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
                    #include <begin_vertex>

                    transformedY = transformed.y;
                `),e.fragmentShader=e.fragmentShader.replace("#include <common>",`
                    #include <common>

                    uniform float uProgress;
                    uniform float uElevation;

                    varying float transformedY;
                `),e.fragmentShader=e.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
                    vec4 diffuseColor = vec4( diffuse, opacity );

                    if(transformedY >= uProgress * uElevation)
                    {
                        discard;
                    }
                `)}}setBaked(){this.baked={},this.baked.apply=e=>{e.traverse(t=>{t instanceof Ye&&(t.material=this.baked.material)})},this.baked.texture=this.resources.items.level3BakedTexture,this.baked.texture.flipY=!1,this.baked.texture.encoding=We,this.baked.texture.anisotropy=4,this.baked.model=this.resources.items.level3BakedModel.scene,this.baked.material=new mt({map:this.baked.texture}),this.baked.apply(this.baked.model),this.group.add(this.baked.model)}setBlock(){this.block={},this.block.model=this.resources.items.level3BlockBakedModel.scene,this.block.texture=this.resources.items.level3BlockBakedTexture,this.block.texture.flipY=!1,this.block.texture.encoding=We,this.block.material=new at({vertexShader:vs,fragmentShader:xs,uniforms:{uTexture:{value:this.block.texture},uFade:{value:new le(1,0)}},transparent:!0}),this.block.model.traverse(e=>{e instanceof Ye&&(e.material=this.block.material)}),this.group.add(this.block.model)}setPrinter(){this.printer={},this.printer.progress=0,this.printer.running=!1,this.printer.forward=()=>{this.printer.running=!0,De.fromTo(this.printer,{progress:0},{duration:10,progress:1,ease:"power1.inOut",onComplete:this.printer.end})},this.printer.end=()=>{this.printer.running=!1,this.printer.objects.endTube.position.z=0,De.to(this.printer.objects.z.position,{duration:1,ease:"power2.inOut",x:0}),De.to(this.printer.objects.x.position,{duration:1,ease:"power2.inOut",z:0}),De.to(this.printer.objects.movingTube.position,{duration:1,ease:"power2.inOut",z:0}),this.materials.uniforms.uProgress.value=this.printer.progress,De.to(this.materials.uniforms.uProgress,{duration:1,delay:2,ease:"power2.inOut",value:0}),De.to(this.printer.objects.endTube.scale,{duration:1,delay:2.8,ease:"power2.inOut",y:1}),De.to(this.printer.objects.y.position,{duration:1,delay:2.8,ease:"power2.inOut",y:-.12}),De.delayedCall(4,()=>{this.printer.forward()})},this.printer.objects={},this.printer.objects.base=this.resources.items.level3PrinterModel.scene,this.group.add(this.printer.objects.base);const e=[{name:"base",regex:/^base/},{name:"bars",regex:/^bars/},{name:"verticalSliders",regex:/^verticalSliders/},{name:"tip",regex:/^tip/},{name:"dispenser",regex:/^dispenser/},{name:"bobin",regex:/^bobin/},{name:"movingTube",regex:/^movingTube/},{name:"endTube",regex:/^endTube/},{name:"rolledTube",regex:/^rolledTube/},{name:"tube",regex:/^tube/},{name:"car",regex:/^car/},{name:"y",regex:/^y$/},{name:"x",regex:/^x$/},{name:"z",regex:/^z$/}];this.printer.objects.base.traverse(t=>{for(const n of e)t.name.match(n.regex)&&(this.printer.objects[n.name]=t)}),this.baked.apply(this.printer.objects.base),this.printer.objects.base.material=this.materials.darkGreyOnDarkMatcapMaterial,this.printer.objects.bars.material=this.materials.darkGreyOnWhiteMatcapMaterial,this.printer.objects.verticalSliders.material=this.materials.darkGreyOnDarkMatcapMaterial,this.printer.objects.tip.material=this.materials.darkGreyOnWhiteMatcapMaterial,this.printer.objects.dispenser.material=this.materials.darkGreyOnWhiteMatcapMaterial,this.printer.objects.bobin.material=this.materials.darkGreyOnDarkMatcapMaterial,this.printer.objects.rolledTube.material=this.materials.orangeMatcapMaterial,this.printer.objects.movingTube.material=this.materials.orangeMatcapMaterial,this.printer.objects.tube.material=this.materials.orangeMatcapMaterial,this.printer.objects.endTube.material=this.materials.orangeMatcapMaterial;for(const t of this.printer.objects.car.children)t.material=this.materials.carOrangeMatcapMaterial;this.printer.forward()}setDrone(){this.drone={},this.drone.speed=new L,this.drone.bounding={},this.drone.bounding.min=new L(-.55,-.4,-.7),this.drone.bounding.max=new L(2,2,2),this.drone.center=new L(0,.35,0),this.drone.group=new St,this.drone.group.position.set(-2,5,-2),this.group.add(this.drone.group),this.drone.model=this.resources.items.level3DroneModel.scene.children[0],this.drone.model.position.set(0,0,0),this.baked.apply(this.drone.model),this.drone.group.add(this.drone.model),this.drone.base=this.drone.model.getObjectByName("base"),this.drone.base.material=this.materials.darkGreyOnWhiteMatcapMaterial,this.drone.pivots=this.drone.model.getObjectByName("pivots"),this.drone.pivots.material=this.materials.redMatcapMaterial,this.drone.hull=this.drone.model.getObjectByName("hull"),this.drone.hull.material=this.materials.cyanMatcapMaterial,this.drone.propellers=this.drone.model.children.filter(e=>e.name.match(/^propeller/));for(const e of this.drone.propellers)e.material=this.materials.cyanMatcapMaterial;this.drone.pointer={},this.drone.pointer.oldPosition=new le,this.drone.pointer.position=new le,window.addEventListener("mousemove",e=>{this.drone.pointer.position.x=e.clientX/this.sizes.width,this.drone.pointer.position.y=e.clientY/this.sizes.height})}update(){if(this.printer.running){this.materials.uniforms.uProgress.value=this.printer.progress;const a=Math.sin(this.printer.progress*60*4)*.03,l=-(1-this.printer.progress)*.12,c=Math.sin(this.printer.progress*20*4)*.08;this.printer.objects.z.position.x=c,this.printer.objects.x.position.z=a,this.printer.objects.endTube.position.z=a,this.printer.objects.endTube.scale.y=1-this.printer.progress,this.printer.objects.y.position.y=l,this.printer.objects.movingTube.position.z=a,this.printer.objects.bobin.rotation.x+=this.time.delta*.002}const e=this.drone.pointer.position.clone().sub(this.drone.pointer.oldPosition);e.multiplyScalar(this.time.delta),this.drone.pointer.oldPosition.copy(this.drone.pointer.position),this.drone.speed.multiplyScalar(1-.001*this.time.delta);const t=this.camera.base.position.clone().sub(this.drone.group.position);(Math.abs(t.x)<Math.abs(t.z)?"x":"z")==="x"?this.drone.speed.x+=e.x*.004:this.drone.speed.z-=e.x*.004,this.drone.speed.y-=e.y*.004;const i=this.drone.center.clone().sub(this.drone.model.position).multiplyScalar(1e-4*this.time.delta);this.drone.speed.add(i),this.drone.model.position.add(this.drone.speed),this.drone.model.position.x<this.drone.bounding.min.x&&(this.drone.model.position.x=this.drone.bounding.min.x,this.drone.speed.x*=-.5,this.drone.speed.y*=.5,this.drone.speed.z*=.5),this.drone.model.position.y<this.drone.bounding.min.y&&(this.drone.model.position.y=this.drone.bounding.min.y,this.drone.speed.x*=.5,this.drone.speed.y*=-.5,this.drone.speed.z*=.5),this.drone.model.position.z<this.drone.bounding.min.z&&(this.drone.model.position.z=this.drone.bounding.min.z,this.drone.speed.x*=.5,this.drone.speed.y*=.5,this.drone.speed.z*=-.5),this.drone.model.position.x>this.drone.bounding.max.x&&(this.drone.model.position.x=this.drone.bounding.max.x,this.drone.speed.x*=-.5,this.drone.speed.y*=.5,this.drone.speed.z*=.5),this.drone.model.position.y>this.drone.bounding.max.y&&(this.drone.model.position.y=this.drone.bounding.max.y,this.drone.speed.x*=.5,this.drone.speed.y*=-.5,this.drone.speed.z*=.5),this.drone.model.position.z>this.drone.bounding.max.z&&(this.drone.model.position.z=this.drone.bounding.max.z,this.drone.speed.x*=.5,this.drone.speed.y*=.5,this.drone.speed.z*=-.5);const r=Math.PI*.5+this.drone.speed.z*20,s=-this.drone.speed.x*20;this.drone.model.rotation.x+=(r-this.drone.model.rotation.x)*this.time.delta*.02,this.drone.model.rotation.y+=(s-this.drone.model.rotation.y)*this.time.delta*.02;for(const a of this.drone.propellers)a.rotation.y+=this.time.delta*.03}destroy(){}}var $y=`uniform sampler2D uTexture;
uniform float uProgress;

varying vec2 vUv;

void main()
{
    vec3 textureColor = texture2D(uTexture, vUv).rgb;

    float strength = mod(vUv.y * 100.0 + uProgress, 1.0);

    strength *= 0.15;

    textureColor -= strength;

    gl_FragColor = vec4(textureColor, 1.0);
}`,Ky=`varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`;function Jy(o={}){const e={uTexture:{value:null},uProgress:{value:null}},t={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},n={};return new at({wireframe:!1,transparent:!1,depthTest:!0,depthWrite:!0,lights:!1,uniforms:e,extensions:t,defines:n,vertexShader:Ky,fragmentShader:$y})}var Qy=`uniform sampler2D uTexture;

varying vec2 vUv;
varying float vFogStrength;

void main()
{

    vec3 textureColor = texture2D(uTexture, vUv).rgb;


    vec3 color = mix(textureColor, vec3(0.0), vFogStrength);


    gl_FragColor = vec4(color, 1.0);

	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eb=`uniform float uFog;

varying vec2 vUv;
varying float vFogStrength;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;


    vec3 uFogBounding = vec3(3.0, - 5.8, 5.0);
    float uFogLength = 0.1;

    vec3 fogStrengths = modelPosition.xyz + uFogBounding;
    fogStrengths /= uFogLength;

    float fogStrength = min(min(fogStrengths.x, fogStrengths.y), fogStrengths.z);
    fogStrength = 1.0 - clamp(fogStrength, 0.0, 1.0);
    fogStrength *= uFog;
    vFogStrength = fogStrength;


    vUv = uv;
}`;function tb(o={}){const e={uTexture:{value:null},uFog:{value:0}},t={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},n={};return new at({wireframe:!1,transparent:!1,depthTest:!0,depthWrite:!0,lights:!1,uniforms:e,extensions:t,defines:n,vertexShader:eb,fragmentShader:Qy})}var nb=`#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;
varying vec4 vEmissiveColor;

#ifndef FLAT_SHADED

    varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>

#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

    #include <clipping_planes_fragment>

    vec4 diffuseColor = vec4( diffuse, opacity );

    #include <logdepthbuf_fragment>
    #include <map_fragment>
    #include <color_fragment>
    #include <alphamap_fragment>
    #include <alphatest_fragment>
    #include <normal_fragment_begin>
    #include <normal_fragment_maps>

    vec3 viewDir = normalize( vViewPosition );
    vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
    vec3 y = cross( viewDir, x );
    vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;

    #ifdef USE_MATCAP

        vec4 matcapColor = texture2D( matcap, uv );


    #else

        vec4 matcapColor = vec4( 1.0 );

    #endif

    vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

    outgoingLight = mix(outgoingLight, vEmissiveColor.rgb, vEmissiveColor.a);

    gl_FragColor = vec4( outgoingLight, diffuseColor.a );

    #include <tonemapping_fragment>
    #include <encodings_fragment>
    #include <fog_fragment>
    #include <premultiplied_alpha_fragment>
    #include <dithering_fragment>

}`,ib=`#define MATCAP

varying vec3 vViewPosition;
varying vec4 vEmissiveColor;

#ifndef FLAT_SHADED

    varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform vec3 uMin;
uniform vec3 uMax;

void main() {

    #include <uv_vertex>
    #include <color_vertex>
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <defaultnormal_vertex>

    #ifndef FLAT_SHADED

        vNormal = normalize( transformedNormal );

    #endif

    #include <begin_vertex>
    #include <morphtarget_vertex>
    #include <skinning_vertex>
    #include <displacementmap_vertex>

    vec4 mPosition = vec4( transformed, 1.0 );
    mPosition = modelMatrix * mPosition;

    mPosition.xyz = min(uMax, mPosition.xyz);
    mPosition.xyz = max(uMin, mPosition.xyz);


    vec4 emissiveColor = vec4(0.0);


    vec3 vertexLightPosition = vec3(- 1.25, 6.4, - 3.93);
    vec3 vertexLightColor = vec3(1.0, 0.96, 0.094);
    float vertexLightStrength = (distance(mPosition.xyz, vertexLightPosition) - 0.25) * 20.0;
    vertexLightStrength = 1.0 - clamp(vertexLightStrength, 0.0, 1.0);
    emissiveColor.rgb = vertexLightColor.rgb;
    emissiveColor.a = vertexLightStrength;


    vec3 fragmentLightPosition = vec3(- 1.84, 6.4, - 4.51);
    vec3 fragmentLightColor = vec3(8.0 / 255.0, 249.0 / 255.0, 250.0 / 255.0);
    float fragmentLightStrength = (distance(mPosition.xyz, fragmentLightPosition) - 0.25) * 20.0;
    fragmentLightStrength = 1.0 - clamp(fragmentLightStrength, 0.0, 1.0);
    emissiveColor.rgb = mix(emissiveColor.rgb, fragmentLightColor, fragmentLightStrength);
    emissiveColor.a = max(emissiveColor.a, fragmentLightStrength);

    vec4 mvPosition = vec4( transformed, 1.0 );
    mvPosition = viewMatrix * mPosition;
    gl_Position = projectionMatrix * mvPosition;

    #include <logdepthbuf_vertex>
    #include <clipping_planes_vertex>
    #include <fog_vertex>


    vViewPosition = - mvPosition.xyz;
    vEmissiveColor = emissiveColor;
}`;function an(){const o=yl.merge([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null},uMin:{value:new L(-100,-100,-100)},uMax:{value:new L(100,100,100)}}]),e={derivatives:!0,fragDepth:!0,drawBuffers:!0,shaderTextureLOD:!0},t={USE_MATCAP:""};return new at({wireframe:!1,transparent:!1,depthTest:!0,depthWrite:!0,lights:!1,uniforms:o,extensions:e,defines:t,vertexShader:ib,fragmentShader:nb})}var rb=`#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
uniform sampler2D matcap2;
uniform int uPatternIndex;

varying vec3 vViewPosition;
varying vec4 vEmissiveColor;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>

#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

vec2 fade(vec2 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0);
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0;
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;

	#ifdef USE_MATCAP

		vec4 matcap1Color = texture2D( matcap, uv );


		vec4 matcap2Color = texture2D( matcap2, uv );


		float strength = 0.0;

		if(uPatternIndex == 0)
		{
			strength = mod(vUv.x * 10.0, 1.0);
			strength = step(strength, 0.5);
		}
		else if(uPatternIndex == 1)
		{
			strength = cnoise(vUv * 8.0);
			strength = step(strength, 0.0);
		}
		else if(uPatternIndex == 2)
		{
			strength = sin(length(vUv - 0.5) * 70.0);
			strength = step(strength, 0.0);
		}
		else if(uPatternIndex == 3)
		{
			strength = step(mod(vUv.x * 5.0 + floor(vUv.y * 10.0) / 2.0, 1.0), 0.5);
		}
		else if(uPatternIndex == 4)
		{
			vec2 newUv = vec2(
				vUv.x,
				vUv.y + sin(vUv.x * 20.0) * 0.04
			);
			strength = mod(newUv.y * 6.0, 1.0);
			strength = step(strength, 0.5);
		}

		vec4 matcapColor = mix(matcap1Color, matcap2Color, strength);

	#else

		vec4 matcapColor = vec4( 1.0 );

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

    outgoingLight = mix(outgoingLight, vEmissiveColor.rgb, vEmissiveColor.a);

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );


	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}`,sb=`#define MATCAP

varying vec3 vViewPosition;
varying vec4 vEmissiveColor;

#ifndef FLAT_SHADED

    varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

    #include <uv_vertex>
    #include <color_vertex>
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <defaultnormal_vertex>

    #ifndef FLAT_SHADED

        vNormal = normalize( transformedNormal );

    #endif

    #include <begin_vertex>
    #include <morphtarget_vertex>
    #include <skinning_vertex>
    #include <displacementmap_vertex>

    vec4 mPosition = vec4( transformed, 1.0 );
    mPosition = modelMatrix * mPosition;


    vec4 emissiveColor = vec4(0.0);


    vec3 uFogBounding = vec3(3.0, - 5.8, 5.0);
    float uFogLength = 0.1;

    vec3 fogStrengths = mPosition.xyz + uFogBounding;
    fogStrengths /= uFogLength;

    float fogStrength = min(min(fogStrengths.x, fogStrengths.y), fogStrengths.z);
    fogStrength = 1.0 - clamp(fogStrength, 0.0, 1.0);
    emissiveColor.a = fogStrength;


    vec3 vertexLightPosition = vec3(- 1.25, 6.4, - 3.93);
    vec3 vertexLightColor = vec3(1.0, 0.96, 0.094);
    float vertexLightStrength = (distance(mPosition.xyz, vertexLightPosition) - 0.22) * 20.0;
    vertexLightStrength = 1.0 - clamp(vertexLightStrength, 0.0, 1.0);
    emissiveColor.rgb = mix(emissiveColor.rgb, vertexLightColor, step(0.01, vertexLightStrength));
    emissiveColor.a = max(emissiveColor.a, vertexLightStrength);


    vEmissiveColor = emissiveColor;

    vec4 mvPosition = vec4( transformed, 1.0 );
    mvPosition = viewMatrix * mPosition;
    gl_Position = projectionMatrix * mvPosition;

    #include <logdepthbuf_vertex>
    #include <clipping_planes_vertex>
    #include <fog_vertex>

    vViewPosition = - mvPosition.xyz;
}`;function ob(){const o=yl.merge([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null},matcap2:{value:null},uPatternIndex:{value:null}}]),e={derivatives:!0,fragDepth:!0,drawBuffers:!0,shaderTextureLOD:!0},t={USE_MATCAP:"",USE_UV:""};return new at({wireframe:!1,transparent:!1,depthTest:!0,depthWrite:!0,lights:!1,uniforms:o,extensions:e,defines:t,vertexShader:sb,fragmentShader:rb})}var ab=`uniform float uAlpha;
varying vec2 vUv;

void main()
{
    float pointLight = 0.05 / length(vUv - 0.5);
    float diffuse = 1.0 - length(vUv - 0.5) * 2.0;
    gl_FragColor = vec4(1.0, 1.0, 1.0, clamp(pointLight * diffuse * uAlpha, 0.0, 1.0));
}`,lb=`varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`;function cb(o={}){const e={uAlpha:{value:0}},t={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},n={};return new at({wireframe:!1,transparent:!0,depthTest:!0,depthWrite:!0,lights:!1,blending:ii,uniforms:e,extensions:t,defines:n,vertexShader:lb,fragmentShader:ab})}function ub(o){for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o}class hb{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.debug=this.experience.debug,this.colors=this.experience.colors,this.resources=this.experience.resources,this.sizes=this.experience.sizes,this.time=this.experience.time,this.scene=this.experience.scene,this.camera=this.experience.camera,this.index=e.index,this.debug&&this.debug.Register({type:"folder",label:"Level 4",open:!1}),this.offset=new L(-2,6,-4),this.baseY=-this.offset.y-2,this.intersect=this.resources.items.level4IntersectModel.scene.children[0],this.intersect.visible=!1,this.scene.add(this.intersect),this.group=new St,this.group.position.y=this.baseY,this.scene.add(this.group),this.setMaterials(),this.setBaked(),this.setCarpets(),this.setBox(),this.setPrimitives(),this.setElevator(),this.setPostVertex(),this.setPostFragment(),this.setFlash(),this.setAnimation(),this.setBlock()}show(){const e=Math.abs(this.baseY)*.5;window.requestAnimationFrame(()=>{De.to(this.group.position,{duration:e,ease:"power4.out",y:0,onComplete:()=>{De.to(this.materials.bakedFog.uniforms.uFog,{duration:1,value:1})}})})}setMaterials(){this.materials={},this.materials.bakedTexture=this.resources.items.level4BakedTexture,this.materials.bakedTexture.flipY=!1,this.materials.bakedTexture.encoding=We,this.materials.bakedTexture.anisotropy=4,this.materials.baked=new mt({map:this.materials.bakedTexture}),this.materials.bakedFog=new tb,this.materials.bakedFog.uniforms.uTexture.value=this.materials.bakedTexture,this.materials.primitivesInBoxOrange=new an,this.materials.primitivesInBoxOrange.uniforms.matcap.value=this.resources.items.matcapOrangeOnDarkGreyTexture,this.materials.primitivesInBoxPink=new an,this.materials.primitivesInBoxPink.uniforms.matcap.value=this.resources.items.matcapPinkOnPurpleTexture,this.materials.primitivesInBoxCyan=new an,this.materials.primitivesInBoxCyan.uniforms.matcap.value=this.resources.items.matcapGreenOnPurpleTexture,this.materials.primitivesInBoxYellow=new an,this.materials.primitivesInBoxYellow.uniforms.matcap.value=this.resources.items.matcapRedOnPurpleTexture,this.materials.primitivesInSlideOrange=new an,this.materials.primitivesInSlideOrange.uniforms.matcap.value=this.resources.items.matcapOrangeOnDarkGreyTexture,this.materials.primitivesInSlidePink=new an,this.materials.primitivesInSlidePink.uniforms.matcap.value=this.resources.items.matcapPinkOnPurpleTexture,this.materials.primitivesInSlideCyan=new an,this.materials.primitivesInSlideCyan.uniforms.matcap.value=this.resources.items.matcapGreenOnPurpleTexture,this.materials.primitivesInSlideYellow=new an,this.materials.primitivesInSlideYellow.uniforms.matcap.value=this.resources.items.matcapRedOnPurpleTexture,this.materials.primitivesOrange=new an,this.materials.primitivesOrange.uniforms.matcap.value=this.resources.items.matcapOrangeOnDarkGreyTexture,this.materials.primitivesPink=new an,this.materials.primitivesPink.uniforms.matcap.value=this.resources.items.matcapPinkOnPurpleTexture,this.materials.primitivesCyan=new an,this.materials.primitivesCyan.uniforms.matcap.value=this.resources.items.matcapGreenOnPurpleTexture,this.materials.primitivesYellow=new an,this.materials.primitivesYellow.uniforms.matcap.value=this.resources.items.matcapRedOnPurpleTexture,this.materials.doubleMatcap=new ob,this.materials.doubleMatcap.uniforms.matcap.value=this.resources.items.matcapOrangeOnDarkGreyTexture,this.materials.doubleMatcap.uniforms.matcap2.value=this.resources.items.matcapGreenOnPurpleTexture,this.materials.doubleMatcap.uniforms.uPatternIndex.value=0}setBaked(){this.baked={},this.baked.apply=e=>{e.traverse(t=>{t instanceof Ye&&(t.material=this.materials.bakedFog)})},this.baked.model=this.resources.items.level4BakedModel.scene,this.baked.apply(this.baked.model),this.group.add(this.baked.model),this.baked.outerWalls=this.resources.items.level4OuterWallsModel.scene.children[0];for(const e of this.baked.outerWalls.children)e.material=this.materials.baked;this.group.add(this.baked.outerWalls)}setCarpets(){this.carpets={},this.carpets.frequency=-.006,this.carpets.running=!1,this.carpets.all=[],this.baked.model.traverse(e=>{e instanceof Ye&&e.name.match(/^carpet/)&&this.carpets.all.push(e)}),this.carpets.items={};for(const e of this.carpets.all){const t=e.name.match(/^carpet([A-Z])/)[1].toLowerCase();this.carpets.items[t]=e}this.carpets.material=new Jy,this.carpets.material.uniforms.uTexture.value=this.materials.bakedTexture,this.carpets.material.uniforms.uProgress.value=0;for(const e of this.carpets.all)e.material=this.carpets.material}setBox(){this.box={},this.box.group=new St,this.box.model=this.resources.items.level4BoxModel.scene.children[0],this.baked.apply(this.box.model),this.group.add(this.box.model),this.box.basePosition=this.box.model.position.clone(),this.box.basePosition.y-=.52,this.box.wallPosition=this.box.basePosition.clone(),this.box.wallPosition.x-=.8,this.box.downPosition=this.box.basePosition.clone(),this.box.downPosition.y-=.63,this.box.vertexPosition=this.box.downPosition.clone(),this.box.vertexPosition.x+=.6,this.box.model.position.copy(this.box.wallPosition)}setPrimitives(){this.primitives={},this.primitives.applyMaterials=(e,t)=>{for(const n of e.children)n.name.match(/^cone/)?n.material=this.materials[`primitives${t}Yellow`]:n.name.match(/^cube/)?n.material=this.materials[`primitives${t}Pink`]:n.name.match(/^cylinder/)?n.material=this.materials[`primitives${t}Cyan`]:n.name.match(/^sphere/)&&(n.material=this.materials[`primitives${t}Orange`]),n.position.set(0,0,0)},this.primitives.inBox={},this.primitives.inBox.model=this.resources.items.level4PrimitivesInBoxModel.scene,this.primitives.inBox.min=new L(-3,7,-5),this.primitives.inBox.max=new L(-2,7.7,-4.4),this.materials.primitivesInBoxOrange.uniforms.uMin.value=this.primitives.inBox.min,this.materials.primitivesInBoxPink.uniforms.uMin.value=this.primitives.inBox.min,this.materials.primitivesInBoxCyan.uniforms.uMin.value=this.primitives.inBox.min,this.materials.primitivesInBoxYellow.uniforms.uMin.value=this.primitives.inBox.min,this.materials.primitivesInBoxOrange.uniforms.uMax.value=this.primitives.inBox.max,this.materials.primitivesInBoxPink.uniforms.uMax.value=this.primitives.inBox.max,this.materials.primitivesInBoxCyan.uniforms.uMax.value=this.primitives.inBox.max,this.materials.primitivesInBoxYellow.uniforms.uMax.value=this.primitives.inBox.max,this.primitives.applyMaterials(this.primitives.inBox.model,"InBox"),this.box.model.add(this.primitives.inBox.model),this.primitives.inSlide={},this.primitives.inSlide.model=this.resources.items.level4PrimitivesInSlideModel.scene,this.primitives.inSlide.min=new L(-3,7,-5),this.primitives.inSlide.max=new L(-2,7.7,-4.4),this.materials.primitivesInSlideOrange.uniforms.uMin.value=this.primitives.inSlide.min,this.materials.primitivesInSlidePink.uniforms.uMin.value=this.primitives.inSlide.min,this.materials.primitivesInSlideCyan.uniforms.uMin.value=this.primitives.inSlide.min,this.materials.primitivesInSlideYellow.uniforms.uMin.value=this.primitives.inSlide.min,this.materials.primitivesInSlideOrange.uniforms.uMax.value=this.primitives.inSlide.max,this.materials.primitivesInSlidePink.uniforms.uMax.value=this.primitives.inSlide.max,this.materials.primitivesInSlideCyan.uniforms.uMax.value=this.primitives.inSlide.max,this.materials.primitivesInSlideYellow.uniforms.uMax.value=this.primitives.inSlide.max,this.primitives.applyMaterials(this.primitives.inSlide.model,"InSlide"),this.box.model.add(this.primitives.inSlide.model),this.primitives.cube=this.resources.items.level4PrimitivesCubeModel.scene,this.primitives.cylinder=this.resources.items.level4PrimitivesCylinderModel.scene,this.primitives.sphere=this.resources.items.level4PrimitivesSphereModel.scene,this.primitives.applyMaterials(this.primitives.cube,""),this.primitives.applyMaterials(this.primitives.cylinder,""),this.primitives.applyMaterials(this.primitives.sphere,"")}setElevator(){this.elevator={},this.elevator.model=this.resources.items.level4ElevatorModel.scene.children[0],this.baked.apply(this.elevator.model),this.group.add(this.elevator.model),this.elevator.basePosition=this.elevator.model.position.clone(),this.elevator.downPosition=this.elevator.model.position.clone(),this.elevator.downPosition.y-=.63}setPostVertex(){this.postVertex={},this.postVertex.container=new St,this.group.add(this.postVertex.container),this.postVertex.shadow=new Ye(new On(.3,.3,1,1),new mt({color:3347968,transparent:!0,alphaMap:this.resources.items.level4ShadowTexture,opacity:.35})),this.postVertex.shadow.position.z=-.25,this.postVertex.shadow.rotation.x=-Math.PI*.5,this.postVertex.container.add(this.postVertex.shadow),this.postVertex.vertexPosition=new L(-1.8,6.36,-4.26),this.postVertex.betweenPosition=new L(-1.5,6.36,-4.26),this.postVertex.fragmentPosition=new L(-1.5,6.36,-3.96),this.postVertex.container.position.copy(this.postVertex.betweenPosition),this.primitives.cube.position.z=-.25,this.primitives.cylinder.position.z=-.25,this.primitives.sphere.position.z=-.25}setPostFragment(){this.postFragment={},this.postFragment.container=new St,this.group.add(this.postFragment.container),this.postFragment.shadow=new Ye(new On(.3,.3,1,1),new mt({color:3347968,transparent:!0,alphaMap:this.resources.items.level4ShadowTexture,opacity:.35})),this.postFragment.shadow.position.x=.26,this.postFragment.shadow.rotation.x=-Math.PI*.5,this.postFragment.container.add(this.postFragment.shadow),this.postFragment.fragmentPosition=new L(-1.5,6.36,-3.9),this.postFragment.betweenPosition=new L(-1.5,6.36,-3.64),this.postFragment.renderPosition=new L(-1.9,6.36,-3.64),this.postFragment.wallPosition=new L(-3.1,6.36,-3.64),this.postFragment.container.position.copy(this.postFragment.fragmentPosition),this.postFragment.shapes={},this.postFragment.shapes.sphere=new Ye(new Fl(.09,32,32),this.materials.doubleMatcap),this.postFragment.shapes.cube=new Ye(new Sr(.16,.16,.16,4,4,4),this.materials.doubleMatcap),this.postFragment.shapes.cylinder=new Ye(new Fo(.09,.09,.16,20,3),this.materials.doubleMatcap),this.postFragment.shapes.sphere.position.x=.26,this.postFragment.shapes.cube.position.x=.26,this.postFragment.shapes.cylinder.position.x=.26,this.postFragment.shapes.sphere.position.y=.09,this.postFragment.shapes.cube.position.y=.08,this.postFragment.shapes.cylinder.position.y=.08,this.postFragment.shapes.cylinder.rotation.y=-Math.PI*.25,this.postFragment.setRandomMatcaps=()=>{const e=ub([this.resources.items.matcapOrangeOnDarkGreyTexture,this.resources.items.matcapPinkOnPurpleTexture,this.resources.items.matcapGreenOnPurpleTexture,this.resources.items.matcapRedOnPurpleTexture]);this.materials.doubleMatcap.uniforms.matcap.value=e.pop(),this.materials.doubleMatcap.uniforms.matcap2.value=e.pop()}}setFlash(){this.flash={},this.flash.geometry=new On(1,1,2,2),this.flash.material=new cb,this.flash.mesh=new Ye(this.flash.geometry,this.flash.material),this.flash.mesh.position.set(-2.05,6.57,-3.545),this.group.add(this.flash.mesh)}setAnimation(){this.animation={},this.animation.count=0,this.animation.queue={},this.animation.queue.choices=["cube","sphere","cylinder"],this.animation.queue.items=["cylinder","sphere"],this.animation.queue.i=2,this.animation.queue.next=()=>{this.animation.queue.i++,this.animation.queue.items.pop(),this.animation.queue.items.unshift(this.animation.queue.choices[this.animation.queue.i%3])},this.animation.next=()=>{this.animation.count++;const e=!!(this.animation.count%2);this.carpets.running=!0,De.delayedCall(3,()=>{this.carpets.running=!1}),e?(De.fromTo(this.box.model.position,{...this.box.wallPosition},{duration:1.5,delay:1.5,...this.box.basePosition,ease:"linear",onComplete:()=>{De.fromTo(this.box.model.position,{...this.box.basePosition},{duration:1.5,delay:1.5,...this.box.downPosition,ease:"power2.inOut"})}}),De.fromTo(this.primitives.inBox.model.position,{y:-.15},{duration:1.25,delay:3.5,y:0,ease:"power3.out"}),this.primitives.inBox.min.y=7,De.delayedCall(4.5,()=>{this.primitives.inBox.min.y=6}),De.fromTo(this.primitives.inSlide.model.position,{y:0,z:0},{duration:1.5,delay:3,y:-1.6,z:1.6,ease:"linear"}),De.fromTo(this.elevator.model.position,{...this.elevator.basePosition},{duration:1.5,delay:4.5,...this.elevator.downPosition,ease:"power2.inOut"}),this.postVertex.container.children.length==2&&this.postVertex.container.remove(this.postVertex.container.children[1]),this.postVertex.container.add(this.primitives[this.animation.queue.items[0]]),this.postVertex.container.rotation.y=0,De.fromTo(this.postVertex.container.position,{...this.postVertex.vertexPosition},{duration:1,...this.postVertex.betweenPosition,ease:"linear"}),De.fromTo(this.postVertex.container.rotation,{y:0},{duration:1,delay:1,y:-Math.PI*.5,ease:"linear"}),De.fromTo(this.postVertex.container.position,{...this.postVertex.betweenPosition},{duration:1,delay:2,...this.postVertex.fragmentPosition,ease:"linear"}),De.fromTo(this.postFragment.container.position,{...this.postFragment.renderPosition},{duration:3,...this.postFragment.wallPosition,ease:"linear"})):(this.animation.queue.next(),De.fromTo(this.box.model.position,{...this.box.downPosition},{duration:1.5,...this.box.vertexPosition,ease:"linear"}),De.fromTo(this.elevator.model.position,{...this.elevator.downPosition},{duration:1.5,delay:3,...this.elevator.basePosition,ease:"power2.inOut"}),this.postFragment.container.children.length===2&&this.postFragment.container.remove(this.postFragment.container.children[1]),this.postFragment.container.add(this.postFragment.shapes[this.animation.queue.items[1]]),this.materials.doubleMatcap.uniforms.uPatternIndex.value=Math.floor(Math.random()*5),this.postFragment.setRandomMatcaps(),this.postFragment.container.rotation.y=0,De.fromTo(this.postFragment.container.position,{...this.postFragment.fragmentPosition},{duration:1,...this.postFragment.betweenPosition,ease:"linear"}),De.fromTo(this.postFragment.container.rotation,{y:0},{duration:1,delay:1,y:-Math.PI*.5,ease:"linear"}),De.fromTo(this.postFragment.container.position,{...this.postFragment.betweenPosition},{duration:1,delay:2,...this.postFragment.renderPosition,ease:"linear"}),De.delayedCall(4,()=>{De.fromTo(this.flash.material.uniforms.uAlpha,{value:1},{duration:.1,value:0})})),De.delayedCall(6,this.animation.next)},this.animation.next()}setBlock(){this.block={},this.block.model=this.resources.items.level4BlockBakedModel.scene,this.block.texture=this.resources.items.level4BlockBakedTexture,this.block.texture.flipY=!1,this.block.texture.encoding=We,this.block.material=new at({vertexShader:vs,fragmentShader:xs,uniforms:{uTexture:{value:this.block.texture},uFade:{value:new le(3,1)}},transparent:!0}),this.block.model.traverse(e=>{e instanceof Ye&&(e.material=this.block.material)}),this.group.add(this.block.model)}update(){this.carpets.running&&(this.carpets.material.uniforms.uProgress.value+=this.time.delta*this.carpets.frequency)}destroy(){}}var db=`uniform float uTime;
uniform vec3 uColor;
uniform vec2 uGridOffset;

varying vec2 vUv;

#define uGrid1Frequency 10.0
#define uGrid1Thickness 0.94
#define uGrid1Strength 5.0

#define uGrid2Frequency 50.0
#define uGrid2Thickness 0.9
#define uGrid2Strength 0.5

#define uBorderThickness 0.015
#define uBorderStrength 2.0

#define uHalosTimeFrequency 0.0002
#define uHalosFrequency 10.0
#define uHalosStrength 0.33

void main()
{

    vec2 gridUv = vUv + uGridOffset;
    float grid1 = max(step(uGrid1Thickness, mod(0.5 + gridUv.x * uGrid1Frequency, 1.0)), step(uGrid1Thickness, mod(0.5 + gridUv.y * uGrid1Frequency, 1.0)));
    grid1 *= uGrid1Strength;

    float grid2 = max(step(uGrid2Thickness, mod(0.5 + gridUv.x * uGrid2Frequency, 1.0)), step(uGrid2Thickness, mod(0.5 + gridUv.y * uGrid2Frequency, 1.0)));
    grid2 *= uGrid2Strength;


    float border = 1.0 - step(length(vUv - 0.5), 0.5 - uBorderThickness);
    border *= uBorderStrength;


    float alpha = step(length(vUv - 0.5), 0.5);


    float halos = mod(length(vUv - 0.5) * uHalosFrequency - uTime * uHalosTimeFrequency, 1.0);
    halos *= uHalosStrength;


    float strength = grid1 + grid2 + border + halos;
    strength *= alpha;


    vec3 color = uColor * max(strength, 1.0);
    gl_FragColor = vec4(color, strength);
}`,fb=`varying vec2 vUv;

#include <common>

void main()
{
    vec3 newPosition = position;


    newPosition.z -= cos(length(uv - 0.5) * PI2) * 0.05;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);


    vUv = uv;
}`;function pb(){const o={uTime:{value:null},uColor:{value:null},uGridOffset:{value:null}},e={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},t={};return new at({wireframe:!1,transparent:!0,depthTest:!0,depthWrite:!1,lights:!1,uniforms:o,extensions:e,defines:t,vertexShader:fb,fragmentShader:db})}var mb=`uniform float uTime;
uniform vec3 uColor;

varying float vFresnel;
varying float vElevation;

#define uFresnelStrength 0.5

#define uHalosTimeFrequency 0.0002
#define uHalosFrequency 10.0
#define uHalosStrength 0.33

void main()
{

    float fresnel = vFresnel * uFresnelStrength;


    float halos = mod(vElevation * uHalosFrequency - uTime * uHalosTimeFrequency, 1.0);
    halos = pow(halos, 5.0);
    halos *= uHalosStrength;


    float strength = halos + fresnel;


    vec3 color = uColor * max(strength, 1.0);
    gl_FragColor = vec4(color, strength);
}`,gb=`#include <common>

varying float vFresnel;
varying float vElevation;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec3 viewDirection = normalize(modelPosition.xyz - cameraPosition);
    vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);






    float fresnel = max(0.0, dot(normalize(vec3(- 0.2, 0.5, - 0.5)), worldNormal));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);


    vFresnel = fresnel;
    vElevation = modelPosition.y;
}`;function vb(){const o={uTime:{value:null},uColor:{value:null}},e={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},t={};return new at({wireframe:!1,transparent:!0,depthTest:!0,depthWrite:!1,lights:!1,side:zn,uniforms:o,extensions:e,defines:t,vertexShader:gb,fragmentShader:mb})}var xb=`uniform sampler2D uTexture;
uniform sampler2D uScreensTexture;
uniform float uOffset1;
uniform float uOffset2;
uniform float uOffset3;

varying vec2 vUv;

void main()
{
    vec3 textureColor = texture2D(uTexture, vUv).rgb;

    vec2 screensUv = vec2(
        vUv.x * 3.0 / 4.0,
        vUv.y * 0.5
    );

    float screen1Mask = 1.0 - step(1.0 / 3.0, vUv.x);
    float screen2Mask = 1.0 - step(1.0 / 3.0, vUv.x - 1.0 / 3.0) - screen1Mask;
    float screen3Mask = step(1.0 / 3.0, vUv.x - 1.0 / 3.0);

    screensUv.y += uOffset1 * screen1Mask;
    screensUv.y -= uOffset2 * screen2Mask;
    screensUv.y += uOffset3 * screen3Mask;

    vec4 screenColor = texture2D(uScreensTexture, screensUv).rgba;
    textureColor = mix(textureColor, screenColor.rgb, screenColor.a);

    gl_FragColor = vec4(textureColor, 1.0);


	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yb=`varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`;function bb(o={}){const e={uTexture:{value:null},uScreensTexture:{value:null},uOffset1:{value:null},uOffset2:{value:null},uOffset3:{value:null}},t={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},n={};return new at({wireframe:!1,transparent:!1,depthTest:!0,depthWrite:!0,lights:!1,uniforms:e,extensions:t,defines:n,vertexShader:yb,fragmentShader:xb})}class _b{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.debug=this.experience.debug,this.colors=this.experience.colors,this.resources=this.experience.resources,this.sizes=this.experience.sizes,this.time=this.experience.time,this.scene=this.experience.scene,this.camera=this.experience.camera,this.index=e.index,this.debug&&this.debug.Register({type:"folder",label:"Level 5",open:!0}),this.offset=new L(-4,8,-4),this.baseY=-this.offset.y-2,this.intersect=this.resources.items.level5IntersectModel.scene.children[0],this.intersect.visible=!1,this.scene.add(this.intersect),this.group=new St,this.group.position.y=this.baseY,this.scene.add(this.group),this.setBaked(),this.setScreens(),this.setEmissives(),this.setHologram(),this.setBlock()}show(){const e=Math.abs(this.baseY)*.5;window.requestAnimationFrame(()=>{De.to(this.group.position,{duration:e,ease:"power4.out",y:0})})}setBaked(){this.baked={},this.baked.apply=e=>{e.traverse(t=>{t instanceof Ye&&(t.material=this.baked.material)})},this.baked.texture=this.resources.items.level5BakedTexture,this.baked.texture.flipY=!1,this.baked.texture.encoding=We,this.baked.texture.anisotropy=4,this.baked.model=this.resources.items.level5BakedModel.scene,this.baked.material=new mt({map:this.baked.texture}),this.baked.apply(this.baked.model),this.group.add(this.baked.model)}setScreens(){this.screens={},this.screens.model=this.resources.items.level5ScreensBakedModel.scene,this.screens.bakedTexture=this.resources.items.level5ScreensBakedTexture,this.screens.bakedTexture.flipY=!1,this.screens.bakedTexture.encoding=We,this.resources.items.level5ScreensInterfaceTexture.magFilter=Pt,this.resources.items.level5ScreensInterfaceTexture.minFilter=Rt,this.resources.items.level5ScreensInterfaceTexture.flipY=!1,this.resources.items.level5ScreensInterfaceTexture.wrapS=li,this.resources.items.level5ScreensInterfaceTexture.wrapT=li,this.screens.material=new bb,this.screens.material.uniforms.uTexture.value=this.screens.bakedTexture,this.screens.material.uniforms.uScreensTexture.value=this.resources.items.level5ScreensInterfaceTexture,this.screens.material.uniforms.uOffset1.value=0,this.screens.model.traverse(e=>{e instanceof Ye&&(e.material=this.screens.material)}),this.group.add(this.screens.model),this.screens.animateOffset1=()=>{const e=Math.random();De.to(this.screens.material.uniforms.uOffset1,{duration:e*2,delay:Math.random()*2,value:this.screens.material.uniforms.uOffset1.value+e,onComplete:this.screens.animateOffset1})},this.screens.animateOffset2=()=>{const e=Math.random();De.to(this.screens.material.uniforms.uOffset2,{duration:e*2,delay:Math.random()*2,value:this.screens.material.uniforms.uOffset2.value+e,onComplete:this.screens.animateOffset2})},this.screens.animateOffset3=()=>{const e=Math.random();De.to(this.screens.material.uniforms.uOffset3,{duration:e*2,delay:Math.random()*2,value:this.screens.material.uniforms.uOffset3.value+e,onComplete:this.screens.animateOffset3})},this.screens.animateOffset1(),this.screens.animateOffset2(),this.screens.animateOffset3()}setEmissives(){this.emissives={},this.emissives.model=this.resources.items.level5EmissivesModel.scene,this.emissives.materials={},this.emissives.materials.black=new mt({color:0}),this.emissives.materials.blue=new mt({color:59624}),this.emissives.materials.yellow=new mt({color:16114333}),this.emissives.model.traverse(e=>{e instanceof Ye&&(e.name.match(/^black/)?e.material=this.emissives.materials.black:e.name.match(/^blue/)?e.material=this.emissives.materials.blue:e.name.match(/^yellow/)&&(e.material=this.emissives.materials.yellow))}),this.group.add(this.emissives.model)}setHologram(){this.hologram={},this.hologram.color={},this.hologram.color.string="#11ffef",this.hologram.color.instance=new Le(this.hologram.color.string),this.hologram.floor={},this.hologram.floor.geometry=new On(1.05,1.05,20,20),this.hologram.floor.material=new pb,this.hologram.floor.material.uniforms.uTime.value=0,this.hologram.floor.material.uniforms.uColor.value=this.hologram.color.instance,this.hologram.floor.material.uniforms.uGridOffset.value=new le,this.hologram.floor.mesh=new Ye(this.hologram.floor.geometry,this.hologram.floor.material),this.hologram.floor.mesh.position.copy(this.offset),this.hologram.floor.mesh.position.z+=.005,this.hologram.floor.mesh.position.y-=.075,this.hologram.floor.mesh.rotation.x=-Math.PI*.5,this.group.add(this.hologram.floor.mesh),this.hologram.floor.updateGridOffsetX=()=>{De.to(this.hologram.floor.material.uniforms.uGridOffset.value,{x:(Math.random()-.5)*1,duration:1+Math.random()*2,delay:Math.random()*3,ease:"power3.inOut",onComplete:this.hologram.floor.updateGridOffsetX})},this.hologram.floor.updateGridOffsetY=()=>{De.to(this.hologram.floor.material.uniforms.uGridOffset.value,{y:(Math.random()-.5)*1,duration:1+Math.random()*2,delay:Math.random()*3,ease:"power3.inOut",onComplete:this.hologram.floor.updateGridOffsetY})},this.hologram.floor.updateGridOffsetX(),this.hologram.floor.updateGridOffsetY(),this.hologram.car={},this.hologram.car.group=new St,this.hologram.car.group.position.copy(this.resources.items.level5CarModel.scene.children[0].position),this.resources.items.level5CarModel.scene.children[0].position.set(0,0,0),this.group.add(this.hologram.car.group),this.hologram.car.material=new vb,this.hologram.car.material.uniforms.uColor.value=this.hologram.color.instance,this.hologram.car.model=this.resources.items.level5CarModel.scene,this.hologram.car.model.traverse(e=>{e instanceof Ye&&(e.material=this.hologram.car.material)}),this.hologram.car.model.position.z=.005,this.hologram.car.group.add(this.hologram.car.model),this.hologram.wireframeCar={},this.hologram.wireframeCar.material=new mt({wireframe:!0,transparent:!0,opacity:.2,depthWrite:!1}),this.hologram.wireframeCar.material.color=this.hologram.color.instance,this.hologram.wireframeCar.model=this.hologram.car.model.clone(),this.hologram.wireframeCar.model.traverse(e=>{e instanceof Ye&&(e.material=this.hologram.wireframeCar.material)}),this.hologram.wireframeCar.model.position.z=.005,this.hologram.car.group.add(this.hologram.wireframeCar.model),this.debug&&(this.debug.Register({type:"folder",folder:"Level 5",label:"Hologram",open:!1}),this.debug.Register({object:this.hologram.color,property:"string",type:"color",folder:"Hologram",label:"color",format:"hex",onChange:()=>{this.hologram.color.instance.set(this.hologram.color.string)}}))}setBlock(){this.block={},this.block.model=this.resources.items.level5BlockBakedModel.scene,this.block.texture=this.resources.items.level5BlockBakedTexture,this.block.texture.flipY=!1,this.block.texture.encoding=We,this.block.material=new at({vertexShader:vs,fragmentShader:xs,uniforms:{uTexture:{value:this.block.texture},uFade:{value:new le(5,3)}},transparent:!0}),this.block.model.traverse(e=>{e instanceof Ye&&(e.material=this.block.material)}),this.group.add(this.block.model)}update(){this.hologram.car.group.rotation.y=this.time.elapsed*1e-4,this.hologram.floor.material.uniforms.uTime.value=this.time.elapsed,this.hologram.car.material.uniforms.uTime.value=this.time.elapsed}destroy(){}}var Ab=`uniform float uTime;
uniform float uPixelRatio;
uniform float uSize;

attribute float aScale;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(uTime + modelPosition.x * 40.0) * aScale * 0.2;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    gl_PointSize = uSize * aScale * uPixelRatio;
    gl_PointSize *= (1.0 / - viewPosition.z);
}`,wb=`uniform vec3 uColor;

void main()
{
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.04 / (distanceToCenter * 2.0) - 0.04;

    gl_FragColor = vec4(uColor * (strength + 1.0), strength);
}`,Mb=`varying vec2 vUv;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;
}`,Sb=`uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;

varying vec2 vUv;

vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec3 P)
{
    vec3 Pi0 = floor(P);
    vec3 Pi1 = Pi0 + vec3(1.0);
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);

    return 2.2 * n_xyz;
}

void main()
{

    vec2 displacedUv = vUv + cnoise(vec3(vUv * 5.0, uTime * 0.1));


    float strength = cnoise(vec3(displacedUv * 5.0, uTime * 0.2));


    float outerGlow = distance(vUv, vec2(0.5)) * 5.0 - 1.4;
    strength += outerGlow;


    strength += step(- 0.2, strength) * 0.8;





    vec3 color = mix(uColorStart, uColorEnd, strength);

    gl_FragColor = vec4(color, 1.0);
}`,Mu=`varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);


    vUv = uv;
}`,Su=`uniform float uStart;
uniform float uEnd;
uniform float uAlpha;
uniform vec3 uColor;

varying vec2 vUv;

void main()
{
    float glowStrength = length(vUv - 0.5) * 2.0;
    glowStrength = smoothstep(uEnd, uStart, glowStrength);
    glowStrength *= uAlpha;

    gl_FragColor = vec4(vec3(uColor), glowStrength);
}`;class Cb{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.debug=this.experience.debug,this.colors=this.experience.colors,this.resources=this.experience.resources,this.sizes=this.experience.sizes,this.time=this.experience.time,this.scene=this.experience.scene,this.camera=this.experience.camera,this.index=e.index,this.debug&&this.debug.Register({type:"folder",label:"Level 6",open:!0}),this.offset=new L(-4,10,-6),this.baseY=-this.offset.y-2,this.intersect=this.resources.items.level6IntersectModel.scene.children[0],this.intersect.visible=!1,this.scene.add(this.intersect),this.group=new St,this.group.position.y=this.baseY,this.scene.add(this.group),this.setBaked(),this.setEmissives(),this.setBlock(),this.setFireflies(),this.setPortal(),this.setLanternGlows()}show(){const e=Math.abs(this.baseY)*.5;window.requestAnimationFrame(()=>{De.to(this.group.position,{duration:e,ease:"power4.out",y:0})})}setBaked(){this.baked={},this.baked.apply=e=>{e.traverse(t=>{t instanceof Ye&&(t.material=this.baked.material)})},this.baked.texture=this.resources.items.level6BakedTexture,this.baked.texture.flipY=!1,this.baked.texture.encoding=We,this.baked.texture.anisotropy=4,this.baked.model=this.resources.items.level6BakedModel.scene,this.baked.material=new mt({map:this.baked.texture}),this.baked.apply(this.baked.model),this.group.add(this.baked.model)}setEmissives(){this.emissives={},this.emissives.model=this.resources.items.level6EmissivesModel.scene,this.emissives.materials={},this.emissives.materials.lantern=new mt({color:16777215}),this.emissives.model.traverse(e=>{e instanceof Ye&&(e.material=this.emissives.materials.lantern)}),this.group.add(this.emissives.model)}setPortal(){this.portal={},this.portal.model=this.resources.items.level6PortalModel.scene.children.find(e=>e.name.startsWith("portal")),this.group.add(this.portal.model),this.portal.colorStart={},this.portal.colorStart.string="#5e7de7",this.portal.colorStart.instance=new Le(this.portal.colorStart.string),this.portal.colorEnd={},this.portal.colorEnd.string="#ffffff",this.portal.colorEnd.instance=new Le(this.portal.colorEnd.string),this.portal.material=new at({uniforms:{uTime:{value:0},uColorStart:{value:this.portal.colorStart.instance},uColorEnd:{value:this.portal.colorEnd.instance}},vertexShader:Mb,fragmentShader:Sb}),this.portal.model.material=this.portal.material,this.portal.glow={},this.portal.glow.scale=1.015,this.portal.glow.color={},this.portal.glow.color.string="#0049ff",this.portal.glow.color.instance=new Le(this.portal.glow.color.string),this.portal.glow.geometry=new On(1,1,1,1),this.portal.glow.material=new at({transparent:!0,depthWrite:!1,uniforms:{uStart:{value:.75},uEnd:{value:1},uAlpha:{value:1},uColor:{value:this.portal.glow.color.instance}},vertexShader:Mu,fragmentShader:Su,blending:ii}),this.portal.glow.mesh=new Ye(this.portal.glow.geometry,this.portal.glow.material),this.portal.glow.mesh.rotation.y=Math.PI*.5,this.portal.glow.mesh.position.copy(this.portal.model.position),this.portal.glow.mesh.position.x+=.06,this.portal.glow.mesh.scale.set(this.portal.glow.scale,this.portal.glow.scale,this.portal.glow.scale),this.group.add(this.portal.glow.mesh),this.debug&&(this.debug.Register({type:"folder",label:"Portal",folder:"Level 6",open:!0}),this.debug.Register({object:this.portal.glow,property:"scale",folder:"Portal",type:"range",label:"scale",min:0,max:3,step:.001,onChange:()=>{this.portal.glow.mesh.scale.set(this.portal.glow.scale,this.portal.glow.scale,this.portal.glow.scale)}}),this.debug.Register({object:this.portal.glow.material.uniforms.uStart,property:"value",folder:"Portal",type:"range",label:"uStart",min:0,max:1,step:.001}),this.debug.Register({object:this.portal.glow.material.uniforms.uEnd,property:"value",folder:"Portal",type:"range",label:"uEnd",min:0,max:1,step:.001}),this.debug.Register({object:this.portal.glow.material.uniforms.uAlpha,property:"value",folder:"Portal",type:"range",label:"uAlpha",min:0,max:1,step:.001}),this.debug.Register({object:this.portal.glow.color,property:"string",type:"color",folder:"Portal",label:"glowColor",format:"hex",onChange:()=>{this.portal.glow.color.instance.set(this.portal.glow.color.string)}}),this.debug.Register({object:this.portal.colorStart,property:"string",type:"color",folder:"Portal",label:"colorStart",format:"hex",onChange:()=>{this.portal.colorStart.instance.set(this.portal.colorStart.string)}}),this.debug.Register({object:this.portal.colorEnd,property:"string",type:"color",folder:"Portal",label:"colorEnd",format:"hex",onChange:()=>{this.portal.colorEnd.instance.set(this.portal.colorEnd.string)}}))}setLanternGlows(){this.lanternGlows={},this.lanternGlows.color={},this.lanternGlows.color.string="#ff4b00",this.lanternGlows.color.instance=new Le(this.lanternGlows.color.string),this.lanternGlows.material=new at({transparent:!0,depthWrite:!1,uniforms:{uStart:{value:0},uEnd:{value:1},uAlpha:{value:.5},uColor:{value:this.lanternGlows.color.instance}},vertexShader:Mu,fragmentShader:Su,blending:ii}),this.lanternGlows.items=[{position:new L(this.offset.x+.135716,this.offset.y+.624415,this.offset.z-.245759)},{position:new L(this.offset.x+.135716,this.offset.y+.624415,this.offset.z+.245759)}];for(const e of this.lanternGlows.items)e.group=new St,e.group.position.copy(e.position),this.group.add(e.group),e.geometry=new On(1,1,1,1),e.mesh=new Ye(e.geometry,this.lanternGlows.material),e.mesh.position.z+=.1,e.mesh.scale.set(.3,.3,.3),e.group.add(e.mesh);this.debug&&(this.debug.Register({type:"folder",label:"LanternsGlow",folder:"Level 6",open:!0}),this.debug.Register({object:this.lanternGlows.material.uniforms.uStart,property:"value",folder:"LanternsGlow",type:"range",label:"uStart",min:0,max:1,step:.001}),this.debug.Register({object:this.lanternGlows.material.uniforms.uEnd,property:"value",folder:"LanternsGlow",type:"range",label:"uEnd",min:0,max:1,step:.001}),this.debug.Register({object:this.lanternGlows.material.uniforms.uAlpha,property:"value",folder:"LanternsGlow",type:"range",label:"uAlpha",min:0,max:1,step:.001}),this.debug.Register({object:this.lanternGlows.color,property:"string",type:"color",folder:"LanternsGlow",label:"color",format:"hex",onChange:()=>{this.lanternGlows.color.instance.set(this.lanternGlows.color.string)}}))}setBlock(){this.block={},this.block.model=this.resources.items.level6BlockBakedModel.scene,this.block.texture=this.resources.items.level6BlockBakedTexture,this.block.texture.flipY=!1,this.block.texture.encoding=We,this.block.material=new at({vertexShader:vs,fragmentShader:xs,uniforms:{uTexture:{value:this.block.texture},uFade:{value:new le(7,5)}},transparent:!0}),this.block.model.traverse(e=>{e instanceof Ye&&(e.material=this.block.material)}),this.group.add(this.block.model)}setFireflies(){this.fireflies={},this.fireflies.count=30;const e=new Float32Array(this.fireflies.count*3),t=new Float32Array(this.fireflies.count);for(let n=0;n<this.fireflies.count;n++)e[n*3+0]=(Math.random()-.5)*2,e[n*3+1]=Math.random()*1.25,e[n*3+2]=(Math.random()-.5)*2,t[n]=Math.random();this.fireflies.geometry=new dt,this.fireflies.geometry.setAttribute("position",new xt(e,3)),this.fireflies.geometry.setAttribute("aScale",new xt(t,1)),this.fireflies.color={},this.fireflies.color.string="#ffaa6c",this.fireflies.color.instance=new Le(this.fireflies.color.string),this.fireflies.material=new at({uniforms:{uTime:{value:0},uPixelRatio:{value:this.config.pixelRatio},uSize:{value:200},uColor:{value:this.fireflies.color.instance}},vertexShader:Ab,fragmentShader:wb,transparent:!0,blending:ii,depthWrite:!1}),this.fireflies.points=new ko(this.fireflies.geometry,this.fireflies.material),this.fireflies.points.position.add(this.offset),this.group.add(this.fireflies.points),this.debug&&(this.debug.Register({type:"folder",label:"Fireflies",folder:"Level 6",open:!0}),this.debug.Register({object:this.fireflies.color,property:"string",type:"color",folder:"Fireflies",label:"color",format:"hex",onChange:()=>{this.fireflies.color.instance.set(this.fireflies.color.string)}}))}update(){this.fireflies.material.uniforms.uTime.value=this.time.elapsed*.001,this.portal.material.uniforms.uTime.value=this.time.elapsed*.001;const e=this.time.elapsed*.002,t=1+(Math.sin(e)+Math.sin(e*2.34)+Math.sin(e*4.56))*.005;this.portal.glow.mesh.scale.set(t,t,t);for(const n of this.lanternGlows.items)n.group.lookAt(this.camera.base.position)}destroy(){}}class Eb{constructor(e){this.experience=e.experience,this.config=this.experience.config,this.debug=this.experience.debug,this.colors=this.experience.colors,this.resources=this.experience.resources,this.sizes=this.experience.sizes,this.time=this.experience.time,this.scene=this.experience.scene,this.camera=this.experience.camera,this.index=e.index,this.debug&&this.debug.Register({type:"folder",label:"Level 7",open:!0}),this.offset=new L(-6,12,-6),this.baseY=-this.offset.y-2.1,this.intersect=this.resources.items.level7IntersectModel.scene.children[0],this.intersect.visible=!1,this.scene.add(this.intersect),this.group=new St,this.group.position.y=this.baseY,this.scene.add(this.group),this.setBaked(),this.setBlock(),this.setEmissives(),this.setPackages(),this.setCircuits()}show(){const e=Math.abs(this.baseY)*.5;window.requestAnimationFrame(()=>{De.to(this.group.position,{duration:e,ease:"power4.out",y:0})})}setBaked(){this.baked={},this.baked.apply=e=>{e.traverse(t=>{t instanceof Ye&&(t.material=this.baked.material)})},this.baked.texture=this.resources.items.level7BakedTexture,this.baked.texture.flipY=!1,this.baked.texture.encoding=We,this.baked.texture.anisotropy=4,this.baked.model=this.resources.items.level7BakedModel.scene,this.baked.material=new mt({map:this.baked.texture}),this.baked.apply(this.baked.model),this.group.add(this.baked.model)}setBlock(){this.block={},this.block.model=this.resources.items.level7BlockBakedModel.scene,this.block.texture=this.resources.items.level7BlockBakedTexture,this.block.texture.flipY=!1,this.block.texture.encoding=We,this.block.material=new at({vertexShader:vs,fragmentShader:xs,uniforms:{uTexture:{value:this.block.texture},uFade:{value:new le(8.5,7.5)}},transparent:!0}),this.block.model.traverse(e=>{e instanceof Ye&&(e.material=this.block.material)}),this.group.add(this.block.model)}setEmissives(){this.emissives={},this.emissives.model=this.resources.items.level7EmissivesModel.scene,this.emissives.materials={},this.emissives.materials.lights=new mt({color:16777215}),this.emissives.materials.darks=new mt({color:0}),this.emissives.model.traverse(e=>{e instanceof Ye&&(e.name.startsWith("darks")?e.material=this.emissives.materials.darks:e.name.startsWith("lights")&&(e.material=this.emissives.materials.lights))}),this.group.add(this.emissives.model)}setPackages(){this.packages={},this.packages.width=.25,this.packages.height=.11,this.packages.countPerInstance=8;const e=this.resources.items.level7PackageModel.scene;this.packages.geometries={};for(const r of e.children)r.name.startsWith("body")?this.packages.geometries.body=r.geometry:r.name.startsWith("sticker")?this.packages.geometries.sticker=r.geometry:r.name.startsWith("tape")&&(this.packages.geometries.tape=r.geometry);this.resources.items.level7MatcapBlueLightTexture.encoding=We,this.resources.items.level7MatcapBlueDarkTexture.encoding=We,this.resources.items.level7MatcapGreenLightTexture.encoding=We,this.resources.items.level7MatcapGreenDarkTexture.encoding=We,this.resources.items.level7MatcapPinkLightTexture.encoding=We,this.resources.items.level7MatcapPinkDarkTexture.encoding=We,this.resources.items.level7MatcapWhiteTexture.encoding=We,this.packages.materials={},this.packages.materials.blueLight=new Lt({matcap:this.resources.items.level7MatcapBlueLightTexture}),this.packages.materials.blueDark=new Lt({matcap:this.resources.items.level7MatcapBlueDarkTexture}),this.packages.materials.greenLight=new Lt({matcap:this.resources.items.level7MatcapGreenLightTexture}),this.packages.materials.greenDark=new Lt({matcap:this.resources.items.level7MatcapGreenDarkTexture}),this.packages.materials.pinkLight=new Lt({matcap:this.resources.items.level7MatcapPinkLightTexture}),this.packages.materials.pinkDark=new Lt({matcap:this.resources.items.level7MatcapPinkDarkTexture}),this.packages.materials.white=new Lt({matcap:this.resources.items.level7MatcapWhiteTexture}),this.packages.instances={},this.packages.instances.blueBody=new ei(this.packages.geometries.body,this.packages.materials.blueLight,this.packages.countPerInstance),this.packages.instances.blueTape=new ei(this.packages.geometries.tape,this.packages.materials.blueDark,this.packages.countPerInstance),this.packages.instances.greenBody=new ei(this.packages.geometries.body,this.packages.materials.greenLight,this.packages.countPerInstance),this.packages.instances.greenTape=new ei(this.packages.geometries.tape,this.packages.materials.greenDark,this.packages.countPerInstance),this.packages.instances.pinkBody=new ei(this.packages.geometries.body,this.packages.materials.pinkLight,this.packages.countPerInstance),this.packages.instances.pinkTape=new ei(this.packages.geometries.tape,this.packages.materials.pinkDark,this.packages.countPerInstance),this.packages.instances.sticker=new ei(this.packages.geometries.sticker,this.packages.materials.white,this.packages.countPerInstance*3);for(const r in this.packages.instances){const s=this.packages.instances[r];s.instanceMatrix.setUsage(rs),s.userData.count=0,this.group.add(s)}this.packages.items=[],this.packages.add=r=>{const s={};s.reference=new ht,this.scene.add(s.reference),s.instances=[];for(const a of r)s.instances.push([a.userData.count,a]),a.userData.count++;return this.packages.items.push(s),s};const t=this.packages.add([this.packages.instances.pinkBody,this.packages.instances.pinkTape,this.packages.instances.sticker]);t.reference.position.set(this.offset.x+.292184,this.offset.y+.340583,this.offset.z-.686098),t.reference.rotation.y=.15;const n=this.packages.add([this.packages.instances.greenBody,this.packages.instances.greenTape,this.packages.instances.sticker]);n.reference.position.set(this.offset.x+.130075,this.offset.y+.292495,this.offset.z-.66658),n.reference.rotation.reorder("YXZ"),n.reference.rotation.z=Math.PI*.5,n.reference.rotation.y=.15;const i=this.packages.add([this.packages.instances.blueBody,this.packages.instances.blueTape,this.packages.instances.sticker]);i.reference.position.set(this.offset.x-.236678,this.offset.y+.13338,this.offset.z-.009656),i.reference.rotation.reorder("YXZ"),i.reference.rotation.y=Math.PI*.3}setCircuits(){this.circuits={},this.circuits.packagesPerLane=this.packages.countPerInstance-1,this.circuits.lanes=[],this.circuits.lanes[0]={start:new L(this.offset.x+1+.3,this.offset.y+.75,this.offset.z-.7),step:new L(-.5,0,0),packages:{instances:[this.packages.instances.pinkBody,this.packages.instances.pinkTape,this.packages.instances.sticker],items:[]}},this.circuits.lanes[1]={start:new L(this.offset.x-.4,this.offset.y+1.35,this.offset.z+1+.3),step:new L(0,0,-.5),packages:{instances:[this.packages.instances.greenBody,this.packages.instances.greenTape,this.packages.instances.sticker],items:[]}},this.circuits.lanes[2]={start:new L(this.offset.x-.65,this.offset.y+.24,this.offset.z+1+.3),step:new L(0,0,-.5),packages:{instances:[this.packages.instances.blueBody,this.packages.instances.blueTape,this.packages.instances.sticker],items:[]}};let e=0;for(const t of this.circuits.lanes){t.index=e++;for(let n=0;n<this.circuits.packagesPerLane;n++){const i={};i.status="available",i.step=0;const r=this.packages.add(t.packages.instances);i.reference=r.reference,i.reference.scale.set(0,0,0),i.reference.position.set(0,999,0),t.packages.items.push(i)}}this.circuits.elevator={},this.circuits.elevator.step=0,this.circuits.elevator.center=new L(this.offset.x+.395,this.offset.y+.3,this.offset.z+.38),this.circuits.elevator.grid=[0,1,2,3],this.circuits.elevator.gridOffsets=[new L(this.packages.width*.5,0,this.packages.width*.5),new L(-this.packages.width*.5,0,this.packages.width*.5),new L(this.packages.width*.5,0,-this.packages.width*.5),new L(-this.packages.width*.5,0,-this.packages.width*.5)],this.circuits.update=()=>{if(document.hidden)return;this.circuits.elevator.step===4&&(this.circuits.elevator.step=0,this.circuits.elevator.grid=[0,1,2,3].sort((i,r)=>.5-Math.random()));const t=[...this.circuits.lanes].sort((i,r)=>.5-Math.random());let n;for(;t.length&&typeof n>"u";)n=t.shift().packages.items.find(r=>r.step===2&&r.status==="onLane");if(n){n.status="onElevator",n.step=0,this.circuits.elevator.step++;const i=this.circuits.elevator.grid.shift(),r=this.circuits.elevator.gridOffsets[i],s=n.reference.position.clone(),a=new L(this.circuits.elevator.center.x+r.x,this.circuits.elevator.center.y+r.y-this.circuits.elevator.step*this.packages.height/4,this.circuits.elevator.center.z+r.z),l=new L().lerpVectors(s,a,.25);l.y+=.2,l.y=Math.max(l.y,s.y),De.to(n.reference.position,{duration:.8,x:a.x,z:a.z}),De.to(n.reference.position,{duration:.4,ease:"power2.out",y:l.y,onComplete:()=>{De.to(n.reference.position,{duration:.4,ease:"power2.in",y:a.y})}})}for(const i of this.circuits.lanes){const r=i.packages.items.find(s=>s.status==="available");r&&(r.status="onLane",r.step=0,r.reference.position.copy(i.start),r.reference.rotation.y=Math.floor(Math.random()*4)/4*Math.PI*2,r.reference.scale.set(0,0,0))}for(const i of this.circuits.lanes)for(const r of i.packages.items)r.status==="onLane"?(De.to(r.reference.position,{duration:.8,ease:"back.out(1.1)",delay:i.index/3*.2,x:`+=${i.step.x}`,y:`+=${i.step.y}`,z:`+=${i.step.z}`}),r.step===0?De.to(r.reference.scale,{duration:.9,ease:"elastic.out(1, 0.4)",x:1,y:1,z:1}):r.step===4&&De.to(r.reference.scale,{duration:.2,ease:"power2.in",x:0,y:0,z:0}),r.step++,r.step>=5&&(r.status="available")):n&&r.status==="onElevator"&&(r.step>0&&De.to(r.reference.position,{duration:.8,y:`-=${this.packages.height*.25}`}),r.step===11&&De.to(r.reference.scale,{duration:.2,ease:"power2.in",x:0,y:0,z:0}),r.step++,r.step>=12&&(r.status="available"))},window.setInterval(()=>{this.circuits.update()},1e3)}update(){for(const e of this.packages.items)for(const t of e.instances)t[1].setMatrixAt(t[0],e.reference.matrixWorld),t[1].instanceMatrix.needsUpdate=!0}destroy(){}}class Tb{constructor(e){this.experience=e.experience,this.config=e.experience.config,this.debug=e.experience.debug,this.items=[]}addLevel(e){let t=[Dy,Yy,Zy,hb,_b,Cb,Eb][e];const n=new t({experience:this.experience,index:e});return this.items.push(n),n}update(){if(this.experience.world.navigation.level)for(const e of this.items)Math.abs(e.index-this.experience.world.navigation.level.index)<2&&e.update()}}class Lb{constructor(e){this.experience=e.experience,this.resources=this.experience.resources,this.scene=this.experience.scene,this.setFloor(),this.setLevels(),this.setNavigation()}setFloor(){this.floor=new yy({experience:this.experience})}setLevels(){this.levels=new Tb({experience:this.experience})}setNavigation(){this.navigation=new By({experience:this.experience,levels:this.levels,screws:this.screws})}resize(){this.navigation.resize()}update(){this.navigation.update(),this.levels&&this.levels.update()}destroy(){this.navigation.destroy(),this.floor&&this.floor.destroy();for(const e of this.levels.items)e.destroy()}}const Pb=o=>[{name:"level1",data:{index:0},items:[{name:"level1IntersectModel",source:"/assets/experience/level1/intersect.glb"},{name:"level1BakedTexture",source:"/assets/experience/level1/baked.webp",type:"texture"},{name:"level1BakedModel",source:"/assets/experience/level1/baked.glb"},{name:"level1CameraHeadModel",source:"/assets/experience/level1/cameraHead.glb"},{name:"level1SudoHeadModel",source:"/assets/experience/level1/sudoHead.glb"},{name:"level1CactusModel",source:"/assets/experience/level1/cactus.glb"},{name:"level1CubeModel",source:"/assets/experience/level1/cube.glb"},{name:"level1EmissivesModel",source:"/assets/experience/level1/emissives.glb"},{name:"level1PyramidModel",source:"/assets/experience/level1/pyramid.glb"},{name:"level1DogModel",source:`/assets/experience/level1/${o.ouka?"ouka":"sudo"}.glb`},{name:"matcapPinkOnBeigeTexture",source:"/assets/experience/matcaps/pinkOnBeige.jpg",type:"texture"},{name:"matcapCyanOnBeigeTexture",source:"/assets/experience/matcaps/cyanOnBeige.jpg",type:"texture"},{name:"matcapWhiteOnPurpleTexture",source:"/assets/experience/matcaps/whiteOnPurple.jpg",type:"texture"},{name:"matcapDarkGreyOnWhiteTexture",source:"/assets/experience/matcaps/darkGreyOnWhite.jpg",type:"texture"},{name:"matcapOrangeOnDarkGreyTexture",source:"/assets/experience/matcaps/orangeOnDarkGrey.jpg",type:"texture"},{name:"matcapDarkGreyOnDarkGreyTexture",source:"/assets/experience/matcaps/darkGreyOnDarkGrey.jpg",type:"texture"},{name:"matcapGreenOnPurpleTexture",source:"/assets/experience/matcaps/greenOnPurple.jpg",type:"texture"},{name:"matcapPinkOnPurpleTexture",source:"/assets/experience/matcaps/pinkOnPurple.jpg",type:"texture"},{name:"matcapRedOnPurpleTexture",source:"/assets/experience/matcaps/redOnPurple.jpg",type:"texture"},{name:"matcapYellowOnPurpleTexture",source:"/assets/experience/matcaps/yellowOnPurple.jpg",type:"texture"}]},{name:"level2",data:{index:1},items:[{name:"level2IntersectModel",source:"/assets/experience/level2/intersect.glb"},{name:"level2BakedTexture",source:"/assets/experience/level2/baked.webp",type:"texture"},{name:"level2BakedModel",source:"/assets/experience/level2/baked.glb"},{name:"level2BlockBakedTexture",source:"/assets/experience/level2/blockBaked.webp",type:"texture"},{name:"level2BlockBakedModel",source:"/assets/experience/level2/blockBaked.glb"},{name:"level2BasicsModel",source:"/assets/experience/level2/basics.glb"},{name:"level2LaserModel",source:"/assets/experience/level2/laser.glb"},{name:"level2IntersectsModel",source:"/assets/experience/level2/intersects.glb"},{name:"level2Beam",source:"/assets/experience/level2/beam.png"},{name:"level2BeamGradientTexture",source:"/assets/experience/level2/beamGradient.png",type:"texture"}]},{name:"level3",data:{index:2},items:[{name:"level3IntersectModel",source:"/assets/experience/level3/intersect.glb"},{name:"level3BakedTexture",source:"/assets/experience/level3/baked.webp",type:"texture"},{name:"level3BakedModel",source:"/assets/experience/level3/baked.glb"},{name:"level3BlockBakedTexture",source:"/assets/experience/level3/blockBaked.webp",type:"texture"},{name:"level3BlockBakedModel",source:"/assets/experience/level3/blockBaked.glb"},{name:"level3PrinterModel",source:"/assets/experience/level3/printer.glb"},{name:"level3DroneModel",source:"/assets/experience/level3/drone.glb"}]},{name:"level4",data:{index:3},items:[{name:"level4IntersectModel",source:"/assets/experience/level4/intersect.glb"},{name:"level4BakedTexture",source:"/assets/experience/level4/baked.webp",type:"texture"},{name:"level4BakedModel",source:"/assets/experience/level4/baked.glb"},{name:"level4BlockBakedTexture",source:"/assets/experience/level4/blockBaked.webp",type:"texture"},{name:"level4BlockBakedModel",source:"/assets/experience/level4/blockBaked.glb"},{name:"level4PrimitivesInBoxModel",source:"/assets/experience/level4/primitivesInBox.glb"},{name:"level4PrimitivesInSlideModel",source:"/assets/experience/level4/primitivesInSlide.glb"},{name:"level4PrimitivesCubeModel",source:"/assets/experience/level4/primitivesCube.glb"},{name:"level4PrimitivesCylinderModel",source:"/assets/experience/level4/primitivesCylinder.glb"},{name:"level4PrimitivesSphereModel",source:"/assets/experience/level4/primitivesSphere.glb"},{name:"level4BoxModel",source:"/assets/experience/level4/box.glb"},{name:"level4ElevatorModel",source:"/assets/experience/level4/elevator.glb"},{name:"level4OuterWallsModel",source:"/assets/experience/level4/outerWalls.glb"},{name:"level4ShadowTexture",source:"/assets/experience/level4/shadow.png",type:"texture"}]},{name:"level5",data:{index:4},items:[{name:"level5IntersectModel",source:"/assets/experience/level5/intersect.glb"},{name:"level5BakedTexture",source:"/assets/experience/level5/baked.webp",type:"texture"},{name:"level5BakedModel",source:"/assets/experience/level5/baked.glb"},{name:"level5BlockBakedTexture",source:"/assets/experience/level5/blockBaked.webp",type:"texture"},{name:"level5BlockBakedModel",source:"/assets/experience/level5/blockBaked.glb"},{name:"level5ScreensBakedTexture",source:"/assets/experience/level5/screensBaked.webp",type:"texture"},{name:"level5ScreensBakedModel",source:"/assets/experience/level5/screensBaked.glb"},{name:"level5EmissivesModel",source:"/assets/experience/level5/emissives.glb"},{name:"level5CarModel",source:"/assets/experience/level5/car.glb"},{name:"level5ScreensInterfaceTexture",source:"/assets/experience/level5/screensInterface.webp",type:"texture"}]},{name:"level6",data:{index:5},items:[{name:"level6IntersectModel",source:"/assets/experience/level6/intersect.glb"},{name:"level6BakedTexture",source:"/assets/experience/level6/baked.webp",type:"texture"},{name:"level6BakedModel",source:"/assets/experience/level6/baked.glb"},{name:"level6PortalModel",source:"/assets/experience/level6/portal.glb"},{name:"level6BlockBakedTexture",source:"/assets/experience/level6/blockBaked.webp",type:"texture"},{name:"level6BlockBakedModel",source:"/assets/experience/level6/blockBaked.glb"},{name:"level6EmissivesModel",source:"/assets/experience/level6/emissives.glb"}]},{name:"level7",data:{index:6},items:[{name:"level7IntersectModel",source:"/assets/experience/level7/intersect.glb"},{name:"level7BakedTexture",source:"/assets/experience/level7/baked.webp",type:"texture"},{name:"level7BakedModel",source:"/assets/experience/level7/baked.glb"},{name:"level7BlockBakedTexture",source:"/assets/experience/level7/blockBaked.webp",type:"texture"},{name:"level7BlockBakedModel",source:"/assets/experience/level7/blockBaked.glb"},{name:"level7EmissivesModel",source:"/assets/experience/level7/emissives.glb"},{name:"level7PackageModel",source:"/assets/experience/level7/package.glb"},{name:"level7MatcapBlueLightTexture",source:"/assets/experience/level7/matcapBlueLight.webp",type:"texture"},{name:"level7MatcapBlueDarkTexture",source:"/assets/experience/level7/matcapBlueDark.webp",type:"texture"},{name:"level7MatcapPinkLightTexture",source:"/assets/experience/level7/matcapPinkLight.webp",type:"texture"},{name:"level7MatcapPinkDarkTexture",source:"/assets/experience/level7/matcapPinkDark.webp",type:"texture"},{name:"level7MatcapGreenLightTexture",source:"/assets/experience/level7/matcapGreenLight.webp",type:"texture"},{name:"level7MatcapGreenDarkTexture",source:"/assets/experience/level7/matcapGreenDark.webp",type:"texture"},{name:"level7MatcapWhiteTexture",source:"/assets/experience/level7/matcapWhite.webp",type:"texture"}]}];var Hh={exports:{}};(function(o,e){(function(t,n){o.exports=n()})(bd,function(){var t=function(){function n(f){return s.appendChild(f.dom),f}function i(f){for(var p=0;p<s.children.length;p++)s.children[p].style.display=p===f?"block":"none";r=f}var r=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(f){f.preventDefault(),i(++r%s.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:s,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(h.update(f-a,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,d)){var p=performance.memory;d.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:s,setMode:i}};return t.Panel=function(n,i,r){var s=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,f=2*c,p=3*c,m=15*c,g=74*c,x=30*c,v=document.createElement("canvas");v.width=u,v.height=h,v.style.cssText="width:80px;height:48px";var A=v.getContext("2d");return A.font="bold "+9*c+"px Helvetica,Arial,sans-serif",A.textBaseline="top",A.fillStyle=r,A.fillRect(0,0,u,h),A.fillStyle=i,A.fillText(n,d,f),A.fillRect(p,m,g,x),A.fillStyle=r,A.globalAlpha=.9,A.fillRect(p,m,g,x),{dom:v,update:function(w,M){s=Math.min(s,w),a=Math.max(a,w),A.fillStyle=r,A.globalAlpha=1,A.fillRect(0,0,u,m),A.fillStyle=i,A.fillText(l(w)+" "+n+" ("+l(s)+"-"+l(a)+")",d,f),A.drawImage(v,p+c,m,g-c,x,p,m,g-c,x),A.fillRect(p+g-c,m,c,x),A.fillStyle=r,A.globalAlpha=.9,A.fillRect(p+g-c,m,c,l((1-w/M)*x))}}},t})})(Hh);var Ib=Hh.exports;const Rb=yd(Ib);var Gh={exports:{}};/*! For license information please see guify.min.js.LICENSE.txt */(function(o,e){(function(t,n){o.exports=n()})(self,function(){return(()=>{var t={379:s=>{var a={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};s.exports=function(l,c){return typeof c!="number"||a[l]?c:c+"px"}},764:s=>{s.exports={light:{name:"Light",colors:{menuBarBackground:"rgb(227, 227, 227)",menuBarText:"rgb(36, 36, 36)",panelBackground:"rgb(227, 227, 227)",componentBackground:"rgb(204, 204, 204)",componentBackgroundHover:"rgb(190, 190, 190)",componentBackgroundDisabled:"rgb(200, 200, 200)",componentForeground:"rgb(105, 105, 105)",componentActive:"rgb(36, 36, 36)",textPrimary:"rgb(36, 36, 36)",textSecondary:"rgb(87, 87, 87)",textHover:"rgb(204, 204, 204)",textActive:"rgb(204, 204, 204)",textDisabled:"rgb(180, 180, 180)"}},dark:{name:"Dark",colors:{menuBarBackground:"rgb(35, 35, 35)",menuBarText:"rgb(235, 235, 235)",panelBackground:"rgb(35, 35, 35)",componentBackground:"rgb(54, 54, 54)",componentBackgroundHover:"rgb(76, 76, 76)",componentBackgroundDisabled:"rgb(24, 24, 24)",componentForeground:"rgb(112, 112, 112)",componentActive:"rgb(202, 202, 202)",textPrimary:"rgb(235, 235, 235)",textSecondary:"rgb(181, 181, 181)",textHover:"rgb(235, 235, 235)",textActive:"rgb(54, 54, 54)",textDisabled:"rgb(54, 54, 54)"}},yorha:{name:"YoRHa",colors:{menuBarBackground:"#CCC8B1",menuBarText:"#454138",panelBackground:"#CCC8B1",componentBackground:"#BAB5A1",componentBackgroundHover:"#877F6E",componentBackgroundDisabled:"#DED8C7",componentForeground:"#454138",componentActive:"#978F7E",textPrimary:"#454138",textSecondary:"#454138",textHover:"#CCC8B1",textActive:"#CCC8B1",textDisabled:"#BAB5A6"},font:{fontFamily:"helvetica, sans-serif",fontSize:"14px",fontWeight:"100",inputFontFamily:"ui-monospace, monospace"}}}},287:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-bar {
    background-color: var(--color-menu-bar-background);
    height: var(--size-menu-bar-height);
    width: 100%;
    opacity: 1.0;
    position: relative;
    top: 0;
    cursor: default;
}

.guify-bar-title {
    color: var(--color-menu-bar-text);
    text-align: center;
    width: 100%;
    position: absolute;
    top: 0;
    line-height: var(--size-menu-bar-height);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.guify-bar-button {
    text-align: center;
    border: none;
    cursor: pointer;
    font-family: inherit;
    height: 100%;
    position: absolute;
    top: 0;
    color: var(--color-text-primary);
    background-color: var(--color-component-background);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;

}

/* Hide default accessibility outlines since we're providing our own visual feedback */
.guify-bar-button:focus {
    outline: none;
}
.guify-bar-button::-moz-focus-inner {
    border: 0;
}

.guify-bar-button:hover,
.guify-bar-button:focus {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-bar-button:active {
    color: var(--color-text-active) !important;
    background-color: var(--color-component-active) !important;
}`,"",{version:3,sources:["webpack://./src/components/internal/menu-bar.css"],names:[],mappings:"AAEA;IACI,kDAAkD;IAClD,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,wCAAwC;IACxC,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,gCAAgC;IAChC,mDAAmD;IACnD,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,SAAS;;AAEb;;AAEA,sFAAsF;AACtF;IACI,aAAa;AACjB;AACA;IACI,SAAS;AACb;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,0CAA0C;IAC1C,0DAA0D;AAC9D",sourcesContent:[`@import "../variables.css";

.guify-bar {
    background-color: var(--color-menu-bar-background);
    height: var(--size-menu-bar-height);
    width: 100%;
    opacity: 1.0;
    position: relative;
    top: 0;
    cursor: default;
}

.guify-bar-title {
    color: var(--color-menu-bar-text);
    text-align: center;
    width: 100%;
    position: absolute;
    top: 0;
    line-height: var(--size-menu-bar-height);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.guify-bar-button {
    text-align: center;
    border: none;
    cursor: pointer;
    font-family: inherit;
    height: 100%;
    position: absolute;
    top: 0;
    color: var(--color-text-primary);
    background-color: var(--color-component-background);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;

}

/* Hide default accessibility outlines since we're providing our own visual feedback */
.guify-bar-button:focus {
    outline: none;
}
.guify-bar-button::-moz-focus-inner {
    border: 0;
}

.guify-bar-button:hover,
.guify-bar-button:focus {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-bar-button:active {
    color: var(--color-text-active) !important;
    background-color: var(--color-component-active) !important;
}`],sourceRoot:""}]);const m=p},153:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`/* Container */

.guify-panel-container {
    position: absolute;
    background: var(--color-panel-background);
}

.guify-panel-container-scrollable {
    max-height: calc(100% - var(--size-menu-bar-height));
    overflow: scroll;
}

/* Container modes (i.e. inner, outer) */

.guify-panel-container-right-inner {
    right: 0;
    left: unset;
}

.guify-panel-container-left-inner {
    right: unset;
    left: 0;
}

.guify-panel-container-right-outer {
    right: unset;
    left: 100%;
}

.guify-panel-container-left-outer {
    right: 100%;
    left: unset;
}

.guify-fullscreen .guify-panel-container-right-inner,
.guify-fullscreen .guify-panel-container-right-outer {
    right: 0;
    left: unset;
}

.guify-fullscreen .guify-panel-container-left-inner,
.guify-fullscreen .guify-panel-container-left-outer {
    right: unset;
    left: 0;
}

/* Panel (in container) */

.guify-panel {
    padding: 14px;
    /* Last component will have a margin, so reduce padding to account for this */
    padding-bottom: calc(14px - var(--size-component-spacing));

    /* all: initial;  */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    text-align: left;
    box-sizing: border-box;
}

.guify-panel.guify-panel-hidden {
    height: 0px;
    display: none;
}

.guify-panel * {
    box-sizing: content-box;
    box-sizing: initial;
    -webkit-box-sizing: initial;
    -moz-box-sizing: initial;
}

.guify-panel input {
    display: inline;
}

.guify-panel a {
    color: inherit;
    text-decoration: none;
}

.guify-panel-toggle-button {
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    border: none;
    cursor: pointer;
    font-family: inherit;
    color: var(--color-text-primary);
    background-color: var(--color-component-background);

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}

/* Open/Close button styling */
.guify-panel-toggle-button svg {
    fill-opacity: 0;
    stroke-width: 3;
    stroke: var(--color-component-foreground);
}

/* Remove browser default outlines since we're providing our own */
.guify-panel-toggle-button:focus {
    outline:none;
}
.guify-panel-toggle-button::-moz-focus-inner {
    border: 0;
}

.guify-panel-toggle-button:hover,
.guify-panel-toggle-button:focus {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-panel-toggle-button:active {
    color: var(--color-text-active);
    background-color:var(--color-component-active);
}`,"",{version:3,sources:["webpack://./src/components/internal/panel.css"],names:[],mappings:"AAEA,cAAc;;AAEd;IACI,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,oDAAoD;IACpD,gBAAgB;AACpB;;AAEA,wCAAwC;;AAExC;IACI,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;;IAEI,QAAQ;IACR,WAAW;AACf;;AAEA;;IAEI,YAAY;IACZ,OAAO;AACX;;AAEA,yBAAyB;;AAEzB;IACI,aAAa;IACb,6EAA6E;IAC7E,0DAA0D;;IAE1D,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,uBAAmB;IAAnB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,gCAAgC;IAChC,mDAAmD;;IAEnD,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;;AAErB;;AAEA,8BAA8B;AAC9B;IACI,eAAe;IACf,eAAe;IACf,yCAAyC;AAC7C;;AAEA,kEAAkE;AAClE;IACI,YAAY;AAChB;AACA;IACI,SAAS;AACb;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,+BAA+B;IAC/B,8CAA8C;AAClD",sourcesContent:[`@import "../variables.css";

/* Container */

.guify-panel-container {
    position: absolute;
    background: var(--color-panel-background);
}

.guify-panel-container-scrollable {
    max-height: calc(100% - var(--size-menu-bar-height));
    overflow: scroll;
}

/* Container modes (i.e. inner, outer) */

.guify-panel-container-right-inner {
    right: 0;
    left: unset;
}

.guify-panel-container-left-inner {
    right: unset;
    left: 0;
}

.guify-panel-container-right-outer {
    right: unset;
    left: 100%;
}

.guify-panel-container-left-outer {
    right: 100%;
    left: unset;
}

.guify-fullscreen .guify-panel-container-right-inner,
.guify-fullscreen .guify-panel-container-right-outer {
    right: 0;
    left: unset;
}

.guify-fullscreen .guify-panel-container-left-inner,
.guify-fullscreen .guify-panel-container-left-outer {
    right: unset;
    left: 0;
}

/* Panel (in container) */

.guify-panel {
    padding: 14px;
    /* Last component will have a margin, so reduce padding to account for this */
    padding-bottom: calc(14px - var(--size-component-spacing));

    /* all: initial;  */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    text-align: left;
    box-sizing: border-box;
}

.guify-panel.guify-panel-hidden {
    height: 0px;
    display: none;
}

.guify-panel * {
    box-sizing: initial;
    -webkit-box-sizing: initial;
    -moz-box-sizing: initial;
}

.guify-panel input {
    display: inline;
}

.guify-panel a {
    color: inherit;
    text-decoration: none;
}

.guify-panel-toggle-button {
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    border: none;
    cursor: pointer;
    font-family: inherit;
    color: var(--color-text-primary);
    background-color: var(--color-component-background);

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}

/* Open/Close button styling */
.guify-panel-toggle-button svg {
    fill-opacity: 0;
    stroke-width: 3;
    stroke: var(--color-component-foreground);
}

/* Remove browser default outlines since we're providing our own */
.guify-panel-toggle-button:focus {
    outline:none;
}
.guify-panel-toggle-button::-moz-focus-inner {
    border: 0;
}

.guify-panel-toggle-button:hover,
.guify-panel-toggle-button:focus {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-panel-toggle-button:active {
    color: var(--color-text-active);
    background-color:var(--color-component-active);
}`],sourceRoot:""}]);const m=p},56:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-toast-notification {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    /* height: 20px; */
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;

    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
}

.guify-toast-area .guify-toast-notification:nth-child(odd) {
    color: var(--color-text-primary);
    background-color:var(--color-panel-background);
}

.guify-toast-area .guify-toast-notification:nth-child(even) {
    color: var(--color-text-primary);
    background-color: var(--color-menu-bar-background);
}

.guify-toast-close-button {
    color: var(--color-text-primary);
    background: transparent;
    position: absolute;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    border: none;
    cursor: pointer;
    top: 0;
    bottom: 0;
    right: 8px;
}`,"",{version:3,sources:["webpack://./src/components/internal/toast-area.css"],names:[],mappings:"AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;;IAElB,+BAA+B;IAC/B,2BAA2B;IAC3B,+BAA+B;AACnC;;AAEA;IACI,gCAAgC;IAChC,8CAA8C;AAClD;;AAEA;IACI,gCAAgC;IAChC,kDAAkD;AACtD;;AAEA;IACI,gCAAgC;IAChC,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,MAAM;IACN,SAAS;IACT,UAAU;AACd",sourcesContent:[`@import "../variables.css";

.guify-toast-notification {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    /* height: 20px; */
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;

    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
}

.guify-toast-area .guify-toast-notification:nth-child(odd) {
    color: var(--color-text-primary);
    background-color:var(--color-panel-background);
}

.guify-toast-area .guify-toast-notification:nth-child(even) {
    color: var(--color-text-primary);
    background-color: var(--color-menu-bar-background);
}

.guify-toast-close-button {
    color: var(--color-text-primary);
    background: transparent;
    position: absolute;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    border: none;
    cursor: pointer;
    top: 0;
    bottom: 0;
    right: 8px;
}`],sourceRoot:""}]);const m=p},54:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-component-container {
    position: relative;
    min-height: var(--size-component-height);
    line-height: var(--size-component-height);
    margin-bottom: var(--size-component-spacing);
}`,"",{version:3,sources:["webpack://./src/components/partials/container.css"],names:[],mappings:"AAEA;IACI,kBAAkB;IAClB,wCAAwC;IACxC,yCAAyC;IACzC,4CAA4C;AAChD",sourcesContent:[`@import "../variables.css";

.guify-component-container {
    position: relative;
    min-height: var(--size-component-height);
    line-height: var(--size-component-height);
    margin-bottom: var(--size-component-spacing);
}`],sourceRoot:""}]);const m=p},142:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-component-label {
    left: 0;
    width: calc(var(--size-label-width) - 2%);
    display: inline-block;
    margin-right: 2%;
    vertical-align: top;
    min-height: var(--size-component-height);
    line-height: var(--size-component-height);

    color: var(--color-text-primary);
}

/* Disabled styles */
.disabled .guify-component-label {
    color: var(--color-text-disabled);
}`,"",{version:3,sources:["webpack://./src/components/partials/label.css"],names:[],mappings:"AAEA;IACI,OAAO;IACP,yCAAyC;IACzC,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;IACnB,wCAAwC;IACxC,yCAAyC;;IAEzC,gCAAgC;AACpC;;AAEA,oBAAoB;AACpB;IACI,iCAAiC;AACrC",sourcesContent:[`@import "../variables.css";

.guify-component-label {
    left: 0;
    width: calc(var(--size-label-width) - 2%);
    display: inline-block;
    margin-right: 2%;
    vertical-align: top;
    min-height: var(--size-component-height);
    line-height: var(--size-component-height);

    color: var(--color-text-primary);
}

/* Disabled styles */
.disabled .guify-component-label {
    color: var(--color-text-disabled);
}`],sourceRoot:""}]);const m=p},643:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-value-input {
    position: absolute;
    background-color: var(--color-component-background);
    padding-left: 1%;
    height: var(--size-component-height);
    display: inline-block;
    overflow: hidden;
    border: none;

    color: var(--color-text-secondary);
    -webkit-user-select: text;
       -moz-user-select: text;
        -ms-user-select: text;
            user-select: text;
    cursor: text;
    line-height: var(--size-component-height);
    word-break: break-all;

    box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;

    font-family: var(--font-family-for-input);

    border-radius: 0;
}

.guify-value-input-right {
    right: 0 !important;
}

.disabled .guify-value-input {
    pointer-events: none;
    background-color: var(--color-component-background-disabled);
    color: var(--color-text-disabled);
}`,"",{version:3,sources:["webpack://./src/components/partials/value.css"],names:[],mappings:"AAEA;IACI,kBAAkB;IAClB,mDAAmD;IACnD,gBAAgB;IAChB,oCAAoC;IACpC,qBAAqB;IACrB,gBAAgB;IAChB,YAAY;;IAEZ,kCAAkC;IAClC,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;IACjB,YAAY;IACZ,yCAAyC;IACzC,qBAAqB;;IAErB,iCAAiC;IACjC,sCAAsC;IACtC,yCAAyC;;IAEzC,yCAAyC;;IAEzC,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,4DAA4D;IAC5D,iCAAiC;AACrC",sourcesContent:[`@import "../variables.css";

.guify-value-input {
    position: absolute;
    background-color: var(--color-component-background);
    padding-left: 1%;
    height: var(--size-component-height);
    display: inline-block;
    overflow: hidden;
    border: none;

    color: var(--color-text-secondary);
    user-select: text;
    cursor: text;
    line-height: var(--size-component-height);
    word-break: break-all;

    box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;

    font-family: var(--font-family-for-input);

    border-radius: 0;
}

.guify-value-input-right {
    right: 0 !important;
}

.disabled .guify-value-input {
    pointer-events: none;
    background-color: var(--color-component-background-disabled);
    color: var(--color-text-disabled);
}`],sourceRoot:""}]);const m=p},351:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-button {
    box-sizing: border-box !important;
    color: var(--color-text-secondary);
    background-color: var(--color-component-background);

    position: absolute;
    text-align: center;
    height: var(--size-component-height);
    line-height: var(--size-component-height);
    padding-top: 0px;
    padding-bottom: 0px;
    width: calc(100% - var(--size-label-width));
    border: none;
    cursor: pointer;
    right: 0;
    font-family: inherit;
}

.guify-button:focus {
    outline:none;
}
.guify-button::-moz-focus-inner {
    border:0;
}

.guify-button:hover,
.guify-button:focus {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-button:active {
    color: var(--color-text-active) !important;
    background-color: var(--color-component-active) !important;
}

*.disabled > .guify-button {
    pointer-events: none;
    background-color: var(--color-component-background-disabled);
    color: var(--color-text-disabled);
}`,"",{version:3,sources:["webpack://./src/components/public/button.css"],names:[],mappings:"AAEA;IACI,iCAAiC;IACjC,kCAAkC;IAClC,mDAAmD;;IAEnD,kBAAkB;IAClB,kBAAkB;IAClB,oCAAoC;IACpC,yCAAyC;IACzC,gBAAgB;IAChB,mBAAmB;IACnB,2CAA2C;IAC3C,YAAY;IACZ,eAAe;IACf,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,QAAQ;AACZ;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,0CAA0C;IAC1C,0DAA0D;AAC9D;;AAEA;IACI,oBAAoB;IACpB,4DAA4D;IAC5D,iCAAiC;AACrC",sourcesContent:[`@import "../variables.css";

.guify-button {
    box-sizing: border-box !important;
    color: var(--color-text-secondary);
    background-color: var(--color-component-background);

    position: absolute;
    text-align: center;
    height: var(--size-component-height);
    line-height: var(--size-component-height);
    padding-top: 0px;
    padding-bottom: 0px;
    width: calc(100% - var(--size-label-width));
    border: none;
    cursor: pointer;
    right: 0;
    font-family: inherit;
}

.guify-button:focus {
    outline:none;
}
.guify-button::-moz-focus-inner {
    border:0;
}

.guify-button:hover,
.guify-button:focus {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-button:active {
    color: var(--color-text-active) !important;
    background-color: var(--color-component-active) !important;
}

*.disabled > .guify-button {
    pointer-events: none;
    background-color: var(--color-component-background-disabled);
    color: var(--color-text-disabled);
}`],sourceRoot:""}]);const m=p},11:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`:root {
    --checkbox-border-width: 4px;
}

input[type=checkbox].guify-checkbox {
    opacity: 0;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    margin: 0;
    border-radius: 0;
    border: none;
    cursor: pointer;
}

input[type=checkbox].guify-checkbox + label {
    margin: 0;
}

input[type=checkbox].guify-checkbox + label:before {
    content: "";
    display: inline-block;
    width: var(--size-component-height);
    height: var(--size-component-height);
    padding: 0;
    margin: 0;
    vertical-align: middle;
    background-color: var(--color-component-background);
    border-radius: 0px;
    cursor: pointer;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;

}

/* Hover style */
input[type=checkbox].guify-checkbox:hover:not(:disabled) + label:before {
    width: calc(var(--size-component-height) - (4px * 2));
    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    height: calc(var(--size-component-height) - (4px * 2));
    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    background-color: var(--color-component-background-hover);
    border: solid 4px var(--color-component-background);
}

/* Checked style */
input[type=checkbox]:checked.guify-checkbox + label:before {
    width: calc(var(--size-component-height) - (4px * 2));
    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    height: calc(var(--size-component-height) - (4px * 2));
    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    background-color: var(--color-component-foreground);
    border: solid 4px var(--color-component-background);
    border: solid var(--checkbox-border-width) var(--color-component-background);
}

/* Focused and checked */
input[type=checkbox]:checked.guify-checkbox:focus + label:before {
    width: calc(var(--size-component-height) - (4px * 2));
    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    height: calc(var(--size-component-height) - (4px * 2));
    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    background-color: var(--color-component-foreground);
    border: solid 4px var(--color-component-background-hover);
    border: solid var(--checkbox-border-width) var(--color-component-background-hover);
}

/* Focus and unchecked */
input[type=checkbox].guify-checkbox:focus + label:before {
    background-color: var(--color-component-background-hover);
}

/* Disabled styles */
.disabled input[type=checkbox].guify-checkbox + label {
    pointer-events: none;
}
.disabled input[type="checkbox"].guify-checkbox + label::before {
    pointer-events: none;
    background-color: var(--color-component-background-disabled);
}`,"",{version:3,sources:["webpack://./src/components/public/checkbox.css"],names:[],mappings:"AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,qBAAqB;IACrB,wBAAwB;IACxB,SAAS;IACT,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,mCAAmC;IACnC,oCAAoC;IACpC,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,mDAAmD;IACnD,kBAAkB;IAClB,eAAe;IACf,uBAAuB;IACvB,4BAA4B;IAC5B,+BAA+B;;AAEnC;;AAEA,gBAAgB;AAChB;IACI,qDAA8E;IAA9E,8EAA8E;IAC9E,sDAA+E;IAA/E,+EAA+E;IAC/E,yDAAyD;IACzD,mDAAmD;AACvD;;AAEA,kBAAkB;AAClB;IACI,qDAA8E;IAA9E,8EAA8E;IAC9E,sDAA+E;IAA/E,+EAA+E;IAC/E,mDAAmD;IACnD,mDAA4E;IAA5E,4EAA4E;AAChF;;AAEA,wBAAwB;AACxB;IACI,qDAA8E;IAA9E,8EAA8E;IAC9E,sDAA+E;IAA/E,+EAA+E;IAC/E,mDAAmD;IACnD,yDAAkF;IAAlF,kFAAkF;AACtF;;AAEA,wBAAwB;AACxB;IACI,yDAAyD;AAC7D;;AAEA,oBAAoB;AACpB;IACI,oBAAoB;AACxB;AACA;IACI,oBAAoB;IACpB,4DAA4D;AAChE",sourcesContent:[`@import "../variables.css";

:root {
    --checkbox-border-width: 4px;
}

input[type=checkbox].guify-checkbox {
    opacity: 0;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    margin: 0;
    border-radius: 0;
    border: none;
    cursor: pointer;
}

input[type=checkbox].guify-checkbox + label {
    margin: 0;
}

input[type=checkbox].guify-checkbox + label:before {
    content: "";
    display: inline-block;
    width: var(--size-component-height);
    height: var(--size-component-height);
    padding: 0;
    margin: 0;
    vertical-align: middle;
    background-color: var(--color-component-background);
    border-radius: 0px;
    cursor: pointer;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;

}

/* Hover style */
input[type=checkbox].guify-checkbox:hover:not(:disabled) + label:before {
    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    background-color: var(--color-component-background-hover);
    border: solid 4px var(--color-component-background);
}

/* Checked style */
input[type=checkbox]:checked.guify-checkbox + label:before {
    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    background-color: var(--color-component-foreground);
    border: solid var(--checkbox-border-width) var(--color-component-background);
}

/* Focused and checked */
input[type=checkbox]:checked.guify-checkbox:focus + label:before {
    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));
    background-color: var(--color-component-foreground);
    border: solid var(--checkbox-border-width) var(--color-component-background-hover);
}

/* Focus and unchecked */
input[type=checkbox].guify-checkbox:focus + label:before {
    background-color: var(--color-component-background-hover);
}

/* Disabled styles */
.disabled input[type=checkbox].guify-checkbox + label {
    pointer-events: none;
}
.disabled input[type="checkbox"].guify-checkbox + label::before {
    pointer-events: none;
    background-color: var(--color-component-background-disabled);
}`],sourceRoot:""}]);const m=p},442:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`/* Styling for simple-color-picker */

.guify-color .Scp {
    width: 125px;
    height: 100px;
    -webkit-user-select: none;
        -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    position: relative;
    z-index: 1000;
    cursor: pointer;
}
.guify-color .Scp-saturation {
    position: relative;
    width: calc(100% - 25px);
    height: 100%;
    background: linear-gradient(to right, #fff 0%, #f00 100%);
    float: left;
    margin-right: 5px;
}
.guify-color .Scp-brightness {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);
}
.guify-color .Scp-sbSelector {
    border: 1px solid;
    position: absolute;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 10px;
    top: -7px;
    left: -7px;
    box-sizing: border-box;
    z-index: 10;
}
.guify-color .Scp-hue {
    width: 20px;
    height: 100%;
    position: relative;
    float: left;
    background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);
}
.guify-color .Scp-hSelector {
    position: absolute;
    background: #fff;
    border-bottom: 1px solid #000;
    right: -3px;
    width: 10px;
    height: 2px;
}

/* Disabled styles */
.disabled .guify-color {
    pointer-events: none;
}`,"",{version:3,sources:["webpack://./src/components/public/color.css"],names:[],mappings:"AAEA,oCAAoC;;AAEpC;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;QACrB,sBAAsB;YAClB,qBAAqB;gBACjB,iBAAiB;IAC7B,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;IACZ,yDAAyD;IACzD,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,sEAAsE;AAC1E;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,4GAA4G;AAChH;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;IAC7B,WAAW;IACX,WAAW;IACX,WAAW;AACf;;AAEA,oBAAoB;AACpB;IACI,oBAAoB;AACxB",sourcesContent:[`@import "../variables.css";

/* Styling for simple-color-picker */

.guify-color .Scp {
    width: 125px;
    height: 100px;
    -webkit-user-select: none;
        -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    position: relative;
    z-index: 1000;
    cursor: pointer;
}
.guify-color .Scp-saturation {
    position: relative;
    width: calc(100% - 25px);
    height: 100%;
    background: linear-gradient(to right, #fff 0%, #f00 100%);
    float: left;
    margin-right: 5px;
}
.guify-color .Scp-brightness {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);
}
.guify-color .Scp-sbSelector {
    border: 1px solid;
    position: absolute;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 10px;
    top: -7px;
    left: -7px;
    box-sizing: border-box;
    z-index: 10;
}
.guify-color .Scp-hue {
    width: 20px;
    height: 100%;
    position: relative;
    float: left;
    background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);
}
.guify-color .Scp-hSelector {
    position: absolute;
    background: #fff;
    border-bottom: 1px solid #000;
    right: -3px;
    width: 10px;
    height: 2px;
}

/* Disabled styles */
.disabled .guify-color {
    pointer-events: none;
}`],sourceRoot:""}]);const m=p},144:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-display {
    display: inline-block;
    height: unset;
    min-height: var(--size-component-height);
    width: calc(100% - var(--size-label-width));
    border: none;
    color: var(--color-text-secondary);
    font-family: inherit;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    vertical-align: sub;
    line-height: 1rem;
    -webkit-user-select: text;
       -moz-user-select: text;
        -ms-user-select: text;
            user-select: text;
}

.disabled .guify-display {
    color: var(--color-text-disabled);
}`,"",{version:3,sources:["webpack://./src/components/public/display.css"],names:[],mappings:"AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,wCAAwC;IACxC,2CAA2C;IAC3C,YAAY;IACZ,kCAAkC;IAClC,oBAAoB;IACpB,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;AACrC",sourcesContent:[`@import "../variables.css";

.guify-display {
    display: inline-block;
    height: unset;
    min-height: var(--size-component-height);
    width: calc(100% - var(--size-label-width));
    border: none;
    color: var(--color-text-secondary);
    font-family: inherit;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    vertical-align: sub;
    line-height: 1rem;
    user-select: text;
}

.disabled .guify-display {
    color: var(--color-text-disabled);
}`],sourceRoot:""}]);const m=p},191:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-file-container {
    display: inline-block;
    outline: none;
    padding-top: 8px;
    padding-bottom: 8px;
    color: var(--color-text-primary);
    background-color: var(--color-component-background);
    cursor: pointer;
}

.guify-file-container:hover:not(:disabled),
.guify-file-container:focus:not(:disabled) {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-file-container:active:not(:disabled) {
    color: var(--color-text-active) !important;
    background-color: var(--color-component-active) !important;
}

.guify-dragover:not(:disabled) {
    background-color: var(--color-component-background);
    box-shadow: inset 0 0 0 3px var(--color-component-foreground);
}

.disabled.guify-file-container {
    pointer-events: none;
    color: var(--color-text-disabled) !important;
    background-color: var(--color-component-background-disabled) !important;
    box-shadow: inset 0 0 0 3px var(--color-component-background-disabled) !important;
}`,"",{version:3,sources:["webpack://./src/components/public/file.css"],names:[],mappings:"AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,gCAAgC;IAChC,mDAAmD;IACnD,eAAe;AACnB;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,0CAA0C;IAC1C,0DAA0D;AAC9D;;AAEA;IACI,mDAAmD;IACnD,6DAA6D;AACjE;;AAEA;IACI,oBAAoB;IACpB,4CAA4C;IAC5C,uEAAuE;IACvE,iFAAiF;AACrF",sourcesContent:[`@import "../variables.css";

.guify-file-container {
    display: inline-block;
    outline: none;
    padding-top: 8px;
    padding-bottom: 8px;
    color: var(--color-text-primary);
    background-color: var(--color-component-background);
    cursor: pointer;
}

.guify-file-container:hover:not(:disabled),
.guify-file-container:focus:not(:disabled) {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-file-container:active:not(:disabled) {
    color: var(--color-text-active) !important;
    background-color: var(--color-component-active) !important;
}

.guify-dragover:not(:disabled) {
    background-color: var(--color-component-background);
    box-shadow: inset 0 0 0 3px var(--color-component-foreground);
}

.disabled.guify-file-container {
    pointer-events: none;
    color: var(--color-text-disabled) !important;
    background-color: var(--color-component-background-disabled) !important;
    box-shadow: inset 0 0 0 3px var(--color-component-background-disabled) !important;
}`],sourceRoot:""}]);const m=p},211:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-folder {
    cursor: pointer;
    padding-left: 0.5em;
    color: var(--color-text-primary);
}

.guify-folder div {
    display: inline-block;
    vertical-align: sub;
    line-height: var(--size-component-height);
}

.guify-folder:hover,
.guify-folder:focus {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
    outline: none;
}


.guify-folder-contents {
    display: block;
    box-sizing: border-box;
    padding-left: 14px;
    margin-bottom: 5px;
    border-left: 2px solid var(--color-component-background);
}

.guify-folder-contents.guify-folder-closed {
    height: 0;
    display: none;
}

.guify-folder .guify-folder-arrow {
    width: 1.5em;
    vertical-align: middle;
}

/* Disabled styles */

.guify-folder.disabled {
    pointer-events: none;
    color: var(--color-text-disabled);
}

.guify-folder.disabled + .guify-folder-contents {
    pointer-events: none;
}`,"",{version:3,sources:["webpack://./src/components/public/folder.css"],names:[],mappings:"AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;IACnD,aAAa;AACjB;;;AAGA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,wDAAwD;AAC5D;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA,oBAAoB;;AAEpB;IACI,oBAAoB;IACpB,iCAAiC;AACrC;;AAEA;IACI,oBAAoB;AACxB",sourcesContent:[`@import "../variables.css";

.guify-folder {
    cursor: pointer;
    padding-left: 0.5em;
    color: var(--color-text-primary);
}

.guify-folder div {
    display: inline-block;
    vertical-align: sub;
    line-height: var(--size-component-height);
}

.guify-folder:hover,
.guify-folder:focus {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
    outline: none;
}


.guify-folder-contents {
    display: block;
    box-sizing: border-box;
    padding-left: 14px;
    margin-bottom: 5px;
    border-left: 2px solid var(--color-component-background);
}

.guify-folder-contents.guify-folder-closed {
    height: 0;
    display: none;
}

.guify-folder .guify-folder-arrow {
    width: 1.5em;
    vertical-align: middle;
}

/* Disabled styles */

.guify-folder.disabled {
    pointer-events: none;
    color: var(--color-text-disabled);
}

.guify-folder.disabled + .guify-folder-contents {
    pointer-events: none;
}`],sourceRoot:""}]);const m=p},554:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`:root {
    --interval-track-color: var(--color-component-background);
    --interval-thumb-color: var(--color-component-foreground);
    --interval-thumb-highlight: var(--color-component-active);

    --interval-track-color-disabled: var(--color-component-background-disabled);
    --interval-thumb-color-disabled: var(--color-text-disabled);
}

.guify-interval {
    -webkit-appearance: none;
    position: absolute;
    height: var(--size-component-height);
    margin: 0px 0;
    width: 33%;
    left: 54.5%;
    background-color: var(--color-component-background);
    background-color: var(--interval-track-color);
    cursor: ew-resize;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.guify-interval-handle {
    background-color: var(--color-component-foreground);
    background-color: var(--interval-thumb-color);
    position: absolute;
    height: var(--size-component-height);
    min-width: 1px;
}
.guify-interval-handle:focus {
    background: var(--color-component-active);
    background: var(--interval-thumb-highlight);
}

.disabled .guify-interval {
    pointer-events: none;
    background-color: var(--color-component-background-disabled);
    background-color: var(--interval-track-color-disabled);
}

.disabled .guify-interval .guify-interval-handle {
    background: var(--color-text-disabled);
    background: var(--interval-thumb-color-disabled);
}`,"",{version:3,sources:["webpack://./src/components/public/interval.css"],names:[],mappings:"AAEA;IACI,yDAAyD;IACzD,yDAAyD;IACzD,yDAAyD;;IAEzD,2EAA2E;IAC3E,2DAA2D;AAC/D;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,oCAAoC;IACpC,aAAa;IACb,UAAU;IACV,WAAW;IACX,mDAA6C;IAA7C,6CAA6C;IAC7C,iBAAiB;;IAEjB,2BAA2B;IAC3B,yBAAyB;IAEzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,mDAA6C;IAA7C,6CAA6C;IAC7C,kBAAkB;IAClB,oCAAoC;IACpC,cAAc;AAClB;AACA;IACI,yCAA2C;IAA3C,2CAA2C;AAC/C;;AAEA;IACI,oBAAoB;IACpB,4DAAsD;IAAtD,sDAAsD;AAC1D;;AAEA;IACI,sCAAgD;IAAhD,gDAAgD;AACpD",sourcesContent:[`@import "../variables.css";

:root {
    --interval-track-color: var(--color-component-background);
    --interval-thumb-color: var(--color-component-foreground);
    --interval-thumb-highlight: var(--color-component-active);

    --interval-track-color-disabled: var(--color-component-background-disabled);
    --interval-thumb-color-disabled: var(--color-text-disabled);
}

.guify-interval {
    -webkit-appearance: none;
    position: absolute;
    height: var(--size-component-height);
    margin: 0px 0;
    width: 33%;
    left: 54.5%;
    background-color: var(--interval-track-color);
    cursor: ew-resize;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.guify-interval-handle {
    background-color: var(--interval-thumb-color);
    position: absolute;
    height: var(--size-component-height);
    min-width: 1px;
}
.guify-interval-handle:focus {
    background: var(--interval-thumb-highlight);
}

.disabled .guify-interval {
    pointer-events: none;
    background-color: var(--interval-track-color-disabled);
}

.disabled .guify-interval .guify-interval-handle {
    background: var(--interval-thumb-color-disabled);
}`],sourceRoot:""}]);const m=p},115:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`:root {
    --range-track-color: var(--color-component-background);
    --range-thumb-color: var(--color-component-foreground);
    --range-thumb-highlight: var(--color-component-active);

    --range-track-color-disabled: var(--color-component-background-disabled);
    --range-thumb-color-disabled: var(--color-text-disabled);
}

input[type=range].guify-range {
    position: absolute; /* Gets rid of weird spacing below slider that I can't figure out the source of, seems internal */
    -webkit-appearance: none;
    width: 100%;
    height: var(--size-component-height);
    margin: 0px 0;
    padding: 0;
    display: inline-block;

    /* Fixes for Safari iOS */
    border-radius: 0;
    border: none;
    background-color: transparent;
}

.disabled input[type=range].guify-range {
    pointer-events: none;
}

/* Remove outlines since we'll be adding our own */
input[type=range].guify-range:focus {
    outline: none;
}
input[type=range].guify-range::-moz-focus-outer {
    border: 0;
}

/* Webkit */
input[type=range].guify-range::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--size-component-height);
    cursor: ew-resize;
    background: var(--color-component-background);
    background: var(--range-track-color);
}
input[type=range].guify-range::-webkit-slider-thumb {
    height: var(--size-component-height);
    width: 10px;
    background: var(--color-component-foreground);
    background: var(--range-thumb-color);
    cursor: ew-resize;
    -webkit-appearance: none;
    margin-top: 0px;
    border: 0;
}
input[type=range].guify-range:focus::-webkit-slider-runnable-track {
    background: var(--color-component-active);
    background: var(--range-thumb-highlight);
    outline: none;
}

.disabled input[type=range].guify-range::-webkit-slider-runnable-track { /* Disabled track */
    pointer-events: none;
    background: var(--color-component-background-disabled);
    background: var(--range-track-color-disabled);
}

.disabled input[type=range].guify-range::-webkit-slider-thumb { /* Disabled thumb */
    pointer-events: none;
    background: var(--color-text-disabled);
}

/* Gecko */
input[type=range].guify-range::-moz-range-track {
    width: 100%;
    height: var(--size-component-height);
    cursor: ew-resize;
    background: var(--color-component-background);
    background: var(--range-track-color);
}
input[type=range].guify-range:focus::-moz-range-track {
    background: var(--color-component-active);
    background: var(--range-thumb-highlight);
}
input[type=range].guify-range::-moz-range-thumb {
    height: var(--size-component-height);
    width: 10px;
    background: var(--color-component-foreground);
    background: var(--range-thumb-color);
    cursor: ew-resize;
    border: none;
    border-radius: 0;
}

.disabled input[type=range].guify-range::-moz-range-track { /* Disabled track */
    pointer-events: none;
    background: var(--color-component-background-disabled);
    background: var(--range-track-color-disabled);
}

.disabled input[type=range].guify-range::-moz-range-thumb { /* Disabled thumb */
    pointer-events: none;
    background: var(--color-text-disabled);
    background: var(--range-thumb-color-disabled);
}`,"",{version:3,sources:["webpack://./src/components/public/range.css"],names:[],mappings:"AAEA;IACI,sDAAsD;IACtD,sDAAsD;IACtD,sDAAsD;;IAEtD,wEAAwE;IACxE,wDAAwD;AAC5D;;AAEA;IACI,kBAAkB,EAAE,iGAAiG;IACrH,wBAAwB;IACxB,WAAW;IACX,oCAAoC;IACpC,aAAa;IACb,UAAU;IACV,qBAAqB;;IAErB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;AACxB;;AAEA,kDAAkD;AAClD;IACI,aAAa;AACjB;AACA;IACI,SAAS;AACb;;AAEA,WAAW;AACX;IACI,WAAW;IACX,oCAAoC;IACpC,iBAAiB;IACjB,6CAAoC;IAApC,oCAAoC;AACxC;AACA;IACI,oCAAoC;IACpC,WAAW;IACX,6CAAoC;IAApC,oCAAoC;IACpC,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;IACf,SAAS;AACb;AACA;IACI,yCAAwC;IAAxC,wCAAwC;IACxC,aAAa;AACjB;;AAEA,yEAAyE,mBAAmB;IACxF,oBAAoB;IACpB,sDAA6C;IAA7C,6CAA6C;AACjD;;AAEA,gEAAgE,mBAAmB;IAC/E,oBAAoB;IACpB,sCAAsC;AAC1C;;AAEA,UAAU;AACV;IACI,WAAW;IACX,oCAAoC;IACpC,iBAAiB;IACjB,6CAAoC;IAApC,oCAAoC;AACxC;AACA;IACI,yCAAwC;IAAxC,wCAAwC;AAC5C;AACA;IACI,oCAAoC;IACpC,WAAW;IACX,6CAAoC;IAApC,oCAAoC;IACpC,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;AACpB;;AAEA,4DAA4D,mBAAmB;IAC3E,oBAAoB;IACpB,sDAA6C;IAA7C,6CAA6C;AACjD;;AAEA,4DAA4D,mBAAmB;IAC3E,oBAAoB;IACpB,sCAA6C;IAA7C,6CAA6C;AACjD",sourcesContent:[`@import "../variables.css";

:root {
    --range-track-color: var(--color-component-background);
    --range-thumb-color: var(--color-component-foreground);
    --range-thumb-highlight: var(--color-component-active);

    --range-track-color-disabled: var(--color-component-background-disabled);
    --range-thumb-color-disabled: var(--color-text-disabled);
}

input[type=range].guify-range {
    position: absolute; /* Gets rid of weird spacing below slider that I can't figure out the source of, seems internal */
    -webkit-appearance: none;
    width: 100%;
    height: var(--size-component-height);
    margin: 0px 0;
    padding: 0;
    display: inline-block;

    /* Fixes for Safari iOS */
    border-radius: 0;
    border: none;
    background-color: transparent;
}

.disabled input[type=range].guify-range {
    pointer-events: none;
}

/* Remove outlines since we'll be adding our own */
input[type=range].guify-range:focus {
    outline: none;
}
input[type=range].guify-range::-moz-focus-outer {
    border: 0;
}

/* Webkit */
input[type=range].guify-range::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--size-component-height);
    cursor: ew-resize;
    background: var(--range-track-color);
}
input[type=range].guify-range::-webkit-slider-thumb {
    height: var(--size-component-height);
    width: 10px;
    background: var(--range-thumb-color);
    cursor: ew-resize;
    -webkit-appearance: none;
    margin-top: 0px;
    border: 0;
}
input[type=range].guify-range:focus::-webkit-slider-runnable-track {
    background: var(--range-thumb-highlight);
    outline: none;
}

.disabled input[type=range].guify-range::-webkit-slider-runnable-track { /* Disabled track */
    pointer-events: none;
    background: var(--range-track-color-disabled);
}

.disabled input[type=range].guify-range::-webkit-slider-thumb { /* Disabled thumb */
    pointer-events: none;
    background: var(--color-text-disabled);
}

/* Gecko */
input[type=range].guify-range::-moz-range-track {
    width: 100%;
    height: var(--size-component-height);
    cursor: ew-resize;
    background: var(--range-track-color);
}
input[type=range].guify-range:focus::-moz-range-track {
    background: var(--range-thumb-highlight);
}
input[type=range].guify-range::-moz-range-thumb {
    height: var(--size-component-height);
    width: 10px;
    background: var(--range-thumb-color);
    cursor: ew-resize;
    border: none;
    border-radius: 0;
}

.disabled input[type=range].guify-range::-moz-range-track { /* Disabled track */
    pointer-events: none;
    background: var(--range-track-color-disabled);
}

.disabled input[type=range].guify-range::-moz-range-thumb { /* Disabled thumb */
    pointer-events: none;
    background: var(--range-thumb-color-disabled);
}`],sourceRoot:""}]);const m=p},247:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-select-dropdown {
    display: inline-block;
    position: absolute;
    width: calc(100% - var(--size-label-width));
    padding-left: 1.5%;
    height: var(--size-component-height);
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance:none;
    appearance: none;
    font-family: inherit;
    background-color: var(--color-component-background);
    color: var(--color-text-secondary);
    box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
}

/* Disable default outline since we're providing our own */
.guify-select-dropdown:focus {
    outline: none;
}
.guify-select-dropdown::-moz-focus-inner {
    border: 0;
}


.guify-select-dropdown:focus,
.guify-select-dropdown:hover {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-select-dropdown::-ms-expand {
    display:none;
}
.guify-select-triangle {
    content: ' ';
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    line-height: var(--size-component-height);
    position: absolute;
    right: 2.5%;
    z-index: 1;
    pointer-events: none;
}

.guify-select-triangle--up {
    bottom: 55%;
    border-bottom: 5px solid var(--color-text-secondary);
    border-top: 0px transparent;
}

.guify-select-triangle--down {
    top: 55%;
    border-top: 5px solid var(--color-text-secondary);
    border-bottom: 0px transparent;
}

.guify-select-triangle--up-highlight {
    border-bottom-color: var(--color-text-hover);
}

.guify-select-triangle--down-highlight {
    border-top-color: var(--color-text-hover);
}

/* Disabled styles */

.disabled .guify-select-dropdown {
    pointer-events: none;
    color: var(--color-text-disabled);
    background-color: var(--color-component-background-disabled);
}

.disabled *[class^="guify-select-triangle"] {
    border-color: var(--color-text-disabled);
}
`,"",{version:3,sources:["webpack://./src/components/public/select.css"],names:[],mappings:"AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,2CAA2C;IAC3C,kBAAkB;IAClB,oCAAoC;IACpC,YAAY;IACZ,gBAAgB;IAChB,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,oBAAoB;IACpB,mDAAmD;IACnD,kCAAkC;IAClC,iCAAiC;IACjC,sCAAsC;IACtC,yCAAyC;AAC7C;;AAEA,0DAA0D;AAC1D;IACI,aAAa;AACjB;AACA;IACI,SAAS;AACb;;;AAGA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,kCAAkC;IAClC,yCAAyC;IACzC,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,oDAAoD;IACpD,2BAA2B;AAC/B;;AAEA;IACI,QAAQ;IACR,iDAAiD;IACjD,8BAA8B;AAClC;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,yCAAyC;AAC7C;;AAEA,oBAAoB;;AAEpB;IACI,oBAAoB;IACpB,iCAAiC;IACjC,4DAA4D;AAChE;;AAEA;IACI,wCAAwC;AAC5C",sourcesContent:[`@import "../variables.css";

.guify-select-dropdown {
    display: inline-block;
    position: absolute;
    width: calc(100% - var(--size-label-width));
    padding-left: 1.5%;
    height: var(--size-component-height);
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance:none;
    appearance: none;
    font-family: inherit;
    background-color: var(--color-component-background);
    color: var(--color-text-secondary);
    box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
}

/* Disable default outline since we're providing our own */
.guify-select-dropdown:focus {
    outline: none;
}
.guify-select-dropdown::-moz-focus-inner {
    border: 0;
}


.guify-select-dropdown:focus,
.guify-select-dropdown:hover {
    color: var(--color-text-hover);
    background-color: var(--color-component-foreground);
}

.guify-select-dropdown::-ms-expand {
    display:none;
}
.guify-select-triangle {
    content: ' ';
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    line-height: var(--size-component-height);
    position: absolute;
    right: 2.5%;
    z-index: 1;
    pointer-events: none;
}

.guify-select-triangle--up {
    bottom: 55%;
    border-bottom: 5px solid var(--color-text-secondary);
    border-top: 0px transparent;
}

.guify-select-triangle--down {
    top: 55%;
    border-top: 5px solid var(--color-text-secondary);
    border-bottom: 0px transparent;
}

.guify-select-triangle--up-highlight {
    border-bottom-color: var(--color-text-hover);
}

.guify-select-triangle--down-highlight {
    border-top-color: var(--color-text-hover);
}

/* Disabled styles */

.disabled .guify-select-dropdown {
    pointer-events: none;
    color: var(--color-text-disabled);
    background-color: var(--color-component-background-disabled);
}

.disabled *[class^="guify-select-triangle"] {
    border-color: var(--color-text-disabled);
}
`],sourceRoot:""}]);const m=p},532:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-text-input {
    position: absolute;
    padding-left: 6px;
    height: var(--size-component-height);
    width: calc(100% - var(--size-label-width));
    border: none;
    background: var(--color-component-background);
    color: var(--color-text-secondary);
    font-family: inherit;
    box-sizing: border-box !important;
    resize: vertical;

    /* Fixes for Safari iOS */
    border-radius: 0;
}

.guify-text-input:focus {
    outline: none;
}

.disabled .guify-text-input {
    pointer-events: none;
    color: var(--color-text-disabled);
    background-color: var(--color-component-background-disabled);
}`,"",{version:3,sources:["webpack://./src/components/public/text.css"],names:[],mappings:"AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,oCAAoC;IACpC,2CAA2C;IAC3C,YAAY;IACZ,6CAA6C;IAC7C,kCAAkC;IAClC,oBAAoB;IACpB,iCAAiC;IACjC,gBAAgB;;IAEhB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,iCAAiC;IACjC,4DAA4D;AAChE",sourcesContent:[`@import "../variables.css";

.guify-text-input {
    position: absolute;
    padding-left: 6px;
    height: var(--size-component-height);
    width: calc(100% - var(--size-label-width));
    border: none;
    background: var(--color-component-background);
    color: var(--color-text-secondary);
    font-family: inherit;
    box-sizing: border-box !important;
    resize: vertical;

    /* Fixes for Safari iOS */
    border-radius: 0;
}

.guify-text-input:focus {
    outline: none;
}

.disabled .guify-text-input {
    pointer-events: none;
    color: var(--color-text-disabled);
    background-color: var(--color-component-background-disabled);
}`],sourceRoot:""}]);const m=p},146:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-title {
    box-sizing: border-box;
    width: 100%;
    display: inline-block;
    height: var(--size-component-height);
    vertical-align: top;
}

.guify-title-text {
    display: inline-block;
    height: var(--size-component-height);
    line-height: var(--size-component-height);
    padding-left: 5px;
    padding-right: 5px;
    background-color: var(--color-text-primary);
    color: var(--color-panel-background);
}

/* Disabled style */

.disabled .guify-title-text {
    background-color: var(--color-text-disabled);
}

/* Add a bit of top margin if immediately after another component */

.guify-component-container > .guify-title {
    margin-top: 0.5em;
}`,"",{version:3,sources:["webpack://./src/components/public/title.css"],names:[],mappings:"AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,qBAAqB;IACrB,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,oCAAoC;IACpC,yCAAyC;IACzC,iBAAiB;IACjB,kBAAkB;IAClB,2CAA2C;IAC3C,oCAAoC;AACxC;;AAEA,mBAAmB;;AAEnB;IACI,4CAA4C;AAChD;;AAEA,mEAAmE;;AAEnE;IACI,iBAAiB;AACrB",sourcesContent:[`@import "../variables.css";

.guify-title {
    box-sizing: border-box;
    width: 100%;
    display: inline-block;
    height: var(--size-component-height);
    vertical-align: top;
}

.guify-title-text {
    display: inline-block;
    height: var(--size-component-height);
    line-height: var(--size-component-height);
    padding-left: 5px;
    padding-right: 5px;
    background-color: var(--color-text-primary);
    color: var(--color-panel-background);
}

/* Disabled style */

.disabled .guify-title-text {
    background-color: var(--color-text-disabled);
}

/* Add a bit of top margin if immediately after another component */

.guify-component-container > .guify-title {
    margin-top: 0.5em;
}`],sourceRoot:""}]);const m=p},72:(s,a,l)=>{l.d(a,{Z:()=>m});var c=l(537),u=l.n(c),h=l(645),d=l.n(h),f=l(19),p=d()(u());p.i(f.Z),p.push([s.id,`.guify-container {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Sub-elements of guify-container should appear over anything else. */
.guify-container > * {
    z-index: 9999;
}

.guify-container, .guify-container * {
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
}

.guify-container-overlay {
    height: 100%;
}

.guify-container-above {
    height: calc(100% + var(--size-menu-bar-height));
    bottom: 0;
}

/* Overlay container when fullscreen */
.guify-fullscreen .guify-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}`,"",{version:3,sources:["webpack://./src/gui.css"],names:[],mappings:"AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,WAAW;IACX,YAAY;AAChB;;AAEA,sEAAsE;AACtE;IACI,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,2BAA2B;IAC3B,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gDAAgD;IAChD,SAAS;AACb;;AAEA,sCAAsC;AACtC;IACI,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;AAChB",sourcesContent:[`@import "./components/variables.css";

.guify-container {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Sub-elements of guify-container should appear over anything else. */
.guify-container > * {
    z-index: 9999;
}

.guify-container, .guify-container * {
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
}

.guify-container-overlay {
    height: 100%;
}

.guify-container-above {
    height: calc(100% + var(--size-menu-bar-height));
    bottom: 0;
}

/* Overlay container when fullscreen */
.guify-fullscreen .guify-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}`],sourceRoot:""}]);const m=p},19:(s,a,l)=>{l.d(a,{Z:()=>f});var c=l(537),u=l.n(c),h=l(645),d=l.n(h)()(u());d.push([s.id,`:root {
    --color-menu-bar-background: "black";
    --color-menu-bar-text: "black";
    --color-panel-background: "black";

    --color-component-background: "black";
    --color-component-background-hover: "black";
    --color-component-background-disabled: "black";
    --color-component-foreground: "black";
    --color-component-active: "black";

    --color-text-primary: "black";
    --color-text-secondary: "black";
    --color-text-hover: "black";
    --color-text-active: "black";
    --color-text-disabled: "black";

    --size-menu-bar-height: 25px;
    --size-component-height: 2rem;
    --size-component-spacing: 5px;
    --size-label-width: 42%;

    --font-family: ui-monospace, monospace;
    --font-height: 11px;
    --font-weight: 400;
}
`,"",{version:3,sources:["webpack://./src/components/variables.css"],names:[],mappings:"AAAA;IACI,oCAAoC;IACpC,8BAA8B;IAC9B,iCAAiC;;IAEjC,qCAAqC;IACrC,2CAA2C;IAC3C,8CAA8C;IAC9C,qCAAqC;IACrC,iCAAiC;;IAEjC,6BAA6B;IAC7B,+BAA+B;IAC/B,2BAA2B;IAC3B,4BAA4B;IAC5B,8BAA8B;;IAE9B,4BAA4B;IAC5B,6BAA6B;IAC7B,6BAA6B;IAC7B,uBAAuB;;IAEvB,sCAAsC;IACtC,mBAAmB;IACnB,kBAAkB;AACtB",sourcesContent:[`:root {
    --color-menu-bar-background: "black";
    --color-menu-bar-text: "black";
    --color-panel-background: "black";

    --color-component-background: "black";
    --color-component-background-hover: "black";
    --color-component-background-disabled: "black";
    --color-component-foreground: "black";
    --color-component-active: "black";

    --color-text-primary: "black";
    --color-text-secondary: "black";
    --color-text-hover: "black";
    --color-text-active: "black";
    --color-text-disabled: "black";

    --size-menu-bar-height: 25px;
    --size-component-height: 2rem;
    --size-component-spacing: 5px;
    --size-label-width: 42%;

    --font-family: ui-monospace, monospace;
    --font-height: 11px;
    --font-weight: 400;
}
`],sourceRoot:""}]);const f=d},645:s=>{s.exports=function(a){var l=[];return l.toString=function(){return this.map(function(c){var u="",h=c[5]!==void 0;return c[4]&&(u+="@supports (".concat(c[4],") {")),c[2]&&(u+="@media ".concat(c[2]," {")),h&&(u+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),u+=a(c),h&&(u+="}"),c[2]&&(u+="}"),c[4]&&(u+="}"),u}).join("")},l.i=function(c,u,h,d,f){typeof c=="string"&&(c=[[null,c,void 0]]);var p={};if(h)for(var m=0;m<this.length;m++){var g=this[m][0];g!=null&&(p[g]=!0)}for(var x=0;x<c.length;x++){var v=[].concat(c[x]);h&&p[v[0]]||(f!==void 0&&(v[5]===void 0||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=f),u&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=u),d&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=d):v[4]="".concat(d)),l.push(v))}},l}},537:s=>{s.exports=function(a){var l=a[1],c=a[3];if(!c)return l;if(typeof btoa=="function"){var u=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),d="/*# ".concat(h," */"),f=c.sources.map(function(p){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(p," */")});return[l].concat(f).concat([d]).join(`
`)}return[l].join(`
`)}},879:(s,a,l)=>{var c=l(236),u=l(189),h={float:"cssFloat"},d=l(379);function f(g,x,v){var A=h[x];if(A===void 0&&(A=function(w){var M=u(w),k=c(M);return h[M]=h[w]=h[k]=k,k}(x)),A){if(v===void 0)return g.style[A];g.style[A]=d(A,v)}}function p(g,x){for(var v in x)x.hasOwnProperty(v)&&f(g,v,x[v])}function m(){arguments.length===2?typeof arguments[1]=="string"?arguments[0].style.cssText=arguments[1]:p(arguments[0],arguments[1]):f(arguments[0],arguments[1],arguments[2])}s.exports=m,s.exports.set=m,s.exports.get=function(g,x){return Array.isArray(x)?x.reduce(function(v,A){return v[A]=f(g,A||""),v},{}):f(g,x||"")}},186:s=>{var a=[],l=[];function c(u,h){if(h=h||{},u===void 0)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var d,f=h.prepend===!0?"prepend":"append",p=h.container!==void 0?h.container:document.querySelector("head"),m=a.indexOf(p);return m===-1&&(m=a.push(p)-1,l[m]={}),l[m]!==void 0&&l[m][f]!==void 0?d=l[m][f]:(d=l[m][f]=function(){var g=document.createElement("style");return g.setAttribute("type","text/css"),g}(),f==="prepend"?p.insertBefore(d,p.childNodes[0]):p.appendChild(d)),u.charCodeAt(0)===65279&&(u=u.substr(1,u.length)),d.styleSheet?d.styleSheet.cssText+=u:d.textContent+=u,d}s.exports=c,s.exports.insertCss=c},114:function(s,a){(function(l){function c(u){return typeof u=="number"&&!isNaN(u)||!!(u=(u||"").toString().trim())&&!isNaN(u)}s.exports&&(a=s.exports=c),a.isNumeric=c})()},236:s=>{var a=null,l=["Webkit","Moz","O","ms"];s.exports=function(c){a||(a=document.createElement("div"));var u=a.style;if(c in u)return c;for(var h=c.charAt(0).toUpperCase()+c.slice(1),d=l.length;d>=0;d--){var f=l[d]+h;if(f in u)return f}return!1}},577:s=>{(function(){var a=typeof window<"u"&&window.document!==void 0?window.document:{},l=s.exports,c=function(){for(var d,f=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],p=0,m=f.length,g={};p<m;p++)if((d=f[p])&&d[1]in a){for(p=0;p<d.length;p++)g[f[0][p]]=d[p];return g}return!1}(),u={change:c.fullscreenchange,error:c.fullscreenerror},h={request:function(d){return new Promise(function(f,p){var m=function(){this.off("change",m),f()}.bind(this);this.on("change",m),d=d||a.documentElement,Promise.resolve(d[c.requestFullscreen]()).catch(p)}.bind(this))},exit:function(){return new Promise(function(d,f){if(this.isFullscreen){var p=function(){this.off("change",p),d()}.bind(this);this.on("change",p),Promise.resolve(a[c.exitFullscreen]()).catch(f)}else d()}.bind(this))},toggle:function(d){return this.isFullscreen?this.exit():this.request(d)},onchange:function(d){this.on("change",d)},onerror:function(d){this.on("error",d)},on:function(d,f){var p=u[d];p&&a.addEventListener(p,f,!1)},off:function(d,f){var p=u[d];p&&a.removeEventListener(p,f,!1)},raw:c};c?(Object.defineProperties(h,{isFullscreen:{get:function(){return!!a[c.fullscreenElement]}},element:{enumerable:!0,get:function(){return a[c.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return!!a[c.fullscreenEnabled]}}}),l?s.exports=h:window.screenfull=h):l?s.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}})()},994:s=>{var a=[];function l(h){for(var d=-1,f=0;f<a.length;f++)if(a[f].identifier===h){d=f;break}return d}function c(h,d){for(var f={},p=[],m=0;m<h.length;m++){var g=h[m],x=d.base?g[0]+d.base:g[0],v=f[x]||0,A="".concat(x," ").concat(v);f[x]=v+1;var w=l(A),M={css:g[1],media:g[2],sourceMap:g[3],supports:g[4],layer:g[5]};if(w!==-1)a[w].references++,a[w].updater(M);else{var k=u(M,d);d.byIndex=m,a.splice(m,0,{identifier:A,updater:k,references:1})}p.push(A)}return p}function u(h,d){var f=d.domAPI(d);return f.update(h),function(p){if(p){if(p.css===h.css&&p.media===h.media&&p.sourceMap===h.sourceMap&&p.supports===h.supports&&p.layer===h.layer)return;f.update(h=p)}else f.remove()}}s.exports=function(h,d){var f=c(h=h||[],d=d||{});return function(p){p=p||[];for(var m=0;m<f.length;m++){var g=l(f[m]);a[g].references--}for(var x=c(p,d),v=0;v<f.length;v++){var A=l(f[v]);a[A].references===0&&(a[A].updater(),a.splice(A,1))}f=x}}},569:s=>{var a={};s.exports=function(l,c){var u=function(h){if(a[h]===void 0){var d=document.querySelector(h);if(window.HTMLIFrameElement&&d instanceof window.HTMLIFrameElement)try{d=d.contentDocument.head}catch{d=null}a[h]=d}return a[h]}(l);if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(c)}},216:s=>{s.exports=function(a){var l=document.createElement("style");return a.setAttributes(l,a.attributes),a.insert(l,a.options),l}},565:(s,a,l)=>{s.exports=function(c){var u=l.nc;u&&c.setAttribute("nonce",u)}},795:s=>{s.exports=function(a){var l=a.insertStyleElement(a);return{update:function(c){(function(u,h,d){var f="";d.supports&&(f+="@supports (".concat(d.supports,") {")),d.media&&(f+="@media ".concat(d.media," {"));var p=d.layer!==void 0;p&&(f+="@layer".concat(d.layer.length>0?" ".concat(d.layer):""," {")),f+=d.css,p&&(f+="}"),d.media&&(f+="}"),d.supports&&(f+="}");var m=d.sourceMap;m&&typeof btoa<"u"&&(f+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(m))))," */")),h.styleTagTransform(f,u,h.options)})(l,a,c)},remove:function(){(function(c){if(c.parentNode===null)return!1;c.parentNode.removeChild(c)})(l)}}}},589:s=>{s.exports=function(a,l){if(l.styleSheet)l.styleSheet.cssText=a;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(a))}}},621:(s,a,l)=>{var c;(function(u){var h=/^\s+/,d=/\s+$/,f=0,p=u.round,m=u.min,g=u.max,x=u.random;function v(B,z){if(z=z||{},(B=B||"")instanceof v)return B;if(!(this instanceof v))return new v(B,z);var H=function(Y){var fe,Fe,ke,I={r:0,g:0,b:0},E=1,Q=null,ve=null,Te=null,Pe=!1,Ne=!1;return typeof Y=="string"&&(Y=function(T){T=T.replace(h,"").replace(d,"").toLowerCase();var X,Me=!1;if(ce[T])T=ce[T],Me=!0;else if(T=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(X=se.rgb.exec(T))?{r:X[1],g:X[2],b:X[3]}:(X=se.rgba.exec(T))?{r:X[1],g:X[2],b:X[3],a:X[4]}:(X=se.hsl.exec(T))?{h:X[1],s:X[2],l:X[3]}:(X=se.hsla.exec(T))?{h:X[1],s:X[2],l:X[3],a:X[4]}:(X=se.hsv.exec(T))?{h:X[1],s:X[2],v:X[3]}:(X=se.hsva.exec(T))?{h:X[1],s:X[2],v:X[3],a:X[4]}:(X=se.hex8.exec(T))?{r:Re(X[1]),g:Re(X[2]),b:Re(X[3]),a:qe(X[4]),format:Me?"name":"hex8"}:(X=se.hex6.exec(T))?{r:Re(X[1]),g:Re(X[2]),b:Re(X[3]),format:Me?"name":"hex"}:(X=se.hex4.exec(T))?{r:Re(X[1]+""+X[1]),g:Re(X[2]+""+X[2]),b:Re(X[3]+""+X[3]),a:qe(X[4]+""+X[4]),format:Me?"name":"hex8"}:!!(X=se.hex3.exec(T))&&{r:Re(X[1]+""+X[1]),g:Re(X[2]+""+X[2]),b:Re(X[3]+""+X[3]),format:Me?"name":"hex"}}(Y)),typeof Y=="object"&&(ge(Y.r)&&ge(Y.g)&&ge(Y.b)?(fe=Y.r,Fe=Y.g,ke=Y.b,I={r:255*pe(fe,255),g:255*pe(Fe,255),b:255*pe(ke,255)},Pe=!0,Ne=String(Y.r).substr(-1)==="%"?"prgb":"rgb"):ge(Y.h)&&ge(Y.s)&&ge(Y.v)?(Q=Je(Y.s),ve=Je(Y.v),I=function(T,X,Me){T=6*pe(T,360),X=pe(X,100),Me=pe(Me,100);var we=u.floor(T),N=T-we,ye=Me*(1-X),be=Me*(1-N*X),Ue=Me*(1-(1-N)*X),Ee=we%6;return{r:255*[Me,be,ye,ye,Ue,Me][Ee],g:255*[Ue,Me,Me,be,ye,ye][Ee],b:255*[ye,ye,Ue,Me,Me,be][Ee]}}(Y.h,Q,ve),Pe=!0,Ne="hsv"):ge(Y.h)&&ge(Y.s)&&ge(Y.l)&&(Q=Je(Y.s),Te=Je(Y.l),I=function(T,X,Me){var we,N,ye;function be(ze,Ce,Ge){return Ge<0&&(Ge+=1),Ge>1&&(Ge-=1),Ge<1/6?ze+6*(Ce-ze)*Ge:Ge<.5?Ce:Ge<2/3?ze+(Ce-ze)*(2/3-Ge)*6:ze}if(T=pe(T,360),X=pe(X,100),Me=pe(Me,100),X===0)we=N=ye=Me;else{var Ue=Me<.5?Me*(1+X):Me+X-Me*X,Ee=2*Me-Ue;we=be(Ee,Ue,T+1/3),N=be(Ee,Ue,T),ye=be(Ee,Ue,T-1/3)}return{r:255*we,g:255*N,b:255*ye}}(Y.h,Q,Te),Pe=!0,Ne="hsl"),Y.hasOwnProperty("a")&&(E=Y.a)),E=de(E),{ok:Pe,format:Y.format||Ne,r:m(255,g(I.r,0)),g:m(255,g(I.g,0)),b:m(255,g(I.b,0)),a:E}}(B);this._originalInput=B,this._r=H.r,this._g=H.g,this._b=H.b,this._a=H.a,this._roundA=p(100*this._a)/100,this._format=z.format||H.format,this._gradientType=z.gradientType,this._r<1&&(this._r=p(this._r)),this._g<1&&(this._g=p(this._g)),this._b<1&&(this._b=p(this._b)),this._ok=H.ok,this._tc_id=f++}function A(B,z,H){B=pe(B,255),z=pe(z,255),H=pe(H,255);var Y,fe,Fe=g(B,z,H),ke=m(B,z,H),I=(Fe+ke)/2;if(Fe==ke)Y=fe=0;else{var E=Fe-ke;switch(fe=I>.5?E/(2-Fe-ke):E/(Fe+ke),Fe){case B:Y=(z-H)/E+(z<H?6:0);break;case z:Y=(H-B)/E+2;break;case H:Y=(B-z)/E+4}Y/=6}return{h:Y,s:fe,l:I}}function w(B,z,H){B=pe(B,255),z=pe(z,255),H=pe(H,255);var Y,fe,Fe=g(B,z,H),ke=m(B,z,H),I=Fe,E=Fe-ke;if(fe=Fe===0?0:E/Fe,Fe==ke)Y=0;else{switch(Fe){case B:Y=(z-H)/E+(z<H?6:0);break;case z:Y=(H-B)/E+2;break;case H:Y=(B-z)/E+4}Y/=6}return{h:Y,s:fe,v:I}}function M(B,z,H,Y){var fe=[ne(p(B).toString(16)),ne(p(z).toString(16)),ne(p(H).toString(16))];return Y&&fe[0].charAt(0)==fe[0].charAt(1)&&fe[1].charAt(0)==fe[1].charAt(1)&&fe[2].charAt(0)==fe[2].charAt(1)?fe[0].charAt(0)+fe[1].charAt(0)+fe[2].charAt(0):fe.join("")}function k(B,z,H,Y){return[ne(Xe(Y)),ne(p(B).toString(16)),ne(p(z).toString(16)),ne(p(H).toString(16))].join("")}function U(B,z){z=z===0?0:z||10;var H=v(B).toHsl();return H.s-=z/100,H.s=je(H.s),v(H)}function V(B,z){z=z===0?0:z||10;var H=v(B).toHsl();return H.s+=z/100,H.s=je(H.s),v(H)}function oe(B){return v(B).desaturate(100)}function j(B,z){z=z===0?0:z||10;var H=v(B).toHsl();return H.l+=z/100,H.l=je(H.l),v(H)}function C(B,z){z=z===0?0:z||10;var H=v(B).toRgb();return H.r=g(0,m(255,H.r-p(-z/100*255))),H.g=g(0,m(255,H.g-p(-z/100*255))),H.b=g(0,m(255,H.b-p(-z/100*255))),v(H)}function O(B,z){z=z===0?0:z||10;var H=v(B).toHsl();return H.l-=z/100,H.l=je(H.l),v(H)}function re(B,z){var H=v(B).toHsl(),Y=(H.h+z)%360;return H.h=Y<0?360+Y:Y,v(H)}function G(B){var z=v(B).toHsl();return z.h=(z.h+180)%360,v(z)}function q(B){var z=v(B).toHsl(),H=z.h;return[v(B),v({h:(H+120)%360,s:z.s,l:z.l}),v({h:(H+240)%360,s:z.s,l:z.l})]}function Z(B){var z=v(B).toHsl(),H=z.h;return[v(B),v({h:(H+90)%360,s:z.s,l:z.l}),v({h:(H+180)%360,s:z.s,l:z.l}),v({h:(H+270)%360,s:z.s,l:z.l})]}function te(B){var z=v(B).toHsl(),H=z.h;return[v(B),v({h:(H+72)%360,s:z.s,l:z.l}),v({h:(H+216)%360,s:z.s,l:z.l})]}function W(B,z,H){z=z||6,H=H||30;var Y=v(B).toHsl(),fe=360/H,Fe=[v(B)];for(Y.h=(Y.h-(fe*z>>1)+720)%360;--z;)Y.h=(Y.h+fe)%360,Fe.push(v(Y));return Fe}function ae(B,z){z=z||6;for(var H=v(B).toHsv(),Y=H.h,fe=H.s,Fe=H.v,ke=[],I=1/z;z--;)ke.push(v({h:Y,s:fe,v:Fe})),Fe=(Fe+I)%1;return ke}v.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var B=this.toRgb();return(299*B.r+587*B.g+114*B.b)/1e3},getLuminance:function(){var B,z,H,Y=this.toRgb();return B=Y.r/255,z=Y.g/255,H=Y.b/255,.2126*(B<=.03928?B/12.92:u.pow((B+.055)/1.055,2.4))+.7152*(z<=.03928?z/12.92:u.pow((z+.055)/1.055,2.4))+.0722*(H<=.03928?H/12.92:u.pow((H+.055)/1.055,2.4))},setAlpha:function(B){return this._a=de(B),this._roundA=p(100*this._a)/100,this},toHsv:function(){var B=w(this._r,this._g,this._b);return{h:360*B.h,s:B.s,v:B.v,a:this._a}},toHsvString:function(){var B=w(this._r,this._g,this._b),z=p(360*B.h),H=p(100*B.s),Y=p(100*B.v);return this._a==1?"hsv("+z+", "+H+"%, "+Y+"%)":"hsva("+z+", "+H+"%, "+Y+"%, "+this._roundA+")"},toHsl:function(){var B=A(this._r,this._g,this._b);return{h:360*B.h,s:B.s,l:B.l,a:this._a}},toHslString:function(){var B=A(this._r,this._g,this._b),z=p(360*B.h),H=p(100*B.s),Y=p(100*B.l);return this._a==1?"hsl("+z+", "+H+"%, "+Y+"%)":"hsla("+z+", "+H+"%, "+Y+"%, "+this._roundA+")"},toHex:function(B){return M(this._r,this._g,this._b,B)},toHexString:function(B){return"#"+this.toHex(B)},toHex8:function(B){return function(z,H,Y,fe,Fe){var ke=[ne(p(z).toString(16)),ne(p(H).toString(16)),ne(p(Y).toString(16)),ne(Xe(fe))];return Fe&&ke[0].charAt(0)==ke[0].charAt(1)&&ke[1].charAt(0)==ke[1].charAt(1)&&ke[2].charAt(0)==ke[2].charAt(1)&&ke[3].charAt(0)==ke[3].charAt(1)?ke[0].charAt(0)+ke[1].charAt(0)+ke[2].charAt(0)+ke[3].charAt(0):ke.join("")}(this._r,this._g,this._b,this._a,B)},toHex8String:function(B){return"#"+this.toHex8(B)},toRgb:function(){return{r:p(this._r),g:p(this._g),b:p(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+p(this._r)+", "+p(this._g)+", "+p(this._b)+")":"rgba("+p(this._r)+", "+p(this._g)+", "+p(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:p(100*pe(this._r,255))+"%",g:p(100*pe(this._g,255))+"%",b:p(100*pe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+p(100*pe(this._r,255))+"%, "+p(100*pe(this._g,255))+"%, "+p(100*pe(this._b,255))+"%)":"rgba("+p(100*pe(this._r,255))+"%, "+p(100*pe(this._g,255))+"%, "+p(100*pe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(xe[M(this._r,this._g,this._b,!0)]||!1)},toFilter:function(B){var z="#"+k(this._r,this._g,this._b,this._a),H=z,Y=this._gradientType?"GradientType = 1, ":"";if(B){var fe=v(B);H="#"+k(fe._r,fe._g,fe._b,fe._a)}return"progid:DXImageTransform.Microsoft.gradient("+Y+"startColorstr="+z+",endColorstr="+H+")"},toString:function(B){var z=!!B;B=B||this._format;var H=!1,Y=this._a<1&&this._a>=0;return z||!Y||B!=="hex"&&B!=="hex6"&&B!=="hex3"&&B!=="hex4"&&B!=="hex8"&&B!=="name"?(B==="rgb"&&(H=this.toRgbString()),B==="prgb"&&(H=this.toPercentageRgbString()),B!=="hex"&&B!=="hex6"||(H=this.toHexString()),B==="hex3"&&(H=this.toHexString(!0)),B==="hex4"&&(H=this.toHex8String(!0)),B==="hex8"&&(H=this.toHex8String()),B==="name"&&(H=this.toName()),B==="hsl"&&(H=this.toHslString()),B==="hsv"&&(H=this.toHsvString()),H||this.toHexString()):B==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return v(this.toString())},_applyModification:function(B,z){var H=B.apply(null,[this].concat([].slice.call(z)));return this._r=H._r,this._g=H._g,this._b=H._b,this.setAlpha(H._a),this},lighten:function(){return this._applyModification(j,arguments)},brighten:function(){return this._applyModification(C,arguments)},darken:function(){return this._applyModification(O,arguments)},desaturate:function(){return this._applyModification(U,arguments)},saturate:function(){return this._applyModification(V,arguments)},greyscale:function(){return this._applyModification(oe,arguments)},spin:function(){return this._applyModification(re,arguments)},_applyCombination:function(B,z){return B.apply(null,[this].concat([].slice.call(z)))},analogous:function(){return this._applyCombination(W,arguments)},complement:function(){return this._applyCombination(G,arguments)},monochromatic:function(){return this._applyCombination(ae,arguments)},splitcomplement:function(){return this._applyCombination(te,arguments)},triad:function(){return this._applyCombination(q,arguments)},tetrad:function(){return this._applyCombination(Z,arguments)}},v.fromRatio=function(B,z){if(typeof B=="object"){var H={};for(var Y in B)B.hasOwnProperty(Y)&&(H[Y]=Y==="a"?B[Y]:Je(B[Y]));B=H}return v(B,z)},v.equals=function(B,z){return!(!B||!z)&&v(B).toRgbString()==v(z).toRgbString()},v.random=function(){return v.fromRatio({r:x(),g:x(),b:x()})},v.mix=function(B,z,H){H=H===0?0:H||50;var Y=v(B).toRgb(),fe=v(z).toRgb(),Fe=H/100;return v({r:(fe.r-Y.r)*Fe+Y.r,g:(fe.g-Y.g)*Fe+Y.g,b:(fe.b-Y.b)*Fe+Y.b,a:(fe.a-Y.a)*Fe+Y.a})},v.readability=function(B,z){var H=v(B),Y=v(z);return(u.max(H.getLuminance(),Y.getLuminance())+.05)/(u.min(H.getLuminance(),Y.getLuminance())+.05)},v.isReadable=function(B,z,H){var Y,fe,Fe,ke,I,E=v.readability(B,z);switch(fe=!1,(Fe=H,(ke=((Fe=Fe||{level:"AA",size:"small"}).level||"AA").toUpperCase())!=="AA"&&ke!=="AAA"&&(ke="AA"),(I=(Fe.size||"small").toLowerCase())!=="small"&&I!=="large"&&(I="small"),Y={level:ke,size:I}).level+Y.size){case"AAsmall":case"AAAlarge":fe=E>=4.5;break;case"AAlarge":fe=E>=3;break;case"AAAsmall":fe=E>=7}return fe},v.mostReadable=function(B,z,H){var Y,fe,Fe,ke,I=null,E=0;fe=(H=H||{}).includeFallbackColors,Fe=H.level,ke=H.size;for(var Q=0;Q<z.length;Q++)(Y=v.readability(B,z[Q]))>E&&(E=Y,I=v(z[Q]));return v.isReadable(B,I,{level:Fe,size:ke})||!fe?I:(H.includeFallbackColors=!1,v.mostReadable(B,["#fff","#000"],H))};var ce=v.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},xe=v.hexNames=function(B){var z={};for(var H in B)B.hasOwnProperty(H)&&(z[B[H]]=H);return z}(ce);function de(B){return B=parseFloat(B),(isNaN(B)||B<0||B>1)&&(B=1),B}function pe(B,z){(function(Y){return typeof Y=="string"&&Y.indexOf(".")!=-1&&parseFloat(Y)===1})(B)&&(B="100%");var H=function(Y){return typeof Y=="string"&&Y.indexOf("%")!=-1}(B);return B=m(z,g(0,parseFloat(B))),H&&(B=parseInt(B*z,10)/100),u.abs(B-z)<1e-6?1:B%z/parseFloat(z)}function je(B){return m(1,g(0,B))}function Re(B){return parseInt(B,16)}function ne(B){return B.length==1?"0"+B:""+B}function Je(B){return B<=1&&(B=100*B+"%"),B}function Xe(B){return u.round(255*parseFloat(B)).toString(16)}function qe(B){return Re(B)/255}var me,Ze,K,se=(Ze="[\\s|\\(]+("+(me="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+me+")[,|\\s]+("+me+")\\s*\\)?",K="[\\s|\\(]+("+me+")[,|\\s]+("+me+")[,|\\s]+("+me+")[,|\\s]+("+me+")\\s*\\)?",{CSS_UNIT:new RegExp(me),rgb:new RegExp("rgb"+Ze),rgba:new RegExp("rgba"+K),hsl:new RegExp("hsl"+Ze),hsla:new RegExp("hsla"+K),hsv:new RegExp("hsv"+Ze),hsva:new RegExp("hsva"+K),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ge(B){return!!se.CSS_UNIT.exec(B)}s.exports?s.exports=v:(c=function(){return v}.call(a,l,a,s))===void 0||(s.exports=c)})(Math)},189:(s,a,l)=>{var c=l(966);s.exports=function(u){return c(u).replace(/\s(\w)/g,function(h,d){return d.toUpperCase()})}},788:s=>{s.exports=function(d){return a.test(d)?d.toLowerCase():l.test(d)?(function(f){return f.replace(u,function(p,m){return m?" "+m:""})}(d)||d).toLowerCase():c.test(d)?function(f){return f.replace(h,function(p,m,g){return m+" "+g.toLowerCase().split("").join(" ")})}(d).toLowerCase():d.toLowerCase()};var a=/\s/,l=/(_|-|\.|:)/,c=/([a-z][A-Z]|[A-Z][a-z])/,u=/[\W_]+(.|$)/g,h=/(.)([A-Z]+)/g},966:(s,a,l)=>{var c=l(788);s.exports=function(u){return c(u).replace(/[\W_]+(.|$)/g,function(h,d){return d?" "+d:""}).trim()}},877:(s,a,l)=>{var c=l(570),u=l(171),h=u;h.v1=c,h.v4=u,s.exports=h},327:s=>{for(var a=[],l=0;l<256;++l)a[l]=(l+256).toString(16).substr(1);s.exports=function(c,u){var h=u||0,d=a;return[d[c[h++]],d[c[h++]],d[c[h++]],d[c[h++]],"-",d[c[h++]],d[c[h++]],"-",d[c[h++]],d[c[h++]],"-",d[c[h++]],d[c[h++]],"-",d[c[h++]],d[c[h++]],d[c[h++]],d[c[h++]],d[c[h++]],d[c[h++]]].join("")}},217:s=>{var a=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof window.msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto);if(a){var l=new Uint8Array(16);s.exports=function(){return a(l),l}}else{var c=new Array(16);s.exports=function(){for(var u,h=0;h<16;h++)!(3&h)&&(u=4294967296*Math.random()),c[h]=u>>>((3&h)<<3)&255;return c}}},570:(s,a,l)=>{var c,u,h=l(217),d=l(327),f=0,p=0;s.exports=function(m,g,x){var v=g&&x||0,A=g||[],w=(m=m||{}).node||c,M=m.clockseq!==void 0?m.clockseq:u;if(w==null||M==null){var k=h();w==null&&(w=c=[1|k[0],k[1],k[2],k[3],k[4],k[5]]),M==null&&(M=u=16383&(k[6]<<8|k[7]))}var U=m.msecs!==void 0?m.msecs:new Date().getTime(),V=m.nsecs!==void 0?m.nsecs:p+1,oe=U-f+(V-p)/1e4;if(oe<0&&m.clockseq===void 0&&(M=M+1&16383),(oe<0||U>f)&&m.nsecs===void 0&&(V=0),V>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=U,p=V,u=M;var j=(1e4*(268435455&(U+=122192928e5))+V)%4294967296;A[v++]=j>>>24&255,A[v++]=j>>>16&255,A[v++]=j>>>8&255,A[v++]=255&j;var C=U/4294967296*1e4&268435455;A[v++]=C>>>8&255,A[v++]=255&C,A[v++]=C>>>24&15|16,A[v++]=C>>>16&255,A[v++]=M>>>8|128,A[v++]=255&M;for(var O=0;O<6;++O)A[v+O]=w[O];return g||d(A)}},171:(s,a,l)=>{var c=l(217),u=l(327);s.exports=function(h,d,f){var p=d&&f||0;typeof h=="string"&&(d=h==="binary"?new Array(16):null,h=null);var m=(h=h||{}).random||(h.rng||c)();if(m[6]=15&m[6]|64,m[8]=63&m[8]|128,d)for(var g=0;g<16;++g)d[p+g]=m[g];return d||u(m)}},75:function(s,a,l){var c;(function(u){function h(){}var d=h.prototype,f=u.EventEmitter;function p(x,v){for(var A=x.length;A--;)if(x[A].listener===v)return A;return-1}function m(x){return function(){return this[x].apply(this,arguments)}}function g(x){return typeof x=="function"||x instanceof RegExp||!(!x||typeof x!="object")&&g(x.listener)}d.getListeners=function(x){var v,A,w=this._getEvents();if(x instanceof RegExp)for(A in v={},w)w.hasOwnProperty(A)&&x.test(A)&&(v[A]=w[A]);else v=w[x]||(w[x]=[]);return v},d.flattenListeners=function(x){var v,A=[];for(v=0;v<x.length;v+=1)A.push(x[v].listener);return A},d.getListenersAsObject=function(x){var v,A=this.getListeners(x);return A instanceof Array&&((v={})[x]=A),v||A},d.addListener=function(x,v){if(!g(v))throw new TypeError("listener must be a function");var A,w=this.getListenersAsObject(x),M=typeof v=="object";for(A in w)w.hasOwnProperty(A)&&p(w[A],v)===-1&&w[A].push(M?v:{listener:v,once:!1});return this},d.on=m("addListener"),d.addOnceListener=function(x,v){return this.addListener(x,{listener:v,once:!0})},d.once=m("addOnceListener"),d.defineEvent=function(x){return this.getListeners(x),this},d.defineEvents=function(x){for(var v=0;v<x.length;v+=1)this.defineEvent(x[v]);return this},d.removeListener=function(x,v){var A,w,M=this.getListenersAsObject(x);for(w in M)M.hasOwnProperty(w)&&(A=p(M[w],v))!==-1&&M[w].splice(A,1);return this},d.off=m("removeListener"),d.addListeners=function(x,v){return this.manipulateListeners(!1,x,v)},d.removeListeners=function(x,v){return this.manipulateListeners(!0,x,v)},d.manipulateListeners=function(x,v,A){var w,M,k=x?this.removeListener:this.addListener,U=x?this.removeListeners:this.addListeners;if(typeof v!="object"||v instanceof RegExp)for(w=A.length;w--;)k.call(this,v,A[w]);else for(w in v)v.hasOwnProperty(w)&&(M=v[w])&&(typeof M=="function"?k.call(this,w,M):U.call(this,w,M));return this},d.removeEvent=function(x){var v,A=typeof x,w=this._getEvents();if(A==="string")delete w[x];else if(x instanceof RegExp)for(v in w)w.hasOwnProperty(v)&&x.test(v)&&delete w[v];else delete this._events;return this},d.removeAllListeners=m("removeEvent"),d.emitEvent=function(x,v){var A,w,M,k,U=this.getListenersAsObject(x);for(k in U)if(U.hasOwnProperty(k))for(A=U[k].slice(0),M=0;M<A.length;M++)(w=A[M]).once===!0&&this.removeListener(x,w.listener),w.listener.apply(this,v||[])===this._getOnceReturnValue()&&this.removeListener(x,w.listener);return this},d.trigger=m("emitEvent"),d.emit=function(x){var v=Array.prototype.slice.call(arguments,1);return this.emitEvent(x,v)},d.setOnceReturnValue=function(x){return this._onceReturnValue=x,this},d._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},d._getEvents=function(){return this._events||(this._events={})},h.noConflict=function(){return u.EventEmitter=f,h},(c=function(){return h}.call(u,l,u,s))===void 0||(s.exports=c)})(typeof window<"u"?window:this||{})}},n={};function i(s){var a=n[s];if(a!==void 0)return a.exports;var l=n[s]={id:s,exports:{}};return t[s].call(l.exports,l,l.exports,i),l.exports}i.n=s=>{var a=s&&s.__esModule?()=>s.default:()=>s;return i.d(a,{a}),a},i.d=(s,a)=>{for(var l in a)i.o(a,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:a[l]})},i.o=(s,a)=>Object.prototype.hasOwnProperty.call(s,a),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var r={};return(()=>{i.r(r),i.d(r,{guify:()=>gd});var s=i(879),a=i.n(s),l=i(764),c=i.n(l);function u(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}var h=function(){function F(_){(function(_e,ee){if(!(_e instanceof ee))throw new TypeError("Cannot call a class as a function")})(this,F);var he=c()[_];he===void 0&&(console.error("There is no theme preset with the name '".concat(_,"'! Defaulting to dark theme.")),he=c().dark),Object.assign(this,d,he)}var b,P;return b=F,(P=[{key:"Apply",value:function(){console.log(this);var _=document.documentElement;_.style.setProperty("--color-menu-bar-background",this.colors.menuBarBackground),_.style.setProperty("--color-menu-bar-text",this.colors.menuBarText),_.style.setProperty("--color-panel-background",this.colors.panelBackground),_.style.setProperty("--color-component-background",this.colors.componentBackground),_.style.setProperty("--color-component-background-hover",this.colors.componentBackgroundHover),_.style.setProperty("--color-component-background-disabled",this.colors.componentBackgroundDisabled),_.style.setProperty("--color-component-foreground",this.colors.componentForeground),_.style.setProperty("--color-component-active",this.colors.componentActive),_.style.setProperty("--color-text-primary",this.colors.textPrimary),_.style.setProperty("--color-text-secondary",this.colors.textSecondary),_.style.setProperty("--color-text-hover",this.colors.textHover),_.style.setProperty("--color-text-active",this.colors.textActive),_.style.setProperty("--color-text-disabled",this.colors.textDisabled),_.style.setProperty("--size-menu-bar-height",this.sizing.menuBarHeight),_.style.setProperty("--size-component-height",this.sizing.componentHeight),_.style.setProperty("--size-component-spacing",this.sizing.componentSpacing),_.style.setProperty("--size-label-width",this.sizing.labelWidth),_.style.setProperty("--font-family",this.font.fontFamily),_.style.setProperty("--font-size",this.font.fontSize),_.style.setProperty("--font-weight",this.font.fontWeight),_.style.setProperty("--font-family-for-input",this.font.inputFontFamily)}}])&&u(b.prototype,P),F}(),d={name:"BaseTheme",colors:{menuBarBackground:"black",menuBarText:"black",panelBackground:"black",componentBackground:"black",componentBackgroundHover:"black",componentBackgroundDisabled:"black",componentForeground:"black",componentActive:"black",textPrimary:"black",textSecondary:"black",textHover:"black",textActive:"black",textDisabled:"black"},sizing:{menuBarHeight:"25px",componentHeight:"20px",componentSpacing:"5px",labelWidth:"42%"},font:{fontFamily:"'Hack', ui-monospace, monospace",fontSize:"11px",fontWeight:"400",inputFontFamily:"'Hack', ui-monospace, monospace"}},f=i(994),p=i.n(f),m=i(795),g=i.n(m),x=i(569),v=i.n(x),A=i(565),w=i.n(A),M=i(216),k=i.n(M),U=i(589),V=i.n(U),oe=i(72),j={};j.styleTagTransform=V(),j.setAttributes=w(),j.insert=v().bind(null,"head"),j.domAPI=g(),j.insertStyleElement=k(),p()(oe.Z,j),oe.Z&&oe.Z.locals&&oe.Z.locals;var C=i(75),O=i.n(C),re=i(877),G=i(54),q={};q.styleTagTransform=V(),q.setAttributes=w(),q.insert=v().bind(null,"head"),q.domAPI=g(),q.insertStyleElement=k(),p()(G.Z,q),G.Z&&G.Z.locals&&G.Z.locals;const Z=function(F,b,P){var _=F.appendChild(document.createElement("div"));return _.classList.add("guify-component-container"),_};function te(F){return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},te(F)}function W(F,b){if(!(F instanceof b))throw new TypeError("Cannot call a class as a function")}function ae(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function ce(F,b){return ce=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},ce(F,b)}function xe(F,b){if(b&&(te(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function de(F){return de=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},de(F)}var pe=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&ce(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=de(_);if(he){var Ae=de(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return xe(this,D)});function ee(D,S,Ae){var y,Ie=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3];return W(this,ee),(y=_e.call(this)).root=D,y.opts=S,y.theme=Ae,y.uuid=(0,re.v4)(),Ie&&(y.container=Z(D,S.label)),y.SetEnabled(S.enabled||!0),y}return b=ee,(P=[{key:"SetEnabled",value:function(D){var S,Ae;this.enabled=D,D?(S=this.container)===null||S===void 0||S.classList.remove("disabled"):(Ae=this.container)===null||Ae===void 0||Ae.classList.add("disabled")}},{key:"Remove",value:function(){this.container&&this.container.parentNode.removeChild(this.container)}}])&&ae(b.prototype,P),ee}(O()),je=i(146),Re={};function ne(F){return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},ne(F)}function Je(F,b){return Je=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},Je(F,b)}function Xe(F,b){if(b&&(ne(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function qe(F){return qe=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},qe(F)}Re.styleTagTransform=V(),Re.setAttributes=w(),Re.insert=v().bind(null,"head"),Re.domAPI=g(),Re.insertStyleElement=k(),p()(je.Z,Re),je.Z&&je.Z.locals&&je.Z.locals;var me=function(F){(function(_e,ee){if(typeof ee!="function"&&ee!==null)throw new TypeError("Super expression must either be null or a function");_e.prototype=Object.create(ee&&ee.prototype,{constructor:{value:_e,writable:!0,configurable:!0}}),ee&&Je(_e,ee)})(he,F);var b,P,_=(b=he,P=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var _e,ee=qe(b);if(P){var D=qe(this).constructor;_e=Reflect.construct(ee,arguments,D)}else _e=ee.apply(this,arguments);return Xe(this,_e)});function he(_e,ee,D){var S;(function(Ie,He){if(!(Ie instanceof He))throw new TypeError("Cannot call a class as a function")})(this,he);var Ae=(S=_.call(this,_e,ee,D)).container.appendChild(document.createElement("div"));Ae.classList.add("guify-title");var y=Ae.appendChild(document.createElement("div"));return y.classList.add("guify-title-text"),y.innerHTML="&#9632; ".concat(ee.label," &#9632;"),S}return he}(pe),Ze=i(114),K=i.n(Ze),se=i(115),ge={};ge.styleTagTransform=V(),ge.setAttributes=w(),ge.insert=v().bind(null,"head"),ge.domAPI=g(),ge.insertStyleElement=k(),p()(se.Z,ge),se.Z&&se.Z.locals&&se.Z.locals;var B=i(142),z={};z.styleTagTransform=V(),z.setAttributes=w(),z.insert=v().bind(null,"head"),z.domAPI=g(),z.insertStyleElement=k(),p()(B.Z,z),B.Z&&B.Z.locals&&B.Z.locals;const H=function(F,b,P){var _=F.appendChild(document.createElement("div"));return _.classList.add("guify-component-label"),_.innerHTML=b,_};var Y=i(643),fe={};fe.styleTagTransform=V(),fe.setAttributes=w(),fe.insert=v().bind(null,"head"),fe.domAPI=g(),fe.insertStyleElement=k(),p()(Y.Z,fe),Y.Z&&Y.Z.locals&&Y.Z.locals;const Fe=function(F,b,P,_,he){var _e=F.appendChild(document.createElement("input"));return _e.type="text",_e.classList.add("guify-value-input"),_e.value=b,he||_e.classList.add("guify-value-input-right"),a()(_e,{width:_}),_e};function ke(F){return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},ke(F)}function I(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function E(F,b){return E=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},E(F,b)}function Q(F,b){if(b&&(ke(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function ve(F){return ve=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},ve(F)}var Te=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&E(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=ve(_);if(he){var Ae=ve(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return Q(this,D)});function ee(D,S,Ae){var y;if(function(He,Be){if(!(He instanceof Be))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae)).scale=S.scale,y.label=H(y.container,S.label),y.input=y.container.appendChild(document.createElement("input")),y.input.type="range",y.input.classList.add("guify-range"),S.label&&y.input.setAttribute("aria-label",S.label+" input"),S.scale==="log"){if(S.min*S.max<=0)throw new Error("Log range min/max must have the same sign and not equal zero. Got min = "+S.min+", max = "+S.max);if(K()(S.step)&&console.warn("Step is unused for log scale sliders."),K()(S.steps)&&console.warn('"steps" option for log scale sliders has been removed.'),y.minPos=0,y.maxPos=1e6,y.min=Math.log(K()(S.min)?S.min:1e-6),y.max=Math.log(K()(S.max)?S.max:100),y.precision=K()(S.precision)?S.precision:3,y.logScale=(y.max-y.min)/(y.maxPos-y.minPos),y.initial=K()(S.initial)?S.initial:y.min,S.initial<0)throw new Error("Log range initial value must be > 0. Got initial value = ".concat(S.initial))}else if(y.minPos=K()(S.min)?S.min:0,y.maxPos=K()(S.max)?S.max:100,y.min=y.minPos,y.max=y.maxPos,y.precision=K()(S.precision)?S.precision:3,y.step=K()(S.step)?S.step:10/Math.pow(10,3),y.initial=K()(S.initial)?S.initial:y.min,y.step!=0){var Ie=Math.round((y.initial-y.min)/y.step);y.initial=y.min+y.step*Ie}return y.input.min=y.minPos,y.input.max=y.maxPos,K()(y.step)&&(y.input.step=y.step),y.input.value=y._Position(y.initial),a()(y.input,{width:"calc(100% - ".concat(Ae.sizing.labelWidth," - 16% - 0.5em)")}),y.valueComponent=Fe(y.container,y.initial,0,"16%"),S.label&&y.valueComponent.setAttribute("aria-label",S.label+" value"),setTimeout(function(){y.emit("initialized",parseFloat(y.input.value))}),y.userIsModifying=!1,y.input.addEventListener("focus",function(){y.focused=!0}),y.input.addEventListener("blur",function(){y.focused=!1}),y.input.addEventListener("mouseup",function(){y.input.blur()}),y.input.oninput=function(He){var Be=parseFloat(He.target.value),Oe=y._Value(Be);y.valueComponent.value=y._FormatNumber(Oe,y.precision),y.emit("input",Oe)},y.valueComponent.onchange=function(){var He=y.valueComponent.value;if(Number(parseFloat(He))==He){var Be=parseFloat(He);Be=y._ValidatedInputValue(Be),y.valueComponent.value=Be,y.emit("input",Be),y.lastValue=Be}else y.valueComponent.value=y.lastValue},y}return b=ee,P=[{key:"_Value",value:function(D){if(this.scale==="log"){var S=(D-this.minPos)*this.logScale+this.min;return Math.exp(S)}return D}},{key:"_Position",value:function(D){return this.scale==="log"?this.minPos+(Math.log(D)-this.min)/this.logScale:D}},{key:"_ValidatedInputValue",value:function(D){var S;return this.scale==="log"?S=Math.min(Math.max(D,Math.exp(this.min)),Math.exp(this.max)):(S=Math.min(Math.max(D,this.min),this.max),S=Math.ceil((S-this.min)/this.step)*this.step+this.min),this._FormatNumber(S,this.precision)}},{key:"SetValue",value:function(D){var S=this._ValidatedInputValue(D);this.focused!==!0&&(this.valueComponent.value=this._FormatNumber(S,this.precision),this.input.value=this._Position(S),this.lastValue=S)}},{key:"GetValue",value:function(){return this._Value(this.input.value)}},{key:"_FormatNumber",value:function(D,S){return+parseFloat(D).toFixed(S)}}],P&&I(b.prototype,P),ee}(pe),Pe=i(351),Ne={};function T(F){return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},T(F)}function X(F,b){return X=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},X(F,b)}function Me(F,b){if(b&&(T(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function we(F){return we=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},we(F)}Ne.styleTagTransform=V(),Ne.setAttributes=w(),Ne.insert=v().bind(null,"head"),Ne.domAPI=g(),Ne.insertStyleElement=k(),p()(Pe.Z,Ne),Pe.Z&&Pe.Z.locals&&Pe.Z.locals;var N=function(F){(function(_e,ee){if(typeof ee!="function"&&ee!==null)throw new TypeError("Super expression must either be null or a function");_e.prototype=Object.create(ee&&ee.prototype,{constructor:{value:_e,writable:!0,configurable:!0}}),ee&&X(_e,ee)})(he,F);var b,P,_=(b=he,P=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var _e,ee=we(b);if(P){var D=we(this).constructor;_e=Reflect.construct(ee,arguments,D)}else _e=ee.apply(this,arguments);return Me(this,_e)});function he(_e,ee,D){var S;return function(Ae,y){if(!(Ae instanceof y))throw new TypeError("Cannot call a class as a function")}(this,he),(S=_.call(this,_e,ee,D)).label=H(S.container,""),S.input=S.container.appendChild(document.createElement("button")),S.input.classList.add("guify-button"),S.input.textContent=ee.label,S.button=S.input,S.input.addEventListener("click",ee.action),S.input.addEventListener("mouseup",function(){S.input.blur()}),S}return he}(pe),ye=i(11),be={};function Ue(F){return Ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Ue(F)}function Ee(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function ze(F,b){return ze=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},ze(F,b)}function Ce(F,b){if(b&&(Ue(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function Ge(F){return Ge=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},Ge(F)}be.styleTagTransform=V(),be.setAttributes=w(),be.insert=v().bind(null,"head"),be.domAPI=g(),be.insertStyleElement=k(),p()(ye.Z,be),ye.Z&&ye.Z.locals&&ye.Z.locals;var yt=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&ze(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=Ge(_);if(he){var Ae=Ge(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return Ce(this,D)});function ee(D,S,Ae){var y;return function(Ie,He){if(!(Ie instanceof He))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae)).label=H(y.container,S.label),y.input=y.container.appendChild(document.createElement("input")),y.input.id="guify-checkbox-"+S.label+y.uuid,y.input.type="checkbox",y.input.checked=S.initial,y.input.classList.add("guify-checkbox"),S.label&&y.input.setAttribute("aria-label",S.label),y.container.appendChild(document.createElement("label")).htmlFor=y.input.id,setTimeout(function(){y.emit("initialized",y.input.checked)}),y.input.onchange=function(Ie){y.emit("input",Ie.target.checked)},y}return b=ee,P=[{key:"SetValue",value:function(D){this.input.checked=D}},{key:"GetValue",value:function(){return this.input.checked}}],P&&Ee(b.prototype,P),ee}(pe),nt=i(247),Ot={};function Zt(F){return Zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Zt(F)}function zo(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function Un(F,b){return Un=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},Un(F,b)}function No(F,b){if(b&&(Zt(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function Hn(F){return Hn=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},Hn(F)}Ot.styleTagTransform=V(),Ot.setAttributes=w(),Ot.insert=v().bind(null,"head"),Ot.domAPI=g(),Ot.insertStyleElement=k(),p()(nt.Z,Ot),nt.Z&&nt.Z.locals&&nt.Z.locals;var ys=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&Un(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=Hn(_);if(he){var Ae=Hn(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return No(this,D)});function ee(D,S,Ae){var y,Ie,He,Be,Oe,Ke,pt,qt;if(function(Fr,vd){if(!(Fr instanceof vd))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae)).label=H(y.container,S.label),y.input=document.createElement("select"),y.input.classList.add("guify-select-dropdown"),S.label&&y.input.setAttribute("aria-label",S.label),(He=document.createElement("span")).classList.add("guify-select-triangle","guify-select-triangle--down"),(Be=document.createElement("span")).classList.add("guify-select-triangle","guify-select-triangle--up"),y.container.appendChild(He),y.container.appendChild(Be),Array.isArray(S.options))for(Ie=0;Ie<S.options.length;Ie++)Ke=S.options[Ie],(pt=document.createElement("option")).value=pt.textContent=Ke,S.initial===Ke&&(pt.selected="selected"),y.input.appendChild(pt);else for(qt=Object.keys(S.options),Ie=0;Ie<qt.length;Ie++)Oe=qt[Ie],(pt=document.createElement("option")).value=Oe,S.initial===Oe&&(pt.selected="selected"),pt.textContent=S.options[Oe],y.input.appendChild(pt);y.container.appendChild(y.input),y.input.onchange=function(Fr){y.emit("input",Fr.target.value)};var ut=function(){He.classList.add("guify-select-triangle--down-highlight"),Be.classList.add("guify-select-triangle--up-highlight")},Br=function(){He.classList.remove("guify-select-triangle--down-highlight"),Be.classList.remove("guify-select-triangle--up-highlight")},Dr=!1;return y.input.addEventListener("mouseover",ut),y.input.addEventListener("focus",function(){Dr=!0,ut()}),y.input.addEventListener("blur",function(){Dr=!1,Br()}),y.input.addEventListener("mouseleave",function(){Dr||Br()}),y}return b=ee,P=[{key:"SetValue",value:function(D){this.input.value=D}},{key:"GetValue",value:function(){return this.input.value}}],P&&zo(b.prototype,P),ee}(pe),Di=i(532),Gn={};function Rr(F){return Rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Rr(F)}function R(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function $(F,b){return $=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},$(F,b)}function ie(F,b){if(b&&(Rr(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function J(F){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},J(F)}Gn.styleTagTransform=V(),Gn.setAttributes=w(),Gn.insert=v().bind(null,"head"),Gn.domAPI=g(),Gn.insertStyleElement=k(),p()(Di.Z,Gn),Di.Z&&Di.Z.locals&&Di.Z.locals;var ue=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&$(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=J(_);if(he){var Ae=J(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return ie(this,D)});function ee(D,S,Ae){var y,Ie,He,Be;return function(Oe,Ke){if(!(Oe instanceof Ke))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae)).listenMode=S.listenMode||"input",(Ie=ee,He=ee,Be=$e,function(Oe,Ke){if(Oe!==Ke)throw new TypeError("Private static access of wrong provenance")}(Ie,He),function(Oe,Ke){if(Oe===void 0)throw new TypeError("attempted to get private static field before its declaration")}(Be),function(Oe,Ke){return Ke.get?Ke.get.call(Oe):Ke.value}(Ie,Be)).includes(y.listenMode)||console.error('listenMode "'.concat(y.listenMode,'" is not supported for text component "').concat(S.label,'"! Falling back on "input".')),y.label=H(y.container,S.label),y.input=y.container.appendChild(document.createElement("input")),y.input.type="text",y.input.classList.add("guify-text-input"),S.initial&&(y.input.value=S.initial),S.label&&y.input.setAttribute("aria-label",S.label),setTimeout(function(){y.emit("initialized",y.input.value)}),y.input.addEventListener(y.listenMode,function(Oe){console.log(Oe),y.emit("input",Oe.target.value)}),y.input.addEventListener("focus",function(){y.focused=!0}),y.input.addEventListener("blur",function(){y.focused=!1}),y}return b=ee,P=[{key:"SetValue",value:function(D){this.focused!==!0&&(this.input.value=D)}},{key:"GetValue",value:function(){return this.input.value}}],P&&R(b.prototype,P),ee}(pe),$e={writable:!0,value:["input","change"]},Qe=i(186);function tt(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function et(F,b,P){return b&&tt(F.prototype,b),P&&tt(F,P),F}function lt(F){return typeof F=="number"&&!isNaN(F)}function it(F,b,P){return Math.min(Math.max(F,b),P)}function rt(F){if(F.type.indexOf("touch")===0){var b=F.touches[0];return{x:b.clientX,y:b.clientY}}return{x:F.clientX,y:F.clientY}}function _t(F){return F.length==1?"0"+F:""+F}var dn=function(){function F(P){this._rgba={r:0,g:0,b:0,a:1},this._hsva={h:0,s:0,v:0,a:1},this.fromHex(P)}var b=F.prototype;return b.fromHex=function(P){P||(P=0),lt(P)?(this._hexNumber=P,this._hexString=function(Ae){return"#"+("00000"+(0|Ae).toString(16)).substr(-6).toUpperCase()}(this._hexNumber)):(this._hexString=P.toUpperCase(),this._hexNumber=En(this._hexString));var _=function(Ae){return{r:(Ae>>16&255)/255,g:(Ae>>8&255)/255,b:(255&Ae)/255}}(this._hexNumber),he=_.g,_e=_.b;this._rgba.r=_.r,this._rgba.g=he,this._rgba.b=_e;var ee=function(Ae){var y,Ie=Ae.r,He=Ae.g,Be=Ae.b,Oe=Math.max(Ie,He,Be),Ke=Math.min(Ie,He,Be),pt=Oe-Ke,qt=Oe===0?0:pt/Oe,ut=Oe;if(Oe==Ke)y=0;else{switch(Oe){case Ie:y=(He-Be)/pt+(He<Be?6:0);break;case He:y=(Be-Ie)/pt+2;break;case Be:y=(Ie-He)/pt+4}y/=6}return{h:y,s:qt,v:ut}}(this._rgba),D=ee.s,S=ee.v;this._hsva.h=ee.h,this._hsva.s=D,this._hsva.v=S,this._updateBrightness()},b.fromHsv=function(P){var _=P.s,he=P.v;this._hsva.h=P.h,this._hsva.s=_,this._hsva.v=he;var _e=function(S){var Ae=S.h,y=S.s,Ie=S.v;Ae*=6;var He=Math.floor(Ae),Be=Ae-He,Oe=Ie*(1-y),Ke=Ie*(1-Be*y),pt=Ie*(1-(1-Be)*y),qt=He%6;return{r:[Ie,Ke,Oe,Oe,pt,Ie][qt],g:[pt,Ie,Ie,Ke,Oe,Oe][qt],b:[Oe,Oe,pt,Ie,Ie,Ke][qt]}}(this._hsva),ee=_e.g,D=_e.b;this._rgba.r=_e.r,this._rgba.g=ee,this._rgba.b=D,this._hexString=function(S){var Ae=S.g,y=S.b;return["#",_t(Math.round(255*S.r).toString(16)),_t(Math.round(255*Ae).toString(16)),_t(Math.round(255*y).toString(16))].join("").toUpperCase()}(this._rgba),this._hexNumber=En(this._hexString),this._updateBrightness()},b._updateBrightness=function(){var P=this._rgba;this._brightness=(299*P.r+587*P.g+114*P.b)/1e3,this._isDark=this._brightness<.5,this._isLight=!this._isDark},et(F,[{key:"rgb",get:function(){return this._rgba}},{key:"hsv",get:function(){return this._hsva}},{key:"hex",get:function(){return this._hexNumber}},{key:"hexString",get:function(){return this._hexString}},{key:"brightness",get:function(){return this._brightness}},{key:"isDark",get:function(){return this._isDark}},{key:"isLight",get:function(){return this._isLight}}]),F}();function En(F){return parseInt(F.replace("#",""),16)}var Vn=function(){function F(P){var _=this;P===void 0&&(P={}),this._widthUnits="px",this._heightUnits="px",this._huePosition=0,this._hueHeight=0,this._maxHue=0,this._inputIsNumber=!1,this._saturationWidth=0,this._isChoosing=!1,this._callbacks=[],this.width=0,this.height=0,this.hue=0,this.position={x:0,y:0},this.color=new dn(0),this.backgroundColor=new dn(0),this.hueColor=new dn(0),this._onSaturationMouseDown=function(he){var _e=_.$saturation.getBoundingClientRect(),ee=rt(he),D=ee.x,S=ee.y;_._isChoosing=!0,_._moveSelectorTo(D-_e.left,S-_e.top),_._updateColorFromPosition(),_._window.addEventListener("mouseup",_._onSaturationMouseUp),_._window.addEventListener("touchend",_._onSaturationMouseUp),_._window.addEventListener("mousemove",_._onSaturationMouseMove),_._window.addEventListener("touchmove",_._onSaturationMouseMove),he.preventDefault()},this._onSaturationMouseMove=function(he){var _e=_.$saturation.getBoundingClientRect(),ee=rt(he);_._moveSelectorTo(ee.x-_e.left,ee.y-_e.top),_._updateColorFromPosition()},this._onSaturationMouseUp=function(){_._isChoosing=!1,_._window.removeEventListener("mouseup",_._onSaturationMouseUp),_._window.removeEventListener("touchend",_._onSaturationMouseUp),_._window.removeEventListener("mousemove",_._onSaturationMouseMove),_._window.removeEventListener("touchmove",_._onSaturationMouseMove)},this._onHueMouseDown=function(he){var _e=_.$hue.getBoundingClientRect(),ee=rt(he).y;_._isChoosing=!0,_._moveHueTo(ee-_e.top),_._updateHueFromPosition(),_._window.addEventListener("mouseup",_._onHueMouseUp),_._window.addEventListener("touchend",_._onHueMouseUp),_._window.addEventListener("mousemove",_._onHueMouseMove),_._window.addEventListener("touchmove",_._onHueMouseMove),he.preventDefault()},this._onHueMouseMove=function(he){var _e=_.$hue.getBoundingClientRect(),ee=rt(he);_._moveHueTo(ee.y-_e.top),_._updateHueFromPosition()},this._onHueMouseUp=function(){_._isChoosing=!1,_._window.removeEventListener("mouseup",_._onHueMouseUp),_._window.removeEventListener("touchend",_._onHueMouseUp),_._window.removeEventListener("mousemove",_._onHueMouseMove),_._window.removeEventListener("touchmove",_._onHueMouseMove)},this._window=P.window||window,this._document=this._window.document,this.$el=this._document.createElement("div"),this.$el.className="Scp",this.$el.innerHTML=`
      <div class="Scp-saturation">
        <div class="Scp-brightness"></div>
        <div class="Scp-sbSelector"></div>
      </div>
      <div class="Scp-hue">
        <div class="Scp-hSelector"></div>
      </div>
    `,this.$saturation=this.$el.querySelector(".Scp-saturation"),this.$hue=this.$el.querySelector(".Scp-hue"),this.$sbSelector=this.$el.querySelector(".Scp-sbSelector"),this.$hSelector=this.$el.querySelector(".Scp-hSelector"),this.$saturation.addEventListener("mousedown",this._onSaturationMouseDown),this.$saturation.addEventListener("touchstart",this._onSaturationMouseDown),this.$hue.addEventListener("mousedown",this._onHueMouseDown),this.$hue.addEventListener("touchstart",this._onHueMouseDown),P.el&&this.appendTo(P.el),P.background&&this.setBackgroundColor(P.background),P.widthUnits&&(this._widthUnits=P.widthUnits),P.heightUnits&&(this._heightUnits=P.heightUnits),this.setSize(P.width||175,P.height||150),this.setColor(P.color)}var b=F.prototype;return b.appendTo=function(P){return typeof P=="string"?document.querySelector(P).appendChild(this.$el):P.appendChild(this.$el),this},b.remove=function(){this._callbacks=[],this._onSaturationMouseUp(),this._onHueMouseUp(),this.$saturation.removeEventListener("mousedown",this._onSaturationMouseDown),this.$saturation.removeEventListener("touchstart",this._onSaturationMouseDown),this.$hue.removeEventListener("mousedown",this._onHueMouseDown),this.$hue.removeEventListener("touchstart",this._onHueMouseDown),this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},b.setColor=function(P){this._inputIsNumber=lt(P),this.color.fromHex(P);var _=this.color.hsv,he=_.h,_e=_.s,ee=_.v;return isNaN(he)||(this.hue=he),this._moveSelectorTo(this._saturationWidth*_e,(1-ee)*this._hueHeight),this._moveHueTo((1-this.hue)*this._hueHeight),this._updateHue(),this},b.setSize=function(P,_){return this.width=P,this.height=_,this.$el.style.width=this.width+this._widthUnits,this.$el.style.height=this.height+this._heightUnits,this._saturationWidth=this.width-25,this.$saturation.style.width=this._saturationWidth+"px",this._hueHeight=this.height,this._maxHue=this._hueHeight-2,this},b.setBackgroundColor=function(P){return this.backgroundColor.fromHex(P),this.$el.style.padding="5px",this.$el.style.background=this.backgroundColor.hexString,this},b.setNoBackground=function(){return this.$el.style.padding="0px",this.$el.style.background="none",this},b.onChange=function(P){return this._callbacks.indexOf(P)<0&&(this._callbacks.push(P),P(this.getHexString())),this},b.getColor=function(){return this._inputIsNumber?this.getHexNumber():this.getHexString()},b.getHexString=function(){return this.color.hexString.toUpperCase()},b.getHexNumber=function(){return this.color.hex},b.getRGB=function(){return this.color.rgb},b.getHSV=function(){return this.color.hsv},b.isDark=function(){return this.color.isDark},b.isLight=function(){return this.color.isLight},b._moveSelectorTo=function(P,_){this.position.x=it(P,0,this._saturationWidth),this.position.y=it(_,0,this._hueHeight),this.$sbSelector.style.transform="translate("+this.position.x+"px, "+this.position.y+"px)"},b._updateColorFromPosition=function(){this.color.fromHsv({h:this.hue,s:this.position.x/this._saturationWidth,v:1-this.position.y/this._hueHeight}),this._updateColor()},b._moveHueTo=function(P){this._huePosition=it(P,0,this._maxHue),this.$hSelector.style.transform="translateY("+this._huePosition+"px)"},b._updateHueFromPosition=function(){var P=this.getHSV();this.hue=1-this._huePosition/this._maxHue,this.color.fromHsv({h:this.hue,s:P.s,v:P.v}),this._updateHue()},b._updateHue=function(){this.hueColor.fromHsv({h:this.hue,s:1,v:1}),this.$saturation.style.background="linear-gradient(to right, #fff, "+this.hueColor.hexString+")",this._updateColor()},b._updateColor=function(){this.$sbSelector.style.background=this.getHexString(),this.$sbSelector.style.borderColor=this.isDark()?"#fff":"#000",this._triggerChange()},b._triggerChange=function(){var P=this;this._callbacks.forEach(function(_){return _(P.getHexString())})},et(F,[{key:"isChoosing",get:function(){return this._isChoosing}}]),F}();(0,Qe.insertCss)(".Scp{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.Scp-saturation{position:relative;height:100%;background:linear-gradient(90deg,#fff,red);float:left;margin-right:5px}.Scp-brightness{width:100%;height:100%;background:linear-gradient(hsla(0,0%,100%,0),#000)}.Scp-sbSelector{border:2px solid #fff;position:absolute;width:14px;height:14px;background:#fff;border-radius:10px;top:-7px;left:-7px;box-sizing:border-box;z-index:10}.Scp-hue{width:20px;height:100%;position:relative;float:left;background:linear-gradient(red,#f0f 17%,#00f 34%,#0ff 50%,#0f0 67%,#ff0 84%,red)}.Scp-hSelector{position:absolute;background:#fff;border-bottom:1px solid #000;right:-3px;width:10px;height:2px}");const nn=Vn;var ct=i(621),rn=i.n(ct),At=i(442),zt={};function sn(F){return sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},sn(F)}function fi(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function pi(F,b){return pi=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},pi(F,b)}function Dt(F,b){if(b&&(sn(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function xn(F){return xn=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},xn(F)}zt.styleTagTransform=V(),zt.setAttributes=w(),zt.insert=v().bind(null,"head"),zt.domAPI=g(),zt.insertStyleElement=k(),p()(At.Z,zt),At.Z&&At.Z.locals&&At.Z.locals;var kr=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&pi(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=xn(_);if(he){var Ae=xn(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return Dt(this,D)});function ee(D,S,Ae){var y;(function(Oe,Ke){if(!(Oe instanceof Ke))throw new TypeError("Cannot call a class as a function")})(this,ee),y=_e.call(this,D,S,Ae),S.format=S.format||"rgb",S.initial=S.initial||"#123456",y.label=H(y.container,S.label);var Ie=y.container.appendChild(document.createElement("span"));Ie.classList.add("guify-color");var He=Fe(y.container,"",0,"calc(100% - ".concat(Ae.sizing.labelWidth," - 12% - 0.5em)"));He.setAttribute("readonly","true"),Ie.onmouseover=function(){y.picker.$el.style.display=""};var Be=S.initial;switch(S.format){case"rgb":case"hex":Be=rn()(Be).toHexString();break;case"array":Be=rn().fromRatio({r:Be[0],g:Be[1],b:Be[2]}).toHexString()}return y.picker=new nn({el:Ie,color:Be,background:Ae.colors.componentBackground,width:125,height:100}),a()(y.picker.$el,{marginTop:Ae.sizing.componentHeight,display:"none",position:"absolute"}),a()(Ie,{position:"absolute",display:"inline-block",width:"12.5%",height:Ae.sizing.componentHeight,backgroundColor:y.picker.getHexString()}),Ie.onmouseout=function(){y.picker.$el.style.display="none"},setTimeout(function(){y.emit("initialized",Be)}),y.picker.onChange(function(Oe){He.value=y.Format(Oe),a()(Ie,{backgroundColor:Oe}),y.emit("input",y.Format(Oe))}),y}return b=ee,P=[{key:"Format",value:function(D){switch(this.opts.format){case"rgb":return rn()(D).toRgbString();case"hex":return rn()(D).toHexString();case"array":var S=rn()(D).toRgb();return[S.r/255,S.g/255,S.b/255].map(function(Ae){return Ae.toFixed(2)});default:return D}}},{key:"SetValue",value:function(D){this.picker.isChoosing||this.picker.setColor(D)}},{key:"GetValue",value:function(){return this.Format(this.picker.getColor())}}],P&&fi(b.prototype,P),ee}(pe),Gt=i(211),Fi={};function Uo(F){return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Uo(F)}function Vh(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function bs(){return bs=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(F,b,P){var _=Wh(F,b);if(_){var he=Object.getOwnPropertyDescriptor(_,b);return he.get?he.get.call(arguments.length<3?F:P):he.value}},bs.apply(this,arguments)}function Wh(F,b){for(;!Object.prototype.hasOwnProperty.call(F,b)&&(F=mi(F))!==null;);return F}function Ho(F,b){return Ho=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},Ho(F,b)}function jh(F,b){if(b&&(Uo(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function mi(F){return mi=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},mi(F)}Fi.styleTagTransform=V(),Fi.setAttributes=w(),Fi.insert=v().bind(null,"head"),Fi.domAPI=g(),Fi.insertStyleElement=k(),p()(Gt.Z,Fi),Gt.Z&&Gt.Z.locals&&Gt.Z.locals;var qh=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&Ho(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=mi(_);if(he){var Ae=mi(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return jh(this,D)});function ee(D,S,Ae){var y;return function(Ie,He){if(!(Ie instanceof He))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae)).container.classList.add("guify-folder"),y.container.setAttribute("role","button"),y.container.setAttribute("tabIndex","0"),y.arrow=y.container.appendChild(document.createElement("div")),y.arrow.classList.add("guify-folder-arrow"),y.arrow.innerHTML="&#9662;",y.label=y.container.appendChild(document.createElement("div")),y.label.classList.add("guify-folder-text"),y.label.innerHTML=S.label,y.container.onclick=function(){y.Toggle()},y.container.addEventListener("mouseup",function(){y.container.blur()}),y.container.addEventListener("keydown",function(Ie){Ie.code!=="Enter"&&Ie.code!=="Space"||(Ie.preventDefault(),y.Toggle())}),y.folderContainer=D.appendChild(document.createElement("div")),y.folderContainer.classList.add("guify-folder-contents"),y.open=y.opts.open||!1,y.SetOpen(y.open),y}return b=ee,(P=[{key:"SetEnabled",value:function(D){var S,Ae;bs(mi(ee.prototype),"SetEnabled",this).call(this,D),D?(S=this.folderContainer)===null||S===void 0||S.classList.remove("disabled"):(Ae=this.folderContainer)===null||Ae===void 0||Ae.classList.add("disabled")}},{key:"Toggle",value:function(){this.open=!this.open,this.SetOpen(this.open)}},{key:"SetOpen",value:function(D){this.open=D,D?(this.folderContainer.classList.remove("guify-folder-closed"),this.arrow.innerHTML="&#9662;"):(this.folderContainer.classList.add("guify-folder-closed"),this.arrow.innerHTML="&#9656;")}},{key:"Remove",value:function(){this.folderContainer&&this.folderContainer.parentNode.removeChild(this.folderContainer),bs(mi(ee.prototype),"Remove",this).call(this)}}])&&Vh(b.prototype,P),ee}(pe),_s=i(191),Oi={};function Go(F){return Go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Go(F)}function Xh(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function Vo(F,b){return Vo=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},Vo(F,b)}function Yh(F,b){if(b&&(Go(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function As(F){return As=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},As(F)}Oi.styleTagTransform=V(),Oi.setAttributes=w(),Oi.insert=v().bind(null,"head"),Oi.domAPI=g(),Oi.insertStyleElement=k(),p()(_s.Z,Oi),_s.Z&&_s.Z.locals&&_s.Z.locals;var Zh=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&Vo(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=As(_);if(he){var Ae=As(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return Yh(this,D)});function ee(D,S,Ae){var y;(function(Be,Oe){if(!(Be instanceof Oe))throw new TypeError("Cannot call a class as a function")})(this,ee),(y=_e.call(this,D,S,Ae)).opts.fileReadFunc=y.opts.fileReadFunc||"readAsDataURL",y.file=null,y.fileName=null,y.container.classList.add("guify-file-container"),y.container.setAttribute("role","button"),y.container.setAttribute("tabIndex","0"),a()(y.container,{width:"100%","box-sizing":"border-box","-moz-box-sizing":"border-box","-webkit-box-sizing":"border-box",height:"unset",padding:"8px"});var Ie=y.container.appendChild(document.createElement("div"));Ie.innerHTML=S.label,a()(Ie,"padding-bottom","5px"),y.input=y.container.appendChild(document.createElement("input")),y.input.setAttribute("type","file"),y.input.setAttribute("multiple",!1),y.input.style.display="none",S.label&&y.input.setAttribute("aria-label",S.label),y.fileLabel=y.container.appendChild(document.createElement("div")),y.fileLabel.innerHTML="Choose a file...";var He=function(Be){var Oe;Be.dataTransfer?Oe=Be.dataTransfer.files:Be.target&&(Oe=Be.target.files);var Ke=new FileReader;Ke.onload=function(){y.file=Ke.result,y.fileLabel.innerHTML=Oe[0].name,y.emit("input",y.file)},Ke[y.opts.fileReadFunc](Oe[0])};return y.input.addEventListener("change",He),y.container.addEventListener("dragover",function(Be){Be.preventDefault(),Be.stopPropagation(),y.container.classList.add("guify-dragover")}),y.container.addEventListener("dragleave",function(Be){Be.preventDefault(),Be.stopPropagation(),y.container.classList.remove("guify-dragover")}),y.container.addEventListener("drop",function(Be){Be.preventDefault(),Be.stopPropagation(),y.container.classList.remove("guify-dragover"),He(Be)}),y.container.onclick=function(){y.input.click()},y.container.addEventListener("keydown",function(Be){Be.code!=="Enter"&&Be.code!=="Space"||(Be.preventDefault(),y.input.click())}),y.container.addEventListener("mouseup",function(){y.container.blur()}),y}return b=ee,(P=[{key:"SetValue",value:function(D){}},{key:"GetValue",value:function(){return this.file}}])&&Xh(b.prototype,P),ee}(pe),ws=i(144),zi={};function Wo(F){return Wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Wo(F)}function $h(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function jo(F,b){return jo=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},jo(F,b)}function Kh(F,b){if(b&&(Wo(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function Ms(F){return Ms=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},Ms(F)}zi.styleTagTransform=V(),zi.setAttributes=w(),zi.insert=v().bind(null,"head"),zi.domAPI=g(),zi.insertStyleElement=k(),p()(ws.Z,zi),ws.Z&&ws.Z.locals&&ws.Z.locals;var Jh=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&jo(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=Ms(_);if(he){var Ae=Ms(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return Kh(this,D)});function ee(D,S,Ae){var y;return function(Ie,He){if(!(Ie instanceof He))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae)).label=H(y.container,S.label),y.text=y.container.appendChild(document.createElement("div")),y.text.classList.add("guify-display"),S.initial&&y.SetValue(S.initial),S.label&&y.text.setAttribute("aria-label",S.label),y}return b=ee,P=[{key:"SetValue",value:function(D){this.text.innerHTML=D.toString()}},{key:"GetValue",value:function(){return this.text.innerHTML.toString()}}],P&&$h(b.prototype,P),ee}(pe),Ss=i(554),Ni={};function qo(F){return qo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},qo(F)}function Qh(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function Xo(F,b){return Xo=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},Xo(F,b)}function ed(F,b){if(b&&(qo(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function Cs(F){return Cs=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},Cs(F)}function Yo(F,b,P){return Math.min(Math.max(F,b),P)}Ni.styleTagTransform=V(),Ni.setAttributes=w(),Ni.insert=v().bind(null,"head"),Ni.domAPI=g(),Ni.insertStyleElement=k(),p()(Ss.Z,Ni),Ss.Z&&Ss.Z.locals&&Ss.Z.locals;var td=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&Xo(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=Cs(_);if(he){var Ae=Cs(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return ed(this,D)});function ee(D,S,Ae){var y;if(function(Oe,Ke){if(!(Oe instanceof Ke))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae)).label=H(y.container,S.label),S.step&&S.steps)throw new Error("Cannot specify both step and steps. Got step = "+S.step+", steps = ",S.steps);if(y.input=y.container.appendChild(document.createElement("span")),y.input.classList.add("guify-interval"),y.handle=document.createElement("span"),y.handle.classList.add("guify-interval-handle"),y.input.appendChild(y.handle),Array.isArray(S.initial)||(S.initial=[]),y.scale=S.scale,S.scale==="log"){if(S.min*S.max<=0)throw new Error("Log range min/max must have the same sign and not equal zero. Got min = "+S.min+", max = "+S.max);K()(S.step)&&console.warn("Step is unused for log scale sliders."),K()(S.steps)&&console.warn('"steps" option for log scale sliders has been removed.'),y.minPos=0,y.maxPos=1e6,y.min=Math.log(K()(S.min)?S.min:1e-6),y.max=Math.log(K()(S.max)?S.max:100),y.precision=K()(S.precision)?S.precision:3,y.logScale=(y.max-y.min)/(y.maxPos-y.minPos),y.initial=[K()(S.initial[0])?S.initial[0]:y.min,K()(S.initial[1])?S.initial[1]:y.max]}else y.minPos=K()(S.min)?S.min:0,y.maxPos=K()(S.max)?S.max:100,y.min=y.minPos,y.max=y.maxPos,y.precision=K()(S.precision)?S.precision:3,y.step=K()(S.step)?S.step:10/Math.pow(10,3),y.initial=[K()(S.initial[0])?S.initial[0]:y.min,K()(S.initial[1])?S.initial[1]:y.max],y.step!=0&&(y.initial=y.initial.map(function(Oe){return y.min+y.step*Math.round((Oe-y.min)/y.step)}));y.value=S.initial,y._RefreshHandles(),y.lValue=Fe(y.container,y.value[0],0,"11%",!0),y.rValue=Fe(y.container,y.value[1],0,"11%",!1),S.label&&y.lValue.setAttribute("aria-label",S.label+" lower value"),S.label&&y.lValue.setAttribute("aria-label",S.label+" upper value"),y.activeIndex=-1,setTimeout(function(){y.emit("initialized",y.value)});var Ie=function(Oe){return Oe.pageX-y.input.getBoundingClientRect().left},He=function(Oe){var Ke=Yo(Ie(Oe)/y.input.offsetWidth,0,1);y._SetFromMousePosition(Ke)},Be=function Oe(Ke){var pt=Yo(Ie(Ke)/y.input.offsetWidth,0,1);y._SetFromMousePosition(pt),document.removeEventListener("mousemove",He),document.removeEventListener("mouseup",Oe),y.activeIndex=-1};return y.input.addEventListener("mousedown",function(Oe){var Ke=Yo(Ie(Oe)/y.input.offsetWidth,0,1),pt=y._Position(y.value[0]),qt=y._Position(y.value[1]),ut=(pt-y.minPos)/(y.maxPos-y.minPos),Br=(qt-y.minPos)/(y.maxPos-y.minPos);ut-=1e-15*Math.abs(y.maxPos-y.minPos),Br+=1e-15*Math.abs(y.maxPos-y.minPos);var Dr=Math.abs(ut-Ke),Fr=Math.abs(Br-Ke);y.activeIndex=Dr<Fr?0:1,console.log(y.activeIndex),document.addEventListener("mousemove",He),document.addEventListener("mouseup",Be)}),y.input.addEventListener("mouseup",function(){y.input.blur()}),y.input.oninput=function(){y.lValue.value=y.value[0],y.rValue.value=y.value[1],y.emit("input",y.value)},y.lValue.onchange=function(){var Oe=y.lValue.value,Ke=parseFloat(y.rValue.value);if(Number(parseFloat(Oe))==Oe){var pt=y.scale=="log"?Math.exp(y.min):y.min,qt=y.scale=="log"?Math.exp(y.max):y.max,ut=parseFloat(Oe);ut=Math.min(Math.max(ut,pt),qt),y.step&&(ut=Math.ceil((ut-pt)/y.step)*y.step+pt),ut=Math.min(ut,Ke),ut=y._RoundNumber(ut,y.precision),y.lValue.value=ut,y.value=[ut,Ke],y.emit("input",[ut,Ke]),y._RefreshHandles([ut,Ke])}else y.lValue.value=y.lastValue[0]},y.rValue.onchange=function(){var Oe=y.rValue.value,Ke=parseFloat(y.lValue.value);if(Number(parseFloat(Oe))==Oe){var pt=y.scale=="log"?Math.exp(y.min):y.min,qt=y.scale=="log"?Math.exp(y.max):y.max,ut=parseFloat(Oe);ut=Math.min(Math.max(ut,pt),qt),y.step&&(ut=Math.ceil((ut-pt)/y.step)*y.step+pt),ut=Math.max(ut,Ke),ut=y._RoundNumber(ut,y.precision),y.rValue.value=ut,y.value=[Ke,ut],y.emit("input",[Ke,ut]),y._RefreshHandles()}else y.rValue.value=y.lastValue[1]},y}return b=ee,P=[{key:"_Value",value:function(D){if(this.scale==="log"){var S=(D-this.minPos)*this.logScale+this.min;return Math.exp(S)}return D}},{key:"_Position",value:function(D){return this.scale==="log"?this.minPos+(Math.log(D)-this.min)/this.logScale:D}},{key:"_SetFromMousePosition",value:function(D){if(this.activeIndex!==-1){if(this.activeIndex===0){var S=(this._Position(this.value[1])-this.minPos)/(this.maxPos-this.minPos);D=Math.min(S,D)}else{var Ae=(this._Position(this.value[0])-this.minPos)/(this.maxPos-this.minPos);D=Math.max(Ae,D)}var y,Ie=(1-(y=D))*this.minPos+y*this.maxPos,He=this._Value(Ie);this.step&&(He=this.min+this.step*Math.round((He-this.min)/this.step)),this.value[this.activeIndex]=this._RoundNumber(He,this.precision),this._RefreshHandles(),this.input.oninput()}}},{key:"SetValue",value:function(D){this.focused!==!0&&(this.lValue.value=this._RoundNumber(parseFloat(D[0]),this.precision),this.rValue.value=this._RoundNumber(parseFloat(D[1]),this.precision),this.lastValue=[parseFloat(D[0]),parseFloat(D[1])])}},{key:"_RoundNumber",value:function(D,S){return+parseFloat(D).toFixed(S)}},{key:"GetValue",value:function(){return[this.lValue.value,this.rValue.value]}},{key:"_RefreshHandles",value:function(){var D=(this._Position(this.value[0])-this.minPos)/(this.maxPos-this.minPos)*100,S=100-(this._Position(this.value[1])-this.minPos)/(this.maxPos-this.minPos)*100;a()(this.handle,{left:"".concat(D,"%"),right:"".concat(S,"%")})}}],P&&Qh(b.prototype,P),ee}(pe);function nd(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}var id=function(){function F(_){(function(he,_e){if(!(he instanceof _e))throw new TypeError("Cannot call a class as a function")})(this,F),this.theme=_,this.components={title:me,range:Te,button:N,checkbox:yt,select:ys,text:ue,color:kr,folder:qh,file:Zh,display:Jh,interval:td}}var b,P;return b=F,(P=[{key:"Create",value:function(_,he){var _e=this.components[he.type];if(_e===void 0)throw new Error("No component type named '".concat(he.type,"' exists."));return new _e(_,he,this.theme)}}])&&nd(b.prototype,P),F}(),rd=i(577),gi=i.n(rd),Es=i(287),Ui={};function Zo(F){return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Zo(F)}function sd(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function $o(F,b){return $o=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},$o(F,b)}function od(F,b){if(b&&(Zo(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function Ts(F){return Ts=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},Ts(F)}Ui.styleTagTransform=V(),Ui.setAttributes=w(),Ui.insert=v().bind(null,"head"),Ui.domAPI=g(),Ui.insertStyleElement=k(),p()(Es.Z,Ui),Es.Z&&Es.Z.locals&&Es.Z.locals;var ad=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&$o(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=Ts(_);if(he){var Ae=Ts(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return od(this,D)});function ee(D,S,Ae){var y;if(function(Oe,Ke){if(!(Oe instanceof Ke))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae,!1)).element=document.createElement("div"),y.element.classList.add("guify-bar"),D.appendChild(y.element),S.title){var Ie=y.element.appendChild(document.createElement("div"));Ie.classList.add("guify-bar-title"),Ie.innerHTML=S.title,y.label=Ie}var He=y.element.appendChild(document.createElement("button"));if(He.classList.add("guify-bar-button"),He.innerHTML="Controls",a()(He,{left:S.align=="left"?"0":"unset",right:S.align=="left"?"unset":"0"}),He.onclick=function(){y.emit("ontogglepanel")},gi().isEnabled){var Be=y.element.appendChild(document.createElement("button"));Be.classList.add("guify-bar-button"),Be.innerHTML="「　」",Be.setAttribute("aria-label","Toggle Fullscreen"),a()(Be,{left:S.align=="left"?"unset":"0",right:S.align=="left"?"0":"unset"}),Be.onclick=function(){y.emit("onfullscreenrequested")}}return y}return b=ee,(P=[{key:"SetVisible",value:function(D){this.element.style.display=D?"block":"none"}}])&&sd(b.prototype,P),ee}(pe),Ls=i(153),Hi={};function Ko(F){return Ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Ko(F)}function ld(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function Jo(F,b){return Jo=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},Jo(F,b)}function cd(F,b){if(b&&(Ko(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function Ps(F){return Ps=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},Ps(F)}Hi.styleTagTransform=V(),Hi.setAttributes=w(),Hi.insert=v().bind(null,"head"),Hi.domAPI=g(),Hi.insertStyleElement=k(),p()(Ls.Z,Hi),Ls.Z&&Ls.Z.locals&&Ls.Z.locals;var ud=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&Jo(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=Ps(_);if(he){var Ae=Ps(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return cd(this,D)});function ee(D,S,Ae){var y;return function(Ie,He){if(!(Ie instanceof He))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae,!1)).container=D.appendChild(document.createElement("div")),y.container.classList.add("guify-panel-container"),a()(y.container,{width:S.width,opacity:S.opacity||1}),S.align=="left"?S.panelMode=="outer"?y.container.classList.add("guify-panel-container-left-outer"):S.panelMode=="inner"&&y.container.classList.add("guify-panel-container-left-inner"):S.panelMode=="outer"?y.container.classList.add("guify-panel-container-right-outer"):S.panelMode=="inner"&&y.container.classList.add("guify-panel-container-right-inner"),S.panelOverflowBehavior=="scroll"&&y.container.classList.add("guify-panel-container-scrollable"),S.barMode==="none"&&a()(y.container,{maxHeight:"100%"}),y.panel=y.container.appendChild(document.createElement("div")),y.panel.classList.add("guify-panel"),S.barMode==="none"&&S.title&&function(Ie,He,Be){var Oe=Ie.appendChild(document.createElement("div"));Oe.innerHTML=He,a()(Oe,{width:"100%",textAlign:"center",color:Be.colors.textSecondary,height:"20px",marginBottom:"4px"})}(y.panel,S.title,Ae),y}return b=ee,(P=[{key:"SetVisible",value:function(D){D?(this.panel.classList.remove("guify-panel-hidden"),this.menuButton&&this.menuButton.setAttribute("alt","Close GUI")):(this.panel.classList.add("guify-panel-hidden"),this.menuButton&&this.menuButton.setAttribute("alt","Open GUI"))}},{key:"ToggleVisible",value:function(){this.panel.classList.contains("guify-panel-hidden")?this.SetVisible(!0):this.SetVisible(!1)}},{key:"_MakeToggleButton",value:function(){var D=this;this.menuButton=this.container.appendChild(document.createElement("button")),this.menuButton.className="guify-panel-toggle-button",a()(this.menuButton,{left:this.opts.align=="left"?"0px":"unset",right:this.opts.align=="left"?"unset":"0px"}),this.menuButton.onclick=function(){D.ToggleVisible()},this.menuButton.addEventListener("mouseup",function(){D.menuButton.blur()}),this.menuButton.innerHTML=`
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect x="10%" y="10%" width="80%" height="80%"/>
        </svg>
        `}}])&&ld(b.prototype,P),ee}(pe),Is=i(56),Gi={};function Qo(F){return Qo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Qo(F)}function hd(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}function ea(F,b){return ea=Object.setPrototypeOf||function(P,_){return P.__proto__=_,P},ea(F,b)}function dd(F,b){if(b&&(Qo(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}(F)}function Rs(F){return Rs=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},Rs(F)}Gi.styleTagTransform=V(),Gi.setAttributes=w(),Gi.insert=v().bind(null,"head"),Gi.domAPI=g(),Gi.insertStyleElement=k(),p()(Is.Z,Gi),Is.Z&&Is.Z.locals&&Is.Z.locals;var fd=function(F){(function(D,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(S&&S.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),S&&ea(D,S)})(ee,F);var b,P,_,he,_e=(_=ee,he=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,S=Rs(_);if(he){var Ae=Rs(this).constructor;D=Reflect.construct(S,arguments,Ae)}else D=S.apply(this,arguments);return dd(this,D)});function ee(D,S,Ae){var y;return function(Ie,He){if(!(Ie instanceof He))throw new TypeError("Cannot call a class as a function")}(this,ee),(y=_e.call(this,D,S,Ae,!1)).element=D.appendChild(document.createElement("div")),y.element.classList.add("guify-toast-area"),a()(y.element,{position:"absolute",width:"100%"}),y}return b=ee,P=[{key:"CreateToast",value:function(D){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5e3,Ae=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;console.log("[Toast] "+D);var y=this.element.appendChild(document.createElement("div"));y.classList.add("guify-toast-notification"),y.setAttribute("aria-live","polite"),y.innerHTML=D,a()(y,{});var Ie,He=y.appendChild(document.createElement("button"));He.innerHTML="&#10006;",He.classList.add("guify-toast-close-button");var Be=function(){y.blur(),a()(y,{opacity:"0"}),clearTimeout(Ie),Ie=setTimeout(function(){y&&y.parentNode.removeChild(y)},Ae)};Ie=setTimeout(Be,S),He.onclick=Be}}],P&&hd(b.prototype,P),ee}(pe);function pd(F,b){for(var P=0;P<b.length;P++){var _=b[P];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(F,_.key,_)}}var md=function(){function F(_){var he=this;(function(ee,D){if(!(ee instanceof D))throw new TypeError("Cannot call a class as a function")})(this,F),this.opts=_,this.hasRoot=_.root!==void 0,_.width=_.width||300,_.root=_.root||document.body,_.align=_.align||"left",_.opacity=_.opacity||1,_.barMode=_.barMode||"offset",_.panelMode=_.panelMode||"inner",_.panelOverflowBehavior=_.panelOverflowBehavior||"scroll",_.pollRateMS=_.pollRateMS||100,_.open=_.open||!1;var _e=_.theme||"dark";this.theme=new h(_e),this.theme.Apply(),this._ConstructElements(),this._LoadStyles(),gi().isEnabled&&gi().on("change",function(){he.opts.root.classList.toggle("guify-fullscreen",gi().isFullscreen)}),this.componentManager=new id(this.theme),this.loadedComponents=[],this._UpdateComponents()}var b,P;return b=F,P=[{key:"_LoadStyles",value:function(){var _=function(he){var _e=document.createElement("style");_e.setAttribute("type","text/css"),_e.setAttribute("rel","stylesheet"),_e.setAttribute("href",he),document.getElementsByTagName("head")[0].appendChild(_e)};this.theme.font&&this.theme.font.fontURL?_(this.theme.font.fontURL):_("//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css")}},{key:"_ConstructElements",value:function(){var _=this;if(this.container=document.createElement("div"),this.container.classList.add("guify-container"),this.hasRoot&&this.opts.barMode=="above")this.container.classList.add("guify-container-above");else if(this.hasRoot&&this.opts.barMode=="overlay")this.container.classList.add("guify-container-overlay");else if(this.hasRoot&&this.opts.barMode=="offset"){this.container.classList.add("guify-container-above"),console.log(window.getComputedStyle(this.opts.root).getPropertyValue("margin-top"));var he=window.getComputedStyle(this.opts.root).getPropertyValue("margin-top")||"0px";a()(this.opts.root,{marginTop:"calc(".concat(he," + var(--size-menu-bar-height))")})}this.opts.root.insertBefore(this.container,this.opts.root.childNodes[0]),this.opts.barMode!=="none"&&(this.bar=new ad(this.container,this.opts,this.theme),this.bar.addListener("ontogglepanel",function(){_.panel.ToggleVisible()}),this.bar.addListener("onfullscreenrequested",function(){_.ToggleFullscreen()})),this.panel=new ud(this.container,this.opts,this.theme),this.opts.barMode==="none"||this.opts.open===!0?this.panel.SetVisible(!0):this.panel.SetVisible(!1),this.toaster=new fd(this.container,this.opts,this.theme)}},{key:"_UpdateComponents",value:function(){var _=this;this.loadedComponents.forEach(function(he){he.binding&&he.binding.object[he.binding.property]!=he.oldValue&&(he.SetValue(he.binding.object[he.binding.property]),he.oldValue=he.binding.object[he.binding.property])}),setTimeout(function(){window.requestAnimationFrame(function(){_._UpdateComponents()})},this.opts.pollRateMS)}},{key:"Register",value:function(_){var he=this,_e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Array.isArray(_)){var ee=Object.assign(_,_e);return this._Register(ee)}_.forEach(function(D){var S=Object.assign(D,_e);he._Register(S)})}},{key:"Remove",value:function(_){_.Remove(),this.loadedComponents=this.loadedComponents.filter(function(he){return he!==_})}},{key:"_Register",value:function(_){if(_.object&&_.property&&_.object[_.property]===void 0)throw new Error("Object ".concat(_.object," has no property '").concat(_.property,"'"));_.object&&_.property&&(_.initial=_.object[_.property]);var he=this.panel.panel;if(_.folder){var _e=this.loadedComponents.find(function(D){return D===_.folder||D.opts.type==="folder"&&D.opts.label===_.folder});if(!_e)throw new Error("No folder exists with the name ".concat(_.folder));he=_e.folderContainer}var ee=this.componentManager.Create(he,_);return _.object&&_.property&&(ee.binding={object:_.object,property:_.property}),ee.on&&(ee.on("initialized",function(D){_.onInitialize&&_.onInitialize(D)}),ee.on("input",function(D){_.object&&_.property&&(_.object[_.property]=D),_.onChange&&_.onChange(D)})),this.loadedComponents.push(ee),ee}},{key:"Toast",value:function(_){var he=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5e3,_e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;this.toaster.CreateToast(_,he,_e)}},{key:"ToggleFullscreen",value:function(){gi().isFullscreen?gi().exit():(console.log("Request fullscreen"),gi().request(this.opts.root))}},{key:"_SetAllEnabled",value:function(_){this.loadedComponents.forEach(function(he){he.SetEnabled(_)})}}],P&&pd(b.prototype,P),F}(),gd=md})(),r})()})})(Gh);var kb=Gh.exports;class Nb extends Ao{constructor(e){super(),window.experience=this,this.container=e.container,this.canvas=e.canvas,this.time=app.time,this.sizes=app.sizes,this.showLevels=!1,this.achievedFirstRender=!1,this.setSizes(),this.setTime(),this.setConfig(),this.setDebug(),this.setStats(),this.setScene(),this.setCamera(),this.setComposition(),this.setResources(),this.setColors(),this.setWorld()}setConfig(){this.config={};const e=this.container.getBoundingClientRect();this.config.left=e.left,this.config.top=e.top,this.config.width=e.width,this.config.height=e.height,this.config.pixelRatio=Math.min(window.devicePixelRatio,2),this.config.orientation=this.sizes.viewport.width<this.sizes.viewport.height?"portrait":"landscape",this.config.ouka=window.location.hash==="#ouka"}setDebug(){window.location.hash==="#debug"&&(this.debug=new kb.guify({align:"right",theme:"dark",barMode:"none",open:!0}))}setStats(){this.debug&&(this.stats=new Rb,this.stats.showPanel(0),document.body.appendChild(this.stats.dom))}setResources(){this.resources=new my(Pb(this.config),{experience:this}),this.resources.on("progress",(e,t,n)=>{}),this.resources.on("groupEnd",e=>{window.requestAnimationFrame(()=>{switch(e.name){case"level1":this.world.levels.addLevel(0),this.world.navigation.level=this.world.levels.items[0];break;case"level2":case"level3":case"level4":case"level5":case"level6":case"level7":this.showLevels&&this.world.levels.addLevel(e.data.index).show();break}})}),this.resources.on("end",e=>{})}setSizes(){this.sizes.on("resize.experience",()=>{this.resize()})}setTime(){this.time.on("tick.experience",()=>{this.achievedFirstRender&&window.scrollY>this.sizes.viewport.height||(this.achievedFirstRender=!0,this.stats&&this.stats.begin(),this.camera.update(),this.world.update(),this.composition.render(),this.stats&&this.stats.end())})}setScene(){this.scene=new Sl}setColors(){if(this.colors={},this.colors.floorOuter={},this.colors.floorOuter.string="#3d2c6a",this.colors.floorOuter.instance=new Le(this.colors.floorOuter.string),this.colors.floorInner={},this.colors.floorInner.string="#150b28",this.colors.floorInner.instance=new Le(this.colors.floorInner.string),this.colors.floorShadow={},this.colors.floorShadow.string="#000000",this.colors.floorShadow.instance=new Le(this.colors.floorShadow.string),this.colors.glow={},this.colors.glow.string="#e2c1ff",this.colors.glow.instance=new Le(this.colors.glow.string),this.debug){this.debug.Register({type:"folder",label:"Colors",open:!0});for(let e in this.colors){const t=this.colors[e];this.debug.Register({object:t,property:"string",type:"color",folder:"Colors",label:e,format:"hex",onChange:()=>{t.instance.set(t.string)}})}}}setWorld(){this.world=new Lb({experience:this}),this.world.navigation.on("interactionStart",()=>{this.startInteract(),this.trigger("interactionStart")}),this.world.navigation.on("interactionEnd",()=>{this.trigger("interactionEnd")}),this.world.navigation.on("levelClick",e=>{this.trigger("levelClick",[e])})}setCamera(){this.camera=new B0({experience:this})}setComposition(){this.composition=new R0({experience:this})}resize(){const e=this.container.getBoundingClientRect();this.config.left=e.left,this.config.top=e.top,this.config.width=e.width,this.config.height=e.height,this.config.pixelRatio=Math.min(window.devicePixelRatio,2),this.config.orientation=this.sizes.viewport.width<this.sizes.viewport.height?"portrait":"landscape",this.composition.resize(),this.camera.resize(),this.world.resize()}startInteract(){if(!this.showLevels){this.showLevels=!0;for(let e=1;e<=6;e++)if(this.resources.groups.loaded.find(t=>t.data.index===e)){const t=this.world.levels.addLevel(e);De.delayedCall(1,()=>{t.show()})}}}endInteract(){this.world.navigation.interactions.end()}goTo(e){this.world.navigation.goTo(e)}destroy(){this.sizes.off("resize.experience"),this.time.off("tick.experience"),this.composition.destroy(),this.resources.destroy(),this.world.destroy(),this.scene.traverse(e=>{e instanceof Ye&&(e.geometry.dispose(),e.material.dispose())}),window.experience=null}}export{Nb as default};
//# sourceMappingURL=HeroExperience-367a3eca.js.map
