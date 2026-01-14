import React from 'react';
import { BrowserIcon, CertificateIcon, BarChartIcon, ClockIcon } from './CourseIcons';

interface MetadataRowProps {
  icon: 'browser' | 'certificate' | 'chart' | 'clock';
  text: string;
  align?: 'left' | 'right';
  width?: string;
}

const iconMap = {
  browser: BrowserIcon,
  certificate: CertificateIcon,
  chart: BarChartIcon,
  clock: ClockIcon
};

export const MetadataRow: React.FC<MetadataRowProps> = ({
  icon,
  text,
  align = 'left',
  width
}) => {
  const IconComponent = iconMap[icon];

  return (
    <div className={`flex gap-3 items-center ${align === 'right' ? 'justify-end' : ''}`}>
      <div className="flex relative justify-center items-center w-8 h-8">
        <div className="box-border flex shrink-0 justify-center items-center p-2 w-8 h-8 bg-white rounded-md border border-gray-200 border-solid shadow-sm">
          <IconComponent />
        </div>
      </div>
      <div className={`flex flex-col gap-2 justify-center ${align === 'right' ? 'items-end' : 'items-start'} ${width || ''}`}>
        <div className="flex flex-col justify-center items-start pt-1">
          <div className="flex items-center pb-1">
            <div className={`text-sm font-medium leading-5 text-gray-900 max-sm:text-sm max-sm:leading-5 ${align === 'right' ? 'text-right' : ''}`}>
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CourseMetadataProps {
  courseCount?: string;
  hasCertificate?: boolean;
  level: string;
  duration: string;
}

export const CourseMetadata: React.FC<CourseMetadataProps> = ({
  courseCount,
  hasCertificate,
  level,
  duration
}) => {
  return (
    <div className="flex flex-col gap-2 items-start self-stretch">
      {courseCount && (
        <>
          <MetadataRow icon="browser" text={courseCount} />
          <div className="self-stretch w-full h-px bg-gray-200" />
        </>
      )}

      {hasCertificate && (
        <>
          <MetadataRow icon="certificate" text="Đi kèm khoá học" />
          <div className="self-stretch w-full h-px bg-gray-200" />
        </>
      )}

      <div className="flex justify-between items-center self-stretch bottom-[row]">
        <MetadataRow icon="chart" text={level} />
        <MetadataRow icon="clock" text={duration} align="right" width="w-10" />
      </div>
    </div>
  );
};
