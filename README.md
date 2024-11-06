# Sliding Drawer App

This is a React Native application that implements a sliding drawer navigation system using Expo and React Navigation. The app is designed to work on Android, iOS, and web platforms.

## Features

- **Sliding Drawer Navigation**: Navigate between different pages using a sliding drawer.
- **Bottom Tab Navigation**: Switch between Home and Contact pages using bottom tabs.
- **Animated Transitions**: Smooth animations for opening and closing the drawer.
- **Styled Components**: Consistent styling using styled-components.

## Project Structure

- **Components**: Reusable UI components are located in the `src/components` directory.
- **Pages**: Different screens of the app are located in the `src/pages` directory.
- **Atoms**: State management using Jotai is located in the `src/atoms` directory.
- **Constants**: Color constants are defined in `src/constants/colors.ts`.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/sliding-drawer.git
   cd sliding-drawer
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Start the application**:

   ```bash
   pnpm start
   ```

## Demo

Here's a short demo video of the app: [video](./assets/demo.MP4)

## Additional Information

- **Navigation**: The app uses `@react-navigation` for handling navigation, with a combination of bottom tabs and a sliding drawer.
- **Animation**: `react-native-reanimated` is used for creating smooth animations.
- **Icons**: `react-native-vector-icons` is used for iconography.
- **TypeScript**: The project is written in TypeScript, ensuring type safety and better developer experience.
