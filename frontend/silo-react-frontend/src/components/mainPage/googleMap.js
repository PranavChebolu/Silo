import React from 'react';

function GoogleMap() {
    const API_KEY = 'AIzaSyDz_4-eeflUjjNHPaIE7zphYcy_VLUqw0Y'; // Replace with your API key
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                title="Google Map"
                // width="600"
                // height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=0,0&zoom=2`}
                style={{ width: '100%', height: '100%' }}
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default GoogleMap;