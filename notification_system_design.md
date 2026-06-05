# Campus Notification System

## Overview

The Campus Notification System is a React-based application that displays campus notifications and provides a priority inbox for important notifications.

## Notification Categories

Notifications are categorized into:

* Placement
* Result
* Event

## Priority Logic

Priority order:

1. Placement
2. Result
3. Event

Priority Mapping:

* Placement = 3
* Result = 2
* Event = 1

When notifications have the same priority, the most recent notification is displayed first based on timestamp.

## Features Implemented

### All Notifications Page

Displays all available notifications.

### Priority Inbox

Displays notifications sorted using priority logic.

### Notification Filters

Users can filter notifications by:

* All
* Placement
* Result
* Event

### Viewed / Unviewed Notifications

Notifications can be marked as viewed.

Viewed notification IDs are stored using localStorage.

### Pagination

Notifications are displayed page-wise.

### Routing

Routes:

* /
* /priority

## Logging Middleware

A reusable logging abstraction was created.

Logging is performed through a dedicated logging utility instead of scattering logging logic throughout the codebase.

## Folder Structure

src/

* components/
* pages/
* services/
* utils/

## Future Improvements

* Real API Integration
* Authentication Support
* Server-side Logging Integration
* Real-time Notifications

## Technologies Used

* React
* Vite
* React Router DOM
* Axios
* JavaScript
