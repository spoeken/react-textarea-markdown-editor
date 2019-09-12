import classNames from 'classnames';
import * as React from 'react';
import { useContext } from 'react';
import EditorContext from './EditorContext';
import { IMarker } from './type';

export interface IEditorMarkerProps {
  config: IMarker;
  className?: string;
  onClick?: () => void;
  removeInnerClass?: boolean;
}

const EditorMarker: React.FunctionComponent<IEditorMarkerProps> = props => {
  const { mark } = useContext(EditorContext);
  const { config } = props;
  return (
    <span
      onClick={() => {
        mark!(config.prefix, config.suffix, config.defaultText || '', config.multipleLine || false);
        if (props.onClick) {
          props.onClick();
        }
      }}
      className={classNames({ 'tme-menu-item-inner': !props.removeInnerClass }, props.className)}
    >
      {config.name}
    </span>
  );
};

export default EditorMarker;
