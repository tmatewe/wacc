function calculate(e) {
  //capital structure
  if (e.target.value === "calculate1") {
    percentageEquity.value = (
      (Number(amountEquity.value) /
        (Number(amountEquity.value) +
          Number(amountPrefs.value) +
          Number(amountLtd.value))) *
      100
    ).toFixed(1);
    percentagePrefs.value = (
      (Number(amountPrefs.value) /
        (Number(amountEquity.value) +
          Number(amountPrefs.value) +
          Number(amountLtd.value))) *
      100
    ).toFixed(1);
    percentageLtd.value = (
      (Number(amountLtd.value) /
        (Number(amountEquity.value) +
          Number(amountPrefs.value) +
          Number(amountLtd.value))) *
      100
    ).toFixed(1);
  }
  if (e.target.value === "calculate2") {
    bpEquity.value = (
      Number(re.value) /
      (Number(percentageEquity.value) / 100)
    ).toFixed(0);
    bpPrefs.value = (
      Number(maxPrefs.value) /
      (Number(percentagePrefs.value) / 100)
    ).toFixed(0);
    bpLtd1.value = (
      Number(maxLtd1.value) /
      (Number(percentageLtd.value) / 100)
    ).toFixed(0);
    bpLtd2.value = (
      Number(maxLtd2.value) /
      (Number(percentageLtd.value) / 100)
    ).toFixed(0);
  }

  if (e.target.innerHTML === "Equity1") {
    equity1.value = (
      ((Number(dividendsPaidEquity.value) * (1 + Number(growthEquity.value))) /
        Number(priceEquity.value) +
        Number(growthEquity.value)) *
      100
    ).toFixed(2);
  }
  if (e.target.innerHTML === "Equity2") {
    equity2.value = (
      ((Number(dividendsPaidEquity.value) * (1 + Number(growthEquity.value))) /
        (Number(priceEquity.value) -
          Number(priceEquity.value) * Number(flotationEquity.value)) +
        Number(growthEquity.value)) *
      100
    ).toFixed(2);
  }
  if (e.target.innerHTML === "Prefs1") {
    prefs1.value = (
      (Number(dividendsPaidPrefs.value) /
        (pricePrefs.value - pricePrefs.value * flotationPrefs1.value)) *
      100
    ).toFixed(2);
  }
  if (e.target.innerHTML === "Prefs2") {
    prefs2.value = (
      (Number(dividendsPaidPrefs.value) /
        (pricePrefs.value - pricePrefs.value * flotationPrefs2.value)) *
      100
    ).toFixed(2);
  }
  if (e.target.innerHTML === "ltd1") {
    ltd1.value = (
      (Number(int1.value) - Number(int1.value) * Number(taxRate.value)) *
      100
    ).toFixed(2);
  }
  if (e.target.innerHTML === "ltd2") {
    ltd2.value = (
      (Number(int2.value) - Number(int2.value) * Number(taxRate.value)) *
      100
    ).toFixed(2);
  }
  if (e.target.innerHTML === "ltd3") {
    ltd3.value = (
      (Number(int3.value) - Number(int3.value) * Number(taxRate.value)) *
      100
    ).toFixed(2);
  }
  //break points
  if (e.target.value === "calculate3") {
    weightEquity.value = Number(percentageEquity.value);
    weightPrefs.value = Number(percentagePrefs.value);
    weightLtd.value = Number(percentageLtd.value);
    if (Number(breakPoint.value) === 0) {
      console.log("test0");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd1.value);
    } else if (
      Number(breakPoint.value) === Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpEquity.value) &&
      Number(breakPoint.value) < Number(bpLtd2.value)
    ) {
      console.log("test1");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpEquity.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test2");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpEquity.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test3");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpEquity.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test4");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd1.value);
    } else if (
      Number(breakPoint.value) === Number(bpEquity.value) &&
      Number(breakPoint.value) < Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpLtd2.value)
    ) {
      console.log("test5");
      console.log(bpLtd1.value);
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd1.value);
    } else if (
      Number(breakPoint.value) === Number(bpEquity.value) &&
      Number(breakPoint.value) < Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpLtd1.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test6");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd1.value);
    } else if (
      Number(breakPoint.value) === Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpPrefs.value) &&
      Number(breakPoint.value) > Number(bpEquity.value) &&
      Number(breakPoint.value) < Number(bpLtd2.value)
    ) {
      console.log("test7");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpLtd1.value) &&
      Number(breakPoint.value) > bpPrefs.value &&
      Number(breakPoint.value) > bpEquity.value &&
      Number(breakPoint.value) < bpLtd2.value
    ) {
      console.log("test8");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpLtd2.value) &&
      Number(breakPoint.value) < bpPrefs.value &&
      Number(breakPoint.value) < bpEquity.value &&
      Number(breakPoint.value) > bpLtd1.value
    ) {
      console.log("t8");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd3.value);
    } else if (
      Number(breakPoint.value) === Number(bpPrefs.value) &&
      Number(breakPoint.value) > bpLtd1.value &&
      Number(breakPoint.value) < bpEquity.value &&
      Number(breakPoint.value) > bpLtd2.value
    ) {
      console.log("t88");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd3.value);
    } else if (
      Number(breakPoint.value) === Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpPrefs.value) &&
      Number(breakPoint.value) > Number(bpEquity.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test9");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpPrefs.value) &&
      Number(breakPoint.value) > Number(bpEquity.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test10");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpEquity.value) &&
      Number(breakPoint.value) < Number(bpLtd2.value) &&
      Number(bpLtd2.value) !== 0 &&
      Number(ltd3.value) !== 0
    ) {
      console.log("test11");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd3.value);
    } else if (
      Number(breakPoint.value) === Number(bpPrefs.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpEquity.value) &&
      Number(breakPoint.value) < Number(bpLtd2.value) &&
      Number(bpLtd2.value) !== 0 &&
      Number(ltd3.value) !== 0
    ) {
      console.log("test12");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd1.value);
    } else if (
      Number(breakPoint.value) === Number(bpPrefs.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpEquity.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test13");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpPrefs.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpEquity.value) &&
      Number(breakPoint.value) > Number(bpLtd2.value) &&
      Number(bpLtd2.value) !== 0 &&
      Number(ltd3.value) !== 0
    ) {
      console.log("test14");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd3.value);
    } else if (
      Number(breakPoint.value) === Number(bpPrefs.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpEquity.value) &&
      Number(breakPoint.value) > Number(bpLtd2.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test15");
      equityComp.value = Number(equity1.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpEquity.value) &&
      Number(breakPoint.value) < Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpLtd2.value) &&
      Number(bpLtd2.value) !== 0 &&
      Number(ltd3.value) !== 0
    ) {
      console.log("test16");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd3.value);
    } else if (
      Number(breakPoint.value) === Number(bpEquity.value) &&
      Number(breakPoint.value) < Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpLtd2.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test17");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpEquity.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpLtd2.value) &&
      Number(bpLtd2.value) !== 0 &&
      Number(ltd3.value) !== 0
    ) {
      console.log("test18");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpEquity.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpPrefs.value) &&
      Number(breakPoint.value) > Number(bpLtd2.value) &&
      Number(bpLtd2.value) !== 0 &&
      Number(ltd3.value) !== 0
    ) {
      console.log("test19");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd3.value);
    } else if (
      Number(breakPoint.value) === Number(bpEquity.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) > Number(bpPrefs.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test20");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs2.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpEquity.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpPrefs.value) &&
      Number(bpLtd2.value) === 0 &&
      Number(ltd3.value) === 0
    ) {
      console.log("test21");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpEquity.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpPrefs.value) &&
      Number(breakPoint.value) < Number(bpLtd2.value)
    ) {
      console.log("t21");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd2.value);
    } else if (
      Number(breakPoint.value) === Number(bpLtd2.value) &&
      Number(breakPoint.value) > Number(bpLtd1.value) &&
      Number(breakPoint.value) < Number(bpPrefs.value) &&
      Number(breakPoint.value) > Number(bpEquity.value) &&
      Number(bpLtd2.value) !== 0 &&
      Number(ltd3.value) !== 0
    ) {
      console.log("test22");
      equityComp.value = Number(equity2.value);
      prefsComp.value = Number(prefs1.value);
      ltdComp.value = Number(ltd3.value);
    } else {
      console.log("Option to be added");
    }
    //total wacc
    wacc1.value = (
      (Number(weightEquity.value) / 100) *
      Number(equityComp.value)
    ).toFixed(2);
    wacc2.value = (
      (Number(weightPrefs.value) / 100) *
      Number(prefsComp.value)
    ).toFixed(2);
    wacc3.value = (
      (Number(weightLtd.value) / 100) *
      Number(ltdComp.value)
    ).toFixed(2);

    totalWacc.value = (
      Number(wacc1.value) +
      Number(wacc2.value) +
      Number(wacc3.value)
    ).toFixed(2);
    document.getElementById("totalWacc").style.color = "red";
    console.log(equityComp.value);
    console.log(prefsComp.value);
    console.log(ltdComp.value);
  }
  if (e.target.value === "STD") {
    ev1.value = (
      Number(outcome1.value) * Number(prob1.value) +
      Number(outcome2.value) * Number(prob2.value) +
      Number(outcome3.value) * Number(prob3.value) +
      Number(outcome3.value) * Number(prob4.value)
    ).toFixed(2);
    ev2.value = ev1.value;
    ev3.value = ev1.value;
    ev4.value = ev1.value;
    std1.value = (Number(outcome1.value) - Number(ev1.value)).toFixed(2);
    std2.value = (Number(outcome2.value) - Number(ev2.value)).toFixed(2);
    std3.value = (Number(outcome3.value) - Number(ev3.value)).toFixed(2);
    std4.value = (Number(outcome4.value) - Number(ev4.value)).toFixed(2);
    var1.value = (
      Number(Math.pow(std1.value, 2)) * Number(prob1.value)
    ).toFixed(2);
    stdSquared1.value = Number(Math.pow(std1.value, 2));
    var2.value = (
      Number(Math.pow(std2.value, 2)) * Number(prob2.value)
    ).toFixed(2);
    stdSquared2.value = Number(Math.pow(std2.value, 2));
    var3.value = (
      Number(Math.pow(std3.value, 2)) * Number(prob3.value)
    ).toFixed(2);
    stdSquared3.value = Number(Math.pow(std3.value, 2));
    var4.value = (
      Number(Math.pow(std4.value, 2)) * Number(prob4.value)
    ).toFixed(2);
    stdSquared4.value = Number(Math.pow(std4.value, 2));
    ansVar.value = (
      Number(var1.value) +
      Number(var2.value) +
      Number(var3.value) +
      Number(var4.value)
    ).toFixed(2);
    ansStd.value = Number(Math.sqrt(ansVar.value)).toFixed(2);
  } else if (e.target.value === "CV") {
    ansCv.value = (Number(ansStd.value) / Number(ev1.value)).toFixed(2);
  } else if (e.target.innerHTML == "Answer") {
    moreInfo.value = `${(
      ((Number(oldIssue.value) * Number(mojorCont.value)) /
        (Number(oldIssue.value) + Number(newIssue.value))) *
      100
    ).toFixed(2)}%`;
  } else if (e.target.value === "grossProfit") {
    grossProfitMargin.value = `${(
      (Number(grossProfit.value) / Number(sales.value)) *
      100
    ).toFixed(2)}%`;
  } else if (e.target.value === "netProfitMargin") {
    netProfitMargin.value = `${(
      (Number(netProfit.value) / Number(sales.value)) *
      100
    ).toFixed(2)}%`;
  } else if (e.target.value === "operatingProfit") {
    operatingProfitMargin.value = `${(
      (Number(operatingProfit.value) / Number(sales.value)) *
      100
    ).toFixed(2)}%`;
  } else if (e.target.value === "currentRatio") {
    currentRatio.value = `${(
      Number(currentAssets.value) / Number(currentLiabilities.value)
    ).toFixed(2)} times`;
  } else if (e.target.value === "quickRatio") {
    quickRatio.value = `${(
      (Number(currentAssets.value) - Number(inventory.value)) /
      Number(currentLiabilities.value)
    ).toFixed(2)} times`;
  } else if (e.target.value === "returnOnEquity") {
    returnOnEquity.value = `${(
      (Number(netProfit.value) / Number(equity.value)) *
      100
    ).toFixed(2)} %`;
  } else if (e.target.value === "debtRatio") {
    debtRatio.value = `${(
      ((Number(currentLiabilities.value) + Number(longTermLoan.value)) /
        Number(totalAssets.value)) *
      100
    ).toFixed(2)} %`;
  } else if (e.target.value === "longTermDebtRatio") {
    longTermDebtRatio.value = `${(
      (Number(longTermLoan.value) / Number(totalAssets.value)) *
      100
    ).toFixed(2)} %`;
  } else if (e.target.value === "interestCover") {
    interestCover.value = `${(
      Number(operatingProfit.value) / Number(interest.value)
    ).toFixed(2)} times`;
  } else if (e.target.value === "interestFixedAnswer") {
    interestFixedAnswer.value = `R${(
      Number(loanFixed.value) *
      (Number(daysFixed.value) / 365) *
      Number(interestFixed.value)
    ).toFixed(2)}`;
  } else if (e.target.value === "interestVariableAnswer") {
    interestVariableAnswer.value = (
      (Number(variableLoan.value) *
        Number(intOne.value) *
        Number(daysOne.value)) /
        365 +
      (Number(variableLoan.value) *
        Number(intTwo.value) *
        Number(daysTwo.value)) /
        Number(365) +
      (Number(variableLoan.value) *
        Number(intThree.value) *
        Number(daysThree.value)) /
        Number(365) +
      (Number(variableLoan.value) *
        Number(intFour.value) *
        Number(daysFour.value)) /
        Number(365) +
      (Number(variableLoan.value) *
        Number(intFive.value) *
        Number(daysFive.value)) /
        Number(365)
    ).toFixed(2);
  } else if (e.target.value === "costOfGivingUpADiscount") {
    costOfGivingUpADiscount.value = `${(
      (((Number(discount.value) / (Number(100) - Number(discount.value))) *
        Number(365)) /
        (Number(maxDays.value) - Number(discountDays.value))) *
      100
    ).toFixed(3)}%`;
  } else if (e.target.value === "capitalStructure") {
    capitalEquityAnswer.value = `${(
      (Number(capitalEquity.value) /
        (Number(capitalEquity.value) + Number(capitalDebt.value))) *
      100
    ).toFixed(2)}% `;
    capitalDebtAnswer.value = `${(
      (Number(capitalDebt.value) /
        (Number(capitalEquity.value) + Number(capitalDebt.value))) *
      100
    ).toFixed(2)}%`;
  }
}
var buttons = document.getElementsByClassName("btn");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calculate);
}
