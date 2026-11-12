# Interface IVectorDisplayAnimationData
<div align="right"><a href="/lib/VM.Models.OutputReader.IVectorDisplayAnimationData.md" download="VM.Models.OutputReader.IVectorDisplayAnimationData.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_OutputReader_IVectorDisplayAnimationData"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

Provides position, vector, scalar, and label data for each frame of a vector display result.

```csharp
public interface IVectorDisplayAnimationData
```

## Properties

 [LabelNames](VM.Models.OutputReader.IVectorDisplayAnimationData.LabelNames.md\#VM\_Models\_OutputReader\_IVectorDisplayAnimationData\_LabelNames)

Gets or sets the label names displayed with the vector display data for each frame.

 [Positions](VM.Models.OutputReader.IVectorDisplayAnimationData.Positions.md\#VM\_Models\_OutputReader\_IVectorDisplayAnimationData\_Positions)

Gets or sets the position or start point of each display item for each frame.

 [Vectors](VM.Models.OutputReader.IVectorDisplayAnimationData.Vectors.md\#VM\_Models\_OutputReader\_IVectorDisplayAnimationData\_Vectors)

Gets or sets the vector, scalar value, or end point paired with each position for each frame.
