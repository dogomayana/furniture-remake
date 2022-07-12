import Image from 'next/image';
import React from 'react';

const Main = () => {
    return (
        <>
        <main className='relative p-4 bg-gradient-to-b from-amber-500 to-amber-300 h-96 md:h-[470px] lg:h-[470px] w-full'>
            <div className='relative container flex justify-center'>
                <span className='w-full md:w-[700px] lg:w-[700px] mx-auto text-center mt-64 md:mt-60'>
                <Image src="/couch.png" height={200} width={500} alt="couch" layout='responsive'/>
                 </span>
            </div>
                <span className='absolute text-center inset-x-0 top-[75px] md:inset-x-0 md:top-[160px] lg:inset-x-0 lg:top-[163px]'>
                <Image src="/app.svg" height={350} width={180} alt="couch"/>
                </span>

            <div className='mt-8 flex justify-center'>
                <p className='bg-amber-500 flex text-center p-4 text-base font-semibold rounded-md hover:bg-pink-700 hover:text-white'>
                    <span className='mx-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </span>
                    <span className='ml-2'>
                        Download the App
                    </span>
                </p>
            </div>

            <div className='pt-8 grid justify-items-center md:grid-cols-3 lg:grid-cols-3 grid-cols-1 mb-16 gap-4 bg-white md:mt-12 lg:mt-12 mt-10'>
                <div className='container text-center'>
                    <div className='w-20 mx-auto border-solid border-8 rounded-full p-4 border-amber-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                    </div>
                    <div className='p-4'>
                    <h1 className="text-lg font-bold mb-2">Safe</h1>
                    <p className="text-base md:text-lg lg:text-lg text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid in iusto quos deleniti, nam architecto.</p>
                    </div>
                </div>

                <div className=' container text-center'>
                    <div className='w-20 mx-auto border-solid border-8 rounded-full p-4 border-amber-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='p-4'>
                        <h1 className="text-lg font-bold mb-2">Easy Payment</h1>
                        <p className="text-base md:text-lg lg:text-lg text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid in iusto quos deleniti, nam architecto.</p>
                    </div>
                </div>

                <div className=' container text-center'>
                    <div className='w-20 mx-auto border-solid border-8 rounded-full p-4 border-amber-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className='p-4'>
                        <h1 className="text-lg font-bold mb-2">Anytime</h1>
                        <p className="text-base md:text-lg lg:text-lg text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid in iusto quos deleniti, nam architecto.</p>
                    </div>
                 </div>
            </div>

            <div className='partners bg-black w-full p-4 md:pb-8 lg:pb-8'>
                <h1 className='text-amber-400 text-center text-2xl font-bold'>Our Partners</h1>
                <p className=' mt-2 text-white text-center text-base md:text-lg lg:text-lg'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, vitae?</p>
                <div className='lg:max-w-2xl md:max-w-2xl mx-auto w-full'>    
                    <div className='mt-8 px-4 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-x-8 gap-y-4'>
                        <div className='bg-white rounded-md text-center'>    <Image src='/spotify.svg' height={120} width={120} alt='image' layout='responsive'/> </div>
                        <div className='bg-white rounded-md text-center'>    <Image src='/disney.svg' height={120} width={120} alt='image' layout='responsive'/> </div>
                        <div className='bg-white rounded-md text-center'>    <Image src='/cisco.svg' height={120} width={120} alt='image' layout='responsive'/> </div>
                        <div className='bg-white rounded-md text-center'>    <Image src='/deezer.svg' height={120} width={120} alt='image' layout='responsive'/></div>
                        <div className='bg-white rounded-md text-center'>    <Image src='/hp.svg' height={120} width={120}  alt='image' layout='responsive'/> </div>
                        <div className='bg-white rounded-md text-center'>    <Image src='/verizon.svg' height={120} width={120} alt='image' layout='responsive'/></div>
                        <div className='bg-white rounded-md text-center'>    <Image src='/texas.svg' height={120} width={120} alt='image' layout='responsive'/></div>
                    </div>
                </div>
            </div>

            <div className="container-sm relative p-4 md:w-10/12 lg:w-10/12 mt-4 md:flex lg:flex mx-auto bg-white">
                <div className='md:w-6/12 md:my-auto lg:w-6/12 lg:my-auto'>
                    <h1 className='text-black text-2xl md:text-3xl md:text-3xl font-bold'>Relax, You&rsquo;re Home!</h1>
                    <p className='text-black text-base mt-2 md:text-lg md:text-lg'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni neque dolore quisquam corporis repudiandae?</p>
                    <p className='text-black text-base mt-2 md:text-lg md:text-lg'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni neque dolore quisquam corporis repudiandae?</p>
                    <p className='px-4 py-2 text-base md:text-lg lg:text-lg mt-4 inline-block rounded-md font-semibold bg-amber-500 hover:bg-pink-700 hover:text-white'>Sign up</p>
                </div>
                <div className='mt-4 relative mx-auto md:w-6/12 lg:w-6/12'>
                    <span>
                        <Image src="/table.png" alt='table' layout="responsive" width={100} height={130}/>
                    </span>
                </div>
            </div>

            <div className='mt-8 container-sm mx-auto md:w-10/12 md:flex lg:w-10/12 lg:flex'>
                <div className='text-center p-4 md:w-6/12 lg:w-6/12 bg-white '>
                    <span>
                        <Image src='/lamp.png' alt='lamp' height={220} width={170}/>
                    </span>
                    <p className='mt-4 w-[250px] mx-auto inline-block bg-amber-500 flex justify-content-center p-4 text-base font-semibold rounded-md hover:bg-pink-700 hover:text-white'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </span>
                        <span className='mx-auto text-lg hover:bg-pink-700 hover:text-white'>
                            Download the App
                        </span>
                    </p>
                </div>
                <div className='p-2 md:w-6/12'>
                    <form>
                        <div className='p-3 border-solid border-4 border-black rounded'>
                            <h1 className='font-semibold text-xl md:text-2xl lg:text-2xl text-black'>Contact Us</h1>
                            <p className='text-lg mt-4 font-semibold md:text-lg lg:text-lg'>
                                <label htmlFor="enter your name" className='block '>Name</label>
                                <input type='text' className="p-2 w-full border-solid border-2 border-amber-500 rounded focus:border-sky-500 focus:ring-sky-500 focus:ring-1" />
                            </p>
                            <p className='mt-4 text-lg font-semibold md:text-lg lg:text-lg'>
                                <label htmlFor="Mail" className='block '>Mail</label>
                                <input type='text' className="p-2 w-full border-solid border-2 border-amber-500 rounded focus:border-sky-500 focus:ring-sky-500 focus:ring-1" />
                            </p>
                            <textarea className='p-3 mt-4 w-full h-[100px] border-solid border-2 border-amber-500 focus:border-sky-500 focus:ring-sky-500 focus:ring-1' placeholder='Enter message' type='text'></textarea>
                        </div>
                    </form>

                </div>
            </div>
        </main>
        </>
    );
}

export default Main;
