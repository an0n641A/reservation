import { Reservation } from "../types";

export const providers = [
  {
    id: 1,
    name: "Dr. Jones",
    schedule: [{ date: "2024-08-13", start: "08:00", end: "15:00" }],
  },
  {
    id: 2,
    name: "Dr. Jones",
    schedule: [{ date: "2024-08-14", start: "010:00", end: "13:00" }],
  },
];

export const reservations: Array<Reservation> = [];
