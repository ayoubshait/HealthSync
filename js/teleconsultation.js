document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    const startCallButtons = document.querySelectorAll('.start-call-btn');
    const videoCallSection = document.getElementById('videoCallSection');
    const doctorNameElement = document.getElementById('doctorName');
    const localVideo = document.getElementById('localVideo');
    const remoteVideo = document.getElementById('remoteVideo');
    const endCallBtn = document.getElementById('endCallBtn');

    let localStream;
    let peerConnection;

    // STUN/TURN server configuration
    const servers = {
        iceServers: [
            { urls: "stun:stun.l.google.com:19302" },
            {
                urls: 'turn:your-turn-server.com:3478',
                username: 'your-username',
                credential: 'your-password'
            }
        ]
    };

    console.log("Found start call buttons: ", startCallButtons.length);

    startCallButtons.forEach(button => {
        console.log("Attaching event listener to button:", button);
        button.addEventListener('click', function() {
            const doctorName = this.getAttribute('data-doctor');
            console.log(`Button clicked for ${doctorName}`);
            alert(`Starting video call with ${doctorName}`);
            doctorNameElement.textContent = doctorName;

            // Show the video call section
            videoCallSection.classList.remove('d-none');
            console.log("Video call section should now be visible");

            // Initialize the video call
            startVideoCall();
        });
    });

    // Start the video call
    function startVideoCall() {
        console.log("Starting video call...");
        // Access the user's webcam and microphone
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                console.log("Access to camera and microphone granted");
                localStream = stream;
                localVideo.srcObject = stream;

                // Initialize peer connection
                peerConnection = new RTCPeerConnection(servers);

                // Add the local stream to the peer connection
                localStream.getTracks().forEach(track => {
                    peerConnection.addTrack(track, localStream);
                });

                // Handle incoming tracks from the remote peer
                peerConnection.ontrack = event => {
                    console.log("Receiving remote stream");
                    if (!remoteVideo.srcObject) {
                        remoteVideo.srcObject = event.streams[0];
                    }
                };

                // Handle ICE candidates
                peerConnection.onicecandidate = event => {
                    if (event.candidate) {
                        console.log("New ICE candidate: ", event.candidate);
                        // Here you would send the candidate to the remote peer via your signaling server
                    }
                };

                // Create an offer to connect with the remote peer
                peerConnection.createOffer()
                    .then(offer => {
                        return peerConnection.setLocalDescription(offer);
                    })
                    .then(() => {
                        console.log("Offer created and set as local description");
                        // Send the offer to the remote peer via your signaling server
                    })
                    .catch(error => {
                        console.error("Error creating or setting offer: ", error);
                    });
            })
            .catch(error => {
                console.error("Error accessing media devices: ", error);
                alert("Unable to access camera or microphone. Please check your browser settings.");
            });
    }

    // End the video call
    endCallBtn.addEventListener('click', () => {
        console.log("End call button clicked");
        endVideoCall();
    });

    function endVideoCall() {
        console.log("Ending video call");
        if (peerConnection) {
            peerConnection.close();
        }
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
        }
        remoteVideo.srcObject = null;
        localVideo.srcObject = null;
        videoCallSection.classList.add('d-none');
        alert("Appel terminé");
    }

    // Mock signaling logic (this would be replaced by actual signaling in production)
    function sendOfferToRemotePeer(offer) {
        // Mock sending the offer to the remote peer
        console.log("Sending offer to remote peer: ", offer);
    }

    function receiveAnswerFromRemotePeer(answer) {
        // Mock receiving the answer from the remote peer
        console.log("Received answer from remote peer: ", answer);
        peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    }

    function receiveIceCandidateFromRemotePeer(candidate) {
        // Mock receiving ICE candidate from the remote peer
        console.log("Received ICE candidate from remote peer: ", candidate);
        peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    }
});
