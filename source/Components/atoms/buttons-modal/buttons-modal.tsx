'use client';
import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import ButtonsNavBar from '~/Components/atoms/buttons-nav-bar';

export const ButtonsModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
      >
        Entrar
      </button>

      <Dialog open={isOpen} onClose={closeModal} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <DialogPanel
              className="w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl transition-all"
            >
              <div className="p-6">
                <ButtonsNavBar />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ButtonsModal;
