/**
 * Partial<T>
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
}

//원래는 ts에서 제공해주지만 직접 구현해보자면
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짖자",
  content: "초안...",
};

/**
 * Required<T>
 * 필수의, 필수적인
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Post2 = {
  title: string;
  content?: string;
};

const post2: Required<Post2> = {
  title: "한입",
  content: "두입",
};

//원래는 ts에서 제공해주지만 직접 구현해보자면
type Require<T> = {
  [key in keyof T]-?: T[key];
};

/**
 *Readonly<T>
 ->읽기전용 수정불가
 */

type Post3 = {
  title: string;
  content: string;
};

const readonlyPost: Readonly<Post3> = {
  title: "보호된 게시글 입니다.",
  content: "",
};

//원래는 ts에서 제공해주지만 직접 구현해보자면
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
