import React, { Children } from 'react'

function layout({children}: {
    children: React.ReactNode
  }) {
    return (
        <div className=" row">
            <div className="d-none d-sm-block col-sm-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, corrupti.</div>
            <div className="col-12 col-sm-10 ">
                {children}
            </div>
        </div>
    )
}

export default layout