# Streamlined API performance tuning


## Introduction

This Notebook provides some tips and tricks on improving the performance of the Streamlined API.

The Streamlined API is a productivity layer that wraps the Foundation Layer. It typically loads a lot of information for the user in anticipation that the user will need it, which  makes exploratory work in interactive sessions (such as in Jupyter Notebooks) very powerful as a tool. The examples below show some coding approaches that may improve the speed and performance of your programs.


## Disclaimer

Execution times for some of the functions are shown, however, note that performance depends fundamentally on your hardware setup and connection speed, and on previously-executed code in the same Notebook, amongst other factors. We cannot guarantee that the saved outputs in this Notebook will match what you will see, and they are intended primarily as a guide rather than a benchmark.

## Establishing a Session

The first steps in any MI Scripting Toolkit script are to make a connection to a Granta MI Service Layer, then fetch a database and table. The three objects, and the fastest ways of acquiring them, are as follows:

1. `Session` - `mpy.connect()` is the fastest way to create a session.
2. `Database` - `Session.get_db()` is the fastest way to fetch a database
3. `Table` - `Database.get_table()` is the fastest way to fetch a table

`get_db` and `get_table`, however, actually fetch *all* the databases and *all* the tables (for the selected database) and just return the one that was asked for. The results are then cached; this means those calls to the Service Layer will not be repeated when the objects are accessed again. You can see the effect of this when re-running the cell below multiple times.


```python
from GRANTA_MIScriptingToolkit import granta as mpy
import time

mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
# all tables & databases are cached when requested
start = time.time()
db = mi.get_db(db_key='MI_Training')
tab = db.get_table('Design Data')
milestone1 = time.time()
db = mi.get_db(db_key='MI_Training')
tab = db.get_table('Design Data')
end = time.time()

print('{:4.4f} s - Time elapsed to reach the first milestone'.format(milestone1 - start))
print('{:4.4f} s - Time elapsed between milestone 1 and the end'.format(end - milestone1))

# ALL are cached, so subsequent requests for different tables will still be quick.
start = time.time()
tab = db.get_table('MaterialUniverse')
end = time.time()
print('{:4.4f} s - Time elapsed getting the MaterialUniverse table'.format(end - milestone1))
```

    2.1402 s - Time elapsed to reach the first milestone
    0.0000 s - Time elapsed between milestone 1 and the end
    0.0018 s - Time elapsed getting the MaterialUniverse table
    

## Locating records

There are many search methods in the Streamlined API and all of them make a single Service Layer call when executed.

There are, however, some methods that get records from a table and also populate caches which can be useful. For example, if you have some very specific filtering that you want to apply to all records that cannot be found using the existing functionality, such as a list of all records with 3 or more children. In this case, you could use `Table.all_records()` to return a list of all records in the table and populate the children of each record, in one call. You would then apply your own search filters to the record list to execute a search.


```python
start = time.time()
recs = tab.all_records(include_folders=True, include_generics=True)
milestone1 = time.time()
filtered_recs = [r for r in recs if len(r.children) > 3]
end = time.time()
print('{:4.4f} s - Time elapsed to reach the first milestone'.format(milestone1 - start))
print('{:4.4f} s - Time elapsed between milestone 1 and the end'.format(end - milestone1))
```

    0.4841 s - Time elapsed to reach the first milestone
    0.0000 s - Time elapsed between milestone 1 and the end
    


```python
filtered_recs
```




    [<Record long name: Alumino silicate glass>,
     <Record long name: Glasses>,
     <Record long name: Ceramics and glasses>,
     <Record long name: Wrought>,
     <Record long name: Low alloy steel>,
     <Record long name: Ferrous alloys>,
     <Record long name: Wrought aluminum alloy>,
     <Record long name: Aluminum>,
     <Record long name: Titanium alpha-beta alloy>,
     <Record long name: Titanium>,
     <Record long name: Non-ferrous alloys>,
     <Record long name: Metals and alloys>,
     <Record long name: PVC-elastomer (Polyvinyl Chloride elastomer)>,
     <Record long name: Thermoplastic elastomers (TPE)>,
     <Record long name: Elastomers>,
     <Record long name: ABS - unfilled>,
     <Record long name: PMMA - unfilled>,
     <Record long name: PMMA - unfilled>,
     <Record long name: Thermoplastics>,
     <Record long name: Plastics>,
     <Record long name: Polymers: plastics, elastomers>]



