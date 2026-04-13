import { Metric } from "@/lib/types";
import { AnimatedCounter } from "@/components/animated-counter";

type MetricPillProps = {
  metric: Metric;
};

export function MetricPill({ metric }: MetricPillProps) {
  return (
    <div className="card-surface group flex h-full flex-col justify-between rounded-[1.75rem] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{metric.label}</p>
      <div className="mt-5">
        <p className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
          <AnimatedCounter
            countTo={metric.countTo}
            value={metric.value}
            prefix={metric.prefix}
            suffix={metric.suffix}
          />
        </p>
        {metric.detail ? <p className="mt-3 text-sm leading-6 text-muted">{metric.detail}</p> : null}
      </div>
    </div>
  );
}
