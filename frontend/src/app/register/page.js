import React from 'react';
import { RegistroUsuarios } from '@/components/component/registrousuarios'; 
import { Toaster } from "react-hot-toast";

export default function RegisterPage() {
    return (
        <div id="__next">
            <RegistroUsuarios />
            <Toaster/>
        </div>
    );
}