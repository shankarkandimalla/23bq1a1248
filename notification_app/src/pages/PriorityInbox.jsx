/*import NotificationCard from "../components/NotificationCard";
import { getTopNotifications } from "../utils/priorityUtils";

const sampleNotifications = [
  {
    ID: "1",
    Type: "Placement",
    Message: "Amazon Hiring",
    Timestamp: "2026-04-22 17:51:18",
  },
  {
    ID: "2",
    Type: "Result",
    Message: "Mid Sem Result",
    Timestamp: "2026-04-22 17:50:18",
  },
  {
    ID: "3",
    Type: "Event",
    Message: "Tech Fest",
    Timestamp: "2026-04-22 17:49:18",
  },
];

function PriorityInbox() {
  const topNotifications =
    getTopNotifications(sampleNotifications);

  return (
    <div>
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
*/
import NotificationCard from "../components/NotificationCard";
import { getTopNotifications } from "../utils/priorityUtils";
import { Link } from "react-router-dom";

const sampleNotifications = [
  {
    ID: "1",
    Type: "Placement",
    Message: "Amazon Hiring",
    Timestamp: "2026-04-22 17:51:18",
  },
  {
    ID: "2",
    Type: "Result",
    Message: "Mid Sem Result",
    Timestamp: "2026-04-22 17:50:18",
  },
  {
    ID: "3",
    Type: "Event",
    Message: "Tech Fest",
    Timestamp: "2026-04-22 17:49:18",
  },
];

function PriorityInbox() {
  const topNotifications =
    getTopNotifications(sampleNotifications);

  return (
    <div>
        <Link to="/">
  <button>Go To All Notifications</button>
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