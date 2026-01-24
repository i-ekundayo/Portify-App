import { Link } from "react-router-dom";
import Header from "../../Components/Header.jsx";
import Sidebar from "./Sidebar.jsx";
import UploadBox from "./UploadBox.jsx";

const CertificationsPage = () => {
  const placeholder = "Optional:Upload an image of the certificate";
  return (
    <div className="personal-info-page">
      <Header />
      <Sidebar />
      <main className="main flex flex-col p-5 pr-8 xl:pr-24 xl:p-10 gap-2.5">
        <button className="border-2 border-[#1ABCFE] text-[#1ABCFE] px-3 py-1 rounded-lg font-inter self-end">
          Preview
        </button>
        <section>
          <div className="text-center sm:text-left mb-10">
            <h2 className="font-semibold text-xl md:text-2xl  lg:text-3xl xl:text-4xl mb-2.5">
              Certifications
            </h2>
            <p className="font-inter text-sm">
              Showcase your certificate, and confirm your industry credentials
            </p>
          </div>
          <div>
            <form
              action=""
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10"
            >
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="certification">Certification</label>
                <input
                  type="text"
                  placeholder="E.g. certification in quality assurance"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 w-full"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="issuing-organization">
                  Issuing Organization
                </label>
                <input
                  type="text"
                  placeholder="Enter the certificate body"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="date-earned">Date Earned</label>
                <input
                  type="date"
                  placeholder="Enter with country code e.g +234"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5"
                />
              </div>
              <div className="flex flex-col gap-2.5 col-span-full">
                <label htmlFor="credential-url">Credential ID/URL</label>
                <input
                  type="text"
                  placeholder="Optional: Enter credential ID/URL for verification"
                  className="border-2 border-[#D3D7DD] rounded-xl px-2 py-3 lg:rounded-3xl lg:px-4 lg:py-5 w-full"
                />
              </div>
              <div className="flex flex-col gap-2.5 col-span-full ">
                <label htmlFor="images">Upload Certification</label>
                <UploadBox placeholder={placeholder} />
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 mt-20">
            <Link to="/dashboard/skills">
              <button className="border-2 rounded-xl border-[#1ABCFE] text-[#1ABCFE] py-2 w-full">
                Back
              </button>
            </Link>
            <button className="border-2 rounded-xl border-[#1ABCFE] bg-[#1ABCFE] text-white py-2">
              Next: Others
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CertificationsPage;
