'use client';
export function ContactSection(){return <section id='contact' className='py-24 relative overflow-hidden' style={{background:'linear-gradient(135deg,#f5f0e8,#fff)'}}>
<div className='absolute top-0 left-20 w-72 h-72 rounded-full blur-3xl bg-orange-200/30'></div>
<div className='max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>
<div><span className='bg-green-100 text-green-700 px-4 py-2 rounded-full'>GET IN TOUCH</span><h2 className='text-5xl font-bold mt-6'>Let's build something great</h2><p className='mt-4 text-gray-600'>Contact our team for a demo.</p></div>
<div className='bg-white p-8 rounded-3xl shadow-lg'><input className='w-full p-3 rounded-xl bg-gray-50 mb-3' placeholder='Name'/><input className='w-full p-3 rounded-xl bg-gray-50 mb-3' placeholder='Email'/><textarea className='w-full p-3 rounded-xl bg-gray-50 mb-3 min-h-[120px]' placeholder='Message'></textarea><button className='w-full h-12 rounded-full bg-orange-500 text-white'>Send Message</button></div>
</div></section>}