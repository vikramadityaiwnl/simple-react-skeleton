# Simple React Skeleton

[![npm version](https://badge.fury.io/js/your-package-name.svg)](https://badge.fury.io/js/simple-react-skeleton.svg) 

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A simple, fast and easy react skeleton component for your projects.

## Installation

You can install this package via npm:

```bash
npm install simple-react-skeleton
```
## Usage/Examples

```typescript
<Skeleton propsOrder={["img", "text", "img", "half-text", "profile"]} />

or

<Skeleton dark>
    <SkeletonText lines={2} />
    <SkeletonImage profile />
    <SkeletonText half />
</Skeleton>
```

### Skeleton Props
The Skeleton component accepts the following props:

```typescript
type AccecptedProps = "img" | "profile" | "text" | "half-text"
```

`propsOrder?: AcceptedProps[]`: The order of skeleton props to be displayed.

`children?: React.ReactNode`: Children elements to be displayed within the skeleton.

`outline?: boolean`: Whether to display an outline for the skeleton.

`style?: React.CSSProperties`: Custom CSS styles for the skeleton.

`dark?: boolean`: If true, the skeleton is rendered in dark mode or light mode by default.

### Skeleton Text Props

The SkeletonText component accepts the following props:

`lines?: number`: The number of lines to be displayed as skeleton text.

`half?: boolean`: Whether the text width should be half.

```typescript
<SkeletonText lines={2} /> or <SkeletonText lines={2} half />
```

### Skeleton Image Props
The SkeletonImage component accepts the following props:

`profile?: boolean`: Whether the image should be displayed as a profile image (circle).

```typescript
<SkeletonImage /> or <SkeletonImage profile />
```
## Screenshots

![App Screenshot](https://engineerskool.com/gif/srsc1.gif)

![App Screenshot](https://engineerskool.com/gif/srsc1d.gif)

![App Screenshot](https://engineerskool.com/gif/srsc2.gif)

![App Screenshot](https://engineerskool.com/gif/srsc2d.gif)

