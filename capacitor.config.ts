import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'bank.app',
  appName: 'bank-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
