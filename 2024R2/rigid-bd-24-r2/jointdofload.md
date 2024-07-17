# JointDOFLoad

JointDOFLoads are loads applied on a given degree of freedom of a joint. The
load is applied in the joint reference coordinate system.

JointDOFLoad derives from [Load](load.md).

### Constructor

     `CS_JointDOFLoad(joint,dof)`  

`joint`

A joint object

`dof`

An integer that defines the joint degree of freedom to be included in the
term. The ordering of the degrees of freedom sets the translation degrees of
freedom first. The degrees of freedom numbering is zero based. For example, in
a slot joint, the translational degree of freedom is 0, while the third
rotational degree of freedom is 3.

### Members

None

### Member functions

None
