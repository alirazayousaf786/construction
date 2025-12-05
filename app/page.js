
import Hero from "@/components/hero"
import PartnerShip from "@/components/partnerShip"
import Card from  "@/components/card"
import PricingCard from "@/components/pricingCard"
import FormSubmit from "@/components/submitForm"
import Blog from "@/components/blog"
import Accordion from "@/components/accordion"
import Service from "@/components/service"
import Team from "@/components/team"
import Testimonial from "@/components/testimonial"
export default function Home() {
  return (
    <>
    <Hero />
    <PartnerShip />
   <Card />
  <Service  />
   <PricingCard />
  <Team />
   <FormSubmit />
   <Testimonial />
   <Blog />
   <Accordion />
    </>
  );
}