## Creating records

Records are normally created using the `table` object through `Table.create_record`, however, when creating a record at a specific (known) location in the tree, it can be time consuming to fetch the record objects in the path needed to assign the correct parent. For this use case, we have added two methods which take a path (or paths) through the tree and traverse it, creating any nodes that don't already exist along the way.

These two methods exist on the `Table` object:

1. `Table.path_from` - Check for the existence of a path through the table and create it if it does not exist
2. `Table.paths_from` - Create multiple paths in one call


```python
import datetime

# create a new top-level record
tab = db.get_table('Training Exercise for Import')
rec = mi.update([tab.create_record('Top-level folder {}'.format(str(datetime.datetime.now())), folder=True)],
                                   refresh_attributes=False)[0]
rec.children
```




    []




```python
end_leaf = tab.path_from(rec, ['our', 'new', 'path'], end_node='and optional record', color=mpy.RecordColor.Fuchsia)
end_leaf.path
```




    ['Top-level folder 2023-09-01 15:53:27.597210', 'our', 'new', 'path']




```python
# any folders that already exist in a path will not be altered, even if we alter the arguments
end_leaf = tab.path_from(rec, ['our', 'new', 'route'], end_node='and optional record', color=mpy.RecordColor.Silver)
end_leaf.path
```




    ['Top-level folder 2023-09-01 15:53:27.597210', 'our', 'new', 'route']



## Accessing attributes and links

The first time you call `Record.attributes`, the Streamlined API checks to see if the `attributes` property has been populated yet. If not, it will automatically  populate it with all the attributes on the record. This is inefficient if you are only interested in one or two attributes. The same is true of `links`. We provide two `Table` methods which can be used to ensure only the objects you are interested in are fetched.

* `Table.bulk_fetch` - fetches specified attributes for specified records
    * If an attribute is not populated, an empty attribute object is added to the dictionary instead
* `Table.bulk_link_fetch` - fetches specified link groups for specified records

These will fetch data for _just_ the attributes and records you specify; the properties will be populated in the record objects you provide and the methods do not return anything.

The most efficient way to access attributes and links is using these two methods.


```python
tab = db.get_table('MaterialUniverse')
recs = tab.all_records()

# bulk_fetch (& all the bulk_xxx methods) can be parallelized by the MI Scripting Toolkit IF you have the cores available
start = time.time()
# populate all attributes on every record
for r in recs:
    _ = r.attributes
    r.decache_attributes
milestone1 = time.time()

# populate all attributes on every record using bulk_fetch
tab.bulk_fetch(recs)

milestone2 = time.time()
# just populate Base and Young's Modulus on every record
tab.bulk_fetch(recs, attributes=['Base', "Young's modulus"], batch_size=5, parallelise=False)

milestone3 = time.time()
# Parallelise the previous command
tab.bulk_fetch(recs, attributes=['Base', "Young's modulus"], batch_size=5, parallelise=True, max_num_threads=3)

end = time.time()
print('{:4.4f} s - Time elapsed to reach the first milestone'.format(milestone1 - start))
print('{:4.4f} s - Time elapsed between milestone 1 and 2'.format(milestone2 - milestone1))
print('{:4.4f} s - Time elapsed between milestone 2 and 3'.format(milestone3 - milestone2))
print('{:4.4f} s - Time elapsed between milestone 2 and the end'.format(end - milestone3))
```

    21.9352 s - Time elapsed to reach the first milestone
    3.8367 s - Time elapsed between milestone 1 and 2
    1.1342 s - Time elapsed between milestone 2 and 3
    0.5672 s - Time elapsed between milestone 2 and the end
    


