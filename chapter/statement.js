function statement(invoice, plays) {
  let totalAmount = 0;
  let result = `청구내역(고객명:${invoice.customer})\n`;
  
  for (let perf of invoice.performances) {
    //청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    }석)\n`;
    totalAmount += amountFor(perf);
  }
  
  let volumeCredits = totalVolumeCredits()
  result += `총액: ${usd(totalAmount)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;

  function totalVolumeCredits(){
    let volumeCredits = 0;
    for (let perf of invoice.performances) {
      volumeCredits += volumeCreditsFor(perf)
    }
    return volumeCredits;
  }
  function usd(aNumber){
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber/100)
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
}

module.exports = { ...module.exports, statement };
