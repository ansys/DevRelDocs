# Struct Mesh.MetaInfo

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This struct is to represent the meta information.

```csharp
public struct Mesh.MetaInfo
```

## Constructors

### MetaInfo\(string, uint, string, Type\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Mesh.MetaInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MetaInfo(string strName, uint nVer, string strPrefix, Type type)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of MetaInfo.

`nVer` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The version.

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The prefix.

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type.

## Fields

### m\_csi

The ConstructorInfo.

```csharp
public ConstructorInfo m_csi
```

#### Field Value

 [ConstructorInfo](https://learn.microsoft.com/dotnet/api/system.reflection.constructorinfo)

### m\_nVersion

The version.

```csharp
public uint m_nVersion
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### m\_strName

The name.

```csharp
public string m_strName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### m\_strNewNamePrefix

The name prefix.

```csharp
public string m_strNewNamePrefix
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


