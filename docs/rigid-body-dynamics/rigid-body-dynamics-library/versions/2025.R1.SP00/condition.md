# Condition

Condition causes a load or a joint condition to be active only under defined
circumstances. A condition is expressed in one of the following forms:

  1. `MeasureComponent` operator `threshold`

  1. `LeftThreshold` < `MeasureComponent` < `RightThreshold`

  1. `LeftCondition` operator `RightCondition`

### For case 1

* `MeasureComponent` is a scalar [Measure](measure.md).

* `Operator` is one of the following math operators:

  * `E_GreaterThan`  
  * `E_LessThan`  
  * `E_DoubleEqual`  
  * `E_ExactlyEqual`

* `Threshold` is the threshold value.

**Note**
A condition cannot be shared between various actuators. For example, if two
joint conditions must be deactivated at the same time, two conditions must be
created.  
  
Example:

    DispCond = CS_Condition(CS_Condition.E_ConditionType.E_GreaterThan,DispX,0.1)    

### For case 2

* `MeasureComponent` is a scalar [Measure](measure.md).

* `LeftThreshold` and `RightThreshold` are the bounds within which the condition will be true.

Example:

    RangeCond = CS_Condition(DispX,0.0,0.1)

### For case 3

* `LeftThreshold` and `RightThreshold` are two conditions (case 1, 2 or 3).

* `Operator` is one of the following boolean operators:

  * `E_Or`
  * `E_And`  

Example:

    BoolCond = CS_Condition(CS_Condition.E_ConditionType.E_Or, RangeCond, DispCond)
