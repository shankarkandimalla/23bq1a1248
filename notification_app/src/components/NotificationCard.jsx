
function NotificationCard({
  notification,
  viewed,
  onView,
}) {
  return (
    <div
      onClick={() => {
  if (onView) {
    onView(notification.ID);
  }
}}
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: viewed
          ? "#f5f5f5"
          : "#dff6ff",
        cursor: "pointer",
      }}
    >
      <h3>{notification?.Type}</h3>

      <p>{notification?.Message}</p>

      <small>{notification?.Timestamp}</small>

      <p>
        {viewed ? "Viewed" : "New"}
      </p>
    </div>
  );
}

export default NotificationCard;