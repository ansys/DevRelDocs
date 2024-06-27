# Joint condition: control using linear feedback

In this example, an existing load is modified to apply a torque proportional
to the joint velocity. Two methods are discussed:

### Method 1

Obtain the velocity measure from the joint:

    joint = CS_Joint.Find(_jid)
    vel=joint.GetVelocity()

Next, modify an existing moment in order to use the velocity measure as its
input measure:

    Env=CS_Environment.FindFirstNonNull() 
    
    ids=Env.DSToInternalIds[_jcid] 
    
    load=CS_Actuator.Find(ids[0])
    load.SetInputMeasure(vel)

### Method 2

Using this method, the load is created entirely using commands. These commands
are shown below.

    Env=CS_Environment.FindFirstNonNull() 
    
    load=CS_JointDOFLoad(joint,0)
    load.SetInputMeasure(vel)
    load.SetFunc('0.1*(-2*acos(-1)-time)',0) 
    
    Env.Loads.Add(load)
