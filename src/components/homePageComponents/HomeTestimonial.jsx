import CommonHeading from "@/components/common/CommonHeading";
import Container from "@/components/common/Container";
import TestImage from "@/assets/testImage.png"
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeTestimonial() {
  return (
    <section className="py-[140px]">
      <Container>
        <div className="max-w-[565px] mx-auto text-center">
          <CommonHeading text="What our Customers Say About Us" />
          <p className="mt-6 text-[#6A7283] text-[18px] leading-[27px]">
            See how has transformed logistics operations for our users
          </p>
        </div>

        <div>
          <Carousel className="w-full mt-[48px]">
            <div className="mx-[30px]">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-6 bg-[#F6F6F6] rounded-[24px] flex flex-col gap-4 max-w-[413px]">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_15525_176)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.9994 27.3185L22.7876 30.9718C23.1615 31.1731 23.5873 31.2435 24.0025 31.1728C25.0719 30.9906 25.7973 29.9377 25.6228 28.8211L24.3928 20.9514L29.8181 15.3396C30.1171 15.0305 30.3127 14.6293 30.3766 14.1952C30.5411 13.077 29.8063 12.0312 28.7353 11.8595L21.1869 10.6491L17.7519 3.52744C17.5625 3.13521 17.2577 2.81684 16.8821 2.61927C15.9142 2.11039 14.7346 2.51698 14.2472 3.52744L10.8121 10.6491L3.26376 11.8595C2.84803 11.9261 2.4638 12.1305 2.16777 12.4425C1.40516 13.2463 1.411 14.5434 2.1808 15.3396L7.60615 20.9514L6.37609 28.8211C6.30834 29.2545 6.3758 29.6992 6.56849 30.0895C7.06495 31.0952 8.24821 31.4902 9.21136 30.9718L15.9994 27.3185Z"
                                  fill="#FFC700"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_15525_176">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_15525_176)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.9994 27.3185L22.7876 30.9718C23.1615 31.1731 23.5873 31.2435 24.0025 31.1728C25.0719 30.9906 25.7973 29.9377 25.6228 28.8211L24.3928 20.9514L29.8181 15.3396C30.1171 15.0305 30.3127 14.6293 30.3766 14.1952C30.5411 13.077 29.8063 12.0312 28.7353 11.8595L21.1869 10.6491L17.7519 3.52744C17.5625 3.13521 17.2577 2.81684 16.8821 2.61927C15.9142 2.11039 14.7346 2.51698 14.2472 3.52744L10.8121 10.6491L3.26376 11.8595C2.84803 11.9261 2.4638 12.1305 2.16777 12.4425C1.40516 13.2463 1.411 14.5434 2.1808 15.3396L7.60615 20.9514L6.37609 28.8211C6.30834 29.2545 6.3758 29.6992 6.56849 30.0895C7.06495 31.0952 8.24821 31.4902 9.21136 30.9718L15.9994 27.3185Z"
                                  fill="#FFC700"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_15525_176">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_15525_176)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.9994 27.3185L22.7876 30.9718C23.1615 31.1731 23.5873 31.2435 24.0025 31.1728C25.0719 30.9906 25.7973 29.9377 25.6228 28.8211L24.3928 20.9514L29.8181 15.3396C30.1171 15.0305 30.3127 14.6293 30.3766 14.1952C30.5411 13.077 29.8063 12.0312 28.7353 11.8595L21.1869 10.6491L17.7519 3.52744C17.5625 3.13521 17.2577 2.81684 16.8821 2.61927C15.9142 2.11039 14.7346 2.51698 14.2472 3.52744L10.8121 10.6491L3.26376 11.8595C2.84803 11.9261 2.4638 12.1305 2.16777 12.4425C1.40516 13.2463 1.411 14.5434 2.1808 15.3396L7.60615 20.9514L6.37609 28.8211C6.30834 29.2545 6.3758 29.6992 6.56849 30.0895C7.06495 31.0952 8.24821 31.4902 9.21136 30.9718L15.9994 27.3185Z"
                                  fill="#FFC700"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_15525_176">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_15525_176)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.9994 27.3185L22.7876 30.9718C23.1615 31.1731 23.5873 31.2435 24.0025 31.1728C25.0719 30.9906 25.7973 29.9377 25.6228 28.8211L24.3928 20.9514L29.8181 15.3396C30.1171 15.0305 30.3127 14.6293 30.3766 14.1952C30.5411 13.077 29.8063 12.0312 28.7353 11.8595L21.1869 10.6491L17.7519 3.52744C17.5625 3.13521 17.2577 2.81684 16.8821 2.61927C15.9142 2.11039 14.7346 2.51698 14.2472 3.52744L10.8121 10.6491L3.26376 11.8595C2.84803 11.9261 2.4638 12.1305 2.16777 12.4425C1.40516 13.2463 1.411 14.5434 2.1808 15.3396L7.60615 20.9514L6.37609 28.8211C6.30834 29.2545 6.3758 29.6992 6.56849 30.0895C7.06495 31.0952 8.24821 31.4902 9.21136 30.9718L15.9994 27.3185Z"
                                  fill="#FFC700"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_15525_176">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_15525_176)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.9994 27.3185L22.7876 30.9718C23.1615 31.1731 23.5873 31.2435 24.0025 31.1728C25.0719 30.9906 25.7973 29.9377 25.6228 28.8211L24.3928 20.9514L29.8181 15.3396C30.1171 15.0305 30.3127 14.6293 30.3766 14.1952C30.5411 13.077 29.8063 12.0312 28.7353 11.8595L21.1869 10.6491L17.7519 3.52744C17.5625 3.13521 17.2577 2.81684 16.8821 2.61927C15.9142 2.11039 14.7346 2.51698 14.2472 3.52744L10.8121 10.6491L3.26376 11.8595C2.84803 11.9261 2.4638 12.1305 2.16777 12.4425C1.40516 13.2463 1.411 14.5434 2.1808 15.3396L7.60615 20.9514L6.37609 28.8211C6.30834 29.2545 6.3758 29.6992 6.56849 30.0895C7.06495 31.0952 8.24821 31.4902 9.21136 30.9718L15.9994 27.3185Z"
                                  fill="#FFC700"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_15525_176">
                                  <rect width="32" height="32" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="">
                          <h3 className="text-[#6D6D6D] text-[14px] leading-[21px]">Oct 28, 2024</h3>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#0B0B0B] text-[20px] font-medium leading-[30px]">Excellent Services</h3>
                        <p className="text-[#404A60] mt-2 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-[60px] h-[60px] rounded-full bg-red-300">
                          <img className="w-full h-full rounded-[50%] object-cover" src={TestImage} alt="not found" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-[#0B0B0B] font-medium">Gergia Rodrigues</h3>
                          <p className="text-[#6D6D6D] text-[14px] leading-[21px]">Content creator</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            <div>
              <CarouselNext className="hover:bg-[#E52621] w-[48px] h-[48px]" />
              <CarouselPrevious className="hover:bg-[#E52621] w-[48px] h-[48px] cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
