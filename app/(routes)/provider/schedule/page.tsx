"use client";

import React, { useState } from "react";
import { providers } from "../../../utils/mockData";
import { Schedule } from "@/app/types";

const ProviderSchedulePage = () => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [submissionResult, setSubmissionResult] = useState("");

  const resetFields = () => {
    setDate("");
    setStartTime("");
    setEndTime("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newSchedule: Schedule = { date, start: startTime, end: endTime };
    providers[0].schedule.push(newSchedule);

    setSubmissionResult("Schedule added successfully!");

    resetFields();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Add Available Schedule</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-white"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="start-time"
            className="block text-sm font-medium text-white"
          >
            Start Time
          </label>
          <input
            type="time"
            id="start-time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="end-time"
            className="block text-sm font-medium text-white"
          >
            End Time
          </label>
          <input
            type="time"
            id="end-time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Add Schedule
        </button>
      </form>
      {submissionResult && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
          {submissionResult}
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold mt-8">Current Schedule</h3>
        <ul>
          {providers[0].schedule.map((slot, index) => (
            <li
              key={index}
            >{`Date: ${slot.date}, Start: ${slot.start}, End: ${slot.end}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProviderSchedulePage;
