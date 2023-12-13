import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Faq = () => {
    const [open, setOpen] = React.useState(1);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="mx-auto lg:max-w-[600px] p-1">
           <h1 className="text-4xl mb-4 text-center font-bold  ">FAQs</h1>
           <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}> What is RENTALPLACE Corporation? </AccordionHeader>
        <AccordionBody>
        RENTALPLACE Corporation is the first dedicated rental portal in Bangladesh and expat accommodation provider. It’s a platform where tenant can get his required residential, furnished accommodation or office spaces within his preferred areas, time frame & budget. By the by property owner rent out his space without any hassle. Our objective is very clear ‘make simple and hassle free’.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader className="mt-2 mb-2"  onClick={() => handleOpen(2)}>
        How do I place my rental requirements? 
        </AccordionHeader>
        <AccordionBody>
        Very simple…. just visit our web portal, search properties in your required areas and place it through whatsapp, email or direct call. Recently our tech team introduce ‘Rental query form’ for tenants, just fill up and submit. Our dedicated rental agent will get back as early as possible and serve your required properties.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Will RENTALPLACE Corporation send me a soft copy of the rental agreement? 
        </AccordionHeader>
        <AccordionBody>
        Without check back from the tenant side RENTS Corporation team never do proceed any rental agreement with property owner.
        </AccordionBody>
      </Accordion>
 
        </div>
    );
};

export default Faq;