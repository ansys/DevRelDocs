# Hierarchy For Package com.phoenix_int.aserver

**Package Hierarchies**
- [All Packages](./../../../overview-tree.md)

## Class Hierarchy

- java.lang.Object
    - com.phoenix_int.aserver.[PHXComponentBranch](PHXComponentBranch.md)
    - com.phoenix_int.aserver.[PHXComponentDescription](PHXComponentDescription.md)
    - com.phoenix_int.aserver.[PHXComponentVersion](PHXComponentVersion.md)
    - com.phoenix_int.aserver.[PHXGroup](PHXGroup.md)
    - com.phoenix_int.aserver.[PHXInvokeReturn](PHXInvokeReturn.md)
    - com.phoenix_int.aserver.[PHXMethodDescriptor](PHXMethodDescriptor.md)
    - com.phoenix_int.aserver.[PHXPropertyDescriptor](PHXPropertyDescriptor.md)
    - com.phoenix_int.aserver.[PHXRunShare](PHXRunShare.md) (implements com.phoenix_int.aserver.[IPHXMonitorable](IPHXMonitorable.md), com.phoenix_int.aserver.trace.IPHXTraceGenerator)
    - com.phoenix_int.aserver.[PHXRunShare.RunInfo](PHXRunShare.RunInfo.md)
    - com.phoenix_int.aserver.[PHXSimpleSelfManager](PHXSimpleSelfManager.md) (implements com.phoenix_int.aserver.[IPHXComponent](IPHXComponent.md), com.phoenix_int.aserver.[IPHXSelfManager](IPHXSelfManager.md))
        - com.phoenix_int.aserver.[PHXSimpleSelfManager2](PHXSimpleSelfManager2.md) (implements com.phoenix_int.aserver.[IPHXSelfManager2](IPHXSelfManager2.md))
            - com.phoenix_int.aserver.[PHXSimpleSelfManager3](PHXSimpleSelfManager3.md) (implements com.phoenix_int.aserver.IPHXConnector, com.phoenix_int.aserver.[IPHXSelfManager3](IPHXSelfManager3.md))
    - com.phoenix_int.aserver.[PHXVariableInfo](PHXVariableInfo.md)
    - java.lang.Throwable (implements java.io.Serializable)
        - java.lang.Exception
            - java.io.IOException
                - com.phoenix_int.aserver.[ProcessHaltedException](ProcessHaltedException.md)
            - com.phoenix_int.aserver.[PHXDFTException](PHXDFTException.md)
            - com.phoenix_int.aserver.[PHXInvalidNameException](PHXInvalidNameException.md)
            - com.phoenix_int.aserver.[PHXNameAlreadyInUseException](PHXNameAlreadyInUseException.md)
            - com.phoenix_int.aserver.[PHXNoSuchObjectException](PHXNoSuchObjectException.md)
                - com.phoenix_int.aserver.[PHXNoSuchWriteableObjectException](PHXNoSuchWriteableObjectException.md)

## Interface Hierarchy

- com.phoenix_int.aserver.[IPHXAlwaysWriteable](IPHXAlwaysWriteable.md)
- com.phoenix_int.aserver.[IPHXComponent](IPHXComponent.md)
    - com.phoenix_int.aserver.[IPHXAnalysis](IPHXAnalysis.md)
    - com.phoenix_int.aserver.[IPHXDriver](IPHXDriver.md)
- com.phoenix_int.aserver.[IPHXHaltableComponent](IPHXHaltableComponent.md)
- com.phoenix_int.aserver.[IPHXMonitorable](IPHXMonitorable.md)
- com.phoenix_int.aserver.[IPHXRunQueue](IPHXRunQueue.md)
- com.phoenix_int.aserver.[IPHXSelfManager](IPHXSelfManager.md)
    - com.phoenix_int.aserver.[IPHXSelfManager2](IPHXSelfManager2.md)
        - com.phoenix_int.aserver.[IPHXSelfManager3](IPHXSelfManager3.md)
- com.phoenix_int.aserver.[IPHXSetupFromFile](IPHXSetupFromFile.md)