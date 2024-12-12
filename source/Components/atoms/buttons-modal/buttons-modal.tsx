'use client';
import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import ButtonsNavBar from '~/Components/atoms/buttons-nav-bar';

type ModalType = 'login' | 'register' | null;

export const ButtonsModal: React.FC = () => {
    const [modalType, setModalType] = useState<ModalType>(null);

    const openModal = (type: ModalType) => setModalType(type);
    const closeModal = () => setModalType(null);

    const getModalContent = () => {
        if (modalType === 'login' || modalType === 'register') {
            return <ButtonsNavBar type={modalType} />;
        }
        return null;
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-2">
                <button
                    onClick={() => openModal('login')}
                    className="px-4 py-2 text-black rounded-md hover:bg-secondary-500 w-full sm:w-auto"
                >
                    Entrar
                </button>
                <button
                    onClick={() => openModal('register')}
                    className="px-4 py-2 text-black rounded-md hover:bg-secondary-500 w-full sm:w-auto"
                >
                    Cadastre-se
                </button>
            </div>

            <Dialog open={!!modalType} onClose={closeModal} className="fixed inset-0 z-50">
                <DialogBackdrop className="fixed inset-0 bg-gray-500/75 z-40" />
                <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <DialogPanel
                            className="w-full sm:max-w-md max-w-[90%] transform overflow-hidden rounded-lg bg-white shadow-xl transition-all"
                        >
                            <div className="p-6">{getModalContent()}</div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ButtonsModal;
