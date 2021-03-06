import React from 'react';
import imgLogo from './logo.png';
import { bfmTechLead } from '../brainfm-web/data';
import imgLaunch from './launch.png';
import imgFocus from './focus.png';
import imgSignup from './signup.png';
import imgHome from './home.png';
import imgExplore from './explore.png';
import imgPlayer from './player.png';
import imgSettings from './settings.png';
import imgDrawer from './drawer.png';

export default {
  name: 'Brain.fm (Mobile)',
  link: 'brainfm-mobile',
  platforms: ['Android', 'iOS'],
  desc: (
    <div>
      <p>
        A mobile app that streams music. It used React Native to support both
        the Android and iOS platforms. I worked in a team of three to stabilize
        the mobile apps after a large number of bugs were being reported by
        users.
      </p>

      <p>
        After the apps were successfully stabilized I worked to implement new
        features as requested by product.
      </p>

      {bfmTechLead}

      <p>
        Later, I was responsible for rearchitecting the mobile apps as the
        orginal mobile app codebase had become too bloated and fragmented to
        work with to fulfill the requirements from product in a reasonable
        timeframe.
      </p>

      <p>
        The iOS app had more than 100,000 installations and the Android app had
        more than 45,000 installations.
      </p>
    </div>
  ),
  tech: [
    'Javascript',
    'React',
    'React Native',
    'Travis',
    'Jenkins',
    'Git',
    'Java'
  ],
  url: [
    {
      name: 'Android',
      value:
        'https://play.google.com/store/apps/details?id=com.brainfm.app&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
    },
    {
      name: 'iOS',
      value:
        'https://apps.apple.com/app/brain-fm-music-for-focus-meditation/id1110684238'
    }
  ],
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [
    imgLaunch,
    imgFocus,
    imgSignup,
    imgHome,
    imgExplore,
    imgPlayer,
    imgSettings,
    imgDrawer
  ],
  year: 2017
};
