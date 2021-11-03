import React from "react";

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.name ?? 'Default description'}</p>

      <a href={props.repository?.link ?? '404'} target="blank">Access repository</a>
    </li>
  );
}
