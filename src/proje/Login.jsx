import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { AutoComplete, Layout, Menu } from "antd";


function Login({ handleLogin }) {
  const items = [
    // { label:<Link to='/'> Home</Link>, key: '1' },
    // { label:<Link to='/login'> Login</Link>, key: '1' },
    { label: <Link to="/customers"> Customers</Link>, key: "1" },
    {
      label: <Link to="/customerdetail/:id"> Customer Detail </Link>,
      key: "2",
    },
    {
      label: <Link to="/customer/update/:id"> Customer Update </Link>,
      key: "3",
    },
    { label: <Link to="/addcustomer"> Add Customer</Link>, key: "4" },
  ];

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "dgpays@mail.com" && password === "123") {
      return handleLogin({
        email,
        password,
      });
    }

    alert("Invalid User!");
  };

  return (
    <div>
      <Layout>
        {/* <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Header> */}
        <Content
          className="site-layout"
          style={{ 

          padding: "0 680px",
          marginTop: 164,
         
          
           }}
        >
          
          <div
            className="site-layout-background"
            style={{
            
            
            textAlign: "center",
             
             
             }}
          >
            <form layout='vertical'
            onSubmit={handleSubmit}>
              <input style={{

                display:"flex",
                justifyContent: "center",
                marginTop: "50px",
                fontSize: "15px",
                borderColor : "pink",
                borderStyle: "solid",
               
                
               
              }}
              
                type="email"
                placeholder="enter ur email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input  style={{

                 display:"flex",
                 justifyContent: "center",
                 marginTop: "50px",
                 fontSize: "15px",
                 borderColor : "pink",
                 borderStyle: "solid",

                 }}
                type="password"
                placeholder="enter ur password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               <br/>
              
              <button style={{
                
            justifyContent: "center",
            color:"white",
            background:"#FF4D4F",
            fontSize: "15px",
            borderColor : "pink",
           
            
          }}
          
          type="submit">LOGİN</button>
            </form>
            </div>
        </Content>
      </Layout>
      
    </div>
    
  );
}

export default Login;

