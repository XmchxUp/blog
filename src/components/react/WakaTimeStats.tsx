import useSWR from "swr";

interface WakaTimeStats {
  dailyAverage: string;
  lastWeekTotal: string;
  workingDays: number;
}

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });

export default function WakaTimeStats() {
  const { data, error, isLoading } = useSWR("/api/wakatime", fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
    dedupingInterval: 3_600_000, // 1 hour — matches CDN cache TTL
  });

  const loadingDiv = (
    <div className="animate-pulse rounded-md bg-primary/10 w-32 h-4"></div>
  );

  if (error) {
    return <div className="text-sm text-red-500">Error loading stats</div>;
  }

  if (isLoading) {
    return (
      <>
        <div className="flex flex-row justify-between">
          <span className="text-sm">Daily Average</span>
          {loadingDiv}
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-sm">Last Week Total</span>
          {loadingDiv}
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-sm">Working Days</span>
          {loadingDiv}
        </div>
      </>
    );
  }

  if (!data?.data) {
    return <div className="text-sm text-red-500">Error loading stats</div>;
  }

  const stats: WakaTimeStats = {
    dailyAverage: data.data.human_readable_daily_average_including_other_language,
    lastWeekTotal: data.data.human_readable_total_including_other_language,
    workingDays: data.data.days_minus_holidays,
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <span className="text-sm">Daily Average</span>
        <span className="text-sm">{stats.dailyAverage}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-sm">Last Week Total</span>
        <span className="text-sm">{stats.lastWeekTotal}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-sm">Working Days</span>
        <span className="text-sm">{stats.workingDays} Days</span>
      </div>
    </>
  );
}
