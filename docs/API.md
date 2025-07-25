# API Documentation

## Endpoints

### GET /
Returns a welcome message with configuration.

**Response:**
```json
{
  "message": "Hello from TypeScript!",
  "config": {
    "debug": true,
    "version": "1.0.0",
    "port": 3000
  }
}
```