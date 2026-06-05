import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { getTopNotifications } from "../utils/priorityUtils";
import { getNotifications } from "../services/notificationService";
import { Link } from "react-router-dom";

function PriorityInbox() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const data = await getNotifications();
      setNotifications(data);
    }

    loadNotifications();
  }, []);

  const topNotifications =
    getTopNotifications(notifications);

  return (
    <div>
      <Link to="/">
        <button>
          Go To All Notifications
        </button>
      </Link>

      <h1>Priority Inbox</h1>

      {topNotifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default PriorityInbox;