import { useState } from "react";

const List = ({ team, name, url }) => {
  return (
    <div className="mr-4 text-lg">
      <a
        href={url}
        target="_blank"
        className="border p-2 rounded-xl hover:bg-gray-300"
      >
        {name}
      </a>
    </div>
  );
};

export default List;
