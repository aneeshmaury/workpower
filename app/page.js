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

<div class="max-w-2xl mx-auto mt-4">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">issue</label>
      <select id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
      <option selected>--Select issue Type--</option>
      <option value="US">Fraudulent transaction</option>
      <option value="CA">Person to merchent</option>
     
  </select>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please select the issue from drop down list
  
</p>

</div>
<div class="max-w-2xl mx-auto mt-4">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">Comment</label>
      <div id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
     <input/>
     
  </div>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Provide brief about your issue. Not greater than 500 characters
  
</p>

</div>
<div class="max-w-2xl mx-auto mt-4">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">Transaction ID</label>
      <div id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
     <input/>
     
  </div>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please enter your transaction reference number. It starts with 1, 7, 8, 9 or 0
  
</p>

</div>

<div class="max-w-2xl mx-auto">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">Bank Name</label>
      <select id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
      <option selected>--Select Bank Name--</option>
      <option value="US">AU Small Finance Bank</option>
      <option value="CA">Person to merchent</option>
     
  </select>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please select the issue from drop down list
  
</p>
</div>
<div class="max-w-2xl mx-auto mt-4">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">UPI ID</label>
      <div id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
     <input/>
     
  </div>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please enter your UPI ID
  
</p>

</div>
<div class="max-w-2xl mx-auto mt-4">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">Amount</label>
      <div id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
     <input/>
     
  </div>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please capture rupee & paise separately in the box provided
  
</p>

</div>

<div class="max-w-2xl mx-auto mt-4">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">Date of Transaction</label>
      <div id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
     <input/>
     
  </div>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please use the calendar to select the date
  
</p>

</div>
<div class="max-w-2xl mx-auto mt-4">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">Email ID</label>
      <div id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
     <input/>
     
  </div>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please enter your mail ID
  
</p>

</div>
<div class="max-w-2xl mx-auto mt-4">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">Registered Mobile No</label>
      <div id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
     <input/>
     
  </div>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please enter your 10 digit mobile number. Do not prefix with +91 or 0
  
</p>

</div>
<div class="max-w-2xl mx-auto mt-4">

<label for="countries" class="block text-[14px] tracking-wide text-[#27357e]">Attach your updated bank account statement</label>
     
     
      <div id="countries" class=" border-b bg-transparent text-[15px] tracking-wide   block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
    <div className='flex items-center gap-3'>
<div className='bg-zinc-100 p-2'>Choose file</div>
<div>Bank statement.jpg</div>
    </div>

     <input className='mt-[-15px]'/>
     
  </div>

<p class=" text-[14px] text-[#313131] italic tracking-wide">Please enter your 10 digit mobile number. Do not prefix with +91 or 0
  
</p>

</div>







    </div>
    </div>
   
  );
}
