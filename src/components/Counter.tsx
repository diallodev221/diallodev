import CounterUp from "./CounterUp";

interface CounterProps {
  count: number;
  label: string;
  suffix?: string;
}

const Counter = ({ count, label, suffix }: CounterProps) => {
  return (
    <div className="col-6 col-lg-3">
      <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
        <div className="number">
          <CounterUp count={count} />
          {suffix && <span>{suffix}</span>}
        </div>
        <div className="count">{label}</div>
      </div>
    </div>
  );
};

export default Counter;
