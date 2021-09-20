import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faReddit,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'twin.macro';
import { SocialLink } from './SocialLink';

const socialSites = [
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/j-berns/',
  },
  {
    icon: faGithub,
    href: 'https://github.com/jberns',
  },
  {
    icon: faTwitter,
    href: 'https://twitter.com/joshstein',
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/joshmech/',
  },
  {
    icon: faReddit,
    href: 'https://www.reddit.com/user/joshbuildsstuff',
  },
  {
    icon: faFacebook,
    href: 'https://www.facebook.com/bernstein.josh/',
  },
];

export const Social = () => {
  return (
    <div tw="flex space-x-4">
      {socialSites.map((site) => {
        return (
          <SocialLink key={site.href} href={site.href}>
            <FontAwesomeIcon icon={site.icon} tw="text-lg" />
          </SocialLink>
        );
      })}
    </div>
  );
};
