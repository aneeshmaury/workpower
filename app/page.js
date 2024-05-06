import Image from "next/image";
import "./globals.css";
import { MdOutlineHorizontalRule } from "react-icons/md";

export default function Home() {
  return (
    <div className=" px-[15px] mt-6">
    <p className="font-bold text-[17.5px] mb-2">Complaint</p>
       <div className="main px-[15px] py-[15px] mt-4  custom-shadow">
     <div className="flex justify-between">
      <div className='tracking-wide'>Transaction</div>
      <div className='text-2xl mt-2'><MdOutlineHorizontalRule/></div>
     </div>
      

<div class="max-w-2xl mx-auto">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">Nature of transaction</label>
      <select id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
      <option selected>--Select Nature of transaction--</option>
      <option value="US">Person to person</option>
      <option value="CA">Person to merchent</option>
     
  </select>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please select the issue from drop down list
  
</p>

</div>


    </div>
    </div>
   
  );
}
