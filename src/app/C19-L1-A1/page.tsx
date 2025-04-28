import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen p-5 bg-[#F8FAFC] flex flex-col justify-start items-center gap-5">
      <h2 className="text-black text-4xl font-bold text-center py-5">RULER</h2>
    <div className="w-[900px] bg-violet-200 p-5 rounded-lg ">
    <div>
        <p className="text-lg text-black">
          <span className="text-2xl font-bold text-black">
            R stands for recognition :
          </span>{" "}
          When we or others around us feel feelings, it allows us to say: ah! I
          know what this feeling is!
        </p>
      </div>
      <div>
        <p className="text-lg text-black">
          <span className="text-2xl font-bold text-black">
          U stands for understanding :
          </span>
           When we know, it allows us to say: ah! I know why I or others feel this way! 
        </p>
        <p className="text-lg text-black ">I also know what I or others might do as a result of this feeling.</p>
      </div>
      <div>
        <p className="text-lg text-black">
          <span className="text-2xl font-bold text-black">
          L stands for labeling :
          </span>
          When we know the reasons and consequences, it allows us to say: ah! I know what this feeling is called! 

        </p>
      
      </div>
      <div>
        <p className="text-lg text-black">
          <span className="text-2xl font-bold text-black">
          E stands for expressing :
          </span>
         When we can name the emotion, it allows us to say: ah! I know how I and others can show this feeling in any environment. 
        </p>
      
      </div>
      <div>
        <p className="text-lg text-black">
          <span className="text-2xl font-bold text-black">
          R stands for regulating :
          </span>
         When I know how to express myself, I allow myself to say: ah! I know how to manage my emotions or responses when I or others feel this way! 

        </p>
      
      </div>
    </div>
    </div>
  );
};

export default Page;
