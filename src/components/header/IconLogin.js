import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
    className="logo-login-svg"
      xmlns="http://www.w3.org/2000/svg"
      width={450}

      viewBox="0 0 450 459"
      {...props}
    >
      <path
        fill="#C04693"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M224.152 6.118c120.148.176 217.514 97.594 217.51 217.628-.004 120.48-97.547 217.979-217.91 217.807-120.472-.174-217.763-97.786-217.5-218.219.262-120.044 97.915-217.391 217.9-217.216z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FEFEFE"
        d="M267.586 235.103c44.168-32.411 41.787-88.454 11.32-119.051-30.557-30.689-80.752-30.276-110.714.847-30.257 31.432-30.995 86.597 12.589 118.448-27.914 9.599-50.94 25.661-68.671 49.016-17.563 23.133-26.72 49.388-28.535 78.553C17.75 301.589-1.445 179.3 75.581 92.312c77.565-87.596 212.306-89.636 292.702-4.356 79.932 84.786 65.012 209.788-3.648 274.796-6.117-62.558-38.647-104.96-97.049-127.649z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FEFEFE"
        d="M219.309 422.254c-36.424-.255-73.56-11.87-107.458-34.564-6.84-4.578-9.216-9.387-9.116-17.611.621-50.797 29.818-94.554 76.41-113.357 73.198-29.542 155.95 18.899 164.448 97.366 3.566 32.923 6.688 24.624-20.189 41.198-30.396 18.743-64.08 26.938-104.095 26.968zM223.699 112.586c31.74-.216 57.938 25.473 58.244 57.114.314 32.424-25.523 58.847-57.732 59.044-31.836.194-58.153-25.961-58.25-57.892-.097-32.131 25.584-58.046 57.738-58.266z"
      />
    </svg>
  )
}

export default SvgComponent