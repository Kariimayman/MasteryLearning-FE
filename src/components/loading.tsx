import React from 'react';

export default function Loading () {
    return (
        <div className="flex justify-center items-center h-screen w-full fixed z-50 bg-gray-200 bg-opacity-50">
            <div className="animate-spin rounded-full h-[auto] w-[auto] border-b-4 border-dashed border-transparent">
                <div className={`h-40 w-40 rounded-full bg-clip-border border-4 border-dashed border-[#1BBBA4]`}>
                </div>
            </div>
        </div>
    );
};

