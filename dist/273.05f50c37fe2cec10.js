"use strict";(self.webpackChunknobleui_angular=self.webpackChunknobleui_angular||[]).push([[273],{9273:(j,z,c)=>{c.d(z,{fi:()=>R,g6:()=>H});var C=c(9808),t=c(5e3),O=c(2313),V=c(9770),_=c(727),y=c(4968),x=c(3151),M=c(8372),T=c(2382),Q=c(655);const D=[[["","quill-editor-toolbar",""]]],P=["[quill-editor-toolbar]"],q={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},b=(n,m)=>n||m||"html",L=new t.OlP("config",{providedIn:"root",factory:()=>({modules:q})});let S=(()=>{class n{constructor(e,i){this.config=i,this.quill$=(0,V.P)(()=>(0,Q.mG)(this,void 0,void 0,function*(){var s,o;if(!this.Quill){const l=this.document.addEventListener;this.document.addEventListener=this.document.__zone_symbol__addEventListener||this.document.addEventListener;const u=yield c.e(971).then(c.t.bind(c,9971,19));this.document.addEventListener=l,this.Quill=u.default?u.default:u}return null===(s=this.config.customOptions)||void 0===s||s.forEach(l=>{const u=this.Quill.import(l.import);u.whitelist=l.whitelist,this.Quill.register(u,!0,this.config.suppressGlobalRegisterWarning)}),null===(o=this.config.customModules)||void 0===o||o.forEach(({implementation:l,path:u})=>{this.Quill.register(u,l,this.config.suppressGlobalRegisterWarning)}),this.Quill})).pipe((0,x.d)({bufferSize:1,refCount:!0})),this.document=e.get(C.K0),this.config||(this.config={modules:q})}getQuill(){return this.quill$}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.zs3),t.LFG(L,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),I=(()=>{class n{constructor(e,i,s,o,l,u,p,E){this.elementRef=i,this.cd=s,this.domSanitizer=o,this.platformId=l,this.renderer=u,this.zone=p,this.service=E,this.required=!1,this.customToolbarPosition="top",this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new t.vpe,this.onEditorChanged=new t.vpe,this.onContentChanged=new t.vpe,this.onSelectionChanged=new t.vpe,this.onFocus=new t.vpe,this.onBlur=new t.vpe,this.disabled=!1,this.subscription=null,this.quillSubscription=null,this.valueGetter=(d,h)=>{let r=h.querySelector(".ql-editor").innerHTML;("<p><br></p>"===r||"<div><br></div>"===r)&&(r=this.defaultEmptyValue);let a=r;const g=b(this.format,this.service.config.format);if("text"===g)a=d.getText();else if("object"===g)a=d.getContents();else if("json"===g)try{a=JSON.stringify(d.getContents())}catch(v){a=d.getText()}return a},this.valueSetter=(d,h)=>{const r=b(this.format,this.service.config.format);if("html"===r)return([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(h=this.domSanitizer.sanitize(t.q3G.HTML,h)),d.clipboard.convert(h);if("json"===r)try{return JSON.parse(h)}catch(a){return[{insert:h}]}return h},this.selectionChangeHandler=(d,h,r)=>{const a=!d&&!!this.onModelTouched;!this.onBlur.observers.length&&!this.onFocus.observers.length&&!this.onSelectionChanged.observers.length&&!a||this.zone.run(()=>{null===d?this.onBlur.emit({editor:this.quillEditor,source:r}):null===h&&this.onFocus.emit({editor:this.quillEditor,source:r}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:h,range:d,source:r}),a&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(d,h,r)=>{const a=this.quillEditor.getText(),g=this.quillEditor.getContents();let v=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===v||"<div><br></div>"===v)&&(v=this.defaultEmptyValue);const f=this.trackChanges||this.service.config.trackChanges,w=("user"===r||f&&"all"===f)&&!!this.onModelChange;!this.onContentChanged.observers.length&&!w||this.zone.run(()=>{w&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:g,delta:d,editor:this.quillEditor,html:v,oldDelta:h,source:r,text:a}),this.cd.markForCheck()})},this.editorChangeHandler=(d,h,r,a)=>{if(this.onEditorChanged.observers.length)if("text-change"===d){const g=this.quillEditor.getText(),v=this.quillEditor.getContents();let f=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===f||"<div><br></div>"===f)&&(f=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:v,delta:h,editor:this.quillEditor,event:d,html:f,oldDelta:r,source:a,text:g}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:d,oldRange:r,range:h,source:a}),this.cd.markForCheck()})},this.document=e.get(C.K0)}static normalizeClassNames(e){return e.trim().split(" ").reduce((s,o)=>{const l=o.trim();return l&&s.push(l),s},[])}ngAfterViewInit(){(0,C.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().subscribe(e=>{this.elementRef.nativeElement.insertAdjacentHTML("top"===this.customToolbarPosition?"beforeend":"afterbegin",this.preserveWhitespace?"<pre quill-editor-element></pre>":"<div quill-editor-element></div>"),this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const i=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),s=Object.assign({},this.modules||this.service.config.modules);i?s.toolbar=i:void 0===s.toolbar&&(s.toolbar=q.toolbar);let o=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===o&&(o="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(r=>{this.renderer.setStyle(this.editorElem,r,this.styles[r])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(r=>{const a=e.import(r.import);a.whitelist=r.whitelist,e.register(a,!0)}),this.customModules.forEach(({implementation:r,path:a})=>{e.register(a,r)});let l=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;l||(l=this.service.config.bounds?this.service.config.bounds:this.document.body);let u=this.debug;!u&&!1!==u&&this.service.config.debug&&(u=this.service.config.debug);let p=this.readOnly;!p&&!1!==this.readOnly&&(p=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let E=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(E=this.service.config.defaultEmptyValue);let d=this.scrollingContainer;!d&&null!==this.scrollingContainer&&(d=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let h=this.formats;if(!h&&void 0===h&&(h=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{var r,a,g;if(this.quillEditor=new e(this.editorElem,{bounds:l,debug:u,formats:h,modules:s,placeholder:o,readOnly:p,defaultEmptyValue:E,scrollingContainer:d,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const v=null===(a=null===(r=this.quillEditor)||void 0===r?void 0:r.theme)||void 0===a?void 0:a.tooltip,f=null===(g=null==v?void 0:v.root)||void 0===g?void 0:g.querySelector("input[data-link]");(null==f?void 0:f.dataset)&&(f.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===b(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const a=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(a,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),(this.onEditorCreated.observers.length||this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})}))}ngOnDestroy(){var e;this.dispose(),null===(e=this.quillSubscription)||void 0===e||e.unsubscribe(),this.quillSubscription=null}ngOnChanges(e){if(this.quillEditor){if(e.readOnly&&this.quillEditor.enable(!e.readOnly.currentValue),e.placeholder&&(this.quillEditor.root.dataset.placeholder=e.placeholder.currentValue),e.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=e.defaultEmptyValue.currentValue),e.styles){const i=e.styles.currentValue,s=e.styles.previousValue;s&&Object.keys(s).forEach(o=>{this.renderer.removeStyle(this.editorElem,o)}),i&&Object.keys(i).forEach(o=>{this.renderer.setStyle(this.editorElem,o,this.styles[o])})}if(e.classes){const i=e.classes.currentValue,s=e.classes.previousValue;s&&this.removeClasses(s),i&&this.addClasses(i)}e.debounceTime&&this.addQuillEventListeners()}}addClasses(e){n.normalizeClassNames(e).forEach(i=>{this.renderer.addClass(this.editorElem,i)})}removeClasses(e){n.normalizeClassNames(e).forEach(i=>{this.renderer.removeClass(this.editorElem,i)})}writeValue(e){if(this.filterNull&&null===e||(this.content=e,!this.quillEditor))return;const i=b(this.format,this.service.config.format),s=this.valueSetter(this.quillEditor,e);if(this.compareValues){const o=this.quillEditor.getContents();if(JSON.stringify(o)===JSON.stringify(s))return}e?"text"===i?this.quillEditor.setText(e):this.quillEditor.setContents(s):this.quillEditor.setText("")}setDisabledState(e=this.disabled){this.disabled=e,this.quillEditor&&(e?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}registerOnValidatorChange(e){this.onValidatorChanged=e}validate(){if(!this.quillEditor)return null;const e={};let i=!0;const s=this.quillEditor.getText(),o=this.trimOnValidation?s.trim().length:1===s.length&&0===s.trim().length?0:s.length-1,l=this.quillEditor.getContents().ops,u=l&&1===l.length&&["\n",""].includes(l[0].insert);return this.minLength&&o&&o<this.minLength&&(e.minLengthError={given:o,minLength:this.minLength},i=!1),this.maxLength&&o>this.maxLength&&(e.maxLengthError={given:o,maxLength:this.maxLength},i=!1),this.required&&!o&&u&&(e.requiredError={empty:!0},i=!1),i?null:e}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new _.w0,this.subscription.add((0,y.R)(this.quillEditor,"selection-change").subscribe(([s,o,l])=>{this.selectionChangeHandler(s,o,l)}));let e=(0,y.R)(this.quillEditor,"text-change"),i=(0,y.R)(this.quillEditor,"editor-change");"number"==typeof this.debounceTime&&(e=e.pipe((0,M.b)(this.debounceTime)),i=i.pipe((0,M.b)(this.debounceTime))),this.subscription.add(e.subscribe(([s,o,l])=>{this.textChangeHandler(s,o,l)})),this.subscription.add(i.subscribe(([s,o,l,u])=>{this.editorChangeHandler(s,o,l,u)}))})}dispose(){null!==this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.zs3),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(O.H7),t.Y36(t.Lbi),t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(S))},n.\u0275dir=t.lG2({type:n,inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",required:"required",formats:"formats",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",scrollingContainer:"scrollingContainer",bounds:"bounds",customOptions:"customOptions",customModules:"customModules",trackChanges:"trackChanges",preserveWhitespace:"preserveWhitespace",classes:"classes",trimOnValidation:"trimOnValidation",linkPlaceholder:"linkPlaceholder",compareValues:"compareValues",filterNull:"filterNull",debounceTime:"debounceTime",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[t.TTD]}),n})(),H=(()=>{class n extends I{constructor(e,i,s,o,l,u,p,E){super(e,i,s,o,l,u,p,E)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.zs3),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(O.H7),t.Y36(t.Lbi),t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(S))},n.\u0275cmp=t.Xpm({type:n,selectors:[["quill-editor"]],features:[t._Bn([{multi:!0,provide:T.JU,useExisting:(0,t.Gpc)(()=>n)},{multi:!0,provide:T.Cf,useExisting:(0,t.Gpc)(()=>n)}]),t.qOj],ngContentSelectors:P,decls:1,vars:0,template:function(e,i){1&e&&(t.F$t(D),t.Hsn(0))},styles:[":host{display:inline-block}\n"],encapsulation:2}),n})(),R=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:L,useValue:e}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[C.ez]]}),n})()}}]);