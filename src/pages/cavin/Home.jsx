import React from 'react'
import banner from '../cavin/home_banner_im.png';
import featured from './Featured.png';
import featured4 from './Featured icon.png';
import featured2 from './Featured icon-2.png';
import featured3 from './Featured icon-3.png';
import featured1 from './Featuredicon-1.png';
import logo1 from './Company logo-1.png';
import logo2 from './Company logo-2.png';
import logo3 from './Company logo-3.png';
import logo4 from './Company logo-4.png';
import who from './Content.png';
import who1 from './who1.png';
import who2 from './who2.png';
import who3 from './who3.png';
import why from './why.png';
import blog1 from './blog1.png';
import blog2 from './blog2.png';
import blog3 from './blog3.png';
import contact_banner from './contact_banner.png';
import CountUp from 'react-countup';
import { Form, Input, Button, Select, message } from 'antd';
const { Option } = Select;
const Home = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        message.success('Form submitted successfully!');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Form submission failed!');
    };

    const blogs = [
        {
            image: blog1, // Replace with actual image URLs
            author: 'Olivia Rhye',
            date: '20 Jan 2024',
            title: 'UX review presentations',
            description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            tags: ['Design', 'Research', 'Presentation']
        },
        {
            image: blog2, // Replace with actual image URLs
            author: 'Phoenix Baker',
            date: '19 Jan 2024',
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
            tags: ['Product', 'Tools', 'SaaS']
        },
        {
            image: blog3, // Replace with actual image URLs
            author: 'Lana Steiner',
            date: '18 Jan 2024',
            title: 'Building your API stack',
            description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
            tags: ['Software Development', 'Tools']
        }
    ];
    return (
        <>
            <div className="banner_section back_c pb-5">
                <div className="container-fluid">
                    <div className="row pt-5">
                        <div className="col-12 text-center pt-5">
                            <h1 className='fw_600 text-white display-1 fw_600 '>Leading the Future with <br /> Innovative Technology Solutions</h1>
                            <p className='c_8f9197 py-3 fs_20 w-50 mx-auto'>At Cavin Infotech, we deliver advanced digital transformation solutions to drive growth, streamline operations, and keep businesses ahead in the digital age.
                            </p>
                            <button className=' btn_c my-3'>Get In Touch</button>
                            <div className="mt-3">
                                <img src={banner} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our_service back_c c_8f9197 pt-5 px-lg-5 px-md-3 px-sm-2 px-2">
                <div className="container-fluid ">
                    <div className="row mx-xl-4 mx-3">
                        <div className="col-lg-4 col-md-12">
                            <div className="my-4">
                                <img src={featured} className='img-fluid my-4' alt="" />
                                <h2 className='text-white fw-600'>Our Services</h2>
                                <p className='w-75 fs_20'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="my-4 p-4 color_box">
                                <img src={featured4} className='img-fluid pt-3 py-5' alt="" />
                                <p className='text-white fs_20 fw_600'>Cloud Solutions
                                </p>
                                <p className='fs_18'>Future-proof your business with secure, scalable cloud solutions for cost savings, remote access, and efficiency. Enjoy seamless transitions and reliable data management.</p>
                            </div>
                            <div className="my-4 p-4 color_box">
                                <img src={featured1} className='img-fluid pt-3 py-5' alt="" />
                                <p className='text-white fs_20 fw_600'>Data Analytics
                                </p>
                                <p className='fs_18'>Harness data-driven insights for smarter decisions. Our analytics reveal key trends, providing actionable intelligence to stay competitive.  </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="my-4 p-4 color_box">
                                <img src={featured2} className='img-fluid pt-3 py-5' alt="" />
                                <p className='text-white fs_20 fw_600'>Custom Software Development
                                </p>
                                <p className='fs_18'>Enhance productivity with tailored software designed for your business. Our experts build tools that boost efficiency, innovation, and long-term success.
                                </p>
                            </div>
                            <div className="my-4 p-4 color_box">
                                <img src={featured3} className='img-fluid pt-3 py-5' alt="" />
                                <p className='text-white fs_20 fw_600'>Digital Transformation
                                </p>
                                <p className='fs_18'>Stay ahead with modern digital transformation solutions, enhancing productivity and future-proofing your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="growing_section back_c c_8f9197 py-5 px-lg-5 px-md-3 px-sm-2 px-2">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-lg-12 col-12">
                            <p className='py-3  fs_18'>Join 4,000+ companies already growing</p>
                            <div className="d-blog d-md-flex justify-content-center py-4 overflow-hidden">
                                <img src={logo1} alt="" className='img-fluid mx-3' />
                                <img src={logo2} alt="" className='img-fluid mx-3' />
                                <img src={logo3} alt="" className='img-fluid mx-3' />
                                <img src={logo4} alt="" className='img-fluid mx-3' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="Features_section back_c c_8f9197 py-5 px-lg-5 px-md-3 px-sm-2 px-2">
                <div className="container-fluid ">
                    <div className="row mx-xl-4 mx-3">
                        <div className="col-12">
                            <div className="">
                                <p className='fs_18 '>Features</p>
                                <h2 className='text-white  fw_600'>Who Are We ?</h2>
                                <p className='fs_18 wid-50'>At Cavin Infotech, we are digital pioneers with a passion for innovation. <br /> With deep roots in FMCG, and expertise in engineering B2B and B2C SaaS products, <br /> we are a dynamic force redefining the boundaries of creativity and technology .</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-xl-4 mx-3 align-items-center pb-lg-5 pb-3">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={who} className="py-3 img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="d-flex py-4">
                                <div className="me-3">
                                    <img src={who1} className='img-fluid ' alt="" />
                                </div>

                                <div className="">
                                    <p className='text-white fw_600 fs_20'>Innovation</p>
                                    <p className='pe-4 fs_18'>We thrive on pushing boundaries, constantly seeking new and creative ways to solve challenges.</p>
                                </div>
                            </div>
                            <div className="d-flex py-4">
                                <div className="me-3">
                                    <img src={who2} className='img-fluid ' alt="" />
                                </div>

                                <div className="">
                                    <p className='text-white fw_600 fs_20'>Integrity</p>
                                    <p className='pe-4 fs_18'>Honesty and transparency are the foundations of our relationships with clients, partners, and each other.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex py-4">
                                <div className="me-3">
                                    <img src={who3} className='img-fluid ' alt="" />
                                </div>

                                <div className="">
                                    <p className='text-white fw_600 fs_20'>Collaboration</p>
                                    <p className='pe-4 fs_18'>We believe in the power of teamwork, fostering a culture that encourages diverse perspectives and collective success.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row mx-xl-4 mx-3 pt-lg-5 pt-3">
                        <div className="col-12">
                            <div className="">
                                <p className='fs_18 '>Our process</p>
                                <h2 className='text-white  fw_600'>Why Us ?</h2>
                                <p className='fs_18 wid-50'>We tailor services to your goals, ensuring measurable results and sustained growth. <br /> With digital expertise, we deliver solutions to keep you competitive and goal-driven.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-xl-4 mx-3 align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="row">
                                <div className="col-md-6 text-center text-white mb-4">
                                    <p className='counter fs_20'>
                                        <CountUp end={8} duration={2} />+
                                    </p>
                                    <p className='fs_18 '>Products</p>
                                </div>
                                <div className="col-md-6 text-center text-white mb-4">
                                    <p className='counter fs_20'>
                                        <CountUp end={600} duration={2} suffix="%" />
                                    </p>
                                    <p className='fs_18 '>Return on investment</p>
                                </div>
                                <div className="col-md-6 text-center text-white mb-4">
                                    <p className='counter fs_20'>
                                        <CountUp end={50} duration={2} />+
                                    </p>
                                    <p className='fs_18 '>Projects Completed</p>
                                </div>
                                <div className="col-md-6 text-center text-white mb-4">
                                    <p className='counter fs_20'>
                                        <CountUp end={200} duration={2} />+
                                    </p>
                                    <p className='fs_18 '>Employees</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={why} className="py-3 img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="blog-section py-5 back_c c_8f9197 px-lg-5 px-md-3 px-sm-2 px-2">
                <h3 className="fs_20">Latest posts</h3>
                <h2 className='fs_ fw_600'>Blogs</h2>
                <p className="section-subtitle">Case studies from some of our amazing customers who are building faster.</p>

                <div className="container-fluid">
                    <div className="row mx-xl-4 mx-3 justify-content-center">
                        {blogs.map((blog, index) => (
                            <div className="col-lg-4 col-md-6 co-sm-6 col-12  mb-4" key={index}>
                                <div className="blog-card  my-5">
                                    <img src={blog.image} alt={blog.title} className="py-3 d-flex img-fluid w-100" />
                                    <div className="blog-content">
                                        <div className="blog-header p-0 m-0">
                                            <p>{blog.author} • {blog.date}</p>
                                        </div>
                                       <div className="d-flex justify-content-between">
                                       <p className="blog-title fs_27 fw_600">{blog.title}</p> <span className="arrow-icon">↗</span>
                                       </div>
                                        <p className="blog-description c_8f9197">{blog.description}</p>
                                        <div className="blog-tags d-flex flex-wrap gap-2">
                                            {blog.tags.map((tag, idx) => (
                                                <span key={idx} className="tag pink">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="view-all-posts mt-4">
                    <button className="btn_c">View all posts</button>
                </div>
            </div>
            <div className="contact_form back_c py-5 ">
                <div className="container-fluid">
                    <div className="row align-items-center" >
                        <div className="col-md-6 col-sm-12 col-12">
                            <img src={contact_banner} className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12 col-12 ">
                            <div className="contact-form-container text-white mx-lg-5 mx-md-3 mx-2 px-5">
                                <h1 className="form-title  fw_600">LETS TALK BUSINESS</h1>

                                <p className="form-subtitle c_8f9197">
                                    We'd love to hear from you. Please fill out this form.
                                </p>
                                <Form
                                    layout="vertical"
                                    className="form-content"
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >

                                    <div className="d-flex">
                                        <Form.Item
                                            label="Name"
                                            name="firstName"
                                            rules={[{ required: true, message: "Please input your first name!" }]}
                                            className="w-50 me-3"
                                        >
                                            <Input className="form-input" placeholder="First name" />
                                        </Form.Item>


                                        <Form.Item
                                            label="Company Name"
                                            name="name"
                                            rules={[{ required: true,  message: "Please enter a valid Name!" }]}
                                            className="w-50 "
                                        >
                                            <Input className="form-input" placeholder='Company Name' />
                                        </Form.Item>
                                    </div>

                                    <Form.Item
                                        label="Company Email"
                                        name="phone"
                                        rules={[{ required: true, type:"email", message: "Please input your phone number!" }]}
                                    >
                                        <Input className="form-input" placeholder="Company Email" />
                                    </Form.Item>


                                    <Form.Item
                                        label="Company Mobile"
                                        name="phone"
                                        rules={[{ required: true, message: "Please input your phone number!" }]}
                                    >
                                        <Input className="form-input" placeholder="+1 (555) 000-0000" />
                                    </Form.Item>



                                    <div className="d-flex justify-content-between">
                                        <Form.Item
                                            label="Company size"
                                            name="companySize"
                                            className='w-50'
                                            rules={[{ required: true, message: "Please select your company size!" }]}
                                        >
                                            <Input type="text" name="companySize" placeholder='(Team size)' />
                                        </Form.Item>
                                        <Form.Item
                                            label="Products"
                                            name="companySize"
                                            className='ms-3  w-50'
                                            rules={[{ required: true, message: "Please select your company size!" }]}
                                        >
                                            <Input type="text" name="companySize" placeholder='company Size' />
                                        </Form.Item>
                                    </div>

                                    <Form.Item
                                        label="Message"
                                        name="message"
                                        rules={[{ required: true, message: "Please input your message!" }]}
                                    >
                                        <Input.TextArea className="form-textarea" rows={4} placeholder='Message' />
                                    </Form.Item>
                                    <p className="form-footer c_8f9197">
                                We only use your data to provide better services to you. I hereby give my consent to the company to use the information where I provide in this form. Also I have fully read the  <a href="#" className="form-link">Terms of Service</a>.
                                </p>
                                    <Form.Item className='text-center'>
                                        <Button  htmlType="submit" className="submit-button btn_c text-center w-100">
                                            Get Started
                                        </Button>
                                    </Form.Item>
                                </Form>
                               
                            </div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home