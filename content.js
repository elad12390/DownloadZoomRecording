(() => {
    const enableRightClick = () => {
        window.addEventListener('contextmenu', (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
        }, true);
    }

    const addDownloadButton = () => {
        const player = $('div.player-view-wrapper > div');
        const video = $('video');
        const button = $(`<a><button class='save-video'><b>Right-click Save As</b> to download the video</button></a>`);
        button.on('click', (e) => {
            e.preventDefault();
            alert('Right-click Save As');
        });
        button.attr('href', video.attr('src'));
        console.log(video.attr('src'));
        player.append(button);
    }

    const main = () => {
        enableRightClick();
        addDownloadButton();
    }

    setTimeout(main, 1000);
})();