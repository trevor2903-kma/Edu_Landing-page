export default function Methodology() {
  const steps = [
    {
      id: "F",
      title: "Foundation",
      description: "Xây dựng nền tảng vững chắc với kiến thức cốt lõi.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "M",
      title: "Mastery",
      description: "Làm chủ kỹ năng chuyên sâu qua thực hành.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: "E",
      title: "Experience",
      description: "Trải nghiệm dự án thực tế doanh nghiệp.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: "G",
      title: "Growth",
      description: "Phát triển sự nghiệp và mở rộng cơ hội.",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Quy trình đào tạo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Phương pháp F.M.E.G độc quyền
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lộ trình học tập được thiết kế khoa học giúp học viên đi từ con số 0 đến chuyên gia.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${step.color}`}>
                  {step.id}
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {step.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
