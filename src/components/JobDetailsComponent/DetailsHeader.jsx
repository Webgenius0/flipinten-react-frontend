import { Upload } from "lucide-react";
import { MapPin, Clock, Briefcase, DollarSign } from "lucide-react";
import Container from "../common/Container";
import uiux from "../../assets/uiux.png";

export default function DetailsHeader() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-12 gap-12">
          {/* left */}
          <div className="bg-gradient-to-br w-full col-span-7 from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all flex cursor-pointer flex-col items-start justify-center duration-300 hover:border-red-300 group">
            <div className="flex items-center gap-4">
              <div>
                <img src={uiux} alt="" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  UI/UX Designer
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} />
                    <span>Slack</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} />
                    <span>Senior level</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={14} />
                    <span>LPA: 80</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={12} />
                  <span>Posted 30 mins ago</span>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="bg-white rounded-2xl p-6 w-full col-span-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Hey! Don't see your ideal role listed?
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We value unique skills. Submit your resume, and we'll contact you
              for matching opportunities.
            </p>

            <button className="w-full bg-[#E52621]/8 border-red-500 text-red-500 font-medium py-3 px-4 rounded-xl hover:bg-[#E52621]/15 transition-all duration-200 flex items-center justify-center gap-2 border-[1.5px]">
              <Upload size={18} />
              Submit Your Resume
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
