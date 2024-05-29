import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { PiStudentFill } from "react-icons/pi";
import { PhoneCallIcon } from "lucide-react";

const AdmissionDrawer = ({ place }) => {
  return (
    <Drawer className="overflow-y-scroll">
      {place === "contact" ? (
        <DrawerTrigger
          id="admissionButton"
          className="flex items-center justify-center px-4 py-[2px] text-white duration-300 border-2 border-transparent bg-sky-800/80 hover:bg-sky-800/60 rounded-xl"
        >
          <PhoneCallIcon className="mr-3 size-4" />
          Contact
        </DrawerTrigger>
      ) : place === "mobileNav" ? (
        <DrawerTrigger
          id="admissionButton"
          className="flex justify-end pt-4 duration-300 hover:text-white text-stone-200"
        >
          <div className="flex px-4 py-2 duration-300 bg-sky-700/80 hover:bg-sky-500/50 rounded-xl w-max h-max active:ring-2 ring-sky-400/50">
            <PiStudentFill className="mr-2 size-6" />
            Admission
          </div>
        </DrawerTrigger>
      ) : (
        <DrawerTrigger
          id="admissionButton"
          className="px-4 py-[10px] text-white bg-orange-500 border-2 border-transparent rounded-xl hover:opacity-80 duration-300 flex items-center justify-center"
        >
          <PiStudentFill className="mr-2 size-6" />
          Admissions
        </DrawerTrigger>
      )}
      <DrawerContent className="px-[5%] h-[90vh] ">
        <DrawerHeader className="px-0 mx-0">
          <DrawerTitle className="text-2xl/[110%] text-sky-800 font-merriwether">
            Interested in building your future with us?
          </DrawerTitle>
          <DrawerDescription className="text-base font-manrope text-stone-400">
            Fill up this form, and we'll contact you ASAP regarding admission
            and joining us!
          </DrawerDescription>
        </DrawerHeader>
        <hr />
        <form className="flex flex-col justify-between h-full pb-8 md:h-full md:pb-0">
          <section className="flex flex-col gap-4 mt-4 mb-8 sm:mb-12">
            <div className="flex flex-col justify-between gap-4 md:gap-8 md:flex-row">
              <div className="flex flex-col w-full">
                <p className="flex pb-2 text-lg font-merriwether text-sky-900">
                  Name of Guardian:
                </p>
                <input
                  placeholder="Enter Guardian's Name"
                  className="w-full p-1 border-2 md:p-2 font-manrope text-neutral-700"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full">
                <p className="flex pb-2 text-lg font-merriwether text-sky-900">
                  Name of Student:
                </p>
                <input
                  placeholder="Enter Student's Name"
                  className="w-full p-1 border-2 md:p-2 font-manrope text-neutral-700"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 md:gap-8 md:flex-row">
              <div className="flex flex-col w-full">
                <p className="flex pb-2 text-lg font-merriwether text-sky-900">
                  Class:
                </p>
                <select className="w-full p-1 border-2 md:p-2 font-manrope text-neutral-700">
                  <option value="" disabled selected>
                    Choose your class:
                  </option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 10">Class 11</option>
                  <option value="Class 10">Class 12</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <p className="flex pb-2 text-lg font-merriwether text-sky-900">
                  Contact Details:
                </p>
                <input
                  className="w-full p-1 border-2 md:p-2 font-manrope text-neutral-700"
                  placeholder="Enter your phone number"
                  type="text"
                />
              </div>
            </div>
          </section>
          <input
            type="submit"
            className="py-2 font-semibold text-white rounded-md cursor-pointer bg-sky-800/80 hover:bg-sky-800/60"
          />
        </form>
        <DrawerFooter className="hidden px-0 mx-0 md:flex">
          <DrawerClose className="flex items-center ">
            <Button className="w-full" variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AdmissionDrawer;
