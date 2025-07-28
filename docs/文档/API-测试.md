# Unicode API Documentation

## 测试端点

### GET /api/测试
Returns test data with Unicode characters.

**Response:**
```json
{
  "name": "张三",
  "age": 25,
  "city": "北京"
}
```

### POST /api/тест
Accepts test data with Russian characters.

**Request Body:**
```json
{
  "имя": "Иван",
  "возраст": 30,
  "город": "Москва"
}
```