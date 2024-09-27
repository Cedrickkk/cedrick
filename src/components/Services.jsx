import {
  HiOutlineCreditCard,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
} from "react-icons/hi";

export default function Services() {
  return (
    <section className="m-3 flex flex-col items-center px-3 py-12">
      <h3 className="mb-2 text-2xl font-bold text-slate-800">Services</h3>
      <p className="text-slate-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti!
      </p>
      <div className="mt-12 grid grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="relative h-14 w-14 rounded-full bg-muted">
              <HiOutlineDesktopComputer
                size="2.8rem"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              />
            </div>
            <h4 className="font-semibold">Web Development</h4>
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            voluptas non fugit exercitationem eveniet quae animi debitis
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="relative h-14 w-14 rounded-full bg-muted">
              <HiOutlineDeviceMobile
                size="2.8rem"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              />
            </div>
            <h4 className="font-semibold">Mobile Development</h4>
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            voluptas non fugit exercitationem eveniet quae animi debitis
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="relative h-14 w-14 rounded-full bg-muted">
              <HiOutlineCreditCard
                size="2.8rem"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              />
            </div>
            <h4 className="font-semibold">UI / UX Design</h4>
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            voluptas non fugit exercitationem eveniet quae animi debitis
          </p>
        </div>
      </div>
    </section>
  );
}
