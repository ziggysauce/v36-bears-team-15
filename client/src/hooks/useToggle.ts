import { useState, useCallback } from 'react';

export type ToggleProps = boolean | (() => boolean);

export function useToggle(initState: ToggleProps = false) {
  const [isToggled, setToggled] = useState<boolean>(initState);

  const toggle = useCallback(
    (): void => setToggled((isToggled) => !isToggled),
    [],
  );
  // as const fix Typescript inference problem
  return [isToggled, toggle] as const;
}
