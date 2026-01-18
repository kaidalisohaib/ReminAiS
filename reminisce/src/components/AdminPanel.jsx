import React, { useState } from 'react';
import Webcam from 'react-webcam';

const AdminPanel = ({ webcamRef, knownFaces, addFace, setMode }) => {
    const [nameInput, setNameInput] = useState('');
    const [bioInput, setBioInput] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const handleAddFace = async () => {
        if (isAdding) return;
        setIsAdding(true);

        try {
            const success = await addFace(webcamRef, nameInput, bioInput);
            if (success) {
                alert(`Saved ${nameInput}!`);
                setNameInput('');
                setBioInput('');
            } else {
                alert("No face detected or missing name. Try again.");
            }
        } catch (e) {
            console.error("Add face error", e);
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <div className="flex flex-col flex-1 h-full p-8 overflow-y-auto">
            <h1 className="mb-6 text-3xl font-light text-center text-gray-800">Reminisce Admin</h1>

            <div className="relative mx-auto mb-6 border-2 border-blue-500 rounded-xl shadow-lg shadow-blue-500/20 w-fit overflow-hidden">
                <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="rounded-lg" />
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
                <input
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    placeholder="Name"
                    className="p-3 text-white bg-slate-800 border border-slate-700 rounded-lg outline-none focus:border-blue-500 min-w-[200px]"
                />
                <input
                    value={bioInput}
                    onChange={e => setBioInput(e.target.value)}
                    placeholder="Initial Context"
                    className="p-3 text-white bg-slate-800 border border-slate-700 rounded-lg outline-none focus:border-blue-500 min-w-[200px]"
                />
                <button
                    onClick={handleAddFace}
                    disabled={isAdding}
                    className="px-6 py-3 font-semibold text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600 active:scale-95 disabled:opacity-50"
                >
                    {isAdding ? "Saving..." : "Save Face"}
                </button>
                <button
                    className="px-6 py-3 font-semibold text-blue-500 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-50"
                    onClick={() => setMode('PATIENT')}
                >
                    Enter Patient Mode
                </button>
            </div>

            <div className="grid gap-4">
                {knownFaces.map((face, i) => (
                    <div key={i} className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl">
                        <strong className="block mb-2 text-xl text-blue-500">{face.name}</strong>
                        <div className="flex flex-col gap-2">
                            {face.history && face.history.map((h, k) => (
                                <div key={k} className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className={`px-2 py-0.5 text-xs font-bold text-black uppercase rounded ${h.emotion === 'Happy' ? 'bg-green-400' :
                                            h.emotion === 'Sad' ? 'bg-blue-400' :
                                                h.emotion === 'Angry' ? 'bg-red-400' :
                                                    h.emotion === 'Excited' ? 'bg-yellow-400' : 'bg-slate-300'
                                        }`}>
                                        {h.emotion || 'Neutral'}
                                    </span>
                                    {h.summary}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPanel;
