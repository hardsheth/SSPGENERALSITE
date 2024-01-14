import Image from 'next/image'
import Styles from './navbar.module.css';
function ProductCard() {
    return (
        <div className='px-2'>
            <Image src={`https://dummyimage.com/640x360/cfcdcf/fff&text=Image`} height={200} width={200} className='rounded w-100' alt='image of Product' />
            <div className='col-12'>
                <div className='ps-1'>
                    <p className='fs-5 text-wrap'> Lorem, ipsum.</p>
                    <div className='d-flex justify-content-start'>
                        <div >
                            <span className=" badge bg-secondary me-2">Mythical</span>
                        </div>
                        <div >
                            <span className="badge bg-secondary me-2">Historical</span>
                        </div>
                        <div >
                            <span className="badge bg-secondary me-2">Traditoinal</span>
                        </div>
                    </div>
                </div>
                <div className='ps-1'>
                    <p className='w-100 text-wrap'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo omnis voluptatum neque aliquam. Magnam, provident!... </p><span className={Styles.extraText} >Read more</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard