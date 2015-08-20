Lab.creationHooks.push(function(lab) {
  var bakedImgURL;

  function onDragEvent(e) {
    if (e.type == 'drop') {
      if (e.dataTransfer.files.length) {
        var file = e.dataTransfer.files[0];
        if (file.type == 'image/png') {
          var reader = new FileReader();
          reader.onloadend = function() {
            var baker = new PNGBaker(reader.result);
            var bakedSource = baker.textChunks['tiny-turtle-source'];
            if (bakedSource) {
              lab.code.value = decodeURIComponent(bakedSource);
              lab.render();
            }
          };
          reader.readAsArrayBuffer(file);
          e.stopPropagation();
          e.preventDefault();
        }
      }
      return;
    } else {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(function(type) {
    lab.addEventListener(type, onDragEvent);
  });

  if (navigator.msSaveOrOpenBlob)
    // IE10's "Save Picture As..." strips out the tEXt chunks from our
    // PNG, so we'll override things to provide our own functionality.
    lab.canvasImage.addEventListener('contextmenu', function(e) {
      if (!this.blob) return;
      navigator.msSaveOrOpenBlob(this.blob, 'canvas.png');
      e.preventDefault();
    });

  lab.addEventListener('render', function bakeSourceCodeIntoImage(e) {
    var canvasImg = lab.canvasImage;
    var source = lab.code.value;
    var canvas = e.detail.canvas;
    var baker = new PNGBaker(canvas.toDataURL());
    var URL = window.URL || window.webkitURL;
    baker.textChunks['tiny-turtle-source'] = encodeURIComponent(source);
    if (bakedImgURL) URL.revokeObjectURL(bakedImgURL);
    canvasImg.blob = baker.toBlob();
    canvasImg.src = bakedImgURL = URL.createObjectURL(canvasImg.blob);
    e.preventDefault();
  }, false);
});
