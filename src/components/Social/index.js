import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function Social({ twitter, youtube, telegram, email, rss, android, itunes, soundcloud, english }) {
  return (
    <Wrapper>
        <SocialLink href={twitter} target="_blank">
          Twitter
        </SocialLink>
        <SocialLink href={youtube} target="_blank">
          YouTube
        </SocialLink>
        <SocialLink href={telegram} target="_blank">
            Telegram
        </SocialLink>
        <SocialLink href={email}>
            E-mail
        </SocialLink>
        <SocialLink href={rss} target="_blank">
            RSS
        </SocialLink>
        <SocialLink href={android} target="_blank">
            Subscribe on Android
        </SocialLink>
        <SocialLink href={itunes} target="_blank">
            iTunes
        </SocialLink>
        <SocialLink href={soundcloud} target="_blank">
            SoundCloud
        </SocialLink>
        <SocialLink href={english} target="_blank">
            English version
        </SocialLink>

        <SocialLink href="https://holyjs-moscow.ru/" target="_blank">
            <strong style={{color: "darkred"}}>HolyJS 2018 Moscow, 24-25 ноября в Москве - 5minreactpromo</strong>
        </SocialLink>
    </Wrapper>
  );
}

export default Social;
