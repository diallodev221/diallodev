import { useState } from "react";

const FilterButtons = ({ onFilterByCategory }: { onFilterByCategory: (category: string) => void }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All", value: "all" },
    { label: "Website", value: "website" },
    { label: "Apps", value: "mobile-app" },
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilterByCategory(filter);
  };

  return (
    <div
      className="portfolio-filter text-center wow fadeInUp"
      data-wow-delay=".5s"
    >
      <div className="button-group filter-button-group">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            className={activeFilter === value ? "active" : ""}
            onClick={() => handleFilterChange(value)}
            aria-pressed={activeFilter === value}
          >
            {label}
          </button>
        ))}
        <div className="active-bg" ></div>
      </div>
    </div>
  );
};

export default FilterButtons;
