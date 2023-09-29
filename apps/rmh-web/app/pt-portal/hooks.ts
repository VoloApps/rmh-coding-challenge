"use client";

import "@aws-amplify/ui-react/styles.css";
import "../globals.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "./models";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const { data }: { data: User[] } = await axios.get(
        "http://localhost:3000/api/get-appointments"
      );

      const sortedData = data.sort(
        (a, b) =>
          new Date(a.appointmentDate).getTime() -
          new Date(b.appointmentDate).getTime()
      );

      setUsers(sortedData);
    };

    loadAppointments();
  }, []);

  return users;
};
