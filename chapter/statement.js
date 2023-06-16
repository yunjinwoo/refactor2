/**
 * 1. 반복문 쪼개기 - 변수값을 누적시키는 부분을 분리한다
 * 2. 문장 슬라이드하기 - 변수 초기화 문장을 변수 값 누적코드 바로 앞으로 옮긴다
 * 3. 함수 추출하기 - 적립포인트 계산 부분을 별도 함수로 추출한다
 * 4. 변수 인라인하기 - volumCredits 변수를 제거한다
 * **/
function statement(invoice, plays) {
  //renderPlainText 안에 statementData 적용전
  const statementData = {}
  statementData.customer = invoice.customer
  statementData.performances = invoice.performances.map(enrichPerfomance)
  return renderPlainText(statementData, invoice, plays)

  
  function enrichPerfomance(aPerformance){
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result)
    result.amount = amountFor(result)
    result.volumeCreditsFor = volumeCreditsFor(result)

    return result;
  }
  
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  
  function amountFor(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy": //비극
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy": //희극
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 1000 + 500 * (aPerformance.audience - 30);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알수없는 장르:${playFor(aPerformance).type}`);
    }
    return result;
  }

  function volumeCreditsFor(perf) {
    let result = 0;
    //포인트를 적립한다
    result += Math.max(perf.audience - 30, 0);
    //희극 관객5명마다 추가 포인트를 제공한다
    if ("comedy" === playFor(perf).type) {
      result += Math.floor(perf.audience / 5);
    }
    return result;
  }
}

function renderPlainText(data, invoice, plays) {
  let result = `청구내역(고객명:${data.customer})\n`;
  for (let perf of data.performances) {
    //청구 내역을 출력한다.
    result += `${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
  return result;

  function totalAmount(){
    let totalAmount = 0; 
    for (let perf of invoice.performances) {
      totalAmount += amountFor(perf);
    }
    return totalAmount
  }

  function totalVolumeCredits() {
    let volumeCredits = 0;
    for (let perf of invoice.performances) {
      volumeCredits += volumeCreditsFor(perf);
    }
    return volumeCredits;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }



}

module.exports = { ...module.exports, statement };
