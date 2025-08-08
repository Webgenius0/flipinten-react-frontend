import { Link } from "react-router-dom";


export default function BlogCard({item}) {
  return (
    <div className="p-8 bg-[#F6F6F6] rounded-3xl transition-all ease-linear duration-200 hover:scale-105 max-w-max">
        <div className="w-[365px] h-[227px] rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src={item?.image} alt="" />
        </div>

        <div className="mt-4 flex flex-col gap-3 max-w-[365px]">
            <h3 className="text-[#1C1D20] text-[20px] font-medium leading-[30px]">{item?.heading}</h3>
            <Link className="text-[#798090] text-[16px] leading-[24px] line-clamp-3">{item?.description} <span className="font-semibold text-[#E52621]">Read more</span> </Link>
        </div>
    </div>
  )
}
