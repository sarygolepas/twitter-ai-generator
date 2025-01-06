import * as React from "react";
import classNames from "classnames";
import { cn } from "@/lib/utils";
const MetaIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 171"
    className={cn("w-full h-full", className)}
    fill="currentColor"
  >
    <defs>
      <linearGradient
        id="a"
        x1="13.878%"
        x2="89.144%"
        y1="55.934%"
        y2="58.694%"
      >
        <stop offset="0%" stopColor="#0064e1" />
        <stop offset="40%" stopColor="#0064e1" />
        <stop offset="83%" stopColor="#0073ee" />
        <stop offset="100%" stopColor="#0082fb" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="54.315%"
        x2="54.315%"
        y1="82.782%"
        y2="39.307%"
      >
        <stop offset="0%" stopColor="#0082fb" />
        <stop offset="100%" stopColor="#0064e0" />
      </linearGradient>
    </defs>
    <path
      fill="#0081fb"
      d="M27.651 112.136c0 9.775 2.146 17.28 4.95 21.82 3.677 5.947 9.16 8.466 14.751 8.466 7.211 0 13.808-1.79 26.52-19.372 10.185-14.092 22.186-33.874 30.26-46.275l13.675-21.01c9.499-14.591 20.493-30.811 33.1-41.806C161.196 4.985 172.298 0 183.47 0c18.758 0 36.625 10.87 50.3 31.257C248.735 53.584 256 81.707 256 110.729c0 17.253-3.4 29.93-9.187 39.946-5.591 9.686-16.488 19.363-34.818 19.363v-27.616c15.695 0 19.612-14.422 19.612-30.927 0-23.52-5.484-49.623-17.564-68.273-8.574-13.23-19.684-21.313-31.907-21.313-13.22 0-23.859 9.97-35.815 27.75-6.356 9.445-12.882 20.956-20.208 33.944l-8.066 14.289c-16.203 28.728-20.307 35.271-28.408 46.07-14.2 18.91-26.324 26.076-42.287 26.076-18.935 0-30.91-8.2-38.325-20.556C2.973 139.413 0 126.202 0 111.148z"
    />
    <path
      fill="url(#a)"
      d="M21.802 33.206C34.48 13.666 52.774 0 73.757 0 85.91 0 97.99 3.597 110.605 13.897c13.798 11.261 28.505 29.805 46.853 60.368l6.58 10.967c15.881 26.459 24.917 40.07 30.205 46.49 6.802 8.243 11.565 10.7 17.752 10.7 15.695 0 19.612-14.422 19.612-30.927l24.393-.766c0 17.253-3.4 29.93-9.187 39.946-5.591 9.686-16.488 19.363-34.818 19.363-11.395 0-21.49-2.475-32.654-13.007-8.582-8.083-18.615-22.443-26.334-35.352l-22.96-38.352C118.528 64.08 107.96 49.73 101.845 43.23c-6.578-6.988-15.036-15.428-28.532-15.428-10.923 0-20.2 7.666-27.963 19.39z"
    />
    <path
      fill="url(#b)"
      d="M73.312 27.802c-10.923 0-20.2 7.666-27.963 19.39-10.976 16.568-17.698 41.245-17.698 64.944 0 9.775 2.146 17.28 4.95 21.82L9.027 149.482C2.973 139.413 0 126.202 0 111.148 0 83.772 7.514 55.24 21.802 33.206 34.48 13.666 52.774 0 73.757 0z"
    />
  </svg>
);
export default MetaIcon;
