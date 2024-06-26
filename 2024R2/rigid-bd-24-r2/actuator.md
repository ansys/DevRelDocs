# Actuator

The actuator is the base class for all
[Loads](load.md), 
[Body Loads](bodyload.md), and
[Drivers](driver.md).

ID table: `CS_Actuator`

### Members

`Condition`

All actuators can be conditional. See
[Condition](condition.md) to create this condition.

`AppliedValue`

Measure that stores the evaluation of the actuator variable. Can be useful
when the applied value depends on a measure other than time.

`EnergyMeasure`

Measure that stores the energy generated by the actuator.

### Member functions

There are two ways to define the value of the load: using a variable, or by
defining a table of input measures (in which case a variable is defined
automatically).

`SetVariable(variable)`

`variable` is a list of input measures in table form.

`SetInputMeasure(measure)`

`measure` is typically the time measure object, but other measures can be used
as well. When using an expression to define a load variation, the measure must
have only one component (it cannot be a vector measure). The variation can be
defined by a constant, an expression, or a table.

`SetConstantValues(value)`

`value` is a Python float constant. See
[Relation](relation.md) object for defining a
constant.

`SetTable(table)`

`table` is a  `CS_Table` .

`SetFunc(string, is_degree)`

`string` is similar to the expression used in the user interface to define a
joint condition by a function. Note that the literal variable is always called
`time`, even if you are using another measure as input.

`is_degree` is a boolean argument. If the expression uses trigonometric
function, it specifies that the input variable should be expressed in degrees.
