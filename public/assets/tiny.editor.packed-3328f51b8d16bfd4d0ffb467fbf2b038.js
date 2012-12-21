var TINY=TINY||{},T$=T$||function(a){return document.getElementById(a)},T$$$=T$$$||function(){return document.all?1:0};TINY.editor=function(){function c(c,d){this.n=c,window[c]=this,this.t=T$(d.id),this.obj=d,this.xhtml=d.xhtml;var e=document.createElement("div"),f=document.createElement("div"),g=document.createElement("div"),h=d.controls.length,i=0;this.i=document.createElement("iframe"),this.i.scrolling="no",this.i.width=d.width||"500",this.i.height=d.height||"250",this.ie=T$$$(),g.className=d.rowclass||"tinyeditor-header",e.className=d.cssclass||"tinyeditor",e.style.width=this.i.width+"px",e.appendChild(g);for(i;i<h;i++){var j=d.controls[i];if(j=="n")g=document.createElement("div"),g.className=d.rowclass||"tinyeditor-header",e.appendChild(g);else if(j=="|"){var k=document.createElement("div");k.className=d.dividerclass||"tinyeditor-divider",g.appendChild(k)}else if(j=="font"){var l=document.createElement("select"),m=d.fonts||["Verdana","Arial","Georgia"],n=m.length,o=0;l.className="tinyeditor-font",l.onchange=new Function(this.n+'.ddaction(this, "fontname")'),l.options[0]=new Option("Font","");for(o;o<n;o++){var p=m[o];l.options[o+1]=new Option(p,p)}g.appendChild(l)}else if(j=="size"){var l=document.createElement("select"),q=d.sizes||[1,2,3,4,5,6,7],r=q.length,o=0;l.className="tinyeditor-size",l.onchange=new Function(this.n+'.ddaction(this, "fontsize")');for(o;o<r;o++){var s=q[o];l.options[o]=new Option(s,s)}g.appendChild(l)}else if(j=="style"){var l=document.createElement("select"),t=d.styles||[["Style",""],["Paragraph","<p>"],["Header 1","<h1>"],["Header 2","<h2>"],["Header 3","<h3>"],["Header 4","<h4>"],["Header 5","<h5>"],["Header 6","<h6>"]],r=t.length,o=0;l.className="tinyeditor-style",l.onchange=new Function(this.n+'.ddaction(this, "formatblock")');for(o;o<r;o++){var u=t[o];l.options[o]=new Option(u[0],u[1])}g.appendChild(l)}else if(a[j]){var v=document.createElement("div"),o=a[j],w=o[2],x,y=o[0]*b;v.className=d.controlclass,v.unselectable="on",v.style.backgroundPosition="0px "+y+"px",v.title=o[1],x=w=="a"?'.action("'+o[3]+'", 0, '+(o[4]||0)+")":'.insert("'+o[4]+'", "'+o[5]+'", "'+o[3]+'")',v.onmousedown=new Function(this.n+(j=="print"?".print()":x)),v.onmouseover=new Function(this.n+".hover(this, "+y+", 1)"),v.onmouseout=new Function(this.n+".hover(this, "+y+", 0)"),g.appendChild(v),this.ie&&(v.unselectable="on")}}this.t.parentNode.insertBefore(e,this.t),this.t.style.width=this.i.width+"px",f.appendChild(this.t),f.appendChild(this.i),e.appendChild(f),this.t.style.display="none";if(d.footer){var z=document.createElement("div");z.className=d.footerclass||"tinyeditor-footer";if(d.toggle){var A=d.toggle,B=document.createElement("div");B.className=A.cssclass||"toggle",B.innerHTML=d.toggletext||"source",B.onclick=new Function(this.n+".toggle(0, this);return false"),z.appendChild(B)}if(d.resize){var C=d.resize,D=document.createElement("div");D.className=C.cssclass||"resize",D.onmousedown=new Function("event",this.n+".resize(event);return false"),D.onselectstart=function(){return!1},z.appendChild(D)}e.appendChild(z)}this.e=this.i.contentWindow.document,this.e.open();var E="<html><head>",F=d.bodyid?' id="'+d.bodyid+'"':"";d.cssfile&&(E+='<link rel="stylesheet" href="'+d.cssfile+'" />'),d.css&&(E+='<style type="text/css">'+d.css+"</style>"),E+="</head><body"+F+' contenteditable="true">'+(d.content||this.t.value),E+="</body></html>",this.e.write(E),this.e.close(),this.e.designMode="On",this.d=1;if(this.xhtml)try{this.e.execCommand("styleWithCSS",0,0)}catch(G){try{this.e.execCommand("useCSS",0,1)}catch(G){}}}var a=[],b=-30;return a.bold=[4,"Bold","a","bold"],a.italic=[5,"Italic","a","italic"],a.underline=[6,"Underline","a","underline"],a.strikethrough=[7,"Strikethrough","a","strikethrough"],a.subscript=[8,"Subscript","a","subscript"],a.superscript=[9,"Superscript","a","superscript"],a.orderedlist=[10,"Insert Ordered List","a","insertorderedlist"],a.unorderedlist=[11,"Insert Unordered List","a","insertunorderedlist"],a.outdent=[12,"Outdent","a","outdent"],a.indent=[13,"Indent","a","indent"],a.leftalign=[14,"Left Align","a","justifyleft"],a.centeralign=[15,"Center Align","a","justifycenter"],a.rightalign=[16,"Right Align","a","justifyright"],a.blockjustify=[17,"Block Justify","a","justifyfull"],a.undo=[18,"Undo","a","undo"],a.redo=[19,"Redo","a","redo"],a.image=[20,"Insert Image","i","insertimage","Enter Image URL:","http://"],a.hr=[21,"Insert Horizontal Rule","a","inserthorizontalrule"],a.link=[22,"Insert Hyperlink","i","createlink","Enter URL:","http://"],a.unlink=[23,"Remove Hyperlink","a","unlink"],a.unformat=[24,"Remove Formatting","a","removeformat"],a.print=[25,"Print","a","print"],c.prototype.print=function(){this.i.contentWindow.print()},c.prototype.hover=function(a,b,c){this.getSelection(),a.style.backgroundPosition=(c?"34px ":"0px ")+b+"px"},c.prototype.getSelection=function(){this.ie&&this.e.getSelection&&(this.sel=this.e.getSelection(),this.sel.getRangeAt&&this.sel.rangeCount&&(this.range=this.sel.getRangeAt(0)))},c.prototype.restoreSelection=function(){this.range&&this.ie&&this.e.getSelection&&(this.sel=this.e.getSelection(),this.sel.removeAllRanges(),this.sel.addRange(this.range))},c.prototype.ddaction=function(a,b){var c=a.selectedIndex,d=a.options[c].value;this.action(b,d)},c.prototype.action=function(a,b,c){c&&!this.ie?alert("Your browser does not support this function."):(this.restoreSelection(),this.e.execCommand(a,0,b||null))},c.prototype.insert=function(a,b,c){var d=prompt(a,b);d!=null&&d!=""&&this.e.execCommand(c,0,d)},c.prototype.setfont=function(){this.restoreSelection(),execCommand("formatblock",0,hType)},c.prototype.resize=function(a){this.mv&&this.freeze(),this.i.bcs=TINY.cursor.top(a),this.mv=new Function("event",this.n+".move(event)"),this.sr=new Function(this.n+".freeze()"),this.ie?(document.attachEvent("onmousemove",this.mv),document.attachEvent("onmouseup",this.sr)):(document.addEventListener("mousemove",this.mv,1),document.addEventListener("mouseup",this.sr,1))},c.prototype.move=function(a){var b=TINY.cursor.top(a);this.i.height=parseInt(this.i.height)+b-this.i.bcs,this.i.bcs=b},c.prototype.freeze=function(){this.ie?(document.detachEvent("onmousemove",this.mv),document.detachEvent("onmouseup",this.sr)):(document.removeEventListener("mousemove",this.mv,1),document.removeEventListener("mouseup",this.sr,1))},c.prototype.toggle=function(a,b){if(!this.d){var c=this.t.value;b&&(b.innerHTML=this.obj.toggletext||"source"),this.xhtml&&!this.ie&&(c=c.replace(/<strong>(.*)<\/strong>/gi,'<span style="font-weight:bold;">$1</span>'),c=c.replace(/<em>(.*)<\/em>/gi,'<span style="font-weight:italic;">$1</span>')),this.e.body.innerHTML=c,this.t.style.display="none",this.i.style.display="block",this.d=1}else{var c=this.e.body.innerHTML;this.xhtml&&(c=c.replace(/<span class="apple-style-span">(.*)<\/span>/gi,"$1"),c=c.replace(/ class="apple-style-span"/gi,""),c=c.replace(/<span style="">/gi,""),c=c.replace(/<br>/gi,"<br />"),c=c.replace(/<br ?\/?>$/gi,""),c=c.replace(/^<br ?\/?>/gi,""),c=c.replace(/(<img [^>]+[^\/])>/gi,"$1 />"),c=c.replace(/<b\b[^>]*>(.*?)<\/b[^>]*>/gi,"<strong>$1</strong>"),c=c.replace(/<i\b[^>]*>(.*?)<\/i[^>]*>/gi,"<em>$1</em>"),c=c.replace(/<u\b[^>]*>(.*?)<\/u[^>]*>/gi,'<span style="text-decoration:underline">$1</span>'),c=c.replace(/<(b|strong|em|i|u) style="font-weight:normal;?">(.*)<\/(b|strong|em|i|u)>/gi,"$2"),c=c.replace(/<(b|strong|em|i|u) style="(.*)">(.*)<\/(b|strong|em|i|u)>/gi,'<span style="$2"><$4>$3</$4></span>'),c=c.replace(/<span style="font-weight:normal;?">(.*)<\/span>/gi,"$1"),c=c.replace(/<span style="font-weight:bold;?">(.*)<\/span>/gi,"<strong>$1</strong>"),c=c.replace(/<span style="font-style:italic;?">(.*)<\/span>/gi,"<em>$1</em>"),c=c.replace(/<span style="font-weight:bold;?">(.*)<\/span>|<b\b[^>]*>(.*?)<\/b[^>]*>/gi,"<strong>$1</strong>")),b&&(b.innerHTML=this.obj.toggletext||"wysiwyg"),this.t.value=c,a||(this.t.style.height=this.i.height+"px",this.i.style.display="none",this.t.style.display="block",this.d=0)}},c.prototype.post=function(){this.d&&this.toggle(1)},{edit:c}}(),TINY.cursor=function(){return{top:function(a){return T$$$()?window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop:a.clientY+window.scrollY}}}()