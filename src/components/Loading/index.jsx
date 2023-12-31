import React, { useEffect, useState } from "react";
import Img from "../../assets/img/logo/loder.png";

export default () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    const time = setTimeout(() => {
      setLoad(false);
    }, 1700);
    // return clearTimeout(time);
  }, []);
  if (load) {
    return (
      <div className="absolute w-full h-screen top-0 left-0 ">
        <div id="preloader-active">
          <div class="preloader flex items-center justify-center">
            <div class="preloader-inner relative">
              <div class="preloader-circle"></div>
              <div class="preloader-img pere-text">
                <div>
                  <img src={Img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
