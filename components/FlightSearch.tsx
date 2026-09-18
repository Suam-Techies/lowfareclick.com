"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ChevronDown, MapPin, Search, Users } from "lucide-react";
import { useRouter } from "next/navigation";

const tripTypes = ["Round trip", "One way", "Multi-city"];

export function FlightSearch() {
  const router = useRouter();
  const [tripType, setTripType] = useState("Round trip");
  const [from, setFrom] = useState("New York (JFK)");
  const [to, setTo] = useState("London (LHR)");
  const [departDate, setDepartDate] = useState("2026-09-24");
  const [returnDate, setReturnDate] = useState("2026-10-01");
  const [travelerSummary, setTravelerSummary] = useState("1 Adult, Economy");
  const [directOnly, setDirectOnly] = useState(false);
  const [flexibleDates, setFlexibleDates] = useState(false);

  const hasValidPair = useMemo(() => from.trim() && to.trim() && from !== to, [from, to]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!hasValidPair) return;

    const params = new URLSearchParams({
      from: from,
      to: to,
      departure: departDate,
      return: returnDate,
      tripType,
      cabin: "Economy",
      travelers: travelerSummary,
    });

    router.push(`/flights?${params.toString()}`);
  };

  return (
    <form className="flight-search-card" onSubmit={handleSubmit}>
      <div className="flight-search-header">
        <div className="tab-group" role="tablist" aria-label="Trip type selector">
          {tripTypes.map((type) => (
            <button
              key={type}
              className={type === tripType ? "tab active" : "tab"}
              type="button"
              role="tab"
              aria-selected={type === tripType}
              onClick={() => setTripType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flight-search-meta">Prices shown in USD</div>
      </div>

      <div className="flight-search-grid">
        <label className="search-field">
          <span>From</span>
          <div className="field-input-wrap">
            <MapPin size={16} />
            <input value={from} onChange={(event) => setFrom(event.target.value)} aria-label="Departure airport" />
          </div>
        </label>

        <button type="button" className="swap-button" aria-label="Swap airports">
          ⇄
        </button>

        <label className="search-field">
          <span>To</span>
          <div className="field-input-wrap">
            <MapPin size={16} />
            <input value={to} onChange={(event) => setTo(event.target.value)} aria-label="Arrival airport" />
          </div>
        </label>

        <label className="search-field">
          <span>Departure</span>
          <div className="field-input-wrap">
            <CalendarDays size={16} />
            <input type="date" value={departDate} onChange={(event) => setDepartDate(event.target.value)} aria-label="Departure date" />
          </div>
        </label>

        <label className="search-field">
          <span>Return</span>
          <div className="field-input-wrap">
            <CalendarDays size={16} />
            <input type="date" value={returnDate} onChange={(event) => setReturnDate(event.target.value)} aria-label="Return date" />
          </div>
        </label>

        <label className="search-field">
          <span>Travelers & Class</span>
          <div className="field-input-wrap">
            <Users size={16} />
            <input value={travelerSummary} onChange={(event) => setTravelerSummary(event.target.value)} aria-label="Travelers and class" />
            <ChevronDown size={16} />
          </div>
        </label>
      </div>

      <div className="flight-search-options">
        <label className="check-option">
          <input type="checkbox" checked={directOnly} onChange={() => setDirectOnly((value) => !value)} />
          <span>Direct flights</span>
        </label>
        <label className="check-option">
          <input type="checkbox" checked={flexibleDates} onChange={() => setFlexibleDates((value) => !value)} />
          <span>Flexible dates</span>
        </label>
      </div>

      {!hasValidPair && (
        <div className="search-validation" aria-live="polite">
          Please choose different departure and arrival airports.
        </div>
      )}

      <button type="submit" className="btn btn-primary btn-search" disabled={!hasValidPair}>
        <Search size={18} />
        Search flights
      </button>
    </form>
  );
}
