import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./css/Widget.css"
function Widget() {
    return (
        <>
            <div className='widget'>
                <div className='widget_top'>
                    <div className='widget_header'>
                        <h4>LinkedIn News</h4>
                        <InfoIcon />
                    </div>
                    <div className='widget_body'>
                        <ul className='widget_options'>
                            <li>
                                <h4>Slaynin Jobs search Fees</h4>
                                <p>8d ago *8,55 readers</p>
                            </li>
                            <li>
                                <h4>A two pizza rule for eating</h4>
                                <p>4d ago * 420 readers</p>
                            </li>
                            <li>
                                <h4>A two pizza rule for eating</h4>
                                <p>3d ago * 380 readers</p>
                            </li>
                            <li>
                                <h4>A two pizza rule for eating</h4>
                                <p>1d ago * 280 readers</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='widget_bottom'>
                    <div className='widget_header'>
                        <h4>Todays's top Courses</h4>
                        <InfoIcon />
                    </div>
                    <div className='widget_body'>
                        <ul className='widget_options'>
                            <li>
                                <h4>loading with some random text</h4>
                                <p>Kay Coly</p>
                            </li>
                            <li>
                                <h4>Building Resillience</h4>
                                <p>titian Kolo</p>
                            </li>
                            <li>
                                <h4>loading with some random text</h4>
                                <p>3d ago * 4,560 readers </p>
                            </li>
                            <li>
                                <h4>Shorter hour boost productivity</h4>
                                <p>2d ago * 5,56 readers </p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Widget