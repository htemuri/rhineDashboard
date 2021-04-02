import React from "react";

interface LogoProps {
  id: string;
  width: string;
  height: string;
  fill: string;
}

export const Logo: React.FC<LogoProps> = ({ width }) => {
  return (
    <svg
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="100%"
      viewBox="0 0 339.624 53.732"
    >
      <g
        id="Group_373"
        data-name="Group 373"
        transform="translate(-659.999 -529)"
      >
        <path
          id="Path_329"
          data-name="Path 329"
          d="M-13090.725-4047.614v-.326h-14.838v7.694l14.838,18.228v-25.921"
          transform="translate(14013.897 4576.942)"
          fill="#fff"
        />
        <path
          id="Path_330"
          data-name="Path 330"
          d="M-13105.562-4021.887h14.838v-7.826l-14.838-18.227"
          transform="translate(13976.844 4604.496)"
          fill="#fff"
        />
        <g
          id="Group_372"
          data-name="Group 372"
          transform="translate(659.999 529)"
        >
          <path
            id="Subtraction_5"
            data-name="Subtraction 5"
            d="M48.7,53.732H33.237L22.954,38.915H14.784l.048,14.768H.12l-.048-.428L0,27.851H7c.243.022.491.033.735.033h17.38a8.022,8.022,0,1,0,0-16.043H9.022v-.01H0V.02H17.41c.266-.013.551-.02.847-.02H29.267a18.913,18.913,0,0,1,7.445,1.519A19.534,19.534,0,0,1,46.981,11.756a18.791,18.791,0,0,1,1.527,7.438v.669A19.025,19.025,0,0,1,38.357,36.71l.017.048L48.7,53.73Z"
            transform="translate(0 0)"
            fill="#fff"
          />
          <path
            id="Path_327"
            data-name="Path 327"
            d="M-13352.746-4047.393h14.69v19.375h21.15v-19.349h14.661l.052,53.573h-14.713l-.02-19.514h-21.131l.057,19.572h-14.686"
            transform="translate(13433.825 4047.429)"
            fill="#fff"
          />
          <rect
            id="Rectangle_1566"
            data-name="Rectangle 1566"
            width="15.375"
            height="53.478"
            transform="translate(163.82 0.001)"
            fill="#fff"
          />
          <path
            id="Path_331"
            data-name="Path 331"
            d="M-13160.182-4039.313l36.477,45.371h14.99v-8.076l-36.527-45.569h-14.918Z"
            transform="translate(13371.759 4047.615)"
            fill="#fff"
          />
          <g
            id="Group_370"
            data-name="Group 370"
            transform="translate(298.847 0.001)"
          >
            <rect
              id="Rectangle_1570"
              data-name="Rectangle 1570"
              width="40.777"
              height="10.696"
              fill="#fff"
            />
            <rect
              id="Rectangle_1571"
              data-name="Rectangle 1571"
              width="40.777"
              height="10.696"
              transform="translate(0 20.723)"
              fill="#fff"
            />
            <rect
              id="Rectangle_1572"
              data-name="Rectangle 1572"
              width="40.777"
              height="10.696"
              transform="translate(0 42.782)"
              fill="#fff"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
