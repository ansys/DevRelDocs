# Class UCS

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Client-side representation of the AutoCAD User Coordinate System.
Implements <xref href="OpenTD.Matrix3d" data-throw-if-not-resolved="false"></xref>
Implements <xref href="OpenTD.IUpdatable" data-throw-if-not-resolved="false"></xref>

```csharp
public class UCS : Matrix3d, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Matrix3d](OpenTD.Matrix3d.md) ← 
[UCS](OpenTD.UCS.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

[Matrix3d.SetToZero\(bool\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_SetToZero\_System\_Boolean\_), 
[Matrix3d.SetToIdentity\(bool\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_SetToIdentity\_System\_Boolean\_), 
[Matrix3d.SetFrom\(Matrix3d\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_SetFrom\_OpenTD\_Matrix3d\_), 
[Matrix3d.GetOrigin\(\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_GetOrigin), 
[Matrix3d.SetOrigin\(Point3d\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_SetOrigin\_OpenTD\_Point3d\_), 
[Matrix3d.SetCoordSystem\(Point3d, Vector3d, Vector3d, Vector3d\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_SetCoordSystem\_OpenTD\_Point3d\_OpenTD\_Vector3d\_OpenTD\_Vector3d\_OpenTD\_Vector3d\_), 
[Matrix3d.GetCoordSystem\(Point3d, Vector3d, Vector3d, Vector3d\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_GetCoordSystem\_OpenTD\_Point3d\_OpenTD\_Vector3d\_OpenTD\_Vector3d\_OpenTD\_Vector3d\_), 
[Matrix3d.PostMultBy\(Matrix3d\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_PostMultBy\_OpenTD\_Matrix3d\_), 
[Matrix3d.SetToRotX\(Dimensional<Angle\>\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_SetToRotX\_OpenTD\_Dimension\_Dimensional\_OpenTD\_Dimension\_Angle\_\_), 
[Matrix3d.SetToRotY\(Dimensional<Angle\>\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_SetToRotY\_OpenTD\_Dimension\_Dimensional\_OpenTD\_Dimension\_Angle\_\_), 
[Matrix3d.SetToRotZ\(Dimensional<Angle\>\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_SetToRotZ\_OpenTD\_Dimension\_Dimensional\_OpenTD\_Dimension\_Angle\_\_), 
[Matrix3d.Inverse\(\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_Inverse), 
[Matrix3d.Invert\(\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_Invert), 
[Matrix3d.SetToRotation\(Dimensional<Angle\>, Vector3d, Point3d\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_SetToRotation\_OpenTD\_Dimension\_Dimensional\_OpenTD\_Dimension\_Angle\_\_OpenTD\_Vector3d\_OpenTD\_Point3d\_), 
[Matrix3d.entry](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_entry), 
[Matrix3d.ToString\(\)](OpenTD.Matrix3d.md\#OpenTD\_Matrix3d\_ToString), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

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

## See Also

[Matrix3d](OpenTD.Matrix3d.md), 
[IUpdatable](OpenTD.IUpdatable.md)


