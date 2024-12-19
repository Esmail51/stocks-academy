import Header from "../components/header";
import ContactUs from "../components/home/constactUs";
import CoursesList from "../components/home/coursesList";
import FeatureSection from "../components/home/featureSection";
import FeatureSection2 from "../components/home/featureSection2";
import HeroSection from "../components/home/herosection";
import SliderSection from "../components/home/sliderSection";
import HeroSection2 from "../components/home/heroSection2";
import CoursesOffer from "../components/home/coursesOffer";


const Home: React.FC = () => {
    return (
        <div className="home">
        <Header />
        <HeroSection />
        <HeroSection2/>
        <CoursesOffer/>
        <FeatureSection />
        <FeatureSection2 />
        <CoursesList />
        <SliderSection />
        <ContactUs />
        </div>
    );
    }
export default Home;