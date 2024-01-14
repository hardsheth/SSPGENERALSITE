'use client'
import Image from "next/image"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import Style from "./detailsPage.module.css";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Thumbs } from 'swiper/modules';
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import RateIngStars from "@/components/rateIngStars";
import { MdElectricBolt } from "react-icons/md";
import ProductCardSwiper from "@/components/ProductInfoCardSwiper";
import ProductViewGallery from "@/components/ProductPreviewGallery";
import { FaCartPlus } from "react-icons/fa6";
function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <div className="container-fluid">
            <div className="p-3">
                <div className="row mb-3">
                    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-5">
                        <ProductViewGallery />
                        <div className="mt-2 row row-cols-2">
                            <div className="col ">
                                <button className={`btn btn-primary w-100`} type="button"> <FaCartPlus npm /> Add To Cart</button>
                            </div>
                            <div className="col">
                                <button className={`btn btn-danger w-100`} type="button"><MdElectricBolt /> Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 col-xl-7 col-xxl-7">
                        <div>
                            <p className="w-100 fs-5 fw-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <p className="w-100 text-wrap">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic consequatur rem earum asperiores non unde quaerat dolorum illum pariatur ex impedit magni aut beatae, nisi, tempora deserunt mollitia doloribus culpa nihil eveniet veniam, quae cumque. Qui, expedita, eligendi ipsa ipsam neque recusandae saepe consequuntur nostrum laborum odio laboriosam tenetur quis voluptates eveniet. In laboriosam voluptate iusto at pariatur eligendi autem architecto modi recusandae quisquam unde dolorum corporis, nihil esse aspernatur cupiditate, reiciendis aliquid repellendus mollitia odio laudantium molestiae exercitationem perspiciatis asperiores! Reiciendis quisquam minima animi quae molestiae. Corrupti amet magni voluptatibus, sit minima officia deserunt sequi debitis. Voluptatibus, voluptatum!
                        </p>
                    </div>
                </div>
                <div className="mb-3">
                    <h3>
                        Frequently bought together
                    </h3>
                </div>
                <div className="mb-3">
                    <h3>Rate Review</h3>
                    <div className="row mb-2">
                        <div className="col-xs-12 col-md-3 col-lg-2">
                            <Image src={` https://dummyimage.com/600x400/454654/fff&text=HS`} height={60} width={60} className='rounded-circle ' alt='image of Product' />

                        </div>
                        <div className="col-xs-12  col-md-9 col-lg-10">
                            <div className="d-flex justify-content-start">
                                <RateIngStars />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo tenetur ipsa dolores. Harum placeat qui facilis velit neque nobis omnis!</p></div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-xs-12 col-md-3 col-lg-2">
                            <Image src={` https://dummyimage.com/600x400/454654/fff&text=SA`} height={60} width={60} className='rounded-circle ' alt='image of Product' />
                        </div>
                        <div className="col-xs-12  col-md-9 col-lg-10">
                            <RateIngStars />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo tenetur ipsa dolores. Harum placeat qui facilis velit neque nobis omnis!</p></div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-xs-12 col-md-3 col-lg-2">
                            <Image src={` https://dummyimage.com/600x400/454654/fff&text=SM`} height={60} width={60} className='rounded-circle ' alt='image of Product' />
                        </div>
                        <div className="col-xs-12  col-md-9 col-lg-10">
                            <div className="d-flex justify-content-start">
                                <RateIngStars />
                            </div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo tenetur ipsa dolores. Harum placeat qui facilis velit neque nobis omnis!</div>
                    </div>
                </div>
                <div className="mb-3">
                    <h3>People Also Baught</h3>
                    <Swiper
                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 5
                                },
                                // when window width is >= 576px
                                576: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20
                                },
                                1400: {
                                    slidesPerView: 6,
                                    spaceBetween: 20
                                },
                            }
                        }
                        spaceBetween={5}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        centeredSlides={true}
                        loop={true}
                        grabCursor={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                    </Swiper>
                    {/* <ProductCard /> */}
                </div>
                <div className="mb-3">
                    <h3>Similar Products</h3>
                    <Swiper
                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 5
                                },
                                // when window width is >= 576px
                                576: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20
                                },
                                1400: {
                                    slidesPerView: 6,
                                    spaceBetween: 20
                                },
                            }
                        }
                        spaceBetween={5}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        grabCursor={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                        <SwiperSlide > <ProductCardSwiper /></SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default page