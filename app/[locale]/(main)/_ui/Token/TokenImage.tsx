'use client'

import { useTheme } from 'next-themes'

import { ITheme } from '@/src/app/model'
import { NoSSSR } from '@/src/shared/ui/NoSSSR'

export const TokenImage = ({ className }: { className: string }) => {
  const { resolvedTheme: theme } = useTheme()
  const currentTheme = theme as ITheme

  return (
    <NoSSSR>
      <svg
        className={className}
        width="550"
        height="310"
        viewBox="0 0 516 292"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="125.842"
          y="22.0344"
          width="264.805"
          height="264.805"
          rx="35.7003"
          stroke="url(#paint0_linear_199_2051)"
          strokeWidth="1.26747"
        />
        <line
          className="max-md:hidden"
          x1="392.502"
          y1="122.539"
          x2="515.598"
          y2="122.539"
          stroke="#DDE4EA"
          strokeWidth="1.26747"
        />
        <circle
          className="max-md:hidden"
          cx="390.742"
          cy="123.173"
          r="5.91485"
          transform="rotate(90 390.742 123.173)"
          fill="#3D70FF"
        />
        <line
          className="max-md:hidden"
          y1="-0.633734"
          x2="123.097"
          y2="-0.633734"
          transform="matrix(-1 0 0 1 124.059 81.043)"
          stroke="#DDE4EA"
          strokeWidth="1.26747"
        />
        <circle
          className="max-md:hidden"
          cx="5.91485"
          cy="5.91485"
          r="5.91485"
          transform="matrix(4.37114e-08 1 1 -4.37114e-08 119.903 75.1282)"
          fill="#3D70FF"
        />
        <rect
          x="169.78"
          y="65.9728"
          width="176.928"
          height="176.928"
          rx="22.3919"
          fill="url(#paint1_linear_199_2051)"
          stroke="url(#paint2_linear_199_2051)"
          strokeWidth="0.844978"
        />
        <line
          className="max-md:hidden"
          y1="-0.633734"
          x2="123.097"
          y2="-0.633734"
          transform="matrix(-1 0 0 1 168.093 226.68)"
          stroke="#DDE4EA"
          strokeWidth="1.26747"
        />
        <circle
          className="max-md:hidden"
          cx="5.91485"
          cy="5.91485"
          r="5.91485"
          transform="matrix(4.37114e-08 1 1 -4.37114e-08 163.937 220.765)"
          fill="#3D70FF"
        />
        <rect
          x="207.545"
          y="103.738"
          width="101.397"
          height="101.397"
          rx="12.6747"
          fill="url(#paint3_radial_199_2051)"
        />
        <g filter="url(#filter0_d_199_2051)">
          {currentTheme === 'light' ? (
            <>
              <path
                d="M267.752 154.437C267.752 150.676 266.636 147 264.547 143.873C262.458 140.746 259.488 138.309 256.013 136.869C252.539 135.43 248.715 135.054 245.027 135.787C241.338 136.521 237.95 138.332 235.291 140.991C232.631 143.651 230.82 147.039 230.087 150.727C229.353 154.416 229.729 158.239 231.169 161.714C232.608 165.188 235.045 168.158 238.172 170.248C241.299 172.337 244.976 173.452 248.736 173.452V172.567C248.736 168.855 245.484 165.985 242.398 163.923C240.522 162.67 239.059 160.888 238.196 158.803C237.332 156.718 237.106 154.424 237.547 152.211C237.987 149.998 239.073 147.965 240.669 146.37C242.265 144.774 244.297 143.687 246.511 143.247C248.724 142.807 251.018 143.033 253.102 143.896C255.187 144.76 256.969 146.222 258.223 148.098C260.285 151.185 263.154 154.437 266.866 154.437H267.752Z"
                fill="#3D70FF"
              />
              <path
                d="M248.736 154.437C248.736 158.198 249.852 161.874 251.941 165.001C254.03 168.128 257 170.566 260.475 172.005C263.949 173.444 267.773 173.82 271.461 173.087C275.15 172.353 278.538 170.542 281.197 167.883C283.857 165.223 285.668 161.835 286.401 158.147C287.135 154.458 286.759 150.635 285.319 147.16C283.88 143.686 281.443 140.716 278.316 138.627C275.189 136.537 271.512 135.422 267.752 135.422V136.308C267.752 140.019 271.004 142.889 274.09 144.951C275.966 146.204 277.429 147.986 278.292 150.071C279.156 152.156 279.382 154.45 278.941 156.663C278.501 158.876 277.415 160.909 275.819 162.504C274.223 164.1 272.191 165.187 269.977 165.627C267.764 166.067 265.47 165.841 263.386 164.978C261.301 164.114 259.519 162.652 258.265 160.776C256.203 157.689 253.334 154.437 249.622 154.437H248.736Z"
                fill="#3D70FF"
              />
            </>
          ) : (
            <>
              <path
                d="M267.752 154.437C267.752 150.676 266.636 147 264.547 143.873C262.458 140.746 259.488 138.309 256.013 136.869C252.539 135.43 248.715 135.054 245.027 135.787C241.338 136.521 237.95 138.332 235.291 140.991C232.631 143.651 230.82 147.039 230.087 150.727C229.353 154.416 229.729 158.239 231.169 161.714C232.608 165.188 235.045 168.158 238.172 170.248C241.299 172.337 244.976 173.452 248.736 173.452V172.567C248.736 168.855 245.484 165.985 242.398 163.923C240.522 162.67 239.059 160.888 238.196 158.803C237.332 156.718 237.106 154.424 237.547 152.211C237.987 149.998 239.073 147.965 240.669 146.37C242.265 144.774 244.297 143.687 246.511 143.247C248.724 142.807 251.018 143.033 253.102 143.896C255.187 144.76 256.969 146.222 258.223 148.098C260.285 151.185 263.154 154.437 266.866 154.437H267.752Z"
                fill="#FFF"
              />
              <path
                d="M248.736 154.437C248.736 158.198 249.852 161.874 251.941 165.001C254.03 168.128 257 170.566 260.475 172.005C263.949 173.444 267.773 173.82 271.461 173.087C275.15 172.353 278.538 170.542 281.197 167.883C283.857 165.223 285.668 161.835 286.401 158.147C287.135 154.458 286.759 150.635 285.319 147.16C283.88 143.686 281.443 140.716 278.316 138.627C275.189 136.537 271.512 135.422 267.752 135.422V136.308C267.752 140.019 271.004 142.889 274.09 144.951C275.966 146.204 277.429 147.986 278.292 150.071C279.156 152.156 279.382 154.45 278.941 156.663C278.501 158.876 277.415 160.909 275.819 162.504C274.223 164.1 272.191 165.187 269.977 165.627C267.764 166.067 265.47 165.841 263.386 164.978C261.301 164.114 259.519 162.652 258.265 160.776C256.203 157.689 253.334 154.437 249.622 154.437H248.736Z"
                fill="#FFF"
              />
            </>
          )}
        </g>
        <line
          className="max-md:hidden"
          x1="257.61"
          y1="61.5393"
          x2="257.61"
          y2="0.126144"
          stroke="#DDE4EA"
          strokeWidth="1.26747"
        />
        <circle className="max-md:hidden" cx="258.244" cy="63.2984" r="5.91485" fill="#3D70FF" />
        <circle
          className="max-md:hidden"
          cx="308.943"
          cy="285.618"
          r="5.91485"
          transform="rotate(90 308.943 285.618)"
          fill="#3D70FF"
        />
        <defs>
          <filter
            id="filter0_d_199_2051"
            x="229.721"
            y="135.422"
            width="57.0455"
            height="40.2834"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.25308" />
            {/* <feComposite in2="hardAlpha" operator="out" /> */}
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0612956 0 0 0 0 0.256746 0 0 0 0 0.636149 0 0 0 1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_199_2051" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_199_2051"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_199_2051"
            x1="258.244"
            y1="21.4006"
            x2="258.244"
            y2="287.473"
            gradientUnits="userSpaceOnUse"
          >
            {currentTheme === 'light' ? (
              <>
                <stop stopColor="#DDE4EA" />
                <stop offset="1" stopColor="#DDE4EA" stopOpacity="0.2" />
              </>
            ) : (
              <>
                <stop stopColor="#2A3038" />
                <stop offset="1" stopColor="#2A3038" stopOpacity="0.2" />
              </>
            )}
          </linearGradient>
          <linearGradient
            id="paint1_linear_199_2051"
            x1="258.244"
            y1="65.5503"
            x2="258.244"
            y2="243.323"
            gradientUnits="userSpaceOnUse"
          >
            {currentTheme === 'light' ? (
              <>
                <stop stopColor="#F1F5F8" />
                <stop offset="1" stopColor="#F1F5F8" stopOpacity="0.1" />
              </>
            ) : (
              <>
                <stop stopColor="#22272E" />
                <stop offset="1" stopColor="#22272E" stopOpacity="0.1" />
              </>
            )}
          </linearGradient>
          <linearGradient
            id="paint2_linear_199_2051"
            x1="258.244"
            y1="65.5503"
            x2="258.244"
            y2="243.323"
            gradientUnits="userSpaceOnUse"
          >
            {currentTheme === 'light' ? (
              <>
                <stop stopColor="#DDE4EA" />
                <stop offset="1" stopColor="#DDE4EA" stopOpacity="0.2" />
              </>
            ) : (
              <>
                <stop stopColor="#2A3038" />
                <stop offset="1" stopColor="#2A3038" stopOpacity="0.2" />
              </>
            )}
          </linearGradient>
          <radialGradient
            id="paint3_radial_199_2051"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(258.244 154.437) rotate(45) scale(71.6988)"
          >
            {currentTheme === 'light' ? (
              <>
                <stop offset="0.23" stopColor="#CDE1FF" />
                <stop offset="1" stopColor="#9BC3FF" />
              </>
            ) : (
              <>
                <stop offset="0.23" stopColor="#4587EB" />
                <stop offset="1" stopColor="#2151D6" />
              </>
            )}
          </radialGradient>
        </defs>
      </svg>
    </NoSSSR>
  )
}
