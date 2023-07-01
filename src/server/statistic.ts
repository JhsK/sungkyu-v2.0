'use server';
import { google } from 'googleapis';

export const getServiceVistior = async () => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const analytics = google.analytics({
      auth,
      version: 'v3',
    });

    const response = await analytics.data.ga.get({
      'end-date': 'today',
      ids: `ga:${process.env.GOOGLE_ANALYTICS_VIEW_ID}`,
      // metrics: 'ga:pageviews',
      metrics: 'ga:users',
      dimensions: 'ga:week',
      'start-date': '365daysAgo',
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
