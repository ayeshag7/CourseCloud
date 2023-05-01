import { useEffect, useState } from "react";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { DashboardList } from "./components/DashboardList";
import { getUserOrders } from "../../services";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";

export const DashboardPage = () => {

  useTitle("Dashboard - CourseCloud")

  const [orders, setOrders] = useState("");
  
  useEffect(() => {
    const fetchOrders = async function() {
      try {
        const data = await getUserOrders();
        setOrders(data)
      } catch(error) {
        toast.error(error.message, {closeButton: true, position: "bottom-center"})
      }
    }
    fetchOrders();
  }, [])

  return (
    <main>
        {orders.length === 0  && <DashboardEmpty />}
        {orders.length !== 0 && <DashboardList orders={orders}/>}
    </main>
  )
}
