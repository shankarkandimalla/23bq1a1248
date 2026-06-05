/*function NotificationCard({ notification }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{notification.Type}</h3>

      <p>{notification.Message}</p>

      <small>{notification.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;
function NotificationCard() {
  return <h2>Card Working</h2>;
}

export default NotificationCard;
function NotificationCard({ notification }) {
  return (
    <div>
      <h2>Card Working</h2>
      <p>{JSON.stringify(notification)}</p>
    </div>
  );
}

export default NotificationCard;

function NotificationCard({ notification }) {
  return (
    <div>
      <h3>{notification?.Type}</h3>
      <p>{notification?.Message}</p>
      <small>{notification?.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;

function NotificationCard({ notification }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{notification?.Type}</h3>

      <p>{notification?.Message}</p>

      <small>{notification?.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;
*/
function NotificationCard({
  notification,
  viewed,
  onView,
}) {
  return (
    <div
      onClick={() => onView(notification.ID)}
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