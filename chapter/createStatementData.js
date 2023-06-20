
function createStatementData(invoice, plays) {
    const statementData = {}
    statementData.customer = invoice.customer
    statementData.performances = invoice.performances.map(enrichPerfomance)
    statementData.totalAmount = totalAmount(statementData)
    statementData.totalVolumeCredits = totalVolumeCredits(statementData)
    return statementData
  
    
    function enrichPerfomance(aPerformance){
      const result = Object.assign({}, aPerformance);
      result.play = playFor(result)
      result.amount = amountFor(result)
      result.volumeCredits = volumeCreditsFor(result)
  
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
  
    
    function totalAmount(data){
      return data.performances.reduce((total, p)=> total + p.amount ,0)
    }
    
    function totalVolumeCredits(data) {
      return data.performances.reduce((total, p)=> total + p.volumeCredits ,0)
    }
  }

  
module.exports = { ...module.exports, createStatementData };