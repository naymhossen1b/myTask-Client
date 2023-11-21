import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Components/SectionTitle";
import useAuth from "../../../../Hooks/useAuth";
import useAxios from "../../../../Hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosLock = useAxios();

  const { data: payments } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosLock.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  // console.log(payments);

  return (
    <>
      <div>
        <SectionTitle subHeading={"---At a Glance!---"} heading={"PAYMENT HISTORY"} />
      </div>
      <div className="bg-white border border-orange-400 rounded-md">
        <div className="flex uppercase items-center justify-between mb-5 text-xl font-bold border p-2 rounded-t border-orange-400">
          <h1>Total Payments: {payments?.length}</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table py-8">
            {/* head */}
            <thead className="bg-orange-400 uppercase text-white">
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>transaction Id</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.transactionId}</td>
                  <td>${item.price}</td>
                  <th>{item.date}</th>
                  <th>{item.status}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
