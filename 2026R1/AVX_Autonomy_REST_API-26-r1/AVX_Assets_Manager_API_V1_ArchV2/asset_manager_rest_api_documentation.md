## Introduction

The AVxcelerate Asset Manager REST API v0.1.0 is compatible with the AVX Architecture V2.

This REST API allows to perform CRUD (Create, Read, Update, and Delete) operations on resources such as queues, deployments, applications and app-runtime-configurations.

## Features

### Deleting Asset Versions 

This REST API feature allows you to delete specific asset versions from the Explore & Analyze web app. 
For simulation purposes multiple assets can be linked to a logical scenario to provide more information such as maps, driver input files, etc. 
You can create multiple versions depending on your needs. When the version changes you can delete the files. 

Click **Try it out**

#### 1. Retrieve the Asset Id 
Go to the AVx Scenario Manager web app and press
![alt text](icon_asset_manager-1.png)
Select the last part of the Asset URL, as seen below, this is the asset Id. 

![alt text](asset-version-deletion-2-1.png)


Paste it in the **asset_id** field. ![alt text](asset-child-deletion-1.png)


#### 1. Retrieve the Asset version
Go back to the AVx Asset Manager section, get the asset version 

![alt text](asset-version-deletion-3-1.png)
 and paste it in the **asset_version** field. 
 
 ![alt text](asset-child-deletion-1-1.png)

 **Note**: If the Asset isn't linked to any Logical Scenario used for any current or past simulation, the asset will be deleted right away. 
 If the asset was used for a past or current simulation an error message will appear to warn you and inform you it has been used before. 
 You can choose to "force_delete" it but this means any previous simulation job the asset was used with will be lost and the associated data will be lost without any possibility of recovering it. 
To "force_delete" it select "true" in the drop-down.

Add a reason for deleting the asset file in the "deletion_reason" field for audit purposes to allow the information to be tracked for security purposes. 

### Unlinking an Asset Child from an other Asset

This REST API feature allows you to unlink specific asset childs from other assets (logical scenarios, driver inputs, maps etc.) 
For simulation purposes multiple asset childs can be linked to assets to provide more information such as maps, driver input files, etc. 
You can unlink the files when needed. 

#### 1. Retrieve the Asset Id 
Go to the AVx Scenario Manager web app and press ![alt text](icon_asset_manager-3.png)
Select the last part of the Asset URL, as seen below, this is the asset Id. 

![alt text](asset-version-deletion-2-2.png)
Paste it in the "asset_id" field.

 ![alt text](asset-version-deletion-2-3-1.png)


#### 1. Retrieve the Asset Child Id
Go back to the AVx Asset Manager section, get the "Asset Child Id" by clicking the linked asset 

![alt text](asset-child-unlink-id-1.png)
 and get the Id from the last part of the URL, see below ![alt text](asset-child-unlink-id-2-1.png)
and paste it in the "asset_child_id" field.

 ![alt text](asset-version-deletion-2-3-1.png)


Click **Execute**
