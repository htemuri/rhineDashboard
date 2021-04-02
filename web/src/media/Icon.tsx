import React from "react";

interface IconProps {
  width: string;
}

export const Icon: React.FC<IconProps> = ({ width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height="100%"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <clipPath id="clip-instagram_logo_1">
            <rect width="1000" height="1000" />
          </clipPath>
        </defs>
        <g
          id="instagram_logo_1"
          data-name="instagram logo – 1"
          clip-path="url(#clip-instagram_logo_1)"
        >
          <rect width="1000" height="1000" />
          <path
            id="Subtraction_5"
            data-name="Subtraction 5"
            d="M286.8,316.42H195.723l-60.582-87.249H87.068l.276,86.962H.712l-.287-2.519L0,164.008H41.249c1.414.128,2.859.191,4.251.191H147.842a47.241,47.241,0,1,0,0-94.482l-94.7.005H0V.128H102.373C103.978,0,105.658,0,107.507,0h64.834a113.873,113.873,0,0,1,113.31,113.023v3.943a112.035,112.035,0,0,1-59.774,99.217l.106.276,60.805,99.908Z"
            transform="translate(357 342)"
            fill="#fff"
          />
        </g>
      </svg>
    </>
  );
};
