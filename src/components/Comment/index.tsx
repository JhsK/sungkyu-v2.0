import Giscus from "@giscus/react";

function Comment() {
  return (
    <Giscus
      id="comments"
      repo="Jhsk/sungkyu-v2.0"
      repoId="R_kgDOI9uP_g"
      category="General"
      categoryId="DIC_kwDOI9uP_s4CcA1L"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="ko"
    />
  );
}

export default Comment;
