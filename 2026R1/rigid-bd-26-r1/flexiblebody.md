# Flexible Body

A Flexible Body is used by RBD for bodies that have flexible behavior, for
instance a [CMSBody](cmsbody.md).

### Constructors

None.

### Members

`AlphaDamping`

Uses a variable to define the amount of alpha Rayleigh damping (proportional
to the mass matrix) to be considered for the flexible body. The variable can
be either dependent or constant.

Example:

    aFlexibleBody.AlphaDamping=100

Or equivalently:

    var=CS_Variable()
    var.SetConstantValues(System.Array[float]([100.]))
    aFlexibleBody.AlphaDamping=var

`BetaDamping`

Uses a variable to define the amount of beta Rayleigh damping (proportional to
the mass matrix) to be considered for the flexible body. The variable can be
either dependent or constant.

Example:

    Env=CS_Environment.GetDefault()
    Sys=Env.System
     
    array=System.Array.CreateInstance(float,4,2)
    array[0,0]=0.0
    array[0,1]=5.e-6
    array[1,0]=0.05
    array[1,1]=5.e-6
    array[2,0]=0.051
    array[2,1]=1.e-4
    array[3,0]=0.1
    array[3,1]=1.e-4
     
    table=CS_PointsTable(array)
     
    (err,found,time)=Sys.FindOrCreateInternalMeasure(CS_Measure.E_MeasureType.E_Time)
     
    var=CS_Variable()
    var.AddInputMeasure(time)
    var.SetTable(table)
     
    aFlexibleBody.BetaDamping = var

`CMatrixScaleFactor`

Define a factor to be used to multiply the default damping matrix. For
instance, with a [CMSBody](cmsbody.md), this matrix can be
created during the generation pass. When the damping matrix is generated for a
Condensed Part ([CMSBody](cmsbody.md)), it will be
automatically taken into account in the RBD use pass with a factor equal to
1.0.

### Member functions

`SetModalDamping(iDof, variable)`

Define the amount of damping used for the degree of freedom specified by
`iDof` (index starts at 0). The variable can be either dependent or constant.

`GetModalDamping(iDof)`

Retrieve the damping variable defined for the degree of freedom `iDof` (index
starts at 0).

`SetLoadVectorScaleFactor(iLV, variable)`

Define a scale factor applied to the flexible body internal load specified by
`iLV` (index starts at 0). By default, the first load vector uses a constant
scale factor equal to 1.0.

`GetLoadVectorScaleFactor(iLV, variable)`

Retrieve the variable associated to the factor specified by `iLV` (index
starts at 0).

### Derived classes

`CS_CMSBody`
