'use client';

import { Card } from '@/components/ui/card';
import { WeatherIcon } from './WeatherIcon';
import { getWeeklyForecast } from '@/lib/weatherData';

export function WeeklyForecast() {
  const weeklyData = getWeeklyForecast();

  return (
    <Card className="p-6 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">7-Day Forecast</h3>
      
      <div className="space-y-3">
        {weeklyData.map((day, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="text-slate-100 font-medium w-20">
                {index === 0 ? 'Today' : day.day}
              </div>
              <div className="flex items-center gap-3">
                <WeatherIcon condition={day.condition} size="small" />
                <div className="text-sm text-slate-300 capitalize">{day.condition}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-blue-400">{day.precipitation}%</div>
              <div className="flex items-center gap-2 text-slate-100">
                <span className="font-semibold">{day.high}°</span>
                <span className="text-slate-400">{day.low}°</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}