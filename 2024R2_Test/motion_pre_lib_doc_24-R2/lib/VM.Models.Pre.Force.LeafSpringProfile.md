# Struct LeafSpringProfile

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

This struct is to represent the Leaf Spring Profile.

```csharp
public struct LeafSpringProfile
```

## Properties

### Thickness

Gets or sets the thickness.

```csharp
public double? Thickness { readonly get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### X

Gets or sets the x position.

```csharp
public double X { readonly get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Z

Gets or sets the z position.

```csharp
public double Z { readonly get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Equals\(LeafSpringProfile\)

```csharp
public bool Equals(LeafSpringProfile other)
```

#### Parameters

`other` [LeafSpringProfile](VM.Models.Pre.Force.LeafSpringProfile.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Operators

### operator ==\(LeafSpringProfile, LeafSpringProfile\)

```csharp
public static bool operator ==(LeafSpringProfile left, LeafSpringProfile right)
```

#### Parameters

`left` [LeafSpringProfile](VM.Models.Pre.Force.LeafSpringProfile.md)

`right` [LeafSpringProfile](VM.Models.Pre.Force.LeafSpringProfile.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### implicit operator Leaf3D\(LeafSpringProfile\)

```csharp
public static implicit operator Leaf3D(LeafSpringProfile leafSpringProfile)
```

#### Parameters

`leafSpringProfile` [LeafSpringProfile](VM.Models.Pre.Force.LeafSpringProfile.md)

#### Returns

 Leaf3D

### implicit operator LeafSpringProfile\(Leaf3D\)

```csharp
public static implicit operator LeafSpringProfile(Leaf3D leaf3D)
```

#### Parameters

`leaf3D` Leaf3D

#### Returns

 [LeafSpringProfile](VM.Models.Pre.Force.LeafSpringProfile.md)

### operator \!=\(LeafSpringProfile, LeafSpringProfile\)

```csharp
public static bool operator !=(LeafSpringProfile left, LeafSpringProfile right)
```

#### Parameters

`left` [LeafSpringProfile](VM.Models.Pre.Force.LeafSpringProfile.md)

`right` [LeafSpringProfile](VM.Models.Pre.Force.LeafSpringProfile.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


