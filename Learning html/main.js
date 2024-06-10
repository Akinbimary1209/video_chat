const constraints = window.constraints = {
    video: true,
    audio: true,
};

function handleSuccess(stream) {
    let displayVideo = document.getElementById("displayVideo");
    displayVideo.srcObject = stream;
}

function handleError(error) {
    console.error("Error: ", error);
}

async function init(e) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
        e.target.disabled = true;
    } catch (e) {
        handleError(e);
    }
}

document.querySelector("#startVideo").addEventListener("click", (e) => init(e));