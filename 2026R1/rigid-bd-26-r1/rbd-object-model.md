# The Rigid Dynamics object model

In the Rigid Dynamics object-based approach, the Environment is the top level
object that allows access to all other underlying objects. The environment is
associated with an environment object in the Mechanical tree. Many
environments can exist on the same model. The model is called the System in
the Rigid Dynamics Object model. The system contains the physical
representation of the model, and the environment contains the representation
of a given simulation done on the model. This means that Bodies and Joints
belong to the systems, and Joint Conditions or Loads are available on the
environment.

You can access an object using its unique ID, which is the same ID used by
Mechanical. Global object tables help you to access an object for which you
have an ID.

For example, a Joint with the ID `_jid` can be accessed using the following
call:

    Joint= CS_Joint.Find(_jid)

`CS_xxx` is the table of all `xxx` type objects.

If the ID of an object is not known, or if only one occurrence of the object
exists in the object model, query the object table to find the first
occurrence of a given object type. This is explained in the following example:

    Environment = CS_Environment.FindFirstNonNull()

`GetId()`

This call returns the object ID.

`GetName()`

This call returns the object name.

`SetName(name)`

This call sets or changes the object name.

Some objects have to be created by calling the object constructor. For
example, to create a constant variable:

    Var = CS_ConstantVariable()
