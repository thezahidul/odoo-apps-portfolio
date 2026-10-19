import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './styles.module.css';

function SunIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SystemIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

const MODES = [
  {
    mode: 'light',
    dataMode: 'light',
    label: 'Light',
    Icon: SunIcon,
    title: 'Light mode',
    ariaLabel: 'Switch to light mode',
  },
  {
    mode: 'dark',
    dataMode: 'dark',
    label: 'Dark',
    Icon: MoonIcon,
    title: 'Dark mode',
    ariaLabel: 'Switch to dark mode',
  },
  {
    mode: null,
    dataMode: 'system',
    label: 'System',
    Icon: SystemIcon,
    title: 'System mode',
    ariaLabel: 'Switch to system mode',
  },
];

function ColorModeToggle({
  className,
  buttonClassName,
  respectPrefersColorScheme,
  value,
  onChange,
}) {
  const isBrowser = useIsBrowser();

  const isLight = value === 'light';
  const isDark = value === 'dark';
  const isSystem = value === null || value === 'system';

  return (
    <div
      role="radiogroup"
      aria-label="Color theme switcher"
      className={clsx(styles.toggleGroup, className)}>
      {MODES.map(({mode, dataMode, label, Icon, title, ariaLabel}) => {
        const isActive =
          mode === 'light' ? isLight : mode === 'dark' ? isDark : isSystem;

        return (
          <button
            key={label}
            data-mode={dataMode}
            role="radio"
            aria-checked={isBrowser ? isActive : undefined}
            aria-label={ariaLabel}
            title={title}
            type="button"
            className={clsx(
              'clean-btn',
              styles.toggleBtn,
              isBrowser && isActive && styles.toggleBtnActive,
              buttonClassName,
            )}
            onClick={() => onChange(mode)}>
            <Icon className={styles.btnIcon} />
            <span className={styles.btnText}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default React.memo(ColorModeToggle);
