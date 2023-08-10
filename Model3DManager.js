var gdjs;(function(c){const i=new c.Logger("Model3DManager");class u{constructor(r,s){this._loadedThreeModels=new Map;this._loader=null;this._dracoLoader=null;if(this._resources=r,this._resourcesLoader=s,typeof THREE!="undefined"){this._loader=new THREE_ADDONS.GLTFLoader,this._dracoLoader=new THREE_ADDONS.DRACOLoader,this._dracoLoader.setDecoderPath("./pixi-renderers/draco/gltf/"),this._loader.setDRACOLoader(this._dracoLoader);const a=new THREE.Group;a.add(new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:"#ff00ff"}))),this._invalidModel={scene:a,animations:[],cameras:[],scenes:[],asset:{},userData:{},parser:null}}}setResources(r){this._resources=r}loadModels(r,s){const e=this._resources.filter(function(t){return t.kind==="model3D"});if(e.length===0||!this._loader)return s(e.length);let o=0;for(let t=0;t<e.length;++t){const d=e[t],n=this._resourcesLoader.getFullUrl(d.file);this._loader.withCredentials=this._resourcesLoader.checkIfCredentialsRequired(n),this._loader.load(n,l=>{this._loadedThreeModels.set(d.name,l),o++,o===e.length?s(e.length):r(o,e.length)},void 0,l=>{i.error(l),o++,o===e.length?s(e.length):r(o,e.length)})}}getModel(r){return this._loadedThreeModels.get(r)||this._invalidModel}}c.Model3DManager=u})(gdjs||(gdjs={}));
//# sourceMappingURL=Model3DManager.js.map
