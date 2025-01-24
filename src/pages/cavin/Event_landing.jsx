import React from 'react'
import event from '../cavin/event.png'
import event2 from '../cavin/event2.png'
const Event_landing = () => {
    return (
        <>
            <div className="event_landing_sec back_c c_8f9197 py-5 px-lg-5 px-md-3 px-sm-2 px-2">
                <div className="container-fluid">
                    <div className="row py-lg-5 py-md-4 py-3">
                        <div className="col-12 text-center">
                            <p className='fs_18'>Event</p>
                            <h1 className='fw_600 text-white py-3'>Events and insights</h1>
                            <p className='fs_18'>The latest industry news, interviews, technologies, and resources.</p>
                        </div>
                    </div>
                    <div className="row mx-xl-4 mx-3 py-4">
                        <div className="col-md-6 ">
                            <div className="me-2 blog-card">
                                <img src={event} className='img-fluid w-100' alt="" />
                                <p className='fs_18 py-3 m-0'>Design</p>
                                <div className="d-flex justify-content-between">
                                    <h1 className=' fs_600 text-white'>Kaleidoscope</h1> <span className="arrow-icon ">↗</span>
                                </div>
                                <p className='fs_18'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="ms-2 blog-card">
                                <img src={event2} className='img-fluid w-100' alt="" />
                                <p className='fs_18 py-3 m-0'>Product</p>
                                <div className="d-flex justify-content-between">
                                    <h1 className=' fs_600 text-white'>Designathon</h1> <span className="arrow-icon ">↗</span>
                                </div>
                                <p className='fs_18'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event_landing