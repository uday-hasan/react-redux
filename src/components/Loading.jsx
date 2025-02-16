import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader size={50} className=" animate-spin" />
    </div>
  );
};

export default Loading;
