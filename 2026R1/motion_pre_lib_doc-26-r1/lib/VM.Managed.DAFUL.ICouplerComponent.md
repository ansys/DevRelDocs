#  Interface ICouplerComponent

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the coupler component.

```csharp
public interface ICouplerComponent
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_ICouplerComponent_GetJointType"></a> GetJointType\(\)

Gets the type of the joint.

```csharp
JointType GetJointType()
```

#### Returns

 [JointType](VM.Managed.DAFUL.JointType.md)

The type of the joint.

### <a id="VM_Managed_DAFUL_ICouplerComponent_GetTransformationMatrix"></a> GetTransformationMatrix\(\)

Gets the transformation matrix.

```csharp
TMatrix GetTransformationMatrix()
```

#### Returns

 TMatrix

The transformation matrix.

