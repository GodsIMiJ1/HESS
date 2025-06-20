import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Ny = 20;
const Nk = 100;

interface SpectrumPoint {
  kx: number;
  values: number[];
}

function generateSpectrum(t1: number, t2: number, phi: number): SpectrumPoint[] {
  const spectrum: SpectrumPoint[] = [];

  // Simplified version for testing - just generate some sample data
  for (let i = 0; i < Nk; i++) {
    const kx = -Math.PI + (2 * Math.PI * i) / (Nk - 1);

    // Simple sinusoidal energy bands for testing
    const energy1 = t1 * Math.cos(kx) + t2 * Math.cos(2 * kx + phi);
    const energy2 = -t1 * Math.cos(kx) - t2 * Math.cos(2 * kx + phi);

    spectrum.push({
      kx,
      values: [energy2, energy1].sort((a, b) => a - b)
    });
  }

  return spectrum;
}

export default function HaldaneSimulator() {
  const [t1, setT1] = useState<number>(1.0);
  const [t2, setT2] = useState<number>(0.33);
  const [phi, setPhi] = useState<number>(Math.PI / 2);

  const spectrum = generateSpectrum(t1, t2, phi);

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Haldane Edge State Simulator
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Parameters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              t₁: {t1.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.1"
              max="2.0"
              step="0.01"
              value={t1}
              onChange={(e) => setT1(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              t₂: {t2.toFixed(2)}
            </label>
            <input
              type="range"
              min="0"
              max="1.0"
              step="0.01"
              value={t2}
              onChange={(e) => setT2(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              ϕ: {(phi / Math.PI).toFixed(2)}π
            </label>
            <input
              type="range"
              min="0"
              max={2 * Math.PI}
              step="0.01"
              value={phi}
              onChange={(e) => setPhi(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Energy Spectrum</h2>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={spectrum.map((d, i) => ({
              kx: d.kx,
              energy1: d.values[0],
              energy2: d.values[1],
              label: i,
            }))}
          >
            <XAxis
              dataKey="kx"
              type="number"
              domain={[-Math.PI, Math.PI]}
              tickFormatter={(value) => `${(value / Math.PI).toFixed(1)}π`}
            />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip
              formatter={(value: number) => [value.toFixed(3), "Energy"]}
              labelFormatter={(value: number) => `kx = ${(value / Math.PI).toFixed(2)}π`}
            />
            <Line
              type="monotone"
              dataKey="energy1"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              name="Lower Band"
            />
            <Line
              type="monotone"
              dataKey="energy2"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
              name="Upper Band"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
