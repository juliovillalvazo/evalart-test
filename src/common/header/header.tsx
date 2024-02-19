import { CommunityTopBar } from './components/CommunityTopBar';
import { Layout, Menu } from 'antd';
import './styles.scss';

export const Header: React.FC = () => {
  return (
    <header>
      <CommunityTopBar />
      <Layout.Header className="main-header">
        <img
          src="https://cdn.evalart.com/wp-content/uploads/2016/11/logo.png"
          alt="evalart-logo"
        />
        <Menu
          theme="light"
          mode="horizontal"
          className="main-header-menu"
          defaultSelectedKeys={['3']}
          selectedKeys={['3']}
          items={[
            { key: '1', label: 'HOME' },
            { key: '2', label: 'HOW IT WORKS' },
            { key: '3', label: 'FEATURES' },
            { key: '4', label: 'TEST LIBRARY' },
            { key: '5', label: 'PRICING' },
            { key: '6', label: 'FREE TRIAL' },
            { key: '7', label: 'LOGIN' },
          ]}
        />
      </Layout.Header>
    </header>
  );
};