```python
for r in recs:
    print(r.attributes['Base'].value, r.attributes['Young\'s modulus'].value, r.name)
```

    Oxide {'low': 84.8, 'high': 89.1} Alumino silicate - 1720
    Oxide {'low': 83.9, 'high': 88.1} Alumino silicate - 1723
    Oxide {'low': 84.0, 'high': 88.0} Lithium aluminosilicate
    Oxide {'low': 57.3, 'high': 75.9} Soda barium glass
    Oxide {'low': 66.30000305175781, 'high': 69.69999694824219} Barium silicate
    Carbide {'low': 599.9999999999997, 'high': 670.0000000000003} Tungsten carbide
    Fe (Iron) {'low': 183.0, 'high': 192.38461303710938} 250 maraging steel, maraged at 900F
    Fe (Iron) {'low': 200.0, 'high': 210.25640869140625} Low alloy steel, AISI 4130, air melted, normalized
    Fe (Iron) {'low': 200.0, 'high': 210.25640869140625} Low alloy steel, AISI 4130, air melted, quenched & tempered
    Al (Aluminum) {'low': 69.0, 'high': 76.0} Aluminum, 7075, wrought, T6
    Al (Aluminum) {'low': 69.0, 'high': 72.53845977783203} Aluminum, 7075, wrought, T73
    Ti (Titanium) {'low': 111.0, 'high': 119.0} Titanium, alpha-beta alloy, Ti-6Al-4V, aged
    Ti (Titanium) {'low': 110.0, 'high': 119.0} Titanium, alpha-beta alloy, Ti-6Al-4V, annealed, generic
    Ti (Titanium) {'low': 110.0, 'high': 117.0} Titanium, alpha-beta alloy, Ti-6Al-4V, solution treated & aged
    Polymer {'low': 0.0006011593504808843, 'high': 0.0009381033014506102} PVC-elastomer (Shore A35)
    Polymer {'low': 0.002864203881472349, 'high': 0.0029362563509494066} PVC-elastomer (Shore A55)
    Polymer {'low': 0.00871698185801506, 'high': 0.011692171916365623} PVC-elastomer (Shore A75)
    Polymer {'low': 0.0035647887270897627, 'high': 0.005562817677855492} PVC-elastomer (Shore A75, flame retarded)
    Polymer {'low': 12.399999618530273, 'high': 13.800000190734863} ABS (20% carbon fiber, EMI shielding, conductive)
    Polymer {'low': 5.099999904632568, 'high': 6.070000171661377} ABS (20% glass fiber, injection molding)
    Polymer {'low': 5.796008586883545, 'high': 6.0} ABS (20% glass fiber, injection molding, flame retarded)
    Polymer {'low': 6.800000190734863, 'high': 8.300000190734863} ABS (30% glass fiber, injection molding)
    Polymer {'low': 2.0, 'high': 2.9000000953674316} ABS (extrusion)
    Polymer {'low': 1.9500000476837158, 'high': 2.049999952316284} ABS (transparent, injection molding)
    Polymer {'low': 2.700000047683716, 'high': 2.9000000953674316} PMMA (cast sheet)
    Polymer {'low': 2.4100000858306885, 'high': 3.799999952316284} PMMA (heat resistant)
    Polymer {'low': 1.600000023841858, 'high': 3.299999952316284} PMMA (impact modified)
    Polymer {'low': 2.240000009536743, 'high': 3.240000009536743} PMMA (molding and extrusion)
    None None PMMA - unfilled
    Other {'low': 0.10000000149011612, 'high': 0.5} Leather
    


```python
tab = db.get_table('Metals Pedigree')
recs = tab.all_records(include_folders=False)

start = time.time()

# manually fetch the links on each record, one record at a time
for r in recs:
    _ = r.links
    r.decache_links
milestone1 = time.time()

# bulk fetch all links on every record
tab.bulk_link_fetch(recs)

milestone2 = time.time()

# bulk_fetch (& all the bulk_xxx methods) can be parallelized by the MI Scripting Toolkit IF you have the cores available
tab.bulk_link_fetch(recs,
                    link_groups=['Tensile Test Data'],
                    batch_size=5,
                    parallelise=False)
milestone3 = time.time()

# parallelise
tab.bulk_link_fetch(recs,
                    link_groups=['Tensile Test Data'],
                    batch_size=5,
                    parallelise=True,
                    max_num_threads=3)
end = time.time()
print('{:4.4f} s - Time elapsed to reach the first milestone'.format(milestone1 - start))
print('{:4.4f} s - Time elapsed between milestone 1 and 2'.format(milestone2 - milestone1))
print('{:4.4f} s - Time elapsed between milestone 2 and 3'.format(milestone3 - milestone2))
print('{:4.4f} s - Time elapsed between milestone 2 and the end'.format(end - milestone3))
```

    3.0856 s - Time elapsed to reach the first milestone
    0.8676 s - Time elapsed between milestone 1 and 2
    2.0608 s - Time elapsed between milestone 2 and 3
    1.0424 s - Time elapsed between milestone 2 and the end
    


