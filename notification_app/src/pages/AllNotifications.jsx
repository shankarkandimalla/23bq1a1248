
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotificationCard from "../components/NotificationCard";
import { log } from "../utils/logger";
import { getNotifications } from "../services/notificationService";

function AllNotifications() {
  const [viewedNotifications, setViewedNotifications] =
    useState([]);
const [notifications, setNotifications] =
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

  async function loadNotifications() {
    const data =
      await getNotifications();

    setNotifications(data);
  }

  loadNotifications();
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
      ? notifications
      : notifications.filter(
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