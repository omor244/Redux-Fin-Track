import Hero from "../Modules/Home/Hero";
import HowItWorks from "../Modules/Home/HowItWorks";
import MetricsSection from "../Modules/Home/MetricsSection";
import Pricing from "../Modules/Home/Pricing";
import TipsSection from "../Modules/Home/TipsSection";
import WhyChoose from "../Modules/Home/WhyChoose";


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