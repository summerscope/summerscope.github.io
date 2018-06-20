const linkComponent = ({ url, to, ...props }) => {
  if (url) {
    // External link styled as button
    return <a href={url}>External link</a>;
  } else {
    // React router link styled as button
    return <Link to={internalRoute}>Internal route</Link>;
  }
};
