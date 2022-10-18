import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CustomerDetail() {
  const [detail, setdetail] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();

  const fetchData = async () => {
    const { data } = await axios.get(`/customers/${id}`);
    setdetail(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1> id: {detail?.id}</h1>
      <h1> Company Name : {detail?.companyName}</h1>
      <h1> Contact Name: {detail?.contactName}</h1>
      <h1> Contact Title: {detail?.contactTitle}</h1>

      <button style={{

 color:"white",
 background:"#FF4D4F",
 

        }} type="submit">Update Post</button>

        <br/><br/>

      <button style={{

 color:"white",
 background:"#FF4D4F",


        }} onClick={() => navigate(-1)}>Back To Customers Page</button>
    </>
  );
}

export default CustomerDetail;
