'use server';
import axios from 'axios';
import { analyticsreporting_v4, google } from 'googleapis';
import keyFile from './path_to_keyfile.json';

export const testServer = async () => {
  return 'test server';
};

export const fetchData = async () => {
  const auth = new google.auth.GoogleAuth({
    // 클라이언트 ID와 클라이언트 비밀번호를 입력합니다.
    // 개발자 콘솔에서 생성한 OAuth 클라이언트 ID와 일치해야 합니다.
    // keyFile: keyFile as any,
    keyFilename: 'src/components/Post/path_to_keyfile.json',
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });

  const authClient = await auth.getClient();
  const analyticsreporting = google.analyticsreporting({
    version: 'v4',
    auth: authClient as analyticsreporting_v4.Options['auth'],
  });
  console.log('test', analyticsreporting);
  // const response = await analyticsreporting.reports.batchGet({
  //   requestBody: {
  //     reportRequests: [
  //       {
  //         viewId: 'YOUR_VIEW_ID',
  //         dateRanges: [
  //           {
  //             startDate: '30daysAgo',
  //             endDate: 'yesterday',
  //           },
  //         ],
  //         metrics: [
  //           {
  //             expression: 'ga:users',
  //           },
  //           {
  //             expression: 'ga:newUsers',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // });

  // console.log('response.data', response.data);
};
