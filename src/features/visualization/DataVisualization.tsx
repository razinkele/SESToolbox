import { useState } from 'react';
import { Map, TrendingUp, Database } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from '@components/common';

function DataVisualization() {
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <div className="container-custom py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Data Visualization
        </h1>
        <p className="text-gray-600">
          Visualize marine biodiversity data with interactive maps and charts.
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="Region"
              placeholder="Select or enter region..."
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            />
            <Input
              label="Start Date"
              type="date"
            />
            <Input
              label="End Date"
              type="date"
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" size="sm">
              Reset
            </Button>
            <Button size="sm">
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Visualization Options */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Map View */}
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
              <Map className="h-6 w-6" />
            </div>
            <CardTitle>Geographic Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-gray-600">
              View species distribution and observations on an interactive map.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Open Map View
            </Button>
          </CardContent>
        </Card>

        {/* Time Series */}
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600">
              <TrendingUp className="h-6 w-6" />
            </div>
            <CardTitle>Trends Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-gray-600">
              Analyze biodiversity trends and changes over time periods.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Trends
            </Button>
          </CardContent>
        </Card>

        {/* Species Analysis */}
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
              <Database className="h-6 w-6" />
            </div>
            <CardTitle>Species Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-gray-600">
              Explore detailed species data and biodiversity metrics.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Explore Data
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Placeholder for future visualization components */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Interactive Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <Map className="mx-auto h-16 w-16 text-gray-400" />
              <p className="mt-4 text-sm text-gray-600">
                Select a visualization type to view marine biodiversity data
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DataVisualization;
