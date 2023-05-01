import { DashboardCard } from "./DashboardCard"

export const DashboardList = ({orders}) => {
  return (
    <>
        <section>
            <p className="text-2xl text-center font-semibold dark:text-slate-100 mt-8">
            My Cart
            </p>
        </section>
      
        <section className="my-12">
            { orders.map((order) => (
                <DashboardCard key={order.id} order={order} />
            )) }
        </section>
    </>
  )
}
