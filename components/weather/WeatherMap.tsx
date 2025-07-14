'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Layers, Satellite } from 'lucide-react';

export function WeatherMap() {
  return (
    <Card className="p-6 bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-100">Weather Map</h3>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-300 hover:bg-slate-700 hover:text-slate-100"
          >
            <Map className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-300 hover:bg-slate-700 hover:text-slate-100"
          >
            <Layers className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-300 hover:bg-slate-700 hover:text-slate-100"
          >
            <Satellite className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="aspect-square bg-slate-700/30 rounded-lg flex items-center justify-center border border-slate-600 shadow-inner">
        <div className="text-center text-slate-300">
          <Map className="h-12 w-12 mx-auto mb-2 text-slate-400" />
          <p className="text-sm font-medium">Interactive Weather Map</p>
          <p className="text-xs mt-1">Radar, Temperature, Precipitation</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <div className="w-3 h-3 bg-blue-400 rounded"></div>
          <span>Light Rain</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <div className="w-3 h-3 bg-blue-600 rounded"></div>
          <span>Heavy Rain</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <div className="w-3 h-3 bg-amber-400 rounded"></div>
          <span>Sunny</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <div className="w-3 h-3 bg-slate-400 rounded"></div>
          <span>Cloudy</span>
        </div>
      </div>
    </Card>
  );
}
