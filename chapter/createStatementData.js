function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerfomance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerfomance(aPerformance) {
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;

    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performances = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error(`서브 클래스에서 처리`);
  }

  get volumeCredits() {
    return Math.max(this.performances.audience - 30, 0);
  }
}

class TragedyPerformanceCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performances.audience > 30) {
      result += 1000 * (this.performances.audience - 30);
    }
    return result;
  }
}

class ComedyPerformanceCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performances.audience > 20) {
      result += 1000 + 500 * (this.performances.audience - 30);
    }
    result += 300 * this.performances.audience;
    return result;
  }

  /**
   * 이런코드가 가능하네 음.. 멋있네
   */
  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performances.audience / 5);
  }
}
function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyPerformanceCalculator(aPerformance, aPlay);
    case "comedy":
      return new ComedyPerformanceCalculator(aPerformance, aPlay);
    default:
      throw new Error(`알수없는 장르:${aPlay.type}`);
  }
}

module.exports = { ...module.exports, createStatementData };
