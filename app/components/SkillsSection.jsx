'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "../constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const SkillsSection = () => {
    return (
        <section className="flex items-center justify-center py-20" id="skills">
            <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
                <h1 className="font-semibold text-white text-[50px]">
                    Skills{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                        {" "}
                        &{" "}
                    </span>
                    Technologies
                </h1>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    breakpoints={{
                        1000: {
                            slidesPerView: 5,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        320: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={5000}
                    modules={[Autoplay]}
                    className="max-w-[100%]"
                >
                    {SkillData.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={skill.Image}
                                alt={skill.name}
                                width={skill.width}
                                height={skill.height}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SkillsSection;