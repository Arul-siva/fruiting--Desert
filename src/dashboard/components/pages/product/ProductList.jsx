import React, { useState, useRef, useEffect } from "react";
import { Divider, Radio, Table } from "antd";
import { KeyOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Col, Drawer, Form, Input, Row, Space, message } from "antd";

const columns = (handleDelete, handleUpdate) => [
  {
    title: "Image",
    dataIndex: "image",
    render: (image) => (
      <img
        src={`http://localhost:5000/getImage/${image}`}
        alt="Product"
        className="img-fluid"
        width={100}
      />
    ),
  },
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Fruit Type",
    dataIndex: "fruittype",
    key: "fruittype",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rate",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <>
        <Button
          onClick={() => handleDelete(record)}
          className="btn btn-danger p-0 px-2"
        >
          {" "}
          Delete
        </Button>
        <Button
          onClick={() => handleUpdate(record)}
          className="mx-2 btn btn-primary p-0 px-2"
        >
          {" "}
          update
        </Button>
      </>
    ),
  },
];



const ProductList = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();
    const signal = controller.signal;

  useEffect(() => {

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/products");
      console.log("All products", response.data);

      const productsWithKey = response.data.map((product) => ({
        ...product,
        key: product.id || product.name, 
      }));

      setAllProducts(productsWithKey);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Failed to fetch products", error);
        message.error("Failed to fetch products.");
      }
    } finally {
      setLoading(false);
    }
  };


  // const handleUpdate = async (key, updatedProductData) => {
  //   try {
  //     const response = await axios.put(`http://localhost:5000/product/${key._id}`, updatedProductData);

  //     console.log('Product updated successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error updating product:', error);
  //   }
  // };

  const handleUpdate = (record) => {
    // Set form values with the selected product details
    form.setFieldsValue({
      name: record.name,
      price: record.price,
      rating: record.rating,
      fruittype: record.fruittype,
      image: null,  // You can't set file input, handle separately
    });
  
    // Set the product data in state for further updating
    setUserData({...userData, _id: record._id,});
  
    // Open the drawer
    setOpen(true);
  };

 // delete api 

  const handleDelete = async (key) => {
    console.log("key",key._id);

    try {
      const comform = window.confirm(" Are ypu want to delete ");
      if(comform){
        await axios.delete(`http://localhost:5000/products/${key._id}`);
        fetchProducts(); 
       message.success("Product deleted successfully!");
      }
      
    } catch (error) {
      console.error("Error deleting product:", error);
      message.error("Failed to delete the product.");
    }
  };

  const [open, setOpen] = useState(false);
  const [form] = Form.useForm(); // Get form instance for resetting
  const imageInputRef = useRef(null); // Ref for image input

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    resetForm();
  };

// Reset all form fields

  const resetForm = () => {
    form.resetFields(); 
    if (imageInputRef.current) {
      imageInputRef.current.value = ""; // Clear file input manually
    }
  };

  const [userData, setUserData] = useState({
    name: "",
    price: "",
    rating: "",
    fruittype: "",
    image: null,
  });

  const handleData = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setUserData({ ...userData, image: files[0] });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  // const onsubmit = async () => {
  //   const formData = new FormData();
  //   formData.append("name", userData.name);
  //   formData.append("price", userData.price);
  //   formData.append("rating", userData.rating);
  //   formData.append("fruittype", userData.fruittype);
  //   formData.append("image", userData.image);

  //   try {
  //     const res = await axios.post("http://localhost:5000/addproduct",formData,{ headers: { "Content-Type": "multipart/form-data" },});
  //     console.log(res.data);
  //     fetchProducts();
  //     resetForm(); 
  //     onClose();
  //   } catch (error) {
  //     if (error.response) {
  //       console.error("Error response:", error.response);
  //     } else {
  //       console.error("Error:", error.message);
  //     }
  //   }
  // };
  const onsubmit = async () => {
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("price", userData.price);
    formData.append("rating", userData.rating);
    formData.append("fruittype", userData.fruittype);
    if (userData.image) {
      formData.append("image", userData.image);
    }
// const data = {
//   name : value.name,
//   price : value.price,
//   rating : value.rating,
//   fruittype : value.fruittype
// }
    // console.log('userdata' , userData._id);
    
  
    try {
      if (userData._id) {
        const res = await axios.put(`http://localhost:5000/product/${userData._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("Updated product:", res.data);
      } else {
        const res = await axios.post("http://localhost:5000/addproduct", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("Added new product:", res.data);
      }
      
      fetchProducts();
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Divider />
            <div className="d-flex justify-content-end">
              <Button
                type="primary"
                onClick={showDrawer}
                icon={<PlusOutlined />}
              >
                Add New Product
              </Button>
            </div>
            <Table
              rowSelection={{ type: "checkbox" }}
              columns={columns(handleDelete,handleUpdate)}
              dataSource={allProducts}
              loading={loading}
              rowKey={(record) => record.key}
            />
          </div>

          {/* Form Drawer  */}
          <Drawer
             title={userData._id ? "Update Product" : "Add New Product"}
            width={720}
            onClose={onClose}
            open={open}
            styles={{
              body: {
                paddingBottom: 80,
              },
            }}
          >
            <Form
              layout="vertical"
              form={form} // Bind Ant Design form
              onFinish={onsubmit}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Fruit Name"
                    rules={[
                      { required: true, message: "Please enter product name" },
                    ]}
                  >
                    <Input
                      name="name"
                      placeholder="Please enter product name"
                      onChange={handleData}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="price"
                    label=" Fruit Price"
                    rules={[{ required: true, message: "Please enter price" }]}
                  >
                    <Input
                      type="number"
                      name="price"
                      placeholder="Please enter price"
                      onChange={handleData}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="rating"
                    label=" Fruit Rating"
                    rules={[{ required: true, message: "Please enter rating" }]}
                  >
                    <Input
                      type="number"
                      name="rating"
                      placeholder="Rating"
                      onChange={handleData}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="fruittype"
                    label="Fruit Type"
                    rules={[
                      { required: true, message: "Please choose a fruit type" },
                    ]}
                  >
                    <Radio.Group name="fruittype" onChange={handleData}>
                      <Radio value="newFruit">New Fruit</Radio>
                      <Radio value="onOffer">On Offer</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="image"
                    label="Fruit Image"
                    rules={[
                      { required: true, message: "Please upload an image" },
                    ]}
                  >
                    <Input
                      type="file"
                      name="image"
                      ref={imageInputRef} // Use ref for file input
                      onChange={handleData}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Space>
            </Form>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
