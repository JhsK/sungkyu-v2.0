import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Next.js 앱의 경로를 제공하여 테스트 환경에서 next.config.js 및 .env 파일을 로드합니다.
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    __DEV__: true,
  },
};

// createJestConfig는 Next.js 구성을 비동기적으로 로드할 수 있도록 이렇게 내보내야 합니다.
export default createJestConfig(config);
