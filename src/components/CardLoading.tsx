import React from 'react'
import Skeleton from 'react-loading-skeleton'

function CardLoading() {
    return (
        <div>
            <Skeleton height={200} className='rounded' />
            <div>
                <Skeleton height={30} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    )
}

export default CardLoading