import OpenAccount from "../../OpenAccount";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import Prices from "./Prices";

export default function PricingPage() {
    return <div>
        <Hero />
        <Prices/>
        <OpenAccount />
        <Brokerage/>
    </div>
}