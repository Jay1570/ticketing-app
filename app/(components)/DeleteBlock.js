"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function DeleteBlock({ id }) {
  const router = useRouter();

  const deleteClick = async () => {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <FontAwesomeIcon
      onClick={deleteClick}
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
    />
  );
}
