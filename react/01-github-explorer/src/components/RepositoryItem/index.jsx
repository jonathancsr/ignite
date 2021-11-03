import React from "react";
import './style.scss'

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.name ?? 'Default description'}</p>

      <a href={props.repository?.html_url} target="blank">Access repository</a>
    </li>
  );
}
