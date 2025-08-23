import Container from "../common/Container";
import uiux from "../../assets/uiux.png";

export default function JobDescription() {
  return (
    <div className="bg-[#F6F6F6] py-16">
      <Container>
        <div className="flex gap-14 justify-between">
          <div className="max-w-[700px] w-full">
            {/* Job Description Section */}
            <div className="mb-12">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Job description
              </h1>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We are seeking a highly skilled Full Stack Developer to join
                  our dynamic and innovative team. The ideal candidate will have
                  a passion for developing scalable web applications and working
                  across the entire technology stack, from front-end user
                  interfaces to back-end database and server management.
                </p>

                <p>
                  You will collaborate with cross-functional teams to design,
                  develop, and implement new features, ensuring high
                  performance, responsiveness, and security of the application.
                  If you thrive in fast-paced environments, are detail-oriented,
                  and love to solve complex technical challenges, we'd love to
                  meet you!
                </p>
              </div>
            </div>

            {/* Key Responsibility Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key responsibility
              </h2>

              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                      {num}
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      Build, test, and deploy highly responsive web applications
                      using modern front-end and back-end technologies.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Required Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Skills required
              </h2>

              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                      {num}
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      Build, test, and deploy highly responsive web applications
                      using modern front-end and back-end technologies.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <div className="pt-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-md transition-colors duration-200 text-lg">
                Apply for this job
              </button>
            </div>
          </div>
          <div>
            <h5 className="text-2xl font-medium mb-6">More jobs from Slack</h5>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 max-w-2xl">
              <div className="mb-6">
                <img src={uiux} alt="" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Motion Designer
              </h2>

              <div className="flex gap-3 mb-8">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Dhaka
                </span>
                <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Mid Level
                </span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                You will be responsible for frontend and backend development
                tasks. You will work closely with our..
              </p>

              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200">
                Job Details
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
