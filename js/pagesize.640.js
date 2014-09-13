
            //<![data[
			var targetWidth = 640;
            var rate = window.screen.width / targetWidth;
            var meta = document.getElementsByTagName('meta');
            for(var i=0;i<meta.length;i++){
                if( meta[i].getAttribute('name') == "viewport" ){
                    meta[i].setAttribute('content', "width="+targetWidth.toString()+", target-densitydpi=device-dpi, initial-scale="+rate.toString()+", maximum-scale="+rate.toString());
                }
            }
