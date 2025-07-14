'use client';

import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { WeatherIcon } from './WeatherIcon';
import { getHourlyForecast } from '@/lib/weatherData';

export function HourlyForecast() {
  const hourlyData = getHourlyForecast();

  return (
    <Card className="p-6 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">
        Hourly Forecast
      </h3>

      <ScrollArea className="w-full">
        <div className="flex gap-4 pb-4">
          {hourlyData.map((hour, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-center bg-slate-700/50 rounded-lg p-4 min-w-[100px] hover:bg-slate-700 transition-colors shadow-sm border border-slate-600"
            >
              <div className="text-sm text-slate-300 mb-2 font-medium">
                {hour.time}
              </div>
              <div className="flex justify-center mb-2">
                <WeatherIcon condition={hour.condition} size="small" />
              </div>
              <div className="text-slate-100 font-semibold mb-1">
                {hour.temperature}°
              </div>
              <div className="text-xs text-blue-400">{hour.precipitation}%</div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
