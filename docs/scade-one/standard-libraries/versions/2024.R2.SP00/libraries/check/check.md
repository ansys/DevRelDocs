# Check

The Check library provides a set of operators to build oracles for test harnesses, which are divided into several categories.

-   **Properties**: The properties are evaluated during several cycles. The triggering condition, if any, is evaluated only once unless the operator is restarted.
-   **Interval checks**: The operators check an input signal is within or out of some range.

|Operator Name|Description|
|-------------|-----------|
|[Always](check__always.md)|Returns true while the input property has never been false.|
|[AlwaysAfterCond](check__alwaysaftercond.md)|Returns true while the input property has never been false after a condition becomes true.|
|[AlwaysAfterN](check__alwaysaftern.md)|Returns true while the input property has never been false after a given number of cycles.|
|[AtLeastCond](check__atleastcond.md)|Returns true if the input property has always been true before the first occurrence of the condition.|
|[AtLeastN](check__atleastn.md)|Returns true if the input property has been true for the first given number of cycles.|
|[AtMostCond](check__atmostcond.md)|Returns true if the input property is always false after the first occurrence of the condition.|
|[AtMostN](check__atmostn.md)|Returns true if the input property is always false after the first given number of cycles.|
|[BeforeCond](check__beforecond.md)|Returns true if the input property is true at least once before the condition is true.|
|[BeforeN](check__beforen.md)|Returns true if the input property is true at least once before the first given number of cycles.|
|[BetweenCond](check__betweencond.md)|Returns false if p has not been true after the start condition is true and before the end condition is true.|
|[BetweenN](check__betweenn.md)|Returns false if p has not been true within the next n cycles once c becomes true.|
|[Bounds](check__bounds.md)|Checks if the input signal is within an interval.|
|[ConfirmN](check__confirmn.md)|Returns true if the input property has been true for a given number of cycles.|
|[Cycles](check__cycles.md)|Returns true after a given number of cycles.|
|[Gap](check__gap.md)|Checks if the input signal is out of an interval.|
|[Gradient](check__gradient.md)|Checks if the absolute value of the input signal gradient is less than a maximum value.|
|[IgnoreCond](check__ignorecond.md)|Returns the input property as soon as the input condition turns to true, otherwise true.|
|[IgnoreN](check__ignoren.md)|Returns the input property after a given number of cycles, otherwise true.|
|[Implies](check__implies.md)|Returns the logical expression: not\(P\) or Q.|
|[ImpliesCond](check__impliescond.md)|Returns the value of q until c is true starting when p is true, otherwise true.|
|[ImpliesN](check__impliesn.md)|Returns the value of q during n cycles starting when p is true, otherwise true.|
|[LowerBound](check__lowerbound.md)|Checks if the input signal is greater than the lower bound.|
|[Never](check__never.md)|Returns true while the input property has never been true.|
|[Once](check__once.md)|Returns true once the input property has been true.|
|[UpperBound](check__upperbound.md)|Checks if the input signal is less than the upper bound.|


**Parent topic:**[Libraries](../../libraries/libraries.md)

