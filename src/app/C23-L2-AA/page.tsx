import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen p-5 bg-[#F8FAFC] flex flex-col justify-start items-center gap-5">
      <h2 className="text-black text-4xl font-bold text-center py-5">Read the  Personal bill of rights</h2>
    <div className="w-[900px] bg-violet-100 p-5 rounded-lg flex justify-center items-center flex-col gap-10 ">
        <ul className="list-disc px-5 space-y-4 ">
            <li className="text-2xl text-black ">I have the right to ask for what I want.</li>
            <li className="text-2xl text-black ">I have the right to say no to requests or demands I can’t meet.</li>
            <li className="text-2xl text-black ">I have the right to express all my feelings, positive or negative.</li>
            <li className="text-2xl text-black ">I have the right to change my mind.</li>
            <li className="text-2xl text-black ">I have the right to make mistakes and not have to be perfect.</li>
            <li className="text-2xl text-black ">I have the right to follow my own values and standards.</li>
            <li className="text-2xl text-black ">I have the right to say no to anything when I feel I am not ready, it is unsafe, or it violates my values.</li>
            <li className="text-2xl text-black ">I have the right to determine my own priorities.</li>
            <li className="text-2xl text-black ">I have the right not  to be responsible for others’ behavior, actions, feelings or problems.</li>
            <li className="text-2xl text-black ">I have the right to expect honesty from others.</li>
        </ul>
        <h3 className="font-bold text-md text-center">Source: Cited from Anxiety and Phobia Workbook by Edmund J. Bourne</h3>
    </div>
    </div>
  );
};

export default Page;
