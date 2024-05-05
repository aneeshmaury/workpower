import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className=" px-5 mt-6">
    <p className="font-bold mb-2">Complaint</p>
       <div className="main p-4  shadow-md ring ring-gray-50 ring-offset-2">
       <p className='text-sm mb-2 mt-[-7px]'>Transaction</p>
<div class="max-w-2xl mx-auto">

<label for="countries" class="block text-sm  text-gray-400 dark:text-gray-400">Nature of transaction</label>
      <select id="countries" class=" border-b bg-transparent text-sm    block w-full py-1   dark:placeholder-gray-400 dark:text-black ">
      <option selected>Select Nature of transaction</option>
      <option value="US">Person to person</option>
      <option value="CA">Person to merchent</option>
     
  </select>

<p class=" text-[10px] italic">Please select the issue from drop down list
  
</p>

</div>


    </div>
    </div>
   
  );
}
