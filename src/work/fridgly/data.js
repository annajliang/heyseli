import React from 'react';
import imgLogo from './logo.png';

export default {
  name: 'Fridgly',
  link: 'fridgly',
  platforms: ['Android'],
  desc: (
    <p>
      An app that helps you keep track of your food expiration dates. It syncs
      with your Google Calendar to help remind you of when things are going to
      expire and when you should finish eating them. I was responsible for all
      aspects of the app, including design, front-end development, SQLite
      integration, API calls, and app store publication.
    </p>
  ),

  tech: ['Java', 'Android Studio', 'Inkscape', 'Pixelmator', 'XML'],
  url:
    'https://play.google.com/store/apps/details?id=com.aheadstudios.foodcalendar',
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: ['main.png', 'meat.png', 'meat-veal.png', 'fridge.png'],
  year: 2015
};
