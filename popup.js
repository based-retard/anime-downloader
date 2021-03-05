document.addEventListener('DOMContentLoaded', function() {
  var downloadAllButton = document.getElementById('downloadAll');
  downloadAllButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
	var min = 0.3;
    var max = 2.0;
    var inc = 0.1;
		
	var seed = tab.url.slice(tab.url.length-5, tab.url.length);
	let count = 1;
	 for( i = min; i < max + inc; i += inc ){
                let _i = ( Math.round( i * 10 ) / 10 ).toFixed( 1 );
                let imageUrl = 'https://thisanimedoesnotexist.ai/results/psi-' + _i + '/seed' + seed + '.png';
                
				chrome.downloads.download({
					url: imageUrl, 
					filename: seed + '/' + count + '.png'
					
				});
				count++;
        }
    });
  }, false);
}, false);