import { TestimonialCard } from "./TestimonialCard";
import profile1 from "../../../assets/profiles/profile1.avif";
import profile2 from "../../../assets/profiles/profile2.avif";
import profile3 from "../../../assets/profiles/profile3.avif";
import profile4 from "../../../assets/profiles/profile4.avif";

export const TestimonialList = () => {

    const testimonials = [
        {
          "id": 1,
          "name": "John Doe",
          "testimonial": "I was looking to upskill in digital marketing, and Course Cloud had the perfect course for me. The content was comprehensive and up-to-date, and the instructors were knowledgeable and engaging. I highly recommend this platform to anyone looking to improve their skills!"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "testimonial": "I'm really impressed with the quality of courses offered by Course Cloud. The platform is user-friendly and the courses are well-structured and easy to follow."
        },
        {
          "id": 3,
          "name": "David Lee",
          "testimonial": "Course Cloud has been a game-changer for my career. I was able to learn new skills and gain confidence in my abilities, which has helped me progress in my job. The support team is also very helpful and responsive, which makes the learning experience stress-free."
        },
        {    "id": 4,    
            "testimonial": "I had a great experience with Course Cloud. The course I took was informative and engaging, and I was able to learn at my own pace.",    
            "name": "Sarah Johnson"  
        },
        {    "id": 5,    
            "testimonial": "I highly recommend Course Cloud to anyone looking to learn new skills. The platform is easy to use and the courses are well-designed and engaging. ",    
            "name": "Sylvia Day"  
        }
      ]      
    const images = [profile1, profile2, profile3, profile4, profile2];

  return (
    <div className="flex flex-col gap-4 mt-16 mb-20">
        <span className="flex justify-center items-center">
            <h1 className="text-3xl font-semibold dark:text-white mb-8">Hear what others are saying</h1>
        </span>
        <div className="flex flex-wrap gap-4 justify-between">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonialEle={testimonial} image={images[index]}/>
            ))}
        </div>
    </div>
  )
}
