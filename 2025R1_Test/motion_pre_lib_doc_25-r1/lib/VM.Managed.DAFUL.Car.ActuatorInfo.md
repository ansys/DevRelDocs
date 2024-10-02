#  Struct ActuatorInfo

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDFullCar.dll  

This struct is to represent the actuator information.

```csharp
public struct ActuatorInfo
```

## Constructors

### <a id="VM_Managed_DAFUL_Car_ActuatorInfo__ctor_System_Type_System_String_"></a> ActuatorInfo\(Type, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.ActuatorInfo" data-throw-if-not-resolved="false"></xref> struct.

```csharp
public ActuatorInfo(Type type, string actuator)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type.

`actuator` [string](https://learn.microsoft.com/dotnet/api/system.string)

The actuator.

## Fields

### <a id="VM_Managed_DAFUL_Car_ActuatorInfo_Actuator"></a> Actuator

Actuator info xml

```csharp
public string Actuator
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Car_ActuatorInfo_ActuatorType"></a> ActuatorType

Actuator type

```csharp
public Type ActuatorType
```

#### Field Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

## Methods

### <a id="VM_Managed_DAFUL_Car_ActuatorInfo_XmlDeSerialize"></a> XmlDeSerialize\(\)

XMLs the de serialize.

```csharp
public ObjectBase XmlDeSerialize()
```

#### Returns

 ObjectBase

### <a id="VM_Managed_DAFUL_Car_ActuatorInfo_XmlSerialize_VM_Managed_ObjectBase_"></a> XmlSerialize\(ObjectBase\)

XMLs the serialize.

```csharp
public string XmlSerialize(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The obj.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

