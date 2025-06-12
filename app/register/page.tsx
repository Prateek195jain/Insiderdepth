import Register from "@/features/register/components/Register";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-[70vh] lg:min-h-[80vh] md:min-h-[75vh] items-center justify-center mt-18 mb-3 lg:mt-18 lg:mb-0 md:mb-0 md:mt-10 w-full">
      <Register />
    </div>
  );
};

export default page;
