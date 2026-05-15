# Class Acceleration

Namespace: [OpenTD.UserPreferences](OpenTD.UserPreferences.md)  
Assembly: OpenTD.dll  

Represents the acceleration vector that can be set in the global dwg
user preferences.

```csharp
[MessagePackObject(true)]
public class Acceleration : Preferences, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
Preferences ← 
[Acceleration](OpenTD.UserPreferences.Acceleration.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Acceleration\(\)

```csharp
public Acceleration()
```

### Acceleration\(ThermalDesktop\)

```csharp
public Acceleration(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### Magnitude

```csharp
public Dimensional<Gravity> Magnitude { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Gravity](OpenTD.Dimension.Gravity.md)\>

### MagnitudeExp

```csharp
public ExpressionData MagnitudeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### XDir

```csharp
public double XDir { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### XDirExp

```csharp
public ExpressionData XDirExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### YDir

```csharp
public double YDir { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### YDirExp

```csharp
public ExpressionData YDirExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### ZDir

```csharp
public double ZDir { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ZDirExp

```csharp
public ExpressionData ZDirExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### Update\(\)

Updates the TD entity with the latest client data.

```csharp
public void Update()
```

### UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public void UpdateFromTD()
```


