"use client";
import useSWR from "swr";

interface WakaTimeStats {
  dailyAverage: string;
  lastWeekTotal: string;
  workingDays: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function WakaTimeStats() {
  const { data, error, isLoading } = useSWR("/api/wakatime", fetcher, {
    refreshInterval: 3600 * 1000, // 每小时自动刷新
    revalidateOnFocus: false, // 避免切页面就重新请求
  });

  const customLoadingDiv = (
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
          {customLoadingDiv}
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-sm">Last Week Total</span>
          {customLoadingDiv}
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-sm">Working Days</span>
          {customLoadingDiv}
        </div>
      </>
    );
  }

  const stats: WakaTimeStats = {
    dailyAverage:
      data.data.human_readable_daily_average_including_other_language,
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

export default WakaTimeStats;
