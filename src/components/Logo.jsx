import Image from 'next/image';

const logo = '/assets/logo.png';

const Logo = ({ height = "50px"}) => {
  return (
    <div className="flex items-center justify-center" style={{paddingTop: '10px'}}>
      <Image
        src={logo}
        alt="Company Logo"
        width={375}
        height={155}
        priority
        style={{ height, width: 'auto' }}
      />
    </div>
  );
};

export default Logo;