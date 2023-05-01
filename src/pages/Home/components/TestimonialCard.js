export const TestimonialCard = ({testimonialEle, image}) => {

    const {name, testimonial} = testimonialEle;
  return (
    <div className="bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-6">
        <p className="text-gray-600 dark:text-white">
            <span className="text-lg font-bold text-logo pl-2">
                “
            </span>
                {testimonial}
            <span className="text-lg font-bold text-logo pr-2">
                ”
            </span>
        </p>
        <div className="flex items-center mt-4">
            <span className="relative block">
                <img alt="profile" src={image} className="mx-auto object-cover rounded-full h-10 w-10 "/>
            </span>
            <div className="flex flex-col justify-between ml-2">
                <span className="text-base font-semibold text-logo">
                    {name}
                </span>
            </div>
        </div>
    </div>
  )
}
