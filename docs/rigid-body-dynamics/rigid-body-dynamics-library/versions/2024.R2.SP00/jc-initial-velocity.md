# Joint condition: initial velocity

This example shows how to impose an initial velocity to a joint. A velocity
driver (joint condition) is created using commands and added to the list of
initial conditions. During the transient solve, initial conditions are applied
only at t=0.

The complete list of commands and their explanation follows.

    Joint=CS_Joint.Find(_jid)
    driver=CS_Driver(Joint,System.Array[int]([0]),CS_Driver.E_MotionType.E_Velocity) 
    Env=CS_Environment.GetDefault() 
    Sys=Env.System
    (ret,found,time) = Sys.FindOrCreateInternalMeasure(CS_Measure.E_MeasureType.E_Time) 
    driver.SetInputMeasure(time) 
    driver.SetConstantValues(System.Array[float]([-4.9033])) 
    Env.InitialConditions.Add(driver)

1. The joint is retrieved using its ID(_jid):
  
    ```
    Joint=CS_Joint.Find(_jid)
    ```

2. A velocity driver (imposed velocity) is created on this joint:
  
    ```
    driver=CS_Driver(Joint,System.Array[int]([0]),CS_Driver.E_MotionType.E_Velocity)
    ```

    The driver constructor takes the joint instance as the first argument. The
    second argument is an array of integers that defines which DOFs are active. The
    physical meaning of these integers is dependent of the joint. For instance, if
    the underlying joint is a translation joint, 0 is the translation along the x-axis. But
    if the joint is revolute, 0 is now the rotation about the z-axis. Similarly, for a
    cylindrical joint, 0 is is the translation along the z-axis, and 1 is the rotation. The
    last argument gives the type of driver (here velocity). Drivers can be one of
    three types: position, velocity, or acceleration.

3. The default environment and corresponding system are retrieved:
  
    ```
    Env=CS_Environment.GetDefault() 
    Sys=Env.System
    ```

4. This command returns an instance of an internal measure. It is often used to obtain the instance of the time measure:
  
    ```
    (ret,found,time) = Sys.FindOrCreateInternalMeasure(CS_Measure.E_MeasureType.E_Time)
    ```

5. The time measure is specified as the input measure for the driver and a constant value is given to the driver. As the driver may be applied to several components of the joint, the values are given as an array of floats:
  
    ```
    driver.SetInputMeasure(time) 
    driver.SetConstantValues(System.Array[float](../[-4.9033])) 
    ```

6. The driver is added to the list of initial conditions. Consequently, it will be active only at t=0 and will give an initial velocity to the joint:
  
    ```
    Env.InitialConditions.Add(driver)
    ```
