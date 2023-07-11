import React, { useState, useEffect } from "react";
import { instanceAuthor } from "./axios/index";

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];
const a = data.splice(0, 3);
console.log(a);

function RendeData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await instanceAuthor.get("api/tramquantrackk");
      if (data) {
        console.log(data);
        setData(data);
      }
    };
    getData();
  }, []);

  return (
    <table>
      <tr>
        <th>STT</th>
        <th>Mã trạm</th>
        <th>Tên trạm</th>
        <th>Hình thức</th>
        <th>Tỉnh/TP</th>
        <th>Quận/Huyện</th>
        <th>Phường/Xã</th>
        <th>Địa chỉ</th>
      </tr>
      {data.map((value, index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>{value.ma_tram}</td>
          <td>{value.ten_trạm}</td>
          <td>{value.hinh_thuc}</td>
          <td>
            {
              value["XaPhuong_ma_XaPhuong"]["QuanHuyen_ma_QuanHuyen"][
                "TinhTP_ma_TinhTP"
              ]["ten_tinh_tp"]
            }
          </td>
          <td>
            {
              value["XaPhuong_ma_XaPhuong"]["QuanHuyen_ma_QuanHuyen"][
                "ten_quan_huyen"
              ]
            }
          </td>
          <td>{value["XaPhuong_ma_XaPhuong"]["ten_xa_phuong"]}</td>
          <td>{value.dia_chi}</td>
        </tr>
      ))}
    </table>
  );
}

export default RendeData;
