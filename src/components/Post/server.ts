'use server';
import { google } from 'googleapis';

export const testServer = async () => {
  return 'test server';
};

export const getViewer = async () => {
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
      metrics: 'ga:pageviews',
      dimensions: 'ga:week',
      'start-date': '365daysAgo',
      // dimensions: `${slug ? "ga:pagePath" : 'ga:week'}`,
      // filters: `${slug ? `ga:pagePath==${slug}` : "ga:timeOnPage>=0"}`,
      // 'start-date': `${slug ? startDate : '365daysAgo'}`,
    });

    console.log('res', response);
  } catch (err) {
    console.error(err);
  }
};
