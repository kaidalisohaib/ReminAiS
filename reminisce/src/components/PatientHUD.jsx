import React from 'react';
import Webcam from 'react-webcam';

const PatientHUD = ({
    webcamRef,
    currentFace,
    lastEmotion,
    transcript,
    listening,
    setMode
}) => {
    return (
        <div className="relative w-full h-full bg-black">
            <Webcam
                ref={webcamRef}
                className="object-cover w-full h-full"
                videoConstraints={{ facingMode: "user" }}
            />

            <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
                {currentFace ? (
                    <div className="max-w-md p-6 border-l-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border-primary-red">
                        <h2 className="m-0 text-3xl font-bold text-white">{currentFace}</h2>
                        {lastEmotion && <span className="inline-block mt-2 text-lg font-medium text-blue-400">Mood: {lastEmotion}</span>}
                        <div className="mt-2 text-sm text-gray-400">
                            Live Transcript: {transcript.substring(transcript.length - 50)}...
                        </div>
                    </div>
                ) : (
                    <div className="text-2xl text-white opacity-70 animate-pulse">Scanning...</div>
                )}

                {listening && (
                    <div className="self-end px-4 py-2 font-bold text-white shadow-lg bg-red-500 rounded-full animate-pulse shadow-red-500/50">
                        ● Listening
                    </div>
                )}
            </div>

            <button className="absolute top-0 right-0 z-50 w-12 h-12 bg-transparent border-none cursor-pointer" onClick={() => setMode('ADMIN')}></button>
        </div>
    );
};

export default PatientHUD;
