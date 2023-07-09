import { google } from 'googleapis';

const keyFile = require('../../service-account-key-file.json');
const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];

const jwtClient = new google.auth.JWT(
  keyFile.client_email,
  undefined,
  keyFile.private_key,
  scopes
);

export const gaAuthorize = async () => {
  await jwtClient.authorize();
};

export const gaGetData = async () => {
  console.log('!!!!111111111111');
  const analyticsreporting = google.analyticsreporting({
    version: 'v4',
    auth: jwtClient,
  });

  const response = await analyticsreporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: '192693704',
          dateRanges: [
            {
              startDate: '30daysAgo',
              endDate: 'yesterday',
            },
          ],
          metrics: [
            {
              expression: 'ga:users',
            },
            {
              expression: 'ga:newUsers',
            },
          ],
          dimensions: [
            {
              name: 'ga:pagePath',
            },
          ],
        },
      ],
    },
  });

  //   const data = response?.data.reports[0].data;
  console.log('datafwfawfawfawfwafafawf@@@#@#@#', response);
  return response;
};
