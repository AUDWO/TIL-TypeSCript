/**
 * 프로미스:제네릭 클래스를 기반으로 타입이 선언됨
 */

/*
error발생
error발생 이유:타입 변수를 직접 설정해놓지 않으면 
비동기 처리의 결과값이 unknown타입으로 결정됨

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20);
    }, 3000);
});

promise.then((response)=>{
    console.log(response*10);// 20
})
*/

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
