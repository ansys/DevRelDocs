# Table

A table is the base class for Points Tables, Polynomial Tables, User Tables,
and GIL Tables.

ID table: `CS_Table`

### Members

None

### Member functions

`Evaluate(In, Out)`

Allows evaluating a table in Python. In and Out are arrays of float, with
sizes corresponding to the table input and output sizes. This function can be
called from a user table for example.

`Dispose()`

Explicit destruction of the table. This explicit destructor should be used
only when the table hasn't been assigned to an actuator. When the table is
assigned to an actuator, the actuator is calling this destructor. Omitting to
call this destructor can cause the evaluation of the results to fail.
