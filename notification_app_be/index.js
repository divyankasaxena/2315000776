const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkaXZ5YW5rYS5zYXhlbmFfY3MyM0BnbGEuYWMuaW4iLCJleHAiOjE3ODEwNzkzMzcsImlhdCI6MTc4MTA3ODQzNywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImNhNDE2NjVmLTczMmUtNDEyMS04YTQ1LTA3YWMyMjYwZTU3OCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImRpdnlhbmthIHNheGVuYSIsInN1YiI6IjFlM2FkOGI3LTc5OWYtNDc1ZS1iNzE4LTA3MTZlMTE5Y2I1OSJ9LCJlbWFpbCI6ImRpdnlhbmthLnNheGVuYV9jczIzQGdsYS5hYy5pbiIsIm5hbWUiOiJkaXZ5YW5rYSBzYXhlbmEiLCJyb2xsTm8iOiIyMzE1MDAwNzc2IiwiYWNjZXNzQ29kZSI6IlJQc2dZdCIsImNsaWVudElEIjoiMWUzYWQ4YjctNzk5Zi00NzVlLWI3MTgtMDcxNmUxMTljYjU5IiwiY2xpZW50U2VjcmV0IjoiYURxR0p3emN5dk5jVVNyUyJ9.7DiDoPuSgc0Ldb4eoYe8CQ5jqL05gUN38Il2Mn_3bhA";

async function getTopNotifications() {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const notifications = response.data.notifications;

    const placements = notifications
      .filter((n) => n.Type === "Placement")
      .sort(
        (a, b) =>
          new Date(b.Timestamp) - new Date(a.Timestamp)
      )
      .slice(0, 4);

    const results = notifications
      .filter((n) => n.Type === "Result")
      .sort(
        (a, b) =>
          new Date(b.Timestamp) - new Date(a.Timestamp)
      )
      .slice(0, 3);

    const events = notifications
      .filter((n) => n.Type === "Event")
      .sort(
        (a, b) =>
          new Date(b.Timestamp) - new Date(a.Timestamp)
      )
      .slice(0, 3);

    const ranked = [
      ...placements,
      ...results,
      ...events,
    ];

    console.table(
      ranked.map((n) => ({
        Type: n.Type,
        Message: n.Message,
        Timestamp: n.Timestamp,
      }))
    );
  } catch (error) {
    console.error(
      "Error:",
      error.response?.data || error.message
    );
  }
}

getTopNotifications();