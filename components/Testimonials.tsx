export default function Testimonials() {
  const testimonials = [
    {
      body: "Chương trình học rất thực tế, giảng viên nhiệt tình hỗ trợ. Tôi đã tìm được việc làm ngay sau khi tốt nghiệp.",
      author: {
        name: "Lê Minh Tuấn",
        handle: "Software Engineer @ VNG",
        imageUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
      },
    },
    {
      body: "Lộ trình học rõ ràng, giúp tôi tiết kiệm rất nhiều thời gian tự mày mò. Rất đáng đồng tiền bát gạo.",
      author: {
        name: "Phạm Thu Hà",
        handle: "Frontend Dev @ Viettel",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    // More testimonials...
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">Học viên nói gì</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cảm hứng từ hành trình học tập
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
             <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>“Khóa học UX/UI Design đã giúp tôi chuyển ngành thành công. Cảm ơn đội ngũ OnSchool rất nhiều!”</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">N</div>
                    <div>
                      <div className="font-semibold text-gray-900">Nguyễn Hoài Nam</div>
                      <div className="text-gray-600">UX Designer @ Momo</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
