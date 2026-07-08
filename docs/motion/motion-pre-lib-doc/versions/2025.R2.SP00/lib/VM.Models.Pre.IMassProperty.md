#  Interface IMassProperty

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IMassProperty
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Pre_IMassProperty_GetMassProperty_System_Double__VM_Vector_VM_OMatrix_System_Double___System_Boolean_"></a> GetMassProperty\(ref double, Vector, OMatrix, double\[\], bool\)

Gets the mass property.

```csharp
void GetMassProperty(ref double mass, Vector centerPosition, OMatrix matrix, double[] tensor, bool global)
```

#### Parameters

`mass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`centerPosition` Vector

The center position.

`matrix` OMatrix

The orientation.

`tensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The tensor.

`global` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Global.

### <a id="VM_Models_Pre_IMassProperty_SetMassProperty_System_Double_VM_Vector_VM_OMatrix_System_Double___System_Boolean_"></a> SetMassProperty\(double, Vector, OMatrix, double\[\], bool\)

Sets the mass property.

```csharp
void SetMassProperty(double mass, Vector centerPosition, OMatrix matrix, double[] tensor, bool global)
```

#### Parameters

`mass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`centerPosition` Vector

The center position.

`matrix` OMatrix

The orientation.

`tensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The tensor.

`global` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Global.

