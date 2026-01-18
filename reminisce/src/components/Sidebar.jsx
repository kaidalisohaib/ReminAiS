
import React from 'react';

const Sidebar = ({ onClose, onNavigate }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
            <div className="flex flex-col w-[85%] h-full p-8 bg-white animate-[slideRight_0.3s_ease-out]" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-8">
                    <button className="text-2xl" onClick={onClose}>✕</button>
                    <div className="flex items-center gap-2 text-xl font-black tracking-widest text-gray-900">
                        <span className="text-primary-red">●</span> REMIN<strong>AIS</strong>
                    </div>
                </div>

                <div className="p-4 mb-2 font-medium text-center cursor-pointer bg-gray-50 rounded-xl" onClick={() => onNavigate('DASHBOARD')}>Home</div>
                <div className="p-4 mb-2 font-medium text-center cursor-pointer bg-gray-50 rounded-xl" onClick={() => onNavigate('CONNECTIONS')}>My connections</div>
                <div className="p-4 mb-2 font-medium text-center cursor-pointer bg-gray-50 rounded-xl">Conversation history</div>
                <div className="p-4 mb-2 font-medium text-center opacity-50 cursor-pointer bg-gray-50 rounded-xl">Meetings (coming soon)</div>
                <div className="p-4 mb-2 font-medium text-center cursor-pointer bg-gray-50 rounded-xl" onClick={() => onNavigate('ADMIN')}>Settings (Admin)</div>

                <div className="p-4 mt-auto font-bold text-center text-white cursor-pointer bg-primary-red rounded-xl" onClick={() => onNavigate('LOGIN')}>
                    Disconnect
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
