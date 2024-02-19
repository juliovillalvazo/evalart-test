import {
  EnvironmentFilled,
  ClockCircleOutlined,
  MailFilled,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  GooglePlusSquareFilled,
  DownOutlined,
  XOutlined,
} from '@ant-design/icons';
import { Dropdown, MenuProps, Typography } from 'antd';
import { useCallback, useMemo, useState } from 'react';

/**
 * Renders the top bar component for the community section.
 * Displays community features and provides options for language selection.
 */
export const CommunityTopBar = () => {
  const tags: { icon: 'location' | 'watch' | 'email'; label: string }[] =
    useMemo(
      () => [
        { icon: 'location', label: 'Global Presence' },
        { icon: 'watch', label: 'Platform Available 24/7' },
        { icon: 'email', label: 'evalart@evalart.com' },
      ],
      []
    );

  return (
    <div className="community-top-bar">
      <div className="community-features">
        {tags.map(({ icon, label }, index) => {
          return (
            <div className="item-container" key={icon}>
              <TopBarItem icon={icon} label={label} />
              {index < tags.length - 1 && <span className="separator">|</span>}
            </div>
          );
        })}
      </div>
      <div className="community-cta">
        <CommunityIcons />
        <LanguageSelector />
      </div>
    </div>
  );
};

type TopBarItemProps = {
  icon: 'location' | 'watch' | 'email';
  label: string;
};

/**
 * Represents a top bar item component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.icon - The icon name.
 * @param {string} props.label - The label text.
 * @returns {JSX.Element} The rendered top bar item.
 */
const TopBarItem: React.FC<TopBarItemProps> = ({ icon, label }) => {
  const Icon = useMemo(() => {
    switch (icon) {
      case 'location':
        return <EnvironmentFilled color="white" size={12} />;
      case 'watch':
        return <ClockCircleOutlined color="white" size={12} />;
      default:
        return <MailFilled color="white" size={12} />;
    }
  }, [icon]);

  return (
    <div className="top-bar-item">
      {Icon}&nbsp;
      {label}
    </div>
  );
};

/**
 * Renders the community icons.
 * TODO add the correct hrefs
 * @returns JSX.Element
 */
const CommunityIcons = () => {
  return (
    <div className="community-icons-container">
      <a href="/">
        <FacebookFilled />
      </a>
      <a href="/">
        <XOutlined />
      </a>
      <a href="/">
        <LinkedinFilled />
      </a>
      <a href="/">
        <InstagramFilled />
      </a>
      <a href="/">
        <GooglePlusSquareFilled />
      </a>
    </div>
  );
};

const items: MenuProps['items'] = [
  {
    key: 'es',
    label: 'Español',
  },
  {
    key: 'en',
    label: 'English',
  },
  {
    key: 'pt',
    label: 'Português do Brasil',
  },
];

/**
 * LanguageSelector component.
 *
 * @returns The LanguageSelector component.
 */
const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleSelect = useCallback(
    (key: string) => {
      setSelectedLanguage(key);
    },
    [setSelectedLanguage]
  );

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ['en'],
        onSelect: ({ key }) => handleSelect(key),
      }}
      className="language-selector"
    >
      <Typography.Link className="antd-link">
        {selectedLanguage} <DownOutlined />
      </Typography.Link>
    </Dropdown>
  );
};