```python
for r in recs:
    print('{} links on record "{}"'.format(len(r.links['Tensile Test Data']), r.name))
```

    10 links on record "Batch 948"
    9 links on record "Batch 943"
    9 links on record "Batch 921"
    8 links on record "Batch 978"
    0 links on record "2X2301A"
    

## Import records

There is one method to import/update records: `Session.update`. In MI Scripting Toolkit 2.1, we added an additional argument which can be used to streamline calls to `Session.update` in specific cases. Normally, after importing records, the MI Scripting Toolkit will fetch the newly imported data on those records to return the results of your changes back to you. However, if you set `refresh_attributes` to `False`, it won't do this, and you can fetch attributes you're interested in (if you want to) using `bulk_fetch`.


```python
tab = db.get_table('MaterialUniverse')
start = time.time()
# Let's create a record and give it some data on a single attribute
new_rec1 = tab.create_record('My new record {}'.format(str(datetime.datetime.now())))
a = new_rec1.attributes['Density']
a.points = [1.3]
new_rec1.set_attributes([a])
# This will re-fetch the record's attributes after setting them, in case anything has changed on the server!
new_rec1 = mi.update([new_rec1])[0]
milestone1 = time.time()

# Do the same again
new_rec2 = tab.create_record('My new record {}'.format(str(datetime.datetime.now())))
a = new_rec2.attributes['Density']
a.points = [1.3]
new_rec2.set_attributes([a])
# This time we won't refetch the attributes because we only care about the attribute we edited: 'Density'
new_rec2 = mi.update([new_rec2], refresh_attributes=False)[0]
# Instead we do it ourselves in an additional line of code
tab.bulk_fetch([new_rec2], attributes=['Density'])
end = time.time()

# How long did both processes take?
print('{:4.4f} s - Time elapsed to reach the first milestone'.format(milestone1 - start))
print('{:4.4f} s - Time elapsed between milestone 1 and the end'.format(end - milestone1))
```

    0.7416 s - Time elapsed to reach the first milestone
    0.2614 s - Time elapsed between milestone 1 and the end
    

## Deleting records & release states

In addition to the methods shown above, record deletion and fetching of release states can also be performed in bulk. Unlike link fetching and attribute fetching, these are **NOT** table-specific methods, and so they exist as methods on the `Session` class. This means, for example, that records can be deleted from multiple tables and databases simultaneously. Both `Session`-level bulk methods can be parallelized and batched like their `Table`-level siblings. The two methods are called:

1. `Session.bulk_fetch_release_states`
1. `Session.bulk_delete_or_withdraw_records`

On the whole, these methods are less pervasive, but are still worth demonstrating should you ever need to use them!


```python
# Let's take some of the record's we've created in this example, fetch their release states, then delete them!
# but let's split them into two batches, and compare the times taken doing things individually versus in bulk
individuals = [new_rec1, new_rec2]
bulk_batch = [end_leaf, rec]

print(' Individual Records ')
print(' ------------------ ')
print()
start = time.time()
for r in individuals:
    print(r.release_state)
milestone1 = time.time()
for r in individuals:
    r.delete_or_withdraw_record_on_server()
end = time.time()
print('{:4.4f} s - Time to fetch release states'.format(milestone1 - start))
print('{:4.4f} s - Time to manually delete the records'.format(end - milestone1))

print()

print(' Bulk batched Records ')
print(' -------------------- ')
print()
start = time.time()
mi.bulk_fetch_release_states(bulk_batch)
for r in bulk_batch:
    print(r.release_state)
milestone1 = time.time()
mi.bulk_delete_or_withdraw_records(bulk_batch)
end = time.time()
print('{:4.4f} s - Time to bulk fetch release states'.format(milestone1 - start))
print('{:4.4f} s - Time to bulk delete the records'.format(end - milestone1))
```

     Individual Records 
     ------------------ 
    
    Unversioned
    Unversioned
    0.1505 s - Time to fetch release states
    0.6504 s - Time to manually delete the records
    
     Bulk batched Records 
     -------------------- 
    
    Unversioned
    Unversioned
    0.1012 s - Time to bulk fetch release states
    0.8011 s - Time to bulk delete the records
    

## Conclusion

The optimizations shown above are not significant when working with small amounts of data, and the ease of use provided by the Streamlined API makes it a very powerful tool for small operations. However, as you scale up the operations being undertaken to hundreds, thousands, and tens of thousands of records, the time saved by using these more efficient methods becomes more significant.
