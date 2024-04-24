import React from "react";

const sizes = {
  xs: "text-[45px] font-bold md:text-[41px] sm:text-[35px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-oxygen ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
