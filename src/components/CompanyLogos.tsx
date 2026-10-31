import React from "react";

export function DeloitteLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#000000" />
      <text
        x="6"
        y="16.5"
        fill="#ffffff"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="12.5"
      >
        D
      </text>
      <circle cx="16" cy="15.5" r="2.3" fill="#86bc25" />
    </svg>
  );
}

export function AlteryxLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#004b87" />
      <path
        d="M6.5 17.5L12 6.5L17.5 17.5H14.2L12 12.8L9.8 17.5H6.5Z"
        fill="#009bdd"
      />
      <path
        d="M9.5 15.5H14.5L12 10.2L9.5 15.5Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function GoldmanSachsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#7399c6" />
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Georgia, Times New Roman, serif"
        fontWeight="bold"
        fontSize="9.5"
        letterSpacing="0.5"
      >
        GS
      </text>
    </svg>
  );
}

export function AwsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#232f3e" />
      <text
        x="12"
        y="12.5"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="bold"
        fontSize="7.5"
        letterSpacing="0.8"
      >
        aws
      </text>
      <path
        d="M6.5 15.8C9.5 17.8 14.5 17.8 17.5 15.8"
        stroke="#ff9900"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.5 14.2L17.8 16L16 16.5"
        fill="#ff9900"
      />
    </svg>
  );
}

export function PaloAltoNetworksLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#fa582d" />
      <path
        d="M6 7.5H11V12.5H6V7.5ZM13 7.5H18V12.5H13V7.5ZM9.5 12.5H14.5V17.5H9.5V12.5Z"
        fill="#ffffff"
        fillOpacity="0.95"
      />
    </svg>
  );
}

export function LaunchedGlobalLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#6d28d9" />
      <path
        d="M12 4.5L15.5 11H8.5L12 4.5Z"
        fill="#ffffff"
      />
      <path
        d="M7 13.5C7 13.5 9 15 12 15C15 15 17 13.5 17 13.5"
        stroke="#c4b5fd"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="18" r="1.5" fill="#a78bfa" />
    </svg>
  );
}

export function getCompanyLogo(companyOrIssuer: string, className = "w-6 h-6") {
  const lower = companyOrIssuer.toLowerCase();
  if (lower.includes("deloitte")) return <DeloitteLogo className={className} />;
  if (lower.includes("alteryx")) return <AlteryxLogo className={className} />;
  if (lower.includes("goldman")) return <GoldmanSachsLogo className={className} />;
  if (lower.includes("aws") || lower.includes("amazon")) return <AwsLogo className={className} />;
  if (lower.includes("palo alto")) return <PaloAltoNetworksLogo className={className} />;
  if (lower.includes("launched")) return <LaunchedGlobalLogo className={className} />;

  // Clean fallback monogram badge
  const initial = companyOrIssuer.trim().charAt(0).toUpperCase() || "C";
  return (
    <div
      className={`${className} rounded-md bg-purple-100 text-violet-800 font-bold flex items-center justify-center text-xs border border-purple-200`}
    >
      {initial}
    </div>
  );
}

