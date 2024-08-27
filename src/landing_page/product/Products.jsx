import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Product() {
    return (
        <div>
            <Hero />
            <LeftSection imgUrl="media/images/products-kite.png" prooductName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="tryDemo" learnMore="LearnMore"/>
            
            <RightSection imgUrl="media/images/products-console.png" prooductName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="tryDemo" learnMore="LearnMore"/>
           
            <LeftSection imgUrl="media/images/products-kite.png" prooductName="Kite Connect API" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="tryDemo" learnMore="LearnMore"/>

            <RightSection imgUrl="media/images/products-coin.png" prooductName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="tryDemo" learnMore="LearnMore"/>

            <LeftSection imgUrl="media/images/varsity-products.png" prooductName="Varsity mobile" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="tryDemo" learnMore="LearnMore"/>

        </div>
    )
}