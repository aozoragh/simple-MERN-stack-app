import React, { useEffect, useState } from "react";
import { getChildrenData } from "../action";
import { useLocation } from "react-router-dom";
import { ChildrenProps } from "../type";

const Children: React.FC = () => {
  const location = useLocation();
  const [tblData, setTblData] = useState<Array<ChildrenProps>>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getChildrenData(location.state.id);
      setTblData(data);
      console.log(33333, data);
    };
    getData();
  }, [location]);

  return (
    <div>
      <h1>children {location.state.id} 's Information</h1>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>parentId</td>
            <td>paidAmount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tblData[0]?.id}</td>
            <td>{tblData[0]?.parentId}</td>
            <td>{tblData[0]?.paidAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Children;
