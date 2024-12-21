import { useRef } from "react";
import Header from "../components/header";
import ContactUs from "../components/home/constactUs";
import CoursesList from "../components/home/coursesList";
import FeatureSection from "../components/home/featureSection";
import FeatureSection2 from "../components/home/featureSection2";
import HeroSection from "../components/home/herosection";
import SliderSection from "../components/home/sliderSection";
import HeroSection2 from "../components/home/heroSection2";
import CoursesOffer from "../components/home/coursesOffer";
import VideoPlayer from "../components/home/videoPlayer";

const Home: React.FC = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const coursesRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);


    const handleScrollTo = (section: string) => {
        if (section === "contact" && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (section === "courses" && coursesRef.current) {
            coursesRef.current.scrollIntoView({ behavior: "smooth" });
        }
     else if (section === "about" && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    };

    return (
        <div className="home ">
            <Header onScrollTo={handleScrollTo} />
            <HeroSection  />
            <div ref={aboutRef} >

            <HeroSection2 />
            </div>
            <VideoPlayer/>
            <CoursesOffer />
            <FeatureSection />
            <FeatureSection2 />
            <div ref={coursesRef}>
                <CoursesList />
            </div>
            <SliderSection />
            <div ref={contactRef}>
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;
