# GILTable

A general multi-input interpolated table based on an unstructured cloud of
points.

Corresponding ID table: `CS_GILTable`

### Member functions

`CS_GILTable(sizeIn,sizeOut)`

Creates a GIL table with `sizeIn` inputs and `sizeOut` outputs

`CS_GILTable(sizeIn, sizeOut, filename, scale, separator, noHeader)`

Creates a GIL table from a text file; `filename` is the name of the file
containing the points (typically a `.CSV` file). This file must be in ASCII
format, with one data point per row. Each row must contain `sizeIn` \+
`sizeOut` columns. The columns must be separated by a character specified by
the argument `separator`. The default value of `separator` is `,`. `scale` is
an optional argument that scales all the output values. The default value,
used if the optional argument is not specified, is 1.0. `noHeader` is a
boolean, optional argument that should be `true` if there is no first row with
labels.

Example file:

    Velocity, Deflection, Force
    0.,0.,10.0
    100.,0.,200.0
    ...

`AddInterpolationPoint(values)`

Adds an interpolation point to the General Interpolation Table. `values` is a
one dimensional array of size `sizeIn`+`sizeOut`. The first `sizeIn` values in
array `values` corresponds to the values of the input variables. The following
`sizeOut` values in array `values` correspond to the output values.

Example 1. Creation of a Nonlinear Stiffness Value That Depends on Spin
Velocity (Omega) and on Deflection (dY)

    VarForceY = CS_Variable();
    #
    # Variable 0: spin
    VarForceY.AddInputMeasure(SpinMeasure )
    #
    # Variable 1: Y displacement
    VarForceY.AddInputMeasure( TransY )
    # 
    # Create table with 2 input and 1 output
    EvalY = CS_GILTable(2,1)
    
    Omega = -1.0
    dY = -1e-4
    stiff = -9.0
    
    values=System.Array.CreateInstance(float,3)
    
    values[0] = Omega
    values[1] = dY
    values[2] = stiff
    EvalY.AddInterpolationPoint( values )
    
    Omega = 11.0
    dY = -1e-4
    stiff = -21.0
    values[0] = Omega
    values[1] = dY
    values[2] = stiff
    EvalY.AddInterpolationPoint( values )
    …

`AddInterpolationPointArray(values)`

Adds a set of points to the General Interpolation Table. `values` is a two
dimensional array of size (`numberOfPoints`, `sizeIn`+`sizeOut`). On each row
of the array, first `sizeIn` values in array `values` corresponds to the
values of the input variables. The following `sizeOut` values in array
`values` correspond to the output values. Each row contains a single
interpolation point in the cloud of points.

Example 2. Creation of a Nonlinear Force Value (F) That Depends on Deflection
(dX)

    ForceVariable = CS_Variable()
    ForceVariable.AddInputMeasure( TransX )
    Evaluator = CS_GILTable( 1,1 )
    values = System.Array.CreateInstance( float, 6, 2 )
    dX = 0.0
    F = 0.0
    values[0,0] = dX
    values[0,1] = F
    
    dX = 10.0
    F = 1.0
    values[1,0] = dX
    values[1,1] = F
    
    dX = 30.0
    F = 2.0
    values[2,0] = dX
    values[2,1] = F
    
    dX = 60.0
    F = 3.0
    values[3,0] = dX
    values[3,1] = F
    
    dX = 90.0
    F = 4.0
    values[4,0] = dX
    values[4,1] = F
    
    dX = 130.0
    F = 5.0
    values[5,0] = dX
    values[5,1] = F
    Evaluator.AddInterpolationPointArray( values )   

`SetVerbosity(bVerbose)`

If `bVerbose` is set to true, the GILTable will print the output value every
time it is evaluated. This can be used for debugging purposes, but it will
affect the performance if used on a table in a long simulation.

### Limitations

These tables can only be used to apply forces and moments, not for other joint
conditions or remote displacements.
