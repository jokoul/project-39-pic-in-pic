const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    //set a constant that have our media stream data and await user to assign it to the selected screen or window they want to share
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    //we pass the media stream into our video object as its source object
    videoElement.srcObject = mediaStream;
    //when the video has loaded its metadata, it's going to call a fn that is going to play the video
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //catch error
    console.log("error here : ", error);
  }
}

//start picture in picture fonctionality
button.addEventListener("click", async () => {
  //Disable Button
  button.disabled = true;
  //Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disabled = false;
});

//On load, call the function
selectMediaStream();
