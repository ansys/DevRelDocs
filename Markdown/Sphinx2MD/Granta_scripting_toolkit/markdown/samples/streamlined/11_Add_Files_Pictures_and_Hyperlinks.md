# Add Files, Pictures, and Hyperlinks
Add File, Picture, and Hyperlink attribute types to MI.

## Connect to MI
Specify a database and table.


```python
from datetime import datetime
import pathlib
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
db = mi.get_db(db_key='MI_Training')
tab = db.get_table('Tensile Test Data')
```

## Create a new record 
Define a path in the table from a starting folder (in this case the top level folder) using `path_from()`.
If the path does not exist, the required folders will be created.
Specify `end_node` to create a new **Record** object at the end of the path with that name.


```python
now = datetime.now().strftime("%c")
record_name = 'STK Example 11:{}'.format(now)
record = tab.path_from(None, tree_path=['High Alloy Steels', 'AMS 6520', 'Plate', '300°F'], end_node=record_name)
record
```




    <Record long name: STK Example 11:Fri Sep  1 15:51:15 2023>



Access the (empty) **AttributeFile**, **AttributePicture**, and **AttributeHyperlink** objects.


```python
new_file = record.attributes['Test File 1']
new_pict = record.attributes['Image 2']
test_method_link = record.attributes['Standard Tension Testing Method']
test_method_link
```




    <HyperlinkValue name: Standard Tension Testing Method, url: None>



## Add files to the record
To add a file to a file attribute (or a picture to a picture attribute) there are two approaches.

Create a **File** or **Picture** object, and set the `binary_data` property directly with either a file buffer or
bytes object. (Useful when you have a file already loaded in your script.)


```python
file_object = mpy.File()
filename = 'example.csv'
with open(filename, 'rb') as file_buffer:
    file_object.binary_data = file_buffer.read()
file_object.name = filename
file_object.description = 'This is an example file'
new_file.object = file_object
new_file
```




    <FileValue name: Test File 1, file_name: example.csv, description: This is an exampl...>



Use the **AttributePicture.load()** method to load a file from disk with a provided file name. (Useful when you have
a file saved to disk).


```python
picture = pathlib.Path('./example.jpg')
new_pict.load(picture)
new_pict
```




    <PictureValue name: Image 2, populated: True>



## Add hyperlinks to the record
To add a hyperlink to a hyperlink attribute, set the `value` property. Optionally, you can also set the `hyperlink_display`
and/or `hyperlink_description` properties.


```python
test_method_link.value = 'https://www.astm.org/Standards/E8'
test_method_link.hyperlink_display = 'New'
test_method_link.hyperlink_description = 'Specification'
test_method_link
```




    <HyperlinkValue name: Standard Tension Testing Method, url: https://www.astm.org/Standards/E8>



Set the new attributes to update, and write the changes to MI. Specifying `include_binary_data_in_refresh = True` means that
the picture data will be included in the resulting `Record` object, rather than a URL reference to the picture data.


```python
record.set_attributes([new_file, new_pict, test_method_link])
record = mi.update([record], include_binary_data_in_refresh=True)[0]
```

## Save files attached to a record
Verify your changes by first extracting the new image from the record, then saving it to disk.
You can either access the `value` directly or provide a file path to the `save()` method.


```python
new_pict = record.attributes['Image 2']
from IPython.display import Image
Image(new_pict.value)
```




    
![jpeg](11_Add_Files_Pictures_and_Hyperlinks_files/11_Add_Files_Pictures_and_Hyperlinks_17_0.jpg)
    




```python
new_pict.save(path='example.jpg')
```
