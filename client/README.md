# Peak Productivity

Track your progress!

`Update this readme whenever you add a deps to allow other people do less docs googling.`
`Check the commit rule

## Commit Rules

### Problems

The following rules are considered problems for `@commitlint/config-conventional` and will yield a non-zero exit code when not met.

Consult [docs/rules](https://conventional-changelog.github.io/commitlint/#/reference-rules) for a list of available rules.

#### type-enum

- **condition**: `type` is found in value
- **rule**: `always`
- **level**: `error`
- **value**

  ```js
  [
    'build',
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test',
  ];
  ```

```sh
echo "foo: some message" # fails
echo "fix: some message" # passes
```

## Useful tools

### `First of all`, make sure you cd into client directory, if u don't do it, just pass --cwd flag for yarn

I'm not sure what do you pass for

Borrowed this idea from boilerplate tool, originally it's an angular thing.
`There's PlopJs dev deps. It will let you create all the component files on the fly. Always use this command when making a component.`

I will think about expanding this script to allow hooks, pages, and api generation. Or if you feel there's a repeated pattern.
Feel free to implement it yourself. It truly saves development time.

Run this command:

```js
 npm run generate
```

`A folder with 4 files will be created: containing index.tsx, stories.tsx, styles.tsx, and test.tsx.`
If you don't want to write granular stories that's absolutely fine, meaning giving ability to handle controls in the storybook.
Same goes for tests. For now do it only if want to learn about it and have time. First implement features from teh user stories.
Then think about learning about tests and messing with storybook. But you should be able to see your components in isolation in either story book or jest.

### `Secondly` all commits are hooks coupled

Meaning if you have errors in your test in the case you do write them, the files won't be committed, linting is also always run, when you commit. So, commit takes some time to execute.

### `Reminder` do not work with Main component

This is purely an example of snapshot testing for now. If you end up modifying it, or work with snapshot tests.

```js
 npm run update:snapshot
```

### `Most Used Commands`

If I add more or expand functionality to the pipelines, I will notify you.

```js
 npm run dev
 npm run lint
 npm run format
 npm run test
 npm run test:watch
 npm run prepare
 npm run storybook
```

Needs to be run in order for all the snapshots to be updated. Else, you will get an error by jest if you try to commit without updated snapshots. If the component was modified.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Branches and Tags

## Quick Legend

<table>
  <thead>
    <tr>
      <th>Instance</th>
      <th>Branch</th>
      <th>Description, Instructions, Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stable</td>
      <td>stable</td>
      <td>Accepts merges from Working and Hotfixes</td>
    </tr>
    <tr>
      <td>Working</td>
      <td>main</td>
      <td>Accepts merges from Features/Issues and Hotfixes</td>
    </tr>
    <tr>
      <td>Features/Issues</td>
      <td>topic-*</td>
      <td>Always branch off HEAD of Working</td>
    </tr>
    <tr>
      <td>Hotfix</td>
      <td>hotfix-*</td>
      <td>Always branch off Stable</td>
    </tr>
  </tbody>
</table>

## Main Branches

The main repository will always hold two evergreen branches:

- `main`
- `stable`

The main branch should be considered `origin/main` and will be the main branch where the source code of `HEAD` always reflects a state with the latest delivered development changes for the next release. As a developer, you will be branching and merging from `main`.

Consider `origin/stable` to always represent the latest code deployed to production. During day to day development, the `stable` branch will not be interacted with.

When the source code in the `main` branch is stable and has been deployed, all of the changes will be merged into `stable` and tagged with a release number. _How this is done in detail will be discussed later._

## Supporting Branches

Supporting branches are used to aid parallel development between team members, ease tracking of features, and to assist in quickly fixing live production problems. Unlike the main branches, these branches always have a limited life time, since they will be removed eventually.

The different types of branches we may use are:

- Feature branches
- Bug branches
- Hotfix branches

Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets. Each branch and its usage is explained below.

### Feature Branches

Feature branches are used when developing a new feature or enhancement which has the potential of a development lifespan longer than a single deployment. When starting development, the deployment in which this feature will be released may not be known. No matter when the feature branch will be finished, it will always be merged back into the main branch.

During the lifespan of the feature development, the lead should watch the `main` branch (network tool or branch tool in GitHub) to see if there have been commits since the feature was branched. Any and all changes to `main` should be merged into the feature before merging back to `main`; this can be done at various times during the project or at the end, but time to handle merge conflicts should be accounted for.

`<tbd number>` represents the project to which Project Management will be tracked.

- Must branch from: `main`
- Must merge back into: `main`
- Branch naming convention: `feature-<tbd number>`

