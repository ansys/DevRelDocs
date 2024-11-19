<a id="ModelCenter_8odl"></a>
# File ModelCenter.odl

![][IDL]

**Location**: `ModelCenter/src/ModelCenter.odl`





## Classes

* [ModelCenter::IAddToModel](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel)
* [ModelCenter::IArray](interfaceModelCenter_1_1IArray.md#interfaceModelCenter_1_1IArray)
* [ModelCenter::IAssemblies](interfaceModelCenter_1_1IAssemblies.md#interfaceModelCenter_1_1IAssemblies)
* [ModelCenter::IAssembly](interfaceModelCenter_1_1IAssembly.md#interfaceModelCenter_1_1IAssembly)
* [ModelCenter::IBooleanArray](interfaceModelCenter_1_1IBooleanArray.md#interfaceModelCenter_1_1IBooleanArray)
* [ModelCenter::IBooleanVariable](interfaceModelCenter_1_1IBooleanVariable.md#interfaceModelCenter_1_1IBooleanVariable)
* [ModelCenter::IComponent](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent)
* [ModelCenter::IComponents](interfaceModelCenter_1_1IComponents.md#interfaceModelCenter_1_1IComponents)
* [ModelCenter::IIfComponent](interfaceModelCenter_1_1IIfComponent.md#interfaceModelCenter_1_1IIfComponent)
* [ModelCenter::IScriptComponent](interfaceModelCenter_1_1IScriptComponent.md#interfaceModelCenter_1_1IScriptComponent)
* [ModelCenter::ICustomDesignPoint](interfaceModelCenter_1_1ICustomDesignPoint.md#interfaceModelCenter_1_1ICustomDesignPoint)
* [ModelCenter::IDataCollector](interfaceModelCenter_1_1IDataCollector.md#interfaceModelCenter_1_1IDataCollector)
* [ModelCenter::IDoubleArray](interfaceModelCenter_1_1IDoubleArray.md#interfaceModelCenter_1_1IDoubleArray)
* [ModelCenter::IDoubleVariable](interfaceModelCenter_1_1IDoubleVariable.md#interfaceModelCenter_1_1IDoubleVariable)
* [ModelCenter::IObjectVariable](interfaceModelCenter_1_1IObjectVariable.md#interfaceModelCenter_1_1IObjectVariable)
* [ModelCenter::IFeature](interfaceModelCenter_1_1IFeature.md#interfaceModelCenter_1_1IFeature)
* [ModelCenter::IFileArray](interfaceModelCenter_1_1IFileArray.md#interfaceModelCenter_1_1IFileArray)
* [ModelCenter::IFileVariable](interfaceModelCenter_1_1IFileVariable.md#interfaceModelCenter_1_1IFileVariable)
* [ModelCenter::IGeometryVariable](interfaceModelCenter_1_1IGeometryVariable.md#interfaceModelCenter_1_1IGeometryVariable)
* [ModelCenter::IGroup](interfaceModelCenter_1_1IGroup.md#interfaceModelCenter_1_1IGroup)
* [ModelCenter::IGroups](interfaceModelCenter_1_1IGroups.md#interfaceModelCenter_1_1IGroups)
* [ModelCenter::IIntegerArray](interfaceModelCenter_1_1IIntegerArray.md#interfaceModelCenter_1_1IIntegerArray)
* [ModelCenter::IIntegerVariable](interfaceModelCenter_1_1IIntegerVariable.md#interfaceModelCenter_1_1IIntegerVariable)
* [ModelCenter::IJobManager](interfaceModelCenter_1_1IJobManager.md#interfaceModelCenter_1_1IJobManager)
* [ModelCenter::IModelCenter](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter)
* [ModelCenter::ILoginCallback](interfaceModelCenter_1_1ILoginCallback.md#interfaceModelCenter_1_1ILoginCallback)
* [ModelCenter::ITradeStudyEvents](interfaceModelCenter_1_1ITradeStudyEvents.md#interfaceModelCenter_1_1ITradeStudyEvents)
* [ModelCenter::IShowHelpEvents](interfaceModelCenter_1_1IShowHelpEvents.md#interfaceModelCenter_1_1IShowHelpEvents)
* [ModelCenter::Application](classModelCenter_1_1Application.md#classModelCenter_1_1Application)
* [ModelCenter::INetworkLocations](interfaceModelCenter_1_1INetworkLocations.md#interfaceModelCenter_1_1INetworkLocations)
* [ModelCenter::IRefArrayProp](interfaceModelCenter_1_1IRefArrayProp.md#interfaceModelCenter_1_1IRefArrayProp)
* [ModelCenter::IReferenceArray](interfaceModelCenter_1_1IReferenceArray.md#interfaceModelCenter_1_1IReferenceArray)
* [ModelCenter::IReferenceVariable](interfaceModelCenter_1_1IReferenceVariable.md#interfaceModelCenter_1_1IReferenceVariable)
* [ModelCenter::IRefProp](interfaceModelCenter_1_1IRefProp.md#interfaceModelCenter_1_1IRefProp)
* [ModelCenter::IStringArray](interfaceModelCenter_1_1IStringArray.md#interfaceModelCenter_1_1IStringArray)
* [ModelCenter::IStringVariable](interfaceModelCenter_1_1IStringVariable.md#interfaceModelCenter_1_1IStringVariable)
* [ModelCenter::IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable)
* [ModelCenter::IVariableDescription](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription)
* [ModelCenter::IVariableLink](interfaceModelCenter_1_1IVariableLink.md#interfaceModelCenter_1_1IVariableLink)
* [ModelCenter::IVariableLinks](interfaceModelCenter_1_1IVariableLinks.md#interfaceModelCenter_1_1IVariableLinks)
* [ModelCenter::IVariables](interfaceModelCenter_1_1IVariables.md#interfaceModelCenter_1_1IVariables)
* [ModelCenter::IPHXFormat](interfaceModelCenter_1_1IPHXFormat.md#interfaceModelCenter_1_1IPHXFormat)
* [ModelCenter::IDataMonitor](interfaceModelCenter_1_1IDataMonitor.md#interfaceModelCenter_1_1IDataMonitor)
* [ModelCenter::IGlobalParameters](interfaceModelCenter_1_1IGlobalParameters.md#interfaceModelCenter_1_1IGlobalParameters)
* [ModelCenter::ILogger](interfaceModelCenter_1_1ILogger.md#interfaceModelCenter_1_1ILogger)
* [ModelCenter::ICachePin](interfaceModelCenter_1_1ICachePin.md#interfaceModelCenter_1_1ICachePin)
* [ModelCenter::IFileSystemInfo](interfaceModelCenter_1_1IFileSystemInfo.md#interfaceModelCenter_1_1IFileSystemInfo)
* [ModelCenter::IVizContainer](interfaceModelCenter_1_1IVizContainer.md#interfaceModelCenter_1_1IVizContainer)

## Namespaces

* [ModelCenter](namespaceModelCenter.md#namespaceModelCenter)

## Source

```
// ModelCenter.odl : type library source for ModelCenter.exe

// This file will be processed by the MIDL compiler to produce the type library (ModelCenter.tlb).

// Change STKAnalyzer Library GUID, CLSID, and progId for every release no matter major or minor releases, to support 
// Independency from different releases. This value is unique for each release and must match the LIBID_PHXModelCenter 
// value in ModelCenter.cpp and ModelCenterTypeLibrary/dummy.cpp
#if defined(STKOEM)
[uuid(F7548BF3-FB88-43F0-BEC0-D199070AF13C), version(1.0),
   helpstring("Phoenix Integration - STKAnalyzer") ]
#else
[ uuid(757DD9B4-E5E1-11d2-81A3-0060975E6478), version(1.0),
   helpstring("Phoenix Integration - ModelCenter") ]
#endif
library ModelCenter
{
   importlib("stdole32.tlb");

   // -------------------------------------------------------------- General Enumerations

   // DO NOT CHANGE THE NUMERIC CONSTANTS!
   // (The Java API relies on them staying constant.)

   typedef enum
   {
      METADATA_TYPE_STRING = 0,
      METADATA_TYPE_DOUBLE = 1,
      METADATA_TYPE_LONG = 2,
      METADATA_TYPE_BOOLEAN = 3,
      METADATA_TYPE_XML = 4,
      METADATA_TYPE_FORCE_TO_32_BITS = 65536
   } MetadataType;

   typedef enum
   {
      METADATA_ACCESS_PRIVATE = 0,
      METADATA_ACCESS_READONLY = 1,
      METADATA_ACCESS_PUBLIC = 2,
      METADATA_ACCESS_FORCE_TO_32_BITS = 65536
   } MetadataAccess;

   typedef enum
   {
      TS_FORMAT_PXTZ = 0,

      TS_FORMAT_PXT_COMPRESSED = 1,
   
      TS_FORMAT_PXT_UNCOMPRESSED = 2,

      TS_FORMAT_TSTUDY = 3
   } TradeStudyFormat; 

   // -------------------------------------------------------------- IAddToModel
   [ uuid(6B3DCC47-6475-411C-977E-337F73A43771),
      helpstring("AddToModel object") ]
   dispinterface IAddToModel
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(7)] boolean prevalidateInputs;
         [id(8)] boolean autoRun;

      methods:
         [id(1)] void addToModel();
         [id(2)] void updateComponent();
         [id(3)] IDispatch* getComponent();
         [id(4)] BSTR getRegID();
         [id(5)] IDispatch* addInput(BSTR name, BSTR type, [optional]VARIANT value);
         [id(6)] IDispatch* addOutput(BSTR name, BSTR type, [optional]VARIANT value);
         [id(9)] BSTR getProgID();
         [id(10)] void setAuthor(BSTR author);
         [id(11)] void setDescription(BSTR description);
         [id(12)] void setVersion(BSTR version);
         [id(13)] void setHelpURL(BSTR helpURL);
         [id(14)] void setKeywords(BSTR keywords);
         [id(15)] void clearBusyFlag();
         [id(16)] boolean addToModel2();
         [id(17)] void setComponentRequirements(BSTR compReq);
         [id(18)] void setIcon(BSTR iconFile);
         [id(19)] void addMethod(BSTR name, [optional]VARIANT displayName);
         [id(20)] IDispatch* addInput2(BSTR name, BSTR type, BSTR classURL, [optional]VARIANT value);
         [id(21)] IDispatch* addOutput2(BSTR name, BSTR type, BSTR classURL, [optional]VARIANT value);
         [id(22)] BSTR addToModel3(BSTR suggestedName);
   };

    // -------------------------------------------------------------- IArray
   [ uuid(6CBF1A48-679A-11D3-A518-00A024B5452E),
       helpstring("Array base class") ]
   dispinterface IArray
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
          // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

         // our properties
         [id(1001)] long size;
         [id(1005)] boolean autoSize;
         [id(1006)] long numDimensions;
         [id(1010)] long length;

      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

         // our methods

         [id(1002)] BSTR toStringEx(long index);
         [id(1003)] void fromStringEx(BSTR value, long index);
         [id(1004)] BSTR toStringAbsoluteEx(long index);
         [id(1007)] long getLength( [optional] VARIANT dim);
         [id(1008)] void setLength(long length, [optional] VARIANT dim);
         [id(1009)] void setDimensions( long d1, [optional] VARIANT d2, 
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);
         [id(1011)] long getSize( [optional] VARIANT dim);
         [id(1012)] void setSize(long length, [optional] VARIANT dim);
         [id(1013)] VARIANT getDimensions();
   };

   // -------------------------------------------------------------- IAssemblies
   [ uuid(0D132C3C-CA70-11D5-A008-0010A4C22C0F),
      helpstring("Assemblies object") ]
   dispinterface IAssemblies
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] VARIANT Count;

      methods:
         [id(2)] VARIANT Item(VARIANT id);
   };

   // -------------------------------------------------------------- IAssembly
   typedef enum
   {
      DO_VERSIONING = 0,
      DO_NOT_VERSION = 1,
      DO_VERSIONING_IF_POSSIBLE = 2
   } VersionStatus;

   [ uuid(0D132C36-CA70-11D5-A008-0010A4C22C0F),
      helpstring("Assembly") ]
   dispinterface IAssembly
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] VARIANT Variables;
         [id(2)] VARIANT Groups;
         [id(3)] VARIANT Assemblies;
         [id(4)] VARIANT Components;
         [id(9)] int iconID;
         [id(15)] int IndexInParent;
         [id(16)] LPDISPATCH ParentAssembly;
         [id(17)] BSTR AssemblyType;

         [id(18)] VARIANT userData;

      methods:
         [id(5)] BSTR getName();
         [id(6)] BSTR getFullName();
         [id(7)] IDispatch* addAssembly(BSTR name, [optional]VARIANT assemblyType);
         [id(8)] IDispatch* addVariable(BSTR name, BSTR type);
         [id(10)] int getPositionX();
         [id(11)] int getPositionY();
         [id(12)] void rename(BSTR name);
         [id(13)] void deleteVariable(BSTR name);
         [id(14)] LPDISPATCH addAssembly2(BSTR name, VARIANT xPos, VARIANT yPos, [optional]VARIANT assemblyType);
         [id(19)] void convertToSubmodel(BSTR fileName, VersionStatus versionStatus, BSTR checkinMessage);
         [id(20)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(21)] VARIANT getMetadata(BSTR name);
   };

   // -------------------------------------------------------------- IBooleanArray
   [ uuid(6CBF1A4F-679A-11D3-A518-00A024B5452E),
      helpstring("Boolean variable array") ]
   dispinterface IBooleanArray
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
          // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

          // inherited from IArray
         [id(1001)] long size;
         [id(1006)] long numDimensions;

          // our properties
         [id(2002)] BSTR description;

      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // inherited from IArray
         [id(1002)] BSTR toStringEx(long index);
         [id(1003)] void fromStringEx(BSTR value, long index);
         [id(1004)] BSTR toStringAbsoluteEx(long index);
         [id(1007)] long getLength( [optional] VARIANT dim);
         [id(1008)] void setLength(long length, [optional] VARIANT dim);
         [id(1009)] void setDimensions( long d1, [optional] VARIANT d2, 
               [optional] VARIANT d3, [optional] VARIANT d4,
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);

            // our methods
         [id(2001), propget] boolean value(VARIANT d1, [optional] VARIANT d2,
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2001), propput] void value(VARIANT d1, [optional] VARIANT d2, 
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10,
               BOOL newValue);
         [id(2003)] boolean getValue(VARIANT d1, [optional] VARIANT d2, 
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2004)] void setValue(BOOL value, VARIANT d1, [optional] VARIANT d2,
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2005)] VARIANT getArray();
         [id(2006)] void setArray( VARIANT array );
         [id(2007)] boolean getValueAbsolute(VARIANT d1, [optional] VARIANT d2,
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);
   };

    // -------------------------------------------------------------- IBooleanVariable
   [ uuid(985910EA-C34D-11D2-A4E8-00A024B5452E),
      helpstring("Boolean variable") ]
   dispinterface IBooleanVariable
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

          // our properties
         [id(1001)] boolean value;
         [id(1004)] boolean valueAbsolute;
         [id(1002)] BSTR description;

      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // our methods
         [id(1003)] void setInitialValue(BOOL value);

   };

   // -------------------------------------------------------------- IComponent
   [ uuid(526AC1E1-D718-11D3-A544-00A024B5452E),
      helpstring("Component") ]
   dispinterface IComponent
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(5)] VARIANT Variables;
         [id(6)] VARIANT Groups;
         [id(11)] VARIANT userData;
         [id(15)] VARIANT AssociatedFiles;
         [id(18)] int IndexInParent;
         [id(19)] LPDISPATCH ParentAssembly;

      methods:
         [id(1)] BSTR getName();
         [id(2)] BSTR getFullName();
         [id(3)] void run();
         [id(4)] BSTR getSource();
         [id(7)] void invokeMethod(BSTR method);
         [id(8)] void invalidate();
         [id(9)] void reconnect();
         [id(10)] void downloadValues();
         [id(12)] LPDISPATCH getVariable(BSTR name);
         [id(13)] int getPositionX();
         [id(14)] int getPositionY();
         [id(16)] void rename(BSTR name);
         [id(17)] BSTR getType();
         [id(20)] void show();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(22)] VARIANT getMetadata(BSTR name);
   };

    // -------------------------------------------------------------- IComponents
   [ uuid(712469FD-A1E9-4450-BE93-457ED13A91F1),
      helpstring("Components object") ]
   dispinterface IComponents
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] VARIANT Count;

      methods:
         [id(2)] VARIANT Item(VARIANT id);
   };

   // -------------------------------------------------------------- IIfComponent
   [ uuid(897c0864-810e-444a-b648-f6f08c639bc3),
      helpstring("If component") ]
   dispinterface IIfComponent
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         //inherited from IComponent
         [id(5)] VARIANT Variables;
         [id(6)] VARIANT Groups;
         [id(11)] VARIANT userData;
         [id(15)] VARIANT AssociatedFiles;
         [id(18)] int IndexInParent;
         [id(19)] LPDISPATCH ParentAssembly;

         //our properties
         [id(1001)] boolean exclusive;
         [id(1002)] boolean runLastBranchByDefault;
         
      methods:

         //inherited from IComponent
         [id(1)] BSTR getName();
         [id(2)] BSTR getFullName();
         [id(3)] void run();
         [id(4)] BSTR getSource();
         [id(7)] void invokeMethod(BSTR method);
         [id(8)] void invalidate();
         [id(9)] void reconnect();
         [id(10)] void downloadValues();
         [id(12)] LPDISPATCH getVariable(BSTR name);
         [id(13)] int getPositionX();
         [id(14)] int getPositionY();
         [id(16)] void rename(BSTR name);
         [id(17)] BSTR getType();
         [id(20)] void show();

         //our methods
         [id(1003)] int getNumBranches();
         [id(1004)] BSTR getBranchCondition( int index );
         [id(1005)] void setBranchCondition( int index, BSTR condition );
         [id(1006)] BSTR getBranchName( int index );
         [id(1007)] void renameBranch( int index, BSTR name );
   };

   // -------------------------------------------------------------- IScriptComponent
   [ uuid(126c0864-810e-535a-b648-f6f08c548bc3),
      helpstring("Script component") ]
   dispinterface IScriptComponent
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         //inherited from IComponent
         [id(5)] VARIANT Variables;
         [id(6)] VARIANT Groups;
         [id(11)] VARIANT userData;
         [id(15)] VARIANT AssociatedFiles;
         [id(18)] int IndexInParent;
         [id(19)] LPDISPATCH ParentAssembly;

         [id(1001)] BSTR language;
         [id(1002)] double timeout;
         [id(1003)] boolean forwardSchedule;
         [id(1004)] boolean prevalidate;
         
      methods:

         //inherited from IComponent
         [id(1)] BSTR getName();
         [id(2)] BSTR getFullName();
         [id(3)] void run();
         [id(4)] BSTR getSource();
         [id(7)] void invokeMethod(BSTR method);
         [id(8)] void invalidate();
         [id(9)] void reconnect();
         [id(10)] void downloadValues();
         [id(12)] LPDISPATCH getVariable(BSTR name);
         [id(13)] int getPositionX();
         [id(14)] int getPositionY();
         [id(16)] void rename(BSTR name);
         [id(17)] BSTR getType();
         [id(20)] void show();

         //our methods
         [id(1010)] void setSourceFromString(BSTR script);
         [id(1011)] void setSourceFromFile(BSTR file);
         [id(1012)] LPDISPATCH addVariable(BSTR name, BSTR type, BSTR state);
         [id(1013)] void removeVariable(BSTR name);
         [id(1014)] void setVariables(VARIANT inputs, BSTR outputs);
         [id(1015)] BSTR getSourceScript();
   };

    // -------------------------------------------------------------- ICustomDesignPoint
    [ uuid(214FB734-840B-4BC1-A063-1D2DFA0C6D0A),
      helpstring("Data Collector Custom Design Point object") ]
   dispinterface ICustomDesignPoint
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // properties go here
         
      methods:
         [id(1)] void addVariable(BSTR name, BSTR equation, BOOL isNumeric, 
                            BOOL isValid, BOOL isInput,BSTR type, 
                            BSTR units, BSTR value);
         [id(2)] void runFailed(BSTR reason);
   };

    // -------------------------------------------------------------- IDataCollector
   [ uuid(1539CF41-7B1A-11D3-A526-00A024B5452E),
      helpstring("Data Collector object") ]
   dispinterface IDataCollector
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // properties go here
         [id(30)] BOOL isVisible;
         
      methods:
         [id(1)] void storeCurrentDesignPoint();
         [id(2)] void enableGraphTab(BOOL flag);
         [id(3)] void show();
         [id(4)] void addCustom(BSTR variable, BSTR label);
         [id(5)] void selectX(BSTR name);
         [id(6)] void selectY(BSTR name);
         [id(7)] void setNumExpectedRuns(long numRuns);
         [id(8)] void startRuns();
         [id(9)] void endRuns();
         [id(10)] long getNumFailedRuns();
         [id(11)] int getErrorID( long run );
         [id(12)] BSTR getErrorMessage( long run );
         [id(13)] long getNumRuns();
         [id(14)] long getNumVariables();
         [id(15)] VARIANT getValue( VARIANT index, long run );
         [id(16)] IDispatch* getVariableDescription( VARIANT index );
         [id(17)] BOOL isValid( VARIANT index, long run );
         [id(18)] void save(BSTR fileName, BSTR displayName, BSTR description, BSTR author, BOOL saveModel);
         [id(19)] void exportToCSV(BSTR fileName);
         [id(20)] BSTR toString();
         [id(21)] void fromString(BSTR str);
         [id(22)] void enableCarpetPlotTab(BSTR var1, BSTR var2, BSTR plotVar);
         [id(23)] void storeCustomDesignPoint(IDispatch* customDesignPoint);
         [id(24)] void createEmptyRuns(long numEmptyRuns);
         [id(25)] void setCustomRun(long index,IDispatch* customDesignPoint);
         [id(26)] IDispatch* newCustomDesignPoint();
         [id(27)] void enableMainEffectsTab();
         [id(28)] IDispatch* getDataExplorer();
         [id(29)] void hide();
   };

    // -------------------------------------------------------------- IDoubleArray
   [ uuid(514D1080-6A11-11D3-A518-00A024B5452E),
      helpstring("Double variable array") ]
   dispinterface IDoubleArray
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
          // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

          // inherited from IArray
         [id(1001)] long size;
         [id(1006)] long numDimensions;

            // our properties
         [id(2002)] double lowerBound;
         [id(2003)] double upperBound;
         [id(2004)] BSTR description;
         [id(2005)] BSTR units;
         [id(2006)] BSTR enumAliases;
         [id(2007)] BSTR enumValues;
         [id(2014)] BSTR format;
         
      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // inherited from IArray
      [id(1002)] BSTR toStringEx(long index);
         [id(1003)] void fromStringEx(BSTR value, long index);
         [id(1004)] BSTR toStringAbsoluteEx(long index);
         [id(1007)] long getLength( [optional] VARIANT dim);
         [id(1008)] void setLength(long length, [optional] VARIANT dim);
         [id(1009)] void setDimensions( long d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);

            // our methods
         [id(2001), propget] double value(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2001), propput] void value(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10,
                double newValue);
         [id(2008)] boolean hasLowerBound();
         [id(2009)] boolean hasUpperBound();
         [id(2010)] double getValue(VARIANT d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2011)] void setValue(double value, VARIANT d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2012)] VARIANT getArray();
         [id(2013)] void setArray( VARIANT array );
         [id(2015)] BSTR toFormattedStringEx(long index);
         [id(2016)] void fromFormattedStringEx(BSTR value, long index);
         [id(2017)] BSTR toFormattedStringAbsoluteEx(long index);
         [id(2018)] void clearUpperBound();
         [id(2019)] void clearLowerBound();
         [id(2020)] double getValueAbsolute(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8,
                [optional] VARIANT d9, [optional] VARIANT d10);
   };

    // -------------------------------------------------------------- IDoubleVariable
   [ uuid(985910E7-C34D-11D2-A4E8-00A024B5452E),
      helpstring("Double variable") ]
   dispinterface IDoubleVariable
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
          // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

         // our properties
         [id(1001)] double value;
         [id(1017)] double valueAbsolute;
         [id(1002)] double lowerBound;
         [id(1003)] double upperBound;
         [id(1004)] BSTR units;
         [id(1005)] BSTR description;
         [id(1006)] BSTR enumValues;
         [id(1007)] BSTR enumAliases;
         [id(1011)] BSTR format;

      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // our methods
         [id(1008)] void setInitialValue(double value);
         [id(1009)] boolean hasLowerBound();
         [id(1010)] boolean hasUpperBound();
         [id(1012)] BSTR toFormattedString();
         [id(1013)] void fromFormattedString(BSTR value);
         [id(1014)] BSTR toFormattedStringAbsolute();
         [id(1015)] void clearUpperBound();
         [id(1016)] void clearLowerBound();
         
   };

    // -------------------------------------------------------------- IObjectVariable
   [ uuid(989FF781-95F2-4cfa-A10E-57D169BDD0F3),
      helpstring("Object variable") ]
   dispinterface IObjectVariable
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
          // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

         // our properties
         [id(1001)] BSTR value;
         [id(1002)] BSTR description;

      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // our methods
         [id(1011)] BSTR getClassURL();
         [id(1012)] VARIANT getMemberValue(BSTR member);
         [id(1013)] VARIANT getMemberValueAbsolute(BSTR member);
         [id(1014)] void setMemberValue(BSTR member, BSTR value);
         [id(1015)] void setMember(BSTR member, BSTR value, BSTR type);
         [id(1016)] void deleteMember(BSTR member);
         [id(1017)] void deleteAllMembers();
         [id(1018)] VARIANT callMethod(BSTR method);
         [id(1019)] boolean isNonStrictType();
         [id(1020)] BSTR toXML();
         [id(1021)] void fromXML(BSTR str);
         [id(1022)] boolean hasMember(BSTR member);
         [id(1023)] boolean isNumericMember(BSTR member);
         [id(1024)] void reinitialize();
         [id(1025)] long getMemberLength(BSTR member, [optional] VARIANT dim);
         [id(1026)] void setMemberLength(BSTR member, long length, [optional] VARIANT dim);
         [id(1027)] void setMemberDimensions( BSTR member, 
                long d1, [optional] VARIANT d2, 
                [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(1028)] long getMemberNumDimensions( BSTR member );
         [id(1029)] VARIANT getMemberDimensions( BSTR member );
         [id(1030)] BSTR getMemberType(BSTR member);
         [id(1031)] boolean hasMemberLowerBound(BSTR member);
         [id(1032)] boolean hasMemberUpperBound(BSTR member);
         [id(1033)] double getMemberLowerBound(BSTR member);
         [id(1034)] void setMemberLowerBound(BSTR member, double lowerBound);
         [id(1035)] double getMemberUpperBound(BSTR member);
         [id(1036)] void setMemberUpperBound(BSTR member, double upperBound);
         [id(1037)] BSTR getMemberEnumValues(BSTR member);
         [id(1038)] void setMemberEnumValues(BSTR member, BSTR enumValues);
         [id(1039)] BSTR getMemberEnumAliases(BSTR member);
         [id(1040)] void setMemberEnumAliases(BSTR member, BSTR enumAliases);
         [id(1041)] BSTR getMemberDescription(BSTR member);
         [id(1042)] void setMemberDescription(BSTR member, BSTR description);
         [id(1043)] BSTR getMemberUnits(BSTR member);
         [id(1044)] void setMemberUnits(BSTR member, BSTR units);
         [id(1045)] BSTR getMemberProperty(BSTR member, BSTR propertyName);
         [id(1046)] void setMemberProperty(BSTR member, BSTR propertyName, BSTR propertyValue);
         [id(1047)] VARIANT getMemberList(BSTR member);
         [id(1048)] VARIANT getMethodList();
         [id(1049)] void toFile(BSTR member, BSTR fileName, VARIANT encoding);
         [id(1050)] void fromFile(BSTR member, BSTR fileName);
         [id(1051)] void toFileAbsolute(BSTR member, BSTR fileName, VARIANT encoding);
         [id(1052)] boolean getIsBinary(BSTR member);
         [id(1053)] void setIsBinary(BSTR member, boolean isBinary);
         [id(1054)] BSTR getFileName(BSTR member);
         [id(1055)] void setFileName(BSTR member, BSTR fileName);
         [id(1056)] BSTR getFileExtension(BSTR member);
         [id(1057)] void setFileExtension(BSTR member, BSTR fileExtension);
         [id(1101)] VARIANT getArrayMemberValueAbsolute(BSTR member, VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                  [optional] VARIANT d5, [optional] VARIANT d6, 
                  [optional] VARIANT d7, [optional] VARIANT d8, 
                  [optional] VARIANT d9, [optional] VARIANT d10);
         [id(1102)] VARIANT getArrayMemberValue(BSTR member, VARIANT d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                  [optional] VARIANT d5, [optional] VARIANT d6, 
                  [optional] VARIANT d7, [optional] VARIANT d8, 
                  [optional] VARIANT d9, [optional] VARIANT d10);
         [id(1103)] void setArrayMemberValue(BSTR member, BSTR value, VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                  [optional] VARIANT d5, [optional] VARIANT d6, 
                  [optional] VARIANT d7, [optional] VARIANT d8, 
                  [optional] VARIANT d9, [optional] VARIANT d10);
         [id(1104)] VARIANT getArrayMemberAbsolute(BSTR member);
         [id(1105)] VARIANT getArrayMember(BSTR member);
         [id(1106)] void setArrayMember( BSTR member, VARIANT array );


   };
    // -------------------------------------------------------------- IFeature
   [ uuid(22D5CD66-AF6F-48F7-AC03-80095DE85C94),
      helpstring("FlexLM Feature") ]
   dispinterface IFeature
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // properties go here

      methods:
         [id(1)] void checkin();
   };

    // -------------------------------------------------------------- IFileArray
   [ uuid(14F18BD0-5BD9-4fcc-B084-7D95360631BE),
      helpstring("File variable array") ]
   dispinterface IFileArray
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

          // inherited from IArray
         [id(1001)] long size;
         [id(1006)] long numDimensions;

         // our properties
         [id(2002)] boolean isBinary;
         [id(2003)] BSTR description;
         [id(2013)] boolean saveWithModel;
         //NOT SUPPORTED [id(2014)] boolean directTransfer;
   
      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

         // inherited from IArray
         [id(1002)] BSTR toStringEx(long index);
         [id(1003)] void fromStringEx(BSTR value, long index);
         [id(1004)] BSTR toStringAbsoluteEx(long index);
         [id(1007)] long getLength( [optional] VARIANT dim);
         [id(1008)] void setLength(long length, [optional] VARIANT dim);
         [id(1009)] void setDimensions( long d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);

         // our methods
         [id(2001), propget] BSTR value(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2001), propput] void value(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10,
                BSTR newValue);
         [id(2004)] BSTR getFileExtension(VARIANT d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2005)] void setFileExtension(BSTR value, VARIANT d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2006), propget] BSTR fileExtension(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2006), propput] void fileExtension(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10,
                BSTR newValue);
         [id(2007)] void toFile(BSTR fileName, VARIANT encoding, VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2008)] void fromFile(BSTR fileName, VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2011)] void toFileAbsolute(BSTR fileName, VARIANT encoding, VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);


   };

    // -------------------------------------------------------------- IFileVariable
   [ uuid(A79BA2F2-C8C2-11d5-A008-0010A4C22C0F),
      helpstring("File variable") ]
   dispinterface IFileVariable
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

         // our properties
         [id(1001)] BSTR value;
         [id(1002)] boolean isBinary;
         [id(1003)] BSTR fileExtension;
         [id(1010)] BSTR description;
         [id(1011)] boolean saveWithModel;
         [id(1012)] boolean directTransfer;
         
      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // our methods
         [id(1004)] void toFile(BSTR fileName, [optional] VARIANT encoding);
         [id(1005)] void fromFile(BSTR fileName);
         [id(1006)] void writeFile(BSTR fileName);
         [id(1007)] void readFile(BSTR fileName);
         [id(1008)] void toFileAbsolute(BSTR fileName, [optional] VARIANT encoding);
         [id(1009)] void writeFileAbsolute(BSTR fileName);
   };

    // -------------------------------------------------------------- IGeometryVariable
   [ uuid(E45A67F4-C367-11D2-A4E8-00A024B5452E),
      helpstring("Geometry variable") ]
   dispinterface IGeometryVariable
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

         // our properties
         [id(1001)] BSTR value;
         [id(1002)] BSTR description;
         
      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // our methods
         [id(1003)] void setInitialValue(BSTR value);
   };

    // -------------------------------------------------------------- IGroup
   [ uuid(0D132C39-CA70-11D5-A008-0010A4C22C0F),
      helpstring("Group") ]
   dispinterface IGroup
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] VARIANT Variables;
         [id(2)] VARIANT Groups;
         [id(5)] int iconID;

      methods:
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
   };

    // -------------------------------------------------------------- IGroups
   [ uuid(0D132C3F-CA70-11D5-A008-0010A4C22C0F),
      helpstring("Groups object") ]
   dispinterface IGroups
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] VARIANT Count;
         
      methods:
         [id(2)] VARIANT Item(VARIANT id);
   };

    // -------------------------------------------------------------- IIntegerArray
   [ uuid(6CBF1A44-679A-11D3-A518-00A024B5452E),
      helpstring("Integer variable array") ]
   dispinterface IIntegerArray
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

          // inherited from IArray
         [id(1001)] long size;
         [id(1006)] long numDimensions;

            // our properties
         [id(2002)] long lowerBound;
         [id(2003)] long upperBound;
         [id(2004)] BSTR description;
         [id(2005)] BSTR units;
         [id(2006)] BSTR enumAliases;
         [id(2007)] BSTR enumValues;
         [id(2014)] BSTR format;
         
      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // inherited from IArray
         [id(1002)] BSTR toStringEx(long index);
         [id(1003)] void fromStringEx(BSTR value, long index);
         [id(1004)] BSTR toStringAbsoluteEx(long index);
         [id(1007)] long getLength( [optional] VARIANT dim);
         [id(1008)] void setLength(long length, [optional] VARIANT dim);
         [id(1009)] void setDimensions( long d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);

            // our methods
         [id(2001), propget] long value(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2001), propput] void value(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10, 
                long newValue);
         [id(2008)] boolean hasLowerBound();
         [id(2009)] boolean hasUpperBound();
         [id(2010)] long getValue(VARIANT d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2011)] void setValue(long value, VARIANT d1, [optional] VARIANT d2, 
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2012)] VARIANT getArray();
         [id(2013)] void setArray( VARIANT array );
         [id(2015)] BSTR toFormattedStringEx(long index);
         [id(2016)] void fromFormattedStringEx(BSTR value, long index);
         [id(2017)] BSTR toFormattedStringAbsoluteEx(long index);
         [id(2018)] void clearUpperBound();
         [id(2019)] void clearLowerBound();
         [id(2020)] long getValueAbsolute(VARIANT d1, [optional] VARIANT d2,
                  [optional] VARIANT d3, [optional] VARIANT d4, 
                [optional] VARIANT d5, [optional] VARIANT d6, 
                [optional] VARIANT d7, [optional] VARIANT d8, 
                [optional] VARIANT d9, [optional] VARIANT d10);
   };

    // -------------------------------------------------------------- IIntegerVariable
   [ uuid(985910ED-C34D-11D2-A4E8-00A024B5452E),
      helpstring("Integer variable") ]
   dispinterface IIntegerVariable
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

         // our properties
         [id(1001)] long value;
         [id(1017)] long valueAbsolute;
         [id(1002)] long lowerBound;
         [id(1003)] long upperBound;
         [id(1004)] BSTR units;
         [id(1005)] BSTR description;
         [id(1006)] BSTR enumValues;
         [id(1007)] BSTR enumAliases;
         [id(1011)] BSTR format;

      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // our methods
         [id(1008)] void setInitialValue(long value);
         [id(1009)] boolean hasLowerBound();
         [id(1010)] boolean hasUpperBound();
         [id(1012)] BSTR toFormattedString();
         [id(1013)] void fromFormattedString(BSTR value);
         [id(1014)] BSTR toFormattedStringAbsolute();
         [id(1015)] void clearUpperBound();
         [id(1016)] void clearLowerBound();
   };

    // -------------------------------------------------------------- IJobManager
   [ uuid(0C0D84B7-8376-4A71-AD4F-862AAD1BCE51),
      helpstring("Job Manager object") ]
   dispinterface IJobManager
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // properties go here

         [id(28)] boolean wasHalted;

      methods:
         [id(1)] void addInput( BSTR name, BSTR label );
         [id(2)] void setInput( long run, BSTR name, BSTR value );
         [id(3)] void addOutput( BSTR name, BSTR label );
         [id(4)] boolean getValidateAll();
         [id(5)] void setValidateAll( boolean flag );
         [id(6)] long getNumRuns();
         [id(7)] void setNumRuns( long numRuns );
         [id(8)] void submit( IDispatch* dataCollector, [optional]VARIANT description, [optional]VARIANT fireAndForget);
         [id(9)] void waitForJobCompletion();
         [id(10)] void addRerun( long run );
         [id(11)] void halt( boolean halt );
         [id(12)] long getNumInputs();
         [id(13)] long getNumOutputs();
         [id(14)] BSTR getInput( long index );
         [id(15)] BSTR getOutput( long index );
         [id(16)] BSTR getInputLabel( long index );
         [id(17)] BSTR getOutputLabel( long index );
         [id(18)] long getNumThreads();
         [id(19)] boolean getRunInParallel();
         [id(20)] void setNumThreads(long numThreads);
         [id(21)] void setRunInParallel(boolean runInParallel);
         [id(22)] boolean enableCache(boolean enable);
         [id(23)] void clearCache();
         [id(24)] long getRunIndex(VARIANT names, VARIANT values);

         [id(27)] void resume(IDispatch* dataHistory);


         [id(29)] void setCustomMetadata(BSTR name, BSTR key, BSTR value);

   };

    // -------------------------------------------------------------- IModelCenter

    typedef enum {
        ASSEMBLY_STYLE_COLLAPSED       = 0,
        ASSEMBLY_STYLE_EXPANDED        = 1,
        ASSEMBLY_STYLE_CLASSIC         = 100,
        ASSEMBLY_STYLE_N_SQUARED       = 101,
        ASSEMBLY_STYLE_AUTO_N_SQUARED  = 102,
        ASSEMBLY_STYLE_FORCE_32_BITS   = 65536
    } AssemblyStyle;

   [ uuid(BAACE1AA-EFDC-11D1-A4AD-00A024B5452E),
      helpstring("ModelCenter main object") ]
   dispinterface IModelCenter //NRS: This is IID_IPHXCOMClient in the code
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(15)] BSTR modelDirectory;
         [id(18)] boolean screenUpdating;
         [id(25)] BSTR modelFileName;
         [id(65)] BSTR appName;
         [id(72)] BSTR appFullPath;
         [id(82)] BOOL IsInteractive;
         [id(102)] unsigned long ProcessID;

      methods:
         [id(1)] BSTR getLastErrorMessage();
         [id(2)] void loadFile(BSTR fileName, [optional]VARIANT onConnectError);
         [id(3)] void setValue(BSTR varName, BSTR value);
         [id(4)] VARIANT getValue(BSTR varName);
         [id(5)] void createComponent(BSTR serverPath, BSTR name, BSTR parent, [optional]VARIANT xPos, [optional]VARIANT yPos);
         [id(6)] void createLink(BSTR variable, BSTR equation);
         [id(7)] void newModel([optional]VARIANT modelType);
         [id(8)] void saveModel();
         [id(9)] void saveModelAs(BSTR fileName);
         [id(10)] void closeModel();
         [id(11)] void loadModel(BSTR fileName, [optional]VARIANT onConnectError);
         [id(12)] IDispatch* getVariable(BSTR name);
         [id(13)] IDispatch* getComponent(BSTR name);
         [id(14)] void exit();
         [id(16)] IDispatch* createDataCollector(BSTR tradeStudyType, BSTR setup);
         [id(17)] void tradeStudyEnd();
         [id(19)] IDispatch* createJobManager([optional]VARIANT showProgressDialog);
         [id(20)] void tradeStudyStart();
         [id(21)] boolean getHaltStatus();
         [id(22)] IDispatch* getModel();
         [id(23)] void MessageBox(BSTR msg,[optional]VARIANT force);
         [id(24)] VARIANT getValueAbsolute(BSTR varName);
         [id(26)] void setScheduler(BSTR scheduler);
         [id(27)] void removeComponent(BSTR name);
         [id(28)] void breakLink(BSTR variable);
         [id(29)] long getHWND();
         [id(30)] IDispatch* checkout(BSTR feature);
         [id(40)] IDispatch* checkout2(BSTR feature, BSTR productRelease);
         [id(31)] VARIANT runMacro(BSTR macro, [optional]VARIANT useMCObject);
         [id(32)] IDispatch* createAssembly(BSTR name, BSTR parent, [optional]VARIANT assemblyType);
         [id(33)] IDispatch* createAssemblyVariable(BSTR name, BSTR type, BSTR parent);
         [id(34), propget] long version(long index);
         [id(35)] void autoLink(BSTR srcComp, BSTR destComp);
         [id(36)] LPDISPATCH getLinks([optional]VARIANT reserved);
         [id(37)] BSTR getModelUUID();
         [id(38)] IDispatch* getFormatter(BSTR format);
         [id(39)] void invokeHelp( long pageID );
         [id(41)] void launchTradeStudy(BSTR type, [optional]VARIANT setup);
         [id(42)] long createPlugInFrame(BSTR name, BSTR title, BSTR reserved, LPDISPATCH plugIn, [optional]VARIANT showFavorites, [optional]VARIANT defaultHeight, [optional]VARIANT defaultWidth);
         [id(43)] void setAlternateParentFrame(long hwnd);
         [id(44)] void displayAboutBox();
         [id(45)] void halt();
         [id(46)] void displayPreferencesDialog();
         [id(47)] void run(BSTR variableArray);
         [id(48)] IDispatch* getDataMonitor(BSTR component, VARIANT index);
         [id(49)] IDispatch* createDataMonitor(BSTR component, BSTR name, int x, int y);
         [id(50)] boolean isOkToClose();
         [id(51)] short addIcon(BSTR iconFile);
         [id(52)] boolean removeDataMonitor(BSTR component, VARIANT index);
         [id(53)] void destroyPlugInFrame(long hwnd);
         [id(54)] void showPlugInFrame(long hwnd);
         [id(55)] void hidePlugInFrame(long hwnd);
         [id(56)] void setIconPlugInFrame(long hwnd, BSTR iconFile);
         [id(57)] void setUserName(BSTR userName);
         [id(58)] void setPassword(BSTR password);
         [id(59)] long launchHTMLViewer(BSTR url, boolean popup);
         [id(60)] void runAntFile(BSTR fileName);
         [id(61)] IDispatch* getGlobalParameters();
         [id(62)] boolean closeHTMLViewer(long hwnd);
         [id(63)] void HTMLViewerWaitForClose(long hwnd);
         [id(64)] long HTMLViewerGetMyHWND();
         [id(66)] IDispatch* getActiveJobManager();
         [id(67)] VARIANT getPreference(BSTR pref);
         [id(68)] void internalLicensing(BSTR,long);
         [id(69)] BSTR getModelCenterPath();
         [id(70)] void transformAVPoint(int x, int y, boolean screen, VARIANT* tx, VARIANT* ty);
         [id(71)] IDispatch* getDataExplorer(int index);
         [id(73)] IDispatch* getDataCollector(int index);
         [id(74)] IDispatch* parallelInstance();
         [id(75)] IDispatch* getLogger();
         [id(76)] IDispatch* unAssociatedInstance();
         [id(77)] long createPlugInFrame2(BSTR name, BSTR title, BSTR reserved, LPDISPATCH plugIn, [optional]VARIANT showFavorites, [optional]VARIANT defaultHeight, [optional]VARIANT defaultWidth, [optional]VARIANT minimumHeight, [optional]VARIANT minimumWidth);
         [id(78)] void configureLogging(boolean enableLogging);
         [id(79)] void moveComponent(BSTR component, BSTR parent, [optional]VARIANT index);
         [id(80)] void setXMLExtension(BSTR xml);
         [id(81)] BSTR getXMLExtension(BSTR nodeName, BSTR attributeName, BSTR attributeValue);
         [id(83)] void setAssemblyStyle(BSTR assemblyName, AssemblyStyle style, [optional]VARIANT width, [optional]VARIANT height);
         [id(84)] AssemblyStyle getAssemblyStyle(BSTR assemblyName, int *width, int *height);
         [id(85)] IDispatch* getAssembly(BSTR name);
         [id(86)] IDispatch* createAndInitComponent(BSTR serverPath, BSTR name, BSTR parent, BSTR initString, [optional]VARIANT xPos, [optional]VARIANT yPos);
         [id(87)] BSTR getLicensingPath();

         [id(89)] BSTR getMacroScript(BSTR macroName);
         [id(90)] void setMacroScript(BSTR macroName, BSTR script);
         [id(91)] BSTR getMacroScriptLanguage(BSTR macroName);
         [id(92)] void setMacroScriptLanguage(BSTR macroName, BSTR language);
         [id(93)] void addNewMacro(BSTR macroName, boolean isAppMacro);
         [id(94)] void launchMacroEditor(BSTR macroName);
         [id(95)] void startGUIMode([optional]VARIANT showDialogs);
         [id(96)] long getNumUnitCategories();
         [id(97)] BSTR getUnitCategoryName(long index);
         [id(98)] long getNumUnits(BSTR category);
         [id(99)] BSTR getUnitName(BSTR category, long index);
         [id(100)] IDispatch* createTradeStudy(BSTR type, [optional]VARIANT setup);

         [id(101)] void setPreference(BSTR pref, BSTR value);

         [id(103)] IDispatch* getNetworkLocations();
         [id(104)] void saveVersionedModel(VersionStatus versionStatus, BSTR checkinMessage);
         [id(105)] void saveVersionedModelAs(BSTR fileName, VersionStatus versionStatus, BSTR checkinMessage);

         [id(106)] LPDISPATCH getVariableMetaData(BSTR name);

         [id(107)] void dumpComDebug();

         [id(108)] BSTR showFileBrowseDialog(BSTR title, [optional]VARIANT filters, [optional]VARIANT initialUri, [optional]VARIANT hwnd);

         [id(115)] BSTR showFileSaveDialog(BSTR title, int *selectedFilter, [optional]VARIANT initialFilename, [optional]VARIANT filters, [optional]VARIANT initialUri, [optional]VARIANT hwnd);

         [id(109)] void setLoginCallback(IDispatch* callback);

         [id(110)] IDispatch* createDataHistoryVariable();

         [id(111)] boolean getRunOnlyMode();

         [id(112)] void setRunOnlyMode(boolean shouldBeInRunOnly);

         [id(113)] IDispatch* createDataExplorer(BSTR tradeStudyType, BSTR setup);

        [id(114)] IDispatch* getFileSystemInfo(BSTR url); 

        [id(116)] SAFEARRAY(BSTR) getTradeStudyFilters(); 

        [id(117)] void saveTradeStudy(BSTR uri, int format, LPDISPATCH dataExplorer);

        [id(118)] IDispatch* getDataCollectorForDataExplorer(LPDISPATCH dataExplorer);

        [id(119)] void launchDataCollectorPlugIn(BSTR plugInName, LPDISPATCH dataExplorer);

         [id(120)] boolean guiLoadFile(BSTR fileName);

         [id(121)] void guiSaveModel(); 

         [id(122)] double getMacroTimeout(BSTR macroName);

         [id(123)] void setMacroTimeout(BSTR macroName, double timeout);

         [id(124)] boolean guiCloseAllMultiplexers();

         // NOTE: When adding new methods, do NOT reuse the numbers below for non-STK builds.  The IDs must be unique in all
         // build configurations.  Hopefully, 350 is sufficient padding that this will never have a collision.
#ifndef DOXYGEN_SHOULD_SKIP_THIS
#ifdef STKOEM

         [id(350)] long createSTKTree();

         [id(351)] void destroySTKTree(long hwnd);

#endif // STKOEM
#endif // DOXYGEN_SHOULD_SKIP_THIS
   };

   [ uuid(3C596B3E-0B8A-4B07-87D5-E9C165F858FB),
     helpstring("Dispatch interface for ILoginCallback") ]
   dispinterface ILoginCallback
   {
      properties:
      methods:
         [id(1)] boolean requestAuthCredentials(BSTR uri, boolean isFailedAttempt, VARIANT* username, VARIANT* password, VARIANT* savePassword);

         [id(2)] void loginSucceeded(BSTR uri, BSTR username, BSTR password, boolean savePassword);

         [id(3)] boolean verifySslWarning(BSTR msg);
   };

   [ uuid(F2C901DF-0E2D-4715-9DE9-E69206ADF0C0),
      helpstring("Trade Study Run events") ]
   dispinterface ITradeStudyEvents
   {
      properties:
      methods:
         [id(1)] void StartToolRun();
         [id(2)] void EndToolRun();
         [id(3)] void ToolClosed(BSTR type);

         [id(4)] void ModelXMLExtensionsChanged();
   }

   [ uuid(F154331D-C65C-41A6-84D5-7BB9A065279D),
     helpstring("Show Help events")]
   dispinterface IShowHelpEvents
   {
      properties:
      methods:
         [id(1)] void ShowHelp(long context);
   }

#ifndef DOXYGEN_SHOULD_SKIP_THIS

// Change STKAnalyzer Library GUID, CLSID, and progId for every release no matter major or minor releases, to support 
// Independency from different releases. This value is unique for each release and must match the LIBID_PHXModelCenter 
// value in ModelCenter.cpp and ModelCenterTypeLibrary/dummy.cpp. Also update PHXComClient.h/cpp
#if defined(STKOEM)

   [uuid(5fD16F36-7345-41F2-A95E-1EF9FAEF5D60)]
   coclass STK1200Application
   {
      [default] dispinterface IModelCenter;
      [default, source] dispinterface ITradeStudyEvents;
      [source] dispinterface IShowHelpEvents;
   };

#elif defined(NODERUNNER)

   [ uuid(BAACE1AB-EFDC-11D1-A4AD-00A024B54530) ]
   coclass Application
   {
      [default] dispinterface IModelCenter;
      [default, source] dispinterface ITradeStudyEvents;
   };

#else

   [ uuid(BAACE1AB-EFDC-11D1-A4AD-00A024B5452E) ]
   coclass Application
   {
      [default] dispinterface IModelCenter;
      [default, source] dispinterface ITradeStudyEvents;
[source] dispinterface IShowHelpEvents;
   };

#endif
#endif

   typedef enum
   {
      CONN_ERR_ERROR = 3,
      CONN_ERR_IGNORE = 1,
      CONN_ERR_USEDIALOG = -1
   } OnConnectionErrorMode;

   // --------------------------------------------------------------- INetworkLocations
   [ uuid(F036F767-ACF7-4128-823F-74E8B7E53EE9),
      helpstring("Network Locations") ]
   dispinterface INetworkLocations
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif

      methods:
         [id(1)] void add(BSTR address, BSTR username, BSTR password);

         [id(2)] boolean exists(BSTR address);

         [id(3)] void removeAddress(BSTR address);
   };

    // -------------------------------------------------------------- IRefArrayProp
   [ uuid(5BFF8381-7802-11D3-A524-00A024B5452E),
      helpstring("Reference variable array") ]
   dispinterface IRefArrayProp
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] BSTR enumValues;
         [id(2)] boolean isInput;
         [id(3)] BSTR title;
         [id(4)] BSTR description;
         
      methods:
         [id(5)] BSTR getName();
         [id(6)] BSTR getType();
   };

    // -------------------------------------------------------------- IReferenceArray
   [ uuid(492AB501-6AA8-11D3-A519-00A024B5452E),
      helpstring("Reference variable array") ]
   dispinterface IReferenceArray
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

         // inherited from IArray
         [id(1001)] long size;
         [id(1006)] long numDimensions;

            // our properties
         [id(2003)] boolean autoGrow;
         
      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // inherited from IArray
         [id(1002)] BSTR toStringEx(long index);
         [id(1003)] void fromStringEx(BSTR value, long index);
         [id(1004)] BSTR toStringAbsoluteEx(long index);
         [id(1007)] long getLength( [optional] VARIANT dim);
         [id(1008)] void setLength(long length, [optional] VARIANT dim);
         [id(1009)] void setDimensions( long d1, [optional] VARIANT d2, 
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);

            // our methods
         [id(2001), propget] double value(long index);
         [id(2001), propput] void value(long index, double newValue);
         [id(2002), propget] BSTR reference(long index);
         [id(2002), propput] void reference(long index, BSTR newValue);
         [id(2004)] double getValue(int index);
         [id(2005)] double setValue(double value, int index);
         [id(2008)] IDispatch* createRefProp(BSTR name, BSTR type);
         [id(2009)] VARIANT getRefPropValue( BSTR name, int index );
         [id(2010)] void setRefPropValue( BSTR name, int index, BSTR value );
         [id(2011)] VARIANT getRefPropValueAbsolute( BSTR name, int index );
         [id(2012), propget] VARIANT referencedVariables(long index);
         [id(2013), propget] VARIANT referencedVariable(long index);
         [id(2014)] double getValueAbsolute(int index);

   };

    // -------------------------------------------------------------- IReferenceVariable
   [ uuid(4864FF03-3DE9-11D3-A50E-00A024B5452E),
      helpstring("Reference variable") ]
   dispinterface IReferenceVariable
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

         // our properties
         [id(1001)] double value;
         [id(1002)] BSTR reference;
         [id(1009)] VARIANT referencedVariables;
         [id(1010)] VARIANT referencedVariable;

      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // our methods
         [id(1005)] IDispatch* createRefProp( BSTR name, BSTR type );
         [id(1006)] VARIANT getRefPropValue( BSTR name );
         [id(1007)] void setRefPropValue( BSTR name, BSTR value );
         [id(1008)] VARIANT getRefPropValueAbsolute( BSTR name );
   };

    // -------------------------------------------------------------- IRefProp
   [ uuid(D3F8D5D4-7769-11D3-A522-00A024B5452E),
      helpstring("Reference property") ]
   dispinterface IRefProp
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] BSTR enumValues;
         [id(2)] boolean isInput;
         [id(3)] BSTR title;
         [id(4)] BSTR description;

      methods:
         [id(5)] BSTR getName();
         [id(6)] BSTR getType();
   };

    // -------------------------------------------------------------- IStringArray
   [ uuid(6CBF1A4C-679A-11D3-A518-00A024B5452E),
      helpstring("String variable array") ]
   dispinterface IStringArray
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

          // inherited from IArray
         [id(1001)] long size;
         [id(1006)] long numDimensions;

            // our properties
         [id(2002)] BSTR description;
         [id(2003)] BSTR enumAliases;
         [id(2004)] BSTR enumValues;
         
      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // inherited from IArray
         [id(1002)] BSTR toStringEx(long index);
         [id(1003)] void fromStringEx(BSTR value, long index);
         [id(1004)] BSTR toStringAbsoluteEx(long index);
         [id(1007)] long getLength( [optional] VARIANT dim);
         [id(1008)] void setLength(long length, [optional] VARIANT dim);
         [id(1009)] void setDimensions( long d1, [optional] VARIANT d2, 
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);

            // our methods
         [id(2001), propget] BSTR value(VARIANT d1, [optional] VARIANT d2,
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2001), propput] void value(VARIANT d1, [optional] VARIANT d2,
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10,
               BSTR newValue);
         [id(2005)] BSTR getValue(VARIANT d1, [optional] VARIANT d2, 
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2006)] void setValue(BSTR value, VARIANT d1, [optional] VARIANT d2, 
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);
         [id(2007)] VARIANT getArray();
         [id(2008)] void setArray( VARIANT array );
         [id(2009)] BSTR getValueAbsolute(VARIANT d1, [optional] VARIANT d2,
               [optional] VARIANT d3, [optional] VARIANT d4, 
               [optional] VARIANT d5, [optional] VARIANT d6, 
               [optional] VARIANT d7, [optional] VARIANT d8, 
               [optional] VARIANT d9, [optional] VARIANT d10);
   };

    // -------------------------------------------------------------- IStringVariable
   [ uuid(985910E3-C34D-11D2-A4E8-00A024B5452E),
      helpstring("String variable") ]
   dispinterface IStringVariable
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from IVariable
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

         // our properties
         [id(1001)] BSTR value;
         [id(1006)] BSTR valueAbsolute;
         [id(1002)] BSTR description;
         [id(1003)] BSTR enumValues;
         [id(1004)] BSTR enumAliases;
         
      methods:
          // inherited from IVariable
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended,
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);

            // our methods
         [id(1005)] void setInitialValue(BSTR value);
   };

    // -------------------------------------------------------------- IVariable
   [ uuid(A0E042F1-B480-11D2-A4E6-00A024B5452E),
      helpstring("Variable base class") ]
   dispinterface IVariable 
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(17)] boolean hasChanged;
         [id(18)] boolean hide;
         [id(22)] LPDISPATCH OwningComponent;

      methods:
         [id(1)] boolean isValid();
         [id(2)] void validate();
         [id(3)] BSTR getName();
         [id(4)] BSTR getFullName();
         [id(5)] BSTR getType();
         [id(6)] boolean isInput();
         [id(7)] BSTR toString();
         [id(8)] void fromString(BSTR value);
         [id(9)] BSTR toStringAbsolute();
         [id(10)] void invalidate();
         [id(11)] LPDISPATCH directPrecedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(12)] LPDISPATCH directDependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(13)] LPDISPATCH precedentLinks(
                        [optional]VARIANT reserved);
         [id(14)] LPDISPATCH dependentLinks(
                        [optional]VARIANT reserved);
         [id(15)] LPDISPATCH precedents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(16)] LPDISPATCH dependents(
                        [optional]VARIANT followSuspended, 
                        [optional]VARIANT reserved);
         [id(19)] boolean isInputToComponent();
         [id(20)] boolean isInputToModel();
         [id(21)] void setMetadata(BSTR name, MetadataType type, VARIANT value, MetadataAccess access, boolean archive);
         [id(23)] VARIANT getMetadata(BSTR name);
   };


    // -------------------------------------------------------------- IVariableDescription
   [ uuid(EAE610F5-CC85-11D5-A008-0010A4C22C0F),
      helpstring("Variable description") ]
   dispinterface IVariableDescription
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] BSTR name;
         [id(2)] BSTR fullName;
         [id(3)] short state;
         [id(4)] BSTR units;
         [id(5)] boolean isCustom;
         [id(6)] BSTR equation;
         [id(7)] BSTR type;
         [id(8)] boolean isNumeric;

      methods:
   };

    // -------------------------------------------------------------- IVariableLink
   [ uuid(0F11CB29-B367-40ED-8F26-BD4A54DACF2A),
      helpstring("VariableLink object") ]
   dispinterface IVariableLink
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] BSTR LHS;
         [id(2)] BSTR RHS;
         
      methods:
         [id(3)] void suspendLink();
         [id(4)] void resumeLink();
         [id(5)] void breakLink();
   };

    // -------------------------------------------------------------- IVariableLinks
   [ uuid(C5B28059-9C9F-4EA3-9AB1-B9EDE06C4152),
      helpstring("VariableLinks collection") ]
   dispinterface IVariableLinks
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] VARIANT Count;

      methods:
         [id(2)] VARIANT Item(VARIANT id);
   };

    // -------------------------------------------------------------- IVariables
   [ uuid(CC3F2432-D179-4018-835F-34173613824B),
      helpstring("Variables object") ]
   dispinterface IVariables
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         [id(1)] VARIANT Count;

      methods:
         [id(2)] VARIANT Item(VARIANT id);
   };

    // -------------------------------------------------------------- IPHXFormat
   [ uuid(F7E774F5-A4CA-41D0-8F48-CC6B45043FB4) ]
   dispinterface IPHXFormat
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // NOTE - ClassWizard will maintain property information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_PROP(PHXCOMFormat)
         //}}AFX_ODL_PROP
         
      methods:
         // NOTE - ClassWizard will maintain method information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_METHOD(PHXCOMFormat)
         [id(1)] void setFormat(BSTR format);
         [id(2)] long stringToLong(BSTR str);
         [id(3)] double stringToDouble(BSTR str);
         [id(4)] BSTR longToString(long val);
         [id(5)] BSTR doubleToString(double val);
         [id(6)] BSTR getFormat();
         [id(7)] BSTR stringToString(BSTR str);
         [id(8)] BSTR longToEditableString(long val);
         [id(9)] BSTR doubleToEditableString(double val);
         //}}AFX_ODL_METHOD

   };

    // -------------------------------------------------------------- IDataMonitor
   [ uuid(B4009E4E-5E90-4b44-8687-143051AA7400),
      helpstring("Data Monitor object") ]
   dispinterface IDataMonitor
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // properties go here

      methods:
         [id(1)] BSTR getName( long row );
         [id(2)] void setName( long row, BSTR name );
         [id(3)] boolean isRenamed( long row );
         [id(4)] BSTR getLink ( long row );
         [id(5)] boolean setLink( long row, BSTR link );
         [id(6)] int addItem( BSTR name, BSTR link );
         [id(7)] int addUnlinkedItem( BSTR name );
         [id(8)] void removeItem( long row );
         [id(9)] void removeLink( long row );
         [id(10)] boolean getDisplayFullNames( );
         [id(11)] void setDisplayFullNames( boolean );
         [id(12)] boolean getAutoDelete( );
         [id(13)] void setAutoDelete( boolean );
         [id(14)] boolean getDisplayUnits( );
         [id(15)] void setDisplayUnits( boolean );
         [id(16)] int getColWidth( long col );
         [id(17)] void setColWidth( long col, int width );
         [id(18)] boolean isValid( );
         [id(19)] BSTR getTitle( );
         [id(20)] void setTitle( BSTR title );
         [id(21)] int getWidth( );
         [id(22)] int getHeight( );
         [id(23)] void setSize( int width, int height );
         [id(24)] int getX( );
         [id(25)] int getY( );
         [id(26)] void setLocation( int x, int y);
   };


   //  Primary dispatch interface for PHXComGlobalParameters

   [ uuid(CBBF5B6F-ED70-463D-B1E6-6DAE10500A4E) ]
   dispinterface IGlobalParameters
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // NOTE - ClassWizard will maintain property information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_PROP(PHXComGlobalParameters)
         [id(1)] long count;
         //}}AFX_ODL_PROP
         
      methods:
         // NOTE - ClassWizard will maintain method information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_METHOD(PHXComGlobalParameters)
         [id(4), propget] VARIANT item(VARIANT index);
         [id(4), propput] void item(VARIANT index, VARIANT newValue);
         [id(0), propget] VARIANT _item(VARIANT index);
         [id(0), propput] void _item(VARIANT index, VARIANT newValue);
         [id(2)] void setExportToRemoteComponents(VARIANT index, boolean bexport);
         [id(3)] void Remove(VARIANT index);
         //}}AFX_ODL_METHOD

   };

    // -------------------------------------------------------------- ILogger
   [ uuid(B478A93F-8BAC-43c5-9C4C-BD4AF8C9BAC1),
      helpstring("Logger") ]
   dispinterface ILogger
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // properties go here

      methods:
         [id(9)] boolean isTraceEnabled();
         [id(1)] boolean isDebugEnabled();
         [id(2)] boolean isInfoEnabled();
         [id(3)] boolean isWarnEnabled();
         [id(4)] boolean isErrorEnabled();
         [id(10)] void trace(BSTR message);
         [id(5)] void debug(BSTR message);
         [id(6)] void info(BSTR message);
         [id(7)] void warn(BSTR message);
         [id(8)] void error(BSTR message);
   };
   
   // -------------------------------------------------------------- ICachePin
   [ uuid(631F5771-6F41-495F-BF88-55368128C415),
      helpstring("CachePin") ]
   dispinterface ICachePin
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // properties go here

         [id(1)] BSTR Url;
         [id(2)] BSTR LocalPath;
         [id(3)] boolean IsValid;

      methods:
         [id(4)] boolean releasePin();
         [id(5)] void checkinOnFlush(BSTR message);
   };


   //{{AFX_APPEND_ODL}}

   // -------------------------------------------------------------- IFileSystemInfo
   [uuid(3E645325-85F9-456B-B5B7-395C90825986),
      helpstring("FileSystemInfo") ]
   dispinterface IFileSystemInfo
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         
         [id(1)] boolean isValid;

         [id(2)] boolean exists;
         
         [id(3)] boolean isWritable; 

         [id(4)] BSTR baseName;

         [id(5)] BSTR url; 

      methods:
         [id(6)] LPDISPATCH pin(boolean forWrite, [optional] VARIANT forceCopy);
   };
   //{{AFX_APPEND_ODL}}

#ifndef DOXYGEN_SHOULD_SKIP_THIS
   // -------------------------------------------------------------- IVizContainer
   [uuid(D57D1AA5-B852-4EB1-991E-7433AF3E0006),
      helpstring("VizContainer") ]

   dispinterface IVizContainer
   {

      properties:
         [id(1)] boolean Visible;

         [id(2)] long HWnd;

         [id(3)] IDispatch* DataExplorerPlugIn;

         [id(6)] IDispatch* DataExplorer;

      methods:
         
         [id(4)] void hide();

         [id(5)] void show();

         [id(7)] void fileSaved();
         
         [id(8)] void showAt(long top, long left, long width, long height, [optional] VARIANT state);
   };

#endif

};


```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)