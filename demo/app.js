(function(videojs) {

    var player = videojs('examplePlayer'),
        log = document.querySelector('.log'),

    createLogItem = function(text) {
        var li = document.createElement('li');
        li.innerHTML = text;
        log.appendChild(li);
    };

    document.querySelector('#set_pcode').addEventListener('click', function(e) {
        var pcode = document.querySelector('#pcode').value,
            playerBrandingId = document.querySelector('#playerBrandingId').value;

        player.ooyala({
            pcode: pcode,
            playerBrandingId: playerBrandingId
        });

        createLogItem('Ooyala plugin enabled');
    });

    document.querySelector('#set_embedCode').addEventListener('click', function(e) {
        var embedCode = document.querySelector('#embedCode').value,
            videoUrl;

        createLogItem('Fetching source and metadata for embedCode: ' + embedCode);

        player.ooyala.setSource(embedCode, function(err, res) {
            console.log('player.ooyala.setSource results', res);
            videoUrl = res.videoUrls[embedCode].src;
            createLogItem('Player set to source: ' + videoUrl);
            player.play();
        });

        player.ooyala.getMetadata(embedCode, function(err, res) {
            console.log('player.ooyala.setSource metadata', res);
            createLogItem('metadata retrieved, check console.');
        });


    });

})(window.videojs);