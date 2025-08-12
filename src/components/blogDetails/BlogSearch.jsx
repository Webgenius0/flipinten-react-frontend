export default function BlogSearch() {
  return (
    <div className="p-8 bg-white rounded-[24px]">
      <div className="pb-4 border-b border-dashed">
        <h3 className="text-[#0B0B0B] text-2xl font-semibold leading-8">
          Search
        </h3>
      </div>

      <div className="py-2 pl-8 pr-2 rounded-[60px] bg-[#EBECEF] border border-[#EBECEF] w-[326px] flex justify-between mt-4">
        <input placeholder="Search..." className="w-[90%] outline-none" type="text" />
        <button className="p-3 rounded-full bg-[#E52621]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M17.5 18.1406L12.5 13.1406M2.5 8.97396C2.5 9.74 2.65088 10.4985 2.94404 11.2063C3.23719 11.914 3.66687 12.5571 4.20854 13.0987C4.75022 13.6404 5.39328 14.0701 6.10101 14.3633C6.80875 14.6564 7.56729 14.8073 8.33333 14.8073C9.09938 14.8073 9.85792 14.6564 10.5657 14.3633C11.2734 14.0701 11.9164 13.6404 12.4581 13.0987C12.9998 12.5571 13.4295 11.914 13.7226 11.2063C14.0158 10.4985 14.1667 9.74 14.1667 8.97396C14.1667 8.20791 14.0158 7.44937 13.7226 6.74164C13.4295 6.03391 12.9998 5.39084 12.4581 4.84917C11.9164 4.30749 11.2734 3.87781 10.5657 3.58466C9.85792 3.29151 9.09938 3.14063 8.33333 3.14062C7.56729 3.14063 6.80875 3.29151 6.10101 3.58466C5.39328 3.87781 4.75022 4.30749 4.20854 4.84917C3.66687 5.39084 3.23719 6.03391 2.94404 6.74164C2.65088 7.44937 2.5 8.20791 2.5 8.97396Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
