//인덱스드 엑세스 타입
//객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입;
const post = {
    title: "영화 제목",
    content: "내용",
    author: {
        id: 1,
        name: "Dwd",
    },
};
function printAuthorInfo(author) {
    console.log(`${author.id}-${author.name}`);
}
//역기서 만약에 Post 인터페이스에서 ahthor에 age를 추가한다고 하면 특정 프로퍼티를 추출해주는 함수의 타입도 일일이 다 변환을 해줘야 함
//해결방법
//기존 프로퍼티의 타입이 추가되거나 수정되어도 별도의 추가적인 작업을 할 필요가 없다.
//여기서 ["author"]부분을 인덱스라고 부른다.
//인덱스에 들어간 문자열은 값이 아니라 타입이다.
//만약 author에서 id만 가져오고 싶다면
//function printAuthorInfo2(author:Post["author"][id])
function printAuthorInfo2(author) {
    console.log(`${author.id}-${author.name}`);
}
const post2 = {
    title: "게시글",
    content: "dwd",
    author: {
        id: 2,
        name: "dw",
    },
};
export {};
