# File TradeStudyPlugIn.odl

![][IDL]

**Location**: `ModelCenter/src/InterfaceDLL\_TradeStudyPlugIn/TradeStudyPlugIn.odl`





## Classes

* [TradeStudyPlugIn::ITradeStudyPlugIn](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn)
* [TradeStudyPlugIn::ITradeStudyPlugIn2](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn2)
* [TradeStudyPlugIn::ITradeStudyCallback](interfaceTradeStudyPlugIn_1_1ITradeStudyCallback.md#interfaceTradeStudyPlugIn_1_1ITradeStudyCallback)
* [TradeStudyPlugIn::ITradeStudy3JobInfo](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobInfo)
* [TradeStudyPlugIn::ITradeStudy3JobResult](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobResult)
* [TradeStudyPlugIn::IVariableMetaDataProvider](interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider.md#interfaceTradeStudyPlugIn_1_1IVariableMetaDataProvider)
* [TradeStudyPlugIn::ITradeStudy3JobManager](interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager.md#interfaceTradeStudyPlugIn_1_1ITradeStudy3JobManager)
* [TradeStudyPlugIn::ITradeStudyPlugIn3](interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3.md#interfaceTradeStudyPlugIn_1_1ITradeStudyPlugIn3)
* [TradeStudyPlugIn::IWindowed](interfaceTradeStudyPlugIn_1_1IWindowed.md#interfaceTradeStudyPlugIn_1_1IWindowed)
* [TradeStudyPlugIn::ICombinedPlugIn](interfaceTradeStudyPlugIn_1_1ICombinedPlugIn.md#interfaceTradeStudyPlugIn_1_1ICombinedPlugIn)
* [TradeStudyPlugIn::TradeStudyPlugIn](classTradeStudyPlugIn_1_1TradeStudyPlugIn.md#classTradeStudyPlugIn_1_1TradeStudyPlugIn)
* [TradeStudyPlugIn::TradeStudyPlugIn2](classTradeStudyPlugIn_1_1TradeStudyPlugIn2.md#classTradeStudyPlugIn_1_1TradeStudyPlugIn2)

## Namespaces

* [TradeStudyPlugIn](namespaceTradeStudyPlugIn.md#namespaceTradeStudyPlugIn)

## Source

```
// TradeStudyPlugIn.odl : type library source for TradeStudyPlugIn.dll

// This file will be processed by the MIDL compiler to produce the
// type library (TradeStudyPlugIn.tlb).

[ uuid(A4C1DA09-6913-465B-BC86-9A7364881DF8), version(1.0) ]
library TradeStudyPlugIn
{
   importlib("stdole32.tlb");
   importlib("stdole2.tlb");

   //  Primary dispatch interface for PHXCOMTradeStudyPlugIn
   
   [ uuid(23C63C08-4BC7-4153-B89F-706D8BDCB3ED) ]
   dispinterface ITradeStudyPlugIn
   {
      properties:
         // NOTE - ClassWizard will maintain property information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_PROP(PHXCOMTradeStudyPlugIn)
         //}}AFX_ODL_PROP
         
      methods:
         // NOTE - ClassWizard will maintain method information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_METHOD(PHXCOMTradeStudyPlugIn)
         [id(1)] void construct(IDispatch* modelCenter, IDispatch* addToModel, [defaultvalue(NULL)]IDispatch* dataCollector);
         [id(2)] boolean show();
         [id(3)] BSTR toString();
         [id(4)] void fromString(BSTR setupString);
         //}}AFX_ODL_METHOD

   };

   // -------------------------------------------------------------- ITradeStudyPlugIn2
   [uuid(5C569D84-899F-4403-BFAD-C851E1B874C7)]
   dispinterface ITradeStudyPlugIn2
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // our properties
         [id(5)] LPDISPATCH TradeStudyCallback;

         [id(9)] boolean saveAllAnalyzerVariables;

      methods:
         // inherited from ITradeStudyPlugIn
         [id(1)] void construct(IDispatch* modelCenter, IDispatch* addToModel, [defaultvalue(NULL)]IDispatch* dataCollector);
         
         [id(2)] boolean show();

         [id(3)] BSTR toString();

         [id(4)] void fromString(BSTR setupString);

         [id(6)] void onEnd();

         [id(7)] void addAnalyzerVariable(BSTR formula, [optional]VARIANT analyzerName);

         [id(8)] void clearAnalyzerVariables();
   };

   //  Primary dispatch interface for CPHXTradeStudyCallbackCtrl
   [ uuid(1834107A-299F-4D83-AECA-D2563D2E1FFB),
     helpstring("Dispatch interface for PHXTradeStudyCallback control") ]
   dispinterface ITradeStudyCallback
   {
      properties:
         // NOTE - ClassWizard will maintain property information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_PROP(CPHXTradeStudyCallbackCtrl)

         // add property definitions here

         //}}AFX_ODL_PROP

      methods:
         // NOTE - ClassWizard will maintain method information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_METHOD(CPHXTradeStudyCallbackCtrl)

         [id(1)] void dataCollectorCreated(LPDISPATCH tradeStudy, LPDISPATCH dataCollector);

         [id(2)] BOOL runStarting(LPDISPATCH tradeStudy);

         [id(3)] void runEnded(LPDISPATCH tradeStudy);

         [id(4)] void tradeStudyClosed(LPDISPATCH tradeStudy);

         //}}AFX_ODL_METHOD
   };

   // -------------------------------------------------------------- ITradeStudyPlugIn3
   
   [uuid(BE014673-9D1E-457E-819E-CA9B584269FF)]
   dispinterface ITradeStudy3JobInfo
   {
   properties:
   methods:

      [id(1), propget] long numRuns();
      
      [id(2), propget] long numVariables();

      [id(3)] BSTR getVariableEquation(long index);
      [id(4)] BSTR getVariableDisplayName(long index);

      [id(5)] boolean isDesignVariable(VARIANT which);
      [id(6)] boolean isInput(VARIANT which);
   };

   [uuid(AAE6E030-AF5F-4237-B586-F40B367DBAFA)]
   dispinterface ITradeStudy3JobResult
   {
   properties:

   methods:

      [id(1), propget] long numRuns();
      
      [id(2), propget] long numVariables();

      [id(3)] BSTR getVariableEquation(long index);
      [id(4)] BSTR getVariableDisplayName(long index);

      [id(5)] boolean isDesignVariable(VARIANT which);
      [id(6)] boolean isInput(VARIANT which);

      [id(101), propget] LPDISPATCH dataHistory();
      [id(102), propget] boolean isRunning();
      [id(103), propget] boolean isCanceled();

      [id(106)] void cancelAsync();
      [id(107)] void waitForCompletion();
   };

   [uuid(674CAFFE-3423-4F16-BD44-B7EC0C9C3AD2)]
   dispinterface IVariableMetaDataProvider
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
   properties:
#else
   methods:
#endif

   methods:

      [id(1)] LPDISPATCH getVariableMetaData(BSTR fullName);

      [id(2)] SAFEARRAY(IDispatch*) getAllVariableMetaData(BSTR path);
   };

   [uuid(06AEC424-37AE-4E36-BA60-37D68696A201)]
   dispinterface ITradeStudy3JobManager
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif

      [id(100)] LPDISPATCH dataHistory;

      [id(101)] boolean validateAll;

      [id(102)] boolean runInParallel;

      [id(103)] long numThreads;

   methods:

      [id(1), propget] long numRuns();
      
      [id(2), propget] long numVariables();

      [id(3)] BSTR getVariableEquation(long index);
      [id(4)] BSTR getVariableDisplayName(long index);

      [id(5)] boolean isDesignVariable(VARIANT which);
      [id(6)] boolean isInput(VARIANT which);

      [id(104), propget] boolean supportsParallelExecution();

      [id(105), propget] boolean canNewJob();

      [id(106)] void newJob(long numRuns);
      [id(107)] void clear();
      [id(108)] void addVariable(BSTR equation, BSTR displayName, boolean isInput);
      [id(109)] void setInput(long runIndex, VARIANT which, VARIANT value);
      [id(110)] void setRunInputs(long runIndex, SAFEARRAY(VARIANT) values, [optional] SAFEARRAY(VARIANT) which);
      [id(111)] void setVariableInputs(VARIANT which, SAFEARRAY(VARIANT) values, [optional] SAFEARRAY(long) runIndices);
      [id(112)] ITradeStudy3JobResult* runJobAsync();

      [id(113)] IVariableMetaDataProvider* getMetaDataProvider();
   };
   
   [uuid(5ED31B61-8BE7-41AC-A278-1CA8EC7B945D)]
   dispinterface ITradeStudyPlugIn3
   {
#ifndef DOXYGEN_SHOULD_SKIP_THIS
      properties:
#else
      methods:
#endif
         // inherited from ITradeStudyPlugIn2
         [id(5)] LPDISPATCH TradeStudyCallback;

         [id(9)] boolean saveAllAnalyzerVariables;

         [id(10)] ITradeStudy3JobManager* jobManager;

      methods:
         // inherited from ITradeStudyPlugIn2
         [id(1)] void construct(IDispatch* modelCenter, IDispatch* addToModel, [defaultvalue(NULL)]IDispatch* dataCollector);
         
         [id(2)] boolean show();

         [id(3)] BSTR toString();

         [id(4)] void fromString(BSTR setupString);

         [id(6)] void onEnd();

         [id(7)] void addAnalyzerVariable(BSTR formula, [optional]VARIANT analyzerName);

         [id(8)] void clearAnalyzerVariables();
   };

   [uuid(4DE940EF-A810-4AEC-A8B9-EC1502F902E2)]
   dispinterface IWindowed
   {
      properties:
      methods:
         [id(1)] boolean closeWindow();
   }

   [uuid(B58D8757-0999-442B-838C-C581C67D35B1)]
   dispinterface ICombinedPlugIn
   {
      properties:
         
      methods:
   };

   //  Class information for PHXCOMTradeStudyPlugIn

   [ uuid(5412C8CE-AA4D-4D0F-8B67-EFE3E36A9D81) ]
   coclass TradeStudyPlugIn
   {
      [default] dispinterface ITradeStudyPlugIn;
   };

   [ uuid(DB842003-DD05-4C82-BB76-C5646A94BE4D) ]
   coclass TradeStudyPlugIn2
   {
      [default] dispinterface ITradeStudyPlugIn2;
   };



   /*
   [ uuid(A31E0F7A-F5E9-4EE3-BF2F-CA67CB855CC6) ]
   coclass TradeStudyCallback
   {
      [default] dispinterface ITradeStudyCallback;
   };*/

   //{{AFX_APPEND_ODL}}
   //}}AFX_APPEND_ODL}}
};
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)