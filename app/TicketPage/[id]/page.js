import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function TicketPage({ params }) {
  const { id } = await params;
  const EDITMODE = id === "new" ? false : true;
  let ticketData;
  if (EDITMODE) {
    ticketData = await getTicketById(id);
    ticketData = ticketData.foundTicket;
  } else {
    ticketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={ticketData} />;
}
