<a id="12__dpf__collections_8md"></a>
# File 12\_dpf\_collections.md

![][Markdown]

**Location**: `cpp\_doc/12\_dpf\_collections.md`





## Source


```markdown
 @defgroup group_12 Using collections and labels
 @ingroup group_4_how_tos

DPF Collections are containers used for storing data. They are currently three types of collections: 
-   FieldsContainer
-   ScopingsContainer
-   MeshesContainer
Each container will store a vector with the defined data type. For example, a ScopingsContainer will store a vector of Scopings. 
DPF Collections are ordered with labels and ids. The ids must be meaningful regarding the stored data.

For example, the following FieldsContainer contains a vector of Fields based on the “time” label, that refers to the time sets (ids) of a simulation result.

<br><br>![](coll_1.png)<br>

**Topics:**

- [Labels mechanism](#coll1)
- [Fields Container](#coll2)
- [Scopings Containers and Meshes Containers](#coll3)

## <a name="coll1"></a>Labels mechanism

Each collection must have a vector of labels defined. It is a list of strings describing each element. A label is a string that defines a criterion (for example “time”, “complex”, “body”, “dofs”, “domain”, a.s.o.).
Each element of that collection has a label space associated. This label space is a map that associates each label with a meaningful id. For example, body ids are usually associated to the “body” label in a defined label space. 
More generally, the n labels of a collection define a n-dimensional space on which the container is defined. The labels space associated to a specific entity (e.g. Field, Scoping, Mesh) represents a coordinates-like identifier of this entity in this space. 

## <a name="coll2"></a>Fields Container

### Description

The Fields Container is a vector of Fields, and all the Fields are ordered with labels and ids. Most commonly, the Fields Container is scoped on "time" label and the ids are the time or frequency sets. Generally, Fields Container allows to split results on different criterions. 

### Examples

#### Result by time steps and body

The following representations shows a FieldsContainer storing 8 fields. The FieldsContainer contains a result (e.g. displacement) sorted by body ids and by time sets: each field must have a time id and a body id defined.

<br>![](coll_2.png)   ![](coll_3.png)<br><br>

The following C++ code snippets show how to:
- create such a FieldsContainer
- access the available ids for a defined label
- access a specific result Field at defined time step and body id
- access a vector of result Fields at defined body id

##### Create the FieldsContainer and access the available ids for a defined label

```
// Build a FieldsContainer with "time" and "body" labels
// -----------------------------------------------------
ansys::dpf::FieldsContainer fields_container;
fields_container.addLabels({ ansys::dpf::labels::time, ansys::dpf::labels::body });

// create the Fields and their associated label spaces
// ---------------------------------------------------
ansys::dpf::LabelSpace label_space_0({ {ansys::dpf::labels::time, 1}, {ansys::dpf::labels::body, 2} });
ansys::dpf::Field field_0; 
// ... fill field_0 data
ansys::dpf::LabelSpace label_space_1({ {ansys::dpf::labels::time, 1}, {ansys::dpf::labels::body, 6} });
ansys::dpf::Field field_1;
// ... fill field_1 data
ansys::dpf::LabelSpace label_space_2({ {ansys::dpf::labels::time, 1}, {ansys::dpf::labels::body, 17} });
ansys::dpf::Field field_2;
// ... fill field_2 data
ansys::dpf::LabelSpace label_space_3({ {ansys::dpf::labels::time, 1}, {ansys::dpf::labels::body, 19} });
ansys::dpf::Field field_3;
// ... fill field_3 data
ansys::dpf::LabelSpace label_space_4({ {ansys::dpf::labels::time, 4}, {ansys::dpf::labels::body, 2} });
ansys::dpf::Field field_4;
// ... fill field_4 data
ansys::dpf::LabelSpace label_space_5({ {ansys::dpf::labels::time, 4}, {ansys::dpf::labels::body, 6} });
ansys::dpf::Field field_5;
// ... fill field_5 data
ansys::dpf::LabelSpace label_space_6({ {ansys::dpf::labels::time, 4}, {ansys::dpf::labels::body, 17} });
ansys::dpf::Field field_6;
// ... fill field_6 data
ansys::dpf::LabelSpace label_space_7({ {ansys::dpf::labels::time, 4}, {ansys::dpf::labels::body, 19} });
ansys::dpf::Field field_7;
// ... fill field_7 data

// Add fields to the fields_container
fields_container.add(label_space_0, field_0);
fields_container.add(label_space_1, field_1);
fields_container.add(label_space_2, field_2);
fields_container.add(label_space_3, field_3);
fields_container.add(label_space_4, field_4);
fields_container.add(label_space_5, field_5);
fields_container.add(label_space_6, field_6);
fields_container.add(label_space_7, field_7);

// access the available ids for a defined label
// --------------------------------------------
ansys::dpf::Scoping body_label_ids = fields_container.labelScoping(ansys::dpf::labels::body);
int* scoping_ids = body_label_ids.ids().data();
```

`scopings_ids` should contain the following values: 2, 6, 17, 19.

##### Access a specific result Field at defined time step and body id

The following code snippet shows how to access the following Field in the FieldsContainer previously created:

<br>![](coll_2_a.png)<br><br>

```
ansys::dpf::LabelSpace label_space_time_4_body_17({ {ansys::dpf::labels::time, 4}, {ansys::dpf::labels::body, 17} });

ansys::dpf::Field field_time_4_body_17 = fields_container.getField(label_space_time_4_body_17);
```

See @ref Field section to learn how to access the Field's data.

##### access a vector of result Fields at defined body id

The following code snippet shows how to access the following vector of Fields in the FieldsContainer previously created:

<br>![](coll_2_b.png)<br><br>

```
// Get vector of Fields
ansys::dpf::LabelSpace label_space_body_6({ {ansys::dpf::labels::body, 6} });
std::vector<ansys::dpf::Field> fields_with_body_id_6 = fields_container.getFields(label_space_body_6);

// Get the label space associated to the first returned field to know its time id
std::vector<int> fields_indices = fields_container.getFieldsIndeces(label_space_body_6);
ansys::dpf::LabelSpace first_label_space = fields_container.getLabelSpace(fields_indices[0]);
int first_index_time_id = first_label_space.at(ansys::dpf::labels::time);
```

`fields_indices` vector should contain the following values: 1, 5.

A similar code using the "time" label instead of the "body" one would allow to access a vector of result Fields at a defined time id. 

To know how to integrate DPF capabilities in already existing project, refer to the @ref group_06_1 section.

#### Result by time steps, body and complex ids

The following representation shows a FieldsContainer storing 16 fields. The FieldsContainer contains a result (e.g. displacement) sorted by body ids, by time steps and complexity status: each field must have a time id, a body id and a complex id (that defines if the Field defines the complex or the real part of the result) defined.

<br><br>![](coll_4.png)   ![](coll_5.png)<br>


## <a name="coll3"></a>Scopings Container and Meshes Container

The Scopings Container is a vector of Scopings and all the Scopings are ordered with labels and ids. Most commonly, the Scopings Container is scoped on "body" label and the ids are the material/body ids. More generically, the Scopings Container allows to split results on different criterions. Likewise for the Meshes Container.

Generally, a defined ScopingsContainer will contain Scoping entities to apply on the Meshes entities of a corresponding MeshesContainer. The correspondence between Scoping and Meshes entities is made using the label spaces (check for corresponding labels and ids). 

<br><br>![](coll_6.png)<br><br>
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)