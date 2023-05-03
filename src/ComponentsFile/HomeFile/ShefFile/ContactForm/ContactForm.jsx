import { Button } from 'flowbite-react';
import './Contact.css'

const ContacthtmlForm = () => {
    return (
        <div className='pb-10'>
            <div className="container card-0 justify-center">
                <h2 className=' text-center md:-mt-10 md:pb-20 text-xl '>Contact Us</h2>
                <div className="card-body px-sm-4 px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="text-center md:text-left ps-4">
                            <h3 className="font-bold text-xl">Cooks Forever </h3>
                            <p className="mt-4">building more sustainable and equitable food systems through a farm-to-institution model. provide the next generation of institutional cooks and program staff with knowledge. Food Technical Assistance. Sign up now. Food Business Course. Government Funded Meals.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" id="first-name" placeholder="" />
                                </div>
                                <div className="">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" id="last-name" placeholder="" />
                                </div>
                                <div className="">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" id="email" placeholder="" />
                                </div>
                                <div className="">
                                    <label htmlFor="Mobile-Number" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" id="Mobile-Number" placeholder="" />
                                </div>
                                <div className="">
                                    <label htmlFor="Evaluate Budget" className="block text-sm font-medium text-gray-700">Address</label>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" id="Evaluate Budget" placeholder="" />
                                </div>
                                <div className="">
                                    <label htmlFor="Company-Name" className="block text-sm font-medium text-gray-700">Current Address</label>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" id="Company-Name" placeholder="" />
                                </div>
                                <div className="">

                                    <Button>submit</Button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContacthtmlForm; 