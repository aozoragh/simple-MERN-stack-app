import React, { useEffect, useState } from "react";
import Table from "responsive-sortable-react-table";
import "responsive-sortable-react-table/dist/style.css";
import { getAllData } from "../../action";
import type { ParentProps } from "../../type";
import { handleSort } from "../../utils";
import { useNavigate } from "react-router-dom";

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
  const [pageSizeNum, setPageSize] = useState<Number>(2);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const tblData = await getAllData();
      setTblData(tblData);
      setSortedData(tblData);
    };
    getData();
  }, []);

  useEffect(() => {
    if (tblData.length) addEventToTd();
  }, [tblData]);

  const addEventToTd = () => {
    const tableBodyEle = document
      .getElementsByClassName("my-table")[0]
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr");
    console.log(4444, tableBodyEle[1]);

    for (let i = 0; i < pageSizeNum; i++) {
      tableBodyEle[i]
        .getElementsByTagName("td")[4]
        .addEventListener("click", (e) => {
          console.log(123123, e);
          navigate("/children", { state: { id: i } });
        });
    }
  };

  return (
    <div>
      <Table
        headers={data.headers}
        content={tblData}
        breakpoint={500}
        pageSize={pageSizeNum}
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
