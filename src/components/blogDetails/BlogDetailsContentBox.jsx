import { Link } from "react-router-dom";
import CommonHeading from "../common/CommonHeading";
import Container from "../common/Container";
import BlogDetailsBannerTwo from "@/assets/blogDetailsBannerTwo.png";
import Images from "@/assets/image.png";
import BlogSearch from "./BlogSearch";
import MoreBlogImage from "@/assets/moreBlogImage.png";
import MoreBlogImage2 from "@/assets/bl1.png";
import MoreBlogImage3 from "@/assets/bl2.png";
import MoreBlogImage4 from "@/assets/bl13.png";
import MoreBlogImage5 from "@/assets/bl4.png";

const CountryData = [
  {
    id: 1,
    name: "spain",
  },
  {
    id: 2,
    name: "France",
  },
  {
    id: 3,
    name: "Portugal",
  },
  {
    id: 4,
    name: "India",
  },
  {
    id: 5,
    name: "Germany",
  },
];

const TableContentData = [
  {
    id: 1,
    text: "Ubicación y Entorno ",
  },
  {
    id: 2,
    text: "Filosofía y Experiencia  ",
  },
  {
    id: 3,
    text: "Historia y Patrimonio The Caesar ",
  },
  {
    id: 4,
    text: "Comodidad Moderna ",
  },
];

const MoreBlogData = [
  {
    id: 0,
    images: MoreBlogImage,
    heading: "Professional Voices",
    date: "20/11/24",
  },
  {
    id: 1,
    images: MoreBlogImage2,
    heading: "Professional Voices",
    date: "20/11/24",
  },
  {
    id: 2,
    images: MoreBlogImage3,
    heading: "Professional Voices",
    date: "20/11/24",
  },
  {
    id: 3,
    images: MoreBlogImage4,
    heading: "Professional Voices",
    date: "20/11/24",
  },
  {
    id: 4,
    images: MoreBlogImage5,
    heading: "Professional Voices",
    date: "20/11/24",
  },
];

const populerTagData = [
  {
    id: 0,
    text: "YT Channel Plans",
  },
  {
    id: 1,
    text: "YTC Services ",
  },
  {
    id: 2,
    text: "YT Video Plans",
  },
];

