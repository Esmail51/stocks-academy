import ContactUs from "../components/home/constactUs";
import CoursesList from "../components/home/coursesList";
import FeatureSection from "../components/home/featureSection";
import FeatureSection2 from "../components/home/featureSection2";
import HeroSection from "../components/home/herosection";
import SliderSection from "../components/home/sliderSection";

const Home: React.FC = () => {
    return (
        <div>
        <HeroSection />
        <FeatureSection />
        <FeatureSection2 />
        <CoursesList />
        <SliderSection />
        <ContactUs />
        </div>
    );
    }
export default Home;