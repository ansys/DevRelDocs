# Interface ISymmetricManager
<a id="VM_Managed_Symmetric_ISymmetricManager"></a>

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMAppCore.dll  

This interface is to represent the symmetric manager.

```csharp
public interface ISymmetricManager
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_Symmetric_ISymmetricManager_Left"></a> Left

Gets the left object of symmetric.

```csharp
ObjectBase Left { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_Symmetric_ISymmetricManager_NonSymmetric"></a> NonSymmetric

Gets or sets a value indicating whether [non symmetric].

```csharp
bool NonSymmetric { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_Symmetric_ISymmetricManager_Original"></a> Original

Gets the original object of symmetric.

```csharp
ObjectBase Original { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_Symmetric_ISymmetricManager_Right"></a> Right

Gets the right object of symmetric.

```csharp
ObjectBase Right { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_Symmetric_ISymmetricManager_SymType"></a> SymType

Gets or sets the type of symmetric.

```csharp
SymmetricType SymType { get; set; }
```

#### Property Value

 [SymmetricType](VM.Managed.SymmetricType.md)

## Methods

### <a id="VM_Managed_Symmetric_ISymmetricManager_UpdateSymmetric"></a> UpdateSymmetric\(\)

Updates the symmetric objects.

```csharp
void UpdateSymmetric()
```

