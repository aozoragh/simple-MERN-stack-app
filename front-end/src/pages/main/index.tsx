import React, { useEffect, useState } from "react";
import Table from "responsive-sortable-react-table";
import "responsive-sortable-react-table/dist/style.css";
import { getAllData } from "../../action";
import type { ParentProps } from "../../type";
import { handleSort } from "../../utils";

const data = {
  headers: {
    id: "ID",
    sender: "Sender",
    receiver: "Receiver",
    totalAmount: "Total Amount",
    paidAmount: "Paid Amount",
  },
};
export const MainPage: React.FC = () => {
  const [tblData, setTblData] = useState<Array<ParentProps>>([]);
  const [sortedData, setSortedData] = useState<Array<ParentProps>>([]);

  useEffect(() => {
    const getData = async () => {
      const tblData = await getAllData();
      setTblData(tblData);
      setSortedData(tblData);
    };
    getData();
  }, []);

  return (
    <div>
      <Table
        headers={data.headers}
        content={tblData}
        breakpoint={500}
        pageSize={2}
        onSort={(e: Array<ParentProps>) => {
          handleSort(e, sortedData);
        }}
        sortKey="upper-electives"
        sortDir={-1}
        className="my-table"
        paginationClass="my-pagination"
        mobilePageSize={2}
      />
    </div>
  );
};
