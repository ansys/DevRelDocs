# ContactDebugMask

The ContactDebugMask object allows you to activate and customize the output of
contact points. It can also be used to modify the default behaviour of
contact. ContactDebugMask uses a set of switches that can be toggled on or
off.

ID table: `CS_ContactDebugMask`

### Constants

         E_DEBUG_Flag.E_None,
       (*)E_DEBUG_Flag.E_Point1: point on the side 1 (contact)
         E_DEBUG_Flag.E_Point2: point on the side 2 (target)
         E_DEBUG_Flag.E_Normal: contact normal
         E_DEBUG_Flag.E_Normal1: normal on side 1 (Reference)
         E_DEBUG_Flag.E_Normal2: normal on side 2 (Target)
         E_DEBUG_Flag.E_Violation: contact violation (rd.n = P1P2.n)
         E_DEBUG_Flag.E_MaterialVelocity: material normal velocity (V2-V1).n
      (*)E_DEBUG_Flag.E_TotalVelocity: total normal velocity (material velocity + sliding velocity)
         E_DEBUG_Flag.E_EntityId1: geometric entity Id on side 1 (contact)
         E_DEBUG_Flag.E_EntityId2: geometric entity Id on side 2 (target)
         E_DEBUG_Flag.E_SurfaceId1: surface Id on side 1 (contact)
         E_DEBUG_Flag.E_SurfaceId2: surface Id on side 2 (target)
      (*)E_DEBUG_Flag.E_EntityType: type of geometric entities (vertex/edge/surface)
      (*)E_DEBUG_Flag.E_GeometricStatus: status of the contact position and velocity (touching,separated,...)
         E_DEBUG_Flag.E_Accepted: points that are finally kept
         E_DEBUG_Flag.E_InconsistentPoint: points not consistent with rank analysis
         E_DEBUG_Flag.E_ReceivedPoint: all points send by the contact
         E_DEBUG_Flag.E_DeletedPoint: points deleted during Geometric Filtering
         E_DEBUG_Flag.E_TrackedPoint: points successfully tracked
         E_DEBUG_Flag.E_TrackedPointFailure: points that failed for tracking
         E_DEBUG_Flag.E_NormalAngle: angle between normal (in degrees)
         E_DEBUG_Flag.E_SlidingVelocity1: sliding velocity on side 1 (contact) in global coordinates 
         E_DEBUG_Flag.E_SlidingVelocity2: sliding velocity on side 2 (target) in global coordinates
         E_DEBUG_Flag.E_FailSafeFilteringMode: adjust contact radius to accept at least one point
         E_DEBUG_Flag.E_CheckIntegration: check consistency of integration between solver and contact
         E_DEBUG_Flag.E_RankAnalysis: result from rank analysis
         E_DEBUG_Flag.E_Transition: result from edge transitions analysis
      (*)E_DEBUG_Flag.E_NewTimeStep: at beginning of time step 
         E_DEBUG_Flag.E_BeforeCorrection: before external loop of correction 
         E_DEBUG_Flag.E_BeforeCorrectionPlus: before geometric correction
         E_DEBUG_Flag.E_All
    
### Members

None

### Member functions

`SetOn(E_DEBUG_Flag flag)`


Enable output of contact points information specified by flag.

`SetOff(E_DEBUG_Flag flag)`

Disable output of contact points information specified by flag.

### Example

    CS_ContactDebugMask.SetOn(E_DEBUG_Flag.E_Accepted)
