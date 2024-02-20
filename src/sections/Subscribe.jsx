import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] justify-center lg:max-w-md font-palanquin font-bold'>
        Send an application
        and be part of us!
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='isatech@isatu.edu.ph' 
        className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Send email' fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe