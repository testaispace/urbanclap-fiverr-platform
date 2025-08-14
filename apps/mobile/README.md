# UrbanClap + Fiverr Mobile App

A React Native mobile application for the combined UrbanClap and Fiverr platform, allowing users to book local on-demand services and hire digital freelancers.

## 🚀 Quick Start with Expo Go

### Prerequisites

- Node.js (16.x or later)
- npm or yarn package manager
- Expo Go app installed on your mobile device:
  - [📱 iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [📱 Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Setup Instructions

1. **Clone the repository and navigate to the mobile app:**
   ```bash
   git clone https://github.com/testaispace/urbanclap-fiverr-platform.git
   cd urbanclap-fiverr-platform/apps/mobile
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Expo development server:**
   ```bash
   npx expo start
   ```
   
   This will:
   - Start the Metro bundler
   - Open Expo DevTools in your browser
   - Display a QR code in your terminal

### 📱 Running on Your Device with QR Code

#### For iOS:
1. Open the **Camera app** on your iPhone/iPad
2. Point it at the QR code displayed in your terminal or browser
3. Tap the notification that appears
4. The app will open in **Expo Go**

#### For Android:
1. Open the **Expo Go app**
2. Tap **"Scan QR Code"**
3. Point your camera at the QR code
4. The app will load automatically

### 🔧 Development Commands

```bash
# Start development server
npm start
# or
npx expo start

# Start with specific platform
npx expo start --android
npx expo start --ios
npx expo start --web

# Clear cache if needed
npx expo start --clear
```

### 📲 Platform Requirements

#### iOS:
- iOS 11.0 or later
- iPhone, iPad, or iPod touch
- Expo Go app from App Store

#### Android:
- Android 5.0 (API level 21) or later
- Expo Go app from Google Play Store

## 🏗️ App Features

### 🏠 Local Services (UrbanClap)
- Home cleaning and maintenance
- Beauty and salon services
- Repairs and handyman services
- Moving and packing
- AC servicing and repairs

### 💻 Digital Services (Fiverr)
- Graphic design and branding
- Content writing and copywriting
- Video editing and animation
- SEO and digital marketing
- Web development

### 👨‍💼 For Service Providers
- Set custom rates and availability
- Toggle on-duty/off-duty status (like Uber)
- Receive nearby service alerts
- Manage both local and digital service offerings
- Real-time location tracking for local services

## 📁 Project Structure

```
apps/mobile/
├── App.js              # Main app component
├── package.json        # Dependencies and scripts
├── README.md          # This file
├── app.json           # Expo configuration (auto-generated)
├── eas.json           # EAS Build configuration (optional)
└── assets/            # Images, icons, and other assets
```

## 🔄 Hot Reloading

The app supports hot reloading, so any changes you make to the code will automatically refresh the app on your device. Simply save your files and watch the changes appear instantly!

## 🐛 Troubleshooting

### Common Issues:

1. **QR Code not working?**
   - Make sure your phone and computer are on the same WiFi network
   - Try the manual connection option in Expo Go

2. **App won't load?**
   - Restart the Expo development server: `npx expo start --clear`
   - Make sure all dependencies are installed: `npm install`

3. **Network issues?**
   - Try connecting via tunnel: `npx expo start --tunnel`
   - Check your firewall settings

### Getting Help:
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Community](https://forums.expo.dev/)

## 🔧 Building for Production

To build production-ready apps for the app stores, you can use EAS Build:

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure and build
eas build --platform android
eas build --platform ios
```

---

**Happy coding! 🎉** 

This mobile app serves as the client interface for the UrbanClap+Fiverr platform, connecting users with local service providers and digital freelancers seamlessly.
