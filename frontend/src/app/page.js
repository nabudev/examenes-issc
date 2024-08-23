// pages/login.js
import React from 'react';
import { Login } from '@/components/component/login';  // Ajusta la ruta según tu estructura
import { Toaster } from 'react-hot-toast';

export default function LoginPage() {
    return (
        <div id="__next">
            <Login />
            <Toaster />
        </div>
    );
}