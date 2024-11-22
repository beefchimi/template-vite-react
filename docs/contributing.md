# Contributing

> **Campground-rules apply:** Always leave the area in a better condition than you found it.

Anyone working in this repo is expected to abide by the same set of standards:

1. Follow the rules of the repo.
   - You have read all the documentation and are conforming to the code-style and practices present in the codebase.
   - You incorporate “campground rules” as you work.
   - Where relevant, you document your work _(tests, stories, etc)_.
2. Communicate clearly.
   - Communication is hard. Doing it well takes time and effort. Do not sacrifice clear communication for speed of delivery.
   - When documenting an issue or PR, you MUST include all of the relevant context. Reviewers are not oracles!
   - Leverage [Loom](https://loom.com) for video hosting, or put the relevant media directly into GitHub.
3. Respect the review.
   - Engage in constructive conversations. Do not ignore or disregard comments.
   - Be open-minded about change-requests, new ideas, etc. Do not dismiss comments simply because they would incur more time or compete with your original vision.
   - Be mindful of deadlines and expectations put on yourself / other developers. Sometimes, we have to accept some level of tech-debt in order to satisfy the conditions of a project.
4. Close the loop.
   - Always reference the issue ticket when putting up PRs _(unless none exists)_.
   - Return to that issue ticket to include a link to the PR, as well as any relevant context.
   - Create new issues for any follow-up tasks, including the relevant context.

## Code review

Every PR opened needs to be approved by at least 1 reviewer. We recommend that you elect 2 reviewers for any non-trivial code change.

GitHub will often suggest a relevant list of review candidates when you first open your PR. If one cannot be found, or you are unsure of who to ping, feel free to assign the entire `@team/frontend` group as reviewers. Most PRs will not require the participation of the entire group, so we encouraged those who receive the ping to quickly assign themselves as reviewer and unassign the `@team/frontend` group. This helps remove confusion about who is owning the review and spares us any redundant review efforts.

The `@team/frontend` group can be leveraged in GitHub comments as well. It is often a good idea to utilize this group when the contents of an issue or PR will have widespread implications for the codebase. It is important to inform the rest of the team of major changes.

## Icons

> TODO: This section needs more clarity!

All icons should be pre-optimized before adding to the repo.

## Storybook

We rely on `Storybook` to document our UI components. This is a very important tool for developers not only during the build-phase, but also for component discovery.

**You are expected to:**

1. Craft stories for any new UI components.
2. Maintain stories for any components that you change.
3. Always check that `Storybook` still runs before submitting your PRs.
   - The current tooling for `Storybook` is not good enough to inform us when we have broken the build without manually running it.

```sh
npm run storybook
```