#### Working with a feature branch

If the branch does not exist yet (check with the Lead), create the branch locally and then push to GitHub. A feature branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
git checkout -b feature-id main                 // creates a local branch for the new feature
git push origin feature-id                        // makes the new feature remotely available
```

Periodically, changes made to `main` (if any) should be merged back into your feature branch.

```
git merge main                                  // merges changes from main into feature branch
```

When development on the feature is complete, the lead (or engineer in charge) should merge changes into `main` and then make sure the remote branch is deleted.

```
git checkout main                               // change to the main branch
git merge --no-ff feature-id                      // makes sure to create a commit object during merge
git push origin main                            // push merge changes
git push origin :feature-id                       // deletes the remote branch
```

### Bug Branches

Bug branches differ from feature branches only semantically. Bug branches will be created when there is a bug on the live site that should be fixed and merged into the next deployment. For that reason, a bug branch typically will not last longer than one deployment cycle. Additionally, bug branches are used to explicitly track the difference between bug development and feature development. No matter when the bug branch will be finished, it will always be merged back into `main`.

Although likelihood will be less, during the lifespan of the bug development, the lead should watch the `main` branch (network tool or branch tool in GitHub) to see if there have been commits since the bug was branched. Any and all changes to `main` should be merged into the bug before merging back to `main`; this can be done at various times during the project or at the end, but time to handle merge conflicts should be accounted for.

`<tbd number>` represents the Basecamp project to which Project Management will be tracked.

- Must branch from: `main`
- Must merge back into: `main`
- Branch naming convention: `bug-<tbd number>`

#### Working with a bug branch

If the branch does not exist yet (check with the Lead), create the branch locally and then push to GitHub. A bug branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
git checkout -b bug-id main                     // creates a local branch for the new bug
git push origin bug-id                            // makes the new bug remotely available
```

Periodically, changes made to `main` (if any) should be merged back into your bug branch.

```
git merge main                                  // merges changes from main into bug branch
```

When development on the bug is complete, [the Lead] should merge changes into `main` and then make sure the remote branch is deleted.

```
git checkout main                               // change to the main branch
git merge --no-ff bug-id                          // makes sure to create a commit object during merge
git push origin main                            // push merge changes
git push origin :bug-id                           // deletes the remote branch
```

### Hotfix Branches

A hotfix branch comes from the need to act immediately upon an undesired state of a live production version. Additionally, because of the urgency, a hotfix is not required to be be pushed during a scheduled deployment. Due to these requirements, a hotfix branch is always branched from a tagged `stable` branch. This is done for two reasons:

- Development on the `main` branch can continue while the hotfix is being addressed.
- A tagged `stable` branch still represents what is in production. At the point in time where a hotfix is needed, there could have been multiple commits to `main` which would then no longer represent production.

`<tbd number>` represents the Basecamp project to which Project Management will be tracked.

- Must branch from: tagged `stable`
- Must merge back into: `main` and `stable`
- Branch naming convention: `hotfix-<tbd number>`

#### Working with a hotfix branch

If the branch does not exist yet (check with the Lead), create the branch locally and then push to GitHub. A hotfix branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
git checkout -b hotfix-id stable                  // creates a local branch for the new hotfix
git push origin hotfix-id                         // makes the new hotfix remotely available
```

When development on the hotfix is complete, [the Lead] should merge changes into `stable` and then update the tag.

```
git checkout stable                               // change to the stable branch
git merge --no-ff hotfix-id                       // forces creation of commit object during merge
git tag -a <tag>                                  // tags the fix
git push origin stable --tags                     // push tag changes
```

Merge changes into `main` so not to lose the hotfix and then delete the remote hotfix branch.

```
git checkout main                               // change to the main branch
git merge --no-ff hotfix-id                       // forces creation of commit object during merge
git push origin main                            // push merge changes
git push origin :hotfix-id                        // deletes the remote branch
```

## Workflow Diagram

![Git Branching Model](https://raw.githubusercontent.com/digitaljhelms/public/main/gitflow-model.png)
_[gitflow-model.src.key](https://github.com/digitaljhelms/public/raw/main/gitflow-model.src.key)_

## Other Material

- [Git/GitHub commit standards & conventions](https://gist.github.com/digitaljhelms/3761873)
- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/) (the basis for this flow model)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React](https://reactjs.org/)
- [React-DOM](https://www.npmjs.com/package/react-dom)
- [NextAuth](https://next-auth.js.org/getting-started/client#signin)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Typescript](https://www.typescriptlang.org/docs/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
