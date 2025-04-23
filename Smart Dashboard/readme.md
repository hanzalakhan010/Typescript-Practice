1. Smart Mood Dashboard (Notification + Battery + Geolocation + Set/Map)
Concept: A sleek, minimalist dashboard that shows the user's location, battery status, and sends context-aware notifications.

Features:
Use navigator.geolocation to display current city.

Show battery level and update it live with navigator.getBattery().

Based on battery and time of day, send custom notifications like:

“Battery low. Time for a break?”

“It’s sunny in your area. How about a quick walk?”

Use a Set to avoid sending the same notification twice.

Use a Map to associate battery level ranges with personalized messages.

Why it's valuable:
Encourages API integration and smart condition-based logic.