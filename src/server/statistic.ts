'use server';
import { google } from 'googleapis';

const googleAuth = () =>
  new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });

export const getServiceVistior = async () => {
  try {
    const auth = googleAuth();
    const analytics = google.analytics({
      auth,
      version: 'v3',
    });

    const response = await analytics.data.ga.get({
      'end-date': 'today',
      ids: `ga:${process.env.GOOGLE_ANALYTICS_VIEW_ID}`,
      // metrics: 'ga:pageviews',
      metrics: 'ga:users',
      dimensions: 'ga:month',
      'start-date': '365daysAgo',
    });

    return response.data.rows;
  } catch (err) {
    console.error(err);
    console.error('auth222', process.env.GOOGLE_CLIENT_EMAIL);
  }
};

export const getServiePageView = async () => {
  try {
    const auth = googleAuth();
    const analytics = google.analytics({
      auth,
      version: 'v3',
    });

    const response = await analytics.data.ga.get({
      'end-date': 'today',
      ids: `ga:${process.env.GOOGLE_ANALYTICS_VIEW_ID}`,
      metrics: 'ga:pageviews',
      dimensions: 'ga:month',
      'start-date': '365daysAgo',
    });

    return response.data.rows;
  } catch (err) {
    console.error(err);
    console.error('view', process.env.GOOGLE_CLIENT_ID);
  }
};
