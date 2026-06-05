const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const sortNotifications = (notifications) => {
  return [...notifications].sort((a, b) => {
    const priorityDifference =
      priorityMap[b.Type] - priorityMap[a.Type];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return (
      new Date(b.Timestamp) -
      new Date(a.Timestamp)
    );
  });
};

export const getTopNotifications = (
  notifications,
  limit = 10
) => {
  return sortNotifications(notifications).slice(0, limit);
};