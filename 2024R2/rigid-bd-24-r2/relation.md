# Relation

The relation object enables you to write constraint equations between degrees
of freedom of the model. For example, two independent lines of shaft can be
coupled using a relation between their rotational velocities.

If you have a gear coupling between two shafts where the second shaft rotates
twice as fast as the first one, you can write the following equation:

2.0 X Ω1 + Ω2 = 0

where Ω1 and Ω2 are joint rotational velocities.

This relation contains two terms and a constant right hand side equal to zero.

The first term (2 X Ω1) can be described using the following information:

* A joint selection 

* A joint degree of freedom selection 

* The nature of motion that is used in the equation (joint velocities, which is the most common case). For convenience, the nature of motion upon which the constraint equation is formulated is considered as being shared by all the terms in the relation. 

This information defines Ω1

* The factor 2.0 in the equation can be described by a constant variable, whose value is 2.0

ID table: `CS_Actuator`

The coefficients of the relation can be constant or variable; however, the use
of non-constant coefficients is limited to relations between velocities and
relations between accelerations. If non-constant coefficients are used for
relations between positions, the solution will not proceed.

### Constants

`E_Acceleration`, `E_Position`, `E_Velocity`

### Members

None

### Member functions

`SetRelationType(type)`

Type of relation, with type selected in the previous enumeration.

`AddTerm(joint, dof, variable)`

Adds a term to the equation.

`joint`

A joint object

`dof`

An integer that defines the joint degree of freedom to be included in the
term. The ordering of the degrees of freedom sets the translation degrees of
freedom first, and that the degrees of freedom numbering is zero based. For
example the translational degrees of freedom in a slot joint is `0`, while the
third rotational degree of freedom is `3`.

`variable`

A variable object

`SetVariable(variable)`

Sets the right hand side of the relation. "variable" is a variable object.
