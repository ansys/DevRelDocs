# ExtendedGetSourceName 

## Description 

Gets the name of the source number N. The second argument is an output one.

Returns TRUE if the call has succeeded, FALSE otherwise.

## Syntax 

- `object.ExtendedGetSourceName(int iSource, VARIANT* ovSourceName)` as Boolean
- *object*: Virtual Photometric Lab
- *iSource*: index of the source in Virtual Lighting Controller \(starting from 0\)
- *ovSourceName*: name of the source

## VB script example 

```VB
' Creates XMPViewer COM server
set XmpViewer = CreateObject("XmpViewer.application")
' Opens XMP file
XMPViewer.OpenFile("C:\Example.xmp")
' Gets the name of the source #3
Dim sSourceName
XMPViewer.ExtendedGetSourceName(3, sSourceName)
' Prints the name of the source #3
Dim SourceName As String
SourceName = sSourceName(1)
```

## IronPython example

```ironpython
from System import Type, Activator
#Creates XMPViewer COM server
type = Type.GetTypeFromProgID("XmpViewer.Application")
XmpViewer = Activator.CreateInstance(type)
# Opens XMP file
XmpViewer.OpenFile("C:\\Example.xmp")
# Gets the name of the source number 3
sSourceName = clr.Reference[System.Object]() #Creates a default pointer
retval = XmpViewer.ExtendedGetSourceName(2, sSourceName)
# Prints the name of the source number 3
sourceName = sSourceName.Value
print sourceName[0]
```

## C\# example 

```
//Opens XMP file
  XMPViewer.OpenFile(xmpmapPath);

  //Returns the number of sources of the XMP file
  int iNbSource = viewer.ExtendedGetNbSource();
  if (iNbSource == 0)
    Console.WriteLine("Error in ExtendedGetNbSource");

  for (int sourceindex = 0; sourceindex < iNbSource; sourceindex++)
  {
    object objSourceName = null;
    int RetVal = viewer.ExtendedGetSourceName(sourceindex, ref objSourceName);

    if (RetVal == 0)
    {
      Console.WriteLine("Error in ExtendedGetSourceName");
    }

    //Get String Data in objSourceName Result
    if (objSourceName is ICollection collection)
      {
        foreach (var item in collection)
        {
          if (item is string str)
          {
            Console.WriteLine(str);
          }
        }
      }
  }
```


