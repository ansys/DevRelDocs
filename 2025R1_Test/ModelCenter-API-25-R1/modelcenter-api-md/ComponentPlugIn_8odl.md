# File ComponentPlugIn.odl

![][IDL]

**Location**: `ModelCenter/src/InterfaceDLL\_ComponentPlugIn/ComponentPlugIn.odl`





## Classes

* [ComponentPlugIn::IComponentPlugIn](interfaceComponentPlugIn_1_1IComponentPlugIn.md#interfaceComponentPlugIn_1_1IComponentPlugIn)

## Namespaces

* [ComponentPlugIn](namespaceComponentPlugIn.md#namespaceComponentPlugIn)

## Source

```
// ComponentPlugIn.odl : type library source for ComponentPlugIn.dll

// This file will be processed by the MIDL compiler to produce the
// type library (ComponentPlugIn.tlb).

[ uuid(58B97B6D-BD2D-47F5-9305-C83E3337A120), version(1.0) ]
library ComponentPlugIn
{
   importlib("stdole32.tlb");
   importlib("stdole2.tlb");




   //  Primary dispatch interface for PHXCOMComponentPlugIn
   
   [ uuid(BDE1B2FF-1745-438C-B7CE-F671BE78BE01) ]
   dispinterface IComponentPlugIn
   {
      properties:
         // NOTE - ClassWizard will maintain property information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_PROP(PHXCOMComponentPlugIn)
         //}}AFX_ODL_PROP
         
      methods:
         // NOTE - ClassWizard will maintain method information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_METHOD(PHXCOMComponentPlugIn)
         [id(1)] void construct(IDispatch* modelCenter, IDispatch* addToModel, [defaultvalue(NULL)]IDispatch* dataCollector);
         [id(2)] boolean show();
         [id(3)] BSTR toString();
         [id(4)] void fromString(BSTR setupString);
         [id(5)] void run();
         [id(6)] void onEnd();
         //}}AFX_ODL_METHOD

   };

   //{{AFX_APPEND_ODL}}
   //}}AFX_APPEND_ODL}}
};
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)