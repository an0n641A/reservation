"use client";

import React, { useState } from "react";
import { providers, reservations } from "../../../utils/mockData";
import { Provider, Reservation } from "@/app/types";

const ClientSlotsPage = () => {
  const [selectedSlot, setSelectedSlot] = useState<{
    providerId: number;
    slotIndex: number;
  } | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSlotSelect = (providerId: number, slotIndex: number) => {
    const isAlreadyReserved = reservations.some(
      (reservation: Reservation) =>
        reservation.providerId === providerId &&
        reservation.slotIndex === slotIndex
    );
    if (!isAlreadyReserved) {
      setSelectedSlot({ providerId, slotIndex });
      setConfirmationMessage("");
    }
  };

  const confirmReservation = () => {
    if (selectedSlot) {
      const { providerId, slotIndex } = selectedSlot;
      const provider = providers.find((p: Provider) => p.id === providerId);
      const slot = provider?.schedule[slotIndex];

      if (slot) {
        const isNotReserved = !reservations.find(
          (reservation) =>
            reservation.providerId === providerId &&
            reservation.slotIndex === slotIndex
        );
        if (isNotReserved) {
          reservations.push({
            providerId,
            slotIndex,
            date: slot.date,
            start: slot.start,
            end: slot.end,
          });

          setConfirmationMessage(
            `Reservation confirmed for ${provider?.name} on ${slot.date} from ${slot.start} to ${slot.end}.`
          );
          setSelectedSlot(null);
        }
      }
    }
  };

  const getAvailableSlots = (): Provider[] => {
    return providers.map((provider: Provider) => ({
      ...provider,
      schedule: provider.schedule.filter(
        (_, slotIndex) =>
          !reservations.some(
            (reservation: Reservation) =>
              reservation.providerId === provider.id &&
              reservation.slotIndex === slotIndex
          )
      ),
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Available Slots</h2>
      <ul className="space-y-2">
        {getAvailableSlots().map((provider) =>
          provider.schedule.map((slot, slotIndex) => (
            <li
              key={`${provider.id}-${slotIndex}`}
              className={`border rounded-lg p-4 cursor-pointer ${
                selectedSlot?.providerId === provider.id &&
                selectedSlot?.slotIndex === slotIndex
                  ? "bg-green-500 border-white"
                  : "border-gray-200"
              }`}
              onClick={() => handleSlotSelect(provider.id, slotIndex)}
            >
              <p className="font-semibold">{provider.name}</p>
              <p>Date: {slot.date}</p>
              <p>
                Time: {slot.start} - {slot.end}
              </p>
            </li>
          ))
        )}
      </ul>
      <button
        className={`mt-4 px-4 py-2 rounded text-white ${
          selectedSlot ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-500"
        }`}
        disabled={!selectedSlot}
        onClick={confirmReservation}
      >
        Confirm Reservation
      </button>
      {confirmationMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
          {confirmationMessage}
        </div>
      )}
      <h3 className="text-xl font-bold mt-8">Client Reserved Times</h3>
      <ul className="space-y-2">
        {reservations.length > 0 ? (
          reservations.map((reservation, index) => (
            <li key={index} className="border rounded-lg p-4 border-gray-200">
              <p className="font-semibold">Reserved Slot:</p>
              <p>Date: {reservation.date}</p>
              <p>
                Time: {reservation.start} - {reservation.end}
              </p>
            </li>
          ))
        ) : (
          <p>No Reserved Times Selected</p>
        )}
      </ul>
    </div>
  );
};

export default ClientSlotsPage;
