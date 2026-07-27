# Sandbox to production promotion

This repository uses a label-based workflow to promote documentation from the `sandbox` branch to `main` at FCA without requiring teams to manually cherry-pick their commits.

## Workflow overview

1. Create and merge a pull request into `sandbox`.
2. Verify the documentation on the sandbox website.
3. Add the `ready-for-prod` label to the merged sandbox pull request.
4. At FCA, the scheduled promotion workflow creates a pull request to `main` for each queued change.
5. Merge the production pull request to publish to prod.

Because each team works in its own `docs/<product>/.../versions/...` folder, promotions can run in parallel without conflicts.

## Team steps

### 1. Merge to sandbox

Open a pull request targeting `sandbox` and merge it as usual.

### 2. Verify on sandbox

Check the updated documentation on the sandbox site.

### 3. Request production promotion

On the merged sandbox pull request, add the label:

`ready-for-prod`

A validation workflow confirms that:

- the pull request targets `sandbox`
- the pull request is merged
- only one product version directory under `docs/` was changed

If validation succeeds, the pull request is queued for the next FCA promotion run.

## Labels

Create these labels in the repository if they do not already exist:

| Label | Purpose |
| ----- | ------- |
| `ready-for-prod` | Team is happy with sandbox and wants promotion at FCA |
| `promoted-to-main` | Promotion PR to `main` was created |
| `promotion-failed` | Validation or cherry-pick failed |

## FCA promotion run

The workflow `.github/workflows/promote-sandbox-to-main.yml`:

- runs on a schedule at FCA
- can also be started manually from the Actions tab

For a dry run without creating production pull requests:

1. Open **Actions** > **Promote sandbox to main**
2. Click **Run workflow**
3. Enable **dry_run**

## Production pull requests

For each queued sandbox pull request, the workflow:

1. Cherry-picks the sandbox merge commit onto a branch from `main`
2. Opens a pull request to `main`
3. Comments on the original sandbox pull request with the production PR link
4. Replaces `ready-for-prod` with `promoted-to-main`

Merge the production pull request to trigger publication to prod.

## Repository setup

### Workflow permissions

In **Settings** > **Actions** > **General**, set **Workflow permissions** to **Read and write permissions**.

### FCA schedule

Edit `.github/workflows/promote-sandbox-to-main.yml` and set the `schedule.cron` expression to your FCA date and time.

Example for Monday 06:00 UTC:

```yaml
schedule:
  - cron: '0 6 * * 1'
```

## Troubleshooting

### Label added before merge

The validation workflow asks you to wait until the sandbox pull request is merged.

### `promotion-failed` label

Common causes:

- files were changed outside `docs/`
- more than one product version directory was changed
- cherry-pick failed

Remove `promotion-failed`, fix the issue, and add `ready-for-prod` again.

### Change already on `main`

If the sandbox commit is already on `main`, the workflow marks the pull request as `promoted-to-main` automatically.