export default function BlogDetailsContentBox() {
  return (
    <section className="py-[120px] bg-[#F6F6F6]">
      <Container>
        <div className="flex gap-12">
          <div className="w-[70%] bg-white p-10 rounded-3xl">
            {/* Date And Share Box */}
            <div className="flex justify-between">
              {/* Date Box */}
              <div className="flex items-center gap-[12px]">
                <div className="flex gap-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M18.6667 3.64062V8.30729M9.33342 3.64062V8.30729M4.66675 12.974H23.3334M4.66675 8.30729C4.66675 7.68845 4.91258 7.09496 5.35017 6.65738C5.78775 6.21979 6.38124 5.97396 7.00008 5.97396H21.0001C21.6189 5.97396 22.2124 6.21979 22.65 6.65738C23.0876 7.09496 23.3334 7.68845 23.3334 8.30729V22.3073C23.3334 22.9261 23.0876 23.5196 22.65 23.9572C22.2124 24.3948 21.6189 24.6406 21.0001 24.6406H7.00008C6.38124 24.6406 5.78775 24.3948 5.35017 23.9572C4.91258 23.5196 4.66675 22.9261 4.66675 22.3073V8.30729ZM12.8334 18.8073C12.8334 19.1167 12.9563 19.4135 13.1751 19.6322C13.3939 19.851 13.6907 19.974 14.0001 19.974C14.3095 19.974 14.6062 19.851 14.825 19.6322C15.0438 19.4135 15.1667 19.1167 15.1667 18.8073C15.1667 18.4979 15.0438 18.2011 14.825 17.9823C14.6062 17.7635 14.3095 17.6406 14.0001 17.6406C13.6907 17.6406 13.3939 17.7635 13.1751 17.9823C12.9563 18.2011 12.8334 18.4979 12.8334 18.8073Z"
                        stroke="#6A7283"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="text-[#6A7283] text-[16px] leading-6">
                    20 Nov, 2024
                  </h4>
                </div>
                <div className="w-[2px] h-[2px] bg-[#6A7283] rounded-full"></div>
                <h4 className="text-[#6A7283] text-[16px] leading-6">
                  Updated on 20 nov 2024
                </h4>
              </div>
              {/* Share And Copy Box */}
              <div className="flex gap-4 items-center">
                <div className="py-2 px-4 bg-[#E52621] rounded-4xl flex gap-2 items-center w-max">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M12.8545 10.5156C11.9282 10.5156 11.112 10.9713 10.5993 11.6642L6.16668 9.3945C6.24027 9.14366 6.29199 8.88369 6.29199 8.60938C6.29199 8.23731 6.21571 7.88359 6.08393 7.55825L10.7228 4.76675C11.2391 5.37262 11.9979 5.76562 12.8545 5.76562C14.4054 5.76562 15.667 4.50403 15.667 2.95312C15.667 1.40222 14.4054 0.140625 12.8545 0.140625C11.3036 0.140625 10.042 1.40222 10.042 2.95312C10.042 3.31053 10.1156 3.64956 10.2377 3.96431L5.58496 6.764C5.06915 6.17613 4.32127 5.79688 3.47949 5.79688C1.92859 5.79688 0.666992 7.05847 0.666992 8.60938C0.666992 10.1603 1.92859 11.4219 3.47949 11.4219C4.42105 11.4219 5.25109 10.9528 5.76184 10.2404L10.1798 12.5028C10.0985 12.7655 10.042 13.0391 10.042 13.3281C10.042 14.879 11.3036 16.1406 12.8545 16.1406C14.4054 16.1406 15.667 14.879 15.667 13.3281C15.667 11.7772 14.4054 10.5156 12.8545 10.5156Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white text-[16px] font-medium leading-6">
                    share
                  </h4>
                </div>
                <div className="p-2 rounded-full border border-[#0B0B0B] w-max transition-all ease-in-out duration-200 cursor-pointer hover:bg-[#E52621] hover:border-[#E52621]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M16 13.0406V17.2406C16 20.7406 14.6 22.1406 11.1 22.1406H6.9C3.4 22.1406 2 20.7406 2 17.2406V13.0406C2 9.54062 3.4 8.14062 6.9 8.14062H11.1C14.6 8.14062 16 9.54062 16 13.0406Z"
                      stroke="#0B0B0B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 7.04063V11.2406C22 14.7406 20.6 16.1406 17.1 16.1406H16V13.0406C16 9.54062 14.6 8.14062 11.1 8.14062H8V7.04063C8 3.54063 9.4 2.14062 12.9 2.14062H17.1C20.6 2.14062 22 3.54063 22 7.04063Z"
                      stroke="#0B0B0B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main Image Holder */}
            <div className="w-full h-[473px] rounded-2xl overflow-hidden mt-6">
              <img
                className="w-full h-full object-cover"
                src={BlogDetailsBannerTwo}
                alt="not found"
              />
            </div>
            {/* Country Tag */}
            <div className="mt-6 flex gap-2 items-center">
              {CountryData.map((country) => (
                <div
                  key={country.id}
                  className="py-1 px-3 bg-[#E7E7E7] rounded-[16px] w-max text-[12px] leading-[18px] capitalize"
                >
                  {country.name}
                </div>
              ))}
            </div>

            {/* Heading And Sub Heading */}
            <div className="mt-[28px] flex flex-col gap-6 pb-6 border-b border-dashed">
              <CommonHeading text="Professional Voices" />
              <p className="text-[#4F4F4F] text-[16px] leading-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>

            {/* Table of content */}
            <div className="pb-6 border-b border-dashed">
              <div className="mt-6 bg-[#E7E7E7] p-8 rounded-2xl w-max">
                <h2 className="text-[#0B0B0B] text-2xl font-semibold leading-8 mb-6">
                  Table of content
                </h2>
                <ul className="flex flex-col gap-3 pl-4">
                  {TableContentData.map((item) => (
                    <li key={item.id} className=" list-disc ">
                      <Link className="text-[#0B0B0B] text-[18px] font-medium leading-[27px] underline">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COntent Areas */}
            <div className="mt-6 ">
              <div className="pb-6 border-b border-dashed">
                <h3 className="text-[#1C1D20] text-2xl font-semibold leading-loose">
                  Ubicación y Entorno{" "}
                </h3>
                <p className="text-[#404A60] leading-6 mt-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>

                <div className="w-[531px] h-[308px] rounded-2xl overflow-hidden mt-6">
                  <img
                    className="h-full w-full object-cover"
                    src={Images}
                    alt="not found"
                  />
                </div>

                <p className="text-[#404A60] leading-6 mt-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
              </div>

              <div className="mt-6 pb-6 border-b border-dashed">
                <h3 className="text-[#1C1D20] text-2xl font-semibold leading-loose">
                  Filosofía y Experiencia
                </h3>
                <p className="text-[#404A60] leading-6 mt-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <p className="text-[#404A60] leading-6 mt-6">
                  “Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.”
                </p>
              </div>

              <div className="mt-6 pb-6">
                <h3 className="text-[#1C1D20] text-2xl font-semibold leading-loose">
                  Historia y Patrimonio The Caesar
                </h3>
                <p className="text-[#404A60] leading-6 mt-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>

                <div className="w-[531px] h-[308px] rounded-2xl overflow-hidden mt-6">
                  <img
                    className="h-full w-full object-cover"
                    src={Images}
                    alt="not found"
                  />
                </div>

                <p className="text-[#404A60] leading-6 mt-6">
                  “Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.”
                </p>
              </div>
            </div>
          </div>
          {/* Search Components */}
          <div className="w-[28%] flex flex-col gap-6">
            <BlogSearch />

            {/* More Blog */}
            <div className="p-8 bg-white rounded-3xl">
              <h3 className="text-[#0B0B0B] text-2xl font-semibold leading-8 pb-4 border-b border-dashed">
                More Related Blog
              </h3>

              {MoreBlogData.map((moreBlog) => (
                <Link
                  key={moreBlog.id}
                  className="mt-4 pb-6 border-b border-dashed flex gap-6 items-center"
                >
                  <div className="w-20 h-20 rounded-[8px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={moreBlog.images}
                      alt="not found"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[#1C1D20] text-[18px] font-semibold leading-[27px]">
                      {moreBlog.heading}
                    </h3>
                    <h5 className="text-[#4F4F4F] leading-6">
                      {moreBlog.date}
                    </h5>
                  </div>
                </Link>
              ))}

              <div className="mt-4 w-max border-b-2 border-[#1C1D20]">
                <Link className="text-[#1C1D20] text-[16px] leading-6 font-semibold flex gap-1 items-center">
                  <span>See All</span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M14.1663 6.47412L5.83301 14.8075M14.1663 6.47412H6.66634M14.1663 6.47412V13.9741"
                        stroke="#0B0B0B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Popular Tag */}
            <div className="p-8 bg-white rounded-3xl">
              <h3 className="text-[#0B0B0B] text-2xl font-semibold leading-8 pb-4 border-b border-dashed">
                Popular Tag
              </h3>

              <div className="flex gap-4 flex-wrap items-center py-4 border-b border-dashed">
                {populerTagData.map((item) => (
                  <div
                    key={item.id}
                    className="py-3 px-6 w-max border border-[#DFE0E4] rounded-4xl text-[#1C1D20] text-[14px] font-medium leading-[21px]"
                  >
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="mt-4 w-max border-b-2 border-[#1C1D20]">
                <Link className="text-[#1C1D20] text-[16px] leading-6 font-semibold flex gap-1 items-center">
                  <span>See All</span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M14.1663 6.47412L5.83301 14.8075M14.1663 6.47412H6.66634M14.1663 6.47412V13.9741"
                        stroke="#0B0B0B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
