import React, { forwardRef, ForwardRefExoticComponent } from "react";

interface ICanvas
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export const Canvas: React.FunctionComponent<ICanvas> = ({
  children,
  ...props
}) => {
  return (
    <div
      style={{
        backgroundRepeat: "repeat",
        background:
          "linear-gradient( 109.6deg,  rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% )",
      }}
      className={`relative w-full min-h-80 rounded-lg flex items-center justify-center  ${props.className}`}
    >
      <div className="realtive h-full overflow-hidden z-20 flex items-center justify-center">
        {children}
      </div>
      <div
        style={{
          backgroundSize: "32px 32px",
          backgroundRepeat: "repeat",
          opacity: "60%",
          backgroundImage: "radial-gradient(white 1px, transparent 0)",
        }}
        className="absolute inset-0"
      ></div>
    </div>
  );
};
