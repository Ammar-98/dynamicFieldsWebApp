
import React from "react";
export default function evaluateConditions(
    conditions: string[] | undefined,
    context: string|null
  ): boolean {

    console.log('conditions', conditions)


    return conditions !== undefined
      ? conditions.every((condition) => evaluateCondition(condition, context))
      : true;
  }

  function evaluateCondition(condition: string, context: any): boolean {
    console.log("conditoion", condition);
    console.log("context", context);
    // Match the pattern "variable == 'value'"
    const match = condition.match(/(\w+)\s*(==|>|<|>=|<=)\s*['"]([^'"]+)['"]/);
    console.log("match", match);

    if (match) {
      const [_, variable, operator, value] = match;
      const cleanedValue = value;

      console.log("variable", variable);

      //To compare the length of string
      if (variable.includes("length")) {
        switch (operator) {
          case "==":
            return context.length === cleanedValue;
          case ">":
            return context.length > cleanedValue;
          case "<":
            return context.length < cleanedValue;
          case ">=":
            return context.length >= cleanedValue;
          case "<=":
            return context.length <= cleanedValue;
          default:
            return false;
        }
      }


      //To compare the string or in values
      switch (operator) {
        case "==":
          return context === cleanedValue;
        case ">":
          return Number(context) > Number(cleanedValue);
        case "<":
          return Number(context) < Number(cleanedValue);

        case ">=":
          return Number(context) >= Number(cleanedValue);

        case "<=":
          return Number(context) <= Number(cleanedValue);

        default:
          return false;
      }
    }

   
    return false;
  }