const buttonComponent = ({ url, to, ...props }) => {
  if (url) {
    // External link styled as button
    return <a href={url}>External link</a>;
  }
  if (to) {
    // React router link styled as button
    return <Link to={internalRoute}>Internal route</Link>;
  } else {
    // Actual button primitive
    return <button>Click me</button>;
  }
};
