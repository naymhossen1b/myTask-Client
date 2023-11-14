import { Parallax } from "react-parallax";

const Cover = ({ img, title, menuDetails }) => {
  return (
    <Parallax
      blur={{ min: -60, max: 60 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{menuDetails}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
