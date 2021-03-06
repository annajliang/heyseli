import React from 'react';
import imgLogo from './logo.png';
import imgGen from './gen_order_screen.png';
import imgBalances from './balances_screen.png';

export default {
  name: 'bZx',
  link: 'bzx',
  platforms: ['Web'],
  desc: (
    <div>
      <p>
        A decentralized margin trading cryptocurrency exchange for ERC20 tokens.
      </p>

      <p>
        I was responsible for writing the Javascript library for dApp developers
        to integrate bZx into their applications. I worked in a team of three to
        successfully integrate the library with the bZx portal and bzX smart
        contracts and deploy onto the Ropsten and Kovan testnets.
      </p>
    </div>
  ),
  tech: [
    'Javascript',
    'React',
    'Solidity',
    'Jest',
    'Git',
    'web3.js',
    'Metamask'
  ],
  url: [
    { name: 'Website', value: 'https://bzx.network/' },
    { name: 'Github', value: 'https://github.com/b0xNetwork/b0x.js' }
  ],
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [imgGen, imgBalances],
  year: 2018
};
