import { Button, Table, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";

const { confirm } = Modal;

function Customers({user}) {
  const [customers, setcustomers] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios("/customers").then((res) => {
      setcustomers(res.data);
      setloading(false);
    });
  }, []);

  const getCustomers = (id) => {
    axios.get("/customers").then((res) => {
      setcustomers(res.data);
      setloading(false);
    });
  };

  const deleteCustomer = (id) => {
    confirm({
      title: "Are you sure, you want to delete this customer?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",

      onOk() {
        setloading(true);
        axios
          .delete(`https://northwind.vercel.app/api/customers/${id}`)
          .then((res) => {
            getCustomers();
          });
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const updateCustomer = (id) => {
    navigate(`/customer/update/` + id);
  };

  const detailCustomer = (id) => {
    navigate(`/customer/detail/${id}`);
  };

  let columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
    },
    {
      title: " Delete",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => deleteCustomer(id)} type="primary" danger>
          Delete
        </Button>
      ),
    },
    {
      title: " Update",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => updateCustomer(id)} type="primary" danger>
          Güncelle
        </Button>
      ),
    },
    {
      title: " Detail",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => detailCustomer(id)} type="primary" danger>
          Detaya Git
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        pagination={{
          pageSize: 10,
        }}
        bordered={true}
        columns={columns}
        dataSource={customers}
        loading={loading}
        rowKey="id"
      ></Table>
    </>
  );
}

export default Customers;


