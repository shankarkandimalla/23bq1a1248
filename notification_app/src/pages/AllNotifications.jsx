/*import NotificationCard from "../components/NotificationCard";

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

function AllNotifications() {
  return (
    <div>
      <h1>All Notifications</h1>

      {sampleNotifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default AllNotifications;
function AllNotifications() {
  return <h1>All Notifications Page</h1>;
}

export default AllNotifications;

import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const notification = {
    ID: "1",
    Type: "Placement",
    Message: "Amazon Hiring",
    Timestamp: "2026-04-22 17:51:18",
  };

  return (
    <div>
      <h1>All Notifications Page</h1>

      <NotificationCard notification={notification} />
    </div>
  );
}

export default AllNotifications;

import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  return (
    <div>
      <h1>All Notifications Page</h1>
      <NotificationCard />
    </div>
  );
}

export default AllNotifications;

import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const notification = {
    ID: "1",
    Type: "Placement",
    Message: "Amazon Hiring",
    Timestamp: "2026-04-22 17:51:18",
  };

  return (
    <div>
      <h1>All Notifications Page</h1>
      <NotificationCard notification={notification} />
    </div>
  );
}

export default AllNotifications;

import NotificationCard from "../components/NotificationCard";
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

function AllNotifications() {
  return (
    <div>
        <Link to="/priority">
  <button>Go To Priority Inbox</button>
</Link>
      <h1>All Notifications</h1>

      {sampleNotifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default AllNotifications;
*/
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotificationCard from "../components/NotificationCard";
import { log } from "../utils/logger";

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

function AllNotifications() {
  const [viewedNotifications, setViewedNotifications] =
    useState([]);

  const [selectedType, setSelectedType] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const notificationsPerPage = 2;

  useEffect(() => {
    const storedViewed =
      JSON.parse(
        localStorage.getItem("viewedNotifications")
      ) || [];

    setViewedNotifications(storedViewed);
  }, []);

  const handleView = (id) => {
    log(
  "frontend",
  "info",
  "notifications",
  `Viewed notification ${id}`
);
    if (!viewedNotifications.includes(id)) {
      const updatedViewed = [
        ...viewedNotifications,
        id,
      ];

      setViewedNotifications(updatedViewed);

      localStorage.setItem(
        "viewedNotifications",
        JSON.stringify(updatedViewed)
      );
    }
  };

  const filteredNotifications =
    selectedType === "All"
      ? sampleNotifications
      : sampleNotifications.filter(
          (notification) =>
            notification.Type === selectedType
        );

  const startIndex =
    (currentPage - 1) * notificationsPerPage;

  const endIndex =
    startIndex + notificationsPerPage;

  const paginatedNotifications =
    filteredNotifications.slice(
      startIndex,
      endIndex
    );

  const totalPages = Math.ceil(
    filteredNotifications.length /
      notificationsPerPage
  );

  return (
    <div>
      <h1>All Notifications</h1>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setSelectedType("All")}
        >
          All
        </button>

        <button
          onClick={() => setSelectedType("Placement")}
        >
          Placement
        </button>

        <button
          onClick={() => setSelectedType("Result")}
        >
          Result
        </button>

        <button
          onClick={() => setSelectedType("Event")}
        >
          Event
        </button>
      </div>

      <Link to="/priority">
        <button>
          Go To Priority Inbox
        </button>
      </Link>

      {paginatedNotifications.map(
        (notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
            viewed={viewedNotifications.includes(
              notification.ID
            )}
            onView={handleView}
          />
        )
      )}

      <div style={{ marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage}
        </span>

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllNotifications;