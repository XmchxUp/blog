"use client";
import { useEffect, useState } from "react";

interface WakaTimeStats {
  dailyAverage: string;
  lastWeekTotal: string;
  workingDays: number;
}

function WakaTimeStats() {
  const [stats, setStats] = useState<WakaTimeStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/wakatime");
        if (!response.ok) {
          throw new Error("failed to fetch stats");
        }

        const data = await response.json();

        setStats({
          dailyAverage:
            data.data.human_readable_daily_average_including_other_language,
          lastWeekTotal:
            data.data.human_readable_total_including_other_language,
          workingDays: data.data.days_minus_holidays,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchStats();
  }, []);

  const customLoadingDiv = () => {
    return (
      <div className="animate-pulse rounded-md bg-primary/10 w-32 h-4"></div>
    );
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <span className="text-sm">Daily Average</span>
        <span className="text-sm">
          {stats?.dailyAverage || customLoadingDiv()}
        </span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-sm">Last Week Total</span>
        <span className="text-sm">
          {stats?.lastWeekTotal || customLoadingDiv()}
        </span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-sm">Working Days</span>
        <span className="text-sm">
          {stats !== null ? `${stats?.workingDays} Days` : customLoadingDiv()}
        </span>
      </div>
    </>
  );
}

export default WakaTimeStats;
