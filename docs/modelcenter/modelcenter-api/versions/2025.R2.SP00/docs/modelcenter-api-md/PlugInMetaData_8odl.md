# File PlugInMetaData.odl

![][IDL]

**Location**: `ModelCenter/src/InterfaceDLL\_PlugInMetaData/PlugInMetaData.odl`





## Classes

* [PlugInMetaData::IPlugInMetaData](interfacePlugInMetaData_1_1IPlugInMetaData.md#interfacePlugInMetaData_1_1IPlugInMetaData)

## Namespaces

* [PlugInMetaData](namespacePlugInMetaData.md#namespacePlugInMetaData)

## Source

```
// PlugInMetaData.odl : type library source for PlugInMetaData.dll

// This file will be processed by the MIDL compiler to produce the
// type library (PlugInMetaData.tlb).

[ uuid(C0D290FC-D60E-406A-A403-B6C6A7E38BB7), version(1.0) ]
library PlugInMetaData
{
   importlib("stdole32.tlb");
   importlib("stdole2.tlb");




   //  Primary dispatch interface for PHXCOMPlugInMetaData
   
   [ uuid(BDE7EDB6-6FBD-4B71-8374-4CD42914F312) ]
   dispinterface IPlugInMetaData
   {
      properties:
         // NOTE - ClassWizard will maintain property information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_PROP(PHXCOMPlugInMetaData)
         //}}AFX_ODL_PROP
         
      methods:
         // NOTE - ClassWizard will maintain method information here.
         //    Use extreme caution when editing this section.
         //{{AFX_ODL_METHOD(PHXCOMPlugInMetaData)
         [id(1)] BSTR getDescription();
         [id(2)] BSTR getAuthor();
         [id(3)] BSTR getVersion();
         [id(4)] BSTR getHelpURL();
         [id(5)] BSTR getKeywords();
         [id(6)] BSTR getIconLocation();
         //}}AFX_ODL_METHOD

   };

   //{{AFX_APPEND_ODL}}
   //}}AFX_APPEND_ODL}}
};
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)