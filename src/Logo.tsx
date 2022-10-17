import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={120}
      height={118}
      viewBox="0 0 120 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M120 58.55c0-8.708-9.955-16.96-25.218-22.078 3.522-17.042 1.957-30.6-4.941-34.94-1.59-1.018-3.449-1.5-5.479-1.5v5.974c1.125 0 2.03.242 2.788.697 3.327 2.09 4.77 10.048 3.645 20.283-.27 2.519-.71 5.172-1.248 7.878-4.794-1.286-10.028-2.278-15.531-2.92-3.303-4.958-6.727-9.46-10.176-13.398C71.814 10.428 79.3 5.98 84.386 5.98V.005c-6.726 0-15.531 5.251-24.435 14.361C51.048 5.31 42.242.112 35.516.112v5.975c5.063 0 12.572 4.42 20.546 12.486a124.742 124.742 0 00-10.102 13.37c-5.528.643-10.762 1.635-15.556 2.948a87.837 87.837 0 01-1.272-7.77c-1.15-10.236.269-18.194 3.57-20.31.735-.483 1.689-.697 2.814-.697V.139c-2.055 0-3.914.482-5.528 1.5-6.873 4.34-8.414 17.872-4.868 34.86C9.906 41.642 0 49.868 0 58.55c0 8.708 9.955 16.96 25.218 22.079-3.522 17.04-1.957 30.599 4.941 34.939 1.59 1.018 3.449 1.501 5.504 1.501 6.726 0 15.532-5.252 24.435-14.362 8.903 9.056 17.709 14.255 24.435 14.255 2.055 0 3.914-.483 5.528-1.501 6.873-4.341 8.414-17.872 4.868-34.86C110.094 75.485 120 67.232 120 58.55zM88.153 40.678c-.905 3.457-2.03 7.02-3.302 10.584a131.018 131.018 0 00-3.204-6.43c-1.125-2.144-2.324-4.234-3.522-6.27 3.473.562 6.824 1.259 10.028 2.116zM76.951 69.214c-1.908 3.617-3.865 7.047-5.895 10.236-3.645.348-7.338.535-11.056.535-3.693 0-7.387-.187-11.007-.509a150.233 150.233 0 01-5.92-10.181 144.746 144.746 0 01-5.087-10.665 145.04 145.04 0 015.063-10.69c1.908-3.618 3.865-7.047 5.895-10.236 3.645-.348 7.338-.536 11.056-.536 3.693 0 7.387.188 11.007.51a150.258 150.258 0 015.92 10.181 144.765 144.765 0 015.087 10.664 155.683 155.683 0 01-5.063 10.691zm7.9-3.483c1.321 3.59 2.446 7.18 3.376 10.664-3.205.857-6.58 1.58-10.078 2.144 1.199-2.064 2.397-4.18 3.522-6.35a157.415 157.415 0 003.18-6.458zM60.05 94.32c-2.275-2.573-4.55-5.44-6.8-8.575 2.201.107 4.452.188 6.726.188 2.3 0 4.574-.054 6.8-.188a102.62 102.62 0 01-6.726 8.574zM41.85 78.538c-3.474-.563-6.825-1.26-10.029-2.117.905-3.457 2.03-7.02 3.302-10.584a131.11 131.11 0 003.205 6.43 181.206 181.206 0 003.522 6.27zm18.076-55.76c2.274 2.573 4.55 5.44 6.8 8.575A138.354 138.354 0 0060 31.166c-2.3 0-4.574.054-6.8.188a102.601 102.601 0 016.727-8.574zm-18.1 15.783c-1.2 2.063-2.398 4.18-3.523 6.35a156.625 156.625 0 00-3.18 6.43c-1.32-3.59-2.446-7.18-3.375-10.664 3.204-.83 6.58-1.554 10.077-2.116zM19.69 72.108C11.031 68.062 5.43 62.757 5.43 58.55c0-4.207 5.601-9.539 14.26-13.558 2.104-.991 4.403-1.875 6.776-2.706 1.394 5.252 3.228 10.718 5.503 16.318-2.25 5.573-4.06 11.012-5.43 16.237a70.231 70.231 0 01-6.849-2.733zm13.16 38.289c-3.327-2.09-4.77-10.048-3.645-20.283.27-2.519.71-5.172 1.248-7.878 4.794 1.286 10.028 2.278 15.531 2.92 3.303 4.958 6.727 9.46 10.176 13.398-7.974 8.119-15.459 12.566-20.546 12.566-1.101-.026-2.03-.268-2.764-.723zM90.868 89.98c1.15 10.235-.269 18.193-3.57 20.31-.735.482-1.689.696-2.814.696-5.063 0-12.572-4.421-20.546-12.486A124.757 124.757 0 0074.04 85.13c5.528-.643 10.762-1.634 15.556-2.947.563 2.706 1.003 5.305 1.272 7.797zm9.417-17.872c-2.103.991-4.402 1.876-6.775 2.706-1.394-5.251-3.229-10.718-5.504-16.318 2.25-5.573 4.06-11.012 5.43-16.237 2.422.83 4.721 1.742 6.874 2.733 8.659 4.046 14.26 9.351 14.26 13.558-.025 4.207-5.626 9.539-14.285 13.558z"
        fill="#81D8F7"
      />
      <path
        d="M59.975 70.795c6.174 0 11.179-5.482 11.179-12.245 0-6.763-5.005-12.245-11.178-12.245-6.174 0-11.179 5.482-11.179 12.245 0 6.763 5.005 12.245 11.178 12.245z"
        fill="#81D8F7"
      />
    </svg>
  )
}
