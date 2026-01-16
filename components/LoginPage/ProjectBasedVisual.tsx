import { TriangleDecorations } from "@/components/HomePage/methodology/project-based/DecorationIcons";
import BlueBackgroundSvg from "@/components/shared-components/BlueBackgroundSvg";

const ProjectBasedVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    {/* Blue Background SVG */}
    <BlueBackgroundSvg className="absolute top-[40%] left-[calc(50%-100px)] -translate-x-1/2 -translate-y-1/2 h-[95%] w-[95%] max-h-[320px] max-w-[320px] z-[2]"/>

    {/* Decoration */}
    <TriangleDecorations
      top="top-[35px]"
      right="right-0"
      left=""
      bottom=""
      width="w-4"
      height="h-4"
      gap="gap-3"
      className="z-[3]"
      color="#FFFFFF"
    />

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
