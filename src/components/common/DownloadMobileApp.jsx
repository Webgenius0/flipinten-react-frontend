import React from "react";
import Container from "./Container";
import GooglePlayStore from "@/assets/googlePlay.png";
import AppStore from "@/assets/AppStore.png";
import DownloadMobileAppWomen from "@/assets/download-mobile-app-women.png";

export default function DownloadMobileApp() {
  return (
    <div className="w-full bg-white py-20">
      <Container>
        <div className="w-65/100 mx-auto flex items-center justify-between gap-10">
          <div className="w-1/2">
            <h3 className="text-4xl font-semibold leading-[54px]">
              Download Mobile app for better experience
            </h3>

            <div className="flex items-center gap-6 mt-10">
              <div className="w-full max-w-[130px]">
                <img
                  src={GooglePlayStore}
                  alt="Google Play Store"
                  className="w-full max-w-content"
                />
              </div>

              <div className="w-full max-w-[130px]">
                <img
                  src={AppStore}
                  alt="App Store"
                  className="w-full max-w-content"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src={DownloadMobileAppWomen}
              alt="not found"
              className="w-full max-w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
