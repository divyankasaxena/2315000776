# Campus Notification Dashboard

## Stage 1

A React-based notification dashboard that fetches notifications from a protected API and displays them based on priority and recency.

## Features

- Fetch notifications from a protected API
- Priority-based notification sorting
- Latest notifications displayed first
- Logging middleware integration
- Responsive and user-friendly UI

## Tech Stack

- React
- Vite
- JavaScript

## API Used

```http
GET /evaluation-service/notifications
```

## Priority Logic

Notifications are sorted using the following rules:

1. **Type Priority**
   - Placement (Highest Priority)
   - Result
   - Event (Lowest Priority)

2. **Timestamp**
   - Newer notifications appear before older notifications

## Project Structure

```text
notification_app_fe/
│
├── public/
├── src/
├── screenshot/
│   └── dashboard.png
├── package.json
├── vite.config.js
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd notification_app_fe
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Future Enhancements

- Search functionality
- Filter notifications by type
- Pagination support
- Real-time notifications
- Dark mode

## Author
Divyanka Saxena
Uni Roll No: 2315000776
Uni email: divyanka.saxena_cs23@gla.ac.in
