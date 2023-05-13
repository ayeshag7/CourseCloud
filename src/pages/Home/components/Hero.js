import heroImg from "../../../assets/hero.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-x-20 mt-8">
        <div className="my-5 lg:mx-0 mx-5">
            <h1 className="text-5xl md:text-6xl font-medium dark:text-white mb-4">Learn from the Best</h1>
            <p className="text-lg dark:text-white mb-6">Whether you're looking to build a new career, improve your current job prospects, or simply pursue a personal passion, we have the course for you. Plus, with our interactive platform and supportive community, you'll have all the resources you need to succeed. So why wait? Start your learning journey today and unlock your full potential.</p>
            <Link to="/products">
              <button className="border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-lg lg:text-xl bg-logo text-white">Explore Courses</button>
            </Link>
        </div>
        <div className="my-5 lg:mx-0 mx-2 max-w-lg lg:max-w-xl border border-gray-200 dark:border-gray-900 rounded-lg shadow">
            <img className="rounded-lg max-h-full" src={heroImg} alt="Hero" />
        </div>
    </section>
  )
}
