interface FrameProps {
  bgImg: string;
}

const Frame = ({ bgImg }: FrameProps) => {
  return (
    <div
      className="flex aspect-[1/3] w-[180px] flex-col bg-cover bg-center bg-no-repeat px-3 py-5 gap-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <img src="/image.jpg" alt="" className="h-[calc(25%-5px)] w-full object-cover" />
      <img src="/image.jpg" alt="" className="h-[calc(25%-5px)] w-full object-cover" />
      <img src="/image.jpg" alt="" className="h-[calc(25%-5px)] w-full object-cover" />
      <img src="/image.jpg" alt="" className="h-[calc(25%-5px)] w-full object-cover" />
    </div>
  );
};

export default Frame;
