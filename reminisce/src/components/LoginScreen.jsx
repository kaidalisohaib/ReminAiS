import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
    return (
        <div className="flex flex-col justify-center h-full p-8 text-center bg-white">
            <div className="flex items-center justify-center gap-2 text-xl font-black tracking-widest text-gray-900">
                <span className="text-primary-red">●</span> REMIN<strong>AIS</strong>
            </div>

            <div className="my-8">
                <h1 className="text-3xl font-extrabold leading-tight">
                    Break isolation &<br />
                    Create connections
                </h1>
                {/* Placeholder Image */}
                <img
                    src="https://img.freepik.com/free-vector/senior-man-using-laptop-concept-illustration_114360-12845.jpg"
                    alt="Elderly connection"
                    className="w-full object-contain my-8 max-h-[250px]"
                />
            </div>

            <div className="w-full space-y-4">
                <button className="w-full py-4 text-lg font-bold text-white transition-transform bg-primary-red rounded-xl active:scale-95" onClick={onLogin}>
                    Log In
                </button>
                <button className="w-full py-4 text-lg font-bold text-black border border-black rounded-xl">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default LoginScreen;
