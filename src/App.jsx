import HeroSection from "./Hero-Section/heroSection.jsx";
import HeroSection1 from "./Hero-Section1/Hero-Section1.jsx";
import Navbar from "./Navbar/navbar.jsx";
import Banner from "./banner/banner.jsx";
import FormSection from "./FormSection/FormSection.jsx";
import Form from "./form/form.jsx";
import "./main.css"
import Fotter from "./fotter/fotter.jsx";



function App() {
  return (

    <>
    <div>

  <Navbar />
 <HeroSection/>
<Banner/>
<HeroSection1/>
<FormSection/>
<Fotter />

    </div>
  </>
    )

}

export default App;
