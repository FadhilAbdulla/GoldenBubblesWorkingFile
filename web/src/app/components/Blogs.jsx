'use client';

import { Container } from 'react-bootstrap';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { blogs } from '../data';
import BlogCard from './BlogCard';
const Blogs = () => {
  const swiperOptions = {
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 2000
    },
    loop: false,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination'
    },
    breakpoints: {
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
  };
  return <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-5">
          <h2 className="mb-0">Explore our latest blogs</h2>
        </div>

        <Swiper {...swiperOptions}>
          <div className="swiper-wrapper" style={{
          display: 'flex'
        }}>
            {blogs.map((blog, idx) => <SwiperSlide key={idx}>
                <BlogCard blog={blog} />
              </SwiperSlide>)}
          </div>

          <div className="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
        </Swiper>
      </Container>
    </section>;
};
export default Blogs;