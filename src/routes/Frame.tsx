interface FrameProps {
  bgImg: string;
}

const Frame = ({ bgImg }: FrameProps) => {
  return (
    <div
      className="relative flex aspect-[1/3] w-[180px] flex-col gap-4 bg-cover bg-center bg-no-repeat px-3 py-5"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 left-0 z-1 h-full w-full bg-black/15" />
      <img
        src="/image.jpg"
        alt=""
        className="z-2 h-[calc(25%-5px)] w-full object-cover"
      />
      <img
        src="/image.jpg"
        alt=""
        className="z-2 h-[calc(25%-5px)] w-full object-cover"
      />
      <img
        src="/image.jpg"
        alt=""
        className="z-2 h-[calc(25%-5px)] w-full object-cover"
      />
      <img
        src="/image.jpg"
        alt=""
        className="z-2 h-[calc(25%-5px)] w-full object-cover"
      />
    </div>
  );
};

export default Frame;
