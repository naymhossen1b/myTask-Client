const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center text-white grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-500 p-20">
          <p className="text-4xl mb-3">CONTACT US</p>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon - Fri: 08:00 - 22:00{" "}
            <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-sky-950 p-20">
          <p className="text-4xl mb-5">Follow US</p>
          <p>Join us on social media</p>
          <div className="flex justify-center items-center mt-2 gap-3">
            <button>FB</button>
            <button>IG</button>
            <button>X</button>
          </div>
        </div>
      </div>
      <div className="w-full p-2 mx-auto text-center font-bold bg-black text-white">
        <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
