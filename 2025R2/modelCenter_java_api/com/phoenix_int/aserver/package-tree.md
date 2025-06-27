# Hierarchy For Package com.phoenix_int.aserver

**Package Hierarchies**
- [All Packages](../../../overview-tree.html)

## Class Hierarchy

- java.lang.Object
    - com.phoenix_int.aserver.[PHXComponentBranch](../../../com/phoenix_int/aserver/PHXComponentBranch.html)
    - com.phoenix_int.aserver.[PHXComponentDescription](../../../com/phoenix_int/aserver/PHXComponentDescription.html)
    - com.phoenix_int.aserver.[PHXComponentVersion](../../../com/phoenix_int/aserver/PHXComponentVersion.html)
    - com.phoenix_int.aserver.[PHXGroup](../../../com/phoenix_int/aserver/PHXGroup.html)
    - com.phoenix_int.aserver.[PHXInvokeReturn](../../../com/phoenix_int/aserver/PHXInvokeReturn.html)
    - com.phoenix_int.aserver.[PHXMethodDescriptor](../../../com/phoenix_int/aserver/PHXMethodDescriptor.html)
    - com.phoenix_int.aserver.[PHXPropertyDescriptor](../../../com/phoenix_int/aserver/PHXPropertyDescriptor.html)
    - com.phoenix_int.aserver.[PHXRunShare](../../../com/phoenix_int/aserver/PHXRunShare.html) (implements com.phoenix_int.aserver.[IPHXMonitorable](../../../com/phoenix_int/aserver/IPHXMonitorable.html), com.phoenix_int.aserver.trace.IPHXTraceGenerator)
    - com.phoenix_int.aserver.[PHXRunShare.RunInfo](../../../com/phoenix_int/aserver/PHXRunShare.RunInfo.html)
    - com.phoenix_int.aserver.[PHXSimpleSelfManager](../../../com/phoenix_int/aserver/PHXSimpleSelfManager.html) (implements com.phoenix_int.aserver.[IPHXComponent](../../../com/phoenix_int/aserver/IPHXComponent.html), com.phoenix_int.aserver.[IPHXSelfManager](../../../com/phoenix_int/aserver/IPHXSelfManager.html))
        - com.phoenix_int.aserver.[PHXSimpleSelfManager2](../../../com/phoenix_int/aserver/PHXSimpleSelfManager2.html) (implements com.phoenix_int.aserver.[IPHXSelfManager2](../../../com/phoenix_int/aserver/IPHXSelfManager2.html))
            - com.phoenix_int.aserver.[PHXSimpleSelfManager3](../../../com/phoenix_int/aserver/PHXSimpleSelfManager3.html) (implements com.phoenix_int.aserver.IPHXConnector, com.phoenix_int.aserver.[IPHXSelfManager3](../../../com/phoenix_int/aserver/IPHXSelfManager3.html))
    - com.phoenix_int.aserver.[PHXVariableInfo](../../../com/phoenix_int/aserver/PHXVariableInfo.html)
    - java.lang.Throwable (implements java.io.Serializable)
        - java.lang.Exception
            - java.io.IOException
                - com.phoenix_int.aserver.[ProcessHaltedException](../../../com/phoenix_int/aserver/ProcessHaltedException.html)
            - com.phoenix_int.aserver.[PHXDFTException](../../../com/phoenix_int/aserver/PHXDFTException.html)
            - com.phoenix_int.aserver.[PHXInvalidNameException](../../../com/phoenix_int/aserver/PHXInvalidNameException.html)
            - com.phoenix_int.aserver.[PHXNameAlreadyInUseException](../../../com/phoenix_int/aserver/PHXNameAlreadyInUseException.html)
            - com.phoenix_int.aserver.[PHXNoSuchObjectException](../../../com/phoenix_int/aserver/PHXNoSuchObjectException.html)
                - com.phoenix_int.aserver.[PHXNoSuchWriteableObjectException](../../../com/phoenix_int/aserver/PHXNoSuchWriteableObjectException.html)

## Interface Hierarchy

- com.phoenix_int.aserver.[IPHXAlwaysWriteable](../../../com/phoenix_int/aserver/IPHXAlwaysWriteable.html)
- com.phoenix_int.aserver.[IPHXComponent](../../../com/phoenix_int/aserver/IPHXComponent.html)
    - com.phoenix_int.aserver.[IPHXAnalysis](../../../com/phoenix_int/aserver/IPHXAnalysis.html)
    - com.phoenix_int.aserver.[IPHXDriver](../../../com/phoenix_int/aserver/IPHXDriver.html)
- com.phoenix_int.aserver.[IPHXHaltableComponent](../../../com/phoenix_int/aserver/IPHXHaltableComponent.html)
- com.phoenix_int.aserver.[IPHXMonitorable](../../../com/phoenix_int/aserver/IPHXMonitorable.html)
- com.phoenix_int.aserver.[IPHXRunQueue](../../../com/phoenix_int/aserver/IPHXRunQueue.html)
- com.phoenix_int.aserver.[IPHXSelfManager](../../../com/phoenix_int/aserver/IPHXSelfManager.html)
    - com.phoenix_int.aserver.[IPHXSelfManager2](../../../com/phoenix_int/aserver/IPHXSelfManager2.html)
        - com.phoenix_int.aserver.[IPHXSelfManager3](../../../com/phoenix_int/aserver/IPHXSelfManager3.html)
- com.phoenix_int.aserver.[IPHXSetupFromFile](../../../com/phoenix_int/aserver/IPHXSetupFromFile.html)