import { useState } from 'react';
import { Plus, Download, BarChart3 } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardContent, Loading, ErrorMessage } from '@components/common';
import { useSESModels } from '@hooks/useSESModels';

function SESModeling() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useSESModels(page, 10);

  if (isLoading) {
    return <Loading text="Loading SES models..." />;
  }

  if (error) {
    return (
      <div className="container-custom py-12">
        <ErrorMessage
          message={(error as Error).message}
          onRetry={() => void refetch()}
        />
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          SES Modeling
        </h1>
        <p className="text-gray-600">
          Build and analyze Socio-Ecological System models to understand
          interactions between social and ecological factors.
        </p>
      </div>

      {/* Actions */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-3">
          <Button leftIcon={<Plus className="h-4 w-4" />}>
            Create New Model
          </Button>
          <Button variant="outline" leftIcon={<Download className="h-4 w-4" />}>
            Import Model
          </Button>
        </div>
      </div>

      {/* Models Grid */}
      {data && data.data.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((model) => (
            <Card key={model.id} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle>{model.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-gray-600">
                  {model.description}
                </p>
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                  <span>
                    {model.socialFactors.length} Social Factors
                  </span>
                  <span>
                    {model.ecologicalFactors.length} Ecological Factors
                  </span>
                </div>
                {model.resilienceScore !== undefined && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Resilience Score</span>
                      <span className="font-semibold text-primary-600">
                        {model.resilienceScore.toFixed(1)}
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-primary-500"
                        style={{ width: `${model.resilienceScore}%` }}
                      />
                    </div>
                  </div>
                )}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    leftIcon={<BarChart3 className="h-4 w-4" />}
                  >
                    Analyze
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center">
          <CardContent>
            <div className="py-12">
              <BarChart3 className="mx-auto h-16 w-16 text-gray-400" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                No SES Models Yet
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Get started by creating your first SES model.
              </p>
              <Button
                className="mt-6"
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Create New Model
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pagination */}
      {data && data.total > data.pageSize && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {page} of {Math.ceil(data.total / data.pageSize)}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page >= Math.ceil(data.total / data.pageSize)}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

export default SESModeling;
