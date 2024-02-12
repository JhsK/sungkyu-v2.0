import { act, renderHook } from "@testing-library/react";
import useScreen from "../useScreen";

const resizeEventInnerWidth = (changeWidth: number) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: changeWidth,
  });

  window.dispatchEvent(new Event("resize"));
};

describe("브라우저 너비가 768px일 경우", () => {
  beforeAll(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  afterAll(() => {
    // 보편적인 브라우저 크기로 innerWidth 모킹 초기화
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  it("브라우저 너비가 모바일 크기가 아닐 경우 isMobile이 false를 반환한다", () => {
    const { result } = renderHook(useScreen);

    expect(result.current.valueOf()).toBe(false);
  });

  it("브라우저 너비가 모바일 크기가 아닐 때 resize 이벤트를 통해 모바일 사이즈로 변경 시 isMobile이 true를 반환한다", () => {
    const { result } = renderHook(useScreen);

    act(() => {
      resizeEventInnerWidth(500);
    });

    expect(result.current.valueOf()).toBe(true);
  });

  it("브라우저 너비가 모바일 크기가 아닐 때 reszie 이벤트를 통해 모바일 보다 큰 사이즈로 변경 시 isMobile이 false를 반환한다", () => {
    const { result } = renderHook(useScreen);

    act(() => {
      resizeEventInnerWidth(900);
    });

    expect(result.current.valueOf()).toBe(false);
  });
});

describe("브라우저 너비가 400px일 경우", () => {
  beforeAll(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 400,
    });
  });

  afterAll(() => {
    // 보편적인 브라우저 크기로 innerWidth 모킹 초기화
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  it("브라우저 너비가 모바일 크기이면 isMobile이 true를 반환한다", () => {
    const { result } = renderHook(useScreen);

    expect(result.current.valueOf()).toBe(true);
  });

  it("브라우저 너비가 모바일 크기일 때 resize 이벤트를 통해 모바일 사이즈로 변경 시 isMobile이 true를 반환한다", () => {
    const { result } = renderHook(useScreen);

    act(() => {
      resizeEventInnerWidth(500);
    });

    expect(result.current.valueOf()).toBe(true);
  });

  it("브라우저 너비가 모바일 크기일 때 reszie 이벤트를 통해 모바일 보다 큰 사이즈로 변경 시 isMobile이 false를 반환한다", () => {
    const { result } = renderHook(useScreen);

    act(() => {
      resizeEventInnerWidth(900);
    });

    expect(result.current.valueOf()).toBe(false);
  });
});
