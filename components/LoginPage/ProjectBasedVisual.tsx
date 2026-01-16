import { Triangle } from "lucide-react";

const ProjectBasedVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    {/* Blue Background SVG */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[95%] w-[95%] max-h-[320px] max-w-[320px] z-[2]">
      <svg
        viewBox="0 0 310 374"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full opacity-90"
      >
        <path
          d="M268.975 83.0971C262.167 43.3967 258.762 23.5465 244.798 11.7732C230.834 0 210.694 0 170.414 0H100C52.8596 0 29.2893 0 14.6447 14.6447C0 29.2893 0 52.8595 0 100V255.947C0 310.747 0 338.147 17.6824 353.125C35.3647 368.104 62.3917 363.598 116.446 354.585L210.903 338.837C257.599 331.051 280.947 327.159 292.984 310.222C305.021 293.285 301.021 269.955 293.019 223.296L268.975 83.0971Z"
          fill="#0072BC"
        />
      </svg>
    </div>

    {/* Decoration */}
    <div className="absolute right-0 top-10 z-[3] hidden md:block">
      <div className="flex gap-4">
        <Triangle size={20} fill="#E4E7EC" className="rotate-12 opacity-50" />
        <Triangle size={16} fill="#E4E7EC" className="-rotate-12 opacity-50" />
      </div>
    </div>

    {/* Dashboard Image */}
    <div className="relative z-[5] h-[85%] w-[90%] flex items-center justify-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f4871a0b48b7c9515394078156df909348cf6ca0?width=881"
        alt="Dashboard Analytics"
        className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
      />
    </div>
  </div>
);

export default ProjectBasedVisual;
