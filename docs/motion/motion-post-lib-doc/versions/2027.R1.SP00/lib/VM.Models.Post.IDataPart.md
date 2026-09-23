# Interface IDataPart
<a id="VM_Models_Post_IDataPart"></a>

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

Provides geometry, node, element, and transformation data for one finite-element part.

```csharp
public interface IDataPart
```

## Properties

 [ElementCount](VM.Models.Post.IDataPart.ElementCount.md\#VM\_Models\_Post\_IDataPart\_ElementCount)

Gets the number of finite elements in this part.

 [NodesCount](VM.Models.Post.IDataPart.NodesCount.md\#VM\_Models\_Post\_IDataPart\_NodesCount)

Gets the number of nodes in this finite-element part.

## Methods

 [ElementNodes\(uint\)](VM.Models.Post.IDataPart.ElementNodes.md\#VM\_Models\_Post\_IDataPart\_ElementNodes\_System\_UInt32\_)

Gets the node indexes that form the specified finite element.

 [ElementType\(uint\)](VM.Models.Post.IDataPart.ElementType.md\#VM\_Models\_Post\_IDataPart\_ElementType\_System\_UInt32\_)

Gets the element type of the specified finite element.

 [GetElementIds\(\)](VM.Models.Post.IDataPart.GetElementIds.md\#VM\_Models\_Post\_IDataPart\_GetElementIds)

Gets the identifiers assigned to the finite elements in this part.

 [GetNodeIds\(\)](VM.Models.Post.IDataPart.GetNodeIds.md\#VM\_Models\_Post\_IDataPart\_GetNodeIds)

Gets the identifiers assigned to the nodes in this part.

 [GetNodePosition\(uint\)](VM.Models.Post.IDataPart.GetNodePosition.md\#VM\_Models\_Post\_IDataPart\_GetNodePosition\_System\_UInt32\_)

Gets the position of the specified node.
