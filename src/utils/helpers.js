// src/utils/helpers.js

// Convert degrees to radians
export function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Calculate planet position based on orbit radius and angle
export function calculateOrbitPosition(radius, angle) {
    return {
        x: radius * Math.cos(angle),
        z: radius * Math.sin(angle),
    };
}

// Scale planets relative to Earth size (adjust factor as needed)
export function scalePlanet(realSize, scaleFactor = 0.1) {
    return realSize * scaleFactor;
}

// Generate random position for asteroids or space debris
export function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}
