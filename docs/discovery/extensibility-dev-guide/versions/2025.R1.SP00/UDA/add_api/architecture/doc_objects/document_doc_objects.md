# Documents and doc objects

A Document is the unit of loading and saving. Assuming it has been saved, a document corresponds to a Discovery scdoc file on disk.

A DocObject is an object that belongs to a document. Doc objects aren't the only objects that get saved when the document is saved, but they are the only objects that have a Document property. Examples of doc objects include: Part, Component, DesignBody, DesignFace, DatumPlane, and Note.

Doc objects provide:

-   A parent-child tree containment hierarchy.
-   Monikers for persistent identification.
-   Update states to indicate that the doc object has changed.
-   Custom attributes for storing third party data.

This section contains the following topics:

-   **[Parent-child hierarchy](../../../../UDA/add_api/architecture/doc_objects/parent_child_hierarchy.md)**  

-   **[Parts and components](../../../../UDA/add_api/architecture/doc_objects/parts_components.md)**  

-   **[Occurrence chains](../../../../UDA/add_api/architecture/doc_objects/occurrence_chains.md)**  

-   **[General objects and masters](../../../../UDA/add_api/architecture/doc_objects/gen_objects_masters.md)**  

-   **[Originals and masters](../../../../UDA/add_api/architecture/doc_objects/originals_masters.md)**  

-   **[Transforming to master-space](../../../../UDA/add_api/architecture/doc_objects/transform_master_space.md)**  

-   **[Getting occurrences](../../../../UDA/add_api/architecture/doc_objects/getting_occurrences.md)**  



