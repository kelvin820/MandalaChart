var yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},du=0,fc=1,fu=2;var ki=1,pu=2,Rs=3,Mi=0,tn=1,Tn=2,Gi=0,Cs=1,Br=2,pc=3,mc=4,mu=5;var Hi=100,gu=101,_u=102,xu=103,yu=104,vu=200,Mu=201,Su=202,bu=203,gc=204,_c=205,Eu=206,Tu=207,wu=208,Au=209,Ru=210,Cu=211,Pu=212,Iu=213,Lu=214,zo=0,ko=1,Go=2,ds=3,Ho=4,Vo=5,Wo=6,Xo=7,xc=0,Du=1,Nu=2,Fn=0,yc=1,vc=2,Mc=3,zr=4,Sc=5,bc=6,Ec=7;var Tc=300,Vi=301,Ps=302,Sa=303,ba=304,qo=1e3,Ln=1001,Yo=1002,Be=1003,Uu=1004;var kr=1005;var je=1006,Ea=1007;var Qn=1008;var nn=1009,wc=1010,Ac=1011,Is=1012,Ta=1013,wn=1014,gn=1015,An=1016,wa=1017,Aa=1018,Wi=1020,Rc=35902,Cc=35899,Pc=1021,Ic=1022,Rn=1023,Yn=1026,ti=1027,Ra=1028,Ca=1029,Si=1030,Pa=1031;var Ia=1033,Gr=33776,Hr=33777,Vr=33778,Wr=33779,La=35840,Da=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,Xr=37490,Ga=37491,Ha=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,Ja=37815,Ka=37816,$a=37817,ja=37818,Qa=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,ol=36284,qr=36285,al=36286;var Qs=2300,Zo=2301,Oo=2302,Ql=2303,tc=2400,ec=2401,nc=2402;var Fu=3200;var ll=0,Ou=1,ei="",$e="srgb",tr="srgb-linear",er="linear",pe="srgb";var Bo=7680;var Bu=519,zu=512,ku=513,Gu=514,Lc=515,Hu=516,Vu=517,Dc=518,Nc=519,Uc=35044;var Fc="300 es",fn=2e3,fs=2001;function df(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ff(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wu(){let i=nr("canvas");return i.style.display="block",i}var Th={},ps=null;function ir(...i){let t="THREE."+i.shift();ps?ps("log",t,...i):console.log(t,...i)}function Xu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=Xu(i);let t="THREE."+i.shift();if(ps)ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Wt(...i){i=Xu(i);let t="THREE."+i.shift();if(ps)ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Di(...i){let t=i.join(" ");t in Th||(Th[t]=!0,Ht(...i))}function qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yu={[zo]:zo,[Go]:Wo,[Ho]:Ho,[ds]:Vo,[ko]:ko,[Wo]:Go,[Xo]:Xo,[Vo]:ds},Sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=1234567,Js=Math.PI/180,ms=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function Oc(i,t){return(i%t+t)%t}function pf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ks(i,t,e){return(1-e)*i+e*t}function gf(i,t,e,n){return Ks(i,t,1-Math.exp(-e*n))}function _f(i,t=1){return t-Math.abs(Oc(i,t*2)-t)}function xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mf(i,t){return i+Math.random()*(t-i)}function Sf(i){return i*(.5-Math.random())}function bf(i){i!==void 0&&(wh=i);let t=wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ef(i){return i*Js}function Tf(i){return i*ms}function wf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Af(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zc(i,t){if(t.constructor===Float32Array)return i;let e=cl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function kc(i,t){if(t.constructor===Float32Array)return i;let e=cl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Yr={DEG2RAD:Js,RAD2DEG:ms,generateUUID:ni,clamp:$t,euclideanModulo:Oc,mapLinear:pf,inverseLerp:mf,lerp:Ks,damp:gf,pingpong:_f,smoothstep:xf,smootherstep:yf,randInt:vf,randFloat:Mf,randFloatSpread:Sf,seededRandom:bf,degToRad:Ef,radToDeg:Tf,isPowerOfTwo:wf,ceilPowerOfTwo:Af,floorPowerOfTwo:Bc,setQuaternionFromProperEuler:Rf,normalize:kc,denormalize:zc},st=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),E=Math.sin(y);p=Math.sin(p*y)/E,a=Math.sin(a*y)/E,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ah.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new P,Ah=new ln,Yt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],E=s[4],v=s[7],w=s[2],T=s[5],_=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*g+a*E+l*T,r[6]=o*p+a*v+l*_,r[1]=c*x+h*y+d*w,r[4]=c*g+h*E+d*T,r[7]=c*p+h*v+d*_,r[2]=u*x+f*y+m*w,r[5]=u*g+f*E+m*T,r[8]=u*p+f*v+m*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new Yt,Rh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cf(){let i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:t,whitePoint:n,transfer:er,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var ae=Cf();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,Jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=nr("canvas")),Yi.width=t.width,Yi.height=t.height;let s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pl(s[o].image)):r.push(Pl(s[o]))}else r=Pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var If=0,Il=new P,Qe=class i extends Sn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=je,o=Qn,a=Rn,l=nn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=ni(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Tc;Qe.DEFAULT_ANISOTROPY=1;var ve=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(f+1)/2,w=(p+1)/2,T=(h+u)/4,_=(d+x)/4,M=(m+g)/4;return E>v&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=_/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=M/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ko=class extends Sn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Ko{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sr=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lf,t,Df)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),oi.crossVectors(n,rn),oi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),oi.crossVectors(n,rn)),oi.normalize(),oo.crossVectors(rn,oi),s[0]=oi.x,s[4]=oo.x,s[8]=rn.x,s[1]=oi.y,s[5]=oo.y,s[9]=rn.y,s[2]=oi.z,s[6]=oo.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],E=n[7],v=n[11],w=n[15],T=s[0],_=s[4],M=s[8],L=s[12],R=s[1],I=s[5],F=s[9],H=s[13],C=s[2],G=s[6],q=s[10],z=s[14],rt=s[3],V=s[7],K=s[11],Q=s[15];return r[0]=o*T+a*R+l*C+c*rt,r[4]=o*_+a*I+l*G+c*V,r[8]=o*M+a*F+l*q+c*K,r[12]=o*L+a*H+l*z+c*Q,r[1]=h*T+d*R+u*C+f*rt,r[5]=h*_+d*I+u*G+f*V,r[9]=h*M+d*F+u*q+f*K,r[13]=h*L+d*H+u*z+f*Q,r[2]=m*T+x*R+g*C+p*rt,r[6]=m*_+x*I+g*G+p*V,r[10]=m*M+x*F+g*q+p*K,r[14]=m*L+x*H+g*z+p*Q,r[3]=y*T+E*R+v*C+w*rt,r[7]=y*_+E*I+v*G+w*V,r[11]=y*M+E*F+v*q+w*K,r[15]=y*L+E*H+v*z+w*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],y=l*f-c*u,E=a*f-c*d,v=a*u-l*d,w=o*f-c*h,T=o*u-l*h,_=o*d-a*h;return e*(x*y-g*E+p*v)-n*(m*y-g*w+p*T)+s*(m*E-x*w+p*_)-r*(m*v-x*T+g*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=e*a-n*o,E=e*l-s*o,v=e*c-r*o,w=n*l-s*a,T=n*c-r*a,_=s*c-r*l,M=h*x-d*m,L=h*g-u*m,R=h*p-f*m,I=d*g-u*x,F=d*p-f*x,H=u*p-f*g,C=y*H-E*F+v*I+w*R-T*L+_*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/C;return t[0]=(a*H-l*F+c*I)*G,t[1]=(s*F-n*H-r*I)*G,t[2]=(x*_-g*T+p*w)*G,t[3]=(u*T-d*_-f*w)*G,t[4]=(l*R-o*H-c*L)*G,t[5]=(e*H-s*R+r*L)*G,t[6]=(g*v-m*_-p*E)*G,t[7]=(h*_-u*v+f*E)*G,t[8]=(o*F-a*R+c*M)*G,t[9]=(n*R-e*F-r*M)*G,t[10]=(m*T-x*v+p*y)*G,t[11]=(d*v-h*T-f*y)*G,t[12]=(a*L-o*I-l*M)*G,t[13]=(e*I-n*L+s*M)*G,t[14]=(x*E-m*w-g*y)*G,t[15]=(h*w-d*E+u*y)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,g=o*d,p=a*d,y=l*c,E=l*h,v=l*d,w=n.x,T=n.y,_=n.z;return s[0]=(1-(x+p))*w,s[1]=(f+v)*w,s[2]=(m-E)*w,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+p))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(m+E)*_,s[9]=(g-y)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Zi.set(s[0],s[1],s[2]).length(),a=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);let c=1/o,h=1/a,d=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=fn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===fn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fs)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=fn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===fn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===fs)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zi=new P,yn=new ue,Lf=new P(0,0,0),Df=new P(1,1,1),oi=new P,oo=new P,rn=new P,Ph=new ue,Ih=new ln,Zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var _s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nf=0,Lh=new P,Ji=new ln,kn=new ue,ao=new P,Bs=new P,Uf=new P,Ff=new ln,Dh=new P(1,0,0),Nh=new P(0,1,0),Uh=new P(0,0,1),Fh={type:"added"},Of={type:"removed"},Ki={type:"childadded",child:null},Ll={type:"childremoved",child:null},we=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Zn,n=new ln,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Yt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Dh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Uh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ao.copy(t):ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Bs,ao,this.up):kn.lookAt(ao,Bs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(kn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};we.DEFAULT_UP=new P(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var te=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bf={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Oc(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dl(o,r,t+1/3),this.g=Dl(o,r,t),this.b=Dl(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ae.workingToColorSpace(Xe.copy(this),t),Math.round($t(Xe.r*255,0,255))*65536+Math.round($t(Xe.g*255,0,255))*256+Math.round($t(Xe.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=$e){ae.workingToColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(lo);let n=Ks(ai.h,lo.h,e),s=Ks(ai.s,lo.s,e),r=Ks(ai.l,lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Bt;Bt.NAMES=Zu;var rr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var or=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vn=new P,Gn=new P,Nl=new P,Hn=new P,$i=new P,ji=new P,Oh=new P,Ul=new P,Fl=new P,Ol=new P,Bl=new ve,zl=new ve,kl=new ve,Xn=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Gn.subVectors(n,e),Nl.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Gn),l=vn.dot(Nl),c=Gn.dot(Gn),h=Gn.dot(Nl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Bl.setScalar(0),zl.setScalar(0),kl.setScalar(0),Bl.fromBufferAttribute(t,e),zl.fromBufferAttribute(t,n),kl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(zl,r.y),o.addScaledVector(kl,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Gn.subVectors(t,e),vn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),vn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,n),ji.subVectors(r,n),Ul.subVectors(t,n);let l=$i.dot(Ul),c=ji.dot(Ul);if(l<=0&&c<=0)return e.copy(n);Fl.subVectors(t,s);let h=$i.dot(Fl),d=ji.dot(Fl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector($i,o);Ol.subVectors(t,r);let f=$i.dot(Ol),m=ji.dot(Ol);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ji,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Oh.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Oh,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector($i,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),ho.subVectors(this.max,zs),Qi.subVectors(t.a,zs),ts.subVectors(t.b,zs),es.subVectors(t.c,zs),li.subVectors(ts,Qi),ci.subVectors(es,ts),Ri.subVectors(Qi,es);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ri.z,Ri.y,li.z,0,-li.x,ci.z,0,-ci.x,Ri.z,0,-Ri.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ri.y,Ri.x,0];return!Gl(e,Qi,ts,es,ho)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,Qi,ts,es,ho))?!1:(uo.crossVectors(li,ci),e=[uo.x,uo.y,uo.z],Gl(e,Qi,ts,es,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vn=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,co=new Dn,Qi=new P,ts=new P,es=new P,li=new P,ci=new P,Ri=new P,zs=new P,ho=new P,uo=new P,Ci=new P;function Gl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ci.fromArray(i,r);let a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ce=new P,fo=new st,zf=0,pn=class extends Sn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=gn,this.version=0,this._normalizationScale=t!==void 0?cl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):zc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):kc(t,this.array)}};var ar=class extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lr=class extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},kf=new Dn,ks=new P,Hl=new P,Nn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);let e=ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Hl)),this.expandByPoint(ks.copy(t.center).sub(Hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gf=0,dn=new ue,Vl=new we,ns=new P,on=new Dn,Gs=new Dn,Oe=new P,be=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(df(t)?lr:ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Vl.lookAt(t),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(on.min,Gs.min),on.expandByPoint(Oe),Oe.addVectors(on.max,Gs.max),on.expandByPoint(Oe)):(on.expandByPoint(Gs.min),on.expandByPoint(Gs.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(t,c),Oe.add(ns)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new P,l[L]=new P;let h=new P,d=new P,u=new P,f=new st,m=new st,x=new st,g=new P,p=new P;function y(L,R,I){c[L]=c[R]=c[I]=1,h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,I),d.sub(h),u.sub(h),m.sub(f),x.sub(f);let F=1/(m.x*x.y-x.x*m.y);isFinite(F)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(F),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(F),a[L].add(g),a[R].add(g),a[I].add(g),l[L].add(p),l[R].add(p),l[I].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,R=E.length;L<R;++L){let I=E[L],F=I.start,H=I.count;for(let C=F,G=F+H;C<G;C+=3)y(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let v=new P,w=new P,T=new P,_=new P;function M(L){T.fromBufferAttribute(s,L),_.copy(T);let R=a[L];v.copy(R),v.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(_,R);let F=w.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,F)}for(let L=0,R=n.count;L<R;++L)c[L]&&M(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new pn(u,h,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},jo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uc,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Bh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Bh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Bh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ni()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ke=new P,cr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?cl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):zc(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):kc(t,this.data.array)}},Wl=new P,Hf=new P,Vf=new Yt,an=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wl.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vf.getNormalMatrix(t),s=this.coplanarPoint(Wl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wf=0,bn=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Cs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new an().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ui=class extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},is,Hs=new P,ss=new P,rs=new P,os=new st,Vs=new st,Ju=new ue,po=new P,Ws=new P,mo=new P,zh=new st,Xl=new st,kh=new st,Ni=class extends we{constructor(t=new ui){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jo(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new cr(n,3,0,!1)),is.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new st(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Ju.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;go(po.set(-.5,-.5,0),rs,o,ss,s,r),go(Ws.set(.5,-.5,0),rs,o,ss,s,r),go(mo.set(.5,.5,0),rs,o,ss,s,r),zh.set(0,0),Xl.set(1,0),kh.set(1,1);let a=t.ray.intersectTriangle(po,Ws,mo,!1,Hs);if(a===null&&(go(Ws.set(-.5,.5,0),rs,o,ss,s,r),Xl.set(0,1),a=t.ray.intersectTriangle(po,mo,Ws,!1,Hs),a===null))return;let l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:Xn.getInterpolation(Hs,po,Ws,mo,zh,Xl,kh,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function go(i,t,e,n,s,r){os.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Vs.x=r*os.x-s*os.y,Vs.y=s*os.x+r*os.y):Vs.copy(os),i.copy(t),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(Ju)}var Wn=new P,ql=new P,_o=new P,xo=new P,Jn=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ql.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),xo.copy(this.origin).sub(ql);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=xo.dot(this.direction),l=-xo.dot(_o),c=xo.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ql).addScaledVector(_o,u),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,y=n.y-o.y,E=n.z-o.z,v=Math.abs(l),w=Math.abs(c),T=Math.abs(h),_,M,L,R,I,F,H,C,G,q,z,rt;if(v>=w&&v>=T?(L=l,F=d,G=m,rt=p,l>=0?(_=c,M=h,R=u,I=f,H=x,C=g,q=y,z=E):(_=h,M=c,R=f,I=u,H=g,C=x,q=E,z=y)):w>=T?(L=c,F=u,G=x,rt=y,c>=0?(_=h,M=l,R=f,I=d,H=g,C=m,q=E,z=p):(_=l,M=h,R=d,I=f,H=m,C=g,q=p,z=E)):(L=h,F=f,G=g,rt=E,h>=0?(_=l,M=c,R=d,I=u,H=m,C=x,q=p,z=y):(_=c,M=l,R=u,I=d,H=x,C=m,q=y,z=p)),L===0)return null;let V=_/L,K=M/L,Q=1/L,_t=R-V*F,Ct=I-K*F,W=H-V*G,ut=C-K*G,At=q-V*rt,Ut=z-K*rt,Z=At*ut-Ut*W,St=_t*Ut-Ct*At,Jt=W*Ct-ut*_t;if(s){if(Z<0||St<0||Jt<0)return null}else if((Z<0||St<0||Jt<0)&&(Z>0||St>0||Jt>0))return null;let Rt=Z+St+Jt;if(Rt===0)return null;let Pt=Q*(Z*F+St*G+Jt*rt);return(Rt>0?Pt<0:Pt>0)?null:this.at(Pt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kn=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gh=new ue,Pi=new Jn,yo=new Nn,Hh=new P,vo=new P,Mo=new P,So=new P,Yl=new P,bo=new P,Vh=new P,Eo=new P,Ge=class extends we{constructor(t=new be,e=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Yl.fromBufferAttribute(d,t),o?bo.addScaledVector(Yl,h):bo.addScaledVector(Yl.sub(e),h))}e.add(bo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(yo.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(yo,Hh)===null||Pi.origin.distanceToSquared(Hh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,w=E;v<w;v+=3){let T=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);s=To(this,p,t,n,c,h,d,T,_,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);s=To(this,o,t,n,c,h,d,y,E,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,w=E;v<w;v+=3){let T=v,_=v+1,M=v+2;s=To(this,p,t,n,c,h,d,T,_,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,E=g+1,v=g+2;s=To(this,o,t,n,c,h,d,y,E,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Xf(i,t,e,n,s,r,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Eo);return c<e.near||c>e.far?null:{distance:c,point:Eo.clone(),object:i}}function To(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,vo),i.getVertexPosition(l,Mo),i.getVertexPosition(c,So);let h=Xf(i,t,e,n,vo,Mo,So,Vh);if(h){let d=new P;Xn.getBarycoord(Vh,vo,Mo,So,d),s&&(h.uv=Xn.getInterpolatedAttribute(s,a,l,c,d,new st)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,a,l,c,d,new st)),o&&(h.normal=Xn.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Xn.getNormal(vo,Mo,So,u.normal),h.face=u,h.barycoord=d}return h}var hr=class extends Qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Be,h=Be,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends pn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},as=new ue,Wh=new ue,wo=[],Xh=new Dn,qf=new ue,Xs=new Ge,qs=new Nn,ys=class extends Ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Xh.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(Xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),qs.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Wh.multiplyMatrices(n,as),Xs.matrixWorld=Wh,Xs.raycast(t,wo);for(let o=0,a=wo.length;o<a;o++){let l=wo[o];l.instanceId=r,l.object=this,e.push(l)}wo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(s*this.count),s,this.count,Ra,gn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ii=new Nn,Yf=new st(.5,.5),Ao=new P,di=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,o=new an){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],E=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,p-m,w-y).normalize(),s[1].setComponents(c+o,f+h,p+m,w+y).normalize(),s[2].setComponents(c+a,f+d,p+x,w+E).normalize(),s[3].setComponents(c-a,f-d,p-x,w-E).normalize(),n)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,f-u,p-g,w-v).normalize();else if(s[4].setComponents(c-l,f-u,p-g,w-v).normalize(),e===fn)s[5].setComponents(c+l,f+u,p+g,w+v).normalize();else if(e===fs)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);let e=Yf.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ao.x=s.normal.x>0?t.max.x:t.min.x,Ao.y=s.normal.y>0?t.max.y:t.min.y,Ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qh=new ue,Qo=class i{constructor(){this.coordinateSystem=fn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];qh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new di),n[s].setFromProjectionMatrix(qh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new di),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var fi=class extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ta=new P,ea=new P,Yh=new ue,Ys=new Jn,Ro=new Nn,Zl=new P,Zh=new P,pi=class extends we{constructor(t=new be,e=new fi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ta.fromBufferAttribute(e,s-1),ea.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ta.distanceTo(ea);t.setAttribute("lineDistance",new he(n,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,t.ray.intersectsSphere(Ro)===!1)return;Yh.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(Yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),y=h.getX(x+1),E=Co(this,t,Ys,l,p,y,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Co(this,t,Ys,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Co(this,t,Ys,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Co(this,t,Ys,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Co(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ta.fromBufferAttribute(a,s),ea.fromBufferAttribute(a,r),e.distanceSqToSegment(ta,ea,Zl,Zh)>n)return;Zl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Zl);if(!(c<t.near||c>t.far))return{distance:c,point:Zh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var dr=class extends pi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},vs=class extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jh=new ue,ic=new Jn,Po=new Nn,Io=new P,fr=class extends we{constructor(t=new be,e=new vs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,t.ray.intersectsSphere(Po)===!1)return;Jh.copy(s).invert(),ic.copy(t.ray).applyMatrix4(Jh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,x=f;m<x;m++){let g=c.getX(m);Io.fromBufferAttribute(d,g),Kh(Io,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,x=f;m<x;m++)Io.fromBufferAttribute(d,m),Kh(Io,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kh(i,t,e,n,s,r,o){let a=ic.distanceSqToPoint(i);if(a<e){let l=new P;ic.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var pr=class extends Qe{constructor(t=[],e=Vi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ui=class extends Qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $n=class extends Qe{constructor(t,e,n=wn,s,r,o,a=Be,l=Be,c,h=Yn,d=1){if(h!==Yn&&h!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},mr=class extends $n{constructor(t,e=wn,n=Vi,s,r,o=Be,a=Be,l,c=Yn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gr=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Un=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function m(x,g,p,y,E,v,w,T,_,M,L){let R=v/_,I=w/M,F=v/2,H=w/2,C=T/2,G=_+1,q=M+1,z=0,rt=0,V=new P;for(let K=0;K<q;K++){let Q=K*I-H;for(let _t=0;_t<G;_t++){let Ct=_t*R-F;V[x]=Ct*y,V[g]=Q*E,V[p]=C,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[p]=T>0?1:-1,h.push(V.x,V.y,V.z),d.push(_t/_),d.push(1-K/M),z+=1}}for(let K=0;K<M;K++)for(let Q=0;Q<_;Q++){let _t=u+Q+G*K,Ct=u+Q+G*(K+1),W=u+(Q+1)+G*(K+1),ut=u+(Q+1)+G*K;l.push(_t,Ct,ut),l.push(Ct,W,ut),rt+=6}a.addGroup(f,rt,L),f+=rt,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var jn=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(f,2));function y(){let v=new P,w=new P,T=0,_=(e-t)/n;for(let M=0;M<=r;M++){let L=[],R=M/r,I=R*(e-t)+t;for(let F=0;F<=s;F++){let H=F/s,C=H*l+a,G=Math.sin(C),q=Math.cos(C);w.x=I*G,w.y=-R*n+g,w.z=I*q,d.push(w.x,w.y,w.z),v.set(G,_,q).normalize(),u.push(v.x,v.y,v.z),f.push(H,1-R),L.push(m++)}x.push(L)}for(let M=0;M<s;M++)for(let L=0;L<r;L++){let R=x[L][M],I=x[L+1][M],F=x[L+1][M+1],H=x[L][M+1];(t>0||L!==0)&&(h.push(R,I,H),T+=3),(e>0||L!==r-1)&&(h.push(I,F,H),T+=3)}c.addGroup(p,T,0),p+=T}function E(v){let w=m,T=new st,_=new P,M=0,L=v===!0?t:e,R=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),m++;let I=m;for(let F=0;F<=s;F++){let C=F/s*l+a,G=Math.cos(C),q=Math.sin(C);_.x=L*q,_.y=g*R,_.z=L*G,d.push(_.x,_.y,_.z),u.push(0,R,0),T.x=G*.5+.5,T.y=q*.5*R+.5,f.push(T.x,T.y),m++}for(let F=0;F<s;F++){let H=w+F,C=I+F;v===!0?h.push(C,C+1,H):h.push(C+1,C,H),M+=3}c.addGroup(p,M,v===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mi=class i extends jn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_r=class i extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new P,v=new P,w=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],v),f(e[T+2],w),l(E,v,w,y)}function l(y,E,v,w){let T=w+1,_=[];for(let M=0;M<=T;M++){_[M]=[];let L=y.clone().lerp(v,M/T),R=E.clone().lerp(v,M/T),I=T-M;for(let F=0;F<=I;F++)F===0&&M===T?_[M][F]=L:_[M][F]=L.clone().lerp(R,F/I)}for(let M=0;M<T;M++)for(let L=0;L<2*(T-M)-1;L++){let R=Math.floor(L/2);L%2===0?(u(_[M][R+1]),u(_[M+1][R]),u(_[M][R])):(u(_[M][R+1]),u(_[M+1][R+1]),u(_[M+1][R]))}}function c(y){let E=new P;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(y),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let y=new P;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let v=g(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(v,1-w)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let E=o[y+0],v=o[y+2],w=o[y+4],T=Math.max(E,v,w),_=Math.min(E,v,w);T>.9&&_<.1&&(E<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,E){let v=y*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function m(){let y=new P,E=new P,v=new P,w=new P,T=new st,_=new st,M=new st;for(let L=0,R=0;L<r.length;L+=9,R+=6){y.set(r[L+0],r[L+1],r[L+2]),E.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),T.set(o[R+0],o[R+1]),_.set(o[R+2],o[R+3]),M.set(o[R+4],o[R+5]),w.copy(y).add(E).add(v).divideScalar(3);let I=g(w);x(T,R+0,y,I),x(_,R+2,E,I),x(M,R+4,v,I)}}function x(y,E,v,w){w<0&&y.x===1&&(o[E]=y.x-1),v.x===0&&v.z===0&&(o[E]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},xr=class i extends _r{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new ue;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos($t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($t(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ms=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},na=class extends Ms{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var $h=new P,jh=new P,Jl=new Gc,Kl=new Gc,$l=new Gc,ia=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(jh.subVectors(s[0],s[1]).add(s[0]),c=jh);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($h.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$h),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Jl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,g),Kl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,g),$l.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Jl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Kl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),$l.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Jl.calc(l),Kl.calc(l),$l.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Zf(i,t){let e=1-i;return e*e*t}function Jf(i,t){return 2*(1-i)*i*t}function Kf(i,t){return i*i*t}function $s(i,t,e,n){return Zf(i,t)+Jf(i,e)+Kf(i,n)}function $f(i,t){let e=1-i;return e*e*e*t}function jf(i,t){let e=1-i;return 3*e*e*i*t}function Qf(i,t){return 3*(1-i)*i*i*t}function tp(i,t){return i*i*i*t}function js(i,t,e,n,s){return $f(i,t)+jf(i,e)+Qf(i,n)+tp(i,s)}var yr=class extends hn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sa=class extends hn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y),js(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vr=class extends hn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends hn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mr=class extends hn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($s(t,s.x,r.x,o.x),$s(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends hn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($s(t,s.x,r.x,o.x),$s(t,s.y,r.y,o.y),$s(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Qh(a,l.x,c.x,h.x,d.x),Qh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},sc=Object.freeze({__proto__:null,ArcCurve:na,CatmullRomCurve3:ia,CubicBezierCurve:yr,CubicBezierCurve3:sa,EllipseCurve:Ms,LineCurve:vr,LineCurve3:ra,QuadraticBezierCurve:Mr,QuadraticBezierCurve3:oa,SplineCurve:Sr}),aa=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new sc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},br=class extends aa{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vr(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Mr(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new yr(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Sr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ms(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ss=class extends br{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new br().fromJSON(s))}return this}};function ep(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ku(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=op(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],m=i[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Er(r,o,e,a,l,c,0),o}function Ku(i,t,e,n,s){let r;if(s===_p(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=tu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=tu(o/n|0,i[o],i[o+1],r);return r&&bs(r,r.next)&&(wr(r),r=r.next),r}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||Se(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&up(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ip(i,n,s,r):np(i)){t.push(l.i,i.i,c.i),wr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sp(Fi(i),t),Er(i,t,e,n,s,r,2)):o===2&&rp(i,t,e,n,s,r):Er(Fi(i),t,e,n,s,r,1);break}}}function np(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Zs(s,a,r,l,o,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ip(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),x=Math.max(a,l,c),g=Math.max(h,d,u),p=rc(f,m,t,e,n),y=rc(x,g,t,e,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=p&&v&&v.z<=y;){if(E.x>=f&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Zs(a,h,l,d,c,u,E.x,E.y)&&Se(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Zs(a,h,l,d,c,u,v.x,v.y)&&Se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Zs(a,h,l,d,c,u,E.x,E.y)&&Se(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Zs(a,h,l,d,c,u,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!bs(n,s)&&ju(n,e,e.next,s)&&Tr(n,s)&&Tr(s,n)&&(t.push(n.i,e.i,s.i),wr(e),wr(e.next),e=i=s),e=e.next}while(e!==i);return Fi(e)}function rp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pp(o,a)){let l=Qu(o,a);o=Fi(o,o.next),l=Fi(l,l.next),Er(o,t,e,n,s,r,0),Er(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function op(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ku(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(fp(c))}s.sort(ap);for(let r=0;r<s.length;r++)e=lp(s[r],e);return e}function ap(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function lp(i,t){let e=cp(i,t);if(!e)return t;let n=Qu(e,i);return Fi(n,n.next),Fi(e,e.next)}function cp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(bs(i,e))return e;do{if(bs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&$u(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Tr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&hp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function hp(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function up(i,t,e,n){let s=i;do s.z===0&&(s.z=rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dp(s)}function dp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $u(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Zs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&$u(i,t,e,n,s,r,o,a)}function pp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mp(i,t)&&(Tr(i,t)&&Tr(t,i)&&gp(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||bs(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bs(i,t){return i.x===t.x&&i.y===t.y}function ju(i,t,e,n){let s=Do(Se(i,t,e)),r=Do(Se(i,t,n)),o=Do(Se(e,n,i)),a=Do(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Lo(i,e,t)||r===0&&Lo(i,n,t)||o===0&&Lo(e,i,n)||a===0&&Lo(e,t,n))}function Lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Do(i){return i>0?1:i<0?-1:0}function mp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ju(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Tr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function gp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qu(i,t){let e=oc(i.i,i.x,i.y),n=oc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function tu(i,t,e,n){let s=oc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ac=class{static triangulate(t,e,n=2){return ep(t,e,n)}},Li=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];eu(t),nu(n,t);let o=t.length;e.forEach(eu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,nu(n,e[l]);let a=ac.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function eu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ar=class i extends be{constructor(t=new Ss([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:xp,E,v=!1,w,T,_,M;if(p){E=p.getSpacedPoints(h),v=!0,u=!1;let tt=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,tt),T=new P,_=new P,M=new P}u||(g=0,f=0,m=0,x=0);let L=a.extractPoints(c),R=L.shape,I=L.holes;if(!Li.isClockWise(R)){R=R.reverse();for(let tt=0,ct=I.length;tt<ct;tt++){let lt=I[tt];Li.isClockWise(lt)&&(I[tt]=lt.reverse())}}function H(tt){let lt=10000000000000001e-36,Tt=tt[0];for(let xt=1;xt<=tt.length;xt++){let Xt=xt%tt.length,Nt=tt[Xt],ne=Nt.x-Tt.x,ie=Nt.y-Tt.y,le=ne*ne+ie*ie,U=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(Tt.x),Math.abs(Tt.y)),Ae=lt*U*U;if(le<=Ae){tt.splice(Xt,1),xt--;continue}Tt=Nt}}H(R),I.forEach(H);let C=I.length,G=R;for(let tt=0;tt<C;tt++){let ct=I[tt];R=R.concat(ct)}function q(tt,ct,lt){return ct||Wt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ct,lt)}let z=R.length;function rt(tt,ct,lt){let Tt,xt,Xt,Nt=tt.x-ct.x,ne=tt.y-ct.y,ie=lt.x-tt.x,le=lt.y-tt.y,U=Nt*Nt+ne*ne,Ae=Nt*le-ne*ie;if(Math.abs(Ae)>Number.EPSILON){let se=Math.sqrt(U),ge=Math.sqrt(ie*ie+le*le),yt=ct.x-ne/se,Te=ct.y+Nt/se,Gt=lt.x-le/ge,qt=lt.y+ie/ge,A=((Gt-yt)*le-(qt-Te)*ie)/(Nt*le-ne*ie);Tt=yt+Nt*A-tt.x,xt=Te+ne*A-tt.y;let S=Tt*Tt+xt*xt;if(S<=2)return new st(Tt,xt);Xt=Math.sqrt(S/2)}else{let se=!1;Nt>Number.EPSILON?ie>Number.EPSILON&&(se=!0):Nt<-Number.EPSILON?ie<-Number.EPSILON&&(se=!0):Math.sign(ne)===Math.sign(le)&&(se=!0),se?(Tt=-ne,xt=Nt,Xt=Math.sqrt(U)):(Tt=Nt,xt=ne,Xt=Math.sqrt(U/2))}return new st(Tt/Xt,xt/Xt)}let V=[];for(let tt=0,ct=G.length,lt=ct-1,Tt=tt+1;tt<ct;tt++,lt++,Tt++)lt===ct&&(lt=0),Tt===ct&&(Tt=0),V[tt]=rt(G[tt],G[lt],G[Tt]);let K=[],Q,_t=V.concat();for(let tt=0,ct=C;tt<ct;tt++){let lt=I[tt];Q=[];for(let Tt=0,xt=lt.length,Xt=xt-1,Nt=Tt+1;Tt<xt;Tt++,Xt++,Nt++)Xt===xt&&(Xt=0),Nt===xt&&(Nt=0),Q[Tt]=rt(lt[Tt],lt[Xt],lt[Nt]);K.push(Q),_t=_t.concat(Q)}let Ct;if(g===0)Ct=Li.triangulateShape(G,I);else{let tt=[],ct=[];for(let lt=0;lt<g;lt++){let Tt=lt/g,xt=f*Math.cos(Tt*Math.PI/2),Xt=m*Math.sin(Tt*Math.PI/2)+x;for(let Nt=0,ne=G.length;Nt<ne;Nt++){let ie=q(G[Nt],V[Nt],Xt);St(ie.x,ie.y,-xt),Tt===0&&tt.push(ie)}for(let Nt=0,ne=C;Nt<ne;Nt++){let ie=I[Nt];Q=K[Nt];let le=[];for(let U=0,Ae=ie.length;U<Ae;U++){let se=q(ie[U],Q[U],Xt);St(se.x,se.y,-xt),Tt===0&&le.push(se)}Tt===0&&ct.push(le)}}Ct=Li.triangulateShape(tt,ct)}let W=Ct.length,ut=m+x;for(let tt=0;tt<z;tt++){let ct=u?q(R[tt],_t[tt],ut):R[tt];v?(_.copy(w.normals[0]).multiplyScalar(ct.x),T.copy(w.binormals[0]).multiplyScalar(ct.y),M.copy(E[0]).add(_).add(T),St(M.x,M.y,M.z)):St(ct.x,ct.y,0)}for(let tt=1;tt<=h;tt++)for(let ct=0;ct<z;ct++){let lt=u?q(R[ct],_t[ct],ut):R[ct];v?(_.copy(w.normals[tt]).multiplyScalar(lt.x),T.copy(w.binormals[tt]).multiplyScalar(lt.y),M.copy(E[tt]).add(_).add(T),St(M.x,M.y,M.z)):St(lt.x,lt.y,d/h*tt)}for(let tt=g-1;tt>=0;tt--){let ct=tt/g,lt=f*Math.cos(ct*Math.PI/2),Tt=m*Math.sin(ct*Math.PI/2)+x;for(let xt=0,Xt=G.length;xt<Xt;xt++){let Nt=q(G[xt],V[xt],Tt);St(Nt.x,Nt.y,d+lt)}for(let xt=0,Xt=I.length;xt<Xt;xt++){let Nt=I[xt];Q=K[xt];for(let ne=0,ie=Nt.length;ne<ie;ne++){let le=q(Nt[ne],Q[ne],Tt);v?St(le.x,le.y+E[h-1].y,E[h-1].x+lt):St(le.x,le.y,d+lt)}}}At(),Ut();function At(){let tt=s.length/3;if(u){let ct=0,lt=z*ct;for(let Tt=0;Tt<W;Tt++){let xt=Ct[Tt];Jt(xt[2]+lt,xt[1]+lt,xt[0]+lt)}ct=h+g*2,lt=z*ct;for(let Tt=0;Tt<W;Tt++){let xt=Ct[Tt];Jt(xt[0]+lt,xt[1]+lt,xt[2]+lt)}}else{for(let ct=0;ct<W;ct++){let lt=Ct[ct];Jt(lt[2],lt[1],lt[0])}for(let ct=0;ct<W;ct++){let lt=Ct[ct];Jt(lt[0]+z*h,lt[1]+z*h,lt[2]+z*h)}}n.addGroup(tt,s.length/3-tt,0)}function Ut(){let tt=s.length/3,ct=0;Z(G,ct),ct+=G.length;for(let lt=0,Tt=I.length;lt<Tt;lt++){let xt=I[lt];Z(xt,ct),ct+=xt.length}n.addGroup(tt,s.length/3-tt,1)}function Z(tt,ct){let lt=tt.length;for(;--lt>=0;){let Tt=lt,xt=lt-1;xt<0&&(xt=tt.length-1);for(let Xt=0,Nt=h+g*2;Xt<Nt;Xt++){let ne=z*Xt,ie=z*(Xt+1),le=ct+Tt+ne,U=ct+xt+ne,Ae=ct+xt+ie,se=ct+Tt+ie;Rt(le,U,Ae,se)}}}function St(tt,ct,lt){l.push(tt),l.push(ct),l.push(lt)}function Jt(tt,ct,lt){Pt(tt),Pt(ct),Pt(lt);let Tt=s.length/3,xt=y.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);Vt(xt[0]),Vt(xt[1]),Vt(xt[2])}function Rt(tt,ct,lt,Tt){Pt(tt),Pt(ct),Pt(Tt),Pt(ct),Pt(lt),Pt(Tt);let xt=s.length/3,Xt=y.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);Vt(Xt[0]),Vt(Xt[1]),Vt(Xt[3]),Vt(Xt[1]),Vt(Xt[2]),Vt(Xt[3])}function Pt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function Vt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sc[s.type]().fromJSON(s)),new i(n,t.options)}},xp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,o),new st(a,l),new st(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-d),new st(u,1-m),new st(x,1-p)]:[new st(a,1-l),new st(h,1-d),new st(f,1-m),new st(g,1-p)]}};function yp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Rr=class i extends _r{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Oi=class i extends be{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$t(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new P,u=new st,f=new P,m=new P,x=new P,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let y=0;y<=e;y++){let E=n+y*h*s,v=Math.sin(E),w=Math.cos(E);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*v,d.y=t[T].y,d.z=t[T].x*w,o.push(d.x,d.y,d.z),u.x=y/e,u.y=T/(t.length-1),a.push(u.x,u.y);let _=l[3*T+0]*v,M=l[3*T+1],L=l[3*T+0]*w;c.push(_,M,L)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){let v=E+y*t.length,w=v,T=v+t.length,_=v+t.length+1,M=v+1;r.push(w,T,M),r.push(_,M,T)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Bi=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*u-o;for(let E=0;E<c;E++){let v=E*d-r;m.push(v,-y,0),x.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let E=y+c*p,v=y+c*(p+1),w=y+1+c*(p+1),T=y+1+c*p;f.push(E,v,T),f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Cr=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],E=p/n,v=o+E*a,w=t*Math.cos(v),T=Math.sqrt(t*t-w*w),_=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){let L=M/e,R=s+L*r;d.x=-T*Math.cos(R),d.y=w,d.z=T*Math.sin(R),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(L+_,1-E),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let E=h[p][y+1],v=h[p][y],w=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(E,v,T),(p!==n-1||l<Math.PI)&&f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(iu(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(iu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=Xi(i[e]);for(let s in n)t[s]=n[s]}return t}function iu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var td={clone:Xi,merge:Ye},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new st().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},la=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},En=class extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Pr=class extends En{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Di('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Di('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ca=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ha=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ls(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function No(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ec:r=t,a=2*e-n;break;case nc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ec:o=t,l=2*n-e;break;case nc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,E=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+y*o[c+w]+E*o[l+w]+v*o[d+w];return r}},da=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},fa=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pa=class extends gi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=f*u+m*2,y=d[p],E=d[p+1],v=t*u+m*2,w=h[v],T=h[v+1],_=Ep(n,e,y,w,s);r[m]=ed(_,x,E,T,g)}return r}};function ed(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function bp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ep(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=ed(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=bp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ls(e,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ls(t.times,Array),values:ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),No(t.settings)&&(n.settings={inTangents:ls(t.settings.inTangents,Array),outTangents:ls(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Zo:e=this.InterpolantFactoryMethodLinear;break;case Oo:e=this.InterpolantFactoryMethodSmooth;break;case Ql:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;No(this.settings)&&(su(this.settings.inTangents,t),su(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;No(this.settings)&&(ru(this.settings.inTangents,t),ru(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ff(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,No(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function su(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function ru(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Zo;var _i=class extends un{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Qs;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="number";var _a=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ir=class extends un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends un{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Qs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="vector";var ya=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nd=new ya,va=class{constructor(t){this.manager=t!==void 0?t:nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends we{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Lr=class extends Es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},jl=new ue,ou=new P,au=new P,Dr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new di,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(ou),au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(au),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(jl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Uo=new P,Fo=new ln,In=new P,Nr=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Uo,Fo,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Uo,Fo,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new P,lu=new st,cu=new st,qe=class extends Nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var lc=class extends Dr{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},zi=class extends Es{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ur=class extends Nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cc=class extends Dr{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends Es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new cc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var cs=-90,hs=1,ws=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new qe(cs,hs,t,e);r.layers=this.layers,this.add(r);let o=new qe(cs,hs,t,e);o.layers=this.layers,this.add(o);let a=new qe(cs,hs,t,e);a.layers=this.layers,this.add(a);let l=new qe(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new qe(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ma=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Vc="\\[\\]\\.:\\/",Tp=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",wp="[^"+Vc.replace("\\.","")+"]",Ap=/((?:WC+[\/:])*)/.source.replace("WC",Wc),Rp=/(WCOD+)?/.source.replace("WCOD",wp),Cp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),Pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),Ip=new RegExp("^"+Ap+Rp+Cp+Pp+"$"),Lp=["material","materials","bones","map"],hc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tp,"")}static parseTrackName(t){let e=Ip.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=hc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hy=new Float32Array(1);var hu=new ue,Fr=class{constructor(t,e,n=0,s=1/0){this.ray=new Jn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hu),this}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(uu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uc(t[s],this,n,e);return n.sort(uu),n}};function uu(i,t){return i.distance-t.distance}function uc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)uc(r[o],t,e,!0)}}var As=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var dc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Or=class extends Sn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Xc(i,t,e,n){let s=Dp(n);switch(e){case Pc:return i*t;case Ra:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case Si:return i*t*2/s.components*s.byteLength;case Pa:return i*t*2/s.components*s.byteLength;case Ic:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Ia:return i*t*4/s.components*s.byteLength;case Gr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case La:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case Xr:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qr:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dp(i){switch(i){case nn:case wc:return{byteLength:1,components:1};case Is:case Ac:case An:return{byteLength:2,components:1};case wa:case Aa:return{byteLength:2,components:4};case wn:case Ta:case gn:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ed(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Up(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,om=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,s0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P0=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,H0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,W0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,j0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,tg=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ig=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,og=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Fp,alphahash_pars_fragment:Op,alphamap_fragment:Bp,alphamap_pars_fragment:zp,alphatest_fragment:kp,alphatest_pars_fragment:Gp,aomap_fragment:Hp,aomap_pars_fragment:Vp,batching_pars_vertex:Wp,batching_vertex:Xp,begin_vertex:qp,beginnormal_vertex:Yp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:tm,color_fragment:em,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:sm,common:rm,defaultnormal_vertex:om,displacementmap_pars_vertex:am,displacementmap_vertex:lm,emissivemap_fragment:cm,emissivemap_pars_fragment:hm,colorspace_fragment:um,colorspace_pars_fragment:dm,envmap_fragment:fm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Am,envmap_vertex:_m,fog_vertex:xm,fog_pars_vertex:ym,fog_fragment:vm,fog_pars_fragment:Mm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:bm,lights_lambert_fragment:Em,lights_lambert_pars_fragment:Tm,lights_pars_begin:wm,lights_toon_fragment:Rm,lights_toon_pars_fragment:Cm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Im,lights_physical_fragment:Lm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Nm,lights_fragment_maps:Um,lights_fragment_end:Fm,lightprobes_pars_fragment:Om,logdepthbuf_fragment:Bm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Gm,map_fragment:Hm,map_pars_fragment:Vm,map_particle_fragment:Wm,map_particle_pars_fragment:Xm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:Ym,morphinstance_vertex:Zm,morphcolor_vertex:Jm,morphnormal_vertex:Km,morphtarget_pars_vertex:$m,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:t0,normal_pars_fragment:e0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:o0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:l0,opaque_fragment:c0,packing:h0,premultiplied_alpha_fragment:u0,project_vertex:d0,dithering_fragment:f0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:x0,shadowmap_vertex:y0,shadowmask_pars_fragment:v0,skinbase_vertex:M0,skinning_pars_vertex:S0,skinning_vertex:b0,skinnormal_vertex:E0,specularmap_fragment:T0,specularmap_pars_fragment:w0,tonemapping_fragment:A0,tonemapping_pars_fragment:R0,transmission_fragment:C0,transmission_pars_fragment:P0,uv_pars_fragment:I0,uv_pars_vertex:L0,uv_vertex:D0,worldpos_vertex:N0,background_vert:U0,background_frag:F0,backgroundCube_vert:O0,backgroundCube_frag:B0,cube_vert:z0,cube_frag:k0,depth_vert:G0,depth_frag:H0,distance_vert:V0,distance_frag:W0,equirect_vert:X0,equirect_frag:q0,linedashed_vert:Y0,linedashed_frag:Z0,meshbasic_vert:J0,meshbasic_frag:K0,meshlambert_vert:$0,meshlambert_frag:j0,meshmatcap_vert:Q0,meshmatcap_frag:tg,meshnormal_vert:eg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:og,meshtoon_vert:ag,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:ug,shadow_frag:dg,sprite_vert:fg,sprite_frag:pg},Et={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Bn={basic:{uniforms:Ye([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ye([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ye([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ye([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ye([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ye([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ye([Et.points,Et.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ye([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ye([Et.common,Et.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ye([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ye([Et.sprite,Et.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:Ye([Et.common,Et.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:Ye([Et.lights,Et.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Bn.physical={uniforms:Ye([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var hl={r:0,b:0,g:0},mg=new ue,Td=new Yt;Td.set(-1,0,0,0,1,0,0,0,1);function gg(i,t,e,n,s,r){let o=new Bt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let v=y.backgroundBlurriness>0;E=t.get(E,v)}return E}function m(y){let E=!1,v=f(y);v===null?g(o,a):v&&v.isColor&&(g(v,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,E){let v=f(E);v&&v.isCubeTexture?(c===void 0&&(c=new Ge(new Un(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Xi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Td),c.material.toneMapped=ae.getTransfer(v.colorSpace)!==pe,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ge(new Bi(2,2),new mn({name:"BackgroundMaterial",uniforms:Xi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,E){y.getRGB(hl,Hc(i)),e.buffers.color.setClear(hl.r,hl.g,hl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:x,dispose:p}}function _g(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,F,H,C,G){let q=!1,z=d(I,C,H,F);r!==z&&(r=z,c(r.object)),q=f(I,C,H,G),q&&m(I,C,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(I,F,H,C),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,F,H,C){let G=C.wireframe===!0,q=n[F.id];q===void 0&&(q={},n[F.id]=q);let z=I.isInstancedMesh===!0?I.id:0,rt=q[z];rt===void 0&&(rt={},q[z]=rt);let V=rt[H.id];V===void 0&&(V={},rt[H.id]=V);let K=V[G];return K===void 0&&(K=u(l()),V[G]=K),K}function u(I){let F=[],H=[],C=[];for(let G=0;G<e;G++)F[G]=0,H[G]=0,C[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:C,object:I,attributes:{},index:null}}function f(I,F,H,C){let G=r.attributes,q=F.attributes,z=0,rt=H.getAttributes();for(let V in rt)if(rt[V].location>=0){let Q=G[V],_t=q[V];if(_t===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(_t=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(_t=I.instanceColor)),Q===void 0||Q.attribute!==_t||_t&&Q.data!==_t.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function m(I,F,H,C){let G={},q=F.attributes,z=0,rt=H.getAttributes();for(let V in rt)if(rt[V].location>=0){let Q=q[V];Q===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let _t={};_t.attribute=Q,Q&&Q.data&&(_t.data=Q.data),G[V]=_t,z++}r.attributes=G,r.attributesNum=z,r.index=C}function x(){let I=r.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function g(I){p(I,0)}function p(I,F){let H=r.newAttributes,C=r.enabledAttributes,G=r.attributeDivisors;H[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),G[I]!==F&&(i.vertexAttribDivisor(I,F),G[I]=F)}function y(){let I=r.newAttributes,F=r.enabledAttributes;for(let H=0,C=F.length;H<C;H++)F[H]!==I[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function E(I,F,H,C,G,q,z){z===!0?i.vertexAttribIPointer(I,F,H,G,q):i.vertexAttribPointer(I,F,H,C,G,q)}function v(I,F,H,C){x();let G=C.attributes,q=H.getAttributes(),z=F.defaultAttributeValues;for(let rt in q){let V=q[rt];if(V.location>=0){let K=G[rt];if(K===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){let Q=K.normalized,_t=K.itemSize,Ct=t.get(K);if(Ct===void 0)continue;let W=Ct.buffer,ut=Ct.type,At=Ct.bytesPerElement,Ut=ut===i.INT||ut===i.UNSIGNED_INT||K.gpuType===Ta;if(K.isInterleavedBufferAttribute){let Z=K.data,St=Z.isInterleavedBuffer===!0?Z.stride:Z.itemSize,Jt=K.offset;if(Z.isInstancedInterleavedBuffer||Z.isInstancedBufferAttribute){for(let Rt=0;Rt<V.locationSize;Rt++)p(V.location+Rt,Z.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Rt=0;Rt<V.locationSize;Rt++)g(V.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Rt=0;Rt<V.locationSize;Rt++)E(V.location+Rt,_t/V.locationSize,ut,Q,St*At,(Jt+_t/V.locationSize*Rt)*At,Ut)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)p(V.location+Z,K.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<V.locationSize;Z++)g(V.location+Z);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Z=0;Z<V.locationSize;Z++)E(V.location+Z,_t/V.locationSize,ut,Q,_t*At,_t/V.locationSize*Z*At,Ut)}}else if(z!==void 0){let Q=z[rt];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(V.location,Q);break;case 3:i.vertexAttrib3fv(V.location,Q);break;case 4:i.vertexAttrib4fv(V.location,Q);break;default:i.vertexAttrib1fv(V.location,Q)}}}}y()}function w(){L();for(let I in n){let F=n[I];for(let H in F){let C=F[H];for(let G in C){let q=C[G];for(let z in q)h(q[z].object),delete q[z];delete C[G]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let H in F){let C=F[H];for(let G in C){let q=C[G];for(let z in q)h(q[z].object),delete q[z];delete C[G]}}delete n[I.id]}function _(I){for(let F in n){let H=n[F];for(let C in H){let G=H[C];if(G[I.id]===void 0)continue;let q=G[I.id];for(let z in q)h(q[z].object),delete q[z];delete G[I.id]}}}function M(I){for(let F in n){let H=n[F],C=I.isInstancedMesh===!0?I.id:0,G=H[C];if(G!==void 0){for(let q in G){let z=G[q];for(let rt in z)h(z[rt].object),delete z[rt];delete G[q]}delete H[C],Object.keys(H).length===0&&delete n[F]}}}function L(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function xg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function yg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Rn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==nn&&_!==gn&&!M&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,maxSamples:w,samples:T}}function vg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new an,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,E=y*4,v=p.clippingState||null;l.value=v,v=h(m,u,E,f);for(let w=0;w!==E;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,v=f;E!==x;++E,v+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Kr=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Gi});r.uniforms.tEquirect.value=e;let o=new Ge(s,r),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=je),new ws(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},id=256,Mg=3,Sg=20,wd=256,Ad=16,bg=3,Eg=new P,Tg=new Bt,dl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ws(1,10,null),this._boxMesh=new Ge(new Un(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Eg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Tg));let g=new ws(n,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(id,Bc(t))}_fromTexture(t,e){t.mapping===Vi||t.mapping===Ps?this._setSize(t.image.length===0?id:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=sd(t,!1,!1),n=Math.log2(t)-Mg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=sd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Vi||t.mapping===Ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=wg(),this._integrationMaterial=Ag());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ad);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-bg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(wd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Rg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function sd(i,t,e){return new Kr(i,{minFilter:Qn,generateMipmaps:t,type:An,colorSpace:tr,depthBuffer:e})}function $r(i,t,e){return new mn({name:i,uniforms:t,vertexShader:ee.cube_vert,fragmentShader:e,side:tn,blending:Gi,depthTest:!1,depthWrite:!1})}function wg(){return $r("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ag(){return $r("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ad}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rg(){return $r("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function rd(){return $r("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function od(){return $r("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Sa||f===ba)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new Kr(m.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Sa||f===ba,x=f===Vi||f===Ps;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new dl(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new dl(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Sa?u.mapping=Vi:f===ba&&(u.mapping=Ps),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function Ig(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(m){let x=m.attributes;for(let g in x)t.update(x[g],i.ARRAY_BUFFER)}function d(m){let x=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let y=x!==null?x.array.length:g.array.length/3-1,E=g.count>=65535?lr:ar,v=new E(Math.ceil(y/3)*6,1),w=v.array;if(x!==null){let _=x.array;p=x.version;for(let M=0,L=0;M<y;M+=3){let R=_[M+0],I=_[M+1],F=_[M+2];w[L++]=R,w[L++]=I,w[L++]=I,w[L++]=F,w[L++]=F,w[L++]=R}}else{p=g.version;for(let _=0,M=0;_<y;_+=3){let L=_+0,R=_+1,I=_+2;w[M++]=L,w[M++]=R,w[M++]=R,w[M++]=I,w[M++]=I,w[M++]=L}}v.version=p;let T=r.get(m);T&&t.remove(T),r.set(m,v)}function u(m){let x=r.get(m);if(x){let g=m.index;g!==null&&x.version<g.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Lg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Dg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,t,e){let n=new WeakMap,s=new ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let L=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let v=a.attributes.position.count*E,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*w*4*d),_=new sr(T,v,w,d);_.type=gn,_.needsUpdate=!0;let M=E*4;for(let R=0;R<d;R++){let I=g[R],F=p[R],H=y[R],C=v*w*4*R;for(let G=0;G<I.count;G++){let q=G*M;f===!0&&(s.fromBufferAttribute(I,G),T[C+q+0]=s.x,T[C+q+1]=s.y,T[C+q+2]=s.z,T[C+q+3]=0),m===!0&&(s.fromBufferAttribute(F,G),T[C+q+4]=s.x,T[C+q+5]=s.y,T[C+q+6]=s.z,T[C+q+7]=0),x===!0&&(s.fromBufferAttribute(H,G),T[C+q+8]=s.x,T[C+q+9]=s.y,T[C+q+10]=s.z,T[C+q+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new st(v,w)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ug(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Fg={[yc]:"LINEAR_TONE_MAPPING",[vc]:"REINHARD_TONE_MAPPING",[Mc]:"CINEON_TONE_MAPPING",[zr]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[Ec]:"NEUTRAL_TONE_MAPPING",[Sc]:"CUSTOM_TONE_MAPPING"};function Og(i,t,e,n,s,r){let o=new cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new be;h.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new he([0,2,0,0,2,0],2));let d=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ge(h,d),f=new Ur(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,y=null,E=[],v=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<E.length;_++){let M=E[_];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){E=w,v=E.length>0&&E[0].isRenderPass===!0;let T=o.width,_=o.height;E.length>0&&a===null&&(a=new cn(T,_,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new cn(T,_,{type:An,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&E.some(L=>L.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new $n(T,_),r===!0&&(c.format=ti,c.type=Wi)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let L=0;L<E.length;L++){let R=E[L];R.setSize&&R.setSize(T,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,T){if(g||w.toneMapping===Fn&&E.length===0)return!1;if(y=T,T!==null){let _=T.width,M=T.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return v===!1&&w.setRenderTarget(o),p=w.toneMapping,w.toneMapping=Fn,!0},this.hasRenderPass=function(){return v},this.end=function(w,T){w.toneMapping=p,g=!0;let _=o,M=a;for(let L=0;L<E.length;L++){let R=E[L];R.enabled!==!1&&(R.render(w,M,_,T),R.needsSwap!==!1&&(_=M,M=M===a?l:a))}if(m!==w.outputColorSpace||x!==w.toneMapping){m=w.outputColorSpace,x=w.toneMapping,d.defines={},ae.getTransfer(m)===pe&&(d.defines.SRGB_TRANSFER="");let L=Fg[x];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(y),w.render(u,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Rd=new Qe,Cd=new $n(1,1),Pd=new mr(1),Id=new sr,Ld=new $o,Dd=new pr,ad=[],ld=[],cd=new Float32Array(16),hd=new Float32Array(9),ud=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ad[s];if(r===void 0&&(r=new Float32Array(s),ad[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pl(i,t){let e=ld[t];e===void 0&&(e=new Int32Array(t),ld[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;ud.set(n),i.uniformMatrix2fv(this.addr,!1,ud),Ie(e,n)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),Ie(e,n)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;cd.set(n),i.uniformMatrix4fv(this.addr,!1,cd),Ie(e,n)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function ml(i){return i.version===0&&(i.compareFunction=Nc,i.needsUpdate=!0),i}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ml(Cd):r=Rd,e.setTexture2D(t||r,s)}function t_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ld,s)}function e_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ml(Pd):r=Dd,e.setTextureCube(t||r,s)}function n_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Id,s)}function i_(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return kg;case 35666:return Gg;case 35674:return Hg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Kg;case 36295:return $g;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(i,t){i.uniform1fv(this.addr,t)}function r_(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function o_(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function a_(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function l_(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function c_(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function h_(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function u_(i,t){i.uniform1iv(this.addr,t)}function d_(i,t){i.uniform2iv(this.addr,t)}function f_(i,t){i.uniform3iv(this.addr,t)}function p_(i,t){i.uniform4iv(this.addr,t)}function m_(i,t){i.uniform1uiv(this.addr,t)}function g_(i,t){i.uniform2uiv(this.addr,t)}function __(i,t){i.uniform3uiv(this.addr,t)}function x_(i,t){i.uniform4uiv(this.addr,t)}function y_(i,t,e){let n=this.cache,s=t.length,r=pl(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ml(Cd):o=Rd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function v_(i,t,e){let n=this.cache,s=t.length,r=pl(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ld,r[o])}function M_(i,t,e){let n=this.cache,s=t.length,r=pl(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ml(Pd):o=Dd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function S_(i,t,e){let n=this.cache,s=t.length,r=pl(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Id,r[o])}function b_(i){switch(i){case 5126:return s_;case 35664:return r_;case 35665:return o_;case 35666:return a_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}var Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=i_(e.type)}},Jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b_(e.type)}},Kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},qc=/(\w+)(\])?(\[|\.)?/g;function dd(i,t){i.seq.push(t),i.map[t.id]=t}function E_(i,t,e){let n=i.name,s=n.length;for(qc.lastIndex=0;;){let r=qc.exec(n),o=qc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dd(e,c===void 0?new Zc(a,i,t):new Jc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Kc(a),dd(e,d)),e=d}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);E_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function fd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var T_=37297,w_=0;function A_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var pd=new Yt;function R_(i){ae._getMatrix(pd,ae.workingColorSpace,i);let t=`mat3( ${pd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case er:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function md(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+A_(i.getShaderSource(t),a)}else return r}function C_(i,t){let e=R_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var P_={[yc]:"Linear",[vc]:"Reinhard",[Mc]:"Cineon",[zr]:"ACESFilmic",[bc]:"AgX",[Ec]:"Neutral",[Sc]:"Custom"};function I_(i,t){let e=P_[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new P;function L_(){ae.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function N_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Jr(i){return i!==""}function gd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function _d(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(i){return i.replace(F_,O_)}function O_(i,t){let e=ee[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return $c(e)}var B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(B_,z_)}function z_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var k_={[ki]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function G_(i){return k_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H_={[Ps]:"ENVMAP_MODE_REFRACTION"};function V_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":H_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var W_={[xc]:"ENVMAP_BLENDING_MULTIPLY",[Du]:"ENVMAP_BLENDING_MIX",[Nu]:"ENVMAP_BLENDING_ADD"};function X_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":W_[i.combine]||"ENVMAP_BLENDING_NONE"}function q_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=G_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=V_(e),d=X_(e),u=D_(e),f=N_(r),m=s.createProgram(),x,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Jr).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Jr).join(`
`),g.length>0&&(g+=`
`)):(x=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),g=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?ee.tonemapping_pars_fragment:"",e.toneMapping!==Fn?I_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,C_("linearToOutputTexel",e.outputColorSpace),L_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),o=$c(o),o=gd(o,e),o=_d(o,e),a=$c(a),a=gd(a,e),a=_d(a,e),o=xd(o),a=xd(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=p+x+o,E=p+g+a,v=fd(s,s.VERTEX_SHADER,y),w=fd(s,s.FRAGMENT_SHADER,E);s.attachShader(m,v),s.attachShader(m,w),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(R){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(v)||"",H=s.getShaderInfoLog(w)||"",C=I.trim(),G=F.trim(),q=H.trim(),z=!0,rt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,v,w);else{let V=md(s,v,"vertex"),K=md(s,w,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+V+`
`+K)}else C!==""?Ht("WebGLProgram: Program Info Log:",C):(G===""||q==="")&&(rt=!1);rt&&(R.diagnostics={runnable:z,programLog:C,vertexShader:{log:G,prefix:x},fragmentShader:{log:q,prefix:g}})}s.deleteShader(v),s.deleteShader(w),_=new Ls(s,m),M=U_(s,m)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(m,T_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=w,this}var Y_=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qc(t),e.set(t,n)),n}},Qc=class{constructor(t){this.id=Y_++,this.code=t,this.usedTimes=0}};function Z_(i){return i===Si||i===Xr||i===qr}function J_(i,t,e,n,s,r){let o=new _s,a=new jc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,L,R,I,F){let H=R.fog,C=I.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=t.get(_.envMap||G,q),rt=u[_.type],V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let K=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Q=K!==void 0?K.length:0,_t=0;C.morphAttributes.position!==void 0&&(_t=1),C.morphAttributes.normal!==void 0&&(_t=2),C.morphAttributes.color!==void 0&&(_t=3);let Ct,W,ut,At;if(rt){let bt=Bn[rt];Ct=bt.vertexShader,W=bt.fragmentShader}else{Ct=_.vertexShader,W=_.fragmentShader;let bt=a.getVertexShaderStage(_),me=a.getFragmentShaderStage(_);a.update(_,bt,me),ut=bt.id,At=me.id}let Ut=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),St=I.isInstancedMesh===!0,Jt=I.isBatchedMesh===!0,Rt=!!_.map,Pt=!!_.matcap,Vt=!!z,tt=Vt&&z.isPMREMTexture===!0,ct=!!_.aoMap,lt=!!_.lightMap,Tt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Xt=!!_.displacementMap,Nt=!!_.emissiveMap,ne=!!_.metalnessMap,ie=!!_.roughnessMap,le=_.anisotropy>0,U=_.clearcoat>0,Ae=_.diffuseRoughness>0,se=_.dispersion>0,ge=_.retroreflectivity>0,yt=_.iridescence>0,Te=_.sheen>0,Gt=_.transmission>0,qt=le&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,S=U&&!!_.clearcoatNormalMap,B=U&&!!_.clearcoatRoughnessMap,ot=Ae&&!!_.diffuseRoughnessMap,et=yt&&!!_.iridescenceMap,dt=yt&&!!_.iridescenceThicknessMap,vt=Te&&!!_.sheenColorMap,J=Te&&!!_.sheenRoughnessMap,$=!!_.specularMap,pt=!!_.specularColorMap,D=!!_.specularIntensityMap,j=Gt&&!!_.transmissionMap,Y=Gt&&!!_.thicknessMap,mt=!!_.gradientMap,ht=!!_.alphaMap,ft=_.alphaTest>0,Ot=!!_.alphaHash,Qt=!!_.extensions,at=Fn;_.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(at=i.toneMapping);let kt=tt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,jt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:Ct,fragmentShader:W,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:At,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:Jt,batchingColor:Jt&&I._colorsTexture!==null,instancing:St,instancingColor:St&&I.instanceColor!==null,instancingMorph:St&&I.morphTexture!==null,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Rt,matcap:Pt,envMap:Vt,envMapMode:Vt&&z.mapping,envMapPMREM:tt,envMapMaxLod:tt?kt.length-1:null,envMapSize:tt?kt[0].width:null,aoMap:ct,lightMap:lt,bumpMap:Tt,normalMap:xt,displacementMap:Xt,emissiveMap:Nt,normalMapObjectSpace:xt&&_.normalMapType===Ou,normalMapTangentSpace:xt&&_.normalMapType===ll,packedNormalMap:xt&&_.normalMapType===ll&&Z_(_.normalMap.format),metalnessMap:ne,roughnessMap:ie,anisotropy:le,anisotropyMap:qt,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:Ae,diffuseRoughnessMap:ot,dispersion:se,retroreflection:ge,iridescence:yt,iridescenceMap:et,iridescenceThicknessMap:dt,sheen:Te,sheenColorMap:vt,sheenRoughnessMap:J,specularMap:$,specularColorMap:pt,specularIntensityMap:D,transmission:Gt,transmissionMap:j,thicknessMap:Y,gradientMap:mt,opaque:_.transparent===!1&&_.blending===Cs&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:Ot,combine:_.combine,mapUv:Rt&&f(_.map.channel),aoMapUv:ct&&f(_.aoMap.channel),lightMapUv:lt&&f(_.lightMap.channel),bumpMapUv:Tt&&f(_.bumpMap.channel),normalMapUv:xt&&f(_.normalMap.channel),displacementMapUv:Xt&&f(_.displacementMap.channel),emissiveMapUv:Nt&&f(_.emissiveMap.channel),metalnessMapUv:ne&&f(_.metalnessMap.channel),roughnessMapUv:ie&&f(_.roughnessMap.channel),anisotropyMapUv:qt&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(_.sheenRoughnessMap.channel),specularMapUv:$&&f(_.specularMap.channel),specularColorMapUv:pt&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:ht&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(xt||le),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!C.attributes.uv&&(Rt||ht),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Z,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:_t,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(bt=>bt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Rt&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&ae.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&_.extensions.multiDraw===!0||Jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)M.push(L),M.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(g(M,_),p(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function p(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let M=u[_.type],L;if(M){let R=Bn[M];L=td.clone(R.uniforms)}else L=_.uniforms;return L}function E(_,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new q_(i,M,_,s),c.push(L),h.set(M,L)),L}function v(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function T(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:y,acquireProgram:E,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:T}}function K_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function vd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Md(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,x,g,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=g,y.group=p),t++,y}function l(u,f,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let E=a(u,f,m,x,g,p);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(u,f,m,x,g,p){let y=a(u,f,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||$_),n.length>1&&n.sort(f||vd),s.length>1&&s.sort(f||vd)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function j_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Md,i.set(n,[o])):s>=r.length?(o=new Md,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Bt};break;case"SpotLight":e={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function tx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ex=0;function nx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ix(i){let t=new Q_,e=tx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ue,o=new ue;function a(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,E=0,v=0,w=0,T=0,_=0,M=0,L=0,R=0;c.sort(nx);for(let F=0,H=c.length;F<H;F++){let C=c[F],G=C.color,q=C.intensity,z=C.distance,rt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Si?rt=C.shadow.map.texture:rt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=G.r*q,d+=G.g*q,u+=G.b*q;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],q);R++}else if(C.isSunLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,Q=e.get(C);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=rt;let _t=K.getViewportCount();for(let Ct=0;Ct<_t;Ct++)n.sunShadowMatrix[x+Ct]=K.getMatrix(Ct),n.sunShadowCascade[x+Ct]=K._cascadeData[Ct];x+=_t,m++}n.sun[f]=V,f++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,Q=e.get(C);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=rt,n.directionalShadowMatrix[g]=C.shadow.matrix,w++}n.directional[g]=V,g++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(G).multiplyScalar(q),V.distance=z,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[y]=V;let K=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,K.updateMatrices(C),C.castShadow&&L++),n.spotLightMatrix[y]=K.matrix,C.castShadow){let Q=e.get(C);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=rt,_++}y++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(G).multiplyScalar(q),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=V,E++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let K=C.shadow,Q=e.get(C);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=V,p++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(q),V.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[v]=V,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==E||I.hemiLength!==v||I.numSunShadows!==m||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==M||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=E,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=y,I.rectAreaLength=E,I.hemiLength=v,I.numSunShadows=m,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=M,I.numLightProbes=R,n.version=ex++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let v=c[y];if(v.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(v.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Sd(i){let t=new ix(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Sd(i),t.set(s,[a])):r>=o.length?(a=new Sd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ax=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],lx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],bd=new ue,Zr=new P,Yc=new P;function cx(i,t,e){let n=new di,s=new st,r=new st,o=new ve,a=new ca,l=new ha,c={},h=e.maxTextureSize,d={[Mi]:tn,[tn]:Mi,[Tn]:Tn},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new be;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ge(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ki;let p=this.type;this.render=function(T,_,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===pu&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ki);let L=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=p!==this.type;H&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(G=>G.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,G=T.length;C<G;C++){let q=T[C],z=q.shadow;if(z===void 0){Ht("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let rt=z.getFrameExtents();s.multiply(rt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,z.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Rs){if(q.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new cn(s.x,s.y,{format:Si,type:An,minFilter:je,magFilter:je,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new $n(s.x,s.y,gn),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Yn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Be,z.map.depthTexture.magFilter=Be}else q.isPointLight?(z.map=new Kr(s.x),z.map.depthTexture=new mr(s.x,wn)):(z.map=new cn(s.x,s.y),z.map.depthTexture=new $n(s.x,s.y,wn)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Yn,this.type===ki?(z.map.depthTexture.compareFunction=V?Dc:Lc,z.map.depthTexture.minFilter=je,z.map.depthTexture.magFilter=je):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Be,z.map.depthTexture.magFilter=Be);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let K=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,M);let Q=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let _t=0;_t<K;_t++){let Ct=z.getCamera(_t);if(q.isPointLight){let W=z.camera,ut=z.matrix,At=q.distance||W.far;At!==W.far&&(W.far=At,W.updateProjectionMatrix()),Zr.setFromMatrixPosition(q.matrixWorld),W.position.copy(Zr),Yc.copy(W.position),Yc.add(ax[_t]),W.up.copy(lx[_t]),W.lookAt(Yc),W.updateMatrixWorld(),ut.makeTranslation(-Zr.x,-Zr.y,-Zr.z),bd.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),z._frustum.setFromProjectionMatrix(bd,W.coordinateSystem,W.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,_t),i.clear();else{_t===0&&(i.setRenderTarget(z.map),i.clear());let W=z.getViewport(_t);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),F.viewport(o)}n=z.getFrustum(_t),v(_,M,Ct,q,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Rs&&y(z,M),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(L,R,I)};function y(T,_){let M=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new cn(s.x,s.y,{format:Si,type:An}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,M,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,M,f,x,null)}function E(T,_,M,L){let R=null,I=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)R=I;else if(R=M.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=R.uuid,H=_.uuid,C=c[F];C===void 0&&(C={},c[F]=C);let G=C[H];G===void 0&&(G=R.clone(),C[H]=G,_.addEventListener("dispose",w)),R=G}if(R.visible=_.visible,R.wireframe=_.wireframe,L===Rs?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=M}return R}function v(T,_,M,L,R,I){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Rs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let C=t.update(T),G=T.material;if(Array.isArray(G)){let q=C.groups;for(let z=0,rt=q.length;z<rt;z++){let V=q[z],K=G[V.materialIndex];if(K&&K.visible){let Q=E(T,K,L,I);T.onBeforeShadow(i,T,_,M,C,Q,V),i.renderBufferDirect(M,null,C,Q,T,V),T.onAfterShadow(i,T,_,M,C,Q,V)}}}else if(G.visible){let q=E(T,G,L,I);T.onBeforeShadow(i,T,_,M,C,q,null),i.renderBufferDirect(M,null,C,q,T,null),T.onAfterShadow(i,T,_,M,C,q,null)}}let H=T.children;for(let C=0,G=H.length;C<G;C++)v(H[C],_,M,L,R,I)}function w(T){T.target.removeEventListener("dispose",w);for(let M in c){let L=c[M],R=T.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function hx(i,t){function e(){let D=!1,j=new ve,Y=null,mt=new ve(0,0,0,0);return{setMask:function(ht){Y!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),Y=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ft,Ot,Qt,at){at===!0&&(ht*=Qt,ft*=Qt,Ot*=Qt),j.set(ht,ft,Ot,Qt),mt.equals(j)===!1&&(i.clearColor(ht,ft,Ot,Qt),mt.copy(j))},reset:function(){D=!1,Y=null,mt.set(-1,0,0,0)}}}function n(){let D=!1,j=!1,Y=null,mt=null,ht=null;return{setReversed:function(ft){if(j!==ft){let Ot=t.get("EXT_clip_control");ft?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),j=ft;let Qt=ht;ht=null,this.setClear(Qt)}},getReversed:function(){return j},setTest:function(ft){ft?Z(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!D&&(i.depthMask(ft),Y=ft)},setFunc:function(ft){if(j&&(ft=Yu[ft]),mt!==ft){switch(ft){case zo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=ft}},setLocked:function(ft){D=ft},setClear:function(ft){ht!==ft&&(ht=ft,j&&(ft=1-ft),i.clearDepth(ft))},reset:function(){D=!1,Y=null,mt=null,ht=null,j=!1}}}function s(){let D=!1,j=null,Y=null,mt=null,ht=null,ft=null,Ot=null,Qt=null,at=null;return{setTest:function(kt){D||(kt?Z(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(kt){j!==kt&&!D&&(i.stencilMask(kt),j=kt)},setFunc:function(kt,jt,bt){(Y!==kt||mt!==jt||ht!==bt)&&(i.stencilFunc(kt,jt,bt),Y=kt,mt=jt,ht=bt)},setOp:function(kt,jt,bt){(ft!==kt||Ot!==jt||Qt!==bt)&&(i.stencilOp(kt,jt,bt),ft=kt,Ot=jt,Qt=bt)},setLocked:function(kt){D=kt},setClear:function(kt){at!==kt&&(i.clearStencil(kt),at=kt)},reset:function(){D=!1,j=null,Y=null,mt=null,ht=null,ft=null,Ot=null,Qt=null,at=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,E=null,v=null,w=null,T=null,_=null,M=new Bt(0,0,0),L=0,R=!1,I=null,F=null,H=null,C=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,rt=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=rt>=1):V.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=rt>=2);let K=null,Q={},_t=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),W=new ve().fromArray(_t),ut=new ve().fromArray(Ct);function At(D,j,Y,mt){let ht=new Uint8Array(4),ft=i.createTexture();i.bindTexture(D,ft),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<Y;Ot++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(j+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ft}let Ut={};Ut[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(ds),Tt(!1),xt(fc),Z(i.CULL_FACE),ct(Gi);function Z(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function St(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Jt(D,j){return u[D]!==j?(i.bindFramebuffer(D,j),u[D]=j,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Rt(D,j){let Y=m,mt=!1;if(D){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));let ht=D.textures;if(Y.length!==ht.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Ot=ht.length;ft<Ot;ft++)Y[ft]=i.COLOR_ATTACHMENT0+ft;Y.length=ht.length,mt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,mt=!0);mt&&i.drawBuffers(Y)}function Pt(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let Vt={[Hi]:i.FUNC_ADD,[gu]:i.FUNC_SUBTRACT,[_u]:i.FUNC_REVERSE_SUBTRACT};Vt[xu]=i.MIN,Vt[yu]=i.MAX;let tt={[vu]:i.ZERO,[Mu]:i.ONE,[Su]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[wu]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[Au]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Cu]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Iu]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(D,j,Y,mt,ht,ft,Ot,Qt,at,kt){if(D===Gi){g===!0&&(St(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),D!==mu){if(D!==p||kt!==R){if((y!==Hi||w!==Hi)&&(i.blendEquation(i.FUNC_ADD),y=Hi,w=Hi),kt)switch(D){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Wt("WebGLState: Invalid blending: ",D);break}else switch(D){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pc:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",D);break}E=null,v=null,T=null,_=null,M.set(0,0,0),L=0,p=D,R=kt}return}ht=ht||j,ft=ft||Y,Ot=Ot||mt,(j!==y||ht!==w)&&(i.blendEquationSeparate(Vt[j],Vt[ht]),y=j,w=ht),(Y!==E||mt!==v||ft!==T||Ot!==_)&&(i.blendFuncSeparate(tt[Y],tt[mt],tt[ft],tt[Ot]),E=Y,v=mt,T=ft,_=Ot),(Qt.equals(M)===!1||at!==L)&&(i.blendColor(Qt.r,Qt.g,Qt.b,at),M.copy(Qt),L=at),p=D,R=!1}function lt(D,j){D.side===Tn?St(i.CULL_FACE):Z(i.CULL_FACE);let Y=D.side===tn;j&&(Y=!Y),Tt(Y),D.blending===Cs&&D.transparent===!1?ct(Gi):ct(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let mt=D.stencilWrite;a.setTest(mt),mt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function xt(D){D!==du?(Z(i.CULL_FACE),D!==F&&(D===fc?i.cullFace(i.BACK):D===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),F=D}function Xt(D){D!==H&&(z&&i.lineWidth(D),H=D)}function Nt(D,j,Y){D?(Z(i.POLYGON_OFFSET_FILL),(C!==j||G!==Y)&&(C=j,G=Y,o.getReversed()&&(j=-j,Y=-Y),i.polygonOffset(j,Y))):St(i.POLYGON_OFFSET_FILL)}function ne(D){D?Z(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function ie(D){D===void 0&&(D=i.TEXTURE0+q-1),K!==D&&(i.activeTexture(D),K=D)}function le(D,j,Y){Y===void 0&&(K===null?Y=i.TEXTURE0+q-1:Y=K);let mt=Q[Y];mt===void 0&&(mt={type:void 0,texture:void 0},Q[Y]=mt),(mt.type!==D||mt.texture!==j)&&(K!==Y&&(i.activeTexture(Y),K=Y),i.bindTexture(D,j||Ut[D]),mt.type=D,mt.texture=j)}function U(){let D=Q[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ae(){try{i.compressedTexImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function se(){try{i.compressedTexImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function ge(){try{i.texSubImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function yt(){try{i.texSubImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function Te(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function Gt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function qt(){try{i.texStorage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function S(){try{i.texImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function B(){try{i.texImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function ot(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function et(D,j){d[D]!==j&&(i.pixelStorei(D,j),d[D]=j)}function dt(D){W.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),W.copy(D))}function vt(D){ut.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ut.copy(D))}function J(D,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let mt=Y.get(D);mt===void 0&&(mt=i.getUniformBlockIndex(j,D.name),i.uniformBlockBinding(j,mt,mt),Y.set(D,mt))}function $(D,j,Y){let ht=c.get(j).get(D);l[ht]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,ht,Y),l[ht]=Y)}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,Q={},u={},l={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,E=null,v=null,w=null,T=null,_=null,M=new Bt(0,0,0),L=0,R=!1,I=null,F=null,H=null,C=null,G=null,W.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:St,bindFramebuffer:Jt,drawBuffers:Rt,useProgram:Pt,setBlending:ct,setMaterial:lt,setFlipSided:Tt,setCullFace:xt,setLineWidth:Xt,setPolygonOffset:Nt,setScissorTest:ne,activeTexture:ie,bindTexture:le,unbindTexture:U,compressedTexImage2D:Ae,compressedTexImage3D:se,texImage2D:S,texImage3D:B,pixelStorei:et,getParameter:ot,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:qt,texStorage3D:A,texSubImage2D:ge,texSubImage3D:yt,compressedTexSubImage2D:Te,compressedTexSubImage3D:Gt,scissor:dt,viewport:vt,reset:pt}}function ux(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,S){return g?new OffscreenCanvas(A,S):nr("canvas")}function y(A,S,B){let ot=1,et=qt(A);if((et.width>B||et.height>B)&&(ot=B/Math.max(et.width,et.height)),ot<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let dt=Math.floor(ot*et.width),vt=Math.floor(ot*et.height);u===void 0&&(u=p(dt,vt));let J=S?p(dt,vt):u;return J.width=dt,J.height=vt,J.getContext("2d").drawImage(A,0,0,dt,vt),Ht("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+dt+"x"+vt+")."),J}else return"data"in A&&Ht("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function E(A){return A.generateMipmaps}function v(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,S,B,ot,et,dt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let vt;ot&&(vt=t.get("EXT_texture_norm16"),vt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&vt&&(J=vt.R16_EXT),B===i.SHORT&&vt&&(J=vt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),S===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&vt&&(J=vt.RG16_EXT),B===i.SHORT&&vt&&(J=vt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_SHORT&&vt&&(J=vt.RGB16_EXT),B===i.SHORT&&vt&&(J=vt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),S===i.RGBA){let $=dt?er:ae.getTransfer(et);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=$===pe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&vt&&(J=vt.RGBA16_EXT),B===i.SHORT&&vt&&(J=vt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(A,S){let B;return A?S===null||S===wn||S===Wi?B=i.DEPTH24_STENCIL8:S===gn?B=i.DEPTH32F_STENCIL8:S===Is&&(B=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wn||S===Wi?B=i.DEPTH_COMPONENT24:S===gn?B=i.DEPTH_COMPONENT32F:S===Is&&(B=i.DEPTH_COMPONENT16),B}function M(A,S){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==je?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function L(A){let S=new WeakRef(A);n.get(A).__ref=S,m.add(S),x.register(A,S,S)}function R(A){let S=n.get(A).__ref;S!==void 0&&(m.delete(S),x.unregister(S))}function I(A){H(A.target)}function F(A){C(A.target)}function H(A){A.removeEventListener("dispose",I),R(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function C(A){A.removeEventListener("dispose",F),R(A),rt(A)}function G(){for(let A of m){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?C(S):H(S))}m.clear(),d.clear()}function q(A){let S=n.get(A);if(S.__webglInit===void 0)return;let B=A.source,ot=f.get(B);if(ot){let et=ot[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&z(A),Object.keys(ot).length===0&&f.delete(B)}n.remove(A)}function z(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let B=A.source,ot=f.get(B);delete ot[S.__cacheKey],o.memory.textures--}function rt(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&H(B),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let dt=0;dt<S.__webglFramebuffer[et].length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[et][dt]);else i.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)i.deleteFramebuffer(S.__webglFramebuffer[et]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ot=A.textures;for(let et=0,dt=ot.length;et<dt;et++){let vt=n.get(ot[et]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(ot[et])}n.remove(A)}let V=0;function K(){V=0}function Q(){return V}function _t(A){V=A}function Ct(){let A=V;return A>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,A}function W(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ut(A,S){let B=n.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ot=A.image;if(ot===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function At(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){lt(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function Ut(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){lt(B,A,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function Z(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Tt(B,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let St={[qo]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},Jt={[Be]:i.NEAREST,[Uu]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Rt={[zu]:i.NEVER,[Nc]:i.ALWAYS,[ku]:i.LESS,[Lc]:i.LEQUAL,[Gu]:i.EQUAL,[Dc]:i.GEQUAL,[Hu]:i.GREATER,[Vu]:i.NOTEQUAL};function Pt(A,S){if(S.type===gn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===je||S.magFilter===Ea||S.magFilter===kr||S.magFilter===Qn||S.minFilter===je||S.minFilter===Ea||S.minFilter===kr||S.minFilter===Qn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,St[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,St[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,St[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Jt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Jt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Be||S.minFilter!==kr&&S.minFilter!==Qn||S.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Vt(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",I),L(S));let ot=S.source,et=f.get(ot);et===void 0&&(et={},f.set(ot,et));let dt=W(S);if(dt!==A.__cacheKey){et[dt]===void 0&&(et[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),et[dt].usedTimes++;let vt=et[A.__cacheKey];vt!==void 0&&(et[A.__cacheKey].usedTimes--,vt.usedTimes===0&&z(S)),A.__cacheKey=dt,A.__webglTexture=et[dt].texture}return B}function tt(A,S,B){return Math.floor(Math.floor(A/B)/S)}function ct(A,S,B,ot){let dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,ot,S.data);else{dt.sort((D,j)=>D.start-j.start);let vt=0;for(let D=1;D<dt.length;D++){let j=dt[vt],Y=dt[D],mt=j.start+j.count,ht=tt(Y.start,S.width,4),ft=tt(j.start,S.width,4);Y.start<=mt+1&&ht===ft&&tt(Y.start+Y.count-1,S.width,4)===ht?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++vt,dt[vt]=Y)}dt.length=vt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let D=0,j=dt.length;D<j;D++){let Y=dt[D],mt=Math.floor(Y.start/4),ht=Math.ceil(Y.count/4),ft=mt%S.width,Ot=Math.floor(mt/S.width),Qt=ht,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ot),e.texSubImage2D(i.TEXTURE_2D,0,ft,Ot,Qt,at,B,ot,S.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function lt(A,S,B){let ot=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=i.TEXTURE_3D);let et=Vt(A,S),dt=S.source;e.bindTexture(ot,A.__webglTexture,i.TEXTURE0+B);let vt=n.get(dt);if(dt.version!==vt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let at=ae.getPrimaries(ae.workingColorSpace),kt=S.colorSpace===ei?null:ae.getPrimaries(S.colorSpace),jt=S.colorSpace===ei||at===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let $=y(S.image,!1,s.maxTextureSize);$=Gt(S,$);let pt=r.convert(S.format,S.colorSpace),D=r.convert(S.type),j=T(S.internalFormat,pt,D,S.normalized,S.colorSpace,S.isVideoTexture);Pt(ot,S);let Y,mt=S.mipmaps,ht=S.isVideoTexture!==!0,ft=vt.__version===void 0||et===!0,Ot=dt.dataReady,Qt=M(S,$);if(S.isDepthTexture)j=_(S.format===ti,S.type),ft&&(ht?e.texStorage2D(i.TEXTURE_2D,1,j,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,j,$.width,$.height,0,pt,D,null));else if(S.isDataTexture)if(mt.length>0){ht&&ft&&e.texStorage2D(i.TEXTURE_2D,Qt,j,mt[0].width,mt[0].height);for(let at=0,kt=mt.length;at<kt;at++)Y=mt[at],ht?Ot&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Y.width,Y.height,pt,D,Y.data):e.texImage2D(i.TEXTURE_2D,at,j,Y.width,Y.height,0,pt,D,Y.data);S.generateMipmaps=!1}else ht?(ft&&e.texStorage2D(i.TEXTURE_2D,Qt,j,$.width,$.height),Ot&&ct(S,$,pt,D)):e.texImage2D(i.TEXTURE_2D,0,j,$.width,$.height,0,pt,D,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ht&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,j,mt[0].width,mt[0].height,$.depth);for(let at=0,kt=mt.length;at<kt;at++)if(Y=mt[at],S.format!==Rn)if(pt!==null)if(ht){if(Ot)if(S.layerUpdates.size>0){let jt=Xc(Y.width,Y.height,S.format,S.type);for(let bt of S.layerUpdates){let me=Y.data.subarray(bt*jt/Y.data.BYTES_PER_ELEMENT,(bt+1)*jt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,bt,Y.width,Y.height,1,pt,me)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Y.width,Y.height,$.depth,pt,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,j,Y.width,Y.height,$.depth,0,Y.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Y.width,Y.height,$.depth,pt,D,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,j,Y.width,Y.height,$.depth,0,pt,D,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ht&&ft&&e.texStorage2D(i.TEXTURE_2D,Qt,j,mt[0].width,mt[0].height);for(let at=0,kt=mt.length;at<kt;at++)Y=mt[at],S.format!==Rn?pt!==null?ht?Ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,Y.width,Y.height,pt,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,at,j,Y.width,Y.height,0,Y.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Ot&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Y.width,Y.height,pt,D,Y.data):e.texImage2D(i.TEXTURE_2D,at,j,Y.width,Y.height,0,pt,D,Y.data)}else if(S.isDataArrayTexture)if(ht){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,j,$.width,$.height,$.depth),Ot)if(S.layerUpdates.size>0){let at=Xc($.width,$.height,S.format,S.type);for(let kt of S.layerUpdates){let jt=$.data.subarray(kt*at/$.data.BYTES_PER_ELEMENT,(kt+1)*at/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,kt,$.width,$.height,1,pt,D,jt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,pt,D,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,$.width,$.height,$.depth,0,pt,D,$.data);else if(S.isData3DTexture)ht?(ft&&e.texStorage3D(i.TEXTURE_3D,Qt,j,$.width,$.height,$.depth),Ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,pt,D,$.data)):e.texImage3D(i.TEXTURE_3D,0,j,$.width,$.height,$.depth,0,pt,D,$.data);else if(S.isFramebufferTexture){if(ft)if(ht)e.texStorage2D(i.TEXTURE_2D,Qt,j,$.width,$.height);else{let at=$.width,kt=$.height;for(let jt=0;jt<Qt;jt++)e.texImage2D(i.TEXTURE_2D,jt,j,at,kt,0,pt,D,null),at>>=1,kt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),$.parentNode!==at){at.appendChild($),d.add(S),at.onpaint=kt=>{let jt=kt.changedElements;for(let bt of d)jt.includes(bt.image)&&(bt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let jt=i.RGBA,bt=i.RGBA,me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,jt,bt,me,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(mt.length>0){if(ht&&ft){let at=qt(mt[0]);e.texStorage2D(i.TEXTURE_2D,Qt,j,at.width,at.height)}for(let at=0,kt=mt.length;at<kt;at++)Y=mt[at],ht?Ot&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,pt,D,Y):e.texImage2D(i.TEXTURE_2D,at,j,pt,D,Y);S.generateMipmaps=!1}else if(ht){if(ft){let at=qt($);e.texStorage2D(i.TEXTURE_2D,Qt,j,at.width,at.height)}Ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,D,$)}else e.texImage2D(i.TEXTURE_2D,0,j,pt,D,$);E(S)&&S.mipmapsAutoUpdate===!0&&v(ot),vt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Tt(A,S,B){if(S.image.length!==6)return;let ot=Vt(A,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let dt=n.get(et);if(et.version!==dt.__version||ot===!0){e.activeTexture(i.TEXTURE0+B);let vt=ae.getPrimaries(ae.workingColorSpace),J=S.colorSpace===ei?null:ae.getPrimaries(S.colorSpace),$=S.colorSpace===ei||vt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let pt=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,j=[];for(let bt=0;bt<6;bt++)!pt&&!D?j[bt]=y(S.image[bt],!0,s.maxCubemapSize):j[bt]=D?S.image[bt].image:S.image[bt],j[bt]=Gt(S,j[bt]);let Y=j[0],mt=r.convert(S.format,S.colorSpace),ht=r.convert(S.type),ft=T(S.internalFormat,mt,ht,S.normalized,S.colorSpace),Ot=S.isVideoTexture!==!0,Qt=dt.__version===void 0||ot===!0,at=et.dataReady,kt=M(S,Y);Pt(i.TEXTURE_CUBE_MAP,S);let jt;if(S.isDepthTexture){if(ft=_(S.format===ti,S.type),Qt)if(Ot)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,Y.width,Y.height);else for(let bt=0;bt<6;bt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ft,Y.width,Y.height,0,mt,ht,null)}else if(pt){Ot&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,ft,Y.width,Y.height);for(let bt=0;bt<6;bt++){jt=j[bt].mipmaps;for(let me=0;me<jt.length;me++){let Ue=jt[me];S.format!==Rn?mt!==null?Ot?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,me,0,0,Ue.width,Ue.height,mt,Ue.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,me,ft,Ue.width,Ue.height,0,Ue.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,me,0,0,Ue.width,Ue.height,mt,ht,Ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,me,ft,Ue.width,Ue.height,0,mt,ht,Ue.data)}}}else{if(jt=S.mipmaps,Ot&&Qt){jt.length>0&&kt++;let bt=qt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,ft,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(D){Ot?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,j[bt].width,j[bt].height,mt,ht,j[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ft,j[bt].width,j[bt].height,0,mt,ht,j[bt].data);for(let me=0;me<jt.length;me++){let si=jt[me].image[bt].image;Ot?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,me+1,0,0,si.width,si.height,mt,ht,si.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,me+1,ft,si.width,si.height,0,mt,ht,si.data)}}else{Ot?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,mt,ht,j[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ft,mt,ht,j[bt]);for(let me=0;me<jt.length;me++){let Ue=jt[me];Ot?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,me+1,0,0,mt,ht,Ue.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,me+1,ft,mt,ht,Ue.image[bt])}}}E(S)&&S.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),dt.__version=et.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xt(A,S,B,ot,et,dt){let vt=r.convert(B.format,B.colorSpace),J=r.convert(B.type),$=T(B.internalFormat,vt,J,B.normalized,B.colorSpace),pt=n.get(S),D=n.get(B);if(D.__renderTarget=S,!pt.__hasExternalTextures){let j=Math.max(1,S.width>>dt),Y=Math.max(1,S.height>>dt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,dt,$,j,Y,S.depth,0,vt,J,null):e.texImage2D(et,dt,$,j,Y,0,vt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),yt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,et,D.__webglTexture,0,ge(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,et,D.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let ot=S.depthTexture,et=ot&&ot.isDepthTexture?ot.type:null,dt=_(S.stencilBuffer,et),vt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;yt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(S),dt,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(S),dt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,dt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,A)}else{let ot=S.textures;for(let et=0;et<ot.length;et++){let dt=ot[et],vt=r.convert(dt.format,dt.colorSpace),J=r.convert(dt.type),$=T(dt.internalFormat,vt,J,dt.normalized,dt.colorSpace);yt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(S),$,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(S),$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(A,S,B){let ot=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(S.depthTexture);et.__renderTarget=S;let dt=ot?S.depthTexture.image[0]:S.depthTexture.image;(!et.__webglTexture||dt.width!==S.width||dt.height!==S.height)&&(dt.width=S.width,dt.height=S.height,S.depthTexture.needsUpdate=!0),ot?Z(S.depthTexture,0):ut(S.depthTexture,0);let vt=et.__webglTexture,J=ge(S),$=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,pt=S.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Yn)yt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,$,vt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,pt,$,vt,0);else if(S.depthTexture.format===ti)yt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,$,vt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,pt,$,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(A){let S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let ot=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",et)};ot.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=ot}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let ot=0;ot<6;ot++)Nt(S.__webglFramebuffer[ot],A,ot);else A.texture.mipmaps.length>0?Nt(S.__webglFramebuffer[0],A,0):Nt(S.__webglFramebuffer,A,0);else if(B){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=i.createRenderbuffer(),Xt(S.__webglDepthbuffer[ot],A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,dt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Xt(S.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(A,S,B){let ot=n.get(A);S!==void 0&&xt(ot.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ne(A)}function le(A){let S=A.texture,B=n.get(A),ot=n.get(S);A.addEventListener("dispose",F),L(A);let et=A.textures,dt=A.isWebGLCubeRenderTarget===!0,vt=et.length>1;if(vt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=S.version,o.memory.textures++),dt){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let $=0;$<S.mipmaps.length;$++)B.__webglFramebuffer[J][$]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(vt)for(let J=0,$=et.length;J<$;J++){let pt=n.get(et[J]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&yt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<et.length;J++){let $=et[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let pt=r.convert($.format,$.colorSpace),D=r.convert($.type),j=T($.internalFormat,pt,D,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),Y=ge(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)xt(B.__webglFramebuffer[J][$],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else xt(B.__webglFramebuffer[J],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);E(S)?v(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(vt){for(let J=0,$=et.length;J<$;J++){let pt=et[J],D=n.get(pt),j=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),Pt(j,pt),xt(B.__webglFramebuffer,A,pt,i.COLOR_ATTACHMENT0+J,j,0),E(pt)&&v(j)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,ot.__webglTexture),Pt(J,S),S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)xt(B.__webglFramebuffer[$],A,S,i.COLOR_ATTACHMENT0,J,$);else xt(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,J,0);E(S)?v(J):S.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ne(A)}function U(A){let S=A.textures;for(let B=0,ot=S.length;B<ot;B++){let et=S[B];if(E(et)&&et.mipmapsAutoUpdate===!0){let dt=w(A),vt=n.get(et).__webglTexture;e.bindTexture(dt,vt),v(dt),e.unbindTexture()}}}let Ae=[];function se(A){if(A.samples>0){if(yt(A)===!1){let S=A.textures,B=A.width,ot=A.height,et=i.COLOR_BUFFER_BIT,dt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(A),J=S.length>1;if(J)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[pt]);let D=n.get(S[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,B,ot,0,0,B,ot,et,i.NEAREST),l===!0&&(Ae.length=0,Ae.push(i.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ae.push(dt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[pt]);let D=n.get(S[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ge(A){return Math.min(s.maxSamples,A.samples)}function yt(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Gt(A,S){let B=A.colorSpace,ot=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==tr&&B!==ei&&(ae.getTransfer(B)===pe?(ot!==Rn||et!==nn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",B)),S}function qt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ct,this.resetTextureUnits=K,this.getTextureUnits=Q,this.setTextureUnits=_t,this.setTexture2D=ut,this.setTexture2DArray=At,this.setTexture3D=Ut,this.setTextureCube=Z,this.rebindTextures=ie,this.setupRenderTarget=le,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=yt,this.dispose=G}function dx(i,t){function e(n,s=ei){let r,o=ae.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===Pc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===Rn)return i.RGBA;if(n===Yn)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Si)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===Gr||n===Hr||n===Vr||n===Wr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Na||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Xr||n===Ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xr)return r.COMPRESSED_RG11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===Ka||n===$a||n===ja||n===Qa||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nl)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===ol||n===qr||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:fx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends Sn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new th,p={},y=e.getContextAttributes(),E=null,v=null,w=[],T=[],_=new st,M=null,L=null,R=new qe;R.viewport=new ve;let I=new qe;I.viewport=new ve;let F=[R,I],H=new Ma,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ut=w[W];return ut===void 0&&(ut=new xs,w[W]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(W){let ut=w[W];return ut===void 0&&(ut=new xs,w[W]=ut),ut.getGripSpace()},this.getHand=function(W){let ut=w[W];return ut===void 0&&(ut=new xs,w[W]=ut),ut.getHandSpace()};function q(W){let ut=T.indexOf(W.inputSource);if(ut===-1)return;let At=w[ut];At!==void 0&&(At.update(W.inputSource,W.frame,c||o),At.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",rt);for(let W=0;W<w.length;W++){let ut=T[W];ut!==null&&(T[W]=null,w[W].disconnect(ut))}C=null,G=null,g.reset();for(let W in p)delete p[W];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,v=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),L!==null){let W=L.camera;W.fov=L.fov,W.zoom=L.zoom,W.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",rt),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ut=null,Z=null;y.depth&&(Z=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=y.stencil?ti:Yn,Ut=y.stencil?Wi:wn);let St={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(St),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new cn(u.textureWidth,u.textureHeight,{format:Rn,type:nn,depthTexture:new $n(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let At={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new cn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(W){for(let ut=0;ut<W.removed.length;ut++){let At=W.removed[ut],Ut=T.indexOf(At);Ut>=0&&(T[Ut]=null,w[Ut].disconnect(At))}for(let ut=0;ut<W.added.length;ut++){let At=W.added[ut],Ut=T.indexOf(At);if(Ut===-1){for(let St=0;St<w.length;St++)if(St>=T.length){T.push(At),Ut=St;break}else if(T[St]===null){T[St]=At,Ut=St;break}if(Ut===-1)break}let Z=w[Ut];Z&&Z.connect(At)}}function V(W,ut){ut===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ut.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ut=W.near,At=W.far;g.texture!==null&&(g.depthNear>0&&(ut=g.depthNear),g.depthFar>0&&(At=g.depthFar)),H.near=I.near=R.near=ut,H.far=I.far=R.far=At,(C!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),C=H.near,G=H.far),H.layers.mask=W.layers.mask|6,R.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let Ut=W.parent,Z=H.cameras;V(H,Ut);for(let St=0;St<Z.length;St++)V(Z[St],Ut);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&W.isPerspectiveCamera&&(L={camera:W,fov:W.fov,zoom:W.zoom}),K(W,H,Ut)};function K(W,ut,At){At===null?W.matrix.copy(ut.matrixWorld):(W.matrix.copy(At.matrixWorld),W.matrix.invert(),W.matrix.multiply(ut.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ut.projectionMatrix),W.projectionMatrixInverse.copy(ut.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ms*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(W){return p[W]};let Q=null;function _t(W,ut){if(h=ut.getViewerPose(c||o),m=ut,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ut=!1;At.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let Rt=0;Rt<At.length;Rt++){let Pt=At[Rt],Vt=null;if(f!==null)Vt=f.getViewport(Pt);else{let ct=d.getViewSubImage(u,Pt);Vt=ct.viewport,Rt===0&&(t.setRenderTargetTextures(v,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(v))}let tt=F[Rt];tt===void 0&&(tt=new qe,tt.layers.enable(Rt),tt.viewport=new ve,F[Rt]=tt),tt.matrix.fromArray(Pt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Pt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Rt===0&&(H.matrix.copy(tt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(tt)}let Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Rt=d.getDepthInformation(At[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(Rt,s.renderState)}if(Z&&Z.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Rt=0;Rt<At.length;Rt++){let Pt=At[Rt].camera;if(Pt){let Vt=p[Pt];Vt||(Vt=new gr,p[Pt]=Vt);let tt=d.getCameraImage(Pt);Vt.sourceTexture=tt}}}}for(let At=0;At<w.length;At++){let Ut=T[At],Z=w[At];Ut!==null&&Z!==void 0&&Z.update(Ut,ut,c||o)}Q&&Q(W,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),m=null}let Ct=new Ed;Ct.setAnimationLoop(_t),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}},mx=new ue,Nd=new Yt;Nd.set(-1,0,0,0,1,0,0,0,1);function gx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),E=y.envMap,v=y.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Nd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _x(i,t,e,n){let s={},r={};function o(y,E){let v=E.program;n.uniformBlockBinding(y,v,s[y.id])}function a(y,E){let v=s[y.id];v===void 0&&(m(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",g));let w=E.program;n.updateUBOMapping(y,w);let T=t.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let E=i.createBuffer(),v=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,v,w),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(y){let E=s[y.id],v=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,_=v.length;T<_;T++){let M=v[T];if(Array.isArray(M))for(let L=0,R=M.length;L<R;L++)h(M[L],T,L,w);else h(M,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,E,v,w){if(u(y,E,v,w)===!0){let T=y.__offset,_=y.value;if(Array.isArray(_)){let M=0;for(let L=0;L<_.length;L++){let R=_[L],I=x(R,!0);d(R,y.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function d(y,E,v){typeof y=="number"||typeof y=="boolean"?E[v]=y:y.isMatrix3?(E[v]=y.elements[0],E[v+1]=y.elements[1],E[v+2]=y.elements[2],E[v+3]=0,E[v+4]=y.elements[3],E[v+5]=y.elements[4],E[v+6]=y.elements[5],E[v+7]=0,E[v+8]=y.elements[6],E[v+9]=y.elements[7],E[v+10]=y.elements[8],E[v+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-v),v):y.toArray(E,v)}function u(y,E,v,w){let T=y.value,_=E+"_"+v;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);let M=w[_],L=!1;for(let R=0;R<T.length;R++)f(T[R],M,R)===!0&&(L=!0);return L}return f(T,w,_)}function f(y,E,v){if(E[v]===void 0)return typeof y=="number"||typeof y=="boolean"?E[v]=y:ArrayBuffer.isView(y)?E[v]=y.slice():E[v]=y.clone(),!0;{let w=E[v];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return E[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function m(y){let E=y.uniforms,v=0,w=16;for(let _=0,M=E.length;_<M;_++){let L=Array.isArray(E[_])?E[_]:[E[_]];for(let R=0,I=L.length;R<I;R++){let F=L[R],H=Array.isArray(F.value)?F.value:[F.value],C=Array.isArray(E[_])||Array.isArray(F.value),G=v;for(let z=0,rt=H.length;z<rt;z++){let V=H[z],K=x(V,C),Q=v%w,_t=Q%K.boundary,Ct=Q+_t;v+=_t,Ct!==0&&w-Ct<K.storage&&(v+=w-Ct),z===0&&(G=v),v+=K.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((v-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}let T=v%w;return T>0&&(v+=w-T),y.__size=v,y.__cache={},this}function x(y,E){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(y){let E=y.target;E.removeEventListener("dispose",g),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:p}}var xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function yx(){return On===null&&(On=new hr(xx,16,16,Si,An),On.name="DFG_LUT",On.minFilter=je,On.magFilter=je,On.wrapS=Ln,On.wrapT=Ln,On.generateMipmaps=!1,On.needsUpdate=!0),On}var fl=class{constructor(t={}){let{canvas:e=Wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=nn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,g=new Set([Ia,Pa,Ca]),p=new Set([nn,wn,Is,Wi,wa,Aa]),y=new Uint32Array(4),E=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,T=null,_=[],M=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,F=null,H=null,C=null,G=null;this._outputColorSpace=$e;let q=0,z=0,rt=null,V=-1,K=null,Q=new ve,_t=new ve,Ct=null,W=new Bt(0),ut=0,At=e.width,Ut=e.height,Z=1,St=null,Jt=null,Rt=new ve(0,0,At,Ut),Pt=new ve(0,0,At,Ut),Vt=!1,tt=new di,ct=new Qo,lt=!1,Tt=!1,xt=new ue,Xt=new P,Nt=new ve,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function le(){return rt===null?Z:1}let U=n;function Ae(b,N){return e.getContext(b,N)}let se,ge,yt,Te,Gt,qt,A,S,B,ot,et,dt,vt,J,$,pt,D,j,Y,mt,ht,ft,Ot;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),U===null){let N="webgl2";if(U=Ae(N,b),U===null)throw Ae(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(b){throw e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Wt("WebGLRenderer: "+b.message),b}function Qt(){se=new Pg(U),se.init(),ht=new dx(U,se),ge=new yg(U,se,t,ht),yt=new hx(U,se),ge.reversedDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),H=U.createFramebuffer(),C=U.createFramebuffer(),G=U.createFramebuffer(),Te=new Dg(U),Gt=new K_,qt=new ux(U,se,yt,Gt,ge,ht,Te),A=new Cg(R),S=new Up(U),ft=new _g(U,S),B=new Ig(U,S,Te,ft),ot=new Ug(U,B,S,ft,Te),j=new Ng(U,ge,qt),$=new vg(Gt),et=new J_(R,A,se,ge,ft,$),dt=new gx(R,Gt),vt=new j_,J=new sx(se),D=new gg(R,A,yt,ot,m,l),pt=new cx(R,ot,ge),Ot=new _x(U,Te,ge,yt),Y=new xg(U,se,Te),mt=new Lg(U,se,Te),Te.programs=et.programs,R.capabilities=ge,R.extensions=se,R.properties=Gt,R.renderLists=vt,R.shadowMap=pt,R.state=yt,R.info=Te}x!==nn&&(L=new Og(x,e.width,e.height,a,s,r));let at=new eh(R,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(At,Ut,!1))},this.getSize=function(b){return b.set(At,Ut)},this.setSize=function(b,N,X=!0){if(at.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}At=b,Ut=N,e.width=Math.floor(b*Z),e.height=Math.floor(N*Z),X===!0&&(e.style.width=b+"px",e.style.height=N+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(At*Z,Ut*Z).floor()},this.setDrawingBufferSize=function(b,N,X){At=b,Ut=N,Z=X,e.width=Math.floor(b*X),e.height=Math.floor(N*X),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(x===nn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,N,X,O){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,N,X,O),yt.viewport(Q.copy(Rt).multiplyScalar(le()).round())},this.getScissor=function(b){return b.copy(Pt)},this.setScissor=function(b,N,X,O){b.isVector4?Pt.set(b.x,b.y,b.z,b.w):Pt.set(b,N,X,O),yt.scissor(_t.copy(Pt).multiplyScalar(le()).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(b){yt.setScissorTest(Vt=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){Jt=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,X=!0){let O=0;if(b){let k=!1;if(rt!==null){let Mt=rt.texture.format;k=g.has(Mt)}if(k){let Mt=rt.texture.type,It=p.has(Mt),gt=D.getClearColor(),wt=D.getClearAlpha(),Ft=gt.r,Kt=gt.g,re=gt.b;It?(y[0]=Ft,y[1]=Kt,y[2]=re,y[3]=wt,U.clearBufferuiv(U.COLOR,0,y)):(E[0]=Ft,E[1]=Kt,E[2]=re,E[3]=wt,U.clearBufferiv(U.COLOR,0,E))}else O|=U.COLOR_BUFFER_BIT}N&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),D.dispose(),vt.dispose(),J.dispose(),qt.dispose(),Gt.dispose(),A.dispose(),ot.dispose(),B.dispose(),ft.dispose(),Ot.dispose(),et.dispose(),at.dispose(),at.removeEventListener("sessionstart",mh),at.removeEventListener("sessionend",gh),Ti.stop()};function kt(b){b.preventDefault(),ir("WebGLRenderer: Context Lost."),I=!0}function jt(){ir("WebGLRenderer: Context Restored."),I=!1;let b=Te.autoReset,N=pt.enabled,X=pt.autoUpdate,O=pt.needsUpdate,k=pt.type;Qt(),Te.autoReset=b,pt.enabled=N,pt.autoUpdate=X,pt.needsUpdate=O,pt.type=k}function bt(b){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function me(b){let N=b.target;N.removeEventListener("dispose",me),Ue(N)}function Ue(b){si(b),Gt.remove(b)}function si(b){let N=Gt.get(b).programs;N!==void 0&&(N.forEach(function(X){et.releaseProgram(X)}),b.isShaderMaterial&&et.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,X,O,k,Mt){N===null&&(N=ne);let It=k.isMesh&&k.matrixWorld.determinantAffine()<0,gt=cf(b,N,X,O,k);yt.setMaterial(O,It);let wt=X.index,Ft=1;if(O.wireframe===!0){if(wt=B.getWireframeAttribute(X),wt===void 0)return;Ft=2}let Kt=X.drawRange,re=X.attributes.position,Lt=Kt.start*Ft,oe=(Kt.start+Kt.count)*Ft;Mt!==null&&(Lt=Math.max(Lt,Mt.start*Ft),oe=Math.min(oe,(Mt.start+Mt.count)*Ft)),wt!==null?(Lt=Math.max(Lt,0),oe=Math.min(oe,wt.count)):re!=null&&(Lt=Math.max(Lt,0),oe=Math.min(oe,re.count));let Re=oe-Lt;if(Re<0||Re===1/0)return;ft.setup(k,O,gt,X,wt);let xe,_e=Y;if(wt!==null&&(xe=S.get(wt),_e=mt,_e.setIndex(xe)),k.isMesh)O.wireframe===!0?(yt.setLineWidth(O.wireframeLinewidth*le()),_e.setMode(U.LINES)):_e.setMode(U.TRIANGLES);else if(k.isLine){let He=O.linewidth;He===void 0&&(He=1),yt.setLineWidth(He*le()),k.isLineSegments?_e.setMode(U.LINES):k.isLineLoop?_e.setMode(U.LINE_LOOP):_e.setMode(U.LINE_STRIP)}else k.isPoints?_e.setMode(U.POINTS):k.isSprite&&_e.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(se.get("WEBGL_multi_draw"))_e.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let He=k._multiDrawStarts,Dt=k._multiDrawCounts,Je=k._multiDrawCount,de=wt?S.get(wt).bytesPerElement:1,wi=Gt.get(O).currentProgram.getUniforms();for(let Ve=0;Ve<Je;Ve++)wi.setValue(U,"_gl_DrawID",Ve),_e.render(He[Ve]/de,Dt[Ve])}else if(k.isInstancedMesh)_e.renderInstances(Lt,Re,k.count);else if(X.isInstancedBufferGeometry){let He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,He);_e.renderInstances(Lt,Re,Dt)}else _e.render(Lt,Re)};function ph(b,N,X,O){F!==null&&b.isNodeMaterial&&F.setObject(O,b),lt===!0&&$.setState(b,X,!1),b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,Os(b,N,O),b.side=Mi,b.needsUpdate=!0,Os(b,N,O),b.side=Tn):Os(b,N,O)}this.compile=function(b,N,X=null){X===null&&(X=b),F!==null&&F.renderStart(b,N,X),T=J.get(X),T.init(N),M.push(T),X.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),b!==X&&b.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Tt=this.localClippingEnabled,lt=$.init(this.clippingPlanes,Tt),lt===!0&&$.setGlobalState(this.clippingPlanes,N),F!==null&&pt.render(T.state.shadowsArray,X,N);let O=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Mt=k.material;if(Mt)if(Array.isArray(Mt))for(let It=0;It<Mt.length;It++){let gt=Mt[It];ph(gt,X,N,k),O.add(gt)}else ph(Mt,X,N,k),O.add(Mt)}),T=M.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(b,N,X=null){let O=this.compile(b,N,X);return new Promise(k=>{function Mt(){if(O.forEach(function(It){let wt=Gt.get(It).currentProgram;(wt===void 0||wt.isReady())&&O.delete(It)}),O.size===0){k(b);return}setTimeout(Mt,10)}se.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let wl=null;function af(b){wl&&wl(b)}function mh(){Ti.stop()}function gh(){Ti.start()}let Ti=new Ed;Ti.setAnimationLoop(af),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(b){wl=b,at.setAnimationLoop(b),b===null?Ti.stop():Ti.start()},at.addEventListener("sessionstart",mh),at.addEventListener("sessionend",gh),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(b,N);let X=at.enabled===!0&&at.isPresenting===!0,O=L!==null&&(rt===null||X)&&L.begin(R,rt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(N),N=at.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,N,rt),T=J.get(b,M.length),T.init(N),T.state.textureUnits=qt.getTextureUnits(),M.push(T),xt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?ct.setFromArrayCamera(N):tt.setFromProjectionMatrix(xt,fn,N.reversedDepth),Tt=this.localClippingEnabled,lt=$.init(this.clippingPlanes,Tt),w=vt.get(b,_.length),w.init(),_.push(w),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let It=R.xr.getDepthSensingMesh();It!==null&&Al(It,N,-1/0,R.sortObjects)}Al(b,N,0,R.sortObjects),w.finish(),F!==null&&F.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(St,Jt),ie=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,ie&&D.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),lt===!0&&$.beginShadows();let k=T.state.shadowsArray;if(pt.render(k,b,N),lt===!0&&$.endShadows(),(O&&L.hasRenderPass())===!1){let It=w.opaque,gt=w.transmissive;if(T.setupLights(),N.isArrayCamera){let wt=N.cameras;if(gt.length>0)for(let Ft=0,Kt=wt.length;Ft<Kt;Ft++){let re=wt[Ft];xh(It,gt,b,re)}ie&&D.render(b);for(let Ft=0,Kt=wt.length;Ft<Kt;Ft++){let re=wt[Ft];_h(w,b,re,re.viewport)}}else gt.length>0&&xh(It,gt,b,N),ie&&D.render(b),_h(w,b,N)}rt!==null&&z===0&&(qt.updateMultisampleRenderTarget(rt),qt.updateRenderTargetMipmap(rt)),O&&L.end(R),b.isScene===!0&&b.onAfterRender(R,b,N),ft.resetDefaultState(),V=-1,K=null,M.pop(),M.length>0?(T=M[M.length-1],qt.setTextureUnits(T.state.textureUnits),lt===!0&&$.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,F!==null&&F.renderEnd()};function Al(b,N,X,O){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){let It=N.isArrayCamera?ct:tt;if(!b.frustumCulled||b.intersectsFrustum(It)){O&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);let gt=ot.update(b),wt=b.material;wt.visible&&w.push(b,gt,wt,X,Nt.z,null,N)}}else if(b.isMesh||b.isLine||b.isPoints){let It=N.isArrayCamera?ct:tt;if(!b.frustumCulled||b.intersectsFrustum(It)){let gt=ot.update(b),wt=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Nt.copy(gt.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(wt)){let Ft=gt.groups;for(let Kt=0,re=Ft.length;Kt<re;Kt++){let Lt=Ft[Kt],oe=wt[Lt.materialIndex];oe&&oe.visible&&w.push(b,gt,oe,X,Nt.z,Lt,N)}}else wt.visible&&w.push(b,gt,wt,X,Nt.z,null,N)}}}let Mt=b.children;for(let It=0,gt=Mt.length;It<gt;It++)Al(Mt[It],N,X,O)}function _h(b,N,X,O){let{opaque:k,transmissive:Mt,transparent:It}=b;T.setupLightsView(X),lt===!0&&$.setGlobalState(R.clippingPlanes,X),O&&yt.viewport(Q.copy(O)),k.length>0&&so(k,N,X),Mt.length>0&&so(Mt,N,X),It.length>0&&so(It,N,X),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function xh(b,N,X,O){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let Lt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new cn(1,1,{generateMipmaps:!0,type:Lt?An:nn,minFilter:Qn,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let Mt=T.state.transmissionRenderTarget[O.id],It=O.viewport||Q;Mt.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);let gt=R.getRenderTarget(),wt=R.getActiveCubeFace(),Ft=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(W),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),ie&&D.render(X);let Kt=R.toneMapping;R.toneMapping=Fn;let re=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),lt===!0&&$.setGlobalState(R.clippingPlanes,O),so(b,X,O),qt.updateMultisampleRenderTarget(Mt),qt.updateRenderTargetMipmap(Mt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let oe=0,Re=N.length;oe<Re;oe++){let xe=N[oe],{object:_e,geometry:He,material:Dt,group:Je}=xe;if(Dt.side===Tn&&_e.layers.test(O.layers)){let de=Dt.side;Dt.side=tn,Dt.needsUpdate=!0,yh(_e,X,O,He,Dt,Je),Dt.side=de,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(qt.updateMultisampleRenderTarget(Mt),qt.updateRenderTargetMipmap(Mt))}R.setRenderTarget(gt,wt,Ft),R.setClearColor(W,ut),re!==void 0&&(O.viewport=re),R.toneMapping=Kt}function so(b,N,X){let O=N.isScene===!0?N.overrideMaterial:null;for(let k=0,Mt=b.length;k<Mt;k++){let It=b[k],{object:gt,geometry:wt,group:Ft}=It,Kt=It.material;Kt.allowOverride===!0&&O!==null&&(Kt=O),gt.layers.test(X.layers)&&yh(gt,N,X,wt,Kt,Ft)}}function yh(b,N,X,O,k,Mt){F!==null&&k.isNodeMaterial&&F.setObject(b,k),b.onBeforeRender(R,N,X,O,k,Mt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(R,N,X,O,b,Mt),k.transparent===!0&&k.side===Tn&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,R.renderBufferDirect(X,N,O,k,b,Mt),k.side=Mi,k.needsUpdate=!0,R.renderBufferDirect(X,N,O,k,b,Mt),k.side=Tn):R.renderBufferDirect(X,N,O,k,b,Mt),b.onAfterRender(R,N,X,O,k,Mt)}function vh(b){let N=0;for(let X of b)X.texture!==null&&N++;return N}function Os(b,N,X){N.isScene!==!0&&(N=ne);let O=Gt.get(b),k=T.state.lights,Mt=T.state.shadowsArray,It=k.state.version,gt=et.getParameters(b,k.state,Mt,N,X,T.state.lightProbeGridArray),wt=et.getProgramCacheKey(gt),Ft=O.programs;O.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,O.fog=N.fog;let Kt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;O.envMap=A.get(b.envMap||O.environment,Kt),O.envMapRotation=O.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ft===void 0&&(b.addEventListener("dispose",me),Ft=new Map,O.programs=Ft,O.programVariants=new Map);let re=Ft.get(wt);if(re!==void 0){if(O.currentProgram===re&&O.lightsStateVersion===It)return Sh(b,gt),re}else gt.uniforms=et.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,X,gt),b.onBeforeCompile(gt,R),re=et.acquireProgram(gt,wt),Ft.set(wt,re),O.uniforms=gt.uniforms;let Lt=O.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=$.uniform),Sh(b,gt),O.needsLights=uf(b),O.lightsStateVersion=It,O.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.sunLights.value=k.state.sun,Lt.sunLightShadows.value=k.state.sunShadow,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.sunShadowMatrix.value=k.state.sunShadowMatrix,Lt.sunShadowCascade.value=k.state.sunShadowCascade,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=vh(T.state.lightProbeGridArray),O.currentProgram=re,O.uniformsList=null,re}function lf(b,N,X,O,k){let Mt=Gt.get(b),It=Mt.currentProgram.id+","+O+","+k,gt=Mt.programVariants.get(It);return gt===void 0?(gt=Os(b,N,X),Mt.programVariants.set(It,gt)):(Mt.currentProgram=gt,Mt.uniformsList=null,Mt.outputColorSpace=O,Mt.toneMapping=k),gt}function Mh(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Ls.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Sh(b,N){let X=Gt.get(b);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function cf(b,N,X,O,k){N.isScene!==!0&&(N=ne),qt.resetTextureUnits();let Mt=N.fog,It=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?N.environment:null,gt=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ae.workingColorSpace,wt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ft=A.get(O.envMap||It,wt),Kt=O.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,re=!!X.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Lt=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,Re=!!X.morphAttributes.color,xe=Fn;O.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(xe=R.toneMapping);let _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,He=_e!==void 0?_e.length:0,Dt=Gt.get(O),Je=T.state.lights;if(lt===!0&&(Tt===!0||b!==K)){let Me=b===K&&O.id===V;$.setState(O,b,Me)}let de=!1,wi=!1;O.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==Je.state.version||k.isBatchedMesh&&Dt.batching===!1||!k.isBatchedMesh&&Dt.batching===!0||k.isBatchedMesh&&Dt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Dt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Dt.instancing===!1||!k.isInstancedMesh&&Dt.instancing===!0||k.isSkinnedMesh&&Dt.skinning===!1||!k.isSkinnedMesh&&Dt.skinning===!0||k.isInstancedMesh&&Dt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Dt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Dt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Dt.instancingMorph===!1&&k.morphTexture!==null||Dt.envMap!==Ft||O.fog===!0&&Dt.fog!==Mt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==$.numPlanes||Dt.numIntersection!==$.numIntersection)||Dt.vertexAlphas!==Kt||Dt.vertexTangents!==re||Dt.morphTargets!==Lt||Dt.morphNormals!==oe||Dt.morphColors!==Re||Dt.morphTargetsCount!==He||Dt.numLightProbeGrids!==vh(T.state.lightProbeGridArray)?de=!0:(Dt.outputColorSpace!==gt||Dt.toneMapping!==xe)&&(wi=!0):(de=!0,Dt.__version=O.version);let Ve=Dt.currentProgram;(de===!0||wi===!0)&&(Ve=wi===!0?lf(O,N,k,gt,xe):Os(O,N,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Ve,Dt));let ro=!1,ri=!1,Ai=!1,ce=Ve.getUniforms(),ke=Dt.uniforms;if(yt.useProgram(Ve.program)&&(ro=!0,ri=!0,Ai=!0),O.id!==V&&(V=O.id,ri=!0),ro||K!==b){yt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ce.setValue(U,"projectionMatrix",b.projectionMatrix),ce.setValue(U,"viewMatrix",b.matrixWorldInverse);let Fe=ce.map.cameraPosition;Fe!==void 0&&Fe.setValue(U,Xt.setFromMatrixPosition(b.matrixWorld)),ge.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ce.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,ri=!0,Ai=!0)}if(Dt.needsLights&&(Je.state.sunShadowMap.length>0&&ce.setValue(U,"sunShadowMap",Je.state.sunShadowMap,qt),Je.state.directionalShadowMap.length>0&&ce.setValue(U,"directionalShadowMap",Je.state.directionalShadowMap,qt),Je.state.spotShadowMap.length>0&&ce.setValue(U,"spotShadowMap",Je.state.spotShadowMap,qt),Je.state.pointShadowMap.length>0&&ce.setValue(U,"pointShadowMap",Je.state.pointShadowMap,qt)),k.isSkinnedMesh){ce.setOptional(U,k,"bindMatrix"),ce.setOptional(U,k,"bindMatrixInverse");let Me=k.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ce.setValue(U,"boneTexture",Me.boneTexture,qt))}k.isBatchedMesh&&(ce.setOptional(U,k,"batchingTexture"),ce.setValue(U,"batchingTexture",k._matricesTexture,qt),ce.setOptional(U,k,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",k._indirectTexture,qt),ce.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",k._colorsTexture,qt));let xn=X.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&j.update(k,X,Ve),(ri||Dt.receiveShadow!==k.receiveShadow)&&(Dt.receiveShadow=k.receiveShadow,ce.setValue(U,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&N.environment!==null&&(ke.envMapIntensity.value=N.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=yx()),ri){if(ce.setValue(U,"toneMappingExposure",R.toneMappingExposure),Dt.needsLights&&hf(ke,Ai),Mt&&O.fog===!0&&dt.refreshFogUniforms(ke,Mt),dt.refreshMaterialUniforms(ke,O,Z,Ut,T.state.transmissionRenderTarget[b.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let Me=v,Fe=0;for(let zn of T.state.lightProbeGridArray)zn.texture!==null&&(Me.textures[Fe]=zn.texture,Me.min[Fe]=zn.boundingBox.min,Me.max[Fe]=zn.boundingBox.max,Me.resolution[Fe]=zn.resolution,Fe++);for(let zn in Me)Me[zn].length=Fe;ke.probesSH.value=Me.textures,ke.probesMin.value=Me.min,ke.probesMax.value=Me.max,ke.probesResolution.value=Me.resolution}Ls.upload(U,Mh(Dt),ke,qt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ls.upload(U,Mh(Dt),ke,qt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ce.setValue(U,"center",k.center),ce.setValue(U,"modelViewMatrix",k.modelViewMatrix),ce.setValue(U,"normalMatrix",k.normalMatrix),ce.setValue(U,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){let Me=O.uniformsGroups;for(let Fe=0,zn=Me.length;Fe<zn;Fe++){let Eh=Me[Fe];Ot.update(Eh,Ve),Ot.bind(Eh,Ve)}}return Ve}function hf(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function uf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(b,N,X){let O=Gt.get(b);O.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Gt.get(b.texture).__webglTexture=N,Gt.get(b.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:X,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let X=Gt.get(b);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,X=0){rt=b,q=N,z=X;let O=null,k=!1,Mt=!1;if(b){let gt=Gt.get(b);if(gt.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(U.FRAMEBUFFER,gt.__webglFramebuffer),Q.copy(b.viewport),_t.copy(b.scissor),Ct=b.scissorTest,yt.viewport(Q),yt.scissor(_t),yt.setScissorTest(Ct),V=-1;return}else if(gt.__webglFramebuffer===void 0)qt.setupRenderTarget(b);else if(gt.__hasExternalTextures)qt.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Kt=b.depthTexture;if(gt.__boundDepthTexture!==Kt){if(Kt!==null&&Gt.has(Kt)&&(b.width!==Kt.image.width||b.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(b)}}let wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Mt=!0);let Ft=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?O=Ft[N][X]:O=Ft[N],k=!0):b.samples>0&&qt.useMultisampledRTT(b)===!1?O=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[X]:O=Ft,Q.copy(b.viewport),_t.copy(b.scissor),Ct=b.scissorTest}else Q.copy(Rt).multiplyScalar(Z).floor(),_t.copy(Pt).multiplyScalar(Z).floor(),Ct=Vt;if(X!==0&&(O=H),yt.bindFramebuffer(U.FRAMEBUFFER,O)&&yt.drawBuffers(b,O),yt.viewport(Q),yt.scissor(_t),yt.setScissorTest(Ct),k){let gt=Gt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,gt.__webglTexture,X)}else if(Mt){let gt=N;for(let wt=0;wt<b.textures.length;wt++){let Ft=Gt.get(b.textures[wt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+wt,Ft.__webglTexture,X,gt)}}else if(b!==null&&X!==0){let gt=Gt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gt.__webglTexture,X)}V=-1};function bh(b){let N=Gt.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=ge.textureFormatReadable(b.format),N.__typeReadable=ge.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,X,O,k,Mt,It,gt=0){if(!(b&&b.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(wt=wt[It],Array.isArray(wt)&&(wt=wt[0])),wt){yt.bindFramebuffer(U.FRAMEBUFFER,wt);try{let Ft=b.textures[gt],Kt=Ft.format,re=Ft.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt);let Lt=bh(Ft);if(Lt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-O&&X>=0&&X<=b.height-k&&U.readPixels(N,X,O,k,ht.convert(Kt),ht.convert(re),Mt)}finally{let Ft=rt!==null?Gt.get(rt).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(b,N,X,O,k,Mt,It,gt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(wt=wt[It],Array.isArray(wt)&&(wt=wt[0])),wt)if(N>=0&&N<=b.width-O&&X>=0&&X<=b.height-k){yt.bindFramebuffer(U.FRAMEBUFFER,wt);let Ft=b.textures[gt],Kt=Ft.format,re=Ft.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt);let Lt=bh(Ft);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,oe),U.bufferData(U.PIXEL_PACK_BUFFER,Mt.byteLength,U.STREAM_READ),U.readPixels(N,X,O,k,ht.convert(Kt),ht.convert(re),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Re=rt!==null?Gt.get(rt).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,Re);let xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await qu(U,xe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Mt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(oe),U.deleteSync(xe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,X=0){let O=Math.pow(2,-X),k=Math.floor(b.image.width*O),Mt=Math.floor(b.image.height*O),It=N!==null?N.x:0,gt=N!==null?N.y:0;qt.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,It,gt,k,Mt),yt.unbindTexture()},this.copyTextureToTexture=function(b,N,X=null,O=null,k=0,Mt=0){let It,gt,wt,Ft,Kt,re,Lt,oe,Re,xe=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(X!==null)It=X.max.x-X.min.x,gt=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Ft=X.min.x,Kt=X.min.y,re=X.isBox3?X.min.z:0;else{let ce=Math.pow(2,-k);It=Math.floor(xe.width*ce),gt=Math.floor(xe.height*ce),b.isDataArrayTexture?wt=xe.depth:b.isData3DTexture?wt=Math.floor(xe.depth*ce):wt=1,Ft=0,Kt=0,re=0}O!==null?(Lt=O.x,oe=O.y,Re=O.z):(Lt=0,oe=0,Re=0);let _e=ht.convert(N.format),He=ht.convert(N.type),Dt;N.isData3DTexture?(qt.setTexture3D(N,0),Dt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(qt.setTexture2DArray(N,0),Dt=U.TEXTURE_2D_ARRAY):(qt.setTexture2D(N,0),Dt=U.TEXTURE_2D),yt.activeTexture(U.TEXTURE0),yt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),yt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),yt.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let Je=yt.getParameter(U.UNPACK_ROW_LENGTH),de=yt.getParameter(U.UNPACK_IMAGE_HEIGHT),wi=yt.getParameter(U.UNPACK_SKIP_PIXELS),Ve=yt.getParameter(U.UNPACK_SKIP_ROWS),ro=yt.getParameter(U.UNPACK_SKIP_IMAGES);yt.pixelStorei(U.UNPACK_ROW_LENGTH,xe.width),yt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe.height),yt.pixelStorei(U.UNPACK_SKIP_PIXELS,Ft),yt.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),yt.pixelStorei(U.UNPACK_SKIP_IMAGES,re);let ri=b.isDataArrayTexture||b.isData3DTexture,Ai=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let ce=Gt.get(b),ke=Gt.get(N),xn=Gt.get(ce.__renderTarget),Me=Gt.get(ke.__renderTarget);yt.bindFramebuffer(U.READ_FRAMEBUFFER,xn.__webglFramebuffer),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Fe=0;Fe<wt;Fe++)ri&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.get(b).__webglTexture,k,re+Fe),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.get(N).__webglTexture,Mt,Re+Fe)),U.blitFramebuffer(Ft,Kt,Ft+It,Kt+gt,Lt,oe,Lt+It,oe+gt,U.DEPTH_BUFFER_BIT,U.NEAREST);yt.bindFramebuffer(U.READ_FRAMEBUFFER,null),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||Gt.has(b)){let ce=Gt.get(b),ke=Gt.get(N);yt.bindFramebuffer(U.READ_FRAMEBUFFER,C),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let xn=0;xn<wt;xn++)ri?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ce.__webglTexture,k,re+xn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ce.__webglTexture,k),Ai?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.__webglTexture,Mt,Re+xn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ke.__webglTexture,Mt),k!==0?U.blitFramebuffer(Ft,Kt,Ft+It,Kt+gt,Lt,oe,Lt+It,oe+gt,U.COLOR_BUFFER_BIT,U.NEAREST):Ai?U.copyTexSubImage3D(Dt,Mt,Lt,oe,Re+xn,Ft,Kt,It,gt):U.copyTexSubImage2D(Dt,Mt,Lt,oe,Ft,Kt,It,gt);yt.bindFramebuffer(U.READ_FRAMEBUFFER,null),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ai?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Dt,Mt,Lt,oe,Re,It,gt,wt,_e,He,xe.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Dt,Mt,Lt,oe,Re,It,gt,wt,_e,xe.data):U.texSubImage3D(Dt,Mt,Lt,oe,Re,It,gt,wt,_e,He,xe):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Mt,Lt,oe,It,gt,_e,He,xe.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Mt,Lt,oe,xe.width,xe.height,_e,xe.data):U.texSubImage2D(U.TEXTURE_2D,Mt,Lt,oe,It,gt,_e,He,xe);yt.pixelStorei(U.UNPACK_ROW_LENGTH,Je),yt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),yt.pixelStorei(U.UNPACK_SKIP_PIXELS,wi),yt.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),yt.pixelStorei(U.UNPACK_SKIP_IMAGES,ro),Mt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Dt),yt.unbindTexture()},this.initRenderTarget=function(b){Gt.get(b).__webglFramebuffer===void 0&&qt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?qt.setTextureCube(b,0):b.isData3DTexture?qt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?qt.setTexture2DArray(b,0):qt.setTexture2D(b,0),yt.unbindTexture()},this.resetState=function(){q=0,z=0,rt=null,yt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Ud={type:"change"},sh={type:"start"},Od={type:"end"},gl=new Jn,Fd=new an,vx=Math.cos(70*Yr.DEG2RAD),Le=new P,sn=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ih=1e-6,_l=class extends Or{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ln,this._lastTargetPosition=new P,this._quat=new ln().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new As,this._sphericalDelta=new As,this._scale=1,this._panOffset=new P,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new P,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sx.bind(this),this._onPointerDown=Mx.bind(this),this._onPointerUp=bx.bind(this),this._onContextMenu=Px.bind(this),this._onMouseWheel=wx.bind(this),this._onKeyDown=Ax.bind(this),this._onTouchStart=Rx.bind(this),this._onTouchMove=Cx.bind(this),this._onMouseDown=Ex.bind(this),this._onMouseMove=Tx.bind(this),this._interceptControlDown=Ix.bind(this),this._interceptControlUp=Lx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ud),this.update(),this.state=fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Le.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gl.origin.copy(this.object.position),gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gl.direction))<vx?this.object.lookAt(this.target):(Fd.setFromNormalAndCoplanarPoint(this.object.up,this.target),gl.intersectPlane(Fd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ih||this._lastTargetPosition.distanceToSquared(this.target)>ih?(this.dispatchEvent(Ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new st,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Mx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Sx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function bx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Od),this.state=fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ex(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(sh)}function Tx(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function wx(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Od))}function Ax(i){this.enabled!==!1&&this._handleKeyDown(i)}function Rx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1){this.state=fe.NONE;break}this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1){this.state=fe.NONE;break}this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(sh)}function Cx(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function Px(i){this.enabled!==!1&&i.preventDefault()}function Ix(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var aS=Math.PI*2;var qi=16764550,xl=Math.PI*2,Ei=(i,t,e=0)=>new P(i*Math.cos(t),e,i*Math.sin(t)),_n=(i,t={})=>new En({color:i,roughness:.66,...t}),Dx=i=>new Kn({color:i,toneMapped:!1}),zd=_n(2372692),kd=_n(14066529,{metalness:.54,roughness:.28}),Nx=new Pr({color:8560613,roughness:.17,metalness:.32,clearcoat:1}),yl=Dx(qi),Ux=new Un,oh=new Rr(1,0);function Ns(i,t,e,n,s,r=!0){let o=new Ge(t,e);return o.position.copy(n),o.scale.set(...s),o.castShadow=r,o.receiveShadow=r,i.add(o),o}function bi(i,t,e,n,s,r,o){return Ns(i,new jn(t,e,n,s),o,r,[1,1,1])}function ah(i,t,e,n=1,s=!1){let r=s?dr:pi,o=new fi({color:e,transparent:n<1,opacity:n});i.add(new r(new be().setFromPoints(t),o))}function Bd(i,t,e,n=qi,s=.38,r=96){ah(i,Array.from({length:r},(o,a)=>Ei(t,xl*a/r,e)),n,s,!0)}function rh(i,t,e,n,s){let r=new te;return r.position.copy(e),r.userData.pillar=s,r.userData.delay=n,r.userData.height=e.y,i.add(r),t.push(r),r}function Fx(i,t,e,n,s=.09){let r=e?s*1.15:s;Ns(i,oh,e?yl:n,t,[r,r,r],!1),e&&Ox(i,t,s*1.85)}function Ox(i,t,e){ah(i,Array.from({length:18},(n,s)=>Ei(e,xl*s/18).add(t)),qi,.7,!0)}function Bx(i,t){let e=new te;e.position.y=.22,i.add(e);let n=_n(9130031,{metalness:.25,roughness:.41}),s=_n(14723437,{metalness:.33,roughness:.34}),r=_n(3745825),o=_n(2103322),a=(x,g,p,y,E,v=12)=>bi(e,x,g,p,v,new P(0,y,0),E);a(.94,1.09,.18,.08,zd,8),a(.69,.85,.16,.25,n,8),a(.5,.65,.59,.62,kd,8),a(.69,.49,.19,1.01,n,8),a(1,.63,.42,1.28,n),a(1.01,.97,.078,1.5,s),a(.85,.78,.048,1.545,o);for(let x=0;x<5;x++){let g=x*xl/5,p=a(.1,.135,.85,1.59,r,6);p.rotation.set(Math.PI/2,0,g,"ZYX"),p.position.add(Ei(.22,g))}let l=new mn({uniforms:{time:{value:0},inner:{value:new Bt(16774576)},middle:{value:new Bt(16755785)},edge:{value:new Bt(15621929)}},vertexShader:`
      uniform float time;
      varying vec3 flamePosition;
      varying vec3 flameNormal;
      varying vec3 viewDirection;
      void main() {
        flamePosition = position;
        float height = position.y;
        vec3 bent = position;
        bent.x += height * height * (0.12 + 0.12 * sin(time * 3.1 + height * 6.0));
        bent.z += height * height * 0.1 * cos(time * 2.4 + height * 5.0);
        vec4 view = modelViewMatrix * vec4(bent, 1.0);
        flameNormal = normalize(normalMatrix * normal);
        viewDirection = -view.xyz;
        gl_Position = projectionMatrix * view;
      }
    `,fragmentShader:`
      uniform vec3 inner;
      uniform vec3 middle;
      uniform vec3 edge;
      varying vec3 flamePosition;
      varying vec3 flameNormal;
      varying vec3 viewDirection;
      void main() {
        float height = clamp(flamePosition.y, 0.0, 1.0);
        float facing = clamp(dot(normalize(flameNormal), normalize(viewDirection)), 0.0, 1.0);
        vec3 warm = mix(middle, edge, smoothstep(0.36, 1.0, height));
        vec3 heat = mix(warm, inner, facing * (1.0 - smoothstep(0.15, 0.78, height)));
        gl_FragColor = vec4(heat, 1.0);
        #include <colorspace_fragment>
      }
    `}),c=new Oi([[.08,0],[.33,.095],[.42,.23],[.36,.43],[.24,.62],[.11,.84],[0,1]].map(([x,g])=>new st(x,g)),20),h=Ns(e,c,l,new P(0,1.6,0),[1.44,1.86,1.44],!1),d=[[-.28,-.13,-.31,1.2],[.33,.11,.38,1.13],[-.1,.33,.17,.86]].map(([x,g,p,y])=>{let E=Ns(e,c,l,new P(x,1.57,g),[.82,y,.82],!1);return E.rotation.z=p,E}),u=t(16745016,.34,5.8,5.1);u.position.y=2.3,e.add(u);let f=new zi(16747068,24,8);f.position.y=2.35,e.add(f);let m=Array.from({length:15},()=>Ns(e,oh,yl,new P,[.034,.034,.034],!1));return(x,g)=>{let p=g?x:0;l.uniforms.time.value=p,h.scale.y=1.86+Math.sin(p*6)*.09,d.forEach((y,E)=>{y.rotation.y=p*.46+E*1.9}),f.intensity=24+Math.sin(p*7.2)*2,m.forEach((y,E)=>{let v=(p*(.34+E%3*.08)+E*.39)%1;y.position.copy(Ei(.16+v*.73,E*2.39+v*.7,2.08+v*2.18)),y.scale.setScalar(.044*(1-v))})}}function Gd(i){let t=new te,e=[],n=rh(t,e,new P,0),s=_n(2504009),r=_n(5402737),o=_n(6519922),a=_n(9274479);Bd(n,4.92,-.87,10334161,.38),Bd(n,5.29,-.88,qi,.24);let l=rh(t,e,new P,.64);bi(l,1.88,.95,.85,8,new P(0,-.49,0),s),bi(l,1.92,1.88,.13,8,new P(0,0,0),a),bi(l,1.82,1.92,.16,8,new P(0,.12,0),r);let c=Bx(l,i),h=_n(4941670),d=_n(7164486),u=new mi(1,1,6);for(let f=0;f<8;f++){let m=xl*(f+.5)/8,x=[.88,1.06,.96,1.04][f%4],g=rh(t,e,Ei(3.55,m),.12+f*.085);g.rotation.y=-m,bi(g,x,x*.55,.67,6,new P(0,-.39,0),s),bi(g,x+.045,x,.12,6,new P,a),bi(g,x,x+.045,.12,6,new P(0,.1,0),f%3===0?o:r);for(let y=0;y<2+f%2;y++){let E=.19+y%2*.35,v=(y-.65)*.39,w=.47+(f*13+y*7)%6*.09;bi(g,.05,.067,.31,6,new P(E,.31,v),d),Ns(g,u,y===1?o:h,new P(E,.34+w*.38,v),[w*.39,w,w*.39])}let p=[Ei(1.79,m,.115),Ei(2.8,m,.115)];ah(n,p,qi,.48);for(let y=0;y<3;y++)Fx(n,Ei(1.98+.25*y,m,.115),!1,yl,.048)}return{root:t,pieces:e,tick(f,m,x,g){c(f,g)}}}var Hd=new Set([zd,kd,Nx,yl,Ux,oh]);var Us=["","\u8D64\u677E","","\u6A61\u6A39","","\u6AFB\u6A39","",""],ch=[[4287818,10114869,"spire"],[4287818,10114869,"spire"],[12145974,10045233,"round"],[5865283,7492157,"broad"],[4093809,10516818,"spire"],[13533849,8734550,"broad"],[13215826,11436112,"broad"],[10709831,9983555,"spire"]],hh=[["\u5929\u7136\u74E6\u65AF\u7AD9","\u5929\u7136\u74E6\u65AF","\u7F50"],["\u8D64\u677E\u6797\u5834","\u8D64\u677E\u67F4","\u6839"],["\u9ED1\u5CA9\u7164\u7926","\u7164\u584A","\u584A"],["\u6A61\u6A39\u8FB2\u5834","\u79F8\u7A08\u6346","\u6346"],["\u9678\u5730\u6CB9\u7530","\u71C3\u6CB9","\u6876"],["\u6AFB\u6A39\u5712","\u4FEE\u679D\u67F4","\u6839"],["\u9678\u5730\u6CB9\u7530\u30FB\u76F4\u7ACB\u4E95","\u539F\u6CB9","\u6876"],["\u6D77\u4E0A\u947D\u6CB9\u5E73\u53F0","\u539F\u6CB9","\u6876"]],jr=1.67,zx=.92,Qr=jr+zx,kx=[2.85,3.12,3.42,3.05,3.25,2.68,2.95,3.08],Gx=[[11039560,6767922,.62,"wood"],[14270621,7760214,.65,"rope"],[7567239,12618836,.69,"rail"],[12824448,9140575,.72,"stone"],[6585208,14724437,.7,"truss"],[11823978,15776425,.64,"arch"],[12094548,8676925,.67,"covered"],[5401479,15185245,.74,"pier"]],Vd=[14191192,8495042,9215336,13209258,14268010,6922911,10849728,13531245],ii=Math.PI*2,it=(i,t,e)=>new P(i,t,e),De=(i,t,e=0)=>it(i*Math.cos(t),e,i*Math.sin(t)),zt=new Un,Ze=new xr(1,0),ze=new Cr(1,10,8),to=new mi(1,1,7),Ee=new jn(1,1,1,8),lh=new Map,Wd=new Set([zt,Ze,ze,to,Ee]);function en(i,t=!1){let e=i+(t?":lit":"");if(!lh.has(e)){let n=t?new Kn({color:i,toneMapped:!1}):new En({color:i,roughness:.87,flatShading:!0});lh.set(e,n),Wd.add(n)}return lh.get(e)}var Xd=Wd;function nt(i,t,e,n,s,r=!1){let o=new Ge(t,typeof e=="number"?en(e):e);return o.position.copy(n),o.scale.set(...s),o.castShadow=r,o.receiveShadow=!0,i.add(o),o}function uh(i,t,e,n=1){let s=new te;s.position.copy(t),i.add(s);let r=nt(s,Ee,e,it(0,0,0),[.085,.46,.085].map(o=>o*n));r.rotation.z=Math.PI/2;for(let o of[-1,1]){let a=nt(s,Ee,14924162,it(o*n*.232,0,0),[.07*n,.013,.07*n]);a.rotation.z=Math.PI/2}return s}function qd(i,t,e,n,s=2){let[r,o,a]=ch[e],l=new Bt(r).multiplyScalar(.78+s%5*.115).getHex(),c=new te;if(c.position.copy(t),c.scale.setScalar(n),i.add(c),nt(c,Ee,o,it(0,.37,0),[.085,.74,.085],!0),a==="spire")for(let h=0;h<3;h++){let d=.39-h*.085;nt(c,to,l,it(0,.65+h*.24,0),[d,.6,d],!0)}else{nt(c,Ze,l,it(0,.89,0),[.36,.41,.35],!0);let h=a==="broad"?.29:.17;for(let d of[-1,1])nt(c,Ze,l,it(d*h,.75,.09),[.27,.26,.25])}}var vl=[[9938856,5734026,14340017],[13350294,9201745,14930605],[10130333,5985129,14264403],[12954499,10774091,14732188],[11841181,5862768,14792799],[14201770,10775161,15784383],[11773344,10249551,14467743],[10070966,5073278,14921045]];function Hx(i,t,e,n){let s=[10326645,11111523,5589851,11175768,9729110,11176055,9335635,7571343][n],r=[],o=[],a=new Bt(e),l=new Bt(s),c=(...f)=>{for(let[m,x,g]of f)r.push(m,.004,x),o.push(g.r,g.g,g.b)},h=[[-t/2+.015,.34,0],[-t*.31,.37,-.08],[-t*.11,.31,.06],[t*.12,.32,.1],[t*.28,.29,-.08],[t/2-.04,.35,0]];for(let f=1;f<h.length;f++){let[m,x,g]=h[f-1],[p,y,E]=h[f],v=[m,g,l],w=[p,E,l];for(let T of[-1,1]){let _=[m,g+x*T,a],M=[p,E+y*T,a];T>0?(c(v,_,w),c(w,_,M)):(c(v,w,_),c(w,M,_))}}let d=Us[n]?[7571292,11177582,n===5?12622476:7633739]:[8944752,n===2?4537928:10784368,8028530];for(let[f,m,x,g,p]of[[0,-.55,-.64,.52,.25],[1,.42,.66,.87,.43],[2,.51,-.67,.69,.42]]){let y=a.clone().lerp(new Bt(d[f]),.83),E=v=>{let w=v*ii/9,T=.75+(v*7+f*3+n)%5*.065;return[m+g*T*Math.cos(w),x+p*T*Math.sin(w),a]};for(let v=0;v<9;v++)c([m,x,y],E((v+1)%9),E(v))}let u=new be;u.setAttribute("position",new he(r,3)),u.setAttribute("color",new he(o,3)),u.computeVertexNormals(),nt(i,u,new En({vertexColors:!0,roughness:.87,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),it(0,0,0),[1,1,1])}var Vx=["panel","rail","masonry","rail","barrier","picket","barrier","panel"];function Wx(i,t,e){if(t<.1)return;let[n,s,r]=vl[e],o=Vx[e],a=e===1?6833457:8413257,l=(d,u,f,m,x,g)=>nt(i,zt,d,it(u,f,0),[m,x,g]),c=Math.max(1,Math.round(t/(o==="picket"?.19:.37))),h=t/c;if(o==="rail"){for(let d of[.095,.202])l(a,0,d,t,.039,.039);for(let d=0;d<=c;d++)l(e===1?10777165:11636066,d*h-t/2,.133,.068,.266,.066)}else if(o==="picket"){for(let d of[.075,.158])l(s,0,d,t,.034,.037);for(let d=0;d<=c;d++){let u=d*h-t/2,f=d%3===0?s:r;l(f,u,.112,.056,.224,.054),nt(i,to,f,it(u,.245,0),[.043,.067,.043])}}else if(o==="masonry"){for(let d=0;d<c;d++){let u=(d+.5)*h-t/2;l(d%2?7431537:6182240,u,.072,h-.018,.144,.115),l(n,u,.157,h-.012,.044,.136)}for(let d=0;d<=c;d+=2){let u=d*h-t/2;l(6642017,u,.115,.105,.23,.144),l(r,u,.238,.116,.025,.151)}}else{let d=o==="barrier",u=d?[13940088,10506809,14206376]:[n,7904164,n];for(let f=0;f<c;f++){let m=(f+.5)*h-t/2;l(u[f%u.length],m,.102,h-.026,.159,.07),d&&f%3===1&&nt(i,ze,en(16765575,!0),it(m,.12,.043),[.032,.032,.021])}for(let f of[.027,.194])l(d?6706241:s,0,f,t,.033,.083);for(let f=0;f<=c;f++)l(s,f*h-t/2,.116,.052,.232,.093)}}function Xx(i,t,e){let n=new te;for(let s=0;s<t.length;s++){let r=t[s].clone().multiplyScalar(.976),o=t[(s+1)%t.length].clone().multiplyScalar(.976),a=o.clone().sub(r),l=(c,h)=>{if(h<=c)return;let d=r.clone().addScaledVector(a,c),u=r.clone().addScaledVector(a,h),f=new te;f.position.set((d.x+u.x)/2,0,(d.y+u.y)/2),f.rotation.y=-Math.atan2(a.y,a.x),n.add(f),Wx(f,d.distanceTo(u),e)};if(r.y*o.y<0){let c=r.x<0?.46:.45,h=[-c,c].map(d=>(d-r.y)/a.y).sort((d,u)=>d-u);l(0,Math.max(0,h[0])),l(Math.min(1,h[1]),1)}else l(0,1)}Ml(i,n)}function Ml(i,t){t.updateMatrixWorld(!0);let e=new Map;t.traverse(n=>{if(!n.isMesh)return;let s=n.geometry.id+":"+n.material.id+":"+n.castShadow;e.has(s)||e.set(s,[]),e.get(s).push(n)});for(let n of e.values()){let s=n[0],r=new ys(s.geometry,s.material,n.length);r.castShadow=s.castShadow,r.receiveShadow=s.receiveShadow,n.forEach((o,a)=>r.setMatrixAt(a,o.matrixWorld)),i.add(r)}}function qx(i,t,e){let[n,s,r]=vl[e],o=new te;for(let a=0;a<t.length;a++){let l=t[a],c=t[(a+1)%t.length],h=l.distanceTo(c),d=new te;d.position.set((l.x+c.x)/2,0,(l.y+c.y)/2),d.rotation.y=-Math.atan2(c.y-l.y,c.x-l.x),o.add(d),nt(d,zt,s,it(0,-.175,0),[h,.29,.055]),nt(d,zt,n,it(0,-.04,0),[h,.07,.095]),nt(d,zt,s,it(0,-.304,0),[h,.055,.083]);let u=Math.max(1,Math.floor(h/.23));for(let f=0;f<u;f++){let m=((f+.5)/u-.5)*h;nt(d,zt,f%3===1?r:s,it(m,-.16,0),[h/u*.68,.13,.077])}}Ml(i,o)}function Yx(i,t,e){let[n,s,r]=vl[e],o=new te;o.position.x=t,i.add(o);let a=e%2?1.24:1.05,l=e===7?1.37:1.02+e%3*.15;for(let h=0;h<4;h++)nt(o,zt,h%2?r:n,it(.11+h*.14,-.07-h*.14,0),[.16,.13,a*.62]);let c=.54+l/2;nt(o,zt,s,it(c,-.59,0),[l,.17,a]);for(let h=0;h<9;h++)nt(o,zt,h%3?n:r,it(.54+(h+.5)*l/9,-.496,0),[l/9-.014,.032,a*.98]);for(let h of[-1,1]){let d=h*a*.47;nt(o,zt,s,it(c,-.28,d),[l,.039,.042]);for(let u of[.61,c,.48+l])nt(o,zt,s,it(u,-.39,d),[.046,.23,.047]);nt(o,Ee,s,it(.39+l,-.88,d),[.055,.72,.055])}if(Us[e]){nt(o,zt,s,it(.49+l,-.415,0),[.17,.14,.43]);for(let h of[-.12,.12])nt(o,Ze,7706220,it(.49+l,-.31,h),[.11,.12,.1])}else for(let h of[-.27,.27])nt(o,ze,en(r,!0),it(.52+l,-.37,h),[.042,.046,.042])}function Zx(i,t,e,n){let s=Qr*Math.tan(Math.PI/8)-.13,r=(Qr+t)*Math.tan(Math.PI/8)-.16,o=n===7?.08:.24+n%3*.12,a=new Ss;a.moveTo(-t/2,-s),a.lineTo(t/2-o,-r+.17),a.lineTo(t/2,-r+o),a.lineTo(t/2+(n===2?.27:0),r-o),a.lineTo(t/2-o,r-.17),a.lineTo(-t/2,s),a.closePath();let l=new Ar(a,{depth:.31,bevelEnabled:!1});l.rotateX(-Math.PI/2).translate(0,-.31,0),nt(i,l,e,it(0,0,0),[1,1,1],!0);let c=a.getPoints().slice(0,-1).map(h=>new st(h.x,-h.y));Hx(i,t,e,n),qx(i,c,n),Xx(i,c,n),Yx(i,t/2+(n===2?.13:0),n),n!==7&&nt(i,Ze,4343124,it(.38,-.48,0),[t*.43,.39,r*.76])}function Jx(){let i=document.createElement("canvas");i.width=128,i.height=64;let t=i.getContext("2d");t.font="bold 40px sans-serif",t.textAlign="center",t.lineWidth=5,t.strokeStyle="#192844",t.fillStyle="#e6f4ff",t.strokeText("zzz",64,48),t.fillText("zzz",64,48);let e=new Ui(i);return e.colorSpace=$e,new ui({map:e,depthWrite:!1,toneMapped:!1})}function Kx(i,t){let e=new te,n=new te;e.add(n);let s=new te;n.add(s),nt(s,ze,i,it(0,.27,0),[.143,.19,.11],!0),nt(s,ze,15844250,it(0,.53,.028),[.153,.15,.135],!0),nt(s,ze,4929329,it(0,.632,.005),[.159,.078,.14]);let r=t===2,o=[0,4,6,7].includes(t),a=r?15643438:o?16052444:10177343;if(nt(s,ze,a,it(0,.657,0),[.168,.104,.154]),nt(s,zt,a,it(0,.633,.115),[.27,.025,.16]),r&&nt(s,ze,en(16773540,!0),it(0,.663,.155),[.043,.035,.026]),o)for(let h of[.25,.32])nt(s,zt,15978086,it(0,h,.097),[.22,.024,.035]);else if(!r)for(let h of[-.064,.064])nt(s,zt,5718836,it(h,.31,.099),[.031,.18,.033]);let l=[],c=[];for(let h of[-1,1]){nt(s,ze,3681590,it(h*.054,.535,.151),[.016,.021,.01]);let d=new te;d.position.set(h*.143,.38,.015),s.add(d),nt(d,ze,i,it(0,-.075,0),[.046,.1,.046]),nt(d,ze,15844250,it(0,-.16,0),[.042,.044,.041]),l.push(d);let u=new te;u.position.set(h*.067,.145,0),n.add(u),nt(u,zt,3684170,it(0,-.075,.027),[.084,.15,.127]),c.push(u)}return{root:e,pose:n,upper:s,arms:l,legs:c}}function $x(i,t,e,n){let[s,r,o,a]=Gx[n],l=t.distanceTo(e),c=new te;c.position.copy(t).lerp(e,.5),c.rotation.y=-Math.atan2(e.z-t.z,e.x-t.x),i.add(c),nt(c,zt,s,it(0,-.06,0),[l,.11,o],!0);let h=Math.ceil(l/.12);for(let d=0;d<h;d++)nt(c,zt,d%2?s:new Bt(s).multiplyScalar(.91).getHex(),it((d+.5)*l/h-l/2,-.009,0),[l/h-.011,.032,o*.97]);for(let d of[-1,1]){let u=d*o*.47;if(nt(c,zt,r,it(0,a==="rail"?.022:a==="stone"?.13:.24,u),[l,a==="stone"?.19:.035,.048]),a!=="rail"){for(let m of[-l*.44,0,l*.44]){let x=a==="pier"?.36:a==="covered"?.65:.31;nt(c,zt,r,it(m,x/2,u),[.05,x,.05]),a==="pier"&&nt(c,ze,en(16766087,!0),it(m,x,u),[.052,.052,.052]),a==="truss"&&(nt(c,zt,r,it(m,.13,u),[.036,.32,.036]).rotation.z=.63)}if(a==="rope"||a==="arch"){let m=a==="arch"?.29:-.14,x=Array.from({length:9},(g,p)=>it((p/8-.5)*l,.29+Math.sin(p*Math.PI/8)*m,u));c.add(new pi(new be().setFromPoints(x),new fi({color:r})))}}}a==="covered"&&nt(c,zt,r,it(0,.65,0),[l,.08,o+.13])}function Yd(i,t,e){if([0,4,6,7].includes(e)){let s=new te;if(s.position.copy(t),i.add(s),nt(s,Ee,{0:7978436,4:2520427,6:10771005,7:4351361}[e],it(0,0,0),[.09,.24,.09]),e===0)return nt(s,ze,7978436,it(0,.11,0),[.09,.06,.09]),nt(s,Ee,5465203,it(0,.17,0),[.029,.045,.029]),s;for(let r of[-.083,.083])nt(s,Ee,14005368,it(0,r,0),[.094,.024,.094]);return s}if(e===2)return nt(i,Ze,3157563,t,[.107,.09,.104]);if(e===3)return nt(i,zt,13803600,t,[.18,.14,.23]);let n=uh(i,t,ch[e][1],.53);return n.rotation.y=Math.PI/2,n}function jx(i,t,e){let n=new te;if(i.add(n),n.position.copy(t),e===0){for(let o of[-.27,.27]){nt(n,Ee,7909301,it(0,.3,o),[.21,.75,.21]).rotation.z=Math.PI/2;for(let a of[-.35,.35])nt(n,ze,7909301,it(a,.3,o),[.14,.21,.21]);nt(n,zt,6256773,it(0,.075,o),[.49,.15,.28])}nt(n,Ee,15389858,it(.49,.48,0),[.05,.96,.05]),nt(n,zt,15389858,it(.37,.87,0),[.24,.09,.1]),nt(n,ze,en(16760165,!0),it(.49,.98,0),[.07,.07,.07]);return}if(e===6){let a=new te;n.add(a);for(let l of[-.27,.27])nt(n,zt,12089167,it(l,.67,0),[.09,1.34,.12]),nt(n,zt,12089167,it(l,.05,0),[.13,.1,.59]);return nt(n,zt,6376006,it(0,1.33,0),[.7,.15,.24]),nt(a,zt,15316086,it(0,.85,.07),[.56,.16,.25]),nt(a,Ee,13619911,it(0,.43,.07),[.045,.86,.045]),nt(n,zt,6573128,it(0,.07,0),[.48,.14,.5]),l=>{a.position.y=Math.sin(l*2.4)*.19}}if(e===7){for(let l of[-.36,.36])for(let c of[-.27,.27])nt(n,zt,5670554,it(l*.27,.79,c*.27),[.066,1.56,.066]).rotation.set(-c*.85,0,l*.67);for(let l of[.35,.76,1.17,1.48]){let c=.73-l*.34;nt(n,zt,5670554,it(0,l,0),[c,.06,c])}let a=nt(n,Ee,12895930,it(0,.61,0),[.085,.87,.085]);return nt(n,zt,en(16759893,!0),it(0,1.55,0),[.13,.09,.13]),nt(n,zt,12024647,it(-.4,.22,-.21),[.32,.44,.4]),l=>{a.position.y=.61+Math.sin(l*2.7)*.22,a.rotation.y=l*4}}if(e===4){n.scale.setScalar(1.22),nt(n,zt,6781049,it(0,.055,0),[.65,.11,.58]);for(let c of[-.16,.16])for(let h of[-.27,.27])nt(n,zt,3513734,it(0,.39,c),[.071,.69,.069]).rotation.z=h;let a=new te;a.position.y=.73,n.add(a),nt(a,zt,3513734,it(0,0,0),[.9,.08,.1]),nt(a,ze,2322020,it(.47,-.03,0),[.12,.18,.13]),nt(a,zt,10253908,it(-.36,-.09,0),[.19,.15,.22]);let l=nt(n,Ee,13155996,it(.47,.35,0),[.018,.66,.018]);return c=>{a.rotation.z=Math.sin(c*2.1)*.28,l.position.y=.35+Math.sin(c*2.1)*.12}}if(e===2){nt(n,Ze,5853792,it(0,.39,-.23),[.74,.71,.5],!0),nt(n,zt,2236720,it(0,.25,.26),[.49,.43,.13]);for(let o of[-.27,.27])nt(n,zt,11370841,it(o,.25,.35),[.088,.49,.11]),nt(n,zt,10592684,it(o*.48,.024,.54),[.025,.048,.59]);nt(n,zt,11370841,it(0,.49,.36),[.66,.105,.12]),nt(n,ze,en(16761717,!0),it(0,.51,.45),[.05,.05,.035]);return}if(e===3){for(let o=0;o<4;o++){nt(n,zt,8808265,it(0,.046,o*.12-.18),[.66,.09,.075]);for(let a=0;a<5;a++)nt(n,to,14265954,it(a*.13-.26,.15,o*.12-.18),[.033,.23,.033])}return}let s=[10117959,6650757,0,0,0,11035509,12882514,4615799][e];nt(n,zt,e===1?13153170:10849647,it(0,.23,0),[.55,.45,.48],!0);let r=nt(n,new mi(1,1,4),s,it(0,.54,0),[.47,.28,.43]);r.rotation.y=Math.PI/4,nt(n,zt,en(15974260,!0),it(.11,.27,.244),[.13,.115,.022])}function Qx(i,t,e){let n=new te,s=[],r=!!Us[e],[,o]=ch[e],[a,l,c]=vl[e],h=(u,f,m=1,x=0)=>{let g=new te;g.position.set(u,0,f),g.rotation.y=x,g.scale.setScalar(m),i.add(g);let p=jx(g,it(0,0,0),e);p&&s.push(p)};e===4||e===6?(h(.34,-.57,1,e===4?-.24:.3),h(t*.35,.39,.76,e===4?.28:-.3)):e===2?h(.8,-.54,.96,-.64):h(t*.33,r?-.45:.19,1,.31);let d=(u,f,m,x)=>{nt(n,zt,x,it(u,m*.34,f),[m,m*.68,m*.78]);for(let g of[-.32,.32])nt(n,zt,a,it(u+g*m,m*.36,f),[m*.105,m*.72,m*.81])};if(r){let u=[[-.81,.51,.73],[-.36,.59,.93],[.08,.67,.67],[.49,.7,.98],[.93,.79,.78],[t*.39,.48,.65],[.02,-.57,.69],[-.55,-.59,.55]],f=e===5?.89:e===3?.96:1;u.forEach(([m,x,g],p)=>qd(n,it(m*f,0,x),e,g*(p%2?f:1),p));for(let[m,x]of[[.38,-.45],[.59,-.63]])nt(n,Ee,o,it(m,.071,x),[.12,.14,.12]),nt(n,Ee,14924169,it(m,.144,x),[.105,.013,.105]);for(let m=0;m<5;m++){let x=m>2,g=-.55+(x?m-2.5:m)*.115;uh(n,it(-.5,x?.14:.057,g),o,.67).rotation.y=.12}d(t*.37,-.72,.19,o);for(let m=0;m<15;m++){let x=-.9+m*17%23/23*2.05,g=(m%2?-1:1)*(.46+m*7%9*.05),p=e===5&&m%3===0?15051179:m%2?7308116:8887137;if(Math.abs(g)>.65+x*.29)continue;let y=.035+m%4*.016;nt(n,Ze,p,it(x,y*.58,g),[y*1.3,y,y*.87])}}else if(e===2){for(let u=0;u<18;u++){let f=u<10,m=u%10,x=(f?.69:-.49)+(m*11%9-4)*.08,g=(f?.55:-.52)+(m*7%9-4)*.043,p=.068+m%4*.025;nt(n,Ze,[3749187,5327192,6642275][u%3],it(x,p*(u%2?1.1:.6),g),[p*1.25,p,p],!0)}for(let u of[.42,.62]){nt(n,zt,l,it(-.62,.043,u),[.71,.036,.024]);for(let f=0;f<5;f++)nt(n,zt,6903369,it(-.92+f*.14,.02,.52),[.055,.032,.3])}nt(n,zt,10642498,it(-.53,.16,.52),[.31,.17,.2]),nt(n,Ze,3749187,it(-.53,.24,.52),[.14,.09,.091]);for(let u of[-.62,-.44])for(let f of[.425,.615])nt(n,Ee,5262165,it(u,.082,f),[.054,.031,.054]).rotation.x=Math.PI/2;d(1.22,-.71,.22,8608839)}else{for(let m of[-1,1]){let x=m<0?-.65:.56,g=m<0?-.57:.63;if(!(e===0&&m===1)){nt(n,zt,7299410,it(x,.022,g),[.43,.044,.39]);for(let p of[-.105,.105])for(let y of[-.1,.1])Yd(n,it(x+p,.165,g+y),e)}}d(-.68,.51,.29,e===7?13207891:8809043),d(-.36,.55,.19,l);let u=t*.34,f=e===0?-.49:-.82;for(let m of[f-.1,f+.1]){nt(n,Ee,e===0?6064776:9138262,it(u,.102,m),[.047,.52,.047]).rotation.z=Math.PI/2;for(let x of[u-.21,u+.21])nt(n,Ee,c,it(x,.081,m),[.064,.156,.064])}if(e!==7)for(let m=0;m<7;m++){let x=-.55+m*.19,g=m<4?.45+m*.078:-.73,p=.039+m%3*.017;nt(n,Ze,m%2?8484971:11114101,it(x,p*.6,g),[p,p,p*1.3])}}return Ml(i,n),u=>s.forEach((f,m)=>f(u+m*.83))}function ty(i,t){let e=new te;e.position.y=.59,i.add(e),nt(i,Ee,7305609,it(0,.11,0),[.72,.22,.72],!0),nt(i,Ee,5264742,it(0,.35,0),[.32,.44,.32],!0),nt(i,Ee,4338493,it(0,.59,0),[.53,.12,.53]);for(let d=0;d<10;d++){let u=d*ii/10;nt(i,Ze,9668739,De(.5,u,.65),[.144,.12,.137])}for(let d=0;d<3;d++)uh(i,it(0,.662,0),6044978,1.35).rotation.y=d*1.05;let n=new Oi([[.24,-.46],[.77,-.36],[.91,-.2],[.74,-.03],[.48,.17],[.22,.35],[0,.56]].map(([d,u])=>new st(d,u)),8),s=[16018993,16756553,16766312,16772529].map((d,u)=>nt(e,n,en(d,!0),De(u*.059,u*2.4,.31),[.22-u*.032,.8-u*.09,.22-u*.032])),r=Array.from({length:15},()=>nt(i,Ze,en(16758616,!0),it(0,0,0),[.026,.026,.026])),o=t(16748094,.16,3.8,3.8);o.position.y=.83,i.add(o);let a=new zi(16746818,4,6,2);a.position.y=1.05,i.add(a);let l=0,c=0,h=16758616;return{arrive(d,u){h=[16758616,16772030,16742476,16763488,9161215,16748970,16763774,10804735][u],c=Math.max(c,.42+d*.073)},reset(d){l=d},tick(d,u,f,m){c=Math.max(0,c-u*1.55);let x=Math.min(1,Math.max(0,l/64)),g=m?Math.sin(d*9)*.07+Math.cos(d*14)*.04:0,p=.54+3.55*x+.48*c+g,y=.75+1.2*x;e.scale.set(y,p,y),s.forEach((E,v)=>{E.rotation.z=Math.sin(d*6+v*1.7)*.18,E.position.y=.34+Math.cos(d*8+v*2)*.058}),o.material.opacity=(.095+x*.22+c*.1)*(.62+f*.8),o.scale.setScalar(3.2+3.6*x),o.position.y=.83+x*1.05,a.position.y=1.05+x*.62,a.intensity=(3.4+19*x+4*c)*(.32+f*1.06),r.forEach((E,v)=>{let w=(d*(.55+v%3*.19)+v*.37)%1;E.material=en(h,!0),E.visible=m&&v<3+x*10+c*7,E.position.copy(De(w*(.29+v%4*.09),v*2.4+w,.73+w*(.65+x*3.1))),E.scale.setScalar(.029*(1-w))})}}}function ey(i){let t=new Ge(new Bi(95,95),new Kn({color:3627894}));t.rotation.x=-Math.PI/2,t.position.y=-1.25,i.add(t);let e=new ys(zt,en(16777215,!0),130),n=new we;for(let l=0;l<e.count;l++)n.position.copy(De(2.2+l*47%139*.17,l*2.39996,-1.237)),n.rotation.y=l*.41,n.scale.set(.15+l%7*.13,.012,.023+l%3*.013),n.updateMatrix(),e.setMatrixAt(l,n.matrix);i.add(e);let s=new te;i.add(s);for(let l=0;l<18;l++){let c=l*ii/18+.18,h=De(14.4+l%3*1.3,c,-1.14),d=3.4+l%5*.44;nt(s,Ze,l%2?6649956:5861227,h,[d,.82,d*.93]);let u=h.clone().addScaledVector(De(1,c),d*.37),f=1.45+l*7%11*.35;u.y+=f*.25,nt(s,Ze,l%3?6716784:8819338,u,[d*.76,f,d*.66]);for(let m=0;m<7;m++){let x=h.clone().add(De(d*(.3+m*.065),m*2.4+l,.58));qd(s,x,l%3===0?1:0,.45+(m+l)%3*.14)}}let r=[],o=new En({color:16181207,roughness:1,fog:!1});for(let l=0;l<8;l++){let c=new te,h=De(13.2+l%3*1.4,l*ii/8,3+l%3*.65);c.position.copy(h),i.add(c);for(let d=0;d<5;d++)nt(c,ze,o,it((d-2)*.52,Math.sin(d*1.7)*.19,Math.cos(d)*.23),[.63,.34+d%3*.11,.49]);r.push({cloud:c,anchor:h})}let a={dawn:5406600,day:6659498,dusk:5597577,night:2704994};return{setTime(l){t.material.color.setHex(a[l]);let c=new Bt(a[l]).lerp(new Bt(12706521),.16);for(let h=0;h<e.count;h++)e.setColorAt(h,c);e.instanceColor.needsUpdate=!0},drift(l){r.forEach(({cloud:c,anchor:h},d)=>{c.position.x=h.x+Math.sin(l*.18+d)*.95,c.position.z=h.z+Math.cos(l*.12+d)*.5})}}}function Zd(i,t,e){let n=new te,s=ey(n),r=new te;n.add(r);let o=new jn(jr/Math.cos(Math.PI/8),1.59,.35,8);nt(r,o,9081707,it(0,-.175,0),[1,1,1],!0);let a=new te,l=jr*Math.tan(Math.PI/8),c=.46;for(let _=0;_<8;_++){let M=(_+.5)*ii/8;for(let L of[-1,1]){let R=new te;R.position.copy(De(jr-.058,M)),R.rotation.y=-M,a.add(R);let I=L*(c+l)/2,F=l-c;nt(R,zt,8223086,it(0,.06,I),[.12,.12,F]),nt(R,zt,12035720,it(0,.135,I),[.15,.036,F])}}Ml(r,a);let h=Jx(),d=ty(r,t),u=[];for(let _=0;_<8;_++){let M=_*ii/8,L=De(1.23,M,.28);nt(r,Ee,6902596,L,[.033,.56,.033]);let R=new En({color:16106103,emissive:16753487,roughness:.65});u.push(R),nt(r,zt,R,De(1.23,M,.57),[.14,.18,.14]),nt(r,to,6639178,De(1.23,M,.69),[.13,.12,.13])}let f=[],m=[],x=[],g=[r];r.userData.pillar=8,i.forEach((_,M)=>{let L=(M+.5)*ii/8,R=kx[M],I=De(Qr+R/2,L),F=De(1,L),H=it(-F.z,0,F.x);x.push(I);let C=new te;C.position.copy(I),C.userData.pillar=M,n.add(C),g.push(C);let G=[7244649,9873262,7431542,11575410,12098675,9081967,10720353,6651789][M],q=new te;if(q.rotation.y=-L,C.add(q),Zx(q,R,G,M),M===7)for(let _t=0;_t<6;_t++)nt(C,Ee,4810360,De(1.36,_t*ii/6,-.66),[.11,1.18,.11]);let z=Qx(q,R,M),rt=F.clone().negate(),V=De(Qr+.06,L),K=De(jr-.06,L);$x(n,V,K,M);let Q=_.checked.map((_t,Ct)=>{let W=Kx(M===2?5594217:M===4||M===7?2521731:Vd[(M+Ct%2)%Vd.length],M);W.root.scale.setScalar(.72);let ut=new Ni(h);ut.position.set(0,.48,-.37),ut.scale.set(.56,.28,1),W.root.add(ut);let At=Yd(W.upper,it(0,.26,.23),M);At.visible=!1,n.add(W.root);let Ut=Ct<4?-1:1,Z=Ct%4,St=R*(-.13+Z*.133),Jt=(Qr+R/2+St)*Math.tan(Math.PI/8)-.35,Rt=I.clone().addScaledVector(F,St).addScaledVector(H,Ut*Jt),Pt=I.clone().addScaledVector(F,.05+Z*.19).addScaledVector(H,Ut*(.11+Z%2*.1)),Vt=-L+(Ut<0?Math.PI:0);W.root.position.copy(_t?Pt:Rt),W.root.rotation.y=Vt;let tt=(Ct%2-.5)*.15,ct=it(-rt.z*tt,0,rt.x*tt),lt=[Pt,V.clone().add(ct),K.clone().add(ct),De(.87,L+tt)],Tt=0,xt=lt.slice(1).map((Nt,ne)=>{let ie=lt[ne],le=ie.distanceTo(Nt),U={from:ie,to:Nt,start:Tt,length:le};return Tt+=le,U}),Xt=.78+Math.random()*.32;return{actor:W,sleep:ut,cargo:At,home:Rt,restYaw:Vt,loading:Pt,path:xt,distance:Tt,outbound:Tt/Xt,inbound:Tt/(Xt*1.12),strideRate:Xt*15,elapsed:_t?-Math.random()*3.8:0,checked:_t,delivered:!1}});m.push({workers:Q,machinery:z}),f.push(_.checked.map((_t,Ct)=>nt(C,Ze,en(_t?16763767:7704485,!0),De(1.035,(Ct+.5)*ii/8+L,.088),[.071,.059,.071])))});let p=0,y=()=>i.reduce((_,M)=>_+M.checked.filter(Boolean).length,0);d.reset(y());function E(_){p=_,f.forEach((M,L)=>M.forEach((R,I)=>{let F=i[L].checked[I];R.material=en(F?16763767:L===p?11656447:7704485,!0),R.scale.setScalar(F?.091:.064)}))}function v(_,M,L,R,I){let{actor:F}=_;F.root.position.copy(M).lerp(L,R),F.root.rotation.y=Math.atan2(L.x-M.x,L.z-M.z),F.upper.position.y=Math.abs(I)*.041,F.legs[0].rotation.x=I*.52,F.legs[1].rotation.x=-I*.52}function w(_){_.actor.root.position.copy(_.checked?_.loading:_.home),_.actor.root.rotation.y=_.restYaw,_.actor.pose.rotation.x=_.checked?0:-Math.PI/2,_.actor.pose.position.y=_.checked?0:.13,_.sleep.visible=!_.checked,_.actor.upper.position.y=0,_.actor.legs.forEach(M=>{M.rotation.x=0}),_.actor.arms.forEach(M=>{M.rotation.x=0}),_.cargo.visible=!1}function T(_,M,L,R){if(!_.checked||!R){w(_);return}if(_.elapsed+=L,_.elapsed<0){w(_);return}let{actor:I,path:F,distance:H,outbound:C,inbound:G,strideRate:q}=_,z=_.elapsed;if(z>=C+G){_.elapsed=-(.55+Math.random()*1.85),_.delivered=!1,w(_);return}I.pose.rotation.x=0,I.pose.position.y=0,_.sleep.visible=!1;let rt=z<C,K=(rt?z/C:1-(z-C)/G)*H,Q=F.find(W=>K<W.start+W.length)??F.at(-1),_t=(K-Q.start)/Q.length,Ct=Math.sin(z*q);if(rt?v(_,Q.from,Q.to,_t,Ct):v(_,Q.to,Q.from,1-_t,Ct),_.cargo.visible=rt,I.arms.forEach(W=>{W.rotation.x=rt?-1.05:0}),!_.delivered&&!rt&&(_.delivered=!0,d.arrive(1,M),M===p)){let[,W,ut]=hh[M];e?.("\u9001\u9054 \xB7 1"+ut+W)}}return{root:n,pieces:[],centers:x,pickables:g,labelPoints:x.map(_=>_.clone().setY(1.15)),dispose(){h.map.dispose()},setTime:s.setTime,highlight:E,refresh(_){if(E(p),d.reset(y()),!_)return;let M=m[_.pillar].workers[_.action];M&&(M.checked=i[_.pillar].checked[_.action],M.elapsed=-(.08+Math.random()*.62),M.delivered=!1,w(M))},tick(_,M,L,R){R&&s.drift(_),m.forEach((I,F)=>{R&&I.machinery?.(_+F*.47),I.workers.forEach(H=>T(H,F,M,R))}),d.tick(_,M,L,R),u.forEach(I=>{I.emissiveIntensity=L*1.9})}}}var Jd={eye:[11.5,12.5,15.2],target:-.38},ny={eye:[7.9,7,11.6],target:1.08},Sl=matchMedia("(prefers-reduced-motion: reduce)"),Kd={dawn:[16766128,8295362,2.25,1.65,.48],day:[16772817,10078690,3.3,2.2,.08],dusk:[16755308,9214933,2.55,1.36,.65],night:[10794751,10860779,1.14,1.22,1]};function iy(){let i=document.createElement("canvas");i.width=i.height=96;let t=i.getContext("2d"),e=t.createRadialGradient(48,48,0,48,48,48);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,96,96),new Ui(i)}function sy(i){let t=new be,e=[];for(let n=0;n<270;n++){let s=n*2.39996,r=5+n*17%111/7;e.push(Math.cos(s)*r,n*43%101/10-4,Math.sin(s)*r)}t.setAttribute("position",new he(e,3)),i.add(new fr(t,new vs({color:16768940,size:.031,transparent:!0,opacity:.58})))}function ry(i){let t=new Set;i.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.geometry&&t.add(e.geometry),e.material&&t.add(e.material)}),t.forEach(e=>{!Hd.has(e)&&!Xd.has(e)&&e.dispose()})}function $d(i,{pillars:t,onPillar:e,onUnavailable:n,onDelivery:s,onLabels:r,onHover:o}={}){let a=!t,l=i.getContext("webgl2",{alpha:!0,antialias:!0,premultipliedAlpha:!0});if(!l)return null;let c=new fl({canvas:i,context:l,alpha:!0,antialias:!0});c.setPixelRatio(Math.min(devicePixelRatio,1.5)),c.setClearColor(0,0),c.toneMapping=zr,c.toneMappingExposure=1.42,c.shadowMap.enabled=!0,c.shadowMap.type=ki;let h=new or;h.fog=new rr(1515322,.034);let d=new Lr(13162751,2893122,1.85);h.add(d);let u=new Ts(16766368,3.25);u.position.set(-6,9,4),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-7,right:7,top:7,bottom:-7,far:30}),u.shadow.normalBias=.025,h.add(u);let f=new Ts(7904511,2.8);f.position.set(3,5,-7),h.add(f),sy(h);let m=iy();function x(Z,St,Jt,Rt){let Pt=new ui({color:Z,map:m,opacity:St,transparent:!0,depthWrite:!1,blending:Br}),Vt=new Ni(Pt);return Vt.scale.set(Jt,Rt,1),Vt}if(a){let Z=x(qi,.22,10.5,5.1);Z.position.set(-6,2.9,-4),h.add(Z)}let g=new qe(a?42:40,1,.1,75),p=a?null:new _l(g,i);p&&(p.enablePan=!1,p.minDistance=8,p.maxDistance=29,p.minPolarAngle=.04,p.maxPolarAngle=Math.PI*.49,p.autoRotateSpeed=.62);let y=a?Gd(x):Zd(t,x,s);h.add(y.root),y.highlight?.(0);let E=!Sl.matches,v=0,w=!1,T=!1,_=performance.now(),M=_,L="night",R=1,I;function F(){if(!a){let[Z,St,Jt,Rt,Pt]=Kd[L];u.color.setHex(Z),d.color.setHex(St),u.intensity=Jt,d.intensity=Rt,f.intensity=.95,R=Pt,y.setTime?.(L),u.position.set(L==="dusk"?8:-6,L==="day"?10:5,4)}}function H(){let Z=a?ny:Jd;g.position.set(...Z.eye),p?(p.target.set(0,Z.target,0),p.update()):g.lookAt(0,Z.target,0)}function C(){w&&!T&&!v&&(v=requestAnimationFrame(G))}function G(Z){if(v=0,!w||T)return;let St=(Z-_)/1e3,Jt=!Sl.matches,Rt=Math.min(.06,(Z-M)/1e3);M=Z;for(let Pt of y.pieces){let{delay:Vt,height:tt}=Pt.userData,ct=Jt?Yr.clamp((St-Vt)/1.6,0,1):1,lt=1-Math.pow(1-ct,3);Pt.visible=lt>.01,Pt.scale.y=Math.max(.005,lt),Pt.position.y=tt-(1-lt)*.58}if(a&&Jt&&(y.root.rotation.y+=Rt*.14),y.tick?.(Z/1e3,Rt,R,Jt),p){if(I){let Pt=Jt?1-Math.exp(-Rt*8):1;g.position.lerp(I.eye,Pt),p.target.lerp(I.target,Pt),g.position.distanceToSquared(I.eye)<1e-4&&p.target.distanceToSquared(I.target)<1e-4&&(I=void 0)}p.autoRotate=E&&Jt&&!I,p.update(Rt)}c.render(h,g),y.labelPoints&&r&&r(y.labelPoints.map(Pt=>{let Vt=Pt.clone().project(g);return[(Vt.x+1)*50,(1-Vt.y)*50,Vt.z>=-1&&Vt.z<=1]})),Jt&&C()}function q(){let{clientWidth:Z,clientHeight:St}=i;!Z||!St||(g.aspect=Z/St,g.zoom=Math.min(1,g.aspect/(a?.96:1.1)),g.updateProjectionMatrix(),c.setSize(Z,St,!1),C())}let z=new ResizeObserver(q),rt=new IntersectionObserver(([Z])=>{w=Z.isIntersecting,C()});z.observe(i),rt.observe(i),p?.addEventListener("change",C),p?.addEventListener("start",()=>{I=void 0}),Sl.addEventListener("change",C);let V,K=new Fr;K.params.Line.threshold=.1;function Q(Z){V=Z.isPrimary&&Z.button===0?[Z.clientX,Z.clientY]:null}function _t(Z){let St=i.getBoundingClientRect();K.setFromCamera(new st((Z.clientX-St.left)/St.width*2-1,1-(Z.clientY-St.top)/St.height*2),g);let Jt=y.pickables?K.intersectObjects(y.pickables):K.intersectObject(y.root);for(let Rt of Jt)for(let Pt=Rt.object;Pt;Pt=Pt.parent)if(Pt.visible&&Number.isInteger(Pt.userData.pillar))return Pt.userData.pillar;return-1}function Ct(Z){if(!V||Math.hypot(Z.clientX-V[0],Z.clientY-V[1])>6)return;let St=_t(Z);St>=0&&e(St)}function W(Z){!Z.buttons&&Z.pointerType!=="touch"&&o?.(_t(Z))}function ut(){o?.(-1)}function At(Z){Z.preventDefault(),Ut(),n?.()}e&&(i.addEventListener("pointerdown",Q),i.addEventListener("pointerup",Ct),i.addEventListener("pointermove",W),i.addEventListener("pointerleave",ut)),i.addEventListener("webglcontextlost",At);function Ut(){T||(T=!0,cancelAnimationFrame(v),z.disconnect(),rt.disconnect(),Sl.removeEventListener("change",C),i.removeEventListener("pointerdown",Q),i.removeEventListener("pointerup",Ct),i.removeEventListener("pointermove",W),i.removeEventListener("pointerleave",ut),i.removeEventListener("webglcontextlost",At),p?.dispose(),y?.dispose?.(),ry(h),m.dispose(),u.shadow.dispose(),c.dispose(),c.forceContextLoss())}return F(),H(),q(),{dispose:Ut,refreshProgress(Z){y.refresh?.(Z),C()},setTime(Z){Object.hasOwn(Kd,Z)&&(L=Z,F(),C())},focusIsland(Z){if(!p)return;let St=Jd,Jt=y.centers[Z],Rt=Jt?Jt.clone().multiplyScalar(.53).setY(.18):new P(0,St.target,0);I={eye:Jt?Rt.clone().add(new P(6.8,7.8,8.5)):new P(...St.eye),target:Rt},C()},setAuto(Z){E=Z,C()},select(Z){y.highlight?.(Z),C()}}}var Zt=i=>document.querySelector(i),dh=["#7e8eb5","#bf9b6a","#8f8abc","#b98e8b","#929fbe","#bb96af","#8da8c0","#c1ad88"],no={goal:"\u516D\u500B\u6708\u5F8C\uFF0C\u81EA\u4FE1\u5B8C\u6210\u82F1\u6587\u5DE5\u4F5C\u7C21\u5831",pillars:["\u53E3\u8A9E\u8868\u9054","\u7C21\u5831\u7D50\u69CB","\u807D\u529B\u7406\u89E3","\u5C08\u696D\u8A5E\u5F59","\u767C\u97F3\u7BC0\u594F","\u81E8\u5834\u61C9\u7B54","\u7DF4\u7FD2\u7FD2\u6163","\u56DE\u994B\u8207\u8ABF\u6574"].map((i,t)=>({name:i,actions:[["\u6BCF\u9031\u9304\u88FD\u4E09\u6B21\u4E09\u5206\u9418\u82F1\u6587\u7C21\u5831","\u6BCF\u5929\u63CF\u8FF0\u4E00\u9805\u5DE5\u4F5C\u5167\u5BB9","\u9031\u672B\u7DF4\u7FD2\u4E94\u5206\u9418\u7121\u7A3F\u8868\u9054","\u6BCF\u9031\u548C\u5925\u4F34\u7528\u82F1\u6587\u5C0D\u8AC7\u4E00\u6B21","\u6BCF\u5929\u7528\u82F1\u6587\u6458\u8981\u4E00\u5247\u65B0\u805E","\u6BCF\u9031\u7DF4\u7FD2\u4E00\u6B21\u958B\u5834\u81EA\u6211\u4ECB\u7D39","\u7DF4\u7FD2\u7528\u4E00\u53E5\u8A71\u8AAA\u660E\u6838\u5FC3\u89C0\u9EDE","\u6BCF\u9031\u56DE\u807D\u9304\u97F3\uFF0C\u8A18\u4E0B\u4E09\u500B\u5361\u9EDE"],["\u62C6\u89E3\u4E00\u4EFD\u512A\u79C0\u7C21\u5831\u7684\u7D50\u69CB","\u5BEB\u51FA\u7C21\u5831\u7684\u4E00\u53E5\u8A71\u4E3B\u65E8","\u70BA\u7C21\u5831\u5BEB\u4E0B\u4E09\u500B\u95DC\u9375\u8A0A\u606F","\u7528\u4E00\u9801\u5448\u73FE\u554F\u984C\u8207\u89E3\u6CD5","\u6BCF\u9031\u7DF4\u7FD2\u4E00\u6B21\u5169\u5206\u9418\u958B\u5834","\u70BA\u5404\u6BB5\u843D\u88DC\u4E0A\u8F49\u5834\u53E5","\u5B8C\u6210\u4E00\u5F35\u7D50\u8AD6\u8207\u5EFA\u8B70\u6295\u5F71\u7247","\u8A08\u6642\u7DF4\u7FD2\u5341\u5206\u9418\u5B8C\u6574\u7C21\u5831"],["\u6BCF\u5929\u807D\u5341\u5206\u9418\u82F1\u6587\u6F14\u8B1B","\u6BCF\u9031\u7CBE\u807D\u4E00\u6BB5\u5169\u5206\u9418\u97F3\u6A94","\u807D\u5F8C\u53E3\u982D\u8907\u8FF0\u4E09\u500B\u91CD\u9EDE","\u6574\u7406\u4E94\u500B\u5E38\u898B\u63D0\u554F\u53E5\u578B","\u6BCF\u9031\u770B\u4E00\u6B21\u4E0D\u958B\u5B57\u5E55\u7684\u77ED\u7247","\u8A18\u4E0B\u807D\u4E0D\u61C2\u7684\u9023\u97F3\u7247\u6BB5","\u6BCF\u9031\u548C\u5925\u4F34\u7DF4\u7FD2\u807D\u554F\u7B54","\u6708\u5E95\u91CD\u807D\u7B2C\u4E00\u9031\u97F3\u6A94"],["\u6574\u7406\u4E8C\u5341\u500B\u5DE5\u4F5C\u5E38\u7528\u540D\u8A5E","\u6BCF\u5929\u7528\u4E09\u500B\u65B0\u8A5E\u9020\u53E5","\u5EFA\u7ACB\u7C21\u5831\u5E38\u7528\u52D5\u8A5E\u6E05\u55AE","\u6BCF\u9031\u8907\u7FD2\u5341\u500B\u5DF2\u5B78\u8A5E\u5F59","\u6574\u7406\u4E94\u7A2E\u63CF\u8FF0\u5716\u8868\u7684\u53E5\u578B","\u628A\u4E00\u9801\u4E2D\u6587\u7C21\u5831\u6539\u6210\u82F1\u6587","\u5EFA\u7ACB\u500B\u4EBA\u4F8B\u53E5\u5361\u7247","\u6BCF\u9031\u5728\u53E3\u8AAA\u4E2D\u4F7F\u7528\u4E94\u500B\u65B0\u8A5E"],["\u9304\u4E0B\u81EA\u6211\u4ECB\u7D39\u4F5C\u70BA\u8D77\u9EDE","\u6BCF\u5929\u8DDF\u8B80\u4E00\u5206\u9418\u539F\u8072\u97F3\u6A94","\u6A19\u8A18\u4E00\u6BB5\u7A3F\u4EF6\u7684\u91CD\u97F3","\u6BCF\u9031\u7DF4\u7FD2\u4E94\u7D44\u5BB9\u6613\u6DF7\u6DC6\u7684\u97F3","\u7DF4\u7FD2\u5728\u53E5\u5B50\u91CD\u9EDE\u524D\u505C\u9813","\u628A\u4E00\u6BB5\u9577\u53E5\u62C6\u6210\u77ED\u53E5","\u6BCF\u9031\u6BD4\u8F03\u539F\u8072\u8207\u81EA\u5DF1\u7684\u9304\u97F3","\u8ACB\u5925\u4F34\u6307\u51FA\u4E00\u500B\u807D\u4E0D\u6E05\u7684\u8A5E"],["\u5217\u51FA\u5341\u500B\u53EF\u80FD\u88AB\u554F\u7684\u554F\u984C","\u70BA\u4E09\u500B\u96E3\u984C\u6E96\u5099\u7C21\u77ED\u7B54\u6848","\u7DF4\u7FD2\u4E00\u6B21\u8ACB\u5C0D\u65B9\u6F84\u6E05\u554F\u984C","\u5EFA\u7ACB\u4E94\u53E5\u722D\u53D6\u601D\u8003\u6642\u9593\u7684\u8A71","\u6BCF\u9031\u5B89\u6392\u5341\u5206\u9418\u6A21\u64EC\u554F\u7B54","\u7DF4\u7FD2\u627F\u8A8D\u672A\u77E5\u4E26\u63D0\u51FA\u5F8C\u7E8C\u6B65\u9A5F","\u6BCF\u9031\u7DF4\u7FD2\u7528\u4F8B\u5B50\u89E3\u91CB\u4E00\u500B\u7B54\u6848","\u8A18\u9304\u6BCF\u6B21\u554F\u7B54\u5F8C\u7684\u4E00\u9805\u6539\u5584"],["\u56FA\u5B9A\u9031\u4E00\u4E09\u4E94\u7684\u7DF4\u7FD2\u6642\u6BB5","\u628A\u5341\u5206\u9418\u7DF4\u7FD2\u6392\u5165\u884C\u4E8B\u66C6","\u6E96\u5099\u4E00\u500B\u5B89\u975C\u7684\u9304\u97F3\u89D2\u843D","\u6BCF\u6B21\u7DF4\u7FD2\u524D\u6253\u958B\u540C\u4E00\u4EFD\u6E05\u55AE","\u9031\u65E5\u9078\u51FA\u4E0B\u4E00\u9031\u7DF4\u7FD2\u4E3B\u984C","\u70BA\u5FD9\u788C\u65E5\u6E96\u5099\u5169\u5206\u9418\u7248\u672C","\u6BCF\u9031\u5B89\u6392\u4E00\u6B21\u5B8C\u6574\u6392\u7DF4","\u6BCF\u9031\u56DE\u9867\u7DF4\u7FD2\u5B89\u6392\u662F\u5426\u53EF\u6301\u7E8C"],["\u9080\u8ACB\u4E00\u4F4D\u5925\u4F34\u63D0\u4F9B\u56DE\u994B","\u5EFA\u7ACB\u6E05\u6670\u5EA6\u8207\u6D41\u66A2\u5EA6\u8A55\u5206\u8868","\u6BCF\u9031\u6536\u96C6\u4E00\u6B21\u5177\u9AD4\u56DE\u994B","\u6BCF\u6B21\u53EA\u9078\u4E00\u9805\u554F\u984C\u4FEE\u6B63","\u6BD4\u8F03\u672C\u9031\u8207\u4E0A\u9031\u7684\u9304\u97F3","\u8A18\u9304\u4E00\u6B21\u8868\u9054\u9806\u66A2\u7684\u7247\u523B","\u6BCF\u6708\u505A\u4E00\u6B21\u5341\u5206\u9418\u6A21\u64EC\u7C21\u5831","\u6708\u5E95\u8ABF\u6574\u4E0B\u4E00\u968E\u6BB5\u7684\u7DF4\u7FD2\u8A08\u756B"]][t],checked:Array(8).fill(!1)}))};function oy(){try{let i=JSON.parse(sessionStorage.getItem("mandala-world-view"));if(window.parent!==window&&typeof i?.chartId=="string"&&typeof i.goal=="string"&&Array.isArray(i.pillars)&&i.pillars.length===8&&i.pillars.every(t=>typeof t.name=="string"&&t.actions?.length===8&&t.actions.every(e=>typeof e=="string")&&Array.isArray(t.checked)&&t.checked.length===8))return i}catch{}return no}var Ne=oy(),Pn,Cn=0,bl=!1,eo=!1,fh=Zt("#scene"),El=!0,io=-1,jd=[];Zt("#goal").textContent=Ne.goal;Zt("#goal").title=Ne.goal;Zt("#sample").hidden=Ne!==no;var Qd=Ne.pillars.map((i,t)=>{let e=document.createElement("button");return e.textContent=String(t+1),e.setAttribute("aria-label",i.name),e.title=i.name,e.onclick=()=>Tl(t,!0),e});Zt("#pillars").replaceChildren(...Qd);var tf=Ne.pillars.map(i=>i.name).map((i,t)=>{let e=document.createElement("button");e.type="button";let n=document.createElement("small");n.textContent=String(t+1).padStart(2,"0");let s=document.createElement("span");return s.textContent=i,s.title=i,e.append(n,s),e.onclick=()=>{rf(!0),Tl(t,!0)},e.onpointerenter=()=>{io=t,Fs()},e.onpointerleave=()=>{io=-1,Fs()},e});Zt("#islandLabels").replaceChildren(...tf);function Fs(){tf.forEach((i,t)=>{let e=jd[t],n=e?.[2]&&e[0]>5&&e[0]<95&&e[1]>25&&e[1]<86;i.hidden=!n||!El&&io!==t,!i.hidden&&(i.style.left=e[0]+"%",i.style.top=e[1]+"%",i.classList.toggle("active",t===Cn))})}function Tl(i,t=!1){Cn=i;let e=Ne.pillars[Cn];Zt("#pillarNumber").textContent=String(Cn+1)+" / 8",Zt("#pillarName").textContent=e.name,Qd.forEach((n,s)=>n.setAttribute("aria-pressed",String(s===Cn))),Zt("#actions").replaceChildren(...e.actions.map((n,s)=>{let r=document.createElement("li"),o=document.createElement("label"),a=document.createElement("input"),l=document.createElement("span"),c=document.createElement("span");return a.type="checkbox",a.checked=e.checked[s],a.disabled=bl,a.onchange=()=>ly(i,s,a),l.className="action-number",l.setAttribute("aria-hidden","true"),l.textContent=String(s+1).padStart(2,"0"),c.textContent=n,o.append(a,l,c),r.append(o),r})),ef(),Pn?.select(Cn),t&&Pn?.focusIsland(Cn),Fs()}function ef(){let i=Ne.pillars.reduce((r,o)=>r+o.checked.filter(Boolean).length,0);Zt("#crystalCount").textContent="\u5168\u8868\u5B8C\u6210 "+i+" / 64",Zt("#crystalProgress").value=i;let[t,e,n]=hh[Cn],s=Ne.pillars[Cn].checked.filter(Boolean).length;Zt("#islandWood").textContent=t+(Us[Cn]?" \xB7 "+Us[Cn]:"")+"\uFF5C"+(s?`${s} \u4F4D\u5DE5\u4EBA\u642C\u904B${e}\uFF0C\u6BCF\u4EBA\u6BCF\u8D9F 1 ${n}`:"\u52FE\u9078\u884C\u52D5\u5F8C\u958B\u59CB\u4F9B\u61C9"),Zt("#chosen").textContent="\u672C\u652F\u67F1 "+s+" / 8"}function ay(i,t,e){return Ne===no?Promise.resolve():new Promise((n,s)=>{let r=new MessageChannel,o=setTimeout(()=>{r.port1.close(),s(new Error("\u5132\u5B58\u672A\u56DE\u61C9\uFF0C\u8ACB\u91CD\u65B0\u958B\u555F 3D \u6AA2\u8996\u78BA\u8A8D\u9032\u5EA6\u3002"))},2e4);r.port1.onmessage=({data:a})=>{clearTimeout(o),r.port1.close(),a.ok?n():s(new Error(a.message))},window.parent.postMessage({type:"mandala:check-action",chartId:Ne.chartId,pillar:i,action:t,done:e},location.origin,[r.port2])})}async function ly(i,t,e){if(bl)return;let n=e.checked,s=Zt("#checkStatus");bl=!0,s.textContent=Ne===no?"":"\u5132\u5B58\u4E2D\u2026",Zt("#actions").setAttribute("aria-busy","true");let r=document.activeElement===e;Zt("#actions").inert=!0;try{await ay(i,t,n),Ne.pillars[i].checked[t]=n,ef(),Pn?.refreshProgress({pillar:i,action:t,done:n}),s.textContent=Ne===no?"":"\u5DF2\u5132\u5B58"}catch(o){e.checked=Ne.pillars[i].checked[t],s.textContent=o.message}finally{bl=!1,Zt("#actions").inert=!1,Zt("#actions").removeAttribute("aria-busy"),Zt("#actions").querySelectorAll("input").forEach(o=>{o.disabled=!1}),r&&e.isConnected&&document.activeElement===document.body&&e.focus()}}function nf(){fh.hidden=!0,Zt("#sceneUnavailable").hidden=!1,Zt(".scene-footer").hidden=!0,Zt(".island-tools").hidden=!0,Zt("#islandLabels").hidden=!0,Pn=null}function sf(){Zt("#rotate").textContent=eo?"\u66AB\u505C\u65CB\u8F49":"\u81EA\u52D5\u65CB\u8F49",Zt("#rotate").setAttribute("aria-pressed",String(eo)),Pn?.setAuto(eo)}Zt("#rotate").onclick=()=>{eo=!eo,sf()};Zt("#daylight").addEventListener("click",i=>{let t=i.target.closest("[data-time]");t&&(Zt("#daylight").querySelectorAll("button").forEach(e=>e.setAttribute("aria-pressed",String(e===t))),fh.closest(".viewport").dataset.time=t.dataset.time,Pn?.setTime(t.dataset.time))});Zt("#islandOverview").onclick=()=>Pn?.focusIsland(-1);function rf(i){let t=Zt("#goalList"),e=Zt("#toggleGoals");t.hidden=!i,Zt(".workspace").classList.toggle("goals-hidden",!i),e.textContent=i?"\u6536\u8D77\u6E05\u55AE":"\u986F\u793A\u6E05\u55AE",e.setAttribute("aria-expanded",String(i))}Zt("#toggleGoals").onclick=()=>rf(Zt("#goalList").hidden);Zt("#toggleLabels").onclick=i=>{El=!El,io=-1,i.currentTarget.setAttribute("aria-pressed",String(El)),Fs()};Tl(0);try{Pn=$d(fh,{pillars:Ne.pillars,onPillar:i=>i===8?Pn?.focusIsland(-1):Tl(i,!0),onLabels:i=>{jd=i,Fs()},onHover:i=>{io=i,Fs()},onDelivery:i=>{Zt("#delivery").textContent=i},onUnavailable:nf})}catch(i){console.warn("Mandala scene could not start",i)}Pn?(Zt(".island-tools").hidden=!1,Zt("#islandLabels").hidden=!1):nf();sf();window.addEventListener("pagehide",i=>{i.persisted||Pn?.dispose()});function cy(i){return String(i).replace(/[<>&"']/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"})[t])}function of(){let i=[[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1]],t=Array.from({length:9},()=>Array(9).fill(null));t[4][4]={text:Ne.goal,c:"#304636",dark:!0},i.forEach(([n,s],r)=>{t[3+s][3+n]={text:Ne.pillars[r].name,c:dh[r]},t[s*3+1][n*3+1]={text:Ne.pillars[r].name,c:dh[r]},i.forEach(([o,a],l)=>{t[s*3+a][n*3+o]={text:Ne.pillars[r].actions[l],c:dh[r],light:!0}})});let e='<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1180" viewBox="0 0 1080 1180"><rect width="1080" height="1180" fill="#f7f7ef"/><text x="45" y="55" font-family="Arial,sans-serif" font-size="25" fill="#304636">\u9858\u671B\u4E4B\u5883 \xB7 \u6211\u7684\u66FC\u9640\u7F85\u8868</text><text x="45" y="88" font-family="Arial,sans-serif" font-size="13" fill="#7d8b74">\u4E00\u500B\u6838\u5FC3\u76EE\u6A19 / \u516B\u500B\u652F\u67F1 / \u516D\u5341\u56DB\u500B\u958B\u59CB\u7684\u53EF\u80FD</text>';for(let n=0;n<9;n++)for(let s=0;s<9;s++){let r=t[n][s],o=45+s*110,a=120+n*110;e+=`<rect x="${o+2}" y="${a+2}" width="106" height="106" rx="4" fill="${r.light?"#fff":r.c}" stroke="${r.light?r.c:"#f7f7ef"}" stroke-opacity=".35"/>`;let l=Array.from(r.text),c=[];for(;l.length;)c.push(l.splice(0,7).join(""));let h=c.slice(0,8);h.forEach((d,u)=>{e+=`<text x="${o+55}" y="${a+55-(h.length-1)*7+u*14}" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" fill="${r.light?"#435641":"#fff"}">${cy(d)}</text>`})}return e+'<text x="45" y="1150" font-family="Arial,sans-serif" font-size="12" fill="#7d8b74">WISHLANDS</text></svg>'}Zt("#export").onclick=()=>{Zt("#chart").innerHTML=of(),Zt("#exportDialog").showModal()};Zt("#closeDialog").onclick=()=>Zt("#exportDialog").close();Zt("#download").onclick=()=>{let i=new Blob([of()],{type:"image/svg+xml;charset=utf-8"}),t=URL.createObjectURL(i),e=document.createElement("a");e.href=t,e.download="\u6211\u7684\u66FC\u9640\u7F85\u8868.svg",e.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)};Zt("#print").onclick=()=>window.print();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
