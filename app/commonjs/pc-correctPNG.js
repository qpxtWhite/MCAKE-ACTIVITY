window.correctPNG = function(container){
    var arVersion = navigator.appVersion.split("MSIE");
    var version = parseFloat(arVersion[1]);
    if(version && (version >= 5.5 && version < 9)){
        var docimgs = container.getElementsByTagName('img');
        for(var i=0; i<docimgs.length; i++){
            var img = docimgs[i];
            img.className += ' iepngfix';
            // img.style.behavior = 'expression((this.pngSet?this.pngSet=true:(this.nodeName == "IMG" && this.src.toLowerCase().indexOf(\'.png\')>-1?(this.runtimeStyle.backgroundImage = "none",this.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'" + this.src + "\', sizingMethod=\'image\')",this.src = "http://edm.mcake.com/weifengwang/common/blank.gif"):(this.origBg = this.origBg? this.origBg :this.currentStyle.backgroundImage.toString().replace(\'url("\',\'\').replace(\'")\',\'\'),this.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'" + this.origBg + "\', sizingMethod=\'crop\')",this.runtimeStyle.backgroundImage = "none")),this.pngSet=true))';
        }
    }
}



// window.correctPNG = function(container){
//     var arVersion = navigator.appVersion.split("MSIE");
//     var version = parseFloat(arVersion[1]);
//     if (version && (version >= 5.5 && version < 9) && (document.body.filters)) {
//         var lee_i = 0;
//         var docimgs=container.getElementsByTagName('img');
//         for (var j = 0; j < docimgs.length; j++) {
//             var img = docimgs[j];
//             var imgName = img.src.toUpperCase();
//             if (imgName.substring(imgName.length - 3, imgName.length) == "PNG" && !img.getAttribute("usemap")) {
//                 lee_i++;
//                 var SpanID = img.id || 'ra_png_' + lee_i.toString();
//                 var imgData = new Image();
//                 imgData.proData = SpanID;
//                 imgData.onload = function () {
//                     $("#" + this.proData).css("width", this.width + "px").css("height", this.height + "px");
//                 }
//                 imgData.src = img.src;
//                 var imgID = "id='" + SpanID + "' ";
//                 var imgClass = (img.className) ? "class='" + img.className + "' " : ""
//                 var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
//                 var imgStyle = "display:inline-block;" + img.style.cssText
//                 if (img.align == "left") imgStyle = "float:left;" + imgStyle
//                 if (img.align == "right") imgStyle = "float:right;" + imgStyle
//                 if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
//                 var strNewHTML = "<span " + imgID + imgClass + imgTitle
//                     + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
//                     + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
//                     + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
//                 img.outerHTML = strNewHTML;
//                 j = j - 1;
//             }
//         }
//     }
// };