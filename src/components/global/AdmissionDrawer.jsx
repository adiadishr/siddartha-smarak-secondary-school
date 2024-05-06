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



const AdmissionDrawer = () => {
    return (
        <Drawer>
            <DrawerTrigger id='admissionButton' className='px-4 py-[10px] text-white bg-orange-500 border-2 border-transparent rounded-xl hover:opacity-80 duration-300 flex items-center justify-center'><PiStudentFill className="mr-2 size-6" />Admissions</DrawerTrigger>
            <DrawerContent className='md:px-[5%]'>
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