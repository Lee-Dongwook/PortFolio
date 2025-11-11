/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Modal } from "@/shared/ui/modal";
import { useModalStore } from "@/shared/hooks/use-modal-store";

export const CustomModal = () => {
  const modal = useModalStore();
  const IconComponent = modal.icon;

  return (
    <Modal
      title={modal.title || ""}
      description={modal.description || ""}
      isOpen={modal.isOpen}
      onClose={modal.onClose}
    >
      <div className="flex justify-center items-center">
        {IconComponent && <IconComponent className="w-20 h-20" />}
      </div>
    </Modal>
  );
};
