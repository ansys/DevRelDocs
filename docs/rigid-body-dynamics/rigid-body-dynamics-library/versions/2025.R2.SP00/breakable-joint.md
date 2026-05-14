# Breakable joint

This example considers a breakable joint. A breakable joint is a joint that
cannot withstand an internal force higher than a given value. To create a
breakable joint:

1. Get the joint by inserting a command on a planar joint:

    ```
    joint=CS_Joint.Find(_jid)
    ```

2. Create a joint condition to prescribe zero velocity on the two translational degrees of freedom:

    ```
    driver=CS_Driver(Joint,System.Array[int]([0,1]),CS_Driver.E_MotionType.E_Velocity)
    ```

3. Define the value of the velocity, then retrieve the time measure:

    ```
    Env=CS_Environment.GetDefault()
    Sys=Env.System
    (ret,found,time)=Sys.FindOrCreateInternalMeasure(CS_Measure.E_MeasureType.E_Time)
    ```

4. Define the time as a variable, and use constant values for the two components:

    ```
    driver.SetInputMeasure(time)
    driver.SetConstantValues(System.Array[float]([0.,0.]))
    ```

    Next, make the driver only active if the force in the joint is less than a
    maximum threshold of 3N. To do that, create a [Condition](condition.md) based on the joint
    force measure norm.

5. Retrieve the force on the joint:

    ```
    force=joint.GetForce()
    ```

6. Create a component measure, that is the norm 2 of the force. To be computed at each time step, this measure has to be added to the system.


    ```
    norm=CS_ComponentMeasure(force,-2)
    Sys.AddMeasure(norm)
    ```

7. Now, create the condition and assign it to the driver:

    ```
    cond=CS_Condition(CS_Condition.E_ConditionType.E_LessThan,norm,3.0)
    driver.Condition=cond
    ```

8. Finally, add the driver to the environment:

    ```
    Env.Drivers.Add(driver)
    ```
