   
 const Faq = () => {
    return (
        <div>
            <h2 className="text-4xl mt-4 mb-4 text-center">FAQs</h2>
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What is RENTALPLACE Corporation? 
    </div>
  <div className="collapse-content"> 
    <p>RENTALPLACE Corporation is the first dedicated rental portal in Bangladesh and expat accommodation provider. It’s a platform where tenant can get his required residential, furnished accommodation or office spaces within his preferred areas, time frame & budget. By the by property owner rent out his space without any hassle. Our objective is very clear ‘make simple and hassle free’.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What services available on RENTALPLACE Corporation? 
    </div>
  <div className="collapse-content"> 
    <p>We provide all rental solution, e.i Residential apartment, Furnished accommodation, Service apartment, Commercial Office space and full building searching, arrange property viewing, price negotiation and helps to prepare rental agreement for owner and tenant.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Which area RENTALPLACE Corporation cover in Dhaka
    </div>
  <div className="collapse-content"> 
    <p>

Right now RENTALPLACE Corporation team cover area Gulshan Zone.
</p>
  </div>
</div>
        </div>
    );
 };
 
 export default Faq;