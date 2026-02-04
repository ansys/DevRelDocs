# Files, Pictures, and Hyperlinks
Work with File, Picture, and Hyperlink data.

## Connect to MI
Specify a database and table.


```python
from datetime import datetime
import pathlib
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Tensile Test Data")
```

## Create a new record
Define a path in the table from a starting folder (in this case the top level folder) using `path_from()`.
If the path does not exist, the required folders will be created.
Create a new **Record** object at the end of the path.


```python
now = datetime.now().strftime("%c")
record_name = f"Scripting Toolkit Example 9:{now}"
folder = table.path_from(None, tree_path=["High Alloy Steels", "AMS 6520", "Plate", "300°F"])
record = table.create_record(name=record_name, parent=folder)
record, folder
```



*Previous cell output:*
```output
(<Record long name: Scripting Toolkit Example 9:Wed Jan  7 19:26:21 2026>,
 <Record long name: 300°F>)
```


Access the empty **AttributeFile**, **AttributePicture**, and **AttributeHyperlink** objects.


```python
file_attribute = record.attributes["Test File 1"]
picture_attribute = record.attributes["Image 2"]
hyperlink_attribute = record.attributes["Standard Tension Testing Method"]
hyperlink_attribute
```



*Previous cell output:*
```output
<HyperlinkValue name: Standard Tension Testing Method, url: None>
```


## Add files to the record
To add a file to a file attribute (or a picture to a picture attribute) there are two approaches.

Create a **File** or **Picture** object, and set the `binary_data` property directly with either a file buffer or
bytes object. (Useful when you have a file already loaded in your script.)


```python
file_object = mpy.File()
file_path = pathlib.Path("./supporting_files/09_example_file_for_import.txt")
with open(file_path, "rb") as file_buffer:
    file_object.binary_data = file_buffer.read()
file_object.file_name = file_path.name
file_object.description = "This is an example file"
file_attribute.object = file_object
file_attribute
```



*Previous cell output:*
```output
<FileValue name: Test File 1, file_name: 09_example_file_for_import.txt, description: This is an exampl...>
```


Use the **AttributePicture.load()** method to load a file from disk with a provided file name. (Useful when you have
a file saved to disk).


```python
picture = pathlib.Path("./supporting_files/09_example_image_for_import.jpg")
picture_attribute.load(picture)
picture_attribute
```



*Previous cell output:*
```output
<PictureValue name: Image 2, populated: True>
```


## Add hyperlinks to the record
To add a hyperlink to a hyperlink attribute, set the `value` property. Optionally, you can also set the `hyperlink_display`
and/or `hyperlink_description` properties.


```python
hyperlink_attribute.value = "https://www.astm.org/Standards/E8"
hyperlink_attribute.hyperlink_display = "New"
hyperlink_attribute.hyperlink_description = "Specification"
hyperlink_attribute
```



*Previous cell output:*
```output
<HyperlinkValue name: Standard Tension Testing Method, url: https://www.astm.org/Standards/E8>
```


Set the new attributes to update, and write the changes to MI. Specifying `include_binary_data_in_refresh = True`
means that the picture data will be included in the resulting `Record` object, rather than a URL reference to the
picture data.


```python
record.set_attributes([file_attribute, picture_attribute, hyperlink_attribute])
record = mi.update([record], include_binary_data_in_refresh=True)[0]
```

## Save files attached to a record
Verify your changes by first extracting the new image from the record, then saving it to disk.
You can either access the `value` directly or provide a file path to the `save()` method.

First, ensure the output directory exists. This directory will already exist if a notebook
was run previously that saved a file to disk.


```python
from pathlib import Path
output_folder = Path("output")
output_folder.mkdir(exist_ok=True)
```

Next, save the picture to disk.


```python
picture_attribute = record.attributes["Image 2"]
from IPython.display import Image
Image(picture_attribute.value)
```




    
![jpeg](./09_Edit_Files_Pictures_and_Hyperlinks_files/09_Edit_Files_Pictures_and_Hyperlinks_20_0.jpg)
    




```python
picture_attribute.save(path="./output/09_exported_picture.jpg")
```
