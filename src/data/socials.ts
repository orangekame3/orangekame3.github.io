export type SocialIcon = 'github' | 'twitter' | 'linkedin' | 'email';

export interface Social {
  name: string;
  href: string;
  icon: SocialIcon;
}

export const socials: Social[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/orangekame3',
    icon: 'github',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/orangekame3',
    icon: 'twitter',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/takafumi-miyanaga-4476131a6',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    href: 'mailto:miya.org.0309@gmail.com',
    icon: 'email',
  },
];
