# BodyLoad

A body load is a load that is applied to all bodies in the system. Gravity or
global acceleration are body loads.

The body load must implement a `GetAccelerationVector` method. This vector is
applied to the center of mass of each body. In order to maintain the energy
balance of the system, the body load must also implement a `ComputeEnergy`
method.

### Example: Acceleration varying with time

    HalfTime = 1.0
    HalfAmplitude = 10.0
    
    Env=CS_Environment.GetDefault() 
    Sys=Env.System
    (ret,found,time) = Sys.FindOrCreateInternalMeasure(CS_Measure.E_MeasureType.E_Time) 
    
    class MyBodyLoad(CS_UserBodyLoad):
        def __init__(self):
            CS_UserBodyLoad.__init__(self)
            self.value = 0.0
    
        def GetAccelerationVector(self,Mass,xyz,vel,bodyLoadForce):
            values = time.Values
            print 'MyBodyLoad::GetAccelerationVector'
            bodyLoadForce[0] = 0.0
            bodyLoadForce[1] = 0.0
            bodyLoadForce[2] = Mass*HalfAmplitude*math.sin(values[0]*3.14/(2.*HalfTime))
    
        def ComputeEnergy(self,Mass,xyz,vel):
            print 'MBodyLoad::ComputeEnergy'
            return 0.0
    
    load=MyBodyLoad()
    load.value = 10.0
    
    Env=CS_Environment.GetDefault()
    
    Env.BodyLoads.Add(load)
