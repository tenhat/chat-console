export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="200"
      height="50"
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="50" rx="25" fill="#3B82F6" />
      <path
        d="M20 35V15H30C32.7614 15 35 17.2386 35 20C35 22.7614 32.7614 25 30 25H25"
        stroke="white"
        strokeWidth="2"
      />
      <path d="M45 35V15H55L65 35H55L45 15" stroke="white" strokeWidth="2" />
      <path
        d="M75 35V15H85C87.7614 15 90 17.2386 90 20C90 22.7614 87.7614 25 85 25H80V35"
        stroke="white"
        strokeWidth="2"
      />
      <circle cx="105" cy="25" r="10" stroke="white" strokeWidth="2" />
      <path
        d="M120 35V15H130L140 35H130L120 15"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M150 35V15H160C162.761 15 165 17.2386 165 20C165 22.7614 162.761 25 160 25H155V35"
        stroke="white"
        strokeWidth="2"
      />
      <path d="M175 35V15H185V35" stroke="white" strokeWidth="2" />
    </svg>
  );
}
