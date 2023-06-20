/**
 * 1. 반복문 쪼개기 - 변수값을 누적시키는 부분을 분리한다
 * 2. 문장 슬라이드하기 - 변수 초기화 문장을 변수 값 누적코드 바로 앞으로 옮긴다
 * 3. 함수 추출하기 - 적립포인트 계산 부분을 별도 함수로 추출한다
 * 4. 변수 인라인하기 - volumCredits 변수를 제거한다
 * **/

const fn = require("./createStatementData");
//import createStatementData from "./createStatementData.js"

function statement(invoice, plays) {
  return renderPlainText(fn.createStatementData(invoice, plays))
}


function renderPlainText(data) {
  let result = `청구내역(고객명:${data.customer})\n`;
  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}

module.exports = { ...module.exports, statement };
