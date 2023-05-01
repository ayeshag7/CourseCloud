import { FaqUnit } from "./FaqUnit"

export const FAQ = () => {
    const faqs = [  
        {    "id": 1,    "question": "What types of courses does Course Cloud offer?",    "answer": "Course Cloud offers a wide variety of courses in different categories such as technology, business, marketing, design, and more. You can explore our course catalog to find the one that best suits your needs and interests."  },  
        {    "id": 2,    "question": "How long do I have access to a course once I enroll?",    "answer": "Once you enroll in a course, you will have lifetime access to it. This means you can go back and review the content as many times as you want, at your own pace."  },  
        {    "id": 3,    "question": "Are the courses interactive or pre-recorded videos?",    "answer": "Course Cloud offers a mix of interactive and pre-recorded video courses. Our interactive courses include live sessions with instructors and other students, where you can ask questions and collaborate with others."  },  
        {    "id": 4,    "question": "What if I am not satisfied with a course I purchased?",    "answer": "We want all our students to be satisfied with their purchases. If you are not satisfied with a course, we offer a 30-day money-back guarantee. Simply contact our customer support team within 30 days of purchase to request a refund."  }
    ]

  return (
    <section className="my-12 p-6 border rounded-md dark:border-slate-700 shadow-md">
      <h1 className="text-3xl text-center font-semibold dark:text-white mb-12">Got something on your mind?</h1>
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <FaqUnit key={faq.id} faq={faq}/>
          ))}
        </div>
    </section>
  )
}
