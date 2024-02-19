import './styles.scss';

const items = [
  {
    label: 'SUPPORT',
    items: [
      {
        label: 'Evalart User Guide',
      },
      {
        label: 'Evalart User FAQ',
      },
      {
        label: 'Contact Support',
      },
      {
        label: 'Candidate FAQ',
      },
    ],
  },
  {
    label: 'LEGAL',
    items: [
      {
        label: 'Terms of Service',
      },
      {
        label: 'Privacy Policy',
      },
    ],
  },
  {
    label: 'COMPANY',
    items: [
      {
        label: 'About Us',
      },
      {
        label: 'Blog',
      },
      {
        label: 'Reliability And Validity Of Evalart Tests',
      },
    ],
  },
  {
    label: 'CONTACT',
    items: [
      {
        label: 'Contact Us',
      },
      {
        label: 'Noosa Labs Inc - Miami, FL, USA',
      },
    ],
  },
];

export const Footer = () => {
  return (
    <section>
      <div className="footer-contact">
        {items.map((item) => {
          return (
            <div key={item.label}>
              <h2>{item.label}</h2>
              <ul>
                {item.items.map((subItem) => {
                  return <li key={subItem.label}>{subItem.label}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <footer>
        <ul>
          <li>HOME</li>
          <li>HOW IT WORKS</li>
          <li>FEATURES</li>
          <li>REQUEST A QUOTE</li>
          <li>FREE TRIAL</li>
          <li>LOGIN</li>
          <li>CONTACT US</li>
          <li>JOB DESCRIPTIONS</li>
        </ul>
        <li>&copy; 2022 EVALART, ALL RIGHTS RESERVED.</li>
      </footer>
    </section>
  );
};
