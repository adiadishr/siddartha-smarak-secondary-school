import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Button
} from "@/components/ui/button"
import { PiStudentFill } from "react-icons/pi";
import { PhoneCallIcon } from "lucide-react";



const AdmissionDrawer = ({ place }) => {
    return (
        <Drawer className='overflow-y-scroll'>
            {place === 'contact' ?
                <DrawerTrigger id='admissionButton' className='flex items-center justify-center px-4 py-[2px] text-white duration-300 border-2 border-transparent bg-sky-800/80 hover:bg-sky-800/60 rounded-xl'><PhoneCallIcon className="mr-3 size-4" />Contact</DrawerTrigger> :
                place === 'mobileNav' ?
                    <DrawerTrigger id='admissionButton' className='flex justify-end pt-4 duration-300 hover:text-white text-stone-200'>
                        <div className="flex px-4 py-2 duration-300 bg-sky-800/80 rounded-xl w-max h-max hover:ring-2 ring-sky-400/50">
                            <PiStudentFill className="mr-2 size-6" />Admission
                        </div>
                    </DrawerTrigger> :
                    <DrawerTrigger id='admissionButton' className='px-4 py-[10px] text-white bg-orange-500 border-2 border-transparent rounded-xl hover:opacity-80 duration-300 flex items-center justify-center'><PiStudentFill className="mr-2 size-6" />Admissions</DrawerTrigger>
            }
            <DrawerContent className='md:px-[5%] max-h-[90vh] overflow-y-scroll'>
                <DrawerHeader>
                    <DrawerTitle className='text-2xl/[110%] text-sky-800 font-merriwether'>Interested in building your future with us?</DrawerTitle>
                    <DrawerDescription className='text-base font-manrope text-stone-400'>Fill up this form, and we'll contact you ASAP regarding admission and joining us!</DrawerDescription>
                </DrawerHeader>

                <DrawerFooter>
                    <Button className=' bg-sky-800/80 hover:bg-sky-800/60'>Submit</Button>
                    <DrawerClose className="flex items-center ">
                        <Button className="w-full" variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default AdmissionDrawer