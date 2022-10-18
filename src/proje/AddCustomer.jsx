import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import axios from 'axios'



function AddCustomer() {

    const submitForm =(values) => {
     
        axios.post('https://northwind.vercel.app/api/customers/', values)
        .then(res => {
            console.log('RES', res.data);
        })

    };


    
    return (<>
        <Form
        layout='vertical'
            onFinish={submitForm}
        >
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label='Company Name'
                        name='companyName'
                        rules={[{ required: true, message: 'Please input your company Name!' },{max:30}]} // (Boş geçilemez)
                       
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label='Contact Name'
                        name='contactName'
                    >
                        <Input />
                    </Form.Item>
                </Col>

            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label='Contact Title'
                        name='contactTitle'
                    >
                        <Input />
                    </Form.Item>
                </Col>
           
                <Col span={12}>
                    <Form.Item
                        label='Address'
                        name='address'
                    >
                        <Input />
                    </Form.Item>
                </Col>
           
            </Row>

            <Button type="primary" htmlType="submit">Add</Button>

           
        </Form>
    </>
    )
}

export default AddCustomer

