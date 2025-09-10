import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Code, Server, Key, Users } from 'lucide-react';

export default function ApiDocs() {
  const endpoints = [
    {
      method: 'POST',
      path: '/authenticate/me',
      description: 'Authenticate user with email and password',
      body: {
        email: 'string',
        password: 'string'
      },
      response: {
        user: {
          id: 'string',
          email: 'string',
          name: 'string'
        },
        token: 'string'
      }
    },
    {
      method: 'GET',
      path: '/authenticate/me',
      description: 'Check current user authentication status',
      headers: {
        'Authorization': 'Bearer <token>'
      },
      response: {
        user: {
          id: 'string',
          email: 'string',
          name: 'string'
        }
      }
    },
    {
      method: 'GET',
      path: '/users',
      description: 'Get list of users (protected)',
      headers: {
        'Authorization': 'Bearer <token>'
      },
      response: {
        users: 'Array<User>',
        total: 'number',
        page: 'number'
      }
    },
    {
      method: 'POST',
      path: '/users',
      description: 'Create new user (admin only)',
      headers: {
        'Authorization': 'Bearer <token>'
      },
      body: {
        email: 'string',
        password: 'string',
        name: 'string'
      }
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-500';
      case 'POST': return 'bg-blue-500';
      case 'PUT': return 'bg-yellow-500';
      case 'DELETE': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete REST API reference for the ProductionApp backend services.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2">
                <Server className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Base URL</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                https://api.example.com
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2">
                <Key className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Authentication</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Bearer token required for protected endpoints
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Rate Limiting</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                100 requests per minute per IP
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Endpoints */}
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-2xl font-bold">Available Endpoints</h2>
          
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Badge className={`${getMethodColor(endpoint.method)} text-white`}>
                    {endpoint.method}
                  </Badge>
                  <code className="text-lg font-mono">{endpoint.path}</code>
                </div>
                <CardDescription>{endpoint.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {endpoint.body && (
                  <div>
                    <h4 className="font-semibold mb-2">Request Body:</h4>
                    <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                      <code>{JSON.stringify(endpoint.body, null, 2)}</code>
                    </pre>
                  </div>
                )}
                
                {endpoint.headers && (
                  <div>
                    <h4 className="font-semibold mb-2">Headers:</h4>
                    <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                      <code>{JSON.stringify(endpoint.headers, null, 2)}</code>
                    </pre>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold mb-2">Response:</h4>
                  <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                    <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Error Codes */}
        <div className="animate-slide-up">
          <h2 className="text-2xl font-bold mb-6">Error Codes</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <code>200</code>
                  <span>OK - Request successful</span>
                </div>
                <div className="flex justify-between">
                  <code>201</code>
                  <span>Created - Resource created successfully</span>
                </div>
                <div className="flex justify-between">
                  <code>400</code>
                  <span>Bad Request - Invalid request data</span>
                </div>
                <div className="flex justify-between">
                  <code>401</code>
                  <span>Unauthorized - Authentication required</span>
                </div>
                <div className="flex justify-between">
                  <code>403</code>
                  <span>Forbidden - Insufficient permissions</span>
                </div>
                <div className="flex justify-between">
                  <code>404</code>
                  <span>Not Found - Resource not found</span>
                </div>
                <div className="flex justify-between">
                  <code>429</code>
                  <span>Too Many Requests - Rate limit exceeded</span>
                </div>
                <div className="flex justify-between">
                  <code>500</code>
                  <span>Internal Server Error - Server error</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}