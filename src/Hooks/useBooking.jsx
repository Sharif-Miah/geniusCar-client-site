import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useBooking = () => {
    const {user} = useContext(AuthContext)
  const { data: booking = [], refetch } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await fetch("https://genius-car-farhan-sharif.vercel.app/booking");
      const data = await res.json();
      return data;
    },
  });

  return [booking, refetch];
};

export default useBooking;
