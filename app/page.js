import Image from "next/image";
import Nav from "./(components)/Nav";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http:localhost:3000/api/tickets", {
      cache: "no-store",
    });

    return res.json();
  } catch (err) {
    console.log("Failed to get tickets: ", err);
  }
};

export default async function Dashboard() {
  const { tickets } = await getTickets();

  const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div className="mb-4" key={categoryIndex}>
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard id={_index} key={_index} ticket={filteredTicket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
