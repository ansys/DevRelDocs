# UserTable

A user table is a function with `i` input values and `o` output values, with
an evaluator that is defined in IronPython, allowing complex variation, or
even evaluation performed outside the solver.

Example:

    LeftVarCoefX = CS_Variable();
    
    # input 0,1,2 of the variable
    LeftVarCoefX.AddInputMeasure( LeftRelTrans )
    
    # input 3 to 8 of the variable
    LeftVarCoefX.AddInputMeasure( LeftRelVelo )
    
    class XForceTable(CS_UserTable):
        def __init__(self,sizeIn,sizeOut):
            CS_UserTable.__init__(self,sizeIn,sizeOut)
    
        def Evaluate(self,In,Out):
            TX = In[0]
            VX = In[3]
    
            Force = 1000.0*TX
            Out[0] = Force
            print 'ForceX = {0:e}'.format(Out[0])
            return 0
    
    LeftForceTableX = XForceTable( 9, 1 )
    LeftVarCoefX.SetTable( LeftForceTableX )
