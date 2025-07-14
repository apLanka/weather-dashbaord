'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Droplets, Wind, Gauge, Sun } from 'lucide-react';
import { getWeatherMetrics } from '@/lib/weatherData';

export function WeatherMetrics() {
  const metrics = getWeatherMetrics();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">
        Weather Details
      </h3>

      {/* Humidity */}
      <Card className="p-4 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <Droplets className="h-5 w-5 text-blue-400" />
          <span className="text-slate-100 font-medium">Humidity</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-300">Current</span>
            <span className="text-slate-100 font-medium">
              {metrics.humidity}%
            </span>
          </div>
          <Progress value={metrics.humidity} className="h-2" />
          <p className="text-xs text-slate-400">
            {getHumidityDescription(metrics.humidity)}
          </p>
        </div>
      </Card>

      {/* Wind */}
      <Card className="p-4 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <Wind className="h-5 w-5 text-emerald-400" />
          <span className="text-slate-100 font-medium">Wind</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-100 text-lg font-medium">
              {metrics.windSpeed}
            </span>
            <span className="text-slate-300 text-sm">
              {metrics.windDirection}
            </span>
          </div>
          <div className="flex justify-between text-xs text-slate-400">
            <span>Gusts up to {metrics.windGusts}</span>
          </div>
        </div>
      </Card>

      {/* Pressure */}
      <Card className="p-4 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <Gauge className="h-5 w-5 text-purple-400" />
          <span className="text-slate-100 font-medium">Pressure</span>
        </div>
        <div className="space-y-2">
          <div className="text-slate-100 text-lg font-medium">
            {metrics.pressure}
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${metrics.pressureTrend === 'rising' ? 'bg-emerald-400' : 'bg-red-400'}`}
            ></div>
            <span className="text-xs text-slate-400 capitalize">
              {metrics.pressureTrend}
            </span>
          </div>
        </div>
      </Card>

      {/* UV Index */}
      <Card className="p-4 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <Sun className="h-5 w-5 text-amber-400" />
          <span className="text-slate-100 font-medium">UV Index</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-100 text-lg font-medium">
              {metrics.uvIndex}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded font-medium ${getUVIndexColor(metrics.uvIndex)}`}
            >
              {getUVIndexLevel(metrics.uvIndex)}
            </span>
          </div>
          <Progress value={(metrics.uvIndex / 11) * 100} className="h-2" />
        </div>
      </Card>
    </div>
  );
}

function getHumidityDescription(humidity: number): string {
  if (humidity < 30) return 'Dry conditions';
  if (humidity < 60) return 'Comfortable';
  if (humidity < 80) return 'Humid';
  return 'Very humid';
}

function getUVIndexLevel(uvIndex: number): string {
  if (uvIndex <= 2) return 'Low';
  if (uvIndex <= 5) return 'Moderate';
  if (uvIndex <= 7) return 'High';
  if (uvIndex <= 10) return 'Very High';
  return 'Extreme';
}

function getUVIndexColor(uvIndex: number): string {
  if (uvIndex <= 2) return 'bg-green-500/80 text-white';
  if (uvIndex <= 5) return 'bg-yellow-500/80 text-white';
  if (uvIndex <= 7) return 'bg-orange-500/80 text-white';
  if (uvIndex <= 10) return 'bg-red-500/80 text-white';
  return 'bg-purple-500/80 text-white';
}
