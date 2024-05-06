import Image from "next/image";
import "./globals.css";
import { MdOutlineHorizontalRule } from "react-icons/md";

export default function Home() {
  return (
    <div className=" px-[15px] mt-6">
    <p className="font-bold text-[17.5px] mb-2">Complaint</p>
       <div className="main px-[15px] mt-4  custom-shadow">
       <div className="flex items-center justify-between">
    <div className='text-sm mr-4'>Transaction</div>
    <div className="text-xl"><MdOutlineHorizontalRule/></div>
</div>
      

<div class="max-w-2xl mx-auto">

<label for="countries" class="block text-[12.04px]  text-gray-400 dark:text-gray-400">Nature of transaction</label>
      <select id="countries" class=" border-b bg-transparent text-[14px]    block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
      <option selected>Select Nature of transaction</option>
      <option value="US">Person to person</option>
      <option value="CA">Person to merchent</option>
     
  </select>

<p class=" text-[12.04px] italic">Please select the issue from drop down list
  
</p>

</div>


    </div>
    </div>
   
  );
}
