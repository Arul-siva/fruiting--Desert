import React from 'react'
import blog_banner from './blog_banner.png'
import auatar from './Avatar.png'
const Blog = () => {
    return (
        <>
            <div className="blog_section back_c c_8f9197 ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className='py-3'>Our blog</p>
                            <h1 className='text-white fw_600 py-3'>Resources and insights</h1>
                            <p className=''> The latest industry news, interviews, technologies, and resources.</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 px-5">
                            <div className="blog_banner_bg p-4">
                                <div className="row text-white d-flex align-items-end">
                                    <div className="col-md-8 col-12">
                                        <div className="d-flex justiy-content-between">
                                            <p className="fs_20">Improve your design skills: Develop an "eye" for design</p> <span className="arrow-icon">↗</span>
                                        </div>
                                        <p className="fs_18">Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.</p>
                                       <div className="d-flex mx-3">
                                       <div className="">
                                            <p>Written by</p>
                                           <div className="d-flex"> <img src={auatar} className='img-fluid' alt="" /><p>Amélie Laurent</p></div>
                                        </div>
                                        <div className="mx-3"> 
                                            <p>Published on</p>
                                            <p>10 April 2024</p>
                                        </div>
                                       </div>
                                    </div>
                                   
                                    <div className="col-md-4 col-12">
                                    <p>File under</p>
                                        <ul className='d-flex blogul p-0'>
                                            <li>Design</li>
                                            <li>Research</li>
                                            <li>Presentation</li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* <div className="position-relative ">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={blog_banner} className='img-fluid ' alt="" />
                            </div>
                            <div className="position-absolute top-50">
                                <div className="d-flex justiy-content-between">
                                    <p>Improve your design skills: Develop an "eye" for design</p> <span className="arrow-icon">↗</span>
                                </div>
                                <p>Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.</p>
                                <div className="row ">
                                    <div className="col-md-6 col-12">
                                      
                                    </div>
                                    <div className="col-md-6 col-12">
                                       
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog