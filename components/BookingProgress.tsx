import Link from "next/link";

type Step = {
  number: number;
  label: string;
  href: string;
  active?: boolean;
  complete?: boolean;
};

export function BookingProgress({ current = 3 }: { current?: number }) {
  const steps: Step[] = [
    { number: 1, label: "Search", href: "/flights", complete: true },
    { number: 2, label: "Select Flight", href: "/flights/flight-lhr-jfk-401", complete: true },
    { number: 3, label: "Passenger Details", href: "/booking/passengers", active: current === 3 },
    { number: 4, label: "Review", href: "/booking/review", active: current === 4 },
    { number: 5, label: "Confirmation", href: "/booking/confirmation", active: current === 5 },
  ];

  return (
    <nav className="booking-progress" aria-label="Booking progress">
      {steps.map((step) => (
        <Link
          key={step.number}
          href={step.href}
          className={[
            "progress-step",
            step.active ? "active" : "",
            step.complete ? "complete" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span>{step.number}</span>
          <small>{step.label}</small>
        </Link>
      ))}
    </nav>
  );
}
