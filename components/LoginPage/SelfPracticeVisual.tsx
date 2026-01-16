const SelfPracticeVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    {/* Background Shapes Container */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%] max-h-[380px] max-w-[380px] z-[1] pointer-events-none opacity-80">
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
        <svg
          viewBox="0 0 437 534"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full scale-110"
        >
          {" "}
          <path
            d="M373.184 450.694C366.446 490.488 363.077 510.385 349.103 522.193C335.128 534 314.948 534 274.588 534H100C52.8595 534 29.2893 534 14.6447 519.355C0 504.711 0 481.14 0 434V118.303C0 63.3984 0 35.9462 17.7222 20.9658C35.4443 5.98547 62.5133 10.5566 116.651 19.699L338.353 57.138C384.854 64.9906 408.104 68.9169 420.106 85.8035C432.108 102.69 428.171 125.939 420.298 172.436L373.184 450.694Z"
            fill="#0072BC"
          ></path>{" "}
        </svg>
      </div>
      <div className="absolute top-[20%] -left-[10%] h-[80%] w-[80%] flex items-center justify-center">
        <svg
          viewBox="0 0 330 374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {" "}
          <path
            d="M43.8645 82.0408C51.0256 42.8148 54.6062 23.2018 68.5167 11.6009C82.4272 0 102.364 0 142.239 0H230C277.14 0 300.711 0 315.355 14.6447C330 29.2893 330 52.8595 330 100V257.119C330 311.429 330 338.584 312.505 353.552C295.01 368.52 268.182 364.318 214.526 355.914L101.318 338.183C53.6609 330.719 29.8322 326.987 17.6276 309.798C5.42295 292.61 9.75457 268.883 18.4178 221.429L43.8645 82.0408Z"
            fill="#0C9AEB"
          ></path>{" "}
        </svg>
      </div>
    </div>

    {/* Sparkle Icon */}
    <div className="absolute right-0 top-8 z-[20] hidden h-14 w-14 md:block">
      <svg viewBox="0 0 84 84" fill="none" className="h-full w-full">
        <circle cx="42" cy="42" r="42" fill="#0C9AEB" />
      </svg>
    </div>

    {/* Checkmark Image */}
    <div className="relative z-10 h-[85%] w-[90%] flex items-center justify-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b1715b19acc5c8ecf188603a0cb3a5862f659ccf?width=1084"
        alt="Correct checkmark illustration"
        className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
      />
    </div>
  </div>
);

export default SelfPracticeVisual;
