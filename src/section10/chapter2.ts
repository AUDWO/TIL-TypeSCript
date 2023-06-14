/**
 * Pick<T,K>
 * ->뽑다, 고르다
 * -> 특정 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */

interface Post {
  title: string;
  content: string;
  tags: string[];
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

//ts에서 제공해주지만 직접 구현해보면
//K타입변수에 아무런 제약을 걸어놓지 않으면 다양한 타입의 종류들이
//들어올 수 있기 때문에
//제약을 건다:K타입 변수에 객체의 프로퍼티 key만 전달 할 수 있다.

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'content' | 'tags'
  // 'title' | 'content' extends 'title' | 'content' | 'tags'
  [key in K]: T[key];
};
//-------------------------------------------------------------------------
/**
 * Omit<T, K>
 * ->생략하다, 뺴다,
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

const noTitlePost: Omit<Post, "title"> = {
  content: "dw",
  tags: ["dw"],
};

//ts에서 제공해주지만 직접 구현해보면
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//T = Post, K= 'title'
//Pick<Post, Exclude<keyof Post, title>;
//Pick<Post, Exclude<'title' | 'content' | 'tags', 'title'>>

//Exclude:두개의 타입변수를 받고 앞에 전달한 타입 변수에서 뒤에 타입변수를 제거한 타입 변수를 return
//Pick<Post, 'content' | 'tags' | 'title' >

//-------------------------------------------------------------------------

/**
 * Record<K, V>:객체 타입을 만들어주는 유틸리티 타입(동일한 형태의 객체 타입을 쉽게 만들 수 있다.)
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };

  medium: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
//ThumbnailLegacy == Thumbnail

type Record<K extends keyof any, V> = {
  //K extends keyof any: 어떤 객체인지는 모르겠지만
  //특정 객체의 프로퍼티의 key값들로 이루어진 유니언타입이야!
  [key in K]: V;
};
