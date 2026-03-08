import Hero from "../components/Modules/Home/Hero";
import HowItWorks from "../components/Modules/Home/HowItWorks";
import MetricsSection from "../components/Modules/Home/MetricsSection";
import Pricing from "../components/Modules/Home/Pricing";
import TipsSection from "../components/Modules/Home/TipsSection";
import WhyChoose from "../components/Modules/Home/WhyChoose";



const HomePage = () => {
    return (
        <div>
            <Hero />
            <TipsSection />
            <WhyChoose />
            <HowItWorks />
            <Pricing />
            <MetricsSection/>
        </div>
    );
};

export default HomePage;