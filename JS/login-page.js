let bgLoading = document.getElementById("bgLoading")
    let bgLoadingCont = document.querySelector("#bgLoading .loading-container")
    window.onload = () => {
        setTimeout(function() {
            bgLoadingCont.style.opacity = "0";
            bgLoading.style.pointerEvents = "none";
            bgLoading.style.backdropFilter = "blur(0px)";
            setTimeout(function() {
                bgLoadingCont.style.display = "none";
                bgLoading.style.display = "none";
            }, 1000)
        }, 1000)
    }

    const sr = ScrollReveal (
        {
            distance: '40px',
            duration: 3050,
            delay: 200,
            reset: true
        }
    );
    
    sr.reveal('.container',{origin: 'top'});