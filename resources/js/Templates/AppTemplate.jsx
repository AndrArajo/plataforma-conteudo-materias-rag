import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const AppTemplate = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const menuItems = [
        { name: 'Matérias', href: '/materias' },
        { name: 'Conteúdo de Matérias', href: '/conteudo-materias' },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-white shadow-lg transition-all duration-300`}>
                <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                </div>
                <nav className="mt-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                           // href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AppTemplate;
