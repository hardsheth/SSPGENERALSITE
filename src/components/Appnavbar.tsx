'use client'
import React, { useState } from 'react'
import Styles from './navbar.module.css'
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap'
function Appnavbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='d-none d-sm-block'>
            <div className="row">
                <div className="col-2">
                    Lorem ipsum dolor sit amet.
                </div>
                <div className="col-sm-7 col-md-8">
                    {/* <ul className='list-inline text-md-center'>
                        <li className="list-inline-item">Home</li>
                        <li className="list-inline-item">Products</li>
                        <li className="list-inline-item">Gallery</li>
                        <li className="list-inline-item">About Us</li>
                        <li className="list-inline-item">Contact Us</li>
                    </ul> */}
                    <div className="d-flex justify-content-evenly">
                        <a className="list-group-item list-group-item-action">Home</a>
                        <a className="list-group-item list-group-item-action">Products</a>
                        <a className="list-group-item list-group-item-action">Gallery</a>
                        <a className="list-group-item list-group-item-action">About Us</a>
                        <a className="list-group-item list-group-item-action">Contact Us</a>
                    </div>
                </div>
                <div className="col-sm-3 col-md-2 text-end pe-5">
                    <Dropdown
                        isOpen={isOpen}
                        toggle={() => setIsOpen(!isOpen)}
                    >
                        <DropdownToggle tag={"div"} >
                            <div className="d-flex justify-content-end gap-2 me-2" >
                                <div>
                                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="Rounded Image" className={Styles.img_app} />
                                </div>
                                <div>hard Sheth</div>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu container="body" >
                            <DropdownItem >
                                Action 1
                            </DropdownItem>
                            <DropdownItem >
                                Action 2
                            </DropdownItem>
                            <DropdownItem >
                                Action 3
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Appnavbar