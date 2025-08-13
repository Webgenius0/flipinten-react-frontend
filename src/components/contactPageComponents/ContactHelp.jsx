import CommonHeading from "../common/CommonHeading";
import Container from "../common/Container";

export default function ContactHelp() {
  return (
    <section className="py-[120px] bg-[#F6F6F6]">
      <Container>
        <div className="flex flex-col justify-center items-center gap-6">
          <CommonHeading text="How can we help you?" />
          <div className="w-[424px] rounded-[8px] border border-[#DFE0E4] py-4 px-[14px] flex gap-2 bg-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.31 15.9L20.71 19.29C20.8993 19.4778 21.0058 19.7334 21.0058 20C21.0058 20.2666 20.8993 20.5222 20.71 20.71C20.5222 20.8993 20.2666 21.0058 20 21.0058C19.7334 21.0058 19.4778 20.8993 19.29 20.71L15.9 17.31C14.5025 18.407 12.7767 19.0022 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19.0022 12.7767 18.407 14.5025 17.31 15.9ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z"
                  fill="#888E9C"
                />
              </svg>
            </div>
            <input className="w-full outline-none" placeholder="Search..." type="text" />
          </div>
        </div>

        <div className="mt-[48px]">
            <div>
                <h3 className="text-[#1C1D20] text-center text-2xl">or Looking for quick answers?</h3>
            </div>
            <div></div>
        </div>
      </Container>
    </section>
  );
}
