# Variable

A variable is an n-dimensional vector quantity that varies over time. It is
used to define the variation of a load or a joint condition, or to express the
coefficients in a relation between degrees of freedom. For convenience, the
solver allows the creation of constant variables, where only the value of the
constant has to be provided. More complex variables can be built using a
function variable. A function variable is a function of input, where input is
given by a [measure](measure.md) and function is
described by a table. In some cases, you are able to replace the table or the
measure of an internal variable as used in a joint condition.

ID table: `CS_Variable`

### Members

None

### Member functions

`SetConstantValues(value)`

`value` is an array, whose size is equal to the size of the table. To create a
constant scalar variable, the value can be defined as shown in the following
example:

`value = System.Array[float]([1.0])`

`System`, `Array`, and `float` are part of the Python language. The result of
this is an array of size one, containing the value 1.0.

`AddInputMeasure(measure)`

`measure` is a measure object. The same variable can have more than one
measure. The input variable of the variable is formed by the values of the
input measure in the order that they have been added to the list of input
measures.

`SetTable(table)`

`table` is a CS_PointsTable.

`SetFunc(string, is_degree)`

`string` is similar to the expression used in the user interface to define a
joint condition by a function. Note that the literal variable is always called
"time", even if you are using another measure as input. "is_degree" is a
boolean argument. If the expression uses a trigonometric function, it
specifies that the input variable should be expressed in degrees.

**Note**
Variables cannot be shared by different actuators.  
  
### Derived classes

`ConstantVariable`
