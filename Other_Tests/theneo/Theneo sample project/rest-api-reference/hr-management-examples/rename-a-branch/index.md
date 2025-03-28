Renames a branch in a repository.

**Note:** Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress.

The permissions required to use this endpoint depends on whether you are renaming the default branch.

To rename a non-default branch:

*   Users must have push access.
    
*   Apps must have the `contents:write` repository permission.
    

To rename the default branch:

*   Users must have admin or owner permissions.
    
*   Apps must have the `administration:write` repository permission.