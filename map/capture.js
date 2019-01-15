function sample() {
        
    var background = document.getElementById('map_rap').style.background;

    if(background == "") {
        document.getElementById('map_rap').style.background = "#fff"; 
    }
        
    html2canvas(document.getElementById('map_rap'), {
        useCORS: false, // 다른사이트의리소스가있을때활성화(그러나...Access-Control-Allow-Origin 필요)
        onrendered: function(canvas) {
            canvas.toBlob(function(blob) {
                saveAs(blob, 'download.png');
            });
            
            // $("#test").html('<img src=' + canvas.toDataURL("image/png") + '>');
        }
    });
}



