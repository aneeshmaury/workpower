import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className=" px-9">
       <div className="main ">
<div class="max-w-2xl mx-auto">

<label for="countries" class="block text-sm font-medium text-gray-900 dark:text-gray-400">Nature of transaction</label>
      <select id="countries" class=" border-b text-sm    block w-full p-2.5   dark:placeholder-gray-400 dark:text-black ">
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
